import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { OrderToAddBackendFormat } from "../../../interfaces/backend-send-types/OrderToAddBackendFormat";
import { addOrder, fetchOrders } from "../../../store/action-creators/orderListActionCreator";
import { OkPurchaseComponentProps } from "./OkPurchaseComponentProps";
import { signIn } from "../../../store/action-creators/userAсtionCreator";
import { getNavigationLinkTo } from "../../../utils/getNavigationLinkTo";
import { clearCart } from "../../../store/action-creators/shoppingCartActionCreator";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

export const OkPurchaseComponent: React.FC<OkPurchaseComponentProps> = (props) => {
  const { productsInCart } = props;
  const dispatch = useDispatch();
  const { emailAndPassword } = useTypedSelector((state) => state.currentUser).userDataProps;
  const history = useHistory();
  const makePurchase = async () => {
    if (emailAndPassword === undefined) {
      history.push(getNavigationLinkTo("PAGE_SIGN-UP-OR-SIGN-IN"));
      return;
    }
    const order: OrderToAddBackendFormat = {
      products: Array.from(productsInCart).map((item) => {
        return { product_id: item[0], count: item[1] };
      }),
      email: emailAndPassword.email,
      password: emailAndPassword.password,
    };
    await Promise.all([
      dispatch(addOrder(order)),
      dispatch(clearCart()),
      dispatch(signIn(emailAndPassword)),
      dispatch(fetchOrders()),
    ]).then(() => {
      history.push(getNavigationLinkTo("PAGE_PROFILE"));
    });
  };
  return (
    <button type="button" className="loginIn" onClick={makePurchase}>
      <span className="descriptionLogIn">Сделать заказ</span>
    </button>
  );
};
