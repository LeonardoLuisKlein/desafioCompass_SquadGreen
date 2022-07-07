import Vue from 'vue'
import VueRouter from 'vue-router'
import FormOne from "@/components/containers/FormOne/FormOne.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'formOne',
    component: FormOne
  },
 
]

const router = new VueRouter({
  routes
})

export default router
