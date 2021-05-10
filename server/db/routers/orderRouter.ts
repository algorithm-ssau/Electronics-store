import {Router} from 'express';
import {Order} from "../schemas/OrderSchema";
import {getTotal, parseOrders} from "../utils/orderParser";
import * as aqp from 'api-query-params';
import {getCustomerId, getOrderId} from "../utils/getIDs";
import {checkAccount} from "../utils/checks";
import {Customer} from "../schemas/CustomerSchema";

const orderRouter = Router();

orderRouter.get("/orders/get",(req,res)=>{
    const { filter, skip, limit, sort, projection, population } = aqp(req.query);
    Order.find(filter)
        .skip(skip)
        .limit(limit)
        .sort(sort)
        .select(projection)
        .populate(population)
        .then(order =>{
            if (order.length>0) {
                res.send(parseOrders(order));
            }
            else res.send([{
                responseType: "Message",
                error:true,
                message:"Order not found"
            }])
        });
});

orderRouter.post("/orders/post",async(req,res)=>{
    const customerId = await getCustomerId({email: req.body.email, password: req.body.password});
    if (customerId!=null) {
        const total: number = await getTotal(req.body.products);
        const accountFlag = await checkAccount(req.body.email,req.body.password,total);
        if (accountFlag) {
            const order = {
                status: "Принят в обработку",
                total: total,
                products: req.body.products
            }
            Order.create(order)
                .then(async order => {
                    const orderId = order._id;
                    let customer = await Customer.findOne({email: req.body.email, password: req.body.password});
                    customer.set('account', customer.get('account') - total);
                    let customerOrders = customer.get('order_ids');
                    customerOrders.push(orderId);
                    customer.set('order_ids', customerOrders);
                    Customer.findByIdAndUpdate({_id: customerId}, customer)
                        .then(() => {
                            res.send(parseOrders([order]));
                        });
                });
        } else res.send([{
            responseType: "Message",
            error: true,
            message: "Customer hasn't got enough money to pay"
        }])
    }
    else res.send([{
        responseType: "Message",
        error: true,
        message: "Customer not found"
    }])
});

orderRouter.put("/orders/update",async(req,res)=>{
    const { filter, skip, limit, sort, projection, population } = aqp(req.query);
    let id = await getOrderId(filter);
    if (id != null) {
        Order.findByIdAndUpdate({_id: id}, req.body)
            .then(() => {
                res.send([{
                    responseType: "Message",
                    error: false,
                    message: "Order was successfully updated"
                }])
            });
    }
    else res.send([{
        responseType: "Message",
        error: true,
        message: "Order not found"
    }])
});

orderRouter.delete("/orders/delete",(req,res)=>{
    const { filter, skip, limit, sort, projection, population } = aqp(req.query);
    Order.deleteOne(filter)
        .then((order)=> {
            if (order.deletedCount > 0) {
                res.send([{
                    responseType: "Message",
                    error: false,
                    message: "Order was successfully deleted"
                }])
            }
            else res.send([{
                    responseType: "Message",
                    error: true,
                    message: "Order not found"
                }])
        });

});

export {orderRouter};