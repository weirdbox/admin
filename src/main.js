import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/permission'
// 安装element-plus --->plugin
import initElement from './plugins/element'
// svg全员引入
import SvgIcon from './icons/index'
// 加载全局样式
import '../src/styles/index.scss'

const app = createApp(App)
initElement(app)
SvgIcon(app)
app.use(store).use(router).mount('#app')
