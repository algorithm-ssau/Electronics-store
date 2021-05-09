import { Document } from "mongoose";

export interface Cart{
    product_id: String,
    count: Number
}

export interface OrderProps{
    responseType: String,
    id: String,
    orderStatus: String,
    products: Cart[],
    date: Date,
    total: Number
}

export interface  OrderResponse extends Document{
    status: String,
    products: Cart[],
    date: Date,
    total: Number
}