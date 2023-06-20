import httpInstance from "@/untils/https";

export const getOrderAPI = (id) =>{
    return httpInstance({
        url:`member/order/${id}`
    })
}