import React from "react";
import { ShoppingCart } from "../../ui/shopping-cart/ShoppingCart";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { EmptyCartMessage } from "../../ui/empty-cart-message/EmptyCartMessage";

export const ShoppingCartPage = () => {
  const shoppingCart = useTypedSelector((state) => state.shoppingCart);
  const isCartEmpty = shoppingCart.productsInCart.size === 0;
  return (
    <div>
      <h2>Корзина</h2>
      <div>{isCartEmpty ? <EmptyCartMessage /> : <ShoppingCart />}</div>
    </div>
  );
};
