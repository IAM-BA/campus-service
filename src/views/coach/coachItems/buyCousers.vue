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
              <i class="el-icon-edit"></i>
              <span>线上学习</span>
            </template>
            <el-menu-item-group>
              <template slot="title">网络授课</template>
              <el-menu-item index="/coach/buyCousers/publicCourse" ><i class="el-icon-user"></i>公共课程</el-menu-item>
              <el-menu-item index="/coach/buyCousers/computerCourse"><i class="el-icon-monitor"></i>计算机课程</el-menu-item>
              <el-menu-item index="/coach/buyCousers/otherCourse"><i class="el-icon-notebook-1"></i>其他课程</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group >
                 <template slot="title">优惠专区</template>
                 <el-menu-item index="1-4"><i class="el-icon-alarm-clock"></i>限时拼团</el-menu-item>
                 <el-menu-item index="1-5"><i class="el-icon-sugar"></i>免费课程</el-menu-item>
            </el-menu-item-group>
            <el-menu-item index="1-6"><i class="el-icon-pear"></i>限免专区</el-menu-item>
            <el-menu-item index="1-7"><i class="el-icon-wallet"></i>新人1元购</el-menu-item>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-office-building"></i>
            <span slot="title">课外辅导</span>
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
