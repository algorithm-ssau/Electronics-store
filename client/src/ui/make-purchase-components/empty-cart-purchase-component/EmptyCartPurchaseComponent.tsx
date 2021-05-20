import React from "react";
import { Link } from "react-router-dom";
import { getNavigationLinkTo } from "../../../utils/getNavigationLinkTo";

export const EmptyCartPurchaseComponent: React.FC = () => {
  return (
    <div>
      <div>
        Чтобы сделать заказ, <Link to={getNavigationLinkTo("PAGE_SHOPPING-CART")}>купите что-нибудь!</Link>
      </div>
    </div>
  );
};
