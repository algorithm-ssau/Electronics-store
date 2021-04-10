import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Product } from "../product/Product";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { addItemToCart, removeItemFromCart } from "./ShoppingCartActions";

export const ShoppingCart = () => {
  const { productsInCart } = useTypedSelector((state) => state.shoppingCart);
  const { products } = useTypedSelector((state) => state.productList);
  const dispatch = useDispatch();

  const [displayedItems, setDisplayedItems] = useState(productsInCart);

  return (
    <div>
      <h2>Корзина</h2>
      <div className="product">
        {Array.from(displayedItems).map((itemInCart) => {
          const productId = itemInCart[0];
          const productAmount = itemInCart[1];
          const product = products.find((curProduct) => curProduct.id === productId);
          if (product !== undefined) {
            return (
              <div key={product.id}>
                <Product {...product} />
                <div>
                  <button type="button" onClick={() => dispatch(removeItemFromCart(productId))}>
                    -
                  </button>
                  <p>{productAmount}</p>
                  <button type="button" onClick={() => dispatch(addItemToCart(productId))}>
                    +
                  </button>
                </div>
              </div>
            );
          }
          return <>Error: item in shopping cart differs from items in list</>;
        })}
      </div>
    </div>
  );
};