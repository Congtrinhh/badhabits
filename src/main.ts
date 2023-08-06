import './assets/main.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import { createPinia } from 'pinia'

import router from './router'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import { registerGlobalDirectives } from './directives'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd)

registerPlugins(app)
registerGlobalDirectives(app)

app.mount('#app')
