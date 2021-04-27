import {ProductProps, ProductResponse} from "../responseInterfaces/productInterfaces";

export const parseProducts = (res: ProductResponse[]): ProductProps[] => {
    return res.map((product) => {
        return {
            id: product._id,
            name: product.product_name,
            price: product.price,
            imgSrc: product.img_src,
            desc: product.descr,
            type: product.type,
        }
    })
}