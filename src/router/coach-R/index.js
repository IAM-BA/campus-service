const Coach = () => import('views/coach/Coach')
const BuyCousers =()=>import('views/coach/coachItems/buyCousers')
const StudyNews =()=>import('views/coach/coachItems/studyNews')
const Order =()=>import('views/coach/coachItems/Order')
const PublicCourse =()=>import('views/coach/coachItems/BuySomethingItems/publicCourse')
const ComputerCourse=()=>import('views/coach/coachItems/BuySomethingItems/computerCourse')
const OtherCourse =()=>import('views/coach/coachItems/BuySomethingItems/otherCourse')


export default {
  path: '/coach',
  component: Coach,
  meta: {
    title: '学习辅导'
  },
  children:[//嵌套使用
    {
      path: '/',
      redirect: 'buyCousers'
    },
    {
      path:'buyCousers',
      component:BuyCousers,
      children:[
        {
          path:'publicCourse',
          component:PublicCourse
        },
        {
          path:'computerCourse',
          component:ComputerCourse
        },
        {
          path:'otherCourse',
          component:OtherCourse
        }
      ],
    },
    {
      path:'studyNews',
      component:StudyNews,
    },
    {
      path:'order',
      component:Order,
    },

  ],
}
