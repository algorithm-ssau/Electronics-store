import {Cart, OrderProps, OrderResponse} from "../responseInterfaces/orderInterfaces";

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
            id: order._id,
            orderStatus: order.status,
            products: parseCart(order.products),
            date: order.date
        }
    })
}
