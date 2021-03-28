const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    order_id: Number,
    status: Number,
    product_ids: []
});

const Order = mongoose.model("order",OrderSchema);
module.exports = Order;