import { UserData } from "../ui/user-data/UserDataProps";

export const checkIsGuest = (emailAndPassword: UserData["emailAndPassword"]): boolean => {
  return emailAndPassword === undefined || (emailAndPassword.email === "" && emailAndPassword.password === "");
};

export const userIsRegistered = (emailAndPassword: UserData["emailAndPassword"]): boolean => {
  return !checkIsGuest(emailAndPassword);
};
