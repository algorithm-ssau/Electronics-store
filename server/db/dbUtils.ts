const Customer = require("../schemas/CustomerSchema");

/**
 * Utility function to check existence of current user in database
 * @param login Login of current user
 * @returns Returns True if user with current login exists, False otherwise
 */
function checkExist(login: String):Boolean{
    let customer = Customer.findOne({login: login});
    return customer!=null;
}


/**
 * Utility function to authenticate current user in database
 * @param login Login of current user
 * @param password Password of current user
 * @returns Returns True if user's password is correct, False otherwise
 */
function checkPassword(login:String, password:String ):Boolean{
    let customer = Customer.findOne({login: login});
    return (customer.password == password)
}

module.exports = {
    checkExist,
    checkPassword,
};