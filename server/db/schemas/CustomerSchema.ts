import {Schema, model} from 'mongoose';
import { CustomerResponse } from '../responseInterfaces/customerInterfaces';

const CustomerSchema = new Schema({
    customer_name: {type: String, default: ""},
    email: {type: String, default: ""},
    login: {type:String, default: ""},
    password: {type: String, default: ""},
    account: {type: Number, default: 0},
    avatar_src: {type: String, default: ""},
    order_ids: {type: [String], default: []},
    verified: {type: Boolean, default: false},
});

const Customer = model<CustomerResponse>("customer",CustomerSchema);

export {Customer};