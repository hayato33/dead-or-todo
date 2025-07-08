import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/**
 * Vue 3アプリケーションのエントリーポイント
 * MVP版：Piniaを使わずシンプルな構成
 */
const app = createApp(App)

app.use(router)

app.mount('#app')
