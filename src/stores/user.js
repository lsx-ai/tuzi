//用户数据
import { defineStore } from "pinia";
import { ref } from "vue";
import {loginAPI} from "@/apis/user"


export const useUserStore = defineStore('user',()=>{
    //1，定义用户数据state
    const userInfo = ref({})
    //2.定义获取接口函数的action
    const getUserInfo = async (account,password)=>{
        const res = await loginAPI(account,password)
        userInfo.value = res.result
    }
    //3.吧state和action交出去
    const clearUserInfo = ()=>{
        userInfo.value = {}
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