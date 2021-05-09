import { ActionMessage } from "../../interfaces/ActionMessage";

export interface EmailAndPassword {
  email: string;
  password: string;
}

export interface UserDataSignUpProps {
  emailAndPassword: EmailAndPassword;
  displayedName: string;
  realName: string;
  userIcon: string;
}

export interface UserDataProps {
  emailAndPassword: UserDataSignUpProps["emailAndPassword"] | undefined; // Guest
  displayedName: UserDataSignUpProps["displayedName"];
  realName: UserDataSignUpProps["realName"];
  userIcon: UserDataSignUpProps["userIcon"];
  userVerified: boolean;
}

export interface UserDataComponentProps {
  userDataProps: UserDataProps;
  loading: boolean;
  message: ActionMessage;
}
