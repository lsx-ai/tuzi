import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import getCategoryAPI from '@/apis/layout'

export const useCounterStore = defineStore('category', () => {
    //state
    const categoryList = ref([])
    //action
    const getCategory = async()=>{
    const res = await getCategoryAPI()
    console.log(res);
    categoryList.value = res.result
}
return{
    categoryList,
    getCategory
}
})