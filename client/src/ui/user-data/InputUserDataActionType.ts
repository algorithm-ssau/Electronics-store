import { EmailAndPassword, UserDataProps } from "./UserDataComponentProps";
import { ActionMessage } from "../../interfaces/ActionMessage";
import { BackendCustomer } from "../../interfaces/backend-return-types/BackendCustomer";
import { Customer } from "../../interfaces/backend-return-types/Customer";

export type InputUserDataAction =
  | { type: "USER_LOGIN_BEGIN"; payload: { emailAndPassword: EmailAndPassword } }
  | { type: "USER_LOGIN_SUCCESS"; payload: { userData: UserDataProps } }
  | { type: "USER_LOGIN_ERROR"; payload: { errorMessage: ActionMessage } }
  | { type: "USER_REGISTER_BEGIN"; payload: { customerDb: BackendCustomer } }
  | { type: "USER_REGISTER_SUCCESS"; payload: { customerJustAdded: Customer } }
  | { type: "USER_REGISTER_ERROR"; payload: { errorMessage: ActionMessage } }
  | { type: "USER_UPDATE_BEGIN"; payload: { oldEmailAndPassword: EmailAndPassword; newUserDbFormat: BackendCustomer } }
  | { type: "USER_UPDATE_SUCCESS"; payload: { infoMessage: ActionMessage } }
  | { type: "USER_UPDATE_ERROR"; payload: { errorMessage: ActionMessage } }
  | { type: "USER_DELETE-ACCOUNT_BEGIN"; payload: { emailAndPassword: EmailAndPassword } }
  | { type: "USER_DELETE-ACCOUNT_SUCCESS"; payload: { infoMessage: ActionMessage } }
  | { type: "USER_DELETE-ACCOUNT_ERROR"; payload: { errorMessage: ActionMessage } }
  | { type: "USER_LOGOUT_BEGIN" }
  | { type: "USER_LOGOUT_SUCCESS"; payload: { infoMessage: ActionMessage } }
  | { type: "USER_LOGOUT_ERROR"; payload: { errorMessage: ActionMessage } };
