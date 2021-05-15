import { Order } from "../../ui/order-list/OrderListProps";
import { EmailAndPassword } from "../../ui/user-data/UserDataProps";

export interface OrderToAddProps {
  email: EmailAndPassword["email"];
  password: EmailAndPassword["password"];
  products: Order["products"];
}
