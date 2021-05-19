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
        const message = { error: response[0].error, text: response[0].message };
        await dispatch(productsFetchError(message));
        return;
      }
      await dispatch(
        productsFetchSuccess(response.map((productOrError) => backendResponseProductToFrontendProduct(productOrError)))
      );
    } catch (e) {
      await dispatch(productsFetchError({ error: true, text: e.message }));
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
            "Access-Control-Allow-Headers":
              "Access-Control-Allow-Headers, Origin, X-Requested-Width, Content-Type, Accept",
          },
        })
      ).data;
      if (response[0].responseType === "Message") {
        const message = { error: response[0].error, text: response[0].message };
        await dispatch(productAddError(message));
        return;
      }
      await dispatch(productAddSuccess(backendResponseProductToFrontendProduct(response[0])));
    } catch (e) {
      await dispatch(productAddError({ error: true, text: e.message }));
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
        await dispatch(productUpdateError(actionMessage));
        return;
      }
      await dispatch(productUpdateSuccess(actionMessage));
    } catch (e) {
      await dispatch(productUpdateError({ error: true, text: e.message }));
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
        await dispatch(productDeleteError(actionMessage));
        return;
      }
      await dispatch(productDeleteSuccess(actionMessage));
    } catch (e) {
      await dispatch(productDeleteError({ error: true, text: e.message }));
    }
  };
};
