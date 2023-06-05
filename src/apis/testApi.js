import httpInstance from "@/untils/https";
function getCategory() {
    return httpInstance({
        url:'home/category/head'
    })
}
export default getCategory