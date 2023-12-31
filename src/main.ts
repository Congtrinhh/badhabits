import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import './assets/main.css'
import { createPinia } from 'pinia'

import router from './router'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import { registerGlobalDirectives } from './directives'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd)

registerPlugins(app)
registerGlobalDirectives(app)

app.mount('#app')

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDKxklICWrALSuYwzIgUcpZJKhBI5APowE',
  authDomain: 'tqcong-amisreview.firebaseapp.com',
  projectId: 'tqcong-amisreview',
  storageBucket: 'tqcong-amisreview.appspot.com',
  messagingSenderId: '79636816992',
  appId: '1:79636816992:web:d2e07af5104c736dab8f05',
  measurementId: 'G-13CGRH1YP8'
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
const analytics = getAnalytics(firebaseApp)
