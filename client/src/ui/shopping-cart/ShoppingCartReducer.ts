import { ShoppingCartProps } from "./ShoppingCartProps";
import { ShoppingCartAction } from "./ShoppingCartActionType";

const initialState: ShoppingCartProps = { productsInCart: new Map() };

export const shoppingCartReducer = (state = initialState, action: ShoppingCartAction): ShoppingCartProps => {
  switch (action.type) {
    case "ADD_ITEM": {
      const idItemToAdd = action.payload.productId;
      const numOfThisItemInCart = state.productsInCart.get(idItemToAdd);
      if (numOfThisItemInCart !== undefined) {
        const newState = { ...state };
        newState.productsInCart.set(idItemToAdd, numOfThisItemInCart + 1);
        return newState;
      }
      const newState = { ...state };
      newState.productsInCart.set(idItemToAdd, 1);
      return newState;
    }
    case "REMOVE_ITEM": {
      const idToRemove = action.payload.productId;
      const itemInCart = state.productsInCart.get(idToRemove);
      if (itemInCart === undefined)
        throw new TypeError("Something went wrong, product to remove from cart is undefined");
      if (itemInCart === 1) {
        const newState = { ...state };
        newState.productsInCart.delete(idToRemove);
        return newState;
      }
      const newState = { ...state };
      newState.productsInCart.set(idToRemove, itemInCart - 1);
      return newState;
    }
    case "UPDATE_ITEM_COUNT": {
      return state;
    }
    default:
      return state;
  }
};
