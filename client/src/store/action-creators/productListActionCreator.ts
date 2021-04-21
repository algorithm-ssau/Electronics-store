import { Dispatch } from "redux";
import axios from "axios";
import { fetchProducts, fetchProductsError, fetchProductsSuccess } from "../../ui/product-list/ProductListActions";
import { productListMock } from "../../ui/product-list/ProductListMock";
import { getDBReqURL } from "../../utils/URLs";

export const fetchProductList = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(fetchProducts());
      const response = await axios.get(getDBReqURL("TEMPLATE", "GET"));
      dispatch(fetchProductsSuccess(response.data));
      setTimeout(() => {
        dispatch(fetchProductsSuccess(productListMock));
      }, 2000);
    } catch (e) {
      dispatch(fetchProductsError("Ошибка при загрузке списка продуктов"));
    }
  };
};
