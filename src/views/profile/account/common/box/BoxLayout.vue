<template>
  <div class="flex-father">
    <div class="center">

      <div class="header">
         <slot name="header"></slot>
      </div>

      <div class="main">
        <div class="main-left">
          <slot name="main-left"></slot>
        </div>
        <div class="main-right">
          <slot name="main-right"></slot>
        </div>
      </div>

      <div class="foot">
        <slot name="foot"></slot>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "BoxLayout"
  }
</script>

<style scoped>
  .flex-father{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-content: center;
  }
  .center{
    display: flex;
    flex-direction: column;
    overflow: auto;
    height: 85%;
    width: 45%;
    box-shadow: 1px 2px 30px 8px rgba(0,0,0,.5);
    border: 1px solid rgba(0, 0, 0, .3);
  }
  .header{
    flex: 1;
    overflow: auto;
    /*background-color: red;*/
  }
  .main{
    flex: 6;
    /*background-color: blue;*/
    display: flex;
    flex-wrap: wrap;
  }
  .main-left{
    /*background-color: yellowgreen;*/
    overflow: auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-content: center;
    flex: 2;
  }
  .main-right{
    overflow: auto;
    /*background-color: black;*/
    display: flex;
    justify-content: center;
    border: 0 solid rgba(255, 255, 255, .5);
    border-left-width: 2px;
    flex: 1;
  }
  .foot{
    flex: 1;
    /*background-color: green;*/
  }
</style>
