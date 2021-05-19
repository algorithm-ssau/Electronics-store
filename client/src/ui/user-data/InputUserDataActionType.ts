import { EmailAndPassword, UserData, UserDataSignUpProps } from "./UserDataProps";
import { ActionMessage } from "../../interfaces/ActionMessage";
import { CorrectSignUpProps } from "../../utils/converters";

export type InputUserDataAction =
  | { type: "USER_LOGIN_BEGIN"; payload: { emailAndPassword: EmailAndPassword } }
  | { type: "USER_LOGIN_SUCCESS"; payload: { userData: UserData } }
  | { type: "USER_LOGIN_ERROR"; payload: { errorMessage: ActionMessage } }
  | { type: "USER_REGISTER_BEGIN"; payload: { correctSignUpProps: CorrectSignUpProps } }
  | { type: "USER_REGISTER_SUCCESS"; payload: { backendResponseUser: UserData } }
  | { type: "USER_REGISTER_ERROR"; payload: { errorMessage: ActionMessage } }
  | {
      type: "USER_UPDATE_BEGIN";
      payload: {
        oldEmailAndPassword: EmailAndPassword;
        newUserDataSignUpProps: UserDataSignUpProps;
      };
    }
  | { type: "USER_UPDATE_SUCCESS"; payload: { infoMessage: ActionMessage } }
  | { type: "USER_UPDATE_ERROR"; payload: { errorMessage: ActionMessage } }
  | { type: "USER_DELETE-ACCOUNT_BEGIN"; payload: { emailAndPassword: EmailAndPassword } }
  | { type: "USER_DELETE-ACCOUNT_SUCCESS"; payload: { infoMessage: ActionMessage } }
  | { type: "USER_DELETE-ACCOUNT_ERROR"; payload: { errorMessage: ActionMessage } }
  | { type: "USER_LOGOUT_BEGIN" }
  | { type: "USER_LOGOUT_SUCCESS" }
  | { type: "USER_LOGOUT_ERROR"; payload: { errorMessage: ActionMessage } };
