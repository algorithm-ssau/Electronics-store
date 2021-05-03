import { ProductProps, ProductPropsDB } from "../product/ProductProps";
import { ProductListActionType, ProductListActionMessage } from "./ProductListActionType";

export const fetchProducts = (): ProductListActionType => ({
  type: "FETCH_PRODUCTS",
});
export const fetchProductsSuccess = (products: ProductProps[]): ProductListActionType => ({
  type: "FETCH_PRODUCTS_SUCCESS",
  payload: { products },
});
export const fetchProductsError = (errorMessage: ProductListActionMessage): ProductListActionType => ({
  type: "FETCH_PRODUCTS_ERROR",
  payload: { errorMessage },
});
export const addProduct = (productToAdd: ProductPropsDB): ProductListActionType => ({
  type: "DB_ADD_PRODUCT",
  payload: { productToAdd },
});
export const addProductSuccess = (productInDB: ProductProps): ProductListActionType => ({
  type: "DB_ADD_PRODUCT_SUCCESS",
  payload: { productInDB },
});
export const updateProduct = (
  idProductToUpdate: ProductProps["id"],
  newProductProps: ProductPropsDB
): ProductListActionType => ({
  type: "DB_UPDATE_PRODUCT",
  payload: { idProductToUpdate, newProductProps },
});
export const updateProductSuccess = (infoMessage: ProductListActionMessage): ProductListActionType => ({
  type: "DB_UPDATE_PRODUCT_SUCCESS",
  payload: { infoMessage },
});
export const updateProductError = (errorMessage: ProductListActionMessage): ProductListActionType => ({
  type: "DB_UPDATE_PRODUCT_ERROR",
  payload: { errorMessage },
});
export const deleteProduct = (idProductToDelete: ProductProps["id"]): ProductListActionType => ({
  type: "DB_DELETE_PRODUCT",
  payload: { idProductToDelete },
});
export const deleteProductSuccess = (infoMessage: ProductListActionMessage): ProductListActionType => ({
  type: "DB_DELETE_PRODUCT_SUCCESS",
  payload: { infoMessage },
});
export const deleteProductError = (errorMessage: ProductListActionMessage): ProductListActionType => ({
  type: "DB_DELETE_PRODUCT_ERROR",
  payload: { errorMessage },
});
