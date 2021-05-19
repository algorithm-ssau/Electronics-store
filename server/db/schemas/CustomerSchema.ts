import {Schema, model} from 'mongoose';
import { CustomerResponse } from '../responseInterfaces/customerInterfaces';

const CustomerSchema = new Schema({
    customer_name: {type: String, default: ""},
    email: {type: String, default: ""},
    login: {type:String, default: ""},
    password: {type: String, default: ""},
    account: {type: Number, default: 30000},
    avatar_src: {type: String, default: "https://media.professionali.ru/processor/topics/original/2020/03/02/img120.jpg"},
    order_ids: {type: [String], default: []},
    verified: {type: Boolean, default: true},
});

const Customer = model<CustomerResponse>("customer",CustomerSchema);

export {Customer};