import React from "react";
import { useHistory } from "react-router-dom";
import { getNavigationLinkTo } from "../../utils/getNavigationLinkTo";

export const EmptyCartMessage: React.FC = () => {
  const history = useHistory();
  const handleStartBuyingClick = () => {
    history.push(getNavigationLinkTo("PAGE_PRODUCT-CATALOGUE"));
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
