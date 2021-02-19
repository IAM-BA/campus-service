import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Coach = () => import('views/coach/Coach')
const Information = () => import('views/information/Information')
const RunErrands = () => import('views/runErrands/RunErrands')
const SecondHand = () => import('views/secondHand/SecondHand')
const Profile = () => import('views/profile/Profile')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/coach',
    component: Coach
  },
  {
    path: '/information',
    component: Information
  },
  {
    path: '/runErrands',
    component: RunErrands
  },
  {
    path: '/secondHand',
    component: SecondHand
  },
  {
    path: '/profile',
    component: Profile
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
