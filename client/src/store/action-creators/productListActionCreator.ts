import { Dispatch } from "redux";
import axios from "axios";
import { fetchProducts, fetchProductsError, fetchProductsSuccess } from "../../ui/product-list/ProductListActions";
import { getDBReqURL } from "../../utils/URLs";
import { ProductProps } from "../../ui/product/ProductProps";

interface ProductPropsBackend {
  template_name: string;
  template_price: number;
  template_descr: string;
  template_img_src: string;
}

export const fetchProductList = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(fetchProducts());
      const response = await axios.get(getDBReqURL("TEMPLATE", "GET", ""));
      const resProductPropsArr: ProductProps[] = response.data.forEach((productInServerFormat) => {
        return {
          ...productInServerFormat,
          imgSrc: productInServerFormat.template_img_src,
          name: productInServerFormat.template_name,
          desc: productInServerFormat.template_descr,
          price: productInServerFormat.template_price,
        };
      });
      dispatch(fetchProductsSuccess(resProductPropsArr));
    } catch (e) {
      dispatch(fetchProductsError(e.message));
    }
  };
};
