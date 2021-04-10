import {Schema, model} from 'mongoose';

const CustromerSchema = new Schema({
    customer_name: String,
    login: String,
    password: String,
    account: Number,
    order_ids: []
});

const Customer = model("customer",CustromerSchema);

export {Customer};