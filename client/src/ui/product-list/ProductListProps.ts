import { ProductProps } from "../product/ProductProps";

export interface ProductListProps {
  // maybe there will be more props
  products: ProductProps[];
  loading: boolean;
  error: null | string;
}
