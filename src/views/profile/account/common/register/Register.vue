<template>
  <div  style="width: 100%;height: 100%">
    <box-layout>
      <header-item slot="header"></header-item>
      <register-form slot="main-left"></register-form>
      <beside-nav slot="main-right"></beside-nav>
      <div slot="foot">foot</div>
    </box-layout>
  </div>
</template>

<script>
  import BoxLayout from "../box/BoxLayout";
  import HeaderItem from "../HeaderItem";
  import RegisterForm from "./RegisterForm";
  import BesideNav from "../BesideNav";


  export default {
    name: "Register",
    components: {
      BoxLayout,
      HeaderItem,
      RegisterForm,
      BesideNav
    }
  }

</script>

<style scoped>

</style>
