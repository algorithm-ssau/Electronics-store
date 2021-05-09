import { InputUserDataAction } from "./InputUserDataActionType";
import { EmailAndPassword, UserDataProps } from "./UserDataComponentProps";
import { ActionMessage } from "../../interfaces/ActionMessage";
import { BackendCustomer } from "../../interfaces/backend-return-types/BackendCustomer";
import { Customer } from "../../interfaces/backend-return-types/Customer";

export const userLoginBegin = (emailAndPassword: EmailAndPassword): InputUserDataAction => ({
  type: "USER_LOGIN_BEGIN",
  payload: { emailAndPassword },
});
export const userLoginSuccess = (userData: UserDataProps): InputUserDataAction => ({
  type: "USER_LOGIN_SUCCESS",
  payload: { userData },
});
export const userLoginError = (errorMessage: ActionMessage): InputUserDataAction => ({
  type: "USER_LOGIN_ERROR",
  payload: { errorMessage },
});
export const userRegisterBegin = (customerDb: BackendCustomer): InputUserDataAction => ({
  type: "USER_REGISTER_BEGIN",
  payload: { customerDb },
});
export const userRegisterSuccess = (customerJustAdded: Customer): InputUserDataAction => ({
  type: "USER_REGISTER_SUCCESS",
  payload: { customerJustAdded },
});
export const userRegisterError = (errorMessage: ActionMessage): InputUserDataAction => ({
  type: "USER_REGISTER_ERROR",
  payload: { errorMessage },
});
export const userUpdateBegin = (
  oldEmailAndPassword: EmailAndPassword,
  newUserDbFormat: BackendCustomer
): InputUserDataAction => ({
  type: "USER_UPDATE_BEGIN",
  payload: { oldEmailAndPassword, newUserDbFormat },
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
export const userLogoutSuccess = (infoMessage: ActionMessage): InputUserDataAction => ({
  type: "USER_LOGOUT_SUCCESS",
  payload: { infoMessage },
});
export const userLogoutError = (errorMessage: ActionMessage): InputUserDataAction => ({
  type: "USER_LOGOUT_ERROR",
  payload: { errorMessage },
});
