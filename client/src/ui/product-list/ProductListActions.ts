import { ProductProps } from "../product/ProductProps";
import { ProductListProps } from "./ProductListProps";
import { ProductAction } from "./ProductActionType";

export const fetchProducts = (): ProductAction => ({
  type: "FETCH_PRODUCTS",
});
export const fetchProductsSuccess = (response: ProductListProps["products"]): ProductAction => ({
  type: "FETCH_PRODUCTS_SUCCESS",
  payload: response,
});
export const fetchProductsError = (error: string): ProductAction => ({
  type: "FETCH_PRODUCTS_ERROR",
  payload: error,
});
export const addProduct = (product: ProductProps): ProductAction => ({
  type: "ADD_PRODUCT",
  payload: product,
});
export const removeProduct = (productId: string): ProductAction => ({
  type: "REMOVE_PRODUCT",
  payload: productId,
});
export const updateProduct = (product: ProductProps): ProductAction => ({
  type: "UPDATE_PRODUCT",
  payload: product,
});
