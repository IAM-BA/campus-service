<template>
  <div id="content-container">
   <slot></slot>
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
    
  }
}
</script>

<style  scoped>
#content-container{
  width: 55vw;
  height: 100vh;
  display: flex;
  margin-top: 10px;
  margin-left: 5vw;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-content: flex-start;
  /* border:1px red solid */
  
}


</style>
