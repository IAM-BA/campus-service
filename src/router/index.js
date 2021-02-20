import Vue from 'vue'
import VueRouter from 'vue-router'



const Home = () => import('views/home/Home')

import CoachR from './coach-R'
import InformationR from './information-R'
import ProfileR from './profile-R'
import RunErrandsR from './runErrands-R'
import SecondHandR from './secondHand-R'


Vue.use(VueRouter)
// 此处做好了抽离
const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '校园生活服务平台'
    },
  },


  CoachR,
  InformationR,
  ProfileR,
  RunErrandsR,
  SecondHandR,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) =>{
  document.title = to.matched[0].meta.title
  next()
})

export default router
