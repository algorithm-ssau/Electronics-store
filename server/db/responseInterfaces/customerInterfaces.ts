import {Document} from "mongoose";

export interface EmailAndPassword {
    email: String;
    password: String;
}

export interface UserDataProps {
    responseType: String;
    emailAndPassword: EmailAndPassword | undefined; // user is not logged in
    nickname: String;
    userIcon: String;
    userVerified: Boolean;
    realName: String;
    account: Number;
    orders: String[];
}

export interface CustomerResponse extends Document{
    customer_name: String,
    email: String,
    login: String,
    password: String,
    account: Number,
    avatar_src: String,
    order_ids: String[],
    verified: Boolean
}