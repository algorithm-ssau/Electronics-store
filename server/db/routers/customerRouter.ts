import {Router} from 'express';
import {Customer} from "../schemas/CustomerSchema";
import {checkExist} from "../utils/checks";
import { parseCustomers, parseCustomer } from '../utils/customerParser';

const customerRouter = Router();

customerRouter.get("/customers/get",(req,res)=>{
    Customer.find({})
        .then(customer =>{
            res.send(parseCustomers(customer));
    });
});

customerRouter.post("/customers/post",async(req,res)=>{
    let flag = await checkExist(req.body.login);
    if (flag) {
        Customer.create(req.body)
            .then(customer => {
                res.send(customer);
            });
    }
    else {
        res.send("User with this login is already exists");
    }
});

customerRouter.put("/customers/update/:login",(req,res)=>{
    if (!checkExist(req.body.login)) {
        Customer.findByIdAndUpdate({login: req.params.login}, req.body)
            .then(() => {
                Customer.findOne({login: req.params.login})
                    .then(customer => {
                        res.send(customer);
                    });
            });
    }
    else {
        res.send("User with this login is already exists");
    }
});

customerRouter.delete("/customers/delete/:login",(req,res)=>{
    Customer.deleteOne({login: req.params.login})
        .then(customer=>{
            res.send(customer);
        });
});

customerRouter.get("/customers/get/:login/:password",(req,res)=>{
    Customer.findOne({
        login: req.params.login,
        password: req.params.password
    })
        .then(customer=>{
            res.send(parseCustomer(customer));
        });
});

customerRouter.get("/customers/get/:email/:password",(req,res)=>{
    Customer.findOne({
        email: req.params.email,
        password: req.params.password
    })
        .then(customer=>{
            res.send(parseCustomer(customer));
        });
});

export {customerRouter};