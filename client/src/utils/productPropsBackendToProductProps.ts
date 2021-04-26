import { ProductProps } from "../ui/product/ProductProps";
import { ProductPropsBackend } from "../ui/product/ProductPropsBackend";

export const productPropsBackendToProductProps = (productProps: ProductPropsBackend): ProductProps => {
  return {
    id: productProps._id,
    imgSrc: productProps.template_img_src,
    name: productProps.template_name,
    desc: productProps.template_descr,
    price: productProps.template_price,
  };
};
