import { Dispatch } from "redux";
import { fetchUser, fetchUserError, fetchUserSuccess } from "../../ui/user-data/InputUserDataActions";
import { inputUserDataMock } from "../../ui/user-data/InputUserDataMock";

export const getUserInfo = (enteredLogin: string, enteredPassword: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(fetchUser(enteredLogin, enteredPassword));
      setTimeout(() => {
        dispatch(fetchUserSuccess(inputUserDataMock[0]));
      }, 2000);
    } catch (e) {
      dispatch(fetchUserError(e.message));
    }
  };
};
