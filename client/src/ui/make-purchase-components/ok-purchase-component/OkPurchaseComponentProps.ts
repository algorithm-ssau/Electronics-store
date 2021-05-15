import { MakePurchaseComponentProps } from "../MakePurchaseComponentProps";
import { EmailAndPassword } from "../../user-data/UserDataProps";

export interface OkPurchaseComponentProps {
  productsInCart: MakePurchaseComponentProps["productsInCart"];
  emailAndPassword: EmailAndPassword;
}
