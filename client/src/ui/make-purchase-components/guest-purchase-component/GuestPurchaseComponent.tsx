import React from "react";
import { Link } from "react-router-dom";

export const GuestPurchaseComponent: React.FC = () => {
  return (
    <div>
      <div>
        Чтобы сделать заказ, <Link to="/signUpOrIn">зарегистрируйтесь или войдите</Link>
      </div>
    </div>
  );
};
