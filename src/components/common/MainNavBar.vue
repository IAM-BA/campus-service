<template>
  <div id="main-nav-bar">
    <el-menu
            :default-active="isActive"
            class="el-menu-demo nav-flex-father"
            mode="horizontal"
            @select=""
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :router="routerSwitch">
      <div class="nav-flex-child"></div>

      <el-menu-item index="/home" class="nav-flex-child">首页</el-menu-item>

      <div class="nav-flex-child"></div>

      <el-menu-item index="/secondHand" class="nav-flex-child">跳蚤市场</el-menu-item>

      <el-menu-item index="/coach" class="nav-flex-child">学习辅导</el-menu-item>

      <el-menu-item index="/runErrands" class="nav-flex-child">跑腿</el-menu-item>

      <el-submenu index="/information" class="nav-flex-child">
        <template slot="title">资讯</template>
        <el-menu-item index="/information/universitiesInfo">校园资讯</el-menu-item>
        <el-menu-item index="/information/association">社团招新</el-menu-item>
        <el-menu-item index="/information/community">趣味社区</el-menu-item>
      </el-submenu>

      <div class="nav-flex-child"></div>

      <el-menu-item index="/profile" class="nav-flex-child">我的</el-menu-item>

      <div class="nav-flex-child"></div>
    </el-menu>
  </div>
</template>

<script>

  export default {
    name: "MainNavBar",
    components:{
    },
    data(){
      return {

      }
    },
    computed: {
      isActive(){
        return this.$route.path
      //  每次跳转后保持激活状态
      },
      routerSwitch(){
        return true;
      }
    },

  }
</script>

<style scoped>
  @import "~assets/css/base.css";

  .nav-flex-father{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .nav-flex-child{
    flex: 1;
    text-align: center;
  }
  ul::after {
    content: none;
  }
  ul::before {
    content: none;
  }
</style>
