import { ShoppingCartAction } from "./ShoppingCartActionType";

export const addItemToCart = (productId: string): ShoppingCartAction => ({
  type: "ADD_ITEM",
  payload: { productId },
});
export const removeItemFromCart = (productId: string): ShoppingCartAction => ({
  type: "REMOVE_ITEM",
  payload: { productId },
});
export const updateItemCount = (productId: string, amount: number): ShoppingCartAction => ({
  type: "UPDATE_ITEM_COUNT",
  payload: { productId, amount },
});
