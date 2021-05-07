import { ProductListProps } from "./ProductListProps";
import { ProductListActionType } from "./ProductListActionType";

const initialState: ProductListProps = {
  products: [],
  loading: false,
  message: { error: false, text: "" },
};

export const productListReducer = (state = initialState, action: ProductListActionType): ProductListProps => {
  switch (action.type) {

    default:
      return state;
  }
};
