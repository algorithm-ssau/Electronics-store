import {Schema,model} from "mongoose";
import {OrderResponse} from "../responseInterfaces/orderInterfaces";

const Cart = new Schema({
    product_id: {type: String, default: ""},
    count: {type: Number, default:0}
})

const OrderSchema = new Schema({
    status: {type:String, default: ""},
    products: {type: [Cart], default: []},
    date: {type: Date, default: Date.now()},
    total: {type: Number, default: undefined}
});

const Order = model<OrderResponse>("order",OrderSchema);

export {Order};