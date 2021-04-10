import { combineReducers } from "redux";
import { productListReducer } from "../ui/product-list/ProductListReducer";
import { shoppingCartReducer } from "../ui/shopping-cart/ShoppingCartReducer";

export const rootReducer = combineReducers({
  productList: productListReducer,
  shoppingCart: shoppingCartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
