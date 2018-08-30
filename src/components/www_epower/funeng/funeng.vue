<template>
    <div>
        <div class="fn_banner">
            <div class="center-1200">
                <div class="fn_title text-center">
                    <h3 class="color-fff lh-56 font-32">ePower课程</h3>
                    <p class="color-fff lh-32 font-16">分享创业知识的课堂，实现创富梦想的起点</p>
                </div>
                <div class="fn_content">
                    <div class="fn_info bg-fff text-left">
                        <p class="font-16 lh-24">
                            <b class="font-16">特邀讲师：</b>
                            杭州电商商务研究院商标专家&nbsp;&nbsp;徐杨
                        </p>
                        <p class="font-16 lh-24">
                            <b class="font-16">协办单位：</b>
                            杭州高新开发区（滨江）品牌保护行业协会
                        </p>
                        <p class="font-16 lh-24">
                            <b class="font-16">指导单位：</b>
                            杭州市两创示范工作领导小组办公室
                        </p>
                        <p class="font-16 lh-24">
                            <b class="font-16">课程时间：</b>
                            每周三20:00
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 精选直播课 -->
        <zhiBo></zhiBo>
        <!-- <div class="zhibo bg-fff">
            <h3 class="zhibo_title color-434a54 font-32">精选直播课</h3>
            <div class="content">
                <div class="fl content-image"></div>
                <div class="fr content-list"></div>
            </div>
        </div> -->
    </div>
</template>

<script>
import zhiBo from './zhiBo.vue';
    export default {
        components:{zhiBo}
    }
</script>

<style scoped>
    *{
        box-sizing: border-box;
    }
    .fn_banner{
        height: 420px;
        width: 100%;
        background: url("../../../style/funeng/banner_02.png");
    }
    .fn_title{
        padding: 40px 0;
    }
    .fn_content{
        width: 45%;
        height: 200px;
        margin: 0 auto;
        background: rgba(255,255,255,.3);
        border: solid 1px rgba(255,255,255,.5);
        padding: 10px;
        border-radius: 8px;
    }
    .fn_info{
        width: 100%;
        height: 100%;
        border-radius: 8px;
        padding-left: 40px;
        padding-top: 25px;
        background: url("../../../style/funeng/2471531206650_.png") no-repeat right bottom;
        background-size: 120px 34px;
        padding-bottom: 10px;
    }
    .fn_info p{
        color: #2876d8;
        margin-bottom: 14px;
    }
    .zhibo_title{
        line-height: 152px;
    }
    .zhibo .content>div{
        width: 50%;
        height: 352px;
    }
</style>
<style>
*{
  margin: 0;
  padding: 0;
}
a{
    text-decoration: none;
    outline:none;
}
h1,
h2,
h3,
h4 {
  font-weight: normal;

}
p {
  margin: 0;
}
ul,
li,
ol,
dl,
dt,
dd {
  list-style: none;
}
.center-1200 {
  width: 1200px !important;
  margin: 0 auto !important;
}
.bg-fff {
  background-color: #fff !important;
}
.bg-f5 {
  background-color: #f5f5f5 !important;
}
.bg-transparent {
  background-color: transparent !important;
}
.pt-60 {
  padding-top: 60px;
}
.pb-60 {
  padding-bottom: 60px;
}
.mb-60 {
  margin-bottom: 60px;
}
.mb-40 {
  margin-bottom: 40px;
}
.pr {
  position: relative;
}
.po {
  position: absolute;
}
.color-434a54 {
  color: #434a54;
}
.color-82939e {
  color: #82939e;
}
.color-fff {
  color: #fff;
}
.color-666 {
  color: #666;
}
.color-333 {
  color: #333;
}
.font-32 {
  font-size: 32px;
}
.font-24 {
  font-size: 24px;
}
.font-16 {
  font-size: 16px;
}
.bold {
  font-weight: bold;
}
.lh-52 {
  line-height: 52px;
}
.lh-56 {
  line-height: 56px;
}
.lh-36 {
  line-height: 36px;
}
.lh-42 {
  line-height: 42px;
}
.lh-32 {
  line-height: 32px;
}
.text-center {
  text-align: center;
}
.fl {
  float: left;
}
.fr {
  float: right;
}

</style>
