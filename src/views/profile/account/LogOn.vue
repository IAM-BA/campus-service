<template>
  <div style="background-color: lightblue;overflow:auto;">
    <div class="background"></div>
    <div class="flex-father">
      <div class="center">

        <div class="header">头</div>

        <div class="main">
          <div class="main-left">
            <login-form></login-form>
          </div>
          <div class="main-right"></div>
        </div>

        <div class="foot">脚</div>

      </div>
    </div>
  </div>
</template>

<script>
  import LoginForm from "./common/LoginForm";

  export default {
    name: "LogOn",
    components: {
      LoginForm
    },
    methods: {
      isLog(){
        // 请求是否登录
        return this.$store.state.ProfileX.logState
      }
    }
  }
</script>

<style scoped>
  .background{
    background-color: lightblue;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
  }
  .flex-father{
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
  }
  .center{
    display: flex;
    flex-direction: column;
    height: 85%;
    width: 45%;
    box-shadow: 1px 2px 30px 8px rgba(0,0,0,.5);
  }
  .header{
    flex: 1;
    background-color: red;
  }
  .main{
    flex: 6;
    background-color: blue;
    display: flex;
  }
  .main-left{
    background-color: yellowgreen;
    overflow:hidden;
    display: flex;
    width: 100%;
    height: 100%;
    flex-flow: column nowrap;
    justify-content: center;
    align-content: center;
    flex: 2;
  }
  .main-right{
    background-color: black;
    flex: 1;
  }
  .foot{
    flex: 1;
    background-color: green;
  }

</style>
