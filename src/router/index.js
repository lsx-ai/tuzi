import { createRouter, createWebHistory } from 'vue-router'
//引入创建router实例对象的构造函数
//引入history模式的路由
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component:Layout,
      children:[
        {
          path:'',
          component:Home
        },
        {
          path:'Category',
          component:Category
        }
      ]
    },
     {
      path:'/',
      component:Login
    },
  ]
})

export default router
