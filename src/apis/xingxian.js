import httpInstance from "@/untils/https";

 function findNewAPI(){
    return httpInstance({
        url:'/home/new'
    })
}
export default findNewAPI()