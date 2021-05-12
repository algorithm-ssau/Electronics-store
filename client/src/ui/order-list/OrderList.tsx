import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { EStoreTable } from "../table/EStoreTable";
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
      // todo add stuff for admin
      <div key={getUniqueId()}>{order.date}</div>,
      <div key={getUniqueId()}>{order.orderStatus}</div>,
      <div key={getUniqueId()}>{order.products}</div>,
      <div key={getUniqueId()}>{order.total}</div>,
    ];
  });
  return <EStoreTable body={[header, ...body]} columnHeights={[]} columnWidths={[]} />;
};
/*

var input = {
  English: 4,
  Math: 5,
  CompSci: 6
};
var op = [];
Object.keys(input).forEach(function(key) {
  var obj = {};
  obj[key] = input[key];
  op.push(obj); //push newly created object in `op`array
});
console.log(op); 

*/
