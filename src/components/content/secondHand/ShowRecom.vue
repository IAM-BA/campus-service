/*此组件用于另一种商品展示，现在用在推荐栏里 */
<template>
  <div >
      <div class="bottom_div">
        <div class="img_div">
            <!-- <img src="~assets/img/secondHand/phone/手机1.jpeg" alt=""> -->
            <slot name="img"></slot>
        </div>
        <div class="title_product"> 
             <slot name="name"></slot>
        </div>
        <div class="proinfo">
             <slot name="info"></slot>
        </div>
        <div class="sellerinfo">
            <slot name="sellerinfo"></slot>
        </div>
    </div>
    
  </div>
</template>

<script type="text/javascript">

export default {
  name: "app",
  data() {
    return {

    }
  },
  components: {
   
  }
}
</script>

<style  scoped>
.bottom_div{
  width: 300px;
  height: 130px;
  border: 1px rgb(230, 230, 230) solid;
}
.img_div{
  width: 120px;
  height: 100px;
  box-shadow: 10px 10px 5px #888888;;
  margin-top: -20px;
  margin-left: 10px;
}
.img_div img{
   width: 120px;
   height: 100px;

}
.title_product{
  width: 120px;
  height: 30px;
  float: left;
  margin-left: 10px;
  margin-top: 10px;
  text-overflow:clip;
 
  /* border: 1px red solid; */
}
.proinfo{
  width: 155px;
  height: 70px;
  font-size: 13px;
  float: left;
  margin-top: -75px;
  margin-left: 10px;
  /* border: 1px red solid; */
}
.seller{
  width: 155px;
  height: 40px;
  float: right;;
  /* border: 1px red solid; */

}
</style>
