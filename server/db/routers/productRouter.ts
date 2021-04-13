import {Router} from 'express';
import {Product} from "../schemas/ProductSchema";

const productRouter = Router();

productRouter.get("/orders/get",(req, res)=>{
    Product.find({})
        .then(product =>{
            res.send(product);
        });
});

productRouter.post("/orders/post",(req, res)=>{
    Product.create(req.body)
        .then(product =>{
            res.send(product);
        });
});

productRouter.put("/orders/update/:id",(req, res)=>{
    Product.findByIdAndUpdate({_id: req.params.id},req.body)
        .then(()=>{
            Product.findOne({_id: req.params.id})
                .then(product =>{
                    res.send(product);
                });
        });
});

productRouter.delete("/orders/delete/:id",(req, res)=>{
    Product.deleteOne({_id: req.params.id})
        .then(product=>{
            res.send(product);
        });
});

productRouter.get("/orders/get/:id",(req, res)=>{
    Product.findOne({_id: req.params.id})
        .then(product =>{
            res.send(product);
        });
});

export {productRouter};