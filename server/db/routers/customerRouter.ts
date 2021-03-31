const express = require('express');
const customerRouter = express.Router();
const Customer = require("../schemas/CustomerSchema");

customerRouter.get("/customers",(req,res)=>{
    Customer.find({})
        .then(customer =>{
        res.send(customer);
    });
});

customerRouter.post("/customers",(req,res)=>{
    Customer.create(req.body)
        .then(customer =>{
        res.send(customer);
    });
});

customerRouter.put("/customers/:id",(req,res)=>{
    Customer.findByIdAndUpdate({_id: req.params.id},req.body)
        .then(()=>{
            Customer.findOne({_id: req.params.id})
                .then(customer =>{
                    res.send(customer);
                });
        });
});

customerRouter.delete("/customers/:id",(req,res)=>{
    Customer.deleteOne({_id: req.params.id})
        .then(customer=>{
            res.send(customer);
        });
});

module.exports = customerRouter;