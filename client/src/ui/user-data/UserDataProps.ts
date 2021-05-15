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

export interface UserData {
  emailAndPassword: UserDataSignUpProps["emailAndPassword"] | undefined;
  displayedName: UserDataSignUpProps["displayedName"];
  realName: UserDataSignUpProps["realName"];
  userIcon: UserDataSignUpProps["userIcon"];
  account: number;
  userVerified: boolean;
  isAdmin: boolean;
  orders: string[];
}

export interface UserDataProps {
  userDataProps: UserData;
  loading: boolean;
  message: ActionMessage;
}
