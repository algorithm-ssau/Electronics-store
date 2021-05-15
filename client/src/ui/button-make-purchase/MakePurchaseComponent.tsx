import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { MakePurchaseComponentProps } from "./MakePurchaseComponentProps";
import { addOrder } from "../../store/action-creators/orderListActionCreator";
import { Order } from "../order-list/OrderListProps";

export const MakePurchaseComponent: React.FC<MakePurchaseComponentProps> = (props) => {
  const { isGuest, isVerified } = props;
  const dispatch = useDispatch();
  const makePurchase = () => {
    const order: Order = {
      date: "",
      orderId: "",
      orderStatus: "",
      products: [],
      total: 0,
    };
    dispatch(addOrder(order));
  };
  if (isGuest) {
    return (
      <div>
        <div>
          Чтобы сделать заказ, <Link to="/signUpOrIn">зарегистрируйтесь или войдите</Link>
        </div>
      </div>
    );
  }
  return (
    <button type="button" className="loginIn" onClick={makePurchase}>
      <span className="descriptionLogIn">Сделать заказ</span>
    </button>
  );
};
