import {CustomerResponse, UserDataProps } from "../responseInterfaces/customerInterfaces";

export const parseCustomers = (res: CustomerResponse[]): UserDataProps[] => {
    return res.map((customer) => {
        return {
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

export const parseCustomer = (res: CustomerResponse): UserDataProps => {
    return {
        nickname: res.login,
        userIcon: res.avatar_src,
        userVerified: res.verified,
        emailAndPassword: {
            email: res.email,
            password: res.password
        },
        realName: res.customer_name,
        account: res.account,
    }
}

