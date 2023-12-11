import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { createPinia } from 'pinia'

library.add(faBars, faXmark)

const app = createApp(App)

app.use(router).use(createPinia()).component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
