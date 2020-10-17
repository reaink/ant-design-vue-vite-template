import { createApp } from 'vue'
import router from '/@/router'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import '/@/assets/index.scss'

const app = createApp(App)

app.use(router)

app.use(Antd)

app.mount('#app')
