import { ProductProps, ProductPropsDB } from "../product/ProductProps";
import { ProductListProps } from "./ProductListProps";

export interface ProductListActionMessage {
  error: boolean;
  message: string;
}

export type ProductListActionType =
  | { type: "FETCH_PRODUCTS" }
  | { type: "FETCH_PRODUCTS_SUCCESS"; payload: { products: ProductListProps["products"] } }
  | { type: "FETCH_PRODUCTS_ERROR"; payload: { errorMessage: ProductListActionMessage } }
  | { type: "DB_ADD_PRODUCT"; payload: { productToAdd: ProductPropsDB } }
  | { type: "DB_ADD_PRODUCT_SUCCESS"; payload: { productInDB: ProductProps } }
  | { type: "DB_UPDATE_PRODUCT"; payload: { idProductToUpdate: ProductProps["id"]; newProductProps: ProductPropsDB } }
  | { type: "DB_UPDATE_PRODUCT_SUCCESS"; payload: { infoMessage: ProductListActionMessage } }
  | { type: "DB_UPDATE_PRODUCT_ERROR"; payload: { errorMessage: ProductListActionMessage } }
  | { type: "DB_DELETE_PRODUCT"; payload: { idProductToDelete: ProductProps["id"] } }
  | { type: "DB_DELETE_PRODUCT_SUCCESS"; payload: { infoMessage: ProductListActionMessage } }
  | { type: "DB_DELETE_PRODUCT_ERROR"; payload: { errorMessage: ProductListActionMessage } };
