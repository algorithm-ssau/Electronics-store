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
    <div>
      <img className="productImage" alt={icon} src={icon} />
      <section>
        <h5>{name}</h5>
      </section>
    </div>
  );
};
