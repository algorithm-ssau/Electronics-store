import { Order, OrderDB, OrderEntrance } from "../ui/order-list/OrderListProps";
import { OrderOrError } from "../interfaces/json-interfaces/OrderOrError";
import { ProductTuple } from "../interfaces/backend-return-types/BackendOrder";
import { BackendMessage } from "../interfaces/BackendMessage";
import { ActionMessage } from "../interfaces/ActionMessage";
import { ProductProps, ProductPropsDB } from "../ui/product/ProductProps";
import { ProductOrError } from "../interfaces/json-interfaces/ProductOrError";
import { UserOrError } from "../interfaces/json-interfaces/UserOrError";
import { UserData, UserDataSignUpProps } from "../ui/user-data/UserDataProps";
import { CustomerSchema } from "../interfaces/backend-return-types/CustomerSchema";

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

export const backendResponseProductToFrontendProduct = (productOrError: ProductOrError): ProductProps => {
  if (productOrError.responseType === "Data") {
    return {
      id: productOrError.id,
      name: productOrError.name,
      price: productOrError.price,
      imgSrc: productOrError.imgSrc,
      desc: productOrError.desc,
      type: productOrError.type,
    };
  }
  throw new Error(`response.responseType was "${productOrError.responseType}"`);
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

export const backendResponseUserToFrontendUser = (userOrError: UserOrError): UserData => {
  if (userOrError.responseType === "Data") {
    return {
      emailAndPassword: userOrError.emailAndPassword,
      displayedName: userOrError.nickname,
      realName: userOrError.realName,
      userIcon: userOrError.userIcon,
      userVerified: userOrError.userVerified,
      isAdmin: userOrError.isAdmin,
      account: userOrError.account,
      orders: userOrError.orders,
    };
  }
  throw new Error(`response.responseType was ${userOrError.responseType}`);
};

export const userSignUpPropsToBackendUserDefault = (userSignUpProps: UserDataSignUpProps): CustomerSchema => {
  return {
    account: 10000,
    avatar_src: userSignUpProps.userIcon,
    customer_name: userSignUpProps.realName,
    email: userSignUpProps.emailAndPassword.email,
    login: userSignUpProps.displayedName,
    order_ids: [],
    password: userSignUpProps.emailAndPassword.password,
    verified: false,
  };
};

export const userSignUpPropsToBackendUser = (userSignUpProps: UserDataSignUpProps) => {
  return {
    avatar_src: userSignUpProps.userIcon,
    customer_name: userSignUpProps.realName,
    email: userSignUpProps.emailAndPassword.email,
    login: userSignUpProps.displayedName,
    password: userSignUpProps.emailAndPassword.password,
  };
};
