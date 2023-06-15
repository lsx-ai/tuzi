import {defineStore} from 'pinia'

import {ref} from 'vue'
export const useCartStare = defineStore('cart',()=>{
    //state
    const careList = ref([])
    //action
    const addcart = (goods)=>{
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
    return{
        careList,
        addcart
    }
})