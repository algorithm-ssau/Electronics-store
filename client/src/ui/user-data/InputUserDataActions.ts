import { InputUserDataAction } from "./InputUserDataActionType";
import { EmailAndPassword, UserData, UserDataSignUpProps } from "./UserDataProps";
import { ActionMessage } from "../../interfaces/ActionMessage";
import { CorrectSignUpProps } from "../../utils/converters";

export const userLoginBegin = (emailAndPassword: EmailAndPassword): InputUserDataAction => ({
  type: "USER_LOGIN_BEGIN",
  payload: { emailAndPassword },
});
export const userLoginSuccess = (userData: UserData): InputUserDataAction => ({
  type: "USER_LOGIN_SUCCESS",
  payload: { userData },
});
export const userLoginError = (errorMessage: ActionMessage): InputUserDataAction => ({
  type: "USER_LOGIN_ERROR",
  payload: { errorMessage },
});
export const userRegisterBegin = (correctSignUpProps: CorrectSignUpProps): InputUserDataAction => ({
  type: "USER_REGISTER_BEGIN",
  payload: { correctSignUpProps },
});
export const userRegisterSuccess = (backendResponseUser: UserData): InputUserDataAction => ({
  type: "USER_REGISTER_SUCCESS",
  payload: { backendResponseUser },
});
export const userRegisterError = (errorMessage: ActionMessage): InputUserDataAction => ({
  type: "USER_REGISTER_ERROR",
  payload: { errorMessage },
});
export const userUpdateBegin = (
  oldEmailAndPassword: EmailAndPassword,
  newUserDataSignUpProps: UserDataSignUpProps
): InputUserDataAction => ({
  type: "USER_UPDATE_BEGIN",
  payload: { oldEmailAndPassword, newUserDataSignUpProps },
});
export const userUpdateSuccess = (infoMessage: ActionMessage): InputUserDataAction => ({
  type: "USER_UPDATE_SUCCESS",
  payload: { infoMessage },
});
export const userUpdateError = (errorMessage: ActionMessage): InputUserDataAction => ({
  type: "USER_UPDATE_ERROR",
  payload: { errorMessage },
});
export const userDeleteAccountBegin = (emailAndPassword: EmailAndPassword): InputUserDataAction => ({
  type: "USER_DELETE-ACCOUNT_BEGIN",
  payload: { emailAndPassword },
});
export const userDeleteAccountSuccess = (infoMessage: ActionMessage): InputUserDataAction => ({
  type: "USER_DELETE-ACCOUNT_SUCCESS",
  payload: { infoMessage },
});
export const userDeleteAccountError = (errorMessage: ActionMessage): InputUserDataAction => ({
  type: "USER_DELETE-ACCOUNT_ERROR",
  payload: { errorMessage },
});
export const userLogoutBegin = (): InputUserDataAction => ({
  type: "USER_LOGOUT_BEGIN",
});
export const userLogoutSuccess = (): InputUserDataAction => ({
  type: "USER_LOGOUT_SUCCESS",
});
export const userLogoutError = (errorMessage: ActionMessage): InputUserDataAction => ({
  type: "USER_LOGOUT_ERROR",
  payload: { errorMessage },
});
