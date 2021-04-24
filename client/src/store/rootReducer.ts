import { combineReducers } from "redux";
import { productListReducer } from "../ui/product-list/ProductListReducer";
import { shoppingCartReducer } from "../ui/shopping-cart/ShoppingCartReducer";
import { currentUserReducer } from "../ui/user-data/InputUserDataReducer";

export const rootReducer = combineReducers({
  productList: productListReducer,
  shoppingCart: shoppingCartReducer,
  currentUser: currentUserReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
