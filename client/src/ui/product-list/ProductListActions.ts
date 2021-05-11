import { ProductProps, ProductPropsDB } from "../product/ProductProps";
import { ProductListActionType } from "./ProductListActionType";
import { ActionMessage } from "../../interfaces/ActionMessage";
import { ProductListProps } from "./ProductListProps";

export const productsFetchBegin = (): ProductListActionType => ({
  type: "PRODUCTS_FETCH_BEGIN",
});
export const productsFetchSuccess = (products: ProductListProps["products"]): ProductListActionType => ({
  type: "PRODUCTS_FETCH_SUCCESS",
  payload: { products },
});
export const productsFetchError = (errorMessage: ActionMessage): ProductListActionType => ({
  type: "PRODUCTS_FETCH_ERROR",
  payload: { errorMessage },
});
export const productAddBegin = (productToAddDbFormat: ProductPropsDB): ProductListActionType => ({
  type: "PRODUCT_ADD_BEGIN",
  payload: { productToAddDbFormat },
});
export const productAddSuccess = (productJustAdded: ProductProps): ProductListActionType => ({
  type: "PRODUCT_ADD_SUCCESS",
  payload: { productJustAdded },
});
export const productAddError = (errorMessage: ActionMessage): ProductListActionType => ({
  type: "PRODUCT_ADD_ERROR",
  payload: { errorMessage },
});
export const productUpdateBegin = (
  idProductToUpdate: ProductProps["id"],
  newProductDbFormat: ProductPropsDB
): ProductListActionType => ({
  type: "PRODUCT_UPDATE_BEGIN",
  payload: { idProductToUpdate, newProductDbFormat },
});
export const productUpdateSuccess = (infoMessage: ActionMessage): ProductListActionType => ({
  type: "PRODUCT_UPDATE_SUCCESS",
  payload: { infoMessage },
});
export const productUpdateError = (errorMessage: ActionMessage): ProductListActionType => ({
  type: "PRODUCT_UPDATE_ERROR",
  payload: { errorMessage },
});
export const productDeleteBegin = (idProductToDelete: ProductProps["id"]): ProductListActionType => ({
  type: "PRODUCT_DELETE_BEGIN",
  payload: { idProductToDelete },
});
export const productDeleteSuccess = (infoMessage: ActionMessage): ProductListActionType => ({
  type: "PRODUCT_DELETE_SUCCESS",
  payload: { infoMessage },
});
export const productDeleteError = (errorMessage: ActionMessage): ProductListActionType => ({
  type: "PRODUCT_DELETE_ERROR",
  payload: { errorMessage },
});
