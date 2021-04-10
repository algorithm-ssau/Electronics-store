import React from "react";
import { useDispatch } from "react-redux";
import { ProductProps } from "./ProductProps";
import { addItemToCart } from "../shopping-cart/ShoppingCartActions";

export const Product: React.FC<ProductProps> = (props) => {
  const dispatch = useDispatch();
  const { img, name, price, id } = props;
  return (
    <div className="productBorder">
      <img className="productImage" alt="SomeImage" src={img} />
      <section>
        <h3>{name}</h3>
        <h3>${price}</h3>
      </section>
    </div>
  );
};
