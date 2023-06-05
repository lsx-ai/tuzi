import httpInstance from "@/untils/https"; 
//获取banner数据
export function getBannerAPI(){
    return httpInstance({
        url:'/home/banner'
    })
}