<template>
  <div id="coach">
    <el-container>
<!--      <el-aside width="200px">Aside</el-aside>-->
      <el-container>
        <el-header>计算机课程</el-header>
        <el-main>
<!--          走马灯-->
          <div style="width: 60%;margin: 0 auto">
<!--            div包裹进行样式调整-->
            <el-carousel :interval="5000" arrow="always">
              <el-carousel-item v-for="item in imagebox" :key="item.id">
                <img :src="item.idView" class="image">
              </el-carousel-item>
            </el-carousel>
          </div>

<!--          走马灯结束-->

<!--          课程-->
          <div >
            <contentDisplay>
              <div v-for="i in course" :key="i.courseId">
                <show>
                  <img :src=i.courserimg alt="error" slot="proimg">
                  <span slot="tname"><div>课程名称:{{i.courserName}}</div></span>
                  <span slot="couinfo">简介:{{i.courserinfo}}</span>
                  <span slot="school"><i class="el-icon-school">出版:{{i.courser}}</i></span>
                  <span slot="couvalue"><div>￥{{i.courservalue}}</div></span>
                  <span slot="shop">
            <el-button type="text" icon="el-icon-shopping-cart-2">购买</el-button>
             </span>
                </show>
              </div>
            </contentDisplay>
          </div>
<!--          课程结束-->
        </el-main>
<!--        底部-->
        <coachfoot></coachfoot>
<!--        <div class="footer">-->
<!--            <el-row :gutter="5" class="fontFirst">-->
<!--            <el-col :span="2"><div class="grid-content bg-purple">招募教师</div></el-col>-->
<!--            <el-col :span="2"><div class="grid-content bg-purple">关于我们</div></el-col>-->
<!--            <el-col :span="2"><div class="grid-content bg-purple">联系我们</div></el-col>-->
<!--            <el-col :span="2"><div class="grid-content bg-purple">招兵买马</div></el-col>-->
<!--            <el-col :span="4"><div class="grid-content bg-purple">服务协议和隐私政策</div></el-col>-->
<!--            <el-col :span="2"><div class="grid-content bg-purple">帮助与反馈</div></el-col>-->
<!--        </el-row>-->
<!--          <el-row :gutter="20">-->
<!--            <el-col :span="8"><div class="grid-content bg-purple fontSize">创新教育&emsp;改变世界</div></el-col>-->
<!--          </el-row>-->
<!--          <el-row :gutter="20">-->
<!--            <el-col :span="8"><div class="grid-content bg-purple">New Education, New World</div></el-col>-->
<!--          </el-row>-->
<!--&lt;!&ndash;          以下留出来后续补充&ndash;&gt;-->
<!--          <el-row :gutter="20">-->
<!--            <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>-->
<!--            <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>-->
<!--            <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>-->
<!--          </el-row>-->
<!--        </div>-->
      </el-container>
    </el-container>
  </div>
</template>
<script>
  import contentDisplay from 'components/content/coach/contentDisplay'
  import show from 'components/content/coach/show'
  import coachfoot from "components/content/coach/coachfoot";
  export default {
    name: "computerCourse",
    data(){
      return {
        imagebox:[{id:0,idView:require('assets/img/coach/1.jpg')},
          {id:1,idView:require('assets/img/coach/2.jpg')},
          {id:2,idView:require('assets/img/coach/3.jpg')},
          {id:3,idView:require('assets/img/coach/4.jpg')},
          {id:4,idView:require('assets/img/coach/5.jpg')},
          {id:5,idView:require('assets/img/coach/6.jpg')}
          //imagebox是assets下一个放图片的文件夹
        ],
        courseNum: 0,
        course:[
          {
            courseId:"c1",
            courser:"陕西工业技术学院",
            courserimg:require("assets/img/coach/publiCourseImg/ComEnglish.jpg"),
            courserName:"高职使用综合英语",
            courserinfo:"想在今后的工作和社会交往中有效地用英语进行沟通吗？想轻松通过AB级考试吗？想用英语讲好中国故事吗？！",
            courservalue:109
          },
          {
            courseId:"c2",
            courser:"陕西工业技术学院",
            courserimg:require("assets/img/coach/publiCourseImg/highMath.jpg"),
            courserName:"高等数学",
            courserinfo:"  高等数学课程是高职各专业的一门重要的基础理论课，它是研究物质世界中各种数量之间的最基本、最普通的关系。",
            courservalue:99
          },
          {
            courseId:"c3",
            courser:"陕西工业技术学院",
            courserimg:require("assets/img/coach/publiCourseImg/eMath.jpg"),
            courserName:"经济数学",
            courserinfo:"经济数学是经管类专业的一门重要基础理论课，是经济管理人才培养的基础，是学生素质教育的主要内容。！",
            courservalue:599
          },
          {
            courseId:"c4",
            courser:"清华大学",
            courserimg:require("assets/img/coach/publiCourseImg/pMthSta.jpg"),
            courserName:"概率论与数理统计",
            courserinfo:"“降雨概率”，“排队等待时间”，“投资风险”等等，随机现象在现代生活中无处不在。",
            courservalue:599
          },
          {
            courseId:"c5",
            courser:"云南财经大学",
            courserimg:require("assets/img/coach/publiCourseImg/microEconomics.jpg"),
            courserName:"微观经济学",
            courserinfo:"本课程讨论市场机制条件下，微观个体资源配置的方式及其最大化收益。",
            courservalue:109
          },
          {
            courseId:"c6",
            courser:"燕山大学",
            courserimg:require("assets/img/coach/publiCourseImg/linearAlgebra.jpg"),
            courserName:"线性代数",
            courserinfo:"线性代数是高等院校理工科和经管类各专业必修的一门重要基础数学理论课程。",
            courservalue:299
          },
          {
            courseId:"c7",
            courser:"云南财经大学",
            courserimg:require("assets/img/coach/publiCourseImg/microEconomics.jpg"),
            courserName:"微观经济学",
            courserinfo:"本课程讨论市场机制条件下，微观个体资源配置的方式及其最大化收益。",
            courservalue:109
          },
          {
            courseId:"c8",
            courser:"燕山大学",
            courserimg:require("assets/img/coach/publiCourseImg/linearAlgebra.jpg"),
            courserName:"线性代数",
            courserinfo:"线性代数是高等院校理工科和经管类各专业必修的一门重要基础数学理论课程。",
            courservalue:299
          },
          {
            courseId:"c9",
            courser:"清华大学",
            courserimg:require("assets/img/coach/publiCourseImg/pMthSta.jpg"),
            courserName:"概率论与数理统计",
            courserinfo:"“降雨概率”，“排队等待时间”，“投资风险”等等，随机现象在现代生活中无处不在。",
            courservalue:599
          },
        ],
        screenWidth :0
      }
    },
    methods:{
      setSize:function () {
        // 通过浏览器宽度(图片宽度)计算高度
        this.bannerHeight = 400 / 1920 * this.screenWidth;
      },
    },
    mounted() {
      // 首次加载时,需要调用一次
      this.screenWidth =  window.innerWidth;
      this.setSize();
      // 窗口大小发生改变时,调用一次
      window.onresize = () =>{
        this.screenWidth =  window.innerWidth;
        this.setSize();
      }
    },
    components: {
      coachfoot,
      contentDisplay,
      show
    }
  }
</script>

<style scoped>

  #coach{
    width: 100%;
  }
  .el-header{
    font-size: 18px;
    font-family: "Hiragino Sans GB";
    font-weight:bold;
    background-color: #d4d4d4;
    color: #cc0000;
    text-align: center;
    line-height: 60px;
  }
  .footer{
    background: #868e96;
    width: 100%;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  /*走马灯*/
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-carousel__item img{
    width:90%;
    height:inherit;
  }
/*  footer布局*/
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
