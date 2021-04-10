import {Schema,model} from "mongoose";

const OrderSchema = new Schema({
    status: Number,
    product_ids: []
});

const Order = model("order",OrderSchema);

export {Order};