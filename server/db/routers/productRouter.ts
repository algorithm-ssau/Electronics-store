import {Router} from 'express';
import {Product} from "../schemas/ProductSchema";

const productRouter = Router();

productRouter.get("/orders",(req, res)=>{
    Product.find({})
        .then(product =>{
            res.send(product);
        });
});

productRouter.post("/orders",(req, res)=>{
    Product.create(req.body)
        .then(product =>{
            res.send(product);
        });
});

productRouter.put("/orders/:id",(req, res)=>{
    Product.findByIdAndUpdate({_id: req.params.id},req.body)
        .then(()=>{
            Product.findOne({_id: req.params.id})
                .then(product =>{
                    res.send(product);
                });
        });
});

productRouter.delete("/orders/:id",(req, res)=>{
    Product.deleteOne({_id: req.params.id})
        .then(product=>{
            res.send(product);
        });
});

productRouter.get("/orders/:id",(req, res)=>{
    Product.findOne({_id: req.params.id})
        .then(product =>{
            res.send(product);
        });
});

export {productRouter};