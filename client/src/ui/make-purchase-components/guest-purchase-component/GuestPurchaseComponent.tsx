import React from "react";
import { Link } from "react-router-dom";
import { getNavigationLinkTo } from "../../../utils/getNavigationLinkTo";

export const GuestPurchaseComponent: React.FC = () => {
  return (
    <div>
      <div>
        Чтобы сделать заказ,{" "}
        <Link to={getNavigationLinkTo("PAGE_SIGN-UP-OR-SIGN-IN")}>зарегистрируйтесь или войдите</Link>
      </div>
    </div>
  );
};
