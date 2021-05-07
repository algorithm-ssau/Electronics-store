import { Dispatch } from "redux";
import axios from "axios";
import {
  addOrderBegin,
  addOrderError,
  addOrderSuccess,
  deleteOrderBegin,
  deleteOrderError,
  deleteOrderSuccess,
  fetchOrdersBegin,
  fetchOrdersError,
  fetchOrdersSuccess,
  updateOrderBegin,
  updateOrderError,
  updateOrderSuccess,
} from "../../ui/order-list/OrderListActions";
import { getDBReqURL } from "../../utils/URLs";
import { Order } from "../../ui/order-list/OrderListProps";
import { normalOrderToDBOrder } from "../../utils/converters";
import { UserDataProps } from "../../ui/user-data/UserDataComponentProps";

export const fetchOrderList = (emailAndPassword: UserDataProps["emailAndPassword"]) => {
  return async (dispatch: Dispatch) => {
    try {
      if (!emailAndPassword) {
        dispatch(fetchOrdersSuccess([]));
        return;
      }
      dispatch(fetchOrdersBegin(emailAndPassword));
      const response = await axios.get(getDBReqURL("CUSTOMER", "GET"));
      const orders =
      dispatch(fetchOrdersSuccess(response.data));
    } catch (e) {
      dispatch(fetchOrdersError({ error: true, text: e.message }));
    }
  };
};

export const addOrder = (orderToAdd: Order) => {
  return async (dispatch: Dispatch) => {
    try {
      const orderToAddDbFormat = normalOrderToDBOrder(orderToAdd);
      dispatch(addOrderBegin(orderToAddDbFormat));
      const response = await axios.post(getDBReqURL("ORDER", "POST", JSON.stringify(orderToAddDbFormat)));
      dispatch(addOrderSuccess(response.data[0]));
    } catch (e) {
      dispatch(addOrderError({ error: true, text: e.message }));
    }
  };
};

export const updateOrder = (idOrderToUpdate: Order["orderId"], newOrderProps: Order) => {
  return async (dispatch: Dispatch) => {
    try {
      const orderInDbFormat = normalOrderToDBOrder(newOrderProps);
      dispatch(updateOrderBegin(idOrderToUpdate, orderInDbFormat));
      const response = await axios.put(
        getDBReqURL("ORDER", "PUT", `?_id=${idOrderToUpdate}`),
        JSON.stringify(orderInDbFormat)
      );

      dispatch(updateOrderSuccess(response.data[0]));
    } catch (e) {
      dispatch(updateOrderError({ error: true, text: e.message }));
    }
  };
};

export const deleteOrder = (idOrderToDelete: Order["orderId"]) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(deleteOrderBegin(idOrderToDelete));
      const response = await axios.put(getDBReqURL("ORDER", "PUT", `?_id=${idOrderToDelete}`));
      dispatch(deleteOrderSuccess(response.data[0]));
    } catch (e) {
      dispatch(deleteOrderError({ error: true, text: e.message }));
    }
  };
};
