import { OrderListActionType } from "./OrderListActionType";
import { Order, OrderDB, OrderListProps } from "./OrderListProps";
import { ActionMessage } from "../../interfaces/ActionMessage";

export const ordersFetchBegin = (orderIds: Order["orderId"][]): OrderListActionType => ({
  type: "ORDERS_FETCH_BEGIN",
  payload: { orderIds },
});
export const ordersFetchSuccess = (orders: OrderListProps["orders"]): OrderListActionType => ({
  type: "ORDERS_FETCH_SUCCESS",
  payload: { orders },
});
export const ordersFetchError = (errorMessage: ActionMessage): OrderListActionType => ({
  type: "ORDERS_FETCH_ERROR",
  payload: { errorMessage },
});
export const orderFetchBegin = (orderId: Order["orderId"]): OrderListActionType => ({
  type: "ORDER_FETCH_BEGIN",
  payload: { orderId },
});
export const orderFetchSuccess = (order: Order): OrderListActionType => ({
  type: "ORDER_FETCH_SUCCESS",
  payload: { order },
});
export const orderFetchError = (errorMessage: ActionMessage): OrderListActionType => ({
  type: "ORDER_FETCH_ERROR",
  payload: { errorMessage },
});
export const orderAddBegin = (orderToAdd: OrderDB): OrderListActionType => ({
  type: "ORDER_ADD_BEGIN",
  payload: { orderToAdd },
});
export const orderAddSuccess = (orderJustAdded: Order): OrderListActionType => ({
  type: "ORDER_ADD_SUCCESS",
  payload: { orderJustAdded },
});
export const orderAddError = (errorMessage: ActionMessage): OrderListActionType => ({
  type: "ORDER_ADD_ERROR",
  payload: { errorMessage },
});
export const orderUpdateBegin = (
  idOrderToUpdate: Order["orderId"],
  newOrderDbFormat: OrderDB
): OrderListActionType => ({
  type: "ORDER_UPDATE_BEGIN",
  payload: { idOrderToUpdate, newOrderDbFormat },
});
export const orderUpdateSuccess = (infoMessage: ActionMessage): OrderListActionType => ({
  type: "ORDER_UPDATE_SUCCESS",
  payload: { infoMessage },
});
export const orderUpdateError = (errorMessage: ActionMessage): OrderListActionType => ({
  type: "ORDER_UPDATE_ERROR",
  payload: { errorMessage },
});
export const orderDeleteBegin = (idOrderToDelete: Order["orderId"]): OrderListActionType => ({
  type: "ORDER_DELETE_BEGIN",
  payload: { idOrderToDelete },
});
export const orderDeleteSuccess = (infoMessage: ActionMessage): OrderListActionType => ({
  type: "ORDER_DELETE_SUCCESS",
  payload: { infoMessage },
});
export const orderDeleteError = (errorMessage: ActionMessage): OrderListActionType => ({
  type: "ORDER_DELETE_ERROR",
  payload: { errorMessage },
});
