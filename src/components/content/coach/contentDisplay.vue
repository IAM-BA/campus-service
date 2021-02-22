<template>
  <div id="content-container">
    <!--    回到顶部-->
    <el-backtop></el-backtop>
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: "contentDisplay",
    data() {
      return {


      }
    },
    components: {

    }
  }
</script>

<style  scoped>
  #content-container{
    background: #fff5f5;
    width: 70vw;
    /*height: 100vh;*/
    display: flex;
    margin-top: 10vh;
    margin-left: 5vw;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-content: flex-start;
    /* border:1px red solid */

  }


</style>
