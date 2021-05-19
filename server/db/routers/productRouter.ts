import {Router} from 'express';
import {Product} from "../schemas/ProductSchema";
import { parseProducts} from "../utils/productParser";
import * as aqp from 'api-query-params';
import {getProductId} from "../utils/getIDs";
import {orderRouter} from "./orderRouter";
const cors = require('cors')

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
            else res.send([{
                responseType: "Message",
                error:true,
                message:"Product not found"
            }])
        });
});

productRouter.post("/products/post", cors())
productRouter.post("/products/post",cors(), (req, res)=>{
    Product.create(req.body)
        .then(product =>{
            res.send(parseProducts([product]));
        });
});

productRouter.put("/products/update", cors())
productRouter.put("/products/update", cors(), async(req, res)=>{
    const { filter, skip, limit, sort, projection, population } = aqp(req.query);
    let id = await getProductId(filter);
    if (id != null) {
        Product.findByIdAndUpdate({_id: id}, req.body)
            .then(() => {
                res.send([{
                    responseType: "Message",
                    error: false,
                    message: "Product was successfully updated"
                }])
            });
    }
    else res.send([{
        responseType: "Message",
        error: true,
        message: "Product not found"
    }])
});

productRouter.delete("/products/update", cors())
productRouter.delete("/products/delete", cors(), (req, res)=>{
    const { filter, skip, limit, sort, projection, population } = aqp(req.query);
    Product.deleteOne(filter)
        .then((product)=>{
            if (product.deletedCount>0){
                res.send([{
                    responseType: "Message",
                    error: false,
                    message: "Product was successfully deleted"
                }])
            }
            else res.send([{
                responseType: "Message",
                error: true,
                message: "Product not found"
            }])
        });
});


export {productRouter};