import { FullUserDataProps } from "./UserDataProps";
import { InputUserDataAction } from "./InputUserDataActionType";

const initialState: FullUserDataProps = {
  inputUserData: undefined,
  userVerified: false,
  displayedName: "Guest",
  loading: false,
  error: undefined,
};

export const currentUserReducer = (state = initialState, action: InputUserDataAction): FullUserDataProps => {
  switch (action.type) {
    case "FETCH_USER":
      return { ...state, loading: true };
    case "FETCH_USER_SUCCESS":
      return { ...state, userVerified: true, inputUserData: action.payload.userData, loading: false };
    case "FETCH_USER_ERROR":
      return { ...state, userVerified: false, loading: false };
    case "UPDATE_USER_INFO":
      return { ...state, inputUserData: action.payload.newInfo };
    case "USER_LOG_OUT":
      return { ...state, inputUserData: undefined, userVerified: false };
    default:
      return state;
  }
};
