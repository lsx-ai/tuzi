<script setup>
//二十四小时热榜获取数据
import {fetchHotGoodsAPI} from '@/apis/detail.js'
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

//props参数，适配不同的热榜

const props = defineProps({
  hotType:{
    type:Number
  }
})

//适配标题

const TYPEMAP ={
  1:'日榜',
  2:'周榜'
}

const title = computed(()=>TYPEMAP[props.hotType])
const fetchHotGoods = ref([])
const route = useRoute()
const getfetchHotGoods = async () =>{
  const res = await fetchHotGoodsAPI({
    //id从当前路由组件中拿
    id:route.params.id,

    type:props.hotType

  })
  fetchHotGoods.value = res.result
  console.log(fetchHotGoods.value);
}

onMounted(()=>{
  getfetchHotGoods()
  console.log();
})
</script>


<template>
  <div class="goods-hot">
    <h3>{{title}}</h3>
    <!-- 商品区块 -->
    <RouterLink to="/" class="goods-item" v-for="item in fetchHotGoods" :key="item.id">
      <img :src="item.picture" alt="" />
      <p class="name ellipsis">{{ item.desc }}</p>
      <p class="desc ellipsis">{{ item.name }}</p>
      <p class="price">&yen;{{ item.price }}</p>
    </RouterLink>
  </div>
</template>


<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

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
}
</style>