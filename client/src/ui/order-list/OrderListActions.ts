import { OrderListActionMessage, OrderListActionType } from "./OrderListActionType";
import { Order, OrderDB, OrderList } from "./OrderListProps";

export const fetchOrders = (userId: string): OrderListActionType => ({
  type: "FETCH_ORDERS",
  payload: { userId },
});
export const fetchOrdersSuccess = (orderList: OrderList): OrderListActionType => ({
  type: "FETCH_ORDERS_SUCCESS",
  payload: { orderList },
});
export const fetchOrdersError = (errorMessage: OrderListActionMessage): OrderListActionType => ({
  type: "FETCH_ORDERS_ERROR",
  payload: { errorMessage },
});
export const addOrder = (orderToAdd: OrderDB): OrderListActionType => ({
  type: "ADD_ORDER",
  payload: { orderToAdd },
});
export const addOrderSuccess = (orderInDB: Order): OrderListActionType => ({
  type: "ADD_ORDER_SUCCESS",
  payload: { orderInDB },
});
export const updateOrder = (idOrderToUpdate: Order["orderId"], newOrderProps: OrderDB): OrderListActionType => ({
  type: "UPDATE_ORDER",
  payload: { idOrderToUpdate, newOrderProps },
});
export const updateOrderSuccess = (infoMessage: OrderListActionMessage): OrderListActionType => ({
  type: "UPDATE_ORDER_SUCCESS",
  payload: { infoMessage },
});
export const updateOrderError = (errorMessage: OrderListActionMessage): OrderListActionType => ({
  type: "UPDATE_ORDER_ERROR",
  payload: { errorMessage },
});
export const deleteOrder = (idOrderToDelete: Order["orderId"]): OrderListActionType => ({
  type: "DELETE_ORDER",
  payload: { idOrderToDelete },
});
export const deleteOrderSuccess = (infoMessage: OrderListActionMessage): OrderListActionType => ({
  type: "DELETE_ORDER_SUCCESS",
  payload: { infoMessage },
});
export const deleteOrderError = (errorMessage: OrderListActionMessage): OrderListActionType => ({
  type: "DELETE_ORDER_ERROR",
  payload: { errorMessage },
});
