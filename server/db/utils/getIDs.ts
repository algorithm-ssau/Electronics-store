import {Customer} from "../schemas/CustomerSchema";
import { Order } from "../schemas/OrderSchema";
import {Product} from "../schemas/ProductSchema";

export async function getCustomerId(filter: any): Promise<string>{
    let customer = await Customer
        .findOne(filter)
        .exec();
    if (customer != null) return customer["_id"];
    else return null;
}

export async function getOrderId(filter: any): Promise<string>{
    let order = await Order
        .findOne(filter)
        .exec();
    if (order != null) return order["_id"];
    else return null;
}

export async function getProductId(filter: any): Promise<string>{
    let product = await Product
        .findOne(filter)
        .exec();
    if (product != null) return product["_id"];
    else return null;
}