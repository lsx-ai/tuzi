import httpInstance from "@/untils/https"; 
//获取banner数据
export function getBannerAPI(params={}){
    //默认唯一，是首页轮播
    const {distributionSite='1'} = params
    return httpInstance({
        url:'/home/banner',
        params:{
            distributionSite
        }
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
export function getGoodsAPI(){
    return httpInstance({
        url:'/home/goods'
    })
}
