import Vue from 'vue'
Vue.config.productionTip = false

// Import del Plugin FontAwesome para ser uso de la libreria de forma global.
import './plugins/FontAwesome'

// Importación de clases CSS.
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Hacer uso de la Dependencia de BootstrapVue, componente critico del proyecto.
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

// Instancia de la VM de Vue.
import main from './main.vue'
import router from './router'
import store from './store'
new Vue({ router, store, render: h => h(main) }).$mount('#app')