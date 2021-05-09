import { Order, OrderListProps } from "./OrderListProps";
import { ActionMessage } from "../../interfaces/ActionMessage";
import { EmailAndPassword } from "../user-data/UserDataComponentProps";

export type OrderListActionType =
  | { type: "ORDERS_FETCH_BEGIN"; payload: { emailAndPassword: EmailAndPassword } }
  | { type: "ORDERS_FETCH_SUCCESS"; payload: { orders: OrderListProps["orders"] } }
  | { type: "ORDERS_FETCH_ERROR"; payload: { errorMessage: ActionMessage } }
  | { type: "ORDER_ADD_BEGIN"; payload: { orderToAdd: Order } }
  | { type: "ORDER_ADD_SUCCESS"; payload: { orderJustAdded: Order } }
  | { type: "ORDER_ADD_ERROR"; payload: { errorMessage: ActionMessage } }
  | { type: "ORDER_UPDATE_BEGIN"; payload: { idOrderToUpdate: Order["orderId"]; newOrder: Order } }
  | { type: "ORDER_UPDATE_SUCCESS"; payload: { infoMessage: ActionMessage } }
  | { type: "ORDER_UPDATE_ERROR"; payload: { errorMessage: ActionMessage } }
  | { type: "ORDER_DELETE_BEGIN"; payload: { idOrderToDelete: Order["orderId"] } }
  | { type: "ORDER_DELETE_SUCCESS"; payload: { infoMessage: ActionMessage } }
  | { type: "ORDER_DELETE_ERROR"; payload: { errorMessage: ActionMessage } };
