import { OrderListProps } from "./OrderListProps";
import { OrderListActionType } from "./OrderListActionType";

const initialState: OrderListProps = {
  orders: [],
  loading: false,
  message: { error: false, text: "" },
};

export const orderListReducer = (state = initialState, action: OrderListActionType): OrderListProps => {
  switch (action.type) {
    case "ORDERS_FETCH_BEGIN":
      return {
        ...state,
        loading: true,
        message: {
          ...state.message,
          error: false,
          text: "Fetching orders",
        },
      };
    case "ORDERS_FETCH_SUCCESS":
      return {
        ...state,
        orders: action.payload.orders,
        loading: false,
        message: {
          ...state.message,
          error: false,
          text: `Successfully fetched orders: ${action.payload.orders}`,
        },
      };
    case "ORDERS_FETCH_ERROR":
      return {
        ...state,
        loading: false,
        message: action.payload.errorMessage,
      };
    case "ORDER_ADD_BEGIN":
      return {
        ...state,
        loading: true,
        message: {
          ...state.message,
          error: false,
          text: `Adding order ${action.payload.orderToAdd}`,
        },
      };
    case "ORDER_ADD_SUCCESS":
      return {
        ...state,
        loading: false,
        message: {
          ...state.message,
          error: false,
          text: `Order added with id of ${action.payload.orderJustAdded.orderId}`,
        },
      };
    case "ORDER_ADD_ERROR":
      return {
        ...state,
        loading: false,
        message: action.payload.errorMessage,
      };
    case "ORDER_UPDATE_BEGIN":
      return {
        ...state,
        loading: true,
        message: {
          ...state.message,
          error: false,
          text: `Updating order with id ${action.payload.idOrderToUpdate} to ${action.payload.newOrder}`,
        },
      };
    case "ORDER_UPDATE_SUCCESS":
      return {
        ...state,
        loading: false,
        message: action.payload.infoMessage,
      };
    case "ORDER_UPDATE_ERROR":
      return {
        ...state,
        loading: false,
        message: action.payload.errorMessage,
      };
    case "ORDER_DELETE_BEGIN":
      return {
        ...state,
        loading: true,
        message: {
          ...state.message,
          error: false,
          text: `Deleting order with id ${action.payload.idOrderToDelete}`,
        },
      };
    case "ORDER_DELETE_SUCCESS":
      return {
        ...state,
        loading: false,
        message: action.payload.infoMessage,
      };
    case "ORDER_DELETE_ERROR":
      return {
        ...state,
        loading: false,
        message: action.payload.errorMessage,
      };
    default:
      return state;
  }
};
