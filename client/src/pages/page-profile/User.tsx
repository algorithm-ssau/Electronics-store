import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { OrderHistory } from "../../ui/order-history/OrderHistory";
import { UserData } from "../../ui/user-data/UserData";
import { checkIsGuest } from "../../utils/utils";

export const User = () => {
  const ordersState = useTypedSelector((state) => state.orderList);
  const userState = useTypedSelector((state) => state.currentUser);
  const isGuest = checkIsGuest(userState.userDataProps.emailAndPassword);

  return (
    <div>
      <UserData userDataProps={userState.userDataProps} loading={userState.loading} message={userState.message} />
      <OrderHistory isGuest={isGuest} numOfOrders={ordersState.orders.length} />
    </div>
  );
};
