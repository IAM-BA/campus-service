<template>
  <div class="nav-flex-father">

    <div style="width: 201px">
        <left-nav-bar></left-nav-bar>
    </div>
    <keep-alive>
       <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import LeftNavBar from "./secondHandItems/content/LeftNavBar";

  export default {
    name: "SecondHand",
    components:{
      LeftNavBar
    }
  }
</script>

<style scoped>
  .nav-flex-father{
    display: flex;
    width: 100%;
    height: 100%;
  }
</style>
