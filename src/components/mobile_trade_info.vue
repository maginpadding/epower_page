<template>
    <div class="mobile">
        <div id="introduce_banner" class="bg-common"></div>
        <div class="section-1 clearfix bg-fff">
            <div class="h3-title text-center">
                <h3 class="color-333 font-32 lh-64">客户自主商标查询</h3>
                <p class="font-24 color-666 lh-36">系统提供商标查询服务，实时更新商标数据库支撑精准的查询结果</p>
            </div>
            <div class="section-image bg-common"></div>
        </div>
        <div class="section-2 clearfix bg-f5 pd-20">
            <div class="h3-title text-center">
                <h3 class="color-333 font-32 lh-64">成熟的商标注册流程，提供多种注册方式</h3>
                <p class="font-24 color-666 lh-36">提供普通注册、保姆注册、担保注册可满足不同客户需求，拥有成熟的线上商标注册流程，商标申请人在线管理简单方便。</p>
            </div>
            <div class="section-image bg-common"></div>
        </div>
<div class="section-3 clearfix pd-20 bg-fff">
            <div class="h3-title text-center">
                <h3 class="color-333 font-32 lh-64">商标状态自动获取，在线索取电子发文</h3>
                <p class="font-24 color-666 lh-36">系统可自动获取商标局最新的商标状态并同步更新到，用户可在个人中心随时查看商标最新状态，随时下载电子发文。</p>
            </div>
            <div class="section-image bg-common"></div>
        </div>
        <div class="section-4 clearfix bg-common">
            <div class="h3-title text-center pd-20">
                <h3 class="font-32 lh-64 color-fff">商标状态自动获取，在线索取电子发文</h3>
                <p class="font-24 lh-36 color-fff">系统可自动获取商标局最新的商标状态并同步更新到，用户可在个人中心随时查看商标最新状态，随时下载电子发文。</p>
            </div>
            <div class="section-image bg-common"></div>
        </div>
        <div class="section-5 clearfix pd-20 bg-fff">
            <div class="h3-title text-center">
                <h3 class="color-333 font-32 lh-64">商标服务</h3>
                <p class="font-24 color-666 lh-36">十五种商标服务，涵盖基本商标业务所需服务。</p>
            </div>
            <div class="section-image bg-common"></div>
        </div>
        <div class="section-6 clearfix pd-20 bg-fff">
            <div class="h3-title text-center">
                <h3 class="color-333 font-32 lh-64">专利与版权服务</h3>
                <p class="font-24 color-666 lh-36">多种专利与版权服务，在线下单，减少奔波。</p>
            </div>
            <div class="section-image bg-common"></div>
        </div>
        <div class="section-7 bg-fff">
            <div class="section-btn-wrap">
                <a href="" class="section-btn fl bg-common text-center">
                    <div class="section-btn-top color-fff bold font-32">商标普通版</div>
                    <div class="section-btn-center color-333 font-24">没有商标资质也可做商标业务！ePower将提供全阶段的商标服务，无需操心售后。</div>
                    <div class="section-btn-bottom font-32 mod-btn-green">立即购买</div>
                </a>
                <a href="" class="section-btn fr bg-common text-center">
                    <div class="section-btn-top color-fff bold font-32">商标独立接口版</div>
                    <div class="section-btn-center color-333 font-24">可使用自主商标接口，商标知产业务订单均可自主审核提交。</div>
                    <div class="section-btn-bottom font-32 mod-btn-red">立即购买</div>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  mounted() {
    this.change_fontSize(document, window)
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
.mobile {
  min-width: 320px;
  max-width: 750px;
  font-family: '微软雅黑';
  font-size: 14px;
  margin: 0 auto;
}
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
.pd-20 {
  padding: 0 0.2rem;
}
.clearfix {
  clear: both;
  overflow: hidden;
}
// introduce_banner --背景图
#introduce_banner {
  height: 3.6rem;
  background-image: url('../style/img/introduce_02.png');
  background-size: cover;
}
.h3-title {
  margin: 0.32rem auto;
}
.section-1 {
  padding-bottom: 0.5rem;
  .section-image {
    height: 7rem;
    background-image: url('../style/img/introduce_05.png');
  }
}
.section-2 {
  padding-bottom: 0.2rem;
  .section-image {
    height: 4.64rem;
    background-image: url('../style/img/introduce_09.png');
  }
}
.section-3 {
  padding-bottom: 0.2rem;
  .section-image {
    height: 3.3rem;
    background-image: url('../style/img/introduce_12.png');
  }
}
.section-4 {
  padding-bottom: 0.4rem;
  background-image: url('../style/img/introduce_15.png');
  background-size: cover;
  .section-image {
    height: 3.52rem;
    background-image: url('../style/img/introduce_16.png');
  }
}
.section-5 {
  padding-bottom: 0.2rem;
  .section-image {
    height: 3.9rem;
    background-image: url('../style/img/introduce_18.png');
  }
}
.section-6 {
  padding-bottom: 1rem;
  .section-image {
    height: 4rem;
    background-image: url('../style/img/introduce_22.png');
  }
}
.section-7 {
  height: 4.38rem;
  .section-btn-wrap {
    a:first-child {
      background-image: url('../style/img/introduce_26.png');
    }
    a:last-child {
      background-image: url('../style/img/introduce_28.png');
    }
    a {
      width: 50%;
      height: 4.38rem;
      .section-btn-top {
        height: 0.94rem;
        line-height: 0.94rem;
      }
      .section-btn-center {
        padding: 0.24rem;
        line-height: 0.48rem;
        height: 1.6rem;
      }
    }
  }
}
.mod-btn-green {
  background: #53b958;
  box-shadow: 1px 1px 6px #53b958 !important;
}
.mod-btn-red {
  background: #fc4861;
  box-shadow: 1px 1px 6px #fc4861;
}
.section-btn .section-btn-bottom {
  width: 2.4rem;
  height: 0.78rem;
  text-align: center;
  line-height: 0.78rem;
  color: #ffffff;
  font-size: 0.28rem;
  margin-right: 0.2rem;
  border-radius: 46px;
  margin-bottom: 0.1rem;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
}
</style>
