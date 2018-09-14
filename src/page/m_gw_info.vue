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
        <div class="section-9 clearfix pd-20 bg-f5">
            <div class="h3-title text-center">
                <h3 class="color-333 font-32 lh-64">大陆、香港双服务器选择</h3>
                <p class="font-24 color-666 lh-36">户创建网站时可自由选择服务器线路，大陆服务器线路，支持大陆备案，网站引流更方便！</p>
            </div>
            <div class="section-image bg-common"></div>
        </div>
        <div class="section-4 clearfix bg-common">
            <div class="h3-title text-center pd-20">
                <h3 class="font-32 lh-64 color-fff">强大的网站功能</h3>
                <p class="font-24 lh-36 color-fff">免费赠送二级域名，支持绑定独立域名</p>
            </div>
            <div class="section-image bg-common">
                <div class="box xz_wrap">
                    <div class="list">
                        <ul>
                            <li class="p6">
                                <a href="javascript:;"><img src="../assets/gw_info/xz_1.png" alt="" /></a>
                            </li>
                            <li class="p5">
                                <a href="javascript:;"><img src="../assets/gw_info/xz_2.png" alt="" /></a>
                            </li>
                            <li class="p4">
                                <a href="javascript:;"><img src="../assets/gw_info/xz_3.png" alt="" /></a>
                            </li>
                            <li class="p3">
                                <a href="javascript:;"><img src="../assets/gw_info/xz_1.png" alt="" /></a>
                            </li>
                            <li class="p2">
                                <a href="javascript:;"><img src="../assets/gw_info/xz_2.png" alt="" /></a>
                            </li>
                            <li class="p1">
                                <a href="javascript:;"><img src="../assets/gw_info/xz_3.png" alt="" /></a>
                            </li>
                        </ul>
                    </div>

                    <a href="javascript:;" class="prev btn"></a>
                    <a href="javascript:;" class="next btn"></a>

                    <div class="buttons hide">
                        <a href="javascript:;">
                            <span class="white"></span>
                        </a>
                        <a href="javascript:;">
                            <span></span>
                        </a>
                        <a href="javascript:;">
                            <span></span>
                        </a>

                    </div>
                </div>
            </div>

        </div>
        <div class="section-5 clearfix pd-20 bg-fff">
            <div class="h3-title text-center">
                <h3 class="color-333 font-32 lh-64">在线独立后台管理</h3>
                <p class="font-24 color-666 lh-36">支持多人管理网站，可设置管理员账号与权限</p>
            </div>
            <div class="section-image bg-common pr">
                <div class="section-pagination mb-20">
                    <div class="section-pa-left fl bg-common swiper-button-prev"></div>
                    <div class="section-pa-right fr bg-common swiper-button-next"></div>
                </div>
                <div class="list-wrap bg-common">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="section-swiper swiper-slide"><img src="../assets/gw_info/mgw_21.png" alt="" srcset=""></div>
                            <div class="section-swiper swiper-slide"><img src="../assets/gw_info/mgw_23.png" alt="" srcset=""></div>
                            <div class="section-swiper swiper-slide"><img src="../assets/gw_info/mgw_25.png" alt="" srcset=""></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-6 clearfix pd-20 bg-fff">
            <div class="h3-title text-center">
                <h3 class="color-333 font-32 lh-64">自定义模板功能</h3>
                <p class="font-24 color-666 lh-36">管理后台可添加自定义模板，设置您的专属特色模板</p>
            </div>
            <div class="section-image bg-common"></div>
        </div>
        <div class="section-7 bg-fff">
            <div class="h3-title text-center">
                <h3 class="color-333 font-36 lh-64">只需商业授权，<br> 即刻拥有上千套精美行业解决方案
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
export default {
  components: {},
  data() {
    return {}
  },
  mounted() {
    this.change_fontSize(document, window)
    var mobileSwiper = new Swiper('.section-5 .swiper-container', {
      loop: true,
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

<style lang="less">
@import url('../style/less/m_gw_info.less');
</style>

