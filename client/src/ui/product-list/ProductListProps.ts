import { ProductProps } from "../product/ProductProps";
import { ActionMessage } from "../../interfaces/ActionMessage";

export interface ProductListProps {
  // maybe there will be more props
  products: ProductProps[];
  loading: boolean;
  message: ActionMessage;
}
