<template>
  <div>
    <div class="background">
      <net-test></net-test>
    </div>
  </div>
</template>

<script>
  import NetTest from "../../NetTest";

  export default {
    name: "LogOn",
    components: {
      NetTest
    },
    methods: {
      isLog(){
        // 请求是否登录
        return this.$store.state.ProfileX.logState
      }
    }
  }
</script>

<style scoped>
  .background{
    background-color: lightblue;
    width: 100%;
    height: 100%;
    position: fixed;
  }

</style>
