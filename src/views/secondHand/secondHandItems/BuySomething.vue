<template>
  <div class="nav-container">

    <keep-alive>
      <router-view></router-view>
    </keep-alive>

  </div>
</template>
<script type="text/javascript">

export default {
  name: "app",
  data() {
    return {

    }
  },
  components: {

  },
   methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
}
</script>

<style  scoped>
.nav-container{
  display: flex;

}

</style>
