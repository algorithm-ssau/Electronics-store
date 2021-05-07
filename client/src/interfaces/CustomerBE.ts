export interface CustomerBE {
  login: string;
  customer_name: string;
  password: string;
  verified: boolean;
  account: number;
  email: string;
  avatar_src: string;
  order_ids: [];
}
