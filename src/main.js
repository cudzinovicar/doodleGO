import { createApp } from 'vue'
import {createPinia} from 'pinia'
import router from './router'
import './style.css'
import App from './App.vue'
import { inject } from '@vercel/analytics';
inject();

//localStorage.theme = 'light'
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
     document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}

const app = createApp(App)
const pinia =  createPinia()

app.use(router)
.use(pinia)
.mount('#app')
