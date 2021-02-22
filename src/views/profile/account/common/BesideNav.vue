<template>
  <div style="display: flex">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          :default-active="isActive"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          mode="vertical"
          background-color="#d4d4d4"
          text-color="black"
          active-text-color="409FFF"
          router>
          <el-menu-item index="/profile/notLogged/login" class="nav-flex-child">我已有账号需要登录</el-menu-item>

          <el-menu-item index="/profile/notLogged/register" class="nav-flex-child">注册</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "BesideNav",
    data(){
      return {

      }
    },
    computed:{
      isActive(){
        //匹配字符串进行激活
        return this.$route.path
        //  每次跳转后保持激活状态
      },
    },
    methods: {
      handleOpen(key, keyPath) {

      },
      handleClose(key, keyPath) {

      }
    },

  }
</script>

<style scoped>

</style>
