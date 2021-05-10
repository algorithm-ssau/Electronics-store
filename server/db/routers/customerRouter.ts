import {Router} from 'express';
import {Customer} from "../schemas/CustomerSchema";
import {checkLoginExist,checkEmailExist} from "../utils/checks";
import { parseCustomers } from '../utils/customerParser';
import * as aqp from 'api-query-params';
import { getCustomerId } from '../utils/getIDs';

const customerRouter = Router();

customerRouter.get("/customers/get",(req,res)=>{
    const { filter, skip, limit, sort, projection, population } = aqp(req.query);
    Customer.find(filter)
        .skip(skip)
        .limit(limit)
        .sort(sort)
        .select(projection)
        .populate(population)
        .then(customer =>{
            if (customer.length>0) {
                res.send(parseCustomers(customer));
            }
            else res.send([{
                responseType: "Message",
                error:true,
                message:"Customer not found"
            }])
    });
});

customerRouter.post("/customers/post",async(req,res)=>{
    let loginFlag = await checkLoginExist(req.body.login);
    let emailFlag = await checkEmailExist(req.body.email);
    if (loginFlag && emailFlag) {
        Customer.create(req.body)
            .then(customer => {
                res.send(parseCustomers([customer]));
            });
    }
    else if (!loginFlag && !emailFlag){
        res.send([{
            responseType: "Message",
            error:true,
            message:"Customer with this login and email is already exists"
        }]);
    }
    else if (!loginFlag){
        res.send([{
            responseType: "Message",
            error:true,
            message:"Customer with this login is already exists"
        }]);
    }
    else if (!emailFlag){
        res.send([{
            responseType: "Message",
            error:true,
            message:"Customer with this email is already exists"
        }]);
    }
});

customerRouter.put("/customers/update",async(req,res)=>{
    const { filter, skip, limit, sort, projection, population } = aqp(req.query);
    let id = await getCustomerId(filter);
    if (id != null) {
        Customer.findByIdAndUpdate({_id: id}, req.body)
            .then(() => {
                res.send([{
                    responseType: "Message",
                    error: false,
                    message: "Customer was successfully updated"
                }])
            });
    }
    else res.send([{
        responseType: "Message",
        error: true,
        message: "Customer not found"
    }])
});

customerRouter.delete("/customers/delete",(req,res)=>{
    const { filter, skip, limit, sort, projection, population } = aqp(req.query);
    Customer.deleteOne(filter)
        .then((customer)=>{
            if (customer.deletedCount>0){
                res.send([{
                    responseType: "Message",
                    error: false,
                    message: "Customer was successfully deleted"
                }])
            }
            else res.send([{
                    responseType: "Message",
                    error: true,
                    message: "Customer not found"
                }])
        });
});

export {customerRouter};