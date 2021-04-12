import {Schema,model} from "mongoose";

const ProductSchema = new Schema({
    template_id: Number,
    order_id: Number,
    template_price: Number,
    actual_price: Number,
    template_name: String,
    template_descr: String
});

const Product = model("product",ProductSchema);

export {Product};