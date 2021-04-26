import {Router} from 'express';
import {Product} from "../schemas/ProductSchema";
import {parseProduct, parseProducts} from "../utils/productParser";

const productRouter = Router();

productRouter.get("/products/get",(req, res)=>{
    Product.find({})
        .then(product =>{
            res.send(parseProducts(product));
        });
});

productRouter.post("/products/post",(req, res)=>{
    Product.create(req.body)
        .then(product =>{
            res.send(product);
        });
});

productRouter.put("/products/update/:id",(req, res)=>{
    Product.findByIdAndUpdate({_id: req.params.id},req.body)
        .then(()=>{
            Product.findOne({_id: req.params.id})
                .then(product =>{
                    res.send(product);
                });
        });
});

productRouter.delete("/products/delete/:id",(req, res)=>{
    Product.deleteOne({_id: req.params.id})
        .then(product=>{
            res.send(product);
        });
});

productRouter.get("/products/get/:id",(req, res)=>{
    Product.findOne({_id: req.params.id})
        .then(product =>{
            res.send(parseProduct(product));
        });
});

export {productRouter};