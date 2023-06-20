import httpInstance from "@/untils/https"

export const getCheckInfoAPI = () =>{
    return httpInstance({
        url:'/member/order/pre'
    })
}

//订单
export const createOrderAPI = (data) =>{
    return httpInstance({
        url:'/member/order',
        methods:'POST',
        data
    })
}