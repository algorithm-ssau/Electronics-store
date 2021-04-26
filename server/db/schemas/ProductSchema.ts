import {Schema,model} from "mongoose";
import {ProductResponse} from "../responseInterfaces/productInterfaces";

const ProductSchema = new Schema({
    price: {type:Number, default: 0},
    product_name: {type:String, default: ""},
    descr: {type: String, default:""},
    type: {type:String, default:""},
    img_src: {type:String, default:""},
});

const Product = model<ProductResponse>("product",ProductSchema);

export {Product};