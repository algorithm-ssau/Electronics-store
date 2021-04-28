import {Router} from 'express';
import {Order} from "../schemas/OrderSchema";
import {getTotal, parseOrders} from "../utils/orderParser";
import * as aqp from 'api-query-params';
import {getOrderId} from "../utils/getIDs";

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
            else res.send({
                error:true,
                message:"Order not found"
            })
        });
});

orderRouter.post("/orders/post",async(req,res)=>{
    req.body.total = await getTotal(req.body.products);
    Order.create(req.body)
        .then(order =>{
            res.send(parseOrders([order]));
        });
});

orderRouter.put("/orders/update",async(req,res)=>{
    const { filter, skip, limit, sort, projection, population } = aqp(req.query);
    let id = await getOrderId(filter);
    if (id != null) {
        Order.findByIdAndUpdate({_id: id}, req.body)
            .then(() => {
                res.send({
                    error: false,
                    message: "Order was successfully updated"
                })
            });
    }
    else res.send({
        error: true,
        message: "Order not found"
    })
});

orderRouter.delete("/orders/delete",(req,res)=>{
    const { filter, skip, limit, sort, projection, population } = aqp(req.query);
    Order.deleteOne(filter)
        .then((order)=> {
            if (order.deletedCount > 0) {
                res.send({
                    error: false,
                    message: "Order was successfully deleted"
                })
            }
            else res.send({
                    error: true,
                    message: "Order not found"
                })
        });

});

export {orderRouter};