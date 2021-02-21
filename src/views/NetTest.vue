<template>
  <div>
    <h2>网络请求测试页</h2>
    <div>
      <li v-for="item in result">{{item}}</li>
      <i class="el-icon-edit"></i>
    </div>

  </div>
</template>

<script>
  import {getTestData} from "network/profile";

  export default {
    name: "NetTest",
    data() {
      return {
        result: [],
      }
    },
    computed: {

    },
    created() {
      // 生命周期，在组件创建完毕后开始进行请求
      // 封装的方法
      getTestData()
        .then(res => {
          this.result = res
        })
        .catch(err => {
          this.result = "非常抱歉请求失败"
        })
    }
  }
</script>

<style scoped>

</style>
