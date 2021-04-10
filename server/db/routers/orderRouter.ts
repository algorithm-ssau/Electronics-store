import {Router} from 'express';
import {Order} from "../schemas/OrderSchema";

const orderRouter = Router();

orderRouter.get("/orders",(req,res)=>{
    Order.find({})
        .then(order =>{
            res.send(order);
        });
});

orderRouter.post("/orders",(req,res)=>{
    Order.create(req.body)
        .then(order =>{
            res.send(order);
        });
});

orderRouter.put("/orders/:id",(req,res)=>{
    Order.findByIdAndUpdate({_id: req.params.id},req.body)
        .then(()=>{
            Order.findOne({_id: req.params.id})
                .then(order =>{
                    res.send(order);
                });
        });
});

orderRouter.delete("/orders/:id",(req,res)=>{
    Order.deleteOne({_id: req.params.id})
        .then(order=>{
            res.send(order);
        });
});

orderRouter.get("/orders/:id",(req,res)=>{
    Order.findOne({_id: req.params.id})
        .then(order =>{
            res.send(order);
        });
});

export {orderRouter};