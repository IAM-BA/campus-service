<template>
  <div >
    <contentDisplay>
      <div v-for="i in phone" :key="i.phoner">
          <show>
             <img :src=i.phoneimg alt="error" slot="proimg">
             <span slot="proname"><div>产品名:{{i.phoneName}}</div></span>
             <span slot="proinfo">卖家说:{{i.phoneinfo}}</span>
             <span slot="provalue"><div>￥{{i.phonevalue}}</div></span>
             <div slot="seller">
             <button>联系卖家:{{i.phoner}}</button>
             </div>
          </show>
      </div>
    </contentDisplay>

  </div>
</template>

<script type="text/javascript">
import contentDisplay from 'components/content/ContentDisplay'
import show from 'components/content/secondHand/Show'


export default {
  name: "app",
  data() {
    return {
      phone:[
        {
          phoner:"*昨日的你~",
          phoneimg:require("assets/img/secondHand/phone/手机1.jpeg"),
          phoneName:"华为Gtx36999-vti",
          phoneinfo:"用了3年的华为，配置8+256，无暗伤，有意者私",
          phonevalue:999
        },
         {
          phoner:"甜甜的我爱喝绿茶",
          phoneimg:require("assets/img/secondHand/phone/手机2.jpeg"),
          phoneName:"小米4Pro",
          phoneinfo:"舔狗过节送的手机，用不上，全新，低价出售，可用其他物品交换，私聊~",
          phonevalue:1699
        },
        {
          phoner:"舔狗不是我自己",
          phoneimg:require("assets/img/secondHand/phone/手机3.jpeg"),
          phoneName:"魅族pop369",
          phoneinfo:"过节给女朋友买手机没钱了，急出，饿了两天了！",
          phonevalue:599
        },
        {
          phoner:"Bug都去死",
          phoneimg:require("assets/img/secondHand/phone/手机4.jpeg"),
          phoneName:"金立G+685",
          phoneinfo:"老年机了，可以用来当备用机子，价格可以商量，7成新",
          phonevalue:599
        },
        {
          phoner:"对钱不感兴趣",
          phoneimg:require("assets/img/secondHand/phone/手机5.jpeg"),
          phoneName:"8848钛晶手机",
          phoneinfo:"8848钛晶手机！性能强劲，人机分离20米自动爆炸！有意者私聊，妹子优先！",
          phonevalue:3200
        },
         {
          phoner:"Expection",
          phoneimg:require("assets/img/secondHand/phone/手机6.jpeg"),
          phoneName:"VIVO pro 10+",
          phoneinfo:"私聊，配置8+128,9成新",
          phonevalue:1299
        },
         {
          phoner:"祖安之神",
          phoneimg:require("assets/img/secondHand/phone/手机7.jpeg"),
          phoneName:"Appel 10",
          phoneinfo:"卖手机，7成新，有保修卡，想要的私聊，捣乱的**我**！",
          phonevalue:698
        },
         {
          phoner:"装起来了",
          phoneimg:require("assets/img/secondHand/phone/手机8.jpeg"),
          phoneName:"黑鲨游戏手机",
          phoneinfo:"黑鲨手机，配置16+512，秒杀市面上所有手游，原神60帧最高画质无压力，不卖，主要想让大家看看",
          phonevalue:99999

        },
      ]

    }
  },
  components: {
    contentDisplay,
    show



  }
}
</script>

<style  scoped>
ul{
  margin: 0;
  padding: 0;
}
li{
  display: unset;

}
</style>
