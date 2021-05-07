import { OrderDB, Order, OrderListProps } from "./OrderListProps";
import { ActionMessage } from "../../interfaces/ActionMessage";

export type OrderListActionType =
  | { type: "ORDERS_FETCH_BEGIN"; payload: { orderIds: Order["orderId"][] } }
  | { type: "ORDERS_FETCH_SUCCESS"; payload: { orders: OrderListProps["orders"] } }
  | { type: "ORDERS_FETCH_ERROR"; payload: { errorMessage: ActionMessage } }
  | { type: "ORDER_FETCH_BEGIN"; payload: { orderId: Order["orderId"] } }
  | { type: "ORDER_FETCH_SUCCESS"; payload: { order: Order } }
  | { type: "ORDER_FETCH_ERROR"; payload: { errorMessage: ActionMessage } }
  | { type: "ORDER_ADD_BEGIN"; payload: { orderToAdd: OrderDB } }
  | { type: "ORDER_ADD_SUCCESS"; payload: { orderJustAdded: Order } }
  | { type: "ORDER_ADD_ERROR"; payload: { errorMessage: ActionMessage } }
  | { type: "ORDER_UPDATE_BEGIN"; payload: { idOrderToUpdate: Order["orderId"]; newOrderDbFormat: OrderDB } }
  | { type: "ORDER_UPDATE_SUCCESS"; payload: { infoMessage: ActionMessage } }
  | { type: "ORDER_UPDATE_ERROR"; payload: { errorMessage: ActionMessage } }
  | { type: "ORDER_DELETE_BEGIN"; payload: { idOrderToDelete: Order["orderId"] } }
  | { type: "ORDER_DELETE_SUCCESS"; payload: { infoMessage: ActionMessage } }
  | { type: "ORDER_DELETE_ERROR"; payload: { errorMessage: ActionMessage } };
