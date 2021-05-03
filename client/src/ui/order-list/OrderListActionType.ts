import { OrderDB, Order, OrderList } from "./OrderListProps";

export interface OrderListActionMessage {
  error: boolean;
  message: string;
}

export type OrderListActionType =
  | { type: "FETCH_ORDERS"; payload: { userId: string } }
  | { type: "FETCH_ORDERS_SUCCESS"; payload: { orderList: OrderList } }
  | { type: "FETCH_ORDERS_ERROR"; payload: { errorMessage: OrderListActionMessage } }
  | { type: "ADD_ORDER"; payload: { orderToAdd: OrderDB } }
  | { type: "ADD_ORDER_SUCCESS"; payload: { orderInDB: Order } }
  | { type: "UPDATE_ORDER"; payload: { idOrderToUpdate: Order["orderId"]; newOrderProps: OrderDB } }
  | { type: "UPDATE_ORDER_SUCCESS"; payload: { infoMessage: OrderListActionMessage } }
  | { type: "UPDATE_ORDER_ERROR"; payload: { errorMessage: OrderListActionMessage } }
  | { type: "DELETE_ORDER"; payload: { idOrderToDelete: Order["orderId"] } }
  | { type: "DELETE_ORDER_SUCCESS"; payload: { infoMessage: OrderListActionMessage } }
  | { type: "DELETE_ORDER_ERROR"; payload: { errorMessage: OrderListActionMessage } };
