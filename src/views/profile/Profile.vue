<template>
  <div>
    <h2>用户中心</h2>
    <router-view></router-view>
    <net-test></net-test>
  </div>
</template>

<script>
  import {request} from "network/request";

  import NetTest from "../NetTest";

  request({
    url: '/student/list'
  }).then(res => {

  }).catch(err => {

  })
  export default {
    name: "Profile",
    components: {
      NetTest
    }
  }

</script>

<style scoped>
</style>
