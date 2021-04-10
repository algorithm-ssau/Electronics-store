import { ProductProps } from "../product/ProductProps";
import { ProductListProps } from "./ProductListProps";

export type ProductAction =
  | { type: "ADD_PRODUCT"; payload: ProductProps }
  | { type: "REMOVE_PRODUCT"; payload: string }
  | { type: "FETCH_PRODUCTS" }
  | { type: "FETCH_PRODUCTS_ERROR"; payload: string }
  | { type: "FETCH_PRODUCTS_SUCCESS"; payload: ProductListProps["products"] }
  | { type: "UPDATE_PRODUCT"; payload: ProductProps };
