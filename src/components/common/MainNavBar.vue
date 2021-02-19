<template>
  <div id="main-nav-bar">
    <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo nav-flex-father"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            router="true">
      <div class="nav-flex-child"></div>

      <el-menu-item index="home" class="nav-flex-child">首页</el-menu-item>

      <div class="nav-flex-child"></div>

      <el-submenu index="2" class="nav-flex-child">
        <template slot="title" >二手交易</template>
        <el-menu-item index="2-1">卖东西</el-menu-item>
        <el-menu-item index="2-2">买东西</el-menu-item>
        <el-menu-item index="2-3">交易订单</el-menu-item>
      </el-submenu>

      <el-submenu index="3" class="nav-flex-child">
        <template slot="title">学习辅导</template>
        <el-menu-item index="3-1">找人辅导</el-menu-item>
        <el-menu-item index="3-2">等人辅导</el-menu-item>
        <el-menu-item index="3-3">辅导订单</el-menu-item>
      </el-submenu>

      <el-submenu index="4" class="nav-flex-child">
        <template slot="title">跑腿</template>
        <el-menu-item index="4-1">我要带货</el-menu-item>
        <el-menu-item index="4-2">请人带货</el-menu-item>
        <el-menu-item index="4-3">带货订单</el-menu-item>
      </el-submenu>

      <el-submenu index="5" class="nav-flex-child">
        <template slot="title">资讯</template>
        <el-menu-item index="5-1">校园资讯</el-menu-item>
        <el-menu-item index="5-2">社团招新</el-menu-item>
        <el-menu-item index="5-3">趣味社区</el-menu-item>
      </el-submenu>

      <div class="nav-flex-child"></div>

      <el-menu-item index="profile" class="nav-flex-child">我的</el-menu-item>
      <div class="nav-flex-child"></div>
    </el-menu>
  </div>
</template>

<script>

  export default {
    name: "MainNavBar",
    components:{
    }
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