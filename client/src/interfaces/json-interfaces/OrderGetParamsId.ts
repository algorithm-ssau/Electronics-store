import { BackendOrder } from "../backend-return-types/BackendOrder";
import { ActionMessage } from "../ActionMessage";

export interface OrderGetParamsId {
  body: {
    first:
      | {
          responseType: "Data";
          id: BackendOrder["id"];
          orderStatus: BackendOrder["orderStatus"];
          products: BackendOrder["products"];
          date: BackendOrder["date"];
          total: BackendOrder["total"];
        }
      | {
          responseType: "Message";
          error: ActionMessage["error"];
          message: ActionMessage["text"];
        };
  }[];
}
