const SecondHand = () => import('views/secondHand/SecondHand')

const BuySomthing =()=>import('views/secondHand/secondHandItems/BuySomething')
const SellSomthing =()=>import('views/secondHand/secondHandItems/SellSomething')
const Order =()=>import('views/secondHand/secondHandItems/Order')
const Phone =()=>import('views/secondHand/secondHandItems/BuySomethingItems/Phone')
const Recommend = () => import('views/secondHand/secondHandItems/Recommend')

export default {
  path: '/secondHand',
  component: SecondHand,
  meta: {
    title: '跳蚤市场'
  },
  children:[//嵌套使用
    {
      path: "/",
      redirect: 'recommend'
    },
    {
      path:'buysomthing',
      component:BuySomthing,
      children:[
        {
          path:'phone',
          component:Phone
        }

      ],
    },
    {
      path:'sellsomthing',
      component:SellSomthing,
    },
    {
      path:'order',
      component:Order,
    },
    {
      path:'recommend',
      component: Recommend
    }

  ],
}
