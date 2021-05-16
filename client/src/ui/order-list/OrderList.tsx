import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { EStoreTable } from "../../pure-components/estore-table/EStoreTable";
import { getUniqueId } from "../../utils/uniqueId";
import { logger } from "../../utils/logger";

export const OrderList: React.FC = () => {
  const { orders, loading, message } = useTypedSelector((state) => state.orderList);

  logger.log(orders);

  if (loading) {
    return <div>Загрузка...</div>;
  }
  if (message.error) {
    return <div>{message.text}</div>;
  }
  const header = ["дата", "статус заказа", "продукты в составе", "итого"].map(
    (text): JSX.Element => <div key={getUniqueId()}>{text}</div>
  );
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
