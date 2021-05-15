import React from "react";
import { useHistory } from "react-router-dom";

export const EmptyCartMessage: React.FC = () => {
  const history = useHistory();
  const handleStartBuyingClick = () => {
    history.push("/products");
  };
  return (
    <div>
      <p>Ваша корзина пуста, попробуйте купить что то!</p>
      <button type="button" className="loginIn" onClick={handleStartBuyingClick}>
        <span className="descriptionLogIn">За покупками</span>
      </button>
    </div>
  );
};
