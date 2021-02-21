<template>
  <div id="content_container">
    <div class="carouseImg" >
      <el-carousel :interval="5000" arrow="always" height="350px">
        <el-carousel-item v-for="(item,index) in imgList" :key="index">
          <img :src=item.url alt="" width="650px" height="350px">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="lable_shuma">

    </div>
  </div>

</template>

<script type="text/javascript">
  export default {
    name: "app",
    data() {
      return {
        imgList:[
          {
            url:require('assets/img/secondHand/calouseImg/computer.jpeg')
          },
          {
            url:require('assets/img/secondHand/calouseImg/furit.jpeg')
          },
          {
            url:require('assets/img/secondHand/calouseImg/vc.jpeg')
          },
          {
            url:require('assets/img/secondHand/calouseImg/phone.jpeg')
          }
        ]
        // img1:require('~assets/img/secondHand/calouseImg/computer.jpeg'),
        // img2:require('~assets/img/secondHand/calouseImg/furit.jpeg'),
        // img3:require('~assets/img/secondHand/calouseImg/vc.jpeg'),
        // img4:require('~assets/img/secondHand/calouseImg/phone.jpeg')
      }
    },
    components: {

    }
  }
</script>

<style  scoped>
  .carouseImg{
    width: 650px;
    height: 350px;
    margin-left: 18vw;
    margin-top: 1vh;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>


