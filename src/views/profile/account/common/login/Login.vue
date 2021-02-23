<template>
  <div  style="width: 100%;height: 100%">
    <box-layout>
      <login-header-item slot="header"></login-header-item>
      <login-form slot="main-left" ref="form"></login-form>
      <beside-nav slot="main-right"></beside-nav>
      <div slot="foot">foot</div>
    </box-layout>
  </div>
</template>

<script>
  import BoxLayout from "../box/BoxLayout";
  import LoginHeaderItem from "./LoginHeaderItem";
  import LoginForm from "./LoginForm";
  import BesideNav from "../BesideNav";

  export default {
    name: "Login",
    data() {
      return {
      }
    },
    methods: {
      changeForm(activeName) {
        this.$refs.form.startActive(activeName)
      }
    },
    components: {
      BoxLayout,
      LoginHeaderItem,
      LoginForm,
      BesideNav
    },

  }
</script>

<style scoped>

</style>
