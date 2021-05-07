import { UserDataComponentProps } from "./UserDataComponentProps";
import { InputUserDataAction } from "./InputUserDataActionType";

const initialState: UserDataComponentProps = {
  userDataProps: {
    emailAndPassword: undefined,
    displayedName: "Guest",
    userIcon: "https://pereezd-neva.ru/assets/template/img/spectehnika/d5fa0e2330973dc6b7571d881a345d6b.png",
    userVerified: false,
  },
  loading: false,
  error: undefined,
};

export const currentUserReducer = (state = initialState, action: InputUserDataAction): UserDataComponentProps => {
  switch (action.type) {
    default:
      return state;
  }
};
