import { ProductProps } from "../product/ProductProps";

export type ShoppingCartAction =
  | { type: "ADD_ITEM"; payload: { productId: ProductProps["id"] } }
  | { type: "REMOVE_ITEM"; payload: { productId: ProductProps["id"] } }
  | { type: "UPDATE_ITEM_COUNT"; payload: { productId: ProductProps["id"]; amount: number } };
