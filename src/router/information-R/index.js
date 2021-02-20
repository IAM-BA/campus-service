const Information = () =>  import('views/information/Information')

const UniversitiesInfo = () => import("views/information/UniversitiesInfo")
const Association = () => import("views/information/Association")
const Community = () => import("views/information/Community")

export default {
  path: '/information',
  component: Information,
  children: [
    {
      path: '/',
      redirect: "universitiesInfo",
    },
    {
      path: 'universitiesInfo',
      component: UniversitiesInfo,
      meta: {
        title: '校园资讯'
      },
      beforeEnter: (to, from, next) =>{
        document.title = to.meta.title
        next()
      }
    },
    {
      path: 'association',
      component: Association,
      meta: {
        title: '社团招新'
      },
      beforeEnter: (to, from, next) =>{
        document.title = to.meta.title
        next()
      }
    },
    {
      path: 'community',
      component: Community,
      meta: {
        title: '趣味社区'
      },
      beforeEnter: (to, from, next) =>{
        document.title = to.meta.title
        next()
      }
    }
  ],
  meta: {
    title: "校园资讯"
  }

}


