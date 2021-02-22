<template>
  <div class="one_pro_container">
    <div class="imgcontainer"><slot name="proimg"></slot></div>
    <div class="teachername"><slot name="tname"></slot></div>
    <div class="courseinfo"><slot name="couinfo"></slot></div>
    <div class="schoolcontainer"><slot name="school"></slot></div>
    <div class="coursevalue"><slot name="couvalue"></slot></div>
    <div class="shopping"><slot name="shop"></slot></div>
   </div>
</template>

<script type="text/javascript">
  export default {
    name: "show",
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
    width: 300px;
    height: 400px;
    /* border:1px red solid */
  }
  .imgcontainer{
    width: 250px;
    height: 160px;
    /* border:1px red solid */

  }
  .imgcontainer img{
    width: 250px;
    height: 160px;
    cursor: pointer;
    transition: all 0.8s;
  }
  .imgcontainer img:hover{
    transform: scale(1.1);
  }
  .teachername{
    width: 250px;
    height: 30px;
    background: #fafafa;
    /* border:1px red solid */

  }
  .teachername span{
    text-align: center;
    font-family: "PingFang SC";
    line-height:1.7;
    font-size: 16px;
    font-weight: bold;
  }
  .courseinfo{
    width: 250px;
    height: 80px;
    font-size: 14px;
    font-family: "Arial";
    line-height: 1.5;
    background: #f5f5f5;
    color: #868e96;
    /* border:1px red solid */

  }
  .shopping,.coursevalue{
    width: 250px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 16px;
    font-weight: bold;
    font-family: Microsoft YaHei;
    background: #e0e0e0;
    color: #ff1744;
  }
  .shopping{
    height: 50px;
    font-size: 20px;
    color: red;
  }
  .schoolcontainer{
    width: 250px;
    height: 40px;
    line-height: 40px;
    background: #eeeeee;
    font-size: 14px;
    color:#868e96 ;
    /* border:1px red solid */
  }
</style>
