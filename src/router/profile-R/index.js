const Profile = () => import('views/profile/Profile')

const LogOn = () => import('views/profile/account/LogOn')
const Register = () => import('views/profile/account/Register')

export default {
  path: '/profile',
  component: Profile,
  meta: {
    title: '个人中心'
  },
  children: [
    {
      path: 'logon',
      component: LogOn,
    },
    {
      path: 'register',
      component: Register
    }
  ],
}
