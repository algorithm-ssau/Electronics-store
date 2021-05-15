import { ProductProps } from "../product/ProductProps";

export type ShoppingCartAction =
  | { type: "ITEM_ADD"; payload: { product: ProductProps } }
  | { type: "ITEM_REMOVE"; payload: { product: ProductProps } };
