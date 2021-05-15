import axios from "axios";
import { ProductProps } from "../ui/product/ProductProps";
import { ProductOrError } from "../interfaces/json-interfaces/ProductOrError";
import { getDBReqURL } from "../utils/URLs";
import { backendResponseProductToFrontendProduct } from "../utils/converters";

export const fetchProduct = async (productId: ProductProps["id"]): Promise<ProductProps> => {
  const response: ProductOrError[] = (await axios.get(getDBReqURL("PRODUCT", "GET", `?_id=${productId}`))).data;
  if (response[0].responseType === "Data") {
    return backendResponseProductToFrontendProduct(response[0]);
  }
  throw new Error(`No product with id ${productId}`);
};
