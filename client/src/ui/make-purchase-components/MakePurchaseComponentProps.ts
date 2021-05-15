import { ShoppingCartProps } from "../shopping-cart/ShoppingCartProps";
import { EmailAndPassword } from "../user-data/UserDataProps";

export interface MakePurchaseComponentProps {
  isVerified: boolean;
  productsInCart: ShoppingCartProps["productsInCart"];
  emailAndPassword?: EmailAndPassword;
}
