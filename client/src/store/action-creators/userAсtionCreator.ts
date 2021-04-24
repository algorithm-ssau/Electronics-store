import { Dispatch } from "redux";
import {
  fetchUserError,
  fetchUserSuccess,
  loadingUser,
  updateUserError,
  updateUserSuccess,
  userLogOut,
} from "../../ui/user-data/InputUserDataActions";
import { inputUserDataMock } from "../../ui/user-data/InputUserDataMock";
import { EmailAndPassword, UserDataProps } from "../../ui/user-data/UserDataComponentProps";

export const getUserInfo = (emailAndPassword: EmailAndPassword) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(loadingUser(true));
      // todo get user info from data base by email and password
      setTimeout(() => {
        const user = inputUserDataMock.find((userData) => userData.emailAndPassword === emailAndPassword);
        if (user) {
          dispatch(fetchUserSuccess(user));
          return;
        }
        dispatch(fetchUserError(`Your account doesn't exist, maybe you meant to sign in instead!`));
      }, 2000);
    } catch (e) {
      dispatch(fetchUserError(e.message));
    }
  };
};

export const updateUserInfo = (oldEmailAndPassword: EmailAndPassword, newUserInfo: UserDataProps) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(loadingUser(true));
      // todo update user info in data base by old email and password
      dispatch(updateUserSuccess(newUserInfo));
    } catch (e) {
      dispatch(updateUserError(e.message));
    }
  };
};

export const logOut = () => {
  return async (dispatch: Dispatch) => {
    dispatch(loadingUser(true));
    dispatch(userLogOut());
    dispatch(loadingUser(false));
  };
};
