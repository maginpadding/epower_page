<template>
    <div>
        <mobileHeader></mobileHeader>
        <!-- ePower课程 分享创业知识的课堂，实现创富梦想的起点 -->
        <div class="ep-course clearfix">
            <div class="ep-title text-center">
                <h3 class="color-fff font-32 lh-48">ePower课程</h3>
                <p class="color-fff font-24 lh-48">分享创业知识的课堂，实现创富梦想的起点</p>
            </div>
            <div class="ep-content">
                <div class="ep-info bg-fff">
                    <p>
                        <b>特邀讲师：</b>
                        <span>
                            杭州电子商务研究院商标专家&nbsp;&nbsp;徐杨
                        </span>
                    </p>
                    <p>
                        <b>协办单位：</b>
                        <span>
                            杭州高新开发区（滨江）品牌保护行业协会
                        </span>
                    </p>
                    <p>
                        <b>指导单位：</b>
                        <span>
                            杭州市两创示范工作领导小组办公室
                        </span>
                    </p>
                    <p>
                        <b>课程时间：</b>
                        <span>
                            每周三20:00
                        </span>
                    </p>
                </div>
            </div>
        </div>
        <!-- 精选公开课 -->
        <div class="ep-live bg-fff pr">
            <div class="ep-title color-434a54 text-center font-32 lh-48">精选公开课</div>
            <!-- 课程 -->
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="ep-live-content swiper-slide" v-for="(item, index) in liveList" :key="index" :data-href="item.href">
                        <img class="screen-img" :alt="item.text" :title="item.text" :src="'http://www.epower.cn/template/Home/Default/PC/Static/epower/images/yyfn/course_'+(liveList.length-index+1)+'.jpg'">
                        <div class="ep-live-info">
                            <span class="info-title">{{item.time}} —</span>
                            <span class="info-text">【{{item.title}}】{{item.text}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            <a :href="activeHref" class="mod-btn ep-live-btn">立即听课</a>
        </div>
    </div>
</template>

<script>
import mobileHeader from '../../mobileHeader'
import liveList from '../../../style/js/funeng'

export default {
  components: {
    mobileHeader
  },
  data() {
    return {
      activeHref: '',
      liveList
    }
  },
  mounted() {
    var liveSwiper = new Swiper('.ep-live .swiper-container', {
      loop: true,
      autoplay: true, //等同于以下设置
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
    var that = this
    //主要是这部分
    liveSwiper.on('slideChangeTransitionEnd', function() {
      var imgurl = $('.swiper-slide-active').attr('data-href')
      that.activeHref = imgurl
    })
    liveSwiper.updateSize()
  },
  methods: {}
}
</script>

<style lang="less" scoped>
* {
  box-sizing: border-box;
}
.ep-course {
  background: url('http://www.epower.cn/template/Home/Default/PC/Static/epower/images/yyfn/mobile_banner_02.png')
    no-repeat center center;
  background-size: cover;
  padding-bottom: 0.7rem;
}
.ep-title {
  padding: 0.48rem 0;
}
.ep-live {
  .swiper-button-next,
  .swiper-button-prev {
    width: 0.32rem;
    height: 0.45rem;
    background-size: 0.24rem 0.45rem;
    margin-top: 0.01rem;
  }
  .ep-live-btn {
    width: 3.2rem;
    height: 0.7rem;
    margin: 0.4rem auto;
    line-height: 0.7rem;
    display: block;
  }
  .swiper-container {
    width: 6rem;
    height: 3.52rem;
    position: relative;
    margin: 0 auto;
  }
  .ep-live-content {
    width: 6rem;
    height: 3.52rem;
    padding-top: 2.62rem;
    position: relative;
    margin: 0 auto;
    img {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      z-index: 100;
    }
    .ep-live-info {
      position: absolute;
      bottom: 0;
      left: 0;
      width: auto;
      padding: 0.06rem 0.2rem;
      height: 0.9rem;
      background-color: rgba(0, 0, 0, 0.5);
      color: #fff;
      font-size: 0.24rem;
      overflow: hidden;
      z-index: 200;
      .info-title {
        width: auto;
        float: left;
        line-height: 0.36rem;
      }
      .info-text {
        float: left;
        width: 80%;
        line-height: 0.36rem;
      }
    }
  }
}
.ep-content {
  width: auto;
  margin: 0 0.3rem;
  padding: 0.15rem;
  background: rgba(255, 255, 255, 0.3);
  border: solid 1px rgba(255, 255, 255, 0.5);
  border-radius: 8px;
}
.ep-info {
  border-radius: 8px;
  padding: 0.3rem;
  background: url('http://www.epower.cn/template/Home/Default/PC/Static/epower/images/yyfn/2471531206650_.png')
    no-repeat right bottom;
  background-size: 2.5rem 0.72rem;
  p {
    line-height: 0.48rem;
    font-size: 0.26rem;
    color: #2876d8;
    overflow: hidden;
    b {
      font-weight: bold;
      line-height: 0.48rem;
      float: left;
      width: auto;
    }
    span {
      color: #2876d8;
      line-height: 0.48rem;
      float: left;
      width: 70%;
    }
  }
}
</style>