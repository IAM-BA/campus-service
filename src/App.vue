<template>
  <div id="app" class="flex-fater">
    <div class="header">
      <main-nav-bar></main-nav-bar>
    </div>

    <div class="main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
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
  .flex-fater{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .header{
    flex: 1;
  }
  .main{
    flex: 16;
  }
</style>
