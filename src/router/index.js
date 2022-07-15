import Vue from 'vue'
import VueRouter from 'vue-router'
import FormOne from "@/components/containers/FormOne/FormOne.vue"
import FormSecond from '@/components/containers/FormSecond/FormSecond.vue'
import FormThird from '@/components/containers/FormThird/FormThird.vue'
import Error404 from '@/components/routesComponents/error404/Error404.vue'
import Error401 from '@/components/routesComponents/error401/Error401.vue'
import FormSuccess from '@/components/containers/FormSuccess/FormSuccess.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'FormOne',
    component: FormOne
  },
  {
    path: '/formSecond',
    name: 'FormSecond',
    component: FormSecond
  },
  {
    path: '/formThird',
    name: 'FormThird',
    component: FormThird
  },
  {
    path: '/formSuccess',
    name: 'FormSuccess',
    component: FormSuccess
  },
  {
    path: "*",
    name: "Error404",
    component: Error404,
  },
  {
    path: "/error401",
    name: "Error401",
    component: Error401,
  },

]

const router = new VueRouter({
  routes
})

export default router
