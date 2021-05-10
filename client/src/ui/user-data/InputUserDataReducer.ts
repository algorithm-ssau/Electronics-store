import { UserDataProps } from "./UserDataProps";
import { InputUserDataAction } from "./InputUserDataActionType";

const initialState: UserDataProps = {
  userDataProps: {
    emailAndPassword: undefined,
    displayedName: "Guest",
    realName: "",
    userIcon: "https://pereezd-neva.ru/assets/template/img/spectehnika/d5fa0e2330973dc6b7571d881a345d6b.png",
    userVerified: false,
  },
  loading: false,
  message: { error: false, text: "" },
};

export const currentUserReducer = (state = initialState, action: InputUserDataAction): UserDataProps => {
  switch (action.type) {
    case "USER_LOGIN_BEGIN":
      return {
        ...state,
        loading: true,
        message: {
          ...state.message,
          error: false,
          text: `Logging in as ${action.payload.emailAndPassword.email}`,
        },
      };
    case "USER_LOGIN_SUCCESS":
      return {
        ...state,
        userDataProps: action.payload.userData,
        loading: false,
        message: {
          ...state.message,
          error: false,
          text: `Successfully logged in as ${action.payload.userData.emailAndPassword?.email}`,
        },
      };
    case "USER_LOGIN_ERROR":
      return {
        ...state,
        loading: false,
        message: action.payload.errorMessage,
      };
    case "USER_REGISTER_BEGIN":
      return {
        ...state,
        loading: true,
        message: {
          ...state.message,
          error: false,
          text: `Signing up new user with credentials: ${action.payload.customerSchema}`,
        },
      };
    case "USER_REGISTER_SUCCESS":
      return {
        ...state,
        loading: false,
        message: {
          ...state.message,
          error: false,
          text: `Signed up successfully: ${action.payload.backendResponseUser}`,
        },
      };
    case "USER_REGISTER_ERROR":
      return {
        ...state,
        loading: false,
        message: action.payload.errorMessage,
      };
    case "USER_UPDATE_BEGIN":
      return {
        ...state,
        loading: true,
        message: {
          ...state.message,
          error: false,
          text: `Updating user with old credentials ${action.payload.oldEmailAndPassword} to ${action.payload.newUserDataSignUpProps}`,
        },
      };
    case "USER_UPDATE_SUCCESS":
      return {
        ...state,
        loading: false,
        message: action.payload.infoMessage,
      };
    case "USER_UPDATE_ERROR":
      return {
        ...state,
        loading: false,
        message: action.payload.errorMessage,
      };
    case "USER_DELETE-ACCOUNT_BEGIN":
      return {
        ...state,
        loading: true,
        message: {
          ...state.message,
          error: false,
          text: `Deleting user with credentials ${action.payload.emailAndPassword}`,
        },
      };
    case "USER_DELETE-ACCOUNT_SUCCESS":
      return {
        ...state,
        loading: false,
        message: action.payload.infoMessage,
      };
    case "USER_DELETE-ACCOUNT_ERROR":
      return {
        ...state,
        loading: false,
        message: action.payload.errorMessage,
      };
    case "USER_LOGOUT_BEGIN":
      return {
        ...state,
        loading: true,
        userDataProps: initialState.userDataProps,
        message: {
          ...state.message,
          error: false,
          text: "Logging out",
        },
      };
    case "USER_LOGOUT_SUCCESS":
      return {
        ...state,
        loading: false,
        message: {
          ...state.message,
          error: false,
          text: "Successful logout",
        },
      };
    case "USER_LOGOUT_ERROR":
      return {
        ...state,
        loading: false,
        message: {
          ...state.message,
          error: true,
          text: "Couldn't log out",
        },
      };
    default:
      return state;
  }
};
