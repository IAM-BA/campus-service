<template>
  <!--        底部-->
  <div class="footer">
    <el-row :gutter="5" class="fontFirst">
      <el-col :span="2"><div class="grid-content bg-purple">招募教师</div></el-col>
      <el-col :span="2"><div class="grid-content bg-purple">关于我们</div></el-col>
      <el-col :span="2"><div class="grid-content bg-purple">联系我们</div></el-col>
      <el-col :span="2"><div class="grid-content bg-purple">招兵买马</div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple">服务协议和隐私政策</div></el-col>
      <el-col :span="2"><div class="grid-content bg-purple">帮助与反馈</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8"><div class="grid-content bg-purple fontSize">创新教育&emsp;改变世界</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8"><div class="grid-content bg-purple">New Education, New World</div></el-col>
    </el-row>
    <!--          以下留出来后续补充-->
    <el-row :gutter="20">
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>

<script type="text/javascript">
    export default {
      name: "coachfoot",
      data() {
        return {}
      }
    }
</script>

<style scoped>
  /*  footer布局*/
  .footer{
    width: 100%;
    background:#495057 ;
  }
  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    /*background: #d3dce6;*/
    text-align: center;
    font-size: 14px;
    font-family: Arial;
    color: #a8a8a8;
    line-height: 36px;
  }
  .bg-purple:hover{
    text-decoration: underline;
    cursor: pointer;
  }
  .fontSize{
    font-size: 20px;
    font-weight: bold;
  }
  .fontSize:hover{
    text-decoration: none;
    cursor: default;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }


</style>
