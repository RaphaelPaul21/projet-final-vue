import { createApp } from 'vue'
<<<<<<< Updated upstream:projet-final-raph-dede-charles/src/main.ts
=======
import { createPinia } from 'pinia'
>>>>>>> Stashed changes:projet-final-raph-dede-charles/src/main.js
import App from './App.vue'
import { router } from './router'
import './index.css'

const app = createApp(App)
<<<<<<< Updated upstream:projet-final-raph-dede-charles/src/main.ts

=======
app.use(createPinia())
>>>>>>> Stashed changes:projet-final-raph-dede-charles/src/main.js
app.use(router)
app.mount('#app')