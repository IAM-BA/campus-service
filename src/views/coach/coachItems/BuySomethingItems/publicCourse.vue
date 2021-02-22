<template>
  <div>
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
      <coachfoot></coachfoot>
    </contentDisplay>

    </div>

</template>

<script type="text/javascript">
import contentDisplay from 'components/content/coach/contentDisplay'
import show from 'components/content/coach/show'
import coachfoot from "components/content/coach/coachfoot";


export default {
  name: "publicCourse",
  data() {
    return {
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
      ]

    }
  },
  components: {
    coachfoot,
    contentDisplay,
    show
  }
}
</script>

<style  scoped>

</style>
