import {defineStore} from 'pinia'
import { useUserStore } from './user'
import {computed, ref} from 'vue'
import {insertCartAPI,findNewListAPI,delCartAPI} from '@/apis/cart'
export const useCartStare = defineStore('cart',()=>{
    //state
    const userStore = useUserStore()
    const isLogin = computed(()=>userStore.userInfo.token)
    //刷新页面封装
    const updateNewList = async ()=>{
        const res = await findNewListAPI()
            //接口请求的购物车给本地覆盖
            careList.value = res.result
    }
    const careList = ref([])
    //action
    const addcart = async (goods)=>{
        //接口需要的数据提前解构
        const {skuId,count} = goods
       //判断是否登录,登录就走接口
       if(isLogin.value){
            await insertCartAPI({skuId,count})
            updateNewList()
       }else{
        //已添加过就count+1
        //没有则push
        //传递过来的商品对象的skuid若在cartlist中存在则不是第一次
        const item = careList.value.find((item)=>goods.skuId===item.skuId)
        
        if(item){
            //存在，count++
            item.count += goods.count
        }else{
            careList.value.push(goods)
        }
       }
       
        
    }
    const delCart = async (skuId)=>{
        if(isLogin.value){
            await delCartAPI([skuId])
            updateNewList()
        }else{
            const idx = careList.value.findIndex((item=>skuId === item.skuId))
        careList.value.splice(idx,1)
        }
        
    
    }
    const clearCart = () =>{
        careList.value = []
    } 
    const singleCheck =(skuId,selected)=>{
        //通过id
       const item =  careList.value.find((item)=>item.skuId === skuId)
        item.selected = selected
    }
    const allCheck = (selected)=>{
      
        careList.value.forEach((i)=>{
            i.selected = selected
        })
    }
   const isTrue = ()=>{
    return careList.value.every((i)=>{
        return i.selected === true
    })
   }
   //getter
   const selectedCount  = computed(()=>careList.value.filter(item=>item.selected).reduce((a,c)=>a+c.count,0))
   const selectedPrice  = computed(()=>careList.value.filter(item=>item.selected).reduce((a,c)=>a+c.count*c.price,0))
   
   const allcount =  computed(()=>careList.value.reduce((a,c)=>a+c.count,0))
    const allPrice = computed(()=>careList.value.reduce((a,c)=>a+c.count*c.price,0))
    return{
        careList,
        addcart,
        delCart,
        allPrice,
        allcount,
        singleCheck,
        allCheck,
        isTrue,
        selectedCount,
        selectedPrice,
        clearCart
    }
})