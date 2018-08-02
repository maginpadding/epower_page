<template>
  <div>
    <div class="introduce_pc">
      <div id="introduce_banner"></div>
      <div class="section-1 bg-fff pt-60 pb-60">
        <div class="center-1200">
          <div class="h3-title text-center mb-60" data-sr="enter top,over .7s,move 100px ,wait .1s">
            <h3 class="color-434a54 font-32 lh-52">客户自主商标查询</h3>
            <p class="color-82939e font-16 lh-36">系统提供商标查询服务，实时更新商标数据库支撑精准的查询结果</p>
          </div>
          <div class="section-image">
            <div class="section-left" data-sr="enter left,over .7s,move 100px"></div>
            <div class="section-right" data-sr="enter right,over .7s,move 100px"></div>
            <div class="section-icon section-icon-left" data-sr="enter left,over .7s,move 100px ,wait .2s">
              <div class="section-left-top bold color-fff font-16">多种查询方式<br>简单快捷</div>
              <div class="section-left-bottom text-center">
                <div class="font-16 lh-32 color-fff href-btn" v-for="item in searchList" :key="item.id" v-bind:data-url="item.url" @click="confirmHref(item.name,item.url)">{{item.name}}</div>
              </div>
            </div>
            <div class="section-icon section-icon-center" data-sr="enter bottom,over .7s,move 100px ,wait .3s"></div>
            <div class="section-icon section-icon-right" data-sr="enter right,over .7s,move 100px ,wait .2s"></div>
          </div>
        </div>
      </div>
      <div class="section-2 pt-60 pb-60 bg-f5">
        <div class="center-1200">
          <div class="h3-title text-center mb-40" data-sr="enter top,over .7s,move 100px ,wait .1s">
            <h3 class="color-434a54 font-32 lh-52">成熟的商标注册流程，提供多种注册方式</h3>
            <p class="color-82939e font-16 lh-36">提供普通注册、保姆注册、担保注册可满足不同客户需求，拥有成熟的线上商标注册流程，商标申请人在线管理简单方便</p>
          </div>
          <div class="section-image pr">
            <div class="section-left-wrap fl pr bg-transparent" data-sr="enter left,over .7s,move 100px">
              <div class="section-left po bg-transparent"></div>
            </div>
            <div class="section-right fl pr" data-sr="enter right,over .7s,move 100px">
              <div class="section-right-top po"></div>
              <div class="section-right-bottom po"></div>
              <div class="section-icon section-icon-top po"></div>
              <div class="section-icon section-icon-bottom po"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="section-3 bg-fff">
        <div class="center-1200">
          <div class="section-image pr">
            <div class="section-title po" data-sr="enter top,over .7s,move 100px ,wait .1s">
              <p class="color-434a54 font-32 lh-36">商标状态自动获取</p>
              <p class="color-434a54 font-32 lh-36">在线索取电子发文</p>
              <span class="color-82939e font-16 lh-32">系统可自动获取商标局最新的商标状态并同步更新，用户可在个人中心随时查看商标最新状态，随时下载电子发文</span>
            </div>
            <div class="section-left po" data-sr="enter bottom,over .7s,move 100px ,wait .1s"></div>
            <div class="section-left-icon po" data-sr="enter top,over .7s,move 100px ,wait .2s"></div>
            <div class="section-right-icon po" data-sr="enter top,over .7s,move 100px ,wait .2s"></div>
          </div>
        </div>
      </div>

      <div class="section-4 bg-fff">
        <div class="center-1200">
          <div class="h3-title text-center mb-60" data-sr="enter top,over .7s,move 100px ,wait .1s">
            <h3 class="color-434a54 font-32 lh-52">商标在线交易</h3>
            <p class="color-82939e font-16 lh-36">海量商标数据库，随心选购；用户可一键发布商标，无需缴纳保证金</p>
          </div>
          <div class="section-image pr">
            <div class="section-left po" data-sr="enter left,over .7s,move 100px ,wait .1s"></div>
            <div class="section-right po" data-sr="enter right,over .7s,move 100px ,wait .1s"></div>
          </div>
        </div>
      </div>
      <div class="section-5 bg-fff pb-60">
        <div class="center-1200">
          <div class="section-image pr">
            <div class="h3-title text-center po" data-sr="enter top,over .7s,move 100px ,wait .1s">
              <h3 class="color-434a54 font-32 lh-52">商标服务</h3>
              <p class="color-82939e font-16 lh-36">十五种商标服务，涵盖基本商标业务所需服务</p>
            </div>
            <div class="section-left  po" data-sr="enter left,over .7s,move 100px ,wait .1s"></div>
            <div class="section-right po" data-sr="enter right,over .7s,move 100px ,wait .1s"></div>
            <div class="section-nav-wrap po">
              <div class="section-right-nav fl text-center font-14 bg-common href-btn" data-sr="enter right,over .7s,move 100px ,wait .2s" v-for="item in serviceList" :key="item.id" v-bind:data-url="item.url" @click="confirmHref(item.name,item.url)">{{item.name}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="section-6 bg-fff pb-60">
        <div class="center-1200">
          <div class="section-image pr">
            <div class="h3-title text-center po" data-sr="enter top,over .7s,move 100px ,wait .1s">
              <h3 class="color-434a54 font-32 lh-52">专利与版权服务</h3>
              <p class="color-82939e font-16 lh-36">多种专利与版权服务，在线下单，减少奔波</p>
            </div>
            <div class="section-left  po" data-sr="enter left,over .7s,move 100px ,wait .1s"></div>
            <div class="section-right po" data-sr="enter right,over .7s,move 100px ,wait .1s"></div>
          </div>
        </div>
      </div>
      <div class="section-7 bg-f5 pt-60 pb-60">
        <div class="center-1200">
          <div class="section-btn-wrap">
            <div class="section-btn fl" data-sr="enter top,over .7s,move 100px ,wait .1s">
              <h3 class="h3-title font-24 color-fff bold text-center">了解商业授权</h3>
              <div class="section-desc color-333 font-16 text-center">
                可使用自主商标接口，商标知产业务订单均可自主审核提交。
              </div>
              <a href="http://www.epower.cn/shouquan" target="_blank" class="mod-btn mod-btn-green">了解商业授权</a>
            </div>
            <div class="section-btn fr" data-sr="enter top,over .7s,move 100px ,wait .1s">
              <h3 class="h3-title font-24 color-fff bold text-center">查看系统演示</h3>
              <div class="section-desc color-333 font-16 text-center">
                没有商标资质也可做商标业务！ePower将提供全阶段的商标服务，无需操心售后。
              </div>
              <a href="javascript:;" data-url="http://demo.epower.cn/trademark" target="_blank" class="mod-btn mod-btn-red href-btn">立即查看</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      searchList: [
        {
          name: '模糊查询',
          url: 'http://demo.epower.cn/trademark/search'
        },
        {
          name: '近似查询',
          url: 'http://demo.epower.cn/trademark/jinsi'
        },
        {
          name: '图形查询',
          url: 'http://demo.epower.cn/trademark/tm_img_search'
        },
        {
          name: '商标分类表',
          url: 'http://demo.epower.cn/trademark/cls'
        }
      ],
      serviceList: [
        {
          name: '商标续展',
          url: 'http://demo.epower.cn/trademark/services?remindinfo=xuzhan'
        },
        {
          name: '商标备案',
          url: 'http://demo.epower.cn/trademark/services?remindinfo=beian'
        },
        {
          name: '商标转让',
          url: 'http://demo.epower.cn/trademark/services?remindinfo=zhuanrang'
        },
        {
          name: '商标变更',
          url: 'http://demo.epower.cn/trademark/services?remindinfo=biangeng'
        },
        {
          name: '商标注销',
          url: 'http://demo.epower.cn/trademark/services?remindinfo=zhuxiao'
        },
        {
          name: '商标证补发',
          url: 'http://demo.epower.cn/trademark/services?remindinfo=bufa'
        },
        {
          name: '商标宽展',
          url: 'http://demo.epower.cn/trademark/services?remindinfo=kuanzhan'
        },
        {
          name: '商标更正',
          url: 'http://demo.epower.cn/trademark/services?remindinfo=gengzheng'
        },
        {
          name: '商标异议',
          url: 'http://demo.epower.cn/trademark/services?remindinfo=yiyi'
        },
        {
          name: '商标撤三申请',
          url: 'http://demo.epower.cn/trademark/services?remindinfo=chexiao'
        },
        {
          name: '商标驳回复审',
          url: 'http://demo.epower.cn/trademark/services?remindinfo=bohui'
        },
        {
          name: '···',
          url: 'http://demo.epower.cn/trademark/services'
        }
      ]
    }
  },
  mounted() {
    this.$scroll.scrollReveal(window)
  },
  methods: {
    confirmHref: function(name, url) {
      let layer = this.$layer
      layer.confirm('是否前往示例网站？', { title: '系统信息' }, function() {
        setTimeout(function() {
          window.open(url)
        })
        layer.closeAll()
      })
    }
  }
}
</script>

<!-- trademark_info pc common.css -->
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

<!-- trademark_info pc css -->
<style lang="less" scoped>
#introduce_banner {
  height: 424px;
  background: url('../style/images/introduction_01.png') no-repeat center center;
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
    .section-icon-left {
      padding: 12px;
      box-sizing: border-box;
    }
    .section-left-top {
      line-height: 24px;
      text-align: center;
      border-bottom: 1px solid #fff;
      padding-bottom: 12px;
      margin-bottom: 12px;
    }
  }
  .section-image > div {
    position: absolute;
  }
  .section-left {
    width: 760px;
    height: 455px;
    left: 0;
    top: 0;
    background-image: url('../style/images/introduction_07.png');
    z-index: 50;
  }
  .section-right {
    width: 600px;
    height: 360px;
    right: 0;
    top: 48px;
    background-image: url('../style/images/introduction_11.png');
    z-index: 10;
  }
  .section-icon-left {
    width: 180px;
    height: 230px;
    top: 118px;
    left: 8px;
    z-index: 100;
    background-image: url('../style/images/introduction_05.png');
  }
  .section-icon-right {
    width: 280px;
    height: 222px;
    top: 130px;
    right: 4px;
    z-index: 100;
    background-image: url('../style/images/introduction_13.png');
  }
}
.section-2 {
  .section-image {
    height: 756px; // perspective: 1200px;
    div {
      position: absolute;
    }
    .section-left-wrap {
      width: 540px;
      height: 756px;
      position: relative;
      /*指定子元素定位在三维空间内*/
      // transform-style: preserve-3d;
      /*让所有item的父级元素（即items）旋转，item就是围绕着旋转了*/
      // animation: autoMove 1s 1 linear;
      // animation-fill-mode: forwards;
      .section-left {
        width: 540px;
        height: 756px;
        left: 0;
        top: 0;
        background-image: url('../style/images/introduction_17.png'); // background-image: url("../style/images/introduction_15.png");
        // background-size: contain;
        // -moz-box-shadow: 1px 1px 10px #999999;
        // -webkit-box-shadow: 1px 1px 10px #999999;
        // box-shadow: 1px 1px 10px #999999;
      }
    }
    .section-right {
      position: relative;
      width: 651px;
      height: 760px;
      .section-right-top {
        width: 556px;
        height: 272px;
        top: 70px;
        right: 4px;
        z-index: 10;
        background-image: url('../style/images/introduction_20.png');
      }
      .section-right-bottom {
        width: 556px;
        height: 272px;
        bottom: 97px;
        right: 4px;
        z-index: 10;
        background-image: url('../style/images/introduction_22.png');
      }
      .section-icon {
        width: 150px;
        height: 150px;
        z-index: 100;
        left: 30px;
      }
      .section-icon-top {
        top: 97px;
        background-image: url('../style/images/introduction_19.png');
      }
      .section-icon-bottom {
        bottom: 189px;
        background-image: url('../style/images/introduction_21.png');
      }
    }
  }
  .section-bottom {
    height: 260px;
  }
}
/*section3*/
.section-3 {
  margin-top: -240px;
  height: 960px;
  box-sizing: border-box;
  position: static;
  .section-image {
    height: 960px;
    .section-title {
      top: 240px;
      left: 88px;
      width: 450px;
      height: 156px;
      span {
        display: inline-block;
        margin-top: 10px;
      }
    }
    .section-left {
      width: 1180px;
      height: 550px;
      left: 0;
      top: 390px;
      z-index: 10;
      background-image: url('../style/images/introduction_24.png');
      background-size: cover;
    }
    .section-left-icon,
    .section-right-icon {
      width: 150px;
      height: 150px;
    }
    .section-left-icon {
      top: 480px;
      left: 210px;
      z-index: 100;
      background-image: url('../style/images/introduction_23.png');
    }
    .section-right-icon {
      top: 350px;
      right: 340px;
      z-index: 100;
      background-image: url('../style/images/introduction_25.png');
    }
  }
}
// section4
.section-4 {
  height: 812px;
  background: url('../style/images/introduction_29.png') no-repeat center bottom;
  background-size: 100% 442px;
  .section-image {
    height: 610px;
    .section-left {
      width: 600px;
      height: 590px;
      z-index: 10;
      top: 0;
      left: 5px;
      background-image: url('../style/images/introduction_27.png');
    }
    .section-right {
      width: 850px;
      height: 500px;
      z-index: 100;
      top: 84px;
      right: 5px;
      background-image: url('../style/images/introduction_28.png');
    }
  }
}
//section5
.section-5 {
  .section-image {
    width: 1200px;
    height: 680px;
  }
  .h3-title {
    width: 350px;
    height: 100px;
    top: 52px;
    right: 92px;
  }
  .section-left {
    width: 1140px;
    height: 616px;
    top: 60px;
    left: 0;
    z-index: 10;
    background-image: url('../style/images/introduction_32.png');
  }
  .section-right {
    width: 550px;
    height: 350px;
    top: 200px;
    right: 44px;
    z-index: 1;
    background-image: url('../style/images/introduction_31.png');
  }
  .section-nav-wrap {
    width: 440px;
    height: 306px;
    z-index: 100;
    right: 68px;
    top: 222px;
  }
  .section-right-nav {
    width: 130px;
    height: 46px;
    line-height: 46px;
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 15px;
    color: #009fe8;
    background-image: url('../style/images/introduction_33.png');
  }
}
// section-6
.section-6 {
  .section-image {
    width: 1200px;
    height: 420px;
  }
  .h3-title {
    width: 572px;
    height: 100px;
    top: 0;
    left: 0;
    z-index: 100;
  }
  .section-left {
    width: 600px;
    height: 278px;
    top: 129px;
    left: 0;
    background-image: url('../style/images/introduction_35.png');
  }
  .section-right {
    width: 692px;
    height: 405px;
    right: 0;
    top: 15px;
    background-image: url('../style/images/introduction_34.png');
  }
}
//section-7
.section-7 {
  .section-btn-wrap {
    width: 960px;
    height: 312px;
    margin: 0 auto;
    .section-btn {
      width: 450px;
      height: 310px;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: contain;
      .h3-title {
        height: 80px;
        line-height: 80px;
      }
      .section-desc {
        margin: 30px auto;
        width: 340px;
        line-height: 30px;
      }
      .mod-btn {
        margin: 0 auto;
        display: block;
        text-decoration: none;
      }
    }
    .section-btn:first-child {
      background-image: url('../style/images/introduction_36.png');
    }
    .section-btn:last-child {
      background-image: url('../style/images/introduction_37.png');
    }
  }
}
.href-btn {
  cursor: pointer;
  display: block;
  text-decoration: none;
  border: 0;
}
</style>
