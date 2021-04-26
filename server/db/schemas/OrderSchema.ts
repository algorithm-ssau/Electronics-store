import {Schema,model} from "mongoose";
import {OrderResponse} from "../responseInterfaces/orderInterfaces";

const Cart = new Schema({
    product_id: {type: String, default: ""},
    count: {type: Number, default:0}
})

const OrderSchema = new Schema({
    status: {type:Number, default: 0},
    products: {type: [Cart], default: []},
});

const Order = model<OrderResponse>("order",OrderSchema);

export {Order};