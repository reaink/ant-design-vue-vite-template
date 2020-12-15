import { createApp } from 'vue'
import router from '/@/router'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import '/@/assets/index.scss'

import 'default-passive-events'
/*
  [Violation] Added non-passive event listener to a scroll-blocking 'mousewheel' event. Consider marking event handler as 'passive' to make the page more responsive.
*/

const app = createApp(App)

app.use(router)

app.use(Antd)

app.mount('#app')
