const Profile = () => import('views/profile/Profile')

export default {
  path: '/profile',
  component: Profile,
  meta: {
    title: '个人中心'
  },
  // children: ProfileChildren,
}
