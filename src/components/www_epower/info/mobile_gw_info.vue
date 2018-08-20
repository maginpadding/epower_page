<template>
  <div class="mobile">
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
</template>
<script>
import Xzmm from './xz.vue'
export default {
  components: { Xzmm },
  data() {
    return {}
  },
  mounted() {
    this.change_fontSize(document, window)
    var mobileSwiper = new Swiper('.section-5 .swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
  },
  created() {},
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
    }
  }
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
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
