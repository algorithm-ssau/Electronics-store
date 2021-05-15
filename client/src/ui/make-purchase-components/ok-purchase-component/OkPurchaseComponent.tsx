import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { OrderToAddProps } from "../../../interfaces/backend-send-types/OrderToAddProps";
import { addOrder } from "../../../store/action-creators/orderListActionCreator";
import { OkPurchaseComponentProps } from "./OkPurchaseComponentProps";
import { signIn } from "../../../store/action-creators/userAсtionCreator";
import { getNavigationLinkTo } from "../../../utils/getNavigationLinkTo";
import { logger } from "../../../utils/logger";
import { clearCart } from "../../../store/action-creators/shoppingCartActionCreator";

export const OkPurchaseComponent: React.FC<OkPurchaseComponentProps> = (props) => {
  const { productsInCart, emailAndPassword } = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const makePurchase = async () => {
    const order: OrderToAddProps = {
      products: Array.from(productsInCart).map((item) => {
        return { productId: item[0], count: item[1] };
      }),
      email: emailAndPassword.email,
      password: emailAndPassword.password,
    };
    logger.log(order);
    dispatch(addOrder(order));
    dispatch(clearCart());
    dispatch(signIn(emailAndPassword));
    history.push(getNavigationLinkTo("PAGE_PROFILE"));
  };
  return (
    <button type="button" className="loginIn" onClick={makePurchase}>
      <span className="descriptionLogIn">Сделать заказ</span>
    </button>
  );
};
