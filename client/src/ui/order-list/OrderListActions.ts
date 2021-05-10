import { OrderListActionType } from "./OrderListActionType";
import { Order, OrderListProps } from "./OrderListProps";
import { ActionMessage } from "../../interfaces/ActionMessage";
import { EmailAndPassword } from "../user-data/UserDataProps";

export const ordersFetchBegin = (emailAndPassword: EmailAndPassword): OrderListActionType => ({
  type: "ORDERS_FETCH_BEGIN",
  payload: { emailAndPassword },
});
export const ordersFetchSuccess = (orders: OrderListProps["orders"]): OrderListActionType => ({
  type: "ORDERS_FETCH_SUCCESS",
  payload: { orders },
});
export const ordersFetchError = (errorMessage: ActionMessage): OrderListActionType => ({
  type: "ORDERS_FETCH_ERROR",
  payload: { errorMessage },
});
export const orderAddBegin = (orderToAdd: Order): OrderListActionType => ({
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
export const orderUpdateBegin = (idOrderToUpdate: Order["orderId"], newOrder: Order): OrderListActionType => ({
  type: "ORDER_UPDATE_BEGIN",
  payload: { idOrderToUpdate, newOrder },
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
