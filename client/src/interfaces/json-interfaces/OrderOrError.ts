import { BackendOrder } from "../backend-return-types/BackendOrder";
import { ActionMessage } from "../ActionMessage";
import { ResponseType } from "../ResponseType";

export interface OrderGetParamsIdData {
  responseType: ResponseType["DATA"];
  id: BackendOrder["id"];
  orderStatus: BackendOrder["orderStatus"];
  products: BackendOrder["products"];
  date: BackendOrder["date"];
  total: BackendOrder["total"];
}

export interface OrderGetParamsIdMessage {
  responseType: ResponseType["MESSAGE"];
  error: ActionMessage["error"];
  message: ActionMessage["text"];
}

export type OrderOrError = OrderGetParamsIdData | OrderGetParamsIdMessage;
