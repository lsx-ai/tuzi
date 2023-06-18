import httpInstance from "@/untils/https"

export const getCheckInfoAPI = () =>{
    return httpInstance({
        url:'/member/order/pre'
    })
}