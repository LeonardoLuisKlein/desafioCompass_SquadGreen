import Vue from 'vue'
import VueRouter from 'vue-router'
import FormTabs from "../views/FormTabs/FormTabs.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'FormTabs',
    component: FormTabs
  },
 
]

const router = new VueRouter({
  routes
})

export default router
