// 映入createApp 用于创建应用
import {createApp} from 'vue'
// 引入App根组件
import App from './App.vue'
// 引入pinia
import {createPinia} from 'pinia'


// 创建一个应用
const app = createApp(App)
app.use(createPinia())
// 挂载整个容器到app容器中
app.mount('#app')

