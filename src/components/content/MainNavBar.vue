<template>
  <div id="main-nav-bar">
    <el-menu
            :default-active="isActive"
            class="nav-flex-father"
            mode="vertical"
            @select="handleSelect"
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

      <el-menu-item index="/information" class="nav-flex-child">校园资讯</el-menu-item>

      <div class="nav-flex-child"></div>

      <el-menu-item index="/profile" class="nav-flex-child" v-if="isLog">我的</el-menu-item>
      <el-menu-item index="/profile" class="nav-flex-child" v-else>登录/注册</el-menu-item>

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
        activeIndex: "/home"
      }
    },
    computed: {
      isActive(){
        //匹配字符串进行激活
        return this.$route.path.match(/(\/[\s\S]*?)(\/|$)/)[1]
      //  每次跳转后保持激活状态
      },
      routerSwitch(){
        // Element路由模式开关
        return true;
      },
      isLog(){
        // 请求是否登录
        return this.$store.state.ProfileX.logState
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
      }
    }

  }
</script>

<style scoped>
  @import "~assets/css/base.css";

  .nav-flex-father{
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-content: flex-start;
    border-right: none;
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
