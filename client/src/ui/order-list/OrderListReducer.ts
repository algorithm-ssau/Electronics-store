import { OrderListProps } from "./OrderListProps";
import { OrderListActionType } from "./OrderListActionType";

const initialState: OrderListProps = {
  orders: [],
  loading: false,
  message: { error: false, text: "" },
};

export const orderListReducer = (state = initialState, action: OrderListActionType) => {
  switch (action.type) {

    default:
      return state;
  }
};
