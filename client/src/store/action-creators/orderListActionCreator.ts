import { Dispatch } from "redux";
import axios from "axios";
import { getDBReqURL } from "../../utils/URLs";
import { Order } from "../../ui/order-list/OrderListProps";
import {
  backendMessageToActionMessage,
  backendResponseOrderToFrontendOrder,
  normalOrderToBackendOrder,
} from "../../utils/converters";
import {
  orderAddBegin,
  orderAddError,
  orderAddSuccess,
  orderDeleteBegin,
  orderDeleteError,
  orderDeleteSuccess,
  ordersClearPerform,
  ordersFetchBegin,
  ordersFetchError,
  ordersFetchSuccess,
  orderUpdateBegin,
  orderUpdateError,
  orderUpdateSuccess,
} from "../../ui/order-list/OrderListActions";
import { OrderOrError } from "../../interfaces/json-interfaces/OrderOrError";
import { BackendMessage } from "../../interfaces/BackendMessage";
import { logger } from "../../utils/logger";
import { OrderToAddBackendFormat } from "../../interfaces/backend-send-types/OrderToAddBackendFormat";
import { store } from "../store";

export const fetchOrders = () => {
  return async (dispatch: Dispatch) => {
    try {
      const { emailAndPassword } = store.getState().currentUser.userDataProps;
      const orderIds = store.getState().currentUser.userDataProps.orders;
      if (emailAndPassword === undefined) {
        return dispatch(
          ordersFetchError({ error: true, text: "Failed to fetch orders, emailAndPassword was undefined" })
        );
      }
      await dispatch(ordersFetchBegin(emailAndPassword));
      const response: OrderOrError[] = [];
      await Promise.all(orderIds.map((orderId) => axios.get(getDBReqURL("ORDER", "GET", `?_id=${orderId}`))))
        .then((resp) =>
          resp.forEach((item) => {
            response.push(item.data[0]);
          })
        )
        .catch((error) => logger.log(error));
      const errorFetches = response.filter((orderOrError) => orderOrError.responseType === "Message");
      if (errorFetches.length !== 0) {
        return dispatch(ordersFetchError({ error: true, text: `Failed to fetch ${errorFetches.length} order(s)` }));
      }
      return dispatch(
        ordersFetchSuccess(response.map((orderOrError) => backendResponseOrderToFrontendOrder(orderOrError)))
      );
    } catch (e) {
      return dispatch(ordersFetchError({ error: true, text: e.message }));
    }
  };
};

export const clearOrders = () => {
  return async (dispatch: Dispatch) => {
    return dispatch(ordersClearPerform());
  };
};

export const addOrder = (orderToAdd: OrderToAddBackendFormat) => {
  return async (dispatch: Dispatch) => {
    try {
      await dispatch(orderAddBegin(orderToAdd));
      const response: OrderOrError[] = (
        await axios.post(getDBReqURL("ORDER", "POST"), JSON.stringify(orderToAdd), {
          headers: {
            "content-type": "application/json",
          },
        })
      ).data;
      if (response[0].responseType === "Message") {
        return dispatch(orderAddError({ error: response[0].error, text: response[0].message }));
      }
      return dispatch(orderAddSuccess(backendResponseOrderToFrontendOrder(response[0])));
    } catch (e) {
      return dispatch(orderAddError({ error: true, text: e.message }));
    }
  };
};

export const updateOrder = (idOrderToUpdate: Order["orderId"], newOrder: Order) => {
  return async (dispatch: Dispatch) => {
    try {
      const newOrderBackendFormat = normalOrderToBackendOrder(newOrder);
      await dispatch(orderUpdateBegin(idOrderToUpdate, newOrder));
      const response: BackendMessage[] = (
        await axios.put(getDBReqURL("ORDER", "PUT", `?_id=${idOrderToUpdate}`), JSON.stringify(newOrderBackendFormat))
      ).data;
      const actionMessage = backendMessageToActionMessage(response[0]);
      if (actionMessage.error) {
        return dispatch(orderUpdateError(actionMessage));
      }
      return dispatch(orderUpdateSuccess(actionMessage));
    } catch (e) {
      return dispatch(orderUpdateError({ error: true, text: e.message }));
    }
  };
};

export const deleteOrder = (idOrderToDelete: Order["orderId"]) => {
  return async (dispatch: Dispatch) => {
    try {
      await dispatch(orderDeleteBegin(idOrderToDelete));
      const response: BackendMessage[] = (await axios.delete(getDBReqURL("ORDER", "DELETE", `?_id=${idOrderToDelete}`)))
        .data;
      const actionMessage = backendMessageToActionMessage(response[0]);
      if (actionMessage.error) {
        return dispatch(orderDeleteError(actionMessage));
      }
      return dispatch(orderDeleteSuccess(actionMessage));
    } catch (e) {
      return dispatch(orderDeleteError({ error: true, text: e.message }));
    }
  };
};
