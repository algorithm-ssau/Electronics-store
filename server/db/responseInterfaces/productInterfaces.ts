import { Document } from "mongoose";

export interface ProductProps {
    id: String;
    name: String;
    price: Number;
    imgSrc: String;
    desc: String;
    type: String;
}

export interface ProductResponse extends Document{
    price: Number;
    product_name: String;
    descr: String;
    type: String;
    img_src: String;
}
