import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../components/shared/authentication/login')
  },
  {
    path: '/fastjob/applicants/:applicantId',
    name: 'MainApplicants',
    component: () => import(/* webpackChunkName: "main" */ '../components/applicants/main/main-applicants'),
    children: [

    ],
    meta: { protectedRoute: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
