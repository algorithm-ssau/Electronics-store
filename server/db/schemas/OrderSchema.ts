const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    status: Number,
    product_ids: []
});

const Order = mongoose.model("order",OrderSchema);
module.exports = Order;