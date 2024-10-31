import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'

const app = createApp(App)

const i18n = createI18n({
  legacy: false,
  locale: 'en',
})
app.use(i18n)

app.mount('#app')
