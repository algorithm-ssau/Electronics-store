const express = require('express');
const templateRouter = express.Router();
const Template = require("../schemas/TemplateSchema");

templateRouter.get("/orders",(req,res)=>{
    Template.find({})
        .then(template =>{
            res.send(template);
        });
});

templateRouter.post("/orders",(req,res)=>{
    Template.create(req.body)
        .then(template =>{
            res.send(template);
        });
});

templateRouter.put("/orders/:id",(req,res)=>{
    Template.findByIdAndUpdate({_id: req.params.id},req.body)
        .then(()=>{
            Template.findOne({_id: req.params.id})
                .then(template =>{
                    res.send(template);
                });
        });
});

templateRouter.delete("/orders/:id",(req,res)=>{
    Template.deleteOne({_id: req.params.id})
        .then(template=>{
            res.send(template);
        });
});

templateRouter.get("/orders/:id",(req,res)=>{
    Template.findOne({_id: req.params.id})
        .then(template =>{
            res.send(template);
        });
});


module.exports = templateRouter;