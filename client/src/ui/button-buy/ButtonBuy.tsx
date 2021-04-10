import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../shopping-cart/ShoppingCartActions";
import { ButtonBuyProps } from "./ButtonBuyProps";

export const ButtonBuy: React.FC<ButtonBuyProps> = (props) => {
  const { productId } = props;
  const dispatch = useDispatch();
  return (
    <div>
      <button type="button" onClick={() => dispatch(addItemToCart(productId))}>
        Купить
      </button>
    </div>
  );
};
