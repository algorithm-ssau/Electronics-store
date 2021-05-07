import {Cart, OrderProps, OrderResponse} from "../responseInterfaces/orderInterfaces";
import {Product} from "../schemas/ProductSchema";

const parseCart = (res: Cart[]): Cart[] =>{
    return res.map((obj) =>{
        return {
            product_id: obj.product_id,
            count: obj.count
        }
    })
}

export const parseOrders = (res: OrderResponse[]): OrderProps[]=>{
    return res.map((order) => {
        return {
            responseType: "Data",
            id: order._id,
            orderStatus: order.status,
            products: parseCart(order.products),
            date: order.date,
            total: order.total
        }
    })
}

export async function getTotal(cart: Cart[]): Promise<number>{
    let total: number = 0;
    for (const elem of cart){
        let prod = await Product
            .findOne({_id: elem.product_id})
            .exec();
        total += prod.price.valueOf()*elem.count.valueOf();
    }
    return Promise.resolve(total);
}
