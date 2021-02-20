<template>
  <div class="one_pro_container">
     <div class="imgcontainer"><slot name="proimg"></slot></div>
     <div class="productname"><slot name="proname"></slot></div>
     <div class="productinfo"><slot name="proinfo"></slot></div>
     <div class="productValue"><slot name="provalue"></slot></div>
     <div class="Sellercontainer"><slot name="seller"></slot></div>

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
.one_pro_container{
  width: 200px;
  height: 350px;
  /* border:1px red solid */
}
.imgcontainer{
    width: 200px;
    height: 160px;
    /* border:1px red solid */
    
}
.imgcontainer img{
    width: 200px;
    height: 160px;

}
.productname{
    width: 200px;
    height: 30px;
    /* border:1px red solid */

}
.productname span{
    text-align: center;
    font-size: 15px;
}
.productinfo{
    width: 200px;
    height: 80px;
    font-size: 15px;
    /* border:1px red solid */
    
}
.Sellercontainer{
    width: 200px;
    height: 40px;
    /* border:1px red solid */
}
</style>
