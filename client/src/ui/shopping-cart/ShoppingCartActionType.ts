export type ShoppingCartAction =
  | { type: "ADD_ITEM"; payload: { productId: string } }
  | { type: "REMOVE_ITEM"; payload: { productId: string } } // product id
  | { type: "UPDATE_ITEM_COUNT"; payload: { productId: string; amount: number } };
