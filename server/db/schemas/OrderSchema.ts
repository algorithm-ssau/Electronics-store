import {Schema,model} from "mongoose";

const OrderSchema = new Schema({
    status: {type:Number, default: 0},
    product_ids: {type: [String], default: []},
});

const Order = model("order",OrderSchema);

export {Order};