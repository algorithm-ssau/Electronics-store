import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { OrderList } from "../../ui/order-list/OrderList";

export const User = () => {
  const ordersState = useTypedSelector((state) => state.orderList);
  const userState = useTypedSelector((state) => state.currentUser);
  const {
    displayedName,
    account,
    realName,
    isAdmin,
    userVerified,
    userIcon,
    emailAndPassword,
  } = userState.userDataProps;
  const isGuest = emailAndPassword === undefined;

  return (
    <div>
      <div className="dataUser">
        <div className="singleLineBlocks">
          <img className="userImage" src={userIcon} alt="аватар юзера" />
        </div>
        <div className="singleLineBlocks">
          <div className="userDescription">
            {isAdmin && <h5>Администратор</h5>}
            <h5>{displayedName}</h5>
            {!userVerified && (
              <h5>Вы не прошли верификацию, дождитесь пока один из администраторов не верифицирует вас</h5>
            )}
            {!isGuest && <h5>Настоящее имя: {realName}</h5>}
            {!isGuest && <h5>Баланс: ${account}</h5>}
          </div>
        </div>
      </div>
      <div className="purchaseHistory">
        {isGuest ? (
          <div>
            <h2>История покупок</h2>
            <h3>Вы совершили покупок: {ordersState.orders.length}</h3>
          </div>
        ) : (
          <h3>Зарегистрируйтесь, чтобы видеть историю покупок</h3>
        )}
      </div>
      <div className="dataPurchase">
        <OrderList />
      </div>
    </div>
  );
};
