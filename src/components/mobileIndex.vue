<template>
    <div class="mobile">
        <!-- 企服引擎为您领航互联网 -->
        <div class="section1 pd-20 bg-f5 clearfix text-center">
            <div class="section-title">企服引擎为您领航互联网</div>
            <div class="content">
                <div class="fl zc bg-fff ">
                    <div class="icon"></div>
                    <div class="name">知产服务</div>
                    <div class="c-list">
                        <li v-for="item in tradeService" :data-name="item.name">
                            <a target="_blank" :href="item.href">{{item.name}}</a>
                        </li>
                    </div>
                </div>
                <div class="fr jz bg-fff">
                    <div class="icon"></div>
                    <div class="name">建站服务</div>
                    <div class="c-list">
                        <li v-for="item in jzService" :data-name="item.name">
                            <a target="_blank" :href="item.href">{{item.name}}</a>
                        </li>
                    </div>
                </div>
                <div class="bg-fff qy">
                    <div class="qy_top">
                        <i class="icon"></i>
                        <span>企业数字化服务</span>
                    </div>
                    <div class="qy_list clearfix text-left">
                        <div class="qy_li" v-for="item in numberService" :data-name="item.name">
                            <div class="qy_title">{{item.name}}</div>
                            <div class="qy_desc">
                                {{item.desc}}
                            </div>
                            <a :href="item.href">
                                <div class="qy_btn">查看更多</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 一站式企业知产服务 -->
        <div class="section2 pd-20 bg-f5 clearfix text-center" id="property_service">
            <div class="section-title">一站式企业知产服务</div>
            <div class="sc-tab bg-fff">
                <div class="sc-li active">知产服务</div>
                <div class="sc-li">专利版权</div>
                <div class="sc-li">工商财税</div>
                <div class="sc-li">海量商标库</div>
            </div>
            <!-- 商标服务 -->
            <div class="trade-service sc-content tab-content clearfix text-center">
                <div class="sc-li w-2 mr-24">
                    <img src="../style/mobile_index/mobile_index_03.png" alt="" srcset="">
                </div>
                <!-- 注册部分  itemsZhuCe-->

                <div class="sc-li w-1" data-name="商标查询">
                    <a href="/trademark/search">
                        <div class="sc-icon"></div>
                        <div class="sc-name">商标查询</div>
                        <div class="sc-price">免费</div>
                    </a>
                </div>
                <div class="sc-li w-1 mr-24" data-name="普通注册">
                    <a href="/trademark/form">
                    <div class="sc-icon"></div>
                    <div class="sc-name">普通注册</div>
                    <div class="sc-price">免费</div>
                    </a>
                </div>
                <div class="sc-li w-1 mr-24 mb-48" data-name="保姆注册">
                    <a href="/trademark/baomuIndex">
                    <div class="sc-icon"></div>
                    <div class="sc-name">保姆注册</div>
                    <div class="sc-price">免费</div>
                    </a>
                </div>
                <div class="sc-li w-1 mb-48" data-name="担保注册">
                    <a href="/trademark/danbao">
                    <div class="sc-icon"></div>
                    <div class="sc-name">担保注册</div>
                    <div class="sc-price">免费</div>
                    </a>
                </div>
                <!-- 服务部分 -->
                <div class="sc-li w-2 mr-24">
                    <img src="../style/mobile_index/mobile_index_06.png" alt="" srcset="">
                </div>
                <div class="sc-li w-1" data-name="商标续展">
                    <a href="/trademark/services?remindinfo=xuzhan">
                    <div class="sc-icon"></div>
                    <div class="sc-name">商标续展</div>
                    <div class="sc-price">免费</div>
                    </a>
                </div>
                <div class="sc-li w-1 mr-24 mb-48" data-name="商标转让">
                    <a href="/trademark/services?remindinfo=zhuanrang">
                    <div class="sc-icon"></div>
                    <div class="sc-name">商标转让</div>
                    <div class="sc-price">免费</div>
                    </a>
                </div>
                <div class="sc-li w-1 mr-24 mb-48" data-name="商标变更">
                    <a href="/trademark/services?remindinfo=biangeng">
                    <div class="sc-icon"></div>
                    <div class="sc-name">商标变更</div>
                    <div class="sc-price">免费</div>
                    </a>
                </div>
                <div class="sc-li w-1 mb-48" data-name="商标撤三申请">
                    <a href="/trademark/services?remindinfo=chexiao">
                    <div class="sc-icon"></div>
                    <div class="sc-name">商标撤三申请</div>
                    <div class="sc-price">免费</div>
                    </a>
                </div>
            </div>
            <!-- 专利版权 -->
            <div class="patent-service sc-content tab-content clearfix text-center hide">
                <div class="sc-li w-2 mr-24">
                    <img src="../style/mobile_index/mobile_index_07.png" alt="" srcset="">
                </div>
                <div class="sc-li w-1" data-name="发明专利">
                    <a href="/trademark/services?remindinfo=faming">
                    <div class="sc-icon"></div>
                    <div class="sc-name">发明专利</div>
                    <div class="sc-price">免费</div>
                    </a>
                </div>
                <div class="sc-li w-1 mr-24" data-name="实用新型专利">
                    <a href="/trademark/services?remindinfo=shiyong">
                    <div class="sc-icon"></div>
                    <div class="sc-name">实用新型专利</div>
                    <div class="sc-price">免费</div>
                    </a>
                </div>
                <div class="sc-li w-1 mr-24 mb-48" data-name="外观设计专利">
                    <a href="/trademark/services?remindinfo=waiguan">
                    <div class="sc-icon"></div>
                    <div class="sc-name">外观设计专利</div>
                    <div class="sc-price">免费</div>
                    </a>
                </div>
                <div class="sc-li w-1 mb-48" data-name="专利驳回复审">
                    <a href="/trademark/services?remindinfo=zhuanlibohui">
                    <div class="sc-icon"></div>
                    <div class="sc-name">专利驳回复审</div>
                    <div class="sc-price">免费</div>
                    </a>
                </div>
                <div class="sc-li w-2 mr-24">
                    <img src="../style/mobile_index/mobile_index_09.png" alt="" srcset="">
                </div>
                <div class="sc-li w-1" data-name="文字著作权">
                    <a href="/trademark/services?remindinfo=wenzi">
                    <div class="sc-icon"></div>
                    <div class="sc-name">文字著作权</div>
                    <div class="sc-price">免费</div>
                    </a>
                </div>
                <div class="sc-li w-1 mr-24 mb-48" data-name="美术著作权">
                    <a href="/trademark/services?remindinfo=meishu">
                    <div class="sc-icon"></div>
                    <div class="sc-name">美术著作权</div>
                    <div class="sc-price">免费</div>
                    </a>
                </div>
                <div class="sc-li w-1 mr-24 mb-48" data-name="软件著作权">
                    <a href="/trademark/services?remindinfo=ruanjian">
                    <div class="sc-icon"></div>
                    <div class="sc-name">软件著作权</div>
                    <div class="sc-price">免费</div>
                    </a>
                </div>
                <div class="sc-li w-1 mb-48" data-name="其他著作权">
                    <a href="/trademark/services?remindinfo=qita">
                    <div class="sc-icon"></div>
                    <div class="sc-name">其他著作权</div>
                    <div class="sc-price">免费</div>
                    </a>
                </div>
            </div>
            <!-- 工商财税 -->
            <div class="iact-service sc-content tab-content clearfix text-center hide">
                <div class="sc-top"></div>
                <div class="sc-list clearfix">
                    <div class="is-li" data-name="代理记账">
                        <!-- 这里读取变量 -->
                        <a href="/service/service_detail?id=1">
                            <div class="is-icon"></div>
                            <div class="is-name">代理记账</div>
                            <div class="is-desc">主要面向中小型企业、私营、股份制等在京投资设立的办事机......</div>
                            <div class="is-price">¥5000</div>
                        </a>
                    </div>
                    <div class="is-li" data-name="公司注册">
                        <div class="is-icon"></div>
                        <div class="is-name">公司注册</div>
                        <div class="is-desc">主要面向中小型企业、私营、股份制等在京投资设立的办事机......</div>
                        <div class="is-price">¥5000</div>
                    </div>
                    <div class="is-li" data-name="社保代理">
                        <div class="is-icon"></div>
                        <div class="is-name">社保代理</div>
                        <div class="is-desc">主要面向中小型企业、私营、股份制等在京投资设立的办事机......</div>
                        <div class="is-price">¥5000</div>
                    </div>
                    <div class="is-li" data-name="网站建站">
                        <div class="is-icon"></div>
                        <div class="is-name">网站建站</div>
                        <div class="is-desc">主要面向中小型企业、私营、股份制等在京投资设立的办事机......</div>
                        <div class="is-price">¥5000</div>
                    </div>
                    <div class="is-li" data-name="高新企业认证">
                        <div class="is-icon"></div>
                        <div class="is-name">高新企业认证</div>
                        <div class="is-desc">主要面向中小型企业、私营、股份制等在京投资设立的办事机......</div>
                        <div class="is-price">¥5000</div>
                    </div>
                    <div class="is-li" data-name="代办ICP许可证">
                        <div class="is-icon"></div>
                        <div class="is-name">代办ICP许可证</div>
                        <div class="is-desc">主要面向中小型企业、私营、股份制等在京投资设立的办事机......</div>
                        <div class="is-price">¥5000</div>
                    </div>
                </div>
            </div>

            <!-- 海量商标库 -->
            <!-- 只读取12个最新的商标即可 -->
            <div class="lb-service sc-content tab-content clearfix text-center hide">
                <div class="sc-top"></div>
                <div class="sc-list clearfix">
                    <div class="is-li">
                        <div class="is-icon"></div>
                        <div class="is-price">¥5000</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 打造企业数字化 -->
        <div class="section3 pd-20 bg-f5 clearfix text-center">
            <div class="section-title">打造企业数字化</div>
            <a href="/domain">
                <div class="li-div one"></div>
            </a>
            <a href="/host/buy.html?pId=1&lineid=8">
                <div class="li-div two"></div>
            </a>
            <a href="/ssl/order?CerType=1">
                <div class="li-div three"></div>
            </a>
            <a href="/etpemail/buy">
                <div class="li-div four"></div>
            </a>
        </div>
        <!-- 资讯热点 -->
        <ziXun></ziXun>
        <!-- 我们合作的客户 -->
        <div class="section5 pd-20 bg-f5 clearfix text-center">
            <div class="section-title">我们合作的客户</div>
            <div class="s-content">
                <div class="sc-li">
                    <div class="sc-icon"></div>
                    <div class="sc-desc">价格透明</div>
                </div>
                <div class="sc-li">
                    <div class="sc-icon"></div>
                    <div class="sc-desc">信息安全</div>
                </div>
                <div class="sc-li">
                    <div class="sc-icon"></div>
                    <div class="sc-desc">一对一服务</div>
                </div>
                <div class="sc-li">
                    <div class="sc-icon"></div>
                    <div class="sc-desc">售后无忧</div>
                </div>
            </div>
        </div>
        <div class="section6 pd-20 clearfix">
            <div class="top-text text-left">
                <h3>提交我的需求</h3>
                <p>请认真填写需求信息，我们会尽快和您取得联系。</p>
            </div>
            <div class="bottom-form">
          <form action="build/demand_save" method="post" class="applyform" id="applyform" name="applyform">
                <div class="inp">
                    <label for=""></label>
                    <input type="text" name="Company" id="Company" placeholder="公司名称">
                </div>
                <div class="inp">
                    <label for=""></label>
                    <input type="text" name="tel" id="tel" placeholder="联系电话">
                </div>
                <div class="inp_wrap">
                    <div class="inp fl">
                        <label for=""></label>
                        <input type="text" name="UserName" id="UserName" placeholder="联系人">
                    </div>
                    <div class="inp fr">
                        <label for=""></label>
                        <input type="text" name="QQ" id="QQ" placeholder="QQ">
                    </div>
                </div>
                <div class="inp commond">
                    <label for=""></label>
                    <textarea name="Content" id="Content" cols="30" rows="10" placeholder="需求"></textarea>
                </div>
                <div class="yzm_btn">
                    <div class="inp fl">
                        <label for=""></label>
                        <input type="text" name="checkcode" id="checkcode" placeholder="验证码">
                    </div>
                    <div class="inp_img fl">
                        <a href="javascript:changecode2014()" class="ccode" title="不清楚？点击换个图片">
                            <img src="http://user.epower.cn/?m=api&c=captcha&rnd=0.09758999459099726" alt="不清楚？换一张" id="cc" align="absmiddle" class="show-captcha"></a>
                    </div>
                    <input type="submit" value="提交项目需求" class="inp_btn fr">
                </div>
                </form>
            </div>
        </div>
    </div>
</template>
<style lang="less">
@import url('../style/less/mobile');
</style>
<style>
input::input-placeholder {
  color: rgba(255, 255, 255, 0.8);
}
::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.8);
}
:-moz-placeholder {
  color: rgba(255, 255, 255, 0.8);
}
::-moz-placeholder {
  color: rgba(255, 255, 255, 0.8);
}
:-ms-input-placeholder {
  color: rgba(255, 255, 255, 0.8);
}
</style>

<script>
import ziXun from '../components/mobile_zixun'
export default {
  components: { ziXun },
  data() {
    return {
      itemsZhuCe: [
        { name: '商标查询', href: '/trademark/search', btn: '立即查询' },
        { name: '普通注册', href: '/trademark/form', btn: '立即注册' },
        { name: '保姆注册', href: '/trademark/baomuIndex', btn: '立即注册' },
        { name: '担保注册', href: '/trademark/danbao', btn: '立即注册' }
      ],
      itemsService: [
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
      tradeService: [
        {
          name: '商标注册',
          href: '/trademark/form'
        },
        {
          name: '商标交易',
          href: '/trademark/jiaoyilists'
        },
        {
          name: '专利服务',
          href: '/trademark/servicesIpr'
        },
        {
          name: '版权服务',
          href: '/trademark/servicesIpr'
        }
      ],
      jzService: [
        {
          name: '极速建站',
          href: '/jianzhan/muban.html'
        },
        {
          name: '域名绑定',
          href: '/user/website'
        },
        {
          name: '四网合一',
          href: '/jianzhan'
        },
        {
          name: '去除版权',
          href: '/website'
        }
      ],
      numberService: [
        {
          name: '域名服务',
          href: '/domain',
          desc: '提供五星级的域名注册服务，让企业有入口。'
        },
        {
          name: '云计算',
          href: '/yun',
          desc: '互联网HTTPS时代已经到来，安全有保障'
        },
        {
          name: 'SSL证书',
          href: '/ssl/order?CerType=1',
          desc: '以严苛标准打造高速稳定强悍的云计算性能体验'
        },
        {
          name: '企业邮箱',
          href: '/etpemail/buy',
          desc: '提供专业稳定的企业邮箱，海外收发，畅通无阻'
        }
      ]
    }
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