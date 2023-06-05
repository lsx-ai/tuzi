import httpInstance from "@/untils/https"; 
//获取banner数据
export function getBannerAPI(){
    return httpInstance({
        url:'/home/banner'
    })
}
export function findNewAPI(){
    return httpInstance({
        url:'/home/new'
    })
}
export function findHotAPI(){
    return httpInstance({
        url:'/home/hot'
    })
}
