import { ProductProps } from "../product/ProductProps";

export interface CartDB {
  product_id: string;
  count: number;
}

export interface OrderDB {
  status: number;
  products: CartDB[];
  date: string;
  total: number;
}

export interface OrderEntrance {
  productId: ProductProps["id"];
  count: number;
}

export interface Order {
  orderId: string; // todo to User["id"]
  orderStatus: number; // todo to a nice form
  products: OrderEntrance[];
  date: string; // todo to a nice form
  total: number;
}

export interface OrderList {
  orders: Order[];
}
