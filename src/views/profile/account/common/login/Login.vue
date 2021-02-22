<template>
  <div  style="width: 100%;height: 100%">
    <box-layout>
      <header-item slot="header"></header-item>
      <login-form slot="main-left"></login-form>
      <beside-nav slot="main-right"></beside-nav>
      <div slot="foot">foot</div>
    </box-layout>
  </div>
</template>

<script>
  import BoxLayout from "../box/BoxLayout";
  import HeaderItem from "../HeaderItem";
  import LoginForm from "./LoginForm";
  import BesideNav from "../BesideNav";

  export default {
    name: "Login",
    components: {
      BoxLayout,
      HeaderItem,
      LoginForm,
      BesideNav
    },

  }
</script>

<style scoped>

</style>
