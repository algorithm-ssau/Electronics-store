const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustromerSchema = new Schema({
    customer_id: Number,
    customer_name: String,
    login: String,
    password: String,
    account: Number,
    order_ids: []
});

const Customer = mongoose.model("customer",CustromerSchema);
module.exports = Customer;