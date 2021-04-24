import {Customer} from "./schemas/CustomerSchema";

/**
 * Utility function to check existence of current user in database
 * @param login Login of current user
 * @returns true if user with current login not exists, false otherwise
 */
async function checkExist(login: String):Promise<Boolean>{
    let customer = Customer.findOne({login: login});
    return customer.countDocuments().then((res)=>(res==0));
}


/**
 * Utility function to authenticate current user in database
 * @param login Login of current user
 * @param password Password of current user
 * @returns true if user's password is correct, false otherwise
 */
async function checkPassword(login:String, password:String ):Promise<Boolean>{
    let customer = Customer.findOne({login: login});
    return (customer.get('password').then((res)=>{(res==password)}))
}

export {checkExist,checkPassword}