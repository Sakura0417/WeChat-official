import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'vant/lib/index.css';
import { Button } from 'vant';


const app = createApp(App)
app.use(Button);

app.use(createPinia())
app.use(router)

app.mount('#app')
