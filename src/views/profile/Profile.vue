<template>
  <div>
    <div>
      <router-view></router-view>
    </div>
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
    },
    data() {
      return {
        path: '/profile/logon'
      }
    },
    activated() {
      // 界面进入活跃状态执行
      if(this.path !== this.$route.path) {
        if(!this.$store.state.ProfileX.logState){
          this.path = '/profile/logon'
        }
        else{
          this.path = '/profile/register'
        }
        this.$router.push(this.path)

      }
    },
    deactivated() {
      // 界面进入不活跃状态执行
      // console.log('deactivated')
    },
    beforeRouteUpdate (to, from, next) {
      if (this.path !== to.path){
        next(false)
      }
      else{
        next()
      }
    },
  }

</script>

<style scoped>
  @import "~assets/css/base.css";

</style>
