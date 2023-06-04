import httpInstance from "@/untils/https";
import getCategory from "./testApi";
function getCategoryAPI(){
    return httpInstance({
        url:'/home/category/head'
    })
}
export default getCategoryAPI 