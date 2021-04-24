import { InputUserDataAction } from "./InputUserDataActionType";
import { UserDataProps } from "./UserDataProps";

export const fetchUser = (userLogin: string, userPassword: string): InputUserDataAction => ({
  type: "FETCH_USER",
  payload: { enteredLogin: userLogin, enteredPassword: userPassword },
});
export const fetchUserSuccess = (response: UserDataProps): InputUserDataAction => ({
  type: "FETCH_USER_SUCCESS",
  payload: { userData: response },
});
export const fetchUserError = (errorMessage: string): InputUserDataAction => ({
  type: "FETCH_USER_ERROR",
  payload: { error: errorMessage },
});
export const updateUser = (newUserInfo: UserDataProps): InputUserDataAction => ({
  type: "UPDATE_USER_INFO",
  payload: { newInfo: newUserInfo },
});
export const userLogOut = (): InputUserDataAction => ({
  type: "USER_LOG_OUT",
});
