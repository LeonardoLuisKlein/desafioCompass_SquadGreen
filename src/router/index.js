import Vue from 'vue'
import VueRouter from 'vue-router'
import FormOne from "@/components/containers/FormOne/FormOne.vue"
import FormSecond from '@/components/containers/FormSecond/FormSecond.vue'
import Error404 from '@/components/routesComponents/error404/Error404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'formOne',
    component: FormOne
  },
  {
    path: '/FormSecond',
    name: 'FormSecond',
    component: FormSecond
  },
  {
    path: "*",
    name: "Error 404",
    component: Error404,
  },
 
]

const router = new VueRouter({
  routes
})

export default router
