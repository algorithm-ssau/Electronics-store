import { Dispatch } from "redux";
import { ProductProps } from "../../ui/product/ProductProps";
import { itemAddPerform, itemRemovePerform } from "../../ui/shopping-cart/ShoppingCartActions";

export const addItemToCart = (productId: ProductProps["id"]) => {
  return async (dispatch: Dispatch) => {
    dispatch(itemAddPerform(productId));
  };
};

export const removeItemFromCart = (productId: ProductProps["id"]) => {
  return async (dispatch: Dispatch) => {
    dispatch(itemRemovePerform(productId));
  };
};
