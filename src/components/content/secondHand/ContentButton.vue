/**

 */
<template>
   <div id="dispaly_info"> 
     
     <div class="sellername"><slot name="sellername"></slot></div>
     <div class="provalue"><slot name="provalue"></slot></div>
     <div class="sellerlink"><slot name="link"></slot></div>
   </div>
   
</template>

<script type="text/javascript">

export default {
  name: "app",
   data() {
      return {
        visible: false
      };
    },
  components: {
   
  },
  
}

</script>

<style  scoped>
#dispaly_info{
  font-size: 10px;
  height: 50px;
  display: flex;
  flex-wrap: wrap;
  /* border: 1px red solid; */
}
.sellername{
  width: 160px;
  height: 10px;
  /* border: 1px red solid; */
}
.provalue{
  height: 30px;
  /* border: 1px red solid; */
}
.sellerlink{
  width: 80px;
  height: 20px;
  margin-left: 20px;
  /* border: 1px red solid; */
}

</style>
