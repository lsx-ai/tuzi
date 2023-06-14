// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useIntersectionObserver } from '@vueuse/core'
import App from './App.vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import router from './router'
import { lazyPlugin } from './directives'
import '@/styles/common.scss'
import {componentPlugin} from '@/components/index.js'
const app = createApp(App)
//注册piniachijiu
const pinia = createPinia()
app.use(pinia)
pinia.use(piniaPluginPersistedstate)
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')

//全局指令

