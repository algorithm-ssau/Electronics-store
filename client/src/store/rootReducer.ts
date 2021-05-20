import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import autoMergeLevel1 from "redux-persist/lib/stateReconciler/autoMergeLevel1";
import { persistReducer } from "redux-persist";
import { productListReducer } from "../ui/product-list/ProductListReducer";
import { shoppingCartReducer } from "../ui/shopping-cart/ShoppingCartReducer";
import { currentUserReducer } from "../ui/user-data/InputUserDataReducer";
import { orderListReducer } from "../ui/order-list/OrderListReducer";

const productListReducerConfig = {
  key: "productList",
  storage,
  autoMergeLevel1,
  blacklist: ["products", "loading", "message"],
};

const shoppingCartReducerConfig = {
  key: "productList",
  storage,
  autoMergeLevel1,
  blacklist: ["productsInCart", "totalPrice"],
};

export const rootReducer = combineReducers({
  productList: persistReducer(productListReducerConfig, productListReducer),
  shoppingCart: persistReducer(shoppingCartReducerConfig, shoppingCartReducer),
  currentUser: currentUserReducer,
  orderList: orderListReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
