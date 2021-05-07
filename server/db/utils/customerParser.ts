import {CustomerResponse, UserDataProps } from "../responseInterfaces/customerInterfaces";

export const parseCustomers = (res: CustomerResponse[]): UserDataProps[] => {
    return res.map((customer) => {
        return {
            responseType: "Data",
            nickname: customer.login,
            userIcon: customer.avatar_src,
            userVerified: customer.verified,
            emailAndPassword: {
                email: customer.email,
                password: customer.password
            },
            realName: customer.customer_name,
            account: customer.account,
        }
    })
};