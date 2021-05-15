import { ShoppingCartProps } from "./ShoppingCartProps";
import { ShoppingCartAction } from "./ShoppingCartActionType";

const initialState: ShoppingCartProps = {
  productsInCart: new Map(),
  totalPrice: 0,
};

export const shoppingCartReducer = (state = initialState, action: ShoppingCartAction): ShoppingCartProps => {
  switch (action.type) {
    case "ITEM_ADD": {
      const idItemToAdd = action.payload.product.id;
      const numOfThisItemInCart = state.productsInCart.get(idItemToAdd);
      const newState: ShoppingCartProps = { ...state, totalPrice: state.totalPrice + action.payload.product.price };
      if (numOfThisItemInCart !== undefined) {
        newState.productsInCart.set(idItemToAdd, numOfThisItemInCart + 1);
        return newState;
      }
      newState.productsInCart.set(idItemToAdd, 1);
      return newState;
    }
    case "ITEM_REMOVE": {
      const idItemToRemove = action.payload.product.id;
      const numOfThisItemInCart = state.productsInCart.get(idItemToRemove);
      if (numOfThisItemInCart === undefined) {
        throw new Error(`Something went terribly wrong: no product in cart with id ${idItemToRemove}`);
      }
      const newState: ShoppingCartProps = { ...state, totalPrice: state.totalPrice - action.payload.product.price };
      if (numOfThisItemInCart === 1) {
        newState.productsInCart.delete(idItemToRemove);
        return newState;
      }
      newState.productsInCart.set(idItemToRemove, numOfThisItemInCart - 1);
      return newState;
    }
    default:
      return state;
  }
};
