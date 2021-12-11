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
    component: () => import(/* webpackChunkName: "mainApplicants" */ '../components/applicants/main/main-applicants'),
    children: [
      {
        path: '/fastjob/applicants/:applicantId/job-portal',
        name: 'JobPortal',
        component: () => import(/* webpackChunkName: "jobPortal" */ '../components/applicants/job-portal/job-portal')
      },
      {
        path: '/fastjob/applicants/:applicantId/applications',
        name: 'Applications',
        component: () => import(/* webpackChunkName: "jobPortal" */ '../components/applicants/applications/applications')
      },
      {
        path: '/fastjob/applicants/:applicantId/profile',
        name: 'ProfileApplicant',
        component: () => import(/* webpackChunkName: "profileApplicant" */ '../components/applicants/profile/profile-applicant')
      }
    ],
    meta: { protectedRoute: true }
  },
  {
    path: '/fastjob/business/:businessId',
    name: 'MainBusiness',
    component: () => import(/* webpackChunkName: "mainBusiness" */ '../components/business/main/main-business'),
    children: [
      {
        path: '/fastjob/business/:businessId/work-offers',
        name: 'WorkOffers',
        component: () => import(/* webpackChunkName: "workOffers" */ '../components/business/work-offers/work-offers')
      },
      {
        path: '/fastjob/business/:businessId/profile',
        name: 'ProfileBusiness',
        component: () => import(/* webpackChunkName: "profileApplicant" */ '../components/business/profile/profile-business')
      }
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
