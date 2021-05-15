import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { EStoreTable } from "../../pure-components/estore-table/EStoreTable";
import { getUniqueId } from "../../utils/uniqueId";

export const OrderList = () => {
  const { orders, loading, message } = useTypedSelector((state) => state.orderList);

  if (loading) {
    return <div>Загрузка...</div>;
  }
  if (message.error) {
    return <div>{message.text}</div>;
  }
  const header = [""].map((text): JSX.Element => <div key={getUniqueId()}>{text}</div>);
  const body = orders.map((order) => {
    return [
      <div key={getUniqueId()}>{order.date}</div>,
      <div key={getUniqueId()}>{order.orderStatus}</div>,
      <div key={getUniqueId()}>{order.products}</div>,
      <div key={getUniqueId()}>{order.total}</div>,
    ];
  });
  return <EStoreTable body={[header, ...body]} />;
};
