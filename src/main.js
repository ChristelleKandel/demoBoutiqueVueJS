import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Ajout de Bootstrap après avoir fait 
// npm install --save bootstrap
// et
// npm install --save @popperjs/core
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const app = createApp(App)

app.use(router)

app.mount('#app')
