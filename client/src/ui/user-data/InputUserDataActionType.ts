import { UserDataProps } from "./UserDataComponentProps";

export type InputUserDataAction =
  | { type: "LOADING_USER"; payload: { loading: boolean } }
  | { type: "FETCH_USER_SUCCESS"; payload: { userData: UserDataProps } }
  | { type: "FETCH_USER_ERROR"; payload: { error: string } }
  | { type: "UPDATE_USER_SUCCESS"; payload: { newInfo: UserDataProps } }
  | { type: "UPDATE_USER_ERROR"; payload: { error: string } }
  | { type: "USER_LOG_OUT" };
