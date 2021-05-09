import { Dispatch } from "redux";
import axios from "axios";
import { getDBReqURL } from "../../utils/URLs";
import {
  productAddBegin,
  productAddError,
  productAddSuccess,
  productDeleteBegin,
  productDeleteError,
  productDeleteSuccess,
  productsFetchBegin,
  productsFetchError,
  productsFetchSuccess,
  productUpdateBegin,
  productUpdateError,
  productUpdateSuccess,
} from "../../ui/product-list/ProductListActions";
import { ProductOrError } from "../../interfaces/json-interfaces/ProductOrError";
import {
  backendMessageToActionMessage,
  backendResponseProductToFrontendProduct,
  productToProductDb,
} from "../../utils/converters";
import { ProductProps } from "../../ui/product/ProductProps";
import { BackendMessage } from "../../interfaces/BackendMessage";
import { orderDeleteError, orderDeleteSuccess } from "../../ui/order-list/OrderListActions";

export const fetchProducts = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(productsFetchBegin());
      const response: ProductOrError[] = await axios.get(getDBReqURL("PRODUCT", "GET"));
      if (response[0].responseType === "Message") {
        dispatch(productsFetchError({ error: response[0].error, text: response[0].message }));
        return;
      }
      dispatch(
        productsFetchSuccess(response.map((productOrError) => backendResponseProductToFrontendProduct(productOrError)))
      );
    } catch (e) {
      dispatch(productsFetchError({ error: true, text: e.message }));
    }
  };
};

export const addProduct = (productToAdd: ProductProps) => {
  return async (dispatch: Dispatch) => {
    try {
      const productToAddBackendFormat = productToProductDb(productToAdd);
      dispatch(productAddBegin(productToAddBackendFormat));
      const response: ProductOrError = await axios.post(
        getDBReqURL("PRODUCT", "POST"),
        JSON.stringify(productToAddBackendFormat)
      );
      if (response.responseType === "Message") {
        dispatch(productAddError({ error: response.error, text: response.message }));
        return;
      }
      dispatch(productAddSuccess(backendResponseProductToFrontendProduct(response)));
    } catch (e) {
      dispatch(productAddError({ error: true, text: e.message }));
    }
  };
};

export const updateProduct = (idProductToUpdate: ProductProps["id"], newProduct: ProductProps) => {
  return async (dispatch: Dispatch) => {
    try {
      const newProductBackendFormat = productToProductDb(newProduct);
      dispatch(productUpdateBegin(idProductToUpdate, newProductBackendFormat));
      const response: BackendMessage[] = await axios.put(
        getDBReqURL("PRODUCT", "PUT", `?_id=${idProductToUpdate}`),
        JSON.stringify(newProductBackendFormat)
      );
      const actionMessage = backendMessageToActionMessage(response[0]);
      if (actionMessage.error) {
        dispatch(productUpdateError(actionMessage));
        return;
      }
      dispatch(productUpdateSuccess(actionMessage));
    } catch (e) {
      dispatch(productUpdateError({ error: true, text: e.message }));
    }
  };
};

export const deleteProduct = (idProductToDelete: ProductProps["id"]) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(productDeleteBegin(idProductToDelete));
      const response: BackendMessage[] = await axios.delete(
        getDBReqURL("PRODUCT", "DELETE", `?_id=${idProductToDelete}`)
      );
      const actionMessage = backendMessageToActionMessage(response[0]);
      if (actionMessage.error) {
        dispatch(productDeleteError(actionMessage));
        return;
      }
      dispatch(productDeleteSuccess(actionMessage));
    } catch (e) {
      dispatch(productDeleteError({ error: true, text: e.message }));
    }
  };
};
