import React from "react";
import { ProductProps } from "../product/ProductProps";

export interface ProductMiniatureProps {
  name: ProductProps["name"];
  desc: ProductProps["desc"];
  icon: ProductProps["imgSrc"];
}

export const ProductMiniature: React.FC<ProductMiniatureProps> = (props) => {
  const { name, icon, desc } = props;
  return (
    <div className="productBorder">
      <img className="productImage" alt={icon} src={icon} />
      <section>
        <h3>{name}</h3>
        <h3>{desc}</h3>
      </section>
    </div>
  );
};
