<template>
  <div id="app">
    <main-nav-bar></main-nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import MainNavBar from "./components/common/MainNavBar";


  export default {
    name: 'app',
    components: {
      MainNavBar,
    }
  }
</script>

<style>

</style>
