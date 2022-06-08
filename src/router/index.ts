// Dependencies
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// Views
import Products from '@/views/Products/template.vue'

// VueRouter Initialization
const Router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{ path: '/', name: 'Products', component: <any> Products }
	]
})

// VueRouter Export
export default Router