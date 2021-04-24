import { InputUserDataProps } from "./UserDataProps";

export type InputUserDataAction =
  | { type: "FETCH_USER"; payload: { enteredLogin: string; enteredPassword: string } }
  | { type: "FETCH_USER_SUCCESS"; payload: { userData: InputUserDataProps } }
  | { type: "FETCH_USER_ERROR"; payload: { error: string } }
  | { type: "USER_LOG_OUT" }
  | { type: "UPDATE_USER_INFO"; payload: { newInfo: InputUserDataProps } };
