import React from "react";
import { ProductProps } from "./ProductProps";

export const Product: React.FC<ProductProps> = (props) => {
  const { imgSrc, name, price, desc } = props;
  return (
    <div className="productBorder">
      <img className="productImage" alt={imgSrc} src={imgSrc} />
      <section>
        <h3>{name}</h3>
        <h3>${price}</h3>
        <h3>{desc}</h3>
      </section>
    </div>
  );
};
