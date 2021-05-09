import { Simulate } from "react-dom/test-utils";
import { Order, OrderDB, OrderEntrance } from "../ui/order-list/OrderListProps";
import { OrderOrError } from "../interfaces/json-interfaces/OrderOrError";
import { ProductTuple } from "../interfaces/backend-return-types/BackendOrder";
import { BackendMessage } from "../interfaces/BackendMessage";
import { ActionMessage } from "../interfaces/ActionMessage";
import { ProductProps, ProductPropsDB } from "../ui/product/ProductProps";
import { ProductOrError } from "../interfaces/json-interfaces/ProductOrError";
import { BackendProduct } from "../interfaces/backend-return-types/BackendProduct";
import error = Simulate.error;

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

export const productTupleToOrderEntrance = (productTuple: ProductTuple): OrderEntrance => {
  return {
    productId: productTuple.product_id,
    count: productTuple.count,
  };
};

export const backendResponseOrderToFrontendOrder = (orderOrError: OrderOrError): Order => {
  if (orderOrError.responseType === "Data") {
    return {
      orderId: orderOrError.id,
      orderStatus: orderOrError.orderStatus,
      products: orderOrError.products.map((productTuple) => productTupleToOrderEntrance(productTuple)),
      date: orderOrError.date,
      total: orderOrError.total,
    };
  }
  throw new Error(`orderOrError.responseType was "${orderOrError.responseType}"`);
};

export const backendMessageToActionMessage = (backendMessage: BackendMessage): ActionMessage => {
  return {
    error: backendMessage.error,
    text: backendMessage.message,
  };
};

export const backendResponseProductToFrontendProduct = (response: ProductOrError): ProductProps => {
  if (response.responseType === "Data") {
    return {
      id: response.id,
      name: response.name,
      price: response.price,
      imgSrc: response.imgSrc,
      desc: response.desc,
      type: response.type,
    };
  }
  throw new Error(`response.responseType was "${response.responseType}"`);
};

export const productToProductDb = (product: ProductProps): ProductPropsDB => {
  return {
    price: product.price,
    product_name: product.name,
    img_src: product.imgSrc,
    descr: product.desc,
    type: product.type,
  };
};
