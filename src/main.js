// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useIntersectionObserver } from '@vueuse/core'
import App from './App.vue'
import router from './router'
import { lazyPlugin } from './directives'
import '@/styles/common.scss'
import {componentPlugin} from '@/components/index.js'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')

//全局指令

