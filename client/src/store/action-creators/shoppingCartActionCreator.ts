import { Dispatch } from "redux";

export const addItemToCart = () => {
  return async (dispatch: Dispatch) => {
    try {
      setTimeout(() => {
        // do smth
      }, 2000);
    } catch (e) {
      // handle error
    }
  };
};
