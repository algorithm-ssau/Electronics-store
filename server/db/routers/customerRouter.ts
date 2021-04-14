import {Router} from 'express';
import {Customer} from "../schemas/CustomerSchema";
import {checkExist} from  "../dbUtils";

const customerRouter = Router();

customerRouter.get("/customers/get",(req,res)=>{
    Customer.find({})
        .then(customer =>{
        res.send(customer);
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

customerRouter.put("/customers/update/:id",(req,res)=>{
    if (!checkExist(req.body.login)) {
        Customer.findByIdAndUpdate({_id: req.params.id}, req.body)
            .then(() => {
                Customer.findOne({_id: req.params.id})
                    .then(customer => {
                        res.send(customer);
                    });
            });
    }
    else {
        res.send("User with this login is already exists");
    }
});

customerRouter.delete("/customers/delete/:id",(req,res)=>{
    Customer.deleteOne({_id: req.params.id})
        .then(customer=>{
            res.send(customer);
        });
});

customerRouter.get("/customers/get/:id",(req,res)=>{
    Customer.findOne({_id: req.params.id})
        .then(customer =>{
            res.send(customer);
        });
});

export {customerRouter};