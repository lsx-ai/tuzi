import httpInstance from "@/untils/https";

export function getCategoryAPI(id){
    return httpInstance({
        url:'/category',
        params:{
            id
        }
    })
}
// export default getCategoryAPI()