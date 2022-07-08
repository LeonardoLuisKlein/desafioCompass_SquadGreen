import Vue from 'vue'
import VueRouter from 'vue-router'
import FormOne from "@/components/containers/FormOne/FormOne.vue"
import FormSecond from '@/components/containers/FormSecond/FormSecond.vue'

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
 
]

const router = new VueRouter({
  routes
})

export default router
