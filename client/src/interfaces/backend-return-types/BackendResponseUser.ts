export interface BackendResponseUser {
  nickname: string;
  userIcon: string;
  userVerified: boolean;
  emailAndPassword: {
    email: string;
    password: string;
  };
  realName: string;
  account: number;
  orderIds: string[];
}
