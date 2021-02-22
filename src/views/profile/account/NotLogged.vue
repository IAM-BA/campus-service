<template>
  <div style="background-color:#d4d4d4;">
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: "LogOn",
    components: {

    },
    methods: {
      isLog(){
        // 请求是否登录
        return this.$store.state.ProfileX.logState
      }
    },
  }
</script>

<style scoped>

</style>
