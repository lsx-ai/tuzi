<script setup>
import { getCategoryFilterAPI, getSubCategoryAPI } from '@/apis/category.js';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import GoodsItem from '../Home/components/GoodsItem.vue';
// import getSubCategoryAPI from '@/apis/category.js'
//获取面包屑导航数据

const route = useRoute()
// 获取面包屑导航数据
const filterData = ref({})
const getFilterData = async () => {
  const res = await getCategoryFilterAPI(route.params.id)
  filterData.value = res.result
}
onMounted(()=>{
    getFilterData()
})



//基础列表渲染
let goodList = ref([])
const reqData = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime'
})
  
const getGoodList = async () => {
  const res = await getSubCategoryAPI(reqData.value)
  console.log(res)
  // console.log(reqData);
  goodList.value = res.result.items
}
  
onMounted(() => getGoodList())

//tab切换回调
const tabechange = ()=>{
  // console.log('nihao',reqData);
  getGoodList()
}

//加载更多
const load = async()=>{
  // console.log('jiazai');
  //获取下一页数据
  reqData.value.page++
  //请求下一页数据
  const res = await getSubCategoryAPI(reqData.value)
// console.log(res.result);
//数据拼接，老数据展开
goodList.value = [...goodList.value,...res.result.items]
//加载完毕停止监听
const disabled = ref(false)
if(res.result.items.length === 0)
disabled.value = true
}
</script>

<template>
  <div class="container ">
    <el-backtop target=".container">
      <i class="el-icon-caret-top"></i>
      </el-backtop>
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${filterData.parentId}` }">{{ filterData.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{filterData.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="reqData.sortField" @tab-change="tabechange" >
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      
      <div class="body" 
      v-infinite-scroll="load"
      :infinite-scroll-disabled = "disabled">
         <!-- 商品列表-->
         <GoodsItem v-for="goods in goodList" :goods="goods" :key="goods.id"></GoodsItem>
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>