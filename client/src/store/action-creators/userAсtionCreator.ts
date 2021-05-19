import { Dispatch } from "redux";
import axios from "axios";
import {
  userDeleteAccountBegin,
  userDeleteAccountError,
  userDeleteAccountSuccess,
  userLoginBegin,
  userLoginError,
  userLoginSuccess,
  userLogoutBegin,
  userLogoutError,
  userLogoutSuccess,
  userRegisterBegin,
  userRegisterError,
  userRegisterSuccess,
  userUpdateBegin,
  userUpdateError,
  userUpdateSuccess,
} from "../../ui/user-data/InputUserDataActions";
import { EmailAndPassword, UserDataSignUpProps } from "../../ui/user-data/UserDataProps";
import { getDBReqURL } from "../../utils/URLs";
import { UserOrError } from "../../interfaces/json-interfaces/UserOrError";
import {
  backendMessageToActionMessage,
  backendResponseUserToFrontendUser,
  CorrectSignUpProps,
  userSignUpPropsToBackendUser,
  userSignUpPropsToBackendUserDefault,
} from "../../utils/converters";
import { BackendMessage } from "../../interfaces/BackendMessage";

export const signIn = (emailAndPassword: EmailAndPassword) => {
  return async (dispatch: Dispatch) => {
    try {
      await dispatch(userLoginBegin(emailAndPassword));
      if (emailAndPassword.email === "" || emailAndPassword.password === "") {
        const message = { error: true, text: "Пожалуйста, введите логин и пароль" };
        await dispatch(userLoginError(message));
        return;
      }
      const response: UserOrError[] = (
        await axios.get(
          getDBReqURL("CUSTOMER", "GET", `?email=${emailAndPassword.email}&password=${emailAndPassword.password}`)
        )
      ).data;
      if (response[0].responseType === "Message") {
        const message = { error: response[0].error, text: response[0].message };
        await dispatch(userLoginError(message));
        return;
      }
      const userData = backendResponseUserToFrontendUser(response[0]);
      await dispatch(userLoginSuccess(userData));
    } catch (e) {
      await dispatch(userLoginError({ error: true, text: e.message }));
    }
  };
};

export const signUp = (userSignUpProps: UserDataSignUpProps) => {
  return async (dispatch: Dispatch) => {
    try {
      const userToSignUpBackendFormat: CorrectSignUpProps = userSignUpPropsToBackendUserDefault(userSignUpProps);
      await dispatch(userRegisterBegin(userToSignUpBackendFormat));
      const response: UserOrError[] = (
        await axios.post(getDBReqURL("CUSTOMER", "POST"), JSON.stringify(userToSignUpBackendFormat), {
          headers: {
            "content-type": "application/json",
          },
        })
      ).data;
      if (response[0].responseType === "Message") {
        const message = { error: response[0].error, text: response[0].message };
        await dispatch(userRegisterError(message));
        return;
      }
      const userJustRegistered = backendResponseUserToFrontendUser(response[0]);
      await dispatch(userRegisterSuccess(userJustRegistered));
    } catch (e) {
      await dispatch(userRegisterError({ error: true, text: e.message }));
    }
  };
};

export const updateUserInfo = (oldEmailAndPassword: EmailAndPassword, newUserDataProps: UserDataSignUpProps) => {
  return async (dispatch: Dispatch) => {
    try {
      await dispatch(userUpdateBegin(oldEmailAndPassword, newUserDataProps));
      const newUserDataBackendFormat = userSignUpPropsToBackendUser(newUserDataProps);
      const response: BackendMessage[] = (
        await axios.put(
          getDBReqURL(
            "CUSTOMER",
            "PUT",
            `?email=${oldEmailAndPassword.email}&password=${oldEmailAndPassword.password}`
          ),
          JSON.stringify(newUserDataBackendFormat)
        )
      ).data;
      const actionMessage = backendMessageToActionMessage(response[0]);
      if (actionMessage.error) {
        await dispatch(userUpdateError(actionMessage));
        return;
      }
      await dispatch(userUpdateSuccess(actionMessage));
    } catch (e) {
      await dispatch(userUpdateError({ error: true, text: e.message }));
    }
  };
};

export const deleteAccount = (emailAndPassword: EmailAndPassword) => {
  return async (dispatch: Dispatch) => {
    try {
      await dispatch(userDeleteAccountBegin(emailAndPassword));
      const response: BackendMessage[] = (
        await axios.delete(
          getDBReqURL("CUSTOMER", "DELETE", `?email=${emailAndPassword.email}&password=${emailAndPassword.password}`)
        )
      ).data;
      const actionMessage = backendMessageToActionMessage(response[0]);
      if (actionMessage.error) {
        await dispatch(userDeleteAccountError(actionMessage));
        return;
      }
      await dispatch(userDeleteAccountSuccess(actionMessage));
    } catch (e) {
      await dispatch(userDeleteAccountError({ error: true, text: e.message }));
    }
  };
};

export const logOut = () => {
  return async (dispatch: Dispatch) => {
    try {
      await dispatch(userLogoutBegin());
      await dispatch(userLogoutSuccess());
    } catch (e) {
      await dispatch(userLogoutError({ error: true, text: e.message }));
    }
  };
};
