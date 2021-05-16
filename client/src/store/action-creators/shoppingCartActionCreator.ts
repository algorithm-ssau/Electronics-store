import { Dispatch } from "redux";
import { ProductProps } from "../../ui/product/ProductProps";
import { cartClear, itemAddPerform, itemRemovePerform } from "../../ui/shopping-cart/ShoppingCartActions";
import { fetchProduct } from "../../network/fetchProduct";

export const addItemToCart = (productId: ProductProps["id"]) => {
  return async (dispatch: Dispatch) => {
    const product = await fetchProduct(productId);
    await dispatch(itemAddPerform(product));
  };
};

export const removeItemFromCart = (productId: ProductProps["id"]) => {
  return async (dispatch: Dispatch) => {
    const product = await fetchProduct(productId);
    await dispatch(itemRemovePerform(product));
  };
};

export const clearCart = () => {
  return async (dispatch: Dispatch) => {
    await dispatch(cartClear());
  };
};
