import {Customer} from "../schemas/CustomerSchema";

/**
 * Utility function to check existence of current user's login in database
 * @param login Login of current user
 * @returns true if user with current login not exists, false otherwise
 */
async function checkLoginExist(login: String):Promise<Boolean>{
    let customers = Customer.findOne({login: login});
    return customers.countDocuments().then((res)=>(res==0))
}

/**
 * Utility function to check existence of current user's email in database
 * @param email Email of current user
 * @returns true if user with current login not exists, false otherwise
 */
async function checkEmailExist(email: String):Promise<Boolean>{
    let customers = Customer.findOne({email: email});
    return customers.countDocuments().then((res)=>(res==0))
}

export {checkLoginExist,checkEmailExist}