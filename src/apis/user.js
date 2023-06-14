import httpInstance from "@/untils/https";
 
export const loginAPI = ({account,password})=>{
    return httpInstance({
        url:'/login',
        method:'POST',
        data:{
            account,
            password
        }
    })
}