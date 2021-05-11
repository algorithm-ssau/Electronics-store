import { ProductProps, ProductPropsDB } from "../product/ProductProps";
import { ProductListProps } from "./ProductListProps";
import { ActionMessage } from "../../interfaces/ActionMessage";

export type ProductListActionType =
  | { type: "PRODUCTS_FETCH_BEGIN" }
  | { type: "PRODUCTS_FETCH_SUCCESS"; payload: { products: ProductListProps["products"] } }
  | { type: "PRODUCTS_FETCH_ERROR"; payload: { errorMessage: ActionMessage } }
  | { type: "PRODUCT_ADD_BEGIN"; payload: { productToAddDbFormat: ProductPropsDB } }
  | { type: "PRODUCT_ADD_SUCCESS"; payload: { productJustAdded: ProductProps } }
  | { type: "PRODUCT_ADD_ERROR"; payload: { errorMessage: ActionMessage } }
  | {
      type: "PRODUCT_UPDATE_BEGIN";
      payload: { idProductToUpdate: ProductProps["id"]; newProductDbFormat: ProductPropsDB };
    }
  | { type: "PRODUCT_UPDATE_SUCCESS"; payload: { infoMessage: ActionMessage } }
  | { type: "PRODUCT_UPDATE_ERROR"; payload: { errorMessage: ActionMessage } }
  | { type: "PRODUCT_DELETE_BEGIN"; payload: { idProductToDelete: ProductProps["id"] } }
  | { type: "PRODUCT_DELETE_SUCCESS"; payload: { infoMessage: ActionMessage } }
  | { type: "PRODUCT_DELETE_ERROR"; payload: { errorMessage: ActionMessage } };
