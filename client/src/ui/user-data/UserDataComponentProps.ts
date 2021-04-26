export interface EmailAndPassword {
  email: string;
  password: string;
}

export interface UserDataProps {
  emailAndPassword: EmailAndPassword | undefined; // user is not logged in
  displayedName: string;
  userIcon: string;
  userVerified: boolean;
}

export interface UserDataComponentProps {
  userDataProps: UserDataProps;
  loading: boolean;
  error: undefined | string;
}
