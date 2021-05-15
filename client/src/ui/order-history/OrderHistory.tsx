import React, { FC } from "react";
import { Link } from "react-router-dom";
import { OrderList } from "../order-list/OrderList";
import { OrderHistoryProps } from "./OrderHistoryProps";

export const OrderHistory: FC<OrderHistoryProps> = ({ numOfOrders, isGuest }) => {
  const orderHistoryText =
    numOfOrders === 0 ? "Вы не совершили ни одной покупки" : `Вы совершили покупок: ${numOfOrders}`;
  return (
    <div>
      <div className="purchaseHistory">
        {isGuest ? (
          <h3>
            <Link to="signUpOrIn">Зарегистрируйтесь или войдите</Link>, чтобы видеть историю покупок
          </h3>
        ) : (
          <div>
            <h2>История покупок</h2>
            <h3>{orderHistoryText}</h3>
          </div>
        )}
      </div>
      <div className="dataPurchase">
        <OrderList />
      </div>
    </div>
  );
};
