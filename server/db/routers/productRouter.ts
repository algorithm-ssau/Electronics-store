import {Router} from 'express';
import {Product} from "../schemas/ProductSchema";
import { parseProducts} from "../utils/productParser";
import * as aqp from 'api-query-params';
import {getProductId} from "../utils/getIDs";

const productRouter = Router();

productRouter.get("/products/get",(req, res)=>{
    const { filter, skip, limit, sort, projection, population } = aqp(req.query);
    Product.find(filter)
        .skip(skip)
        .limit(limit)
        .sort(sort)
        .select(projection)
        .populate(population)
        .then(product =>{
            if (product.length>0) {
                res.send(parseProducts(product));
            }
            else res.send({
                error:true,
                message:"Product not found"
            })
        });
});

productRouter.post("/products/post",(req, res)=>{
    Product.create(req.body)
        .then(product =>{
            res.send(parseProducts([product]));
        });
});

productRouter.put("/products/update",async(req, res)=>{
    const { filter, skip, limit, sort, projection, population } = aqp(req.query);
    let id = await getProductId(filter);
    if (id != null) {
        Product.findByIdAndUpdate({_id: id}, req.body)
            .then(() => {
                res.send({
                    error: false,
                    message: "Product was successfully updated"
                })
            });
    }
    else res.send({
        error: true,
        message: "Product not found"
    })
});

productRouter.delete("/products/delete",(req, res)=>{
    const { filter, skip, limit, sort, projection, population } = aqp(req.query);
    Product.deleteOne(filter)
        .then((product)=>{
            if (product.deletedCount>0){
                res.send({
                    error: false,
                    message: "Product was successfully deleted"
                })
            }
            else res.send({
                error: true,
                message: "Product not found"
            })
        });
});


export {productRouter};