//用户数据
import { defineStore } from "pinia";
import { ref } from "vue";
import {loginAPI} from "@/apis/user"
import {useCartStare} from "./cartStore"
import { mergeCartAPI } from "@/apis/cart";

export const useUserStore = defineStore('user',()=>{
    //1，定义用户数据state
    const userInfo = ref({})
    //2.定义获取接口函数的action
    const getUserInfo = async (account,password)=>{
        const res = await loginAPI(account,password)
        userInfo.value = res.result
        //获取用户信息时合并购物车
        await mergeCartAPI(cartStore.careList.map(item=>{
            return{
                skuId:item.skuId,
                seleted:item.seleted,
                count:item.count
            }
        }))
        cartStore.updateNewList()
    }
    const cartStore = useCartStare()
    //3.吧state和action交出去
    const clearUserInfo = ()=>{
        userInfo.value = {}
        cartStore.clearCart
    }
   return{
    getUserInfo,
    userInfo,
    clearUserInfo
   } 
},
{
    persist:true,
})