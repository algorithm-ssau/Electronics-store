import {Customer} from "../schemas/CustomerSchema";

/**
 * Utility function to check existence of current user's login in database
 * @param login Login of current user
 * @returns true if user with current login not exists, false otherwise
 */
async function checkLoginExist(login: String):Promise<Boolean>{
    let customer = Customer.findOne({login: login});
    return customer.countDocuments().then((res)=>(res==0))
}

/**
 * Utility function to check existence of current user's email in database
 * @param email Email of current user
 * @returns true if user with current login not exists, false otherwise
 */
async function checkEmailExist(email: String):Promise<Boolean>{
    let customer = Customer.findOne({email: email});
    return customer.countDocuments().then((res)=>(res==0))
}

/**
 * Utility function to check the amount of money in the account
 * @param email Email of current user
 * @param password Password of current user
 * @param total Total value of product cart
 * @return true if user has enough money to pay, false otherwise
 */
async function checkAccount(email: String, password: String, total: number):Promise<Boolean>{
    let customer = await Customer.findOne({email: email, password:password});
    return (customer.get('account') >= total);
}

export {checkLoginExist,checkEmailExist,checkAccount}