import { ShoppingCartAction } from "./ShoppingCartActionType";
import { ProductProps } from "../product/ProductProps";

export const itemAddPerform = (product: ProductProps): ShoppingCartAction => ({
  type: "ITEM_ADD",
  payload: { product },
});
export const itemRemovePerform = (product: ProductProps): ShoppingCartAction => ({
  type: "ITEM_REMOVE",
  payload: { product },
});
