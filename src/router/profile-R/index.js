import router from "../index";

const Profile = () => import('views/profile/Profile')

const NotLogged = () => import('views/profile/account/NotLogged')
const My = () => import('views/profile/my/My')

const Login = () => import('views/profile/account/common/login/Login')
const Register = () => import('views/profile/account/common/register/Register')

import $store from "../../store";

export default {
  path: '/profile',
  redirect: to => {
    var activePath = ""
    if($store.state.ProfileX.logState){
      activePath = '/profile/my'
    }
    else{
      activePath = '/profile/notLogged'
    }
    return activePath
  },
  component: Profile,
  meta: {
    title: '个人中心',
  },
  children: [
    {
      path: 'notLogged',
      component: NotLogged,
      children:[
        {
          path: '/',
          redirect: "login"
        },
        {
          path: 'login',
          component: Login
        },
        {
          path: 'register',
          component: Register
        }
      ]
    },
    {
      path: 'my',
      component: My,
      children:[

      ]
    }
  ],
}
