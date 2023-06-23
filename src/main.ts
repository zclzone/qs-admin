import '@/styles/reset.css'
import '@/styles/index.scss'
import 'uno.css'
import 'virtual:svg-icons-register'

import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from './store'
import { setupRouter } from './router'
import { setupNaiveDiscreteApi } from './utils'

async function setupApp() {
  const app = createApp(App)
  setupStore(app)
  setupNaiveDiscreteApi()
  await setupRouter(app)
  app.mount('#app')
}

setupApp()
