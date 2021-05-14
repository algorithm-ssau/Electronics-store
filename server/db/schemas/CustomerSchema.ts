import {Schema, model} from 'mongoose';
import { CustomerResponse } from '../responseInterfaces/customerInterfaces';

const CustomerSchema = new Schema({
    customer_name: {type: String, default: ""},
    email: {type: String, default: ""},
    login: {type:String, default: ""},
    password: {type: String, default: ""},
    account: {type: Number, default: 10000},
    avatar_src: {type: String, default: "https://media.wired.com/photos/5cdefb92b86e041493d389df/1:1/w_988,h_988,c_limit/Culture-Grumpy-Cat-487386121.jpg"},
    order_ids: {type: [String], default: []},
    verified: {type: Boolean, default: false},
});

const Customer = model<CustomerResponse>("customer",CustomerSchema);

export {Customer};