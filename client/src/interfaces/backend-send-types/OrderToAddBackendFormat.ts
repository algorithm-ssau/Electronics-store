import { OrderEntrance } from "../../ui/order-list/OrderListProps";
import { EmailAndPassword } from "../../ui/user-data/UserDataProps";

export interface ProductDbFormat {
  product_id: OrderEntrance["productId"];
  count: OrderEntrance["count"];
}

export interface OrderToAddBackendFormat {
  email: EmailAndPassword["email"];
  password: EmailAndPassword["password"];
  products: ProductDbFormat[];
}
