<template>
  <div>
    <div class="pc" v-if="!this.mobileShow">
      <div id="introduce_banner"></div>
      <div class="section-1 bg-fff pt-60 pb-60">
        <div class="center-1200">
          <div class="h3-title text-center mb-60" data-sr="enter top,over .7s,move 100px ,wait .1s">
            <h3 class="color-434a54 font-32 lh-52">一键生成，免费建站</h3>
            <p class="color-82939e font-16 lh-36">一键生成网站，用户可通过拖拽、模块组合的方式，个性化设置网站！</p>
          </div>
          <div class="section-image">
            <div class="section-left" data-sr="enter left,over .7s,move 100px"></div>
            <div class="section-right" data-sr="enter right,over .7s,move 100px"></div>
          </div>
        </div>
      </div>
      <div class="section-2 bg-f5 pt-60 pb-50">
        <div class="center-1200">
          <div class="h3-title text-center mb-60" data-sr="enter top,over .7s,move 100px ,wait .1s">
            <h3 class="color-434a54 font-32 lh-52">海量建站模板</h3>
            <p class="color-82939e font-16 lh-36">28个大类，68个小类，上千套模板涵盖市场上基本建站需求！支持自定义模板，伙伴可自行增加模板！</p>
          </div>
          <div class="section-image" data-sr="enter bottom,over .7s,move 100px"></div>
        </div>
      </div>
      <div class="section-3 bg-fff pt-60 pb-50">
        <div class="center-1200">
          <div class="h3-title text-center mb-60" data-sr="enter top,over .7s,move 100px ,wait .1s">
            <h3 class="color-434a54 font-32 lh-52">五网合一</h3>
            <p class="color-82939e font-16 lh-36">一次生成PC网站+手机网站+微信网站+APP+小程序，一步到位、快捷高效！</p>
          </div>
          <div class="section-image" data-sr="enter bottom,over .7s,move 100px"></div>
        </div>
      </div>
      <div class="section-4 pt-60 pb-50">
        <div class="center-1200">
          <div class="h3-title text-center mb-60" data-sr="enter top,over .7s,move 100px ,wait .1s">
            <h3 class="color-fff font-32 lh-52">强大的网站功能</h3>
            <p class="color-82939e font-16 lh-36">免费赠送二级域名，支持绑定独立域名</p>
          </div>
          <div class="section-image">
            <Xzmm></Xzmm>
          </div>
          <!-- <div class="section-image box" data-sr="enter bottom,over .7s,move 100px">
          <div class="section-rotate pr list" id="rotate-1">
            <ul class="">
              <li class="po section-icon-1 p1">
                <img src="../../../style/gw_introduce/gw_13.png" alt="">
              </li>
              <li class="po section-icon-2 active p2">
                <img src="../../../style/gw_introduce/gw_15.png" alt="">
              </li>
              <li class="po section-icon-3 p3">
                <img src="../../../style/gw_introduce/gw_17.png" alt="">
              </li>
            </ul>
            <div class="po section-icon-left" v-show="false"></div>
            <div class="po section-icon-right" v-show="false"></div>
          </div>
        </div> -->
        </div>
      </div>
      <div class="section-5 bg-fff pt-60 pb-50">
        <div class="center-1200">
          <div class="h3-title text-center mb-60" data-sr="enter top,over .7s,move 100px ,wait .1s">
            <h3 class="color-434a54 font-32 lh-52">在线独立后台管理</h3>
            <p class="color-82939e font-16 lh-36">支持多人管理网站，可设置管理员账号与权限</p>
          </div>
          <div class="section-image pr">
            <div class="section-container pr swiper-container">
              <div class="section-ul swiper-wrapper">
                <div class="swiper-slide"><img src="../../../style/gw_introduce/gw_18.png" alt="" srcset=""></div>
                <div class="swiper-slide"><img src="../../../style/gw_introduce/gw_18.png" alt="" srcset=""></div>
                <div class="swiper-slide"><img src="../../../style/gw_introduce/gw_18.png" alt="" srcset=""></div>
              </div>
            </div>
            <div class="swiper-button-prev section-page-left po"></div>
            <div class="swiper-button-next section-page-right po"></div>
          </div>
        </div>
      </div>
      <div class="section-6 bg-f5 pt-60 pb-50">
        <div class="center-1200">
          <div class="h3-title text-center pb-50" data-sr="enter top,over .7s,move 100px ,wait .1s">
            <h3 class="color-434a54 font-32 lh-52">管理后台可添加自定义模板</h3>
          </div>
          <div class="section-image pr bg-common">
            <div class="section-icon-top po"></div>
            <div class="section-icon-left po"></div>
            <div class="section-icon-right po"></div>
            <div class="section-icon-center po"></div>
          </div>
        </div>
      </div>
      <div class="section-7 bg-fff pt-60 pb-50">
        <div class="center-1200">
          <div class="h3-title text-center pb-50" data-sr="enter top,over .7s,move 100px ,wait .1s">
            <h3 class="color-434a54 font-36 lh-52 font-lighter">只需商业授权，即刻拥有上千套精美行业解决方案</h3>
          </div>
          <div class="section-image pb-50">
            <div class="section-icon-left mod-btn fl">了解商业授权</div>
            <div class="section-icon-right mod-btn mod-btn-red fr">查看官网模板</div>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile" v-if="this.mobileShow">
      <div id="introduce_banner" class="bg-common"></div>
      <div class="section-1 clearfix bg-fff">
        <div class="h3-title text-center">
          <h3 class="color-333 font-32 lh-64">一键生成，免费建站</h3>
          <p class="font-24 color-666 lh-36">一键生成网站，用户可通过拖拽、模块组合的方式，个性化设置网站！</p>
        </div>
        <div class="section-image bg-common mb-20"></div>
        <div class="section-image bg-common section-image-bottom"></div>
      </div>
      <div class="section-2 clearfix bg-f5">
        <div class="h3-title text-center">
          <h3 class="color-333 font-32 lh-64">海量建站模板</h3>
          <p class="font-24 color-666 lh-36">28个大类，68个小类，上千套模板涵盖市场上基本建站需求！支持自定义模板，伙伴可自行增加模板！</p>
        </div>
        <div class="section-image bg-common"></div>
      </div>
      <div class="section-3 clearfix pd-20 bg-fff">
        <div class="h3-title text-center">
          <h3 class="color-333 font-32 lh-64">五网合一</h3>
          <p class="font-24 color-666 lh-36">一次生成PC网站+手机网站+微信网站+APP+小程序，一步到位、快捷高效！</p>
        </div>
        <div class="section-image bg-common"></div>
      </div>
      <div class="section-4 clearfix bg-common">
        <div class="h3-title text-center pd-20">
          <h3 class="font-32 lh-64 color-fff">强大的网站功能</h3>
          <p class="font-24 lh-36 color-fff">免费赠送二级域名，支持绑定独立域名</p>
        </div>
        <div class="section-image bg-common">
          <Xzmm></Xzmm>
        </div>
        <div class="section-image" v-show="false">
          <div class="section-rotate pr" id="rotate-1">
            <ul>
              <li class="po section-icon-1">
                <img src="../../../style/gw_introduce/gw_13.png" alt="">
              </li>
              <li class="po section-icon-2 active">
                <img src="../../../style/gw_introduce/gw_15.png" alt="">
              </li>
              <li class="po section-icon-3">
                <img src="../../../style/gw_introduce/gw_17.png" alt="">
              </li>
            </ul>
            <div class="po section-icon-left" v-show="false"></div>
            <div class="po section-icon-right" v-show="false"></div>
          </div>
        </div>
      </div>
      <div class="section-5 clearfix pd-20 bg-fff">
        <div class="h3-title text-center">
          <h3 class="color-333 font-32 lh-64">在线独立后台管理</h3>
          <p class="font-24 color-666 lh-36">支持多人管理网站，可设置管理员账号与权限</p>
        </div>
        <div class="section-image bg-common swiper-container">
          <div class="section-pagination mb-20">
            <div class="section-pa-left fl bg-common swiper-button-prev"></div>
            <div class="section-pa-right fr bg-common swiper-button-next"></div>
          </div>
          <div class="swiper-wrapper">
            <div class="section-swiper swiper-slide"></div>
          </div>
        </div>
      </div>
      <div class="section-6 clearfix pd-20 bg-fff">
        <div class="h3-title text-center">
          <h3 class="color-333 font-32 lh-64">管理后台可添加自定义模板</h3>
          <p class="font-24 color-666 lh-36 hide"></p>
        </div>
        <div class="section-image bg-common"></div>
      </div>
      <div class="section-7 bg-fff">
        <div class="h3-title text-center">
          <h3 class="color-333 font-32 lh-64">只需商业授权，<br> 即刻拥有上千套精美行业解决方案
          </h3>
        </div>
        <div class="section-image pb-50">
          <div class="section-icon-left mod-btn fl">了解商业授权</div>
          <div class="section-icon-right mod-btn mod-btn-red fr">查看官网模板</div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- pcGwInfo pc common.css -->
<style scoped>
h1,
h2,
h3,
h4 {
  font-weight: normal;
  margin: 0;
  padding: 0;
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
.pb-50 {
  padding-bottom: 50px;
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
.font-lighter {
  font-weight: lighter;
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
.font-36 {
  font-size: 36px;
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

.mod-btn {
  font-size: 16px;
  color: #fff;
  text-align: center;
  display: inline-block;
  vertical-align: middle;
  background: #009fe8;
  height: 50px;
  line-height: 50px;
  border: 1px solid #fff;
  width: 160px;
  border-radius: 25px;
  -webkit-user-select: none;
}
.mod-btn {
  -webkit-box-shadow: 0 10px 15px -3px rgba(0, 159, 232, 0.5);
  -moz-box-shadow: 0 10px 15px -3px rgba(0, 159, 232, 0.5);
  box-shadow: 0 10px 15px -3px rgba(0, 159, 232, 0.5);
}
.mod-btn-narrow {
  width: 130px;
  margin-right: 15px;
}
.mod-btn:hover {
  color: #fff;
  -webkit-transform: translate(0, 3px);
  -moz-transform: translate(0, 3px);
  transform: translate(0, 3px);
  -webkit-box-shadow: 0 7px 15px -3px rgba(0, 159, 232, 0.5);
  -moz-box-shadow: 0 7px 15px -3px rgba(0, 159, 232, 0.5);
  box-shadow: 0 7px 15px -3px rgba(0, 159, 232, 0.5);
}
.mod-btn-green {
  background: #53b958;
  -webkit-box-shadow: 0 10px 15px -3px rgba(83, 185, 88, 0.5);
  -moz-box-shadow: 0 10px 15px -3px rgba(83, 185, 88, 0.5);
  box-shadow: 0 10px 15px -3px rgba(83, 185, 88, 0.5);
}
.mod-btn-green:hover {
  -webkit-box-shadow: 0 7px 15px -3px rgba(83, 185, 88, 0.5);
  -moz-box-shadow: 0 7px 15px -3px rgba(83, 185, 88, 0.5);
  box-shadow: 0 7px 15px -3px rgba(83, 185, 88, 0.5);
}
.mod-btn-black {
  background: #344451;
  -webkit-box-shadow: 0 10px 15px -3px rgba(52, 68, 81, 0.5);
  -moz-box-shadow: 0 10px 15px -3px rgba(52, 68, 81, 0.5);
  box-shadow: 0 10px 15px -3px rgba(52, 68, 81, 0.5);
}
.mod-btn-black:hover {
  -webkit-box-shadow: 0 10px 15px -3px rgba(52, 68, 81, 0.5);
  -moz-box-shadow: 0 10px 15px -3px rgba(52, 68, 81, 0.5);
  box-shadow: 0 10px 15px -3px rgba(52, 68, 81, 0.5);
}
.mod-btn-red {
  background: #fc4861;
  -webkit-box-shadow: 0 10px 15px -3px rgba(252, 72, 97, 0.5);
  -moz-box-shadow: 0 10px 15px -3px rgba(252, 72, 97, 0.5);
  box-shadow: 0 10px 15px -3px rgba(252, 72, 97, 0.5);
}
.mod-btn-red:hover {
  -webkit-box-shadow: 0 10px 15px -3px rgba(252, 72, 97, 0.5);
  -moz-box-shadow: 0 10px 15px -3px rgba(252, 72, 97, 0.5);
  box-shadow: 0 10px 15px -3px rgba(252, 72, 97, 0.5);
}
</style>

<script>
import Xzmm from './xz.vue'

export default {
  components: { Xzmm },
  name: 'pcGwInfo',
  data() {
    return {
      mobileShow: 'false',
      screenWidth: document.body.clientWidth // 这里是给到了一个默认值 （这个很重要）
    }
  },
  mounted() {
    //动画
    this.$scroll.scrollReveal(window)
    //判断当前版本
    this.browserRedirect()
    //是否加载移动端js
    if (this.mobileShow) {
      this.change_fontSize(document, window)
      var mobileSwiper = new Swiper('.section-5 .swiper-container', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      })
    }
    //监听事件
    const that = this
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        that.screenWidth = window.screenWidth
      })()
    }
  },
  watch: {
    screenWidth(val) {
      if (!this.timer) {
        this.screenWidth = val
        this.timer = true
        let that = this
        setTimeout(function() {
          // that.screenWidth = that.$store.state.canvasWidth
          console.log(that.screenWidth)
          that.init()
          that.timer = false
        }, 400)
      }
    }
  },
  methods: {
    change_fontSize: function(a, b) {
      var c = document.documentElement,
        d = 'orientationchange' in window ? 'orientationchange' : 'resize',
        e = ('orientationchange' in window,
        function() {
          var a = c.clientWidth
          a &&
            (a > 750 ? (a = 750) : a < 320 && (a = 320),
            (c.style.fontSize = 100 * (a / 750) + 'px'))
        })
      window.addEventListener || window.addEventListener(d, e, !1),
        (window.onorientationchange = function() {}),
        e()
    },
    browserRedirect: function() {
      var sUserAgent = navigator.userAgent.toLowerCase()
      var bIsIpad = sUserAgent.match(/ipad/i) == 'ipad'
      var bIsIphone = sUserAgent.match(/iphone os/i) == 'iphone os'
      var bIsMidp = sUserAgent.match(/midp/i) == 'midp'
      var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == 'rv:1.2.3.4'
      var bIsUc = sUserAgent.match(/ucweb/i) == 'web'
      var bIsCE = sUserAgent.match(/windows ce/i) == 'windows ce'
      var bIsWM = sUserAgent.match(/windows mobile/i) == 'windows mobile'
      var bIsAndroid = sUserAgent.match(/android/i) == 'android'

      if (
        bIsIpad ||
        bIsIphone ||
        bIsMidp ||
        bIsUc7 ||
        bIsUc ||
        bIsCE ||
        bIsWM ||
        bIsAndroid
      ) {
        this.mobileShow = true
      } else {
        this.mobileShow = false
      }
    }
  }
}
</script>

<!-- pcGwInfo pc index.css -->
<style lang="less" scoped>
.pc {
  .bg-common {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
  div {
    box-sizing: border-box;
  }
  #introduce_banner {
    height: 424px;
    background: url('../../../style/gw_introduce/gw_01.jpg') no-repeat center
      center;
    background-size: cover;
  }
  .section-image div {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .section-1 {
    .section-image {
      width: 100%;
      height: 455px;
      position: relative;
    }
    .section-image > div {
      position: absolute;
    }
    .section-left {
      width: 760px;
      height: 455px;
      left: 3px;
      top: 0;
      background-image: url('../../../style/gw_introduce/gw_03.png');
      z-index: 50;
    }
    .section-right {
      width: 524px;
      height: 402px;
      right: 10px;
      top: 20px;
      background-image: url('../../../style/gw_introduce/gw_05.png');
      z-index: 10;
    }
  }
  .section-2 {
    .section-image {
      height: 497px;
      background-image: url('../../../style/gw_introduce/gw_07.png');
    }
  }
  .section-3 {
    .section-image {
      height: 465px;
      background-image: url('../../../style/gw_introduce/gw_09.png');
    }
  }
  .section-4 {
    // height: 742px;
    background-image: url('../../../style/gw_introduce/gw_11.png');
    // .section-image {
    //   .section-rotate {
    //     li {
    //       width: 50%;
    //       height: 342px;
    //       top: 72px;
    //       z-index: 100;
    //       img {
    //         width: 100%;
    //         height: 100%;
    //       }
    //     }
    //     .section-icon-1 {
    //       left: 0;
    //     }
    //     .section-icon-3 {
    //       right: 0;
    //     }
    //     li.active {
    //       width: 780px;
    //       height: 445px;
    //       box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
    //       z-index: 200;
    //       top: 20px;
    //       left: 214px;
    //     }
    //   }
    //   .section-icon-left,
    //   .section-icon-right {
    //     width: 36px;
    //     height: 36px;
    //     top: 214px;
    //     cursor: pointer;
    //   }
    //   .section-icon-left {
    //     left: -60px;
    //     background-image: url('../../../style/gw_introduce/gw_19.png');
    //   }
    //   .section-icon-right {
    //     right: -60px;
    //     background-image: url('../../../style/gw_introduce/gw_20.png');
    //   }
    // }
  }
  .section-5 {
    .section-container {
      width: 920px;
      height: 532px;
      margin: 0 auto;
      .section-ul {
        width: 920px;
        height: 532px;
        margin: 0 auto;
      }
      .section-page-left,
      .section-page-right {
        top: 232px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: #c3c4c6;
      }
      .section-page-left {
        left: 0;
        background-image: url('../../../style/gw_introduce/gw_19.png');
        background-size: 48px 48px;
      }
      .section-page-right {
        right: 0;
        background-image: url('../../../style/gw_introduce/gw_20.png');
        background-size: 48px 48px;
      }
    }
  }
  .section-6 {
    .section-image {
      height: 600px;
      background-image: url('../../../style/gw_introduce/gw_21.png');
      background-size: 1123px 600px;
      .section-icon-top {
        top: 5px;
        left: 120px;
        width: 130px;
        height: 48px;
        background-image: url('../../../style/gw_introduce/gw_23.png');
      }
      .section-icon-left {
        width: 160px;
        height: 50px;
        top: 173px;
        left: 0;
        background-image: url('../../../style/gw_introduce/gw_24.png');
      }
      .section-icon-right {
        width: 180px;
        height: 50px;
        top: 173px;
        right: 0;
        background-image: url('../../../style/gw_introduce/gw_25.png');
      }
      .section-icon-center {
        width: 510px;
        height: 392px;
        top: 137px;
        left: 342px;
        background-image: url('../../../style/gw_introduce/gw_26.png');
      }
    }
  }
  .section-7 {
    .section-image {
      width: 400px;
      margin: 0 auto;
    }
  }
}
</style>


<!-- mobile index.css -->
<style lang="less" scoped>
.mobile {
  min-width: 320px;
  max-width: 750px;
  font-family: '微软雅黑';
  font-size: 14px;
  margin: 0 auto;
}
.mobile {
  // 通用css
  .hide {
    display: none;
  }
  h1,
  h2,
  h3,
  h4 {
    font-weight: normal;
    margin: 0;
    padding: 0;
  }
  p {
    margin: 0;
  }
  a {
    text-decoration: none;
  }
  ul,
  li,
  ol,
  dl,
  dt,
  dd {
    list-style: none;
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
    font-size: 0.32rem;
  }
  .font-24 {
    font-size: 0.24rem;
  }
  .font-16 {
    font-size: 0.16rem;
  }
  .bold {
    font-weight: bold;
  }
  .text-center {
    text-align: center;
  }
  .lh-24 {
    line-height: 0.24rem;
  }
  .lh-36 {
    line-height: 0.36rem;
  }
  .lh-64 {
    line-height: 0.64rem;
  }
  .fl {
    float: left;
  }
  .fr {
    float: right;
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
  .bg-common {
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
  }
  .mb-20 {
    margin-bottom: 0.2rem;
  }
  .pd-20 {
    padding: 0 0.2rem;
  }
  .clearfix {
    clear: both;
    overflow: hidden;
  }
  .pr {
    position: relative;
  }
  .po {
    position: absolute;
  }
  .mod-btn {
    font-size: 16px;
    color: #fff;
    text-align: center;
    display: inline-block;
    vertical-align: middle;
    background: #009fe8;
    height: 50px;
    line-height: 50px;
    border: 1px solid #fff;
    width: 120px;
    border-radius: 25px;
    -webkit-user-select: none;
  }
  .mod-btn {
    -webkit-box-shadow: 0 10px 15px -3px rgba(0, 159, 232, 0.5);
    -moz-box-shadow: 0 10px 15px -3px rgba(0, 159, 232, 0.5);
    box-shadow: 0 10px 15px -3px rgba(0, 159, 232, 0.5);
  }
  .mod-btn-narrow {
    width: 130px;
    margin-right: 15px;
  }
  .mod-btn:hover {
    color: #fff;
    -webkit-transform: translate(0, 3px);
    -moz-transform: translate(0, 3px);
    transform: translate(0, 3px);
    -webkit-box-shadow: 0 7px 15px -3px rgba(0, 159, 232, 0.5);
    -moz-box-shadow: 0 7px 15px -3px rgba(0, 159, 232, 0.5);
    box-shadow: 0 7px 15px -3px rgba(0, 159, 232, 0.5);
  }
  .mod-btn-green {
    background: #53b958;
    -webkit-box-shadow: 0 10px 15px -3px rgba(83, 185, 88, 0.5);
    -moz-box-shadow: 0 10px 15px -3px rgba(83, 185, 88, 0.5);
    box-shadow: 0 10px 15px -3px rgba(83, 185, 88, 0.5);
  }
  .mod-btn-green:hover {
    -webkit-box-shadow: 0 7px 15px -3px rgba(83, 185, 88, 0.5);
    -moz-box-shadow: 0 7px 15px -3px rgba(83, 185, 88, 0.5);
    box-shadow: 0 7px 15px -3px rgba(83, 185, 88, 0.5);
  }
  .mod-btn-black {
    background: #344451;
    -webkit-box-shadow: 0 10px 15px -3px rgba(52, 68, 81, 0.5);
    -moz-box-shadow: 0 10px 15px -3px rgba(52, 68, 81, 0.5);
    box-shadow: 0 10px 15px -3px rgba(52, 68, 81, 0.5);
  }
  .mod-btn-black:hover {
    -webkit-box-shadow: 0 10px 15px -3px rgba(52, 68, 81, 0.5);
    -moz-box-shadow: 0 10px 15px -3px rgba(52, 68, 81, 0.5);
    box-shadow: 0 10px 15px -3px rgba(52, 68, 81, 0.5);
  }
  .mod-btn-red {
    background: #fc4861;
    -webkit-box-shadow: 0 10px 15px -3px rgba(252, 72, 97, 0.5);
    -moz-box-shadow: 0 10px 15px -3px rgba(252, 72, 97, 0.5);
    box-shadow: 0 10px 15px -3px rgba(252, 72, 97, 0.5);
  }
  .mod-btn-red:hover {
    -webkit-box-shadow: 0 10px 15px -3px rgba(252, 72, 97, 0.5);
    -moz-box-shadow: 0 10px 15px -3px rgba(252, 72, 97, 0.5);
    box-shadow: 0 10px 15px -3px rgba(252, 72, 97, 0.5);
  }
  .mod-btn {
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.32rem;
  }
  // introduce_banner --背景图
  #introduce_banner {
    height: 3.6rem;
    background-image: url('../../../style/gw_introduce/mgw_01.png');
    background-size: cover;
  }
  .h3-title {
    margin: 0.32rem auto;
  }
  .section-1 {
    padding-bottom: 0.5rem;
    .section-image {
      height: 4.22rem;
      background-image: url('../../../style/gw_introduce/mgw_03.png');
    }
    .section-image-bottom {
      height: 4rem;
      background-image: url('../../../style/gw_introduce/mgw_05.png');
    }
  }
  .section-2 {
    padding-bottom: 0.2rem;
    .section-image {
      height: 3.84rem;
      background-image: url('../../../style/gw_introduce/mgw_07.png');
    }
  }
  .section-3 {
    padding-bottom: 0.2rem;
    .section-image {
      height: 2.92rem;
      background-image: url('../../../style/gw_introduce/mgw_09.png');
    }
  }
  .section-4 {
    padding-bottom: 0.4rem;
    background-image: url('../../../style/gw_introduce/mgw_19.png');
    background-size: cover;
    .section-image {
      height: 3.52rem;
      // background-image: url('../../../style/img/introduce_16.png');
      .section-rotate {
        li {
          width: 5rem;
          height: 2.5rem;
          top: 0.56rem;
          z-index: 100;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .section-icon-1 {
          left: -4.5rem;
        }
        .section-icon-3 {
          right: -4.4rem;
        }
        li.active {
          width: 5.5rem;
          height: 3.2rem;
          box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
          z-index: 200;
          top: 0.2rem;
          left: 0.96rem;
        }
      }
      .section-icon-left,
      .section-icon-right {
        width: 36px;
        height: 36px;
        top: 214px;
        cursor: pointer;
      }
      .section-icon-left {
        left: -60px;
        background-image: url('../../../style/gw_introduce/gw_19.png');
      }
      .section-icon-right {
        right: -60px;
        background-image: url('../../../style/gw_introduce/gw_20.png');
      }
    }
  }
  .section-5 {
    padding-bottom: 0.2rem;
    .section-image {
      height: 5.16rem;
      .section-pagination {
        width: 3.6rem;
        height: 0.6rem;
        margin: 0 auto;
        padding-bottom: 0.3rem;
        div {
          width: 1.6rem;
          height: 0.6rem;
        }
        .section-pa-left {
          background-image: url('../../../style/gw_introduce/mgw_10.png');
          top: 0;
          left: 25%;
          opacity: 1;
          margin-top: 0;
        }
        .section-pa-right {
          background-image: url('../../../style/gw_introduce/mgw_11.png');
          top: 0;
          right: 25%;
          opacity: 1;
          margin-top: 0;
        }
      }
      .section-swiper {
        height: 4.16rem;
        width: 100%;
        background-image: url('../../../style/gw_introduce/mgw_13.png');
        background-size: contain;
      }
    }
  }
  .section-6 {
    padding-bottom: 0.4rem;
    .section-image {
      height: 3.9rem;
      background-image: url('../../../style/gw_introduce/mgw_15.png');
    }
  }
  .section-7 {
    width: auto;
    display: flex;
    padding-left: 0.4rem;
    padding-right: 0.4rem;
    .mod-btn {
      flex: 1;
    }
    .mod-btn:first-child {
      margin-right: 0.4rem;
    }
  }
}
</style>

