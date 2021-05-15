import { ProductProps } from "../product/ProductProps";

export interface ShoppingCartProps {
  productsInCart: Map<ProductProps["id"], number>;
  totalPrice: number;
}
