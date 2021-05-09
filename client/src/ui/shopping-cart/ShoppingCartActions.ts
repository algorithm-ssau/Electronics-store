import { ShoppingCartAction } from "./ShoppingCartActionType";
import { ProductProps } from "../product/ProductProps";

export const itemAddPerform = (productId: ProductProps["id"]): ShoppingCartAction => ({
  type: "ITEM_ADD",
  payload: { productId },
});
export const itemRemovePerform = (productId: ProductProps["id"]): ShoppingCartAction => ({
  type: "ITEM_REMOVE",
  payload: { productId },
});
