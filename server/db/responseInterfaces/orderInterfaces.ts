import { Document } from "mongoose";

export interface Cart{
    product_id: String,
    count: Number
}

export interface OrderProps{
    id: String,
    orderStatus: Number,
    products: Cart[],
    date: Date
}

export interface  OrderResponse extends Document{
    status: Number,
    products: Cart[],
    date: Date
}