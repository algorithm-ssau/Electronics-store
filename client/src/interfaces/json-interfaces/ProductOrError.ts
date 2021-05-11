import { ActionMessage } from "../ActionMessage";
import { ResponseType } from "../ResponseType";
import { ProductProps } from "../../ui/product/ProductProps";

export interface ProductsGetData {
  responseType: ResponseType["DATA"];
  id: ProductProps["id"];
  name: ProductProps["name"];
  price: ProductProps["price"];
  imgSrc: ProductProps["imgSrc"];
  desc: ProductProps["desc"];
  type: ProductProps["type"];
}

export interface ProductsGetMessage {
  responseType: ResponseType["MESSAGE"];
  error: ActionMessage["error"];
  message: ActionMessage["text"];
}

export type ProductOrError = ProductsGetData | ProductsGetMessage;
