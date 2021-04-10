import React from "react";
import { ProductListProps } from "./ProductListProps";
import { ProductProps } from "../product/ProductProps";
import { Product } from "../product/Product";
import { ButtonBuy } from "../button-buy/ButtonBuy";

export const ProductList: React.FC<{ products: ProductListProps["products"] }> = (props) => {
  const { products } = props;
  return (
    <div>
      <h2>Каталог товаров</h2>
      <div className="product">
        {products.map((product: ProductProps) => (
          <div key={product.id}>
            <Product {...product} />
            <ButtonBuy productId={product.id} />
          </div>
        ))}
      </div>
    </div>
  );
};
