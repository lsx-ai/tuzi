import httpInstance from "@/untils/https";
import { generate } from "@vue/compiler-core";
function getCategory() {
    return httpInstance({
        url:'home/category/head'
    })
}
export default getCategory