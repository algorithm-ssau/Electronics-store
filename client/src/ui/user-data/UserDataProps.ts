export interface InputUserDataProps {
  email: string;
  password: string;
}

export interface FullUserDataProps {
  inputUserData: InputUserDataProps | undefined; // in case user just entered the site
  userVerified: boolean;
  displayedName: string;
  loading: boolean;
  error: undefined | string;
  // More props returned from backend
}
