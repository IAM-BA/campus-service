<template>
  <div class="nav-container">

    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          mode="vertical"
        router>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-view"></i>
              <span>随便看看</span>
            </template>
            <el-menu-item-group>
              <template slot="title">数码产品</template>
              <el-menu-item index="/secondHand/buysomthing/phone" ><i class="el-icon-mobile"></i>手机</el-menu-item>
              <el-menu-item index="/secondHand/buysomthing/"><i class="el-icon-monitor"></i>电脑</el-menu-item>
              <el-menu-item index="1-3"><i class="el-icon-printer"></i>其他电子产品</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group >
                 <template slot="title">生活与学习用品</template>
                 <el-menu-item index="1-4"><i class="el-icon-present"></i>穿的</el-menu-item>
                 <el-menu-item index="1-5"><i class="el-icon-food"></i>吃的</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-6">
              <template slot="title"><i class="el-icon-umbrella"></i>用的</template>
              <el-menu-item index="1-6-1"><i class="el-icon-toilet-paper"></i>日常用品</el-menu-item>
              <el-menu-item index="1-6-2"><i class="el-icon-notebook-2"></i>学习用品</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-shopping-bag-2"></i>
            <span slot="title">我有需求</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

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

  },
   methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
}
</script>

<style  scoped>
.nav-container{
  display: flex;

}

</style>
