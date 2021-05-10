import { Dispatch } from "redux";
import axios from "axios";
import { getDBReqURL } from "../../utils/URLs";
import { Order } from "../../ui/order-list/OrderListProps";
import {
  backendMessageToActionMessage,
  backendResponseOrderToFrontendOrder,
  normalOrderToDBOrder,
} from "../../utils/converters";
import { UserData } from "../../ui/user-data/UserDataProps";
import {
  orderAddBegin,
  orderAddError,
  orderAddSuccess,
  orderDeleteBegin,
  orderDeleteError,
  orderDeleteSuccess,
  ordersFetchBegin,
  ordersFetchError,
  ordersFetchSuccess,
  orderUpdateBegin,
  orderUpdateError,
  orderUpdateSuccess,
} from "../../ui/order-list/OrderListActions";
import { BackendResponseUser } from "../../interfaces/backend-return-types/BackendResponseUser";
import { OrderOrError } from "../../interfaces/json-interfaces/OrderOrError";
import { BackendMessage } from "../../interfaces/BackendMessage";

export const fetchOrders = (
  emailAndPassword: UserData["emailAndPassword"],
  orderIds: BackendResponseUser["orderIds"]
) => {
  return async (dispatch: Dispatch) => {
    try {
      if (!emailAndPassword) {
        dispatch(ordersFetchSuccess([]));
        return;
      }
      dispatch(ordersFetchBegin(emailAndPassword));
      const response: OrderOrError[] = [];
      await Promise.all(
        orderIds.map(async (orderId) => {
          const orderOrError: OrderOrError[] = (await axios.get(getDBReqURL("ORDER", "GET", `?_id=${orderId}`))).data;
          response.push(orderOrError[0]);
        })
      );
      const errorFetches = response.filter((orderOrError) => orderOrError.responseType === "Message");
      if (errorFetches.length !== 0) {
        dispatch(ordersFetchError({ error: true, text: `Failed to fetch ${errorFetches.length} order(s)` }));
        return;
      }
      dispatch(ordersFetchSuccess(response.map((orderOrError) => backendResponseOrderToFrontendOrder(orderOrError))));
    } catch (e) {
      dispatch(ordersFetchError({ error: true, text: e.message }));
    }
  };
};

// todo
export const addOrder = (orderToAdd: Order) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(orderAddBegin(orderToAdd));
      const orderToAddDbFormat = normalOrderToDBOrder(orderToAdd);
      const response: OrderOrError = (
        await axios.post(getDBReqURL("ORDER", "POST", JSON.stringify(orderToAddDbFormat)))
      ).data;
      if (response.responseType === "Message") {
        dispatch(orderAddError({ error: response.error, text: response.message }));
        return;
      }
      dispatch(orderAddSuccess(backendResponseOrderToFrontendOrder(response)));
    } catch (e) {
      dispatch(orderAddError({ error: true, text: e.message }));
    }
  };
};

export const updateOrder = (idOrderToUpdate: Order["orderId"], newOrder: Order) => {
  return async (dispatch: Dispatch) => {
    try {
      const newOrderBackendFormat = normalOrderToDBOrder(newOrder);
      dispatch(orderUpdateBegin(idOrderToUpdate, newOrder));
      const response: BackendMessage[] = (
        await axios.put(getDBReqURL("ORDER", "PUT", `?_id=${idOrderToUpdate}`), JSON.stringify(newOrderBackendFormat))
      ).data;
      const actionMessage = backendMessageToActionMessage(response[0]);
      if (actionMessage.error) {
        dispatch(orderUpdateError(actionMessage));
        return;
      }
      dispatch(orderUpdateSuccess(actionMessage));
    } catch (e) {
      dispatch(orderUpdateError({ error: true, text: e.message }));
    }
  };
};

export const deleteOrder = (idOrderToDelete: Order["orderId"]) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(orderDeleteBegin(idOrderToDelete));
      const response: BackendMessage[] = (await axios.delete(getDBReqURL("ORDER", "DELETE", `?_id=${idOrderToDelete}`)))
        .data;
      const actionMessage = backendMessageToActionMessage(response[0]);
      if (actionMessage.error) {
        dispatch(orderDeleteError(actionMessage));
        return;
      }
      dispatch(orderDeleteSuccess(actionMessage));
    } catch (e) {
      dispatch(orderDeleteError({ error: true, text: e.message }));
    }
  };
};
