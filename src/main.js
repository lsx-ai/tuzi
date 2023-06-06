// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useIntersectionObserver } from '@vueuse/core'
import App from './App.vue'
import router from './router'
import { lazyPlugin } from './directives'
import '@/styles/common.scss'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.mount('#app')

//全局指令

