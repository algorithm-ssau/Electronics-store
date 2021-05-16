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

export const fetchProducts = () => {
  return async (dispatch: Dispatch) => {
    try {
      await dispatch(productsFetchBegin());
      const response: ProductOrError[] = (await axios.get(getDBReqURL("PRODUCT", "GET"))).data;
      // await delay(5000);
      if (response[0].responseType === "Message") {
        return dispatch(productsFetchError({ error: response[0].error, text: response[0].message }));
      }
      return dispatch(
        productsFetchSuccess(response.map((productOrError) => backendResponseProductToFrontendProduct(productOrError)))
      );
    } catch (e) {
      return dispatch(productsFetchError({ error: true, text: e.message }));
    }
  };
};

export const addProduct = (productToAdd: ProductProps) => {
  return async (dispatch: Dispatch) => {
    try {
      const productToAddBackendFormat = productToProductDb(productToAdd);
      await dispatch(productAddBegin(productToAddBackendFormat));
      const response: ProductOrError[] = (
        await axios.post(getDBReqURL("PRODUCT", "POST"), JSON.stringify(productToAddBackendFormat), {
          headers: {
            "content-type": "application/json",
          },
        })
      ).data;
      if (response[0].responseType === "Message") {
        return dispatch(productAddError({ error: response[0].error, text: response[0].message }));
      }
      return dispatch(productAddSuccess(backendResponseProductToFrontendProduct(response[0])));
    } catch (e) {
      return dispatch(productAddError({ error: true, text: e.message }));
    }
  };
};

export const updateProduct = (idProductToUpdate: ProductProps["id"], newProduct: ProductProps) => {
  return async (dispatch: Dispatch) => {
    try {
      const newProductBackendFormat = productToProductDb(newProduct);
      await dispatch(productUpdateBegin(idProductToUpdate, newProductBackendFormat));
      const response: BackendMessage[] = (
        await axios.put(
          getDBReqURL("PRODUCT", "PUT", `?_id=${idProductToUpdate}`),
          JSON.stringify(newProductBackendFormat)
        )
      ).data;
      const actionMessage = backendMessageToActionMessage(response[0]);
      if (actionMessage.error) {
        return dispatch(productUpdateError(actionMessage));
      }
      return dispatch(productUpdateSuccess(actionMessage));
    } catch (e) {
      return dispatch(productUpdateError({ error: true, text: e.message }));
    }
  };
};

export const deleteProduct = (idProductToDelete: ProductProps["id"]) => {
  return async (dispatch: Dispatch) => {
    try {
      await dispatch(productDeleteBegin(idProductToDelete));
      const response: BackendMessage[] = (
        await axios.delete(getDBReqURL("PRODUCT", "DELETE", `?_id=${idProductToDelete}`))
      ).data;
      const actionMessage = backendMessageToActionMessage(response[0]);
      if (actionMessage.error) {
        return dispatch(productDeleteError(actionMessage));
      }
      return dispatch(productDeleteSuccess(actionMessage));
    } catch (e) {
      return dispatch(productDeleteError({ error: true, text: e.message }));
    }
  };
};
