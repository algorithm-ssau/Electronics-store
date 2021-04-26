import { Dispatch } from "redux";
import axios from "axios";
import { fetchProducts, fetchProductsError, fetchProductsSuccess } from "../../ui/product-list/ProductListActions";
import { getDBReqURL } from "../../utils/URLs";
import { ProductProps } from "../../ui/product/ProductProps";
import { productPropsBackendToProductProps } from "../../utils/productPropsBackendToProductProps";
import { ProductPropsBackend } from "../../ui/product/ProductPropsBackend";
import { logger } from "../../utils/logger";

export const fetchProductList = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(fetchProducts());
      const response = await axios.get(getDBReqURL("TEMPLATE", "GET", ""));
      logger.log(response);
      const productPropsArr: ProductProps[] = response.data.map((productPropsBackend: ProductPropsBackend) =>
        productPropsBackendToProductProps(productPropsBackend)
      );
      dispatch(fetchProductsSuccess(productPropsArr));
      logger.log(productPropsArr);
    } catch (e) {
      dispatch(fetchProductsError(e.message));
    }
  };
};
