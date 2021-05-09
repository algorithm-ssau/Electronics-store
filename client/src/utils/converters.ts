import { Order, OrderDB, OrderListProps } from "../ui/order-list/OrderListProps";
import {Customer} from "../interfaces/backend-return-types/Customer";

export const normalOrderToDBOrder = (normalOrder: Order): OrderDB => {
  return {
    status: normalOrder.orderStatus,
    products: normalOrder.products.map((product) => {
      return {
        product_id: product.productId,
        count: product.count,
      };
    }),
    date: normalOrder.date,
    total: normalOrder.total,
  };
};

export const extractOrdersFromCustomer = (customerData: Customer): OrderListProps["orders"] => {
  return customerData.orders;
};
