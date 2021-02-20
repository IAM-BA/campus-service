<template>
  <div id="app">
    <main-nav-bar></main-nav-bar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import MainNavBar from "./components/content/MainNavBar";


  export default {
    name: 'app',
    components: {
      MainNavBar,
    }
  }
</script>

<style>

</style>
