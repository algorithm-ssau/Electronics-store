import { Dispatch } from "redux";
import axios from "axios";
import { fetchProducts, fetchProductsError, fetchProductsSuccess } from "../../ui/product-list/ProductListActions";
import { getDBReqURL } from "../../utils/URLs";

export const fetchProductList = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(fetchProducts());
      const response = await axios.get(getDBReqURL("PRODUCT", "GET", ""));
      dispatch(fetchProductsSuccess(response.data));
    } catch (e) {
      dispatch(fetchProductsError(e.message));
    }
  };
};
