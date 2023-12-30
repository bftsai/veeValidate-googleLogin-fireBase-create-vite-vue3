import './assets/main.css';
import 'https://kit.fontawesome.com/96a7520586.js';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// google APIKey
import { googleAPIKey } from './assets/config.js';

import App from './App.vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vue3GoogleLogin, {
    clientId: googleAPIKey,
})
app.mount('#app')
