import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { setupProdMockServer } from '../mock'
if(process.env.NODE_ENV === 'production'){
    setupProdMockServer()
}

createApp(App).mount('#app')
