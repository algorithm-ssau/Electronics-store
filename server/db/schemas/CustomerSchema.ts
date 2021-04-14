import {Schema, model} from 'mongoose';

const CustromerSchema = new Schema({
    customer_name: {type: String, default: ""},
    login: {type:String, default: ""},
    password: {type: String, default: ""},
    account: {type: Number, default: 0},
    order_ids: {type: [String], default: []},
});

const Customer = model("customer",CustromerSchema);

export {Customer};