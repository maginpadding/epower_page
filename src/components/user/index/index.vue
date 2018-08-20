
<template>
    <div class="app">
        <!-- 企服引擎为您领航互联网 -->
        <section1></section1>
        <!-- 一站式企业知产服务 -->
        <div class="section2 bg-f5 clearfix pb-60" id="property_service">
            <div class="center-1200">
                <div class="home-title-line">
                    <span class="bg-f5">一站式企业知产服务</span>
                    <p>集合知识产权、工商财税等产品的企业服务平台</p>
                </div>
                <div class="section-content">
                    <div class="sc-tab lh-36 text-center font-16 color-666">
                        <div class="sc-li fl ">商标服务</div>
                        <div class="sc-li fl ">专利服务</div>
                        <div class="sc-li fl active">工商财税</div>
                        <div class="sc-li fl">海量商标库</div>
                    </div>
                    <!-- 商标服务 -->
                    <div class="tab-content trade-service hide">
                        <div class="tc-left bg-common text-center clearfix fl">
                            <div class="tl-top lh-36 bg-common">
                                <div class="tl-title color-fff font-20">商标注册</div>
                                <p class="tl-desc font-14 lh-24 color-fff mt-15">优质服务、快速高效专业人员审核资料，诚信可靠。</p>
                            </div>
                            <div class="tl-bot lh-36">
                                <div class="tl-title color-fff font-20">商标服务</div>
                                <p class="tl-desc font-14 lh-24 color-fff mt-15">高性价比，极速办理，资质顾问，优质服务。</p>
                            </div>
                        </div>
                        <div class="tc-right bg-f5f6fb fl">
                            <div class="tr-li fl clearfix text-center bg-fff" v-for="item in items" :data-name="item.name">
                                <div class="tr-icon mt-40"></div>
                                <div class="tr-name lh-48 font-16 font-bold">{{item.name}}</div>
                                <div class="tr-btnn clearfix">
                                    <div class="fl font-20 lh-36 price color-e2383a">￥580</div>
                                    <div class="fr search font-14 lh-36 bg-common">
                                        <a :href="item.href" class="color-666" target="_blank" :title="item.name">{{item.btn}}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 专利服务 -->
                    <div class="tab-content patent-service hide">
                        <div class="tc-left bg-common text-center clearfix fl">
                            <div class="tl-top lh-36 bg-common">
                                <div class="tl-title color-fff font-20">专利服务</div>
                                <p class="tl-desc font-14 lh-24 color-fff mt-15">为您的发明保驾护航</p>
                            </div>
                            <div class="tl-bot lh-36">
                                <div class="tl-title color-fff font-20">版权服务</div>
                                <p class="tl-desc font-14 lh-24 color-fff mt-15">登记发证，保护您的的创作</p>
                            </div>
                        </div>
                        <div class="tc-right bg-f5f6fb fl">
                            <div class="tr-li fl clearfix text-center bg-fff" v-for="item in patents" :data-name="item.name">
                                <div class="tr-icon mt-40"></div>
                                <div class="tr-name lh-48 font-16 font-bold">{{item.name}}</div>
                                <div class="tr-btnn clearfix">
                                    <div class="fl font-18 lh-36 price color-e2383a">￥580/件</div>
                                    <div class="fr search font-14 lh-36 bg-common">
                                        <a :href="item.href" target="_blank" class="color-666" :title="item.name">
                                            立即办理
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 工商财税 -->
                    <!-- <iactService></iactService> -->
                    <div class="tab-content iact-service" id="iact-service">
                        <div class="tc-left bg-common text-center clearfix fl">
                            <div class="tl-top">
                                <div class="tt-title bg-common"></div>
                                <div class="tt-desc font-16 color-fff lh-52">专业的团队，优质的服务</div>
                            </div>
                            <div class="tl-bot lh-36">
                                <div class="tl-title color-fff font-16">省心</div>
                                <div class="tl-title color-fff font-16">省力</div>
                                <div class="tl-title color-fff font-16">省时</div>
                            </div>
                        </div>
                        <div class="tc-right bg-f5f6fb fl">
                            <div class="tr-li fl clearfix text-center bg-fff pr" v-for="item in iacts" :data-name="item.name">
                                <div class="tr-li-top lh-36 font-18 color-666 text-left font-bold">
                                    {{item.name}}
                                </div>
                                <div class="tr-li-center text-left lh-24 color-999">
                                    主要面向中小型企业、私营、股份制等在京投资设立的办事机......
                                </div>
                                <div class="tr-li-bottom">
                                    <div class="tr-li-price  font-20 lh-36 price color-e2383a text-left">
                                        ￥5000
                                    </div>
                                    <a href="item.href" target="_blank">
                                        <div class="detail font-14 lh-32" :title="item.name">查看详情</div>
                                    </a>
                                </div>
                                <div class="tr-li-img po"><img src="http://user.epower.cn/Uploads/2017-08-25/59a0083de5135.png" alt="" srcset=""></div>
                                <!-- <div class="tr-top clearfix" v-show="false">
                                    <div class="tr-icon fl"></div>
                                    <div class="tr-name lh-48 font-18 color-333 fl font-bold">{{item.name}}</div>
                                </div>
                                <div class="tr-center color-666 font-14 lh-24 text-left" v-show="false">
                                    主要面向中小型企业、私营、股份制等在京投资设立的办事机......
                                </div>
                                <div class="tr-btnn clearfix" v-show="false">
                                    <div class="fl font-20 lh-36 price color-e2383a">￥580</div>
                                    <a href="item.href" target="_blank">
                                        <div class="fr detail font-14 lh-32" :title="item.name">查看详情</div>
                                    </a>
                                </div> -->
                            </div>
                        </div>
                    </div>
                    <!-- 海量商标库 -->
                    <div class="tab-content library-service hide">
                        <div class="tc-left bg-common text-center clearfix fl">
                            <div class="tl-top">
                                <div class="tt-title bg-common"></div>
                                <div class="tt-desc font-16 color-fff lh-36">周期短，无风险，<br>即刻拥有心仪商标。</div>
                            </div>
                            <div class="tl-bot lh-36">
                                <a href="/trademark/jiaoyilists" target="_blank">
                                    <div class="look-btn color-fff text-center">查看商标库</div>
                                </a>
                            </div>
                        </div>
                        <div class="tc-right bg-fff fl swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="tr-li fl clearfix text-center bg-fff">
                                        <div class="tr-top clearfix">
                                            <div class="tr-icon">图片</div>
                                        </div>
                                        <div class="tr-center lh-32 font-14 color-333 ">
                                            商标查询
                                        </div>
                                        <div class="tr-btnn clearfix">
                                            <div class="font-16 lh-24 price color-e2383a text-center">￥21,000</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 打造企业数字化 -->
        <div class="section3 bg-fff clearfix pb-60">
            <div class="center-1200">
                <div class="home-title-line">
                    <span class="bg-fff">打造企业数字化</span>
                </div>
                <div class="section-content">
                    <div class="section-li fl text-center color-fff bg-common">
                        <div class="li-tips">
                            <div class="sc-title font-24 font-bold lh-48 color-fff">域名注册</div>
                            <div class="sc-desc font-14 lh-24 color-fff">互联网时代的企业第一入口，所有互联网服务的基础之一！</div>
                            <div class="sc-price font-20 lh-32 color-fff">¥500起</div>
                            <a class="sc-btn font-14 color-fff lh-48 bg-e2383a color-fff">查看详情</a>
                        </div>
                    </div>
                    <div class="section-li fl text-center color-fff bg-common">
                        <div class="li-tips">
                            <div class="sc-title font-24 font-bold lh-48 color-fff">云计算</div>
                            <div class="sc-desc font-14 lh-24 color-fff">简单高效安全便捷的云计算服务，可帮您快速构建稳定安全的互联网环境。</div>
                            <div class="sc-price font-20 lh-32 color-fff">¥500起</div>
                            <a class="sc-btn font-14 color-fff lh-48 bg-e2383a">查看详情</a>
                        </div>
                    </div>
                    <div class="section-li fl text-center color-fff bg-common">
                        <div class="li-tips">
                            <div class="sc-title font-24 font-bold lh-48 color-fff">SSL证书</div>
                            <div class="sc-desc font-14 lh-24 color-fff">全网普及，大势所趋！全站开启HTTPS加密，让你的网站无懈可击！</div>
                            <div class="sc-price font-20 lh-32 color-fff">¥500起</div>
                            <a class="sc-btn font-14 color-fff lh-48 bg-e2383a">查看详情</a>
                        </div>

                    </div>
                    <div class="section-li fl text-center color-fff bg-common">
                        <div class="li-tips">
                            <div class="sc-title font-24 font-bold lh-48 color-fff">企业邮箱</div>
                            <div class="sc-desc font-14 lh-24 color-fff">随时随地全球畅邮，让工作更加简单！</div>
                            <div class="sc-price font-20 lh-32 color-fff">¥500起</div>
                            <a class="sc-btn font-14 color-fff lh-48 bg-e2383a">查看详情</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 资讯热点 -->
        <ziXun></ziXun>
        <!-- 我们合作的客户 -->
        <div class="section5 bg-transparent clearfix pr">
            <div class="center-1200 pr">
                <div class="home-title-line border-none">
                    <span>我们的优势</span>
                    <p>不管你处于什么行业,我们提供快速、安全、稳定的云产品,助你轻松跨入 "互联网+" 时代</p>
                </div>
                <div class="sc-content bg-fff">
                    <div class="sc-li text-center fl">
                        <div class="sc-icon bg-common"></div>
                        <div class="sc-title lh-32 font-20 color-333">价格透明</div>
                        <div class="sc-desc lh-32 font-14 color-666">统一报价，无隐形消费</div>
                    </div>
                    <div class="sc-li text-center fl">
                        <div class="sc-icon bg-common"></div>
                        <div class="sc-title lh-32 font-20 color-333">信息安全</div>
                        <div class="sc-desc lh-32 font-14 color-666">您的所有信息、材料安全有保障</div>
                    </div>
                    <div class="sc-li text-center fl">
                        <div class="sc-icon bg-common"></div>
                        <div class="sc-title lh-32 font-20 color-333">一对一服务</div>
                        <div class="sc-desc lh-32 font-14 color-666">顾问、工程师全程贴心服务</div>
                    </div>
                    <div class="sc-li text-center fl">
                        <div class="sc-icon bg-common"></div>
                        <div class="sc-title lh-32 font-20 color-333">售后无忧</div>
                        <div class="sc-desc lh-32 font-14 color-666">服务全过程跟进、监控</div>
                    </div>
                </div>
            </div>
            <div class="about-bg">
                <div class="bg-block"><img src="../../../style/index/index_33.png" alt=""></div>
                <div class="bg-block"><img src="../../../style/index/index_33.png" alt=""></div>
                <div class="bg-block"><img src="../../../style/index/index_33.png" alt=""></div>
            </div>
        </div>
        <!-- 提交需求 -->
        <formCommit></formCommit>
    </div>
</template>


<script>
import section1 from './section1'

import ziXun from './zixun'
import formCommit from './formCommit'
import iactService from './iactService'

export default {
  components: { ziXun, formCommit, section1, iactService },
  data: function() {
    return {
      items: [
        { name: '商标查询', href: '/trademark/search', btn: '立即查询' },
        { name: '商标普通注册', href: '/trademark/form', btn: '立即注册' },
        {
          name: '商标保姆注册',
          href: '/trademark/baomuIndex',
          btn: '立即注册'
        },
        { name: '商标担保注册', href: '/trademark/danbao', btn: '立即注册' },
        {
          name: '商标续展',
          href: '/trademark/services?remindinfo=xuzhan',
          btn: '查看详情'
        },
        {
          name: '商标转让',
          href: '/trademark/services?remindinfo=zhuanrang',
          btn: '查看详情'
        },
        {
          name: '商标变更',
          href: '/trademark/services?remindinfo=biangeng',
          btn: '查看详情'
        },
        {
          name: '商标撤三申请',
          href: '/trademark/services?remindinfo=chexiao',
          btn: '查看详情'
        }
      ],
      patents: [
        { name: '发明专利', href: '/trademark/services?remindinfo=faming' },
        {
          name: '实用新型专利',
          href: '/trademark/services?remindinfo=shiyong'
        },
        {
          name: '外观设计专利',
          href: '/trademark/services?remindinfo=waiguan'
        },
        {
          name: '专利驳回复审',
          href: '/trademark/services?remindinfo=zhuanlibohui'
        },
        { name: '文字著作权', href: '/trademark/services?remindinfo=wenzi' },
        { name: '美术著作权', href: '/trademark/services?remindinfo=meishu' },
        { name: '软件著作权', href: '/trademark/services?remindinfo=ruanjian' },
        { name: '其他著作权', href: '/trademark/services?remindinfo=qita' }
      ],
      iacts: [
        {
          name: '代理记账',
          href: '/service/service_detail?id=1'
        },
        {
          name: '公司注册',
          href: '/service/service_detail?id=3'
        },
        {
          name: '社保代理',
          href: '/service/service_detail?id=5'
        },
        {
          name: '网站建站',
          href: '/build'
        },
        {
          name: '高新企业认证',
          href: '/service/service_detail?id=6'
        },
        {
          name: '代办ICP许可证',
          href: '/service/service_detail?id=4'
        }
      ]
    }
  }
}
</script>

<style>
/* @import url('../../../style/css/global'); */
@import url('../../../style/css/global.css');
</style>

<style lang="less">
@import url('../../../style/less/index');
</style>

<style lang="less">
#iact-service{
    .tc-right {
        .tr-li{
            padding:20px 30px 32px 30px;
            .tr-li-top{
                margin-bottom: 5px;
            }
            .tr-li-center{
                margin-bottom: 15px;
                font-size: 14px;
            }
            .detail{
                width: 100px;
                height: 32px;
                line-height: 30px;
                margin-top: 5px;
                border:solid 1px #e2383a;
                border-radius:3px;
                color: #e2383a;
                background-color: transparent;
            }
        }
        .tr-li:hover .detail{
            color: #fff;
                background-color: #e2383a;
        }
        .tr-li-img{
            right: 0;
            bottom: 0;
            width: 164px;
            height: 106px;
            img{
                display: block;
            }
        }
    }
}
</style>

