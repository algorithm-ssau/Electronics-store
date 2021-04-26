import { InputUserDataAction } from "./InputUserDataActionType";
import { UserDataProps } from "./UserDataComponentProps";

export const loadingUser = (loading: boolean): InputUserDataAction => ({
  type: "LOADING_USER",
  payload: { loading },
});
export const fetchUserSuccess = (response: UserDataProps): InputUserDataAction => ({
  type: "FETCH_USER_SUCCESS",
  payload: { userData: response },
});
export const fetchUserError = (error: string): InputUserDataAction => ({
  type: "FETCH_USER_ERROR",
  payload: { error },
});
export const updateUserSuccess = (userInfo: UserDataProps): InputUserDataAction => ({
  type: "UPDATE_USER_SUCCESS",
  payload: { newInfo: userInfo },
});
export const updateUserError = (error: string): InputUserDataAction => ({
  type: "UPDATE_USER_ERROR",
  payload: { error },
});
export const userLogOut = (): InputUserDataAction => ({
  type: "USER_LOG_OUT",
});
