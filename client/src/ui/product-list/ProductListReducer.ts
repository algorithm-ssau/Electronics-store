import { ProductListProps } from "./ProductListProps";
import { ProductListActionType } from "./ProductListActionType";

const initialState: ProductListProps = {
  products: [],
  loading: false,
  message: { error: false, text: "" },
};

export const productListReducer = (state = initialState, action: ProductListActionType): ProductListProps => {
  switch (action.type) {
    case "PRODUCTS_FETCH_BEGIN":
      return {
        ...state,
        loading: true,
        message: {
          ...state.message,
          error: false,
          text: "Fetching products",
        },
      };
    case "PRODUCTS_FETCH_SUCCESS":
      return {
        ...state,
        products: action.payload.products,
        loading: false,
        message: {
          ...state.message,
          error: false,
          text: `Successfully fetched products: ${action.payload.products}`,
        },
      };
    case "PRODUCTS_FETCH_ERROR":
      return {
        ...state,
        loading: false,
        message: action.payload.errorMessage,
      };
    case "PRODUCT_ADD_BEGIN":
      return {
        ...state,
        loading: true,
        message: {
          ...state.message,
          error: false,
          text: `Adding product ${action.payload.productToAddDbFormat}`,
        },
      };
    case "PRODUCT_ADD_SUCCESS":
      return {
        ...state,
        loading: false,
        message: {
          ...state.message,
          error: false,
          text: `Product added with id of ${action.payload.productJustAdded.id}`,
        },
      };
    case "PRODUCT_ADD_ERROR":
      return {
        ...state,
        loading: false,
        message: action.payload.errorMessage,
      };
    case "PRODUCT_UPDATE_BEGIN":
      return {
        ...state,
        loading: true,
        message: {
          ...state.message,
          error: false,
          text: `Updating product with id ${action.payload.idProductToUpdate} to ${action.payload.newProductDbFormat}`,
        },
      };
    case "PRODUCT_UPDATE_SUCCESS":
      return {
        ...state,
        loading: false,
        message: action.payload.infoMessage,
      };
    case "PRODUCT_UPDATE_ERROR":
      return {
        ...state,
        loading: false,
        message: action.payload.errorMessage,
      };
    case "PRODUCT_DELETE_BEGIN":
      return {
        ...state,
        loading: true,
        message: {
          ...state.message,
          error: false,
          text: `Deleting product with id ${action.payload.idProductToDelete}`,
        },
      };
    case "PRODUCT_DELETE_SUCCESS":
      return {
        ...state,
        loading: false,
        message: action.payload.infoMessage,
      };
    case "PRODUCT_DELETE_ERROR":
      return {
        ...state,
        loading: false,
        message: action.payload.errorMessage,
      };
    default:
      return state;
  }
};
