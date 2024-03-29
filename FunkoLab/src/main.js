import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// Configurações do Router
import {routes} from './router/routes.js'

// Configurações Vuex
import store from './store/index'

// Configurações do Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi'
  },
})

createApp(App).use(routes).use(store).use(vuetify).mount('#app')
