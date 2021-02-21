<template>
  <div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

  export default {
    name: "Profile",
    components: {
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
      if (this.path === to.path){
        next()
      }
    },
  }

</script>

<style scoped>
  @import "~assets/css/base.css";

</style>
