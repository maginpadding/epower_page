<template>
    <div class="mobile">
        <div id="cloud-banner">
            <div class="center">
                <h1 class="title">云计算</h1>
                <h3>掌控核心技术，真正的云计算</h3>
                <div class="icon"></div>
            </div>
        </div>
        <div class="section1">
            <div class="section-title clearfix bg-f5 pd-20">
                <div class="section-title-line">
                    <span class="section-title-span pr color-666 bg-f5">云虚拟主机服务</span>
                </div>
            </div>
            <div class="section-tab clearfix bg-f5">
                <div class="dalu fl font-32 color-666 active">大陆云虚拟主机</div>
                <div class="xianggang fr font-32 color-666">香港云虚拟主机</div>
            </div>
            <div class="tab-content pd-20 bg-fff clearfix">
                <ul class="child-tab">
                    <li class="text-center font-24 active">独享惠普型</li>
                    <li class="text-center font-24">独享专业版</li>
                    <li class="text-center font-24">独享尊贵版</li>
                    <li class="text-center font-24">共享经济版</li>
                </ul>
                <div class="child-content-wrap">
                    <ul class="child-content clearfix">
                        <div class="text-center">
                            <p class="color-333">1核</p>
                            <span class="color-666">CPU</span>
                        </div>
                        <div class="text-center">
                            <p class="color-333">2GB</p>
                            <span class="color-666">内存</span>
                        </div>
                        <div class="text-center">
                            <p class="color-333">20GB</p>
                            <span class="color-666">磁盘</span>
                        </div>
                        <div class="text-center">
                            <p class="color-333">1核</p>
                            <span class="color-666">CPU</span>
                        </div>
                        <div class="text-center">
                            <p class="color-333">2GB</p>
                            <span class="color-666">内存</span>
                        </div>
                        <div class="text-center">
                            <p class="color-333">20GB</p>
                            <span class="color-666">磁盘</span>
                        </div>
                    </ul>
                    <div class="price-wrap">
                        <div class="price">28元/月</div>
                        <div class="price-btn">立即购买</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section2">
            <cloudM></cloudM>
        </div>
        <div class="section3">
            <youShi></youShi>
        </div>
    </div>
</template>

<style lang="less" scoped>
// tab切换
.section-tab {
  padding: 0 0.66rem;
  padding-bottom: 0.5rem;
  line-height: 0.6rem;
  height: 0.6rem;
  div.active {
    color: #e23839;
    border-bottom: 2px solid #e23839;
  }
}

//子tab切换
.tab-content {
  .child-tab {
    padding-top: 0.4rem;
    padding-bottom: 0.47rem;
    display: flex;
    li {
      width: 1.6rem;
      height: 0.8rem;
      flex: 1;
      max-width: 160px;
      margin-right: 0.24rem;
      border: solid 1px #e6e6e6;
      line-height: 0.8rem;
      position: relative;
      color: #666;
    }
    li:last-child {
      margin-right: 0;
    }
    li.active {
      background: #e23839;
      border: solid 1px #e23839;
      color: #fff;
    }
    li.active:after {
      content: '';
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-top: 10px solid #e23839;
      position: absolute;
      width: 0;
      top: 0.8rem;
      left: 50%;
      margin-left: -10px;
    }
  }
  .child-content {
    padding-top: 0.4rem;
    border-top: 1px solid #e6e6e6;
    display: flex;
    flex-wrap: wrap;
    div {
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
      min-width: 33%;
      // height: 44px;
      border-right: solid 1px #e6e6e6;
      margin-bottom: 0.4rem;
    }
    div:nth-child(3n) {
      border-right: none;
    }
    p {
      font-size: 0.32rem;
      line-height: 0.36rem;
    }
    span {
      font-size: 0.24rem;
      line-height: 0.36rem;
    }
  }
  .price-wrap {
    padding-bottom: 0.4rem;
    .price {
      color: #f00909;
      font-size: 0.36rem;
      line-height: 0.52rem;
      text-align: center;
      margin-bottom: 0.15rem;
    }
    .price-btn {
      background: #e84047;
      width: 2.6rem;
      height: 0.7rem;
      color: #fff;
      text-align: center;
      line-height: 0.7rem;
      border-radius: 4px;
      margin: 0 auto;
      font-size: 0.28rem;
    }
  }
}

.section1 .section-title-line {
  margin: 0.75rem 0 0.48rem 0;
}
</style>




<style lang="less" scoped>
/*introduce_banner --背景图 */
#cloud-banner {
  width: 100%;
  height: 3rem;
  background: #2c343d;
  position: relative;
}

#cloud-banner .center {
  position: relative;
}

#cloud-banner .center .icon {
  position: absolute;
  background-image: url('http://demo.epower.cn/template/Home/Default/Mobile/Static/img/postOffice.png');
  background-size: 5rem 6rem;
  background-position: -1rem -3.02rem;
  top: 0.1rem;
  right: 0;
  width: 4rem;
  height: 2.82rem;
  animation: virtualBannerimg 1s ease-in-out;
}

#cloud-banner .center .title {
  padding: 0;
  text-align: left;
  font-size: 0.6rem;
  color: #fff;
  position: absolute;
  top: 0.75rem;
  left: 0.4rem;
  font-weight: 400;
  z-index: 100;
  animation: virtualBannerh1 1s ease-in-out;
}

#cloud-banner .center h3 {
  padding: 0;
  font-size: 0.36rem;
  color: #fff;
  position: absolute;
  top: 1.7rem;
  left: 0.4rem;
  font-weight: 400;
  z-index: 10;
  animation: virtualBannerh3 1s ease-in-out;
}
</style>

<style lang="less">
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
.mobile {
  .color-fff {
    color: #fff;
  }
  .color-666 {
    color: #666;
  }
  .color-333 {
    color: #333;
  }
  .color-red {
    color: #f00909;
  }
  .font-36 {
    font-size: 0.36rem;
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
  .lh-32 {
    line-height: 0.32rem;
  }
  .lh-36 {
    line-height: 0.36rem;
  }
  .lh-42 {
    line-height: 0.42rem;
  }

  .lh-64 {
    line-height: 0.64rem;
  }
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
// 每个模块的标题
.section-title-span {
  padding: 0 0.16rem;
  top: -0.25rem;
  font-size: 0.36rem;
  color: #666;
  position: relative;
}

.section-title-line {
  height: 1px;
  margin: 0.7rem 0 0.7rem 0;
  border-top: 1px solid #e6e6e6;
  text-align: center;
  /*IE*/
  text-align: -moz-center;
  /*Firefox*/
  text-align: -webkit-center;
  /*Chrome*/
}
.section2 .section-title-span {
    top: -0.25rem
}
</style>

<script>
import cloudM from '../components/cloud'
import youShi from '../components/youshi'
export default {
  components: { cloudM ,youShi},
  data() {
    return {}
  },
  mounted() {
    // this.onresize()
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
    },
    onresize: function() {
      //   this.change_fontSize(document, window)
      //   window.onresize = function() {
      //     this.change_fontSize(document, window)
      //   }
    }
  }
}
</script>