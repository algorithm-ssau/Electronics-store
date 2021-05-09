import { ProductProps } from "../product/ProductProps";

export type ShoppingCartAction =
  | { type: "ITEM_ADD"; payload: { productId: ProductProps["id"] } }
  | { type: "ITEM_REMOVE"; payload: { productId: ProductProps["id"] } };
