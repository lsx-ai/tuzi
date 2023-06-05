<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import HomeProduct from './components/HomeProduct.vue'
import HomePanel from './components/HomePanel.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <HomeProduct />
  <!-- 复用的组件 -->
  <HomePanel title="新鲜好物" subTitle="新鲜好物 好多商品">
    
  </HomePanel>
  <HomePanel title="人气好物" subTitle="新鲜好物 好多商品">

</HomePanel>
</template>