<template>
  <div>
    <div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="手机号登录" name="1"></el-tab-pane>
        <el-tab-pane label="账号密码登录" name="2"></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HeaderItem",
    data() {
      return {
        activeName: '1'
      };
    },
    methods: {
      handleClick(tab, event) {
        // console.log(tab, event);
        // console.log("触发")
        // 由于Element的嵌套，导致多中间多夹一个爹
        this.$parent.$parent.changeForm(parseInt(this.activeName))
      },
    },
    mounted() {
      this.$parent.$parent.changeForm(parseInt(this.activeName))
    }
  }
</script>

<style scoped>

</style>
