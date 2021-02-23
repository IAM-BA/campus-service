<template>
  <div class='bar_container' >
     <div v-for="(i,index) in phone" :key="index">
       <show-recom>
         <img :src=i.phoneimg alt="" slot="img">
         <span slot="name">{{i.phoneName}}</span>
         <span slot="info">{{i.phoneinfo}}</span>
         <div slot="sellerinfo">

           <content-button>
               <span slot="sellername">卖家:{{i.phoner}}</span>
               <span slot="provalue">价格:￥{{i.phonevalue}}</span>
               <span slot="link"> <el-link type="primary"><i class="el-icon-shopping-cart-2"></i>我要买!</el-link></span>
           </content-button>
        </div>
    </show-recom> 

     </div>
  </div>
</template>

<script type="text/javascript">
import ShowRecom from 'components/content/secondHand/ShowRecom'
import ContentButton from 'components/content/secondHand/ContentButton'

export default {
  
  name: "app",

  data() {
    return {
       phone:[
        {
          phoner:"*昨日的你~",
          phoneimg:require("assets/img/secondHand/phone/手机1.jpeg"),
          phoneName:"华为Gtx3-vti",
          phoneinfo:"用了3年的华为，配置8+256，无暗伤，有意者私",
          phonevalue:999
        },
         {
          phoner:"赵铁柱",
          phoneimg:require("assets/img/secondHand/order/ps4.jpeg"),
          phoneName:"PS4",
          phoneinfo:"工作了玩不了，低价卖了，送游戏..",
          phonevalue:2699
        },
        {
          phoner:"它和他的她",
          phoneimg:require("assets/img/secondHand/close/鞋子.jpeg"),
          phoneName:"休闲鞋",
          phoneinfo:"码数买错了，退货麻烦,低价卖了",
          phonevalue:129
        },
         {
          phoner:"小恐龙",
          phoneimg:require("assets/img/secondHand/food/方便面.jpg"),
          phoneName:"康师傅方便面",
          phoneinfo:"刚买的一件方便面，口味不喜欢，亏一点卖了",
          phonevalue:20
        },
         {
          phoner:"肥宅针不戳",
          phoneimg:require("assets/img/secondHand/use/手办.jpeg"),
          phoneName:"狂三手办",
          phoneinfo:"日产手办，有证书！毕业了，给老婆找个好归宿",
          phonevalue:599
        },
         {
          phoner:"甜甜的我爱喝绿茶8",
          phoneimg:require("assets/img/secondHand/phone/手机2.jpeg"),
          phoneName:"小米4Pro",
          phoneinfo:"舔狗过节送的手机，用不上，全新，低价出售，可用其他物品交换，私聊~",
          phonevalue:1699
        },
         {
          phoner:"我是BA",
          phoneimg:require("assets/img/secondHand/computer/电脑3.jpeg"),
          phoneName:"华硕笔记本电脑",
          phoneinfo:"用了一年半，没有问题，刚装的系统,详细信息私聊",
          phonevalue:4699
        },
         {
          phoner:"学java去搬砖",
          phoneimg:require("assets/img/secondHand/computer/电脑2.jpeg"),
          phoneName:"联想笔记本",
          phoneinfo:"从软件工程毕业了，工地搬砖不需要电脑，所以卖了，高配游戏本，私聊",
          phonevalue:5699
        },
      ]
     
    }
    
  },
  components: {
   ShowRecom,
   ContentButton
   
  }
}
</script>
<style  scoped>
.bar_container{
    width:1200px;
    /* height: 150px; */
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-content: space-between;
    margin-top: 50px;
    margin-left: 20px;
    /* border: 1px red solid;  */
}

</style>
