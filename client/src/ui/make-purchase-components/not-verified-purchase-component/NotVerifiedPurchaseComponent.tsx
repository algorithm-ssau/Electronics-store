import React from "react";
import { Link } from "react-router-dom";

export const NotVerifiedPurchaseComponent: React.FC = () => {
  return (
    <div>
      <div>Дождитесь верификации, чтобы делать заказ!</div>
      <Link to="/">На главную</Link>
    </div>
  );
};
