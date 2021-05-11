import { ProductProps } from "../../ui/product/ProductProps";

export interface BackendProduct {
  price: ProductProps["price"];
  product_name: ProductProps["name"];
  img_src: ProductProps["imgSrc"];
  descr: ProductProps["desc"];
  type: ProductProps["type"];
}
