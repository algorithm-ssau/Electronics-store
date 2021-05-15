import { ActionMessage } from "../ActionMessage";
import { ResponseType } from "../ResponseType";
import { BackendResponseUser } from "../backend-return-types/BackendResponseUser";

export interface UserGetData {
  responseType: ResponseType["DATA"];
  nickname: BackendResponseUser["nickname"];
  userIcon: BackendResponseUser["userIcon"];
  userVerified: BackendResponseUser["userVerified"];
  emailAndPassword: BackendResponseUser["emailAndPassword"];
  realName: BackendResponseUser["realName"];
  account: BackendResponseUser["account"];
  isAdmin: BackendResponseUser["isAdmin"];
  orders: BackendResponseUser["orders"];
}

export interface UserGetMessage {
  responseType: ResponseType["MESSAGE"];
  error: ActionMessage["error"];
  message: ActionMessage["text"];
}

export type UserOrError = UserGetData | UserGetMessage;
