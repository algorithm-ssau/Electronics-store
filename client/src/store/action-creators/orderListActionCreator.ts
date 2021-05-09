import { Dispatch } from "redux";
import axios from "axios";
import { getDBReqURL } from "../../utils/URLs";
import { Order, OrderListProps } from "../../ui/order-list/OrderListProps";
import { normalOrderToDBOrder } from "../../utils/converters";
import { UserDataProps } from "../../ui/user-data/UserDataComponentProps";
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
import { Customer } from "../../interfaces/backend-return-types/Customer";
import {OrderGetParamsId} from "../../interfaces/json-interfaces/OrderGetParamsId";

export const fetchOrders = (emailAndPassword: UserDataProps["emailAndPassword"], orderIds: Customer["orderIds"]) => {
  return async (dispatch: Dispatch) => {
    try {
      if (!emailAndPassword) {
        dispatch(ordersFetchSuccess([]));
        return;
      }
      dispatch(ordersFetchBegin(emailAndPassword));
      const orders: OrderListProps["orders"] = [];
      await Promise.all(
        orderIds.map(async (orderId) => {
          const orderOrError: OrderGetParamsId = await axios.get(
            getDBReqURL("ORDER", "GET", `?_id=${orderId}`)
          );
          if (orderOrError.body.) {
          }
        })
      );
      dispatch(ordersFetchSuccess(orders));
    } catch (e) {
      dispatch(ordersFetchError({ error: true, text: e.message }));
    }
  };
};

export const addOrder = (orderToAdd: Order) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(orderAddBegin(orderToAdd));
      const orderToAddDbFormat = normalOrderToDBOrder(orderToAdd);
      const response = await axios.post(getDBReqURL("ORDER", "POST", JSON.stringify(orderToAddDbFormat)));
      dispatch(orderAddSuccess(response.data[0]));
    } catch (e) {
      dispatch(orderAddError({ error: true, text: e.message }));
    }
  };
};

export const updateOrder = (idOrderToUpdate: Order["orderId"], newOrderProps: Order) => {
  return async (dispatch: Dispatch) => {
    try {
      const orderInDbFormat = normalOrderToDBOrder(newOrderProps);
      dispatch(orderUpdateBegin(idOrderToUpdate, newOrderProps));
      const response = await axios.put(
        getDBReqURL("ORDER", "PUT", `?_id=${idOrderToUpdate}`),
        JSON.stringify(orderInDbFormat)
      );
      dispatch(orderUpdateSuccess(response.data[0]));
    } catch (e) {
      dispatch(orderUpdateError({ error: true, text: e.message }));
    }
  };
};

export const deleteOrder = (idOrderToDelete: Order["orderId"]) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(orderDeleteBegin(idOrderToDelete));
      const response = await axios.put(getDBReqURL("ORDER", "PUT", `?_id=${idOrderToDelete}`));
      dispatch(orderDeleteSuccess(response.data[0]));
    } catch (e) {
      dispatch(orderDeleteError({ error: true, text: e.message }));
    }
  };
};
