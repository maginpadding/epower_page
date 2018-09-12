<template>
    <div>
        <!-- 引入公共头文件 -->
        <mobileHeader></mobileHeader>
        <!-- web主机 -->

        <!-- 云服务器 -->
        <!-- 租用托管 -->
        <!-- 我们的优势 -->

        <div class="mobile">
            <div id="cloud-banner">
                <div class="center">
                    <h1 class="title">云计算</h1>
                    <h3>掌控核心技术，真正的云计算</h3>
                    <div class="icon"></div>
                </div>
            </div>
            <!-- web主机 -->
            <div class="section1 bg-f5" style="    padding: 0 .2rem;padding-bottom:.4rem;">
                <div class="section-title clearfix bg-f5 pd-20">
                    <div class="section-title-line">
                        <span class="section-title-span pr color-666 bg-f5">Web主机</span>
                    </div>
                </div>
                <div class="section-tab clearfix bg-f5">
                    <div class="fl font-32 color-666 dalu active" data-id="dalu">国内虚拟主机</div>
                    <div class="fl font-32 color-666 xianggang" data-id="xianggang">香港虚拟主机</div>
                    <div class="fl font-32 color-666 USA" data-id="USA">美国虚拟主机</div>
                </div>
                <div class="tab-content pd-20 bg-fff clearfix" id="dalu">
                    <ul class="child-tab">
                        <li class="text-center font-24 active" data-id="jingji">国内经济型</li>
                        <li class="text-center font-24" data-id="puhui">国内普惠型</li>
                        <li class="text-center font-24" data-id="zhuanye">国内专业型</li>
                    </ul>
                    <div class="child-content-wrap" data-id="jingji">
                        <ul class="child-content clearfix">
                            <div class="text-center">
                                <p class="color-333">2GB</p>
                                <span class="color-666">存储空间</span>
                            </div>
                            <div class="text-center">
                                <p class="color-333">500M</p>
                                <span class="color-666">数据库</span>
                            </div>
                            <div class="text-center">
                                <p class="color-333">独享单核</p>
                                <span class="color-666">独享CPU</span>
                            </div>
                        </ul>
                        <div class="child-info">
                            <p>支持语言：html、asp、.net、php</p>
                            <p>数据库： MySQL/MSSQL</p>
                            <p>机房地区： 杭州双线</p>
                            <p>可绑定域名： 20个</p>
                        </div>
                        <div class="price-wrap">
                            <div class="pw-left">
                                <h3 class="price">28元/月</h3>
                                <p>
                                    <i class="icon gift-icon"></i>送30天备案时间</p>
                            </div>
                            <a href="/host/buy.html?pId=1&amp;lineid=8" class="price-btn pw-right">立即购买</a>
                        </div>
                    </div>
                    <div class="child-content-wrap hide" data-id="puhui">
                        <ul class="child-content clearfix">
                            <div class="text-center">
                                <p class="color-333">4GB</p>
                                <span class="color-666">存储空间</span>
                            </div>
                            <div class="text-center">
                                <p class="color-333">500M</p>
                                <span class="color-666">数据库</span>
                            </div>
                            <div class="text-center">
                                <p class="color-333">独享单核</p>
                                <span class="color-666">独享CPU</span>
                            </div>
                        </ul>
                        <div class="child-info">
                            <p>支持语言：html、asp、.net、php</p>
                            <p>数据库： MySQL/MSSQL</p>
                            <p>机房地区： 杭州双线</p>
                            <p>可绑定域名： 20个</p>
                        </div>
                        <div class="price-wrap">
                            <div class="pw-left">
                                <h3 class="price">28元/月</h3>
                                <p>
                                    <i class="icon gift-icon"></i>送30天备案时间</p>
                            </div>
                            <a href="/host/buy.html?pId=1&amp;lineid=8" class="price-btn pw-right">立即购买</a>
                        </div>
                    </div>
                    <div class="child-content-wrap hide" data-id="zhuanye">
                        <ul class="child-content clearfix">
                            <div class="text-center">
                                <p class="color-333">5GB</p>
                                <span class="color-666">存储空间</span>
                            </div>
                            <div class="text-center">
                                <p class="color-333">500M</p>
                                <span class="color-666">数据库</span>
                            </div>
                            <div class="text-center">
                                <p class="color-333">独享双核</p>
                                <span class="color-666">独享CPU</span>
                            </div>
                        </ul>
                        <div class="child-info">
                            <p>支持语言：html、asp、.net、php</p>
                            <p>数据库： MySQL/MSSQL</p>
                            <p>机房地区： 杭州双线</p>
                            <p>可绑定域名： 20个</p>
                        </div>
                        <div class="price-wrap">
                            <div class="pw-left">
                                <h3 class="price">28元/月</h3>
                                <p>
                                    <i class="icon gift-icon"></i>送30天备案时间</p>
                            </div>
                            <a href="/host/buy.html?pId=1&amp;lineid=8" class="price-btn pw-right">立即购买</a>
                        </div>
                    </div>
                </div>
                <div class="tab-content pd-20 bg-fff clearfix hide" id="xianggang">
                    <ul class="child-tab">
                        <li class="text-center font-24 active" data-id="jingji">国内经济型</li>
                        <li class="text-center font-24 " data-id="puhui">国内普惠型</li>
                        <li class="text-center font-24" data-id="zhuanye">国内专业型</li>
                    </ul>
                    <div class="child-content-wrap" data-id="jingji">
                        <ul class="child-content clearfix">
                            <div class="text-center">
                                <p class="color-333">2GB</p>
                                <span class="color-666">存储空间</span>
                            </div>
                            <div class="text-center">
                                <p class="color-333">500M</p>
                                <span class="color-666">数据库</span>
                            </div>
                            <div class="text-center">
                                <p class="color-333">独享单核</p>
                                <span class="color-666">独享CPU</span>
                            </div>
                        </ul>
                        <div class="child-info">
                            <p>支持语言：html、asp、.net、php</p>
                            <p>数据库： MySQL/MSSQL</p>
                            <p>机房地区： 杭州双线</p>
                            <p>可绑定域名： 20个</p>
                        </div>
                        <div class="price-wrap">
                            <div class="pw-left">
                                <h3 class="price">28元/月</h3>
                                <p>
                                    <i class="icon gift-icon"></i>送30天备案时间</p>
                            </div>
                            <a href="/host/buy.html?pId=1&amp;lineid=8" class="price-btn pw-right">立即购买</a>
                        </div>
                    </div>
                    <div class="child-content-wrap hide" data-id="puhui">
                        <ul class="child-content clearfix">
                            <div class="text-center">
                                <p class="color-333">4GB</p>
                                <span class="color-666">存储空间</span>
                            </div>
                            <div class="text-center">
                                <p class="color-333">500M</p>
                                <span class="color-666">数据库</span>
                            </div>
                            <div class="text-center">
                                <p class="color-333">独享单核</p>
                                <span class="color-666">独享CPU</span>
                            </div>
                        </ul>
                        <div class="child-info">
                            <p>支持语言：html、asp、.net、php</p>
                            <p>数据库： MySQL/MSSQL</p>
                            <p>机房地区： 杭州双线</p>
                            <p>可绑定域名： 20个</p>
                        </div>
                        <div class="price-wrap">
                            <div class="pw-left">
                                <h3 class="price">28元/月</h3>
                                <p>
                                    <i class="icon gift-icon"></i>送30天备案时间</p>
                            </div>
                            <a href="/host/buy.html?pId=1&amp;lineid=8" class="price-btn pw-right">立即购买</a>
                        </div>
                    </div>
                    <div class="child-content-wrap hide" data-id="zhuanye">
                        <ul class="child-content clearfix">
                            <div class="text-center">
                                <p class="color-333">5GB</p>
                                <span class="color-666">存储空间</span>
                            </div>
                            <div class="text-center">
                                <p class="color-333">500M</p>
                                <span class="color-666">数据库</span>
                            </div>
                            <div class="text-center">
                                <p class="color-333">独享双核</p>
                                <span class="color-666">独享CPU</span>
                            </div>
                        </ul>
                        <div class="child-info">
                            <p>支持语言：html、asp、.net、php</p>
                            <p>数据库： MySQL/MSSQL</p>
                            <p>机房地区： 杭州双线</p>
                            <p>可绑定域名： 20个</p>
                        </div>
                        <div class="price-wrap">
                            <div class="pw-left">
                                <h3 class="price">28元/月</h3>
                                <p>
                                    <i class="icon gift-icon"></i>送30天备案时间</p>
                            </div>
                            <a href="/host/buy.html?pId=1&amp;lineid=8" class="price-btn pw-right">立即购买</a>
                        </div>
                    </div>
                </div>
                <div class="tab-content pd-20 bg-fff clearfix hide" id="USA">
                    <ul class="child-tab">
                        <li class="text-center font-24 active" data-id="jingji">国内经济型</li>
                        <li class="text-center font-24 " data-id="puhui">国内普惠型</li>
                        <li class="text-center font-24" data-id="zhuanye">国内专业型</li>
                    </ul>
                    <div class="child-content-wrap" data-id="jingji">
                        <ul class="child-content clearfix">
                            <div class="text-center">
                                <p class="color-333">2GB</p>
                                <span class="color-666">存储空间</span>
                            </div>
                            <div class="text-center">
                                <p class="color-333">500M</p>
                                <span class="color-666">数据库</span>
                            </div>
                            <div class="text-center">
                                <p class="color-333">独享单核</p>
                                <span class="color-666">独享CPU</span>
                            </div>

                        </ul>
                        <div class="child-info">
                            <p>支持语言：html、asp、.net、php</p>
                            <p>数据库： MySQL/MSSQL</p>
                            <p>机房地区： 杭州双线</p>
                            <p>可绑定域名： 20个</p>
                        </div>
                        <div class="price-wrap">
                            <div class="pw-left">
                                <h3 class="price">28元/月</h3>
                                <p>
                                    <i class="icon gift-icon"></i>送30天备案时间</p>
                            </div>
                            <a href="/host/buy.html?pId=1&amp;lineid=8" class="price-btn pw-right">立即购买</a>
                        </div>
                    </div>
                    <div class="child-content-wrap hide" data-id="puhui">
                        <ul class="child-content clearfix">
                            <div class="text-center">
                                <p class="color-333">4GB</p>
                                <span class="color-666">存储空间</span>
                            </div>
                            <div class="text-center">
                                <p class="color-333">500M</p>
                                <span class="color-666">数据库</span>
                            </div>
                            <div class="text-center">
                                <p class="color-333">独享单核</p>
                                <span class="color-666">独享CPU</span>
                            </div>

                        </ul>
                        <div class="child-info">
                            <p>支持语言：html、asp、.net、php</p>
                            <p>数据库： MySQL/MSSQL</p>
                            <p>机房地区： 杭州双线</p>
                            <p>可绑定域名： 20个</p>
                        </div>
                        <div class="price-wrap">
                            <div class="pw-left">
                                <h3 class="price">28元/月</h3>
                                <p>
                                    <i class="icon gift-icon"></i>送30天备案时间</p>
                            </div>
                            <a href="/host/buy.html?pId=1&amp;lineid=8" class="price-btn pw-right">立即购买</a>
                        </div>
                    </div>
                    <div class="child-content-wrap hide" data-id="zhuanye">
                        <ul class="child-content clearfix">
                            <div class="text-center">
                                <p class="color-333">5GB</p>
                                <span class="color-666">存储空间</span>
                            </div>
                            <div class="text-center">
                                <p class="color-333">500M</p>
                                <span class="color-666">数据库</span>
                            </div>
                            <div class="text-center">
                                <p class="color-333">独享双核</p>
                                <span class="color-666">独享CPU</span>
                            </div>

                        </ul>
                        <div class="child-info">
                            <p>支持语言：html、asp、.net、php</p>
                            <p>数据库： MySQL/MSSQL</p>
                            <p>机房地区： 杭州双线</p>
                            <p>可绑定域名： 20个</p>
                        </div>
                        <div class="price-wrap">
                            <div class="pw-left">
                                <h3 class="price">28元/月</h3>
                                <p>
                                    <i class="icon gift-icon"></i>送30天备案时间</p>
                            </div>
                            <a href="/host/buy.html?pId=1&amp;lineid=8" class="price-btn pw-right">立即购买</a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 云服务器 -->
            <div class="section2 bg-fff">
                <div class="cloud-server bg-fff clearfix pd-20 ">
                    <div class="section-title-line">
                        <span class="section-title-span bg-fff">云服务器</span>
                    </div>
                    <div class="pr">
                        <div class="swiper-container" style="width: 5.3rem;">
                            <ul class="server-list swiper-wrapper">
                                <li class="bg-fff swiper-slide gj">
                                    <div class="cs-top clearfix">
                                        <i class="icon"></i>
                                        <p class="font-24 lh-42 text-center">高级型</p>
                                    </div>
                                    <div class="cs-center clearfix">
                                        <div class="cs-info clearfix">
                                            <div class="text-center">
                                                <p class="color-333">4核</p>
                                                <span class="font-14 color-666">CPU</span>
                                            </div>
                                            <div class="text-center">
                                                <p class="color-333">4GB</p>
                                                <span class="font-14 color-666">内存</span>
                                            </div>
                                            <div class="text-center">
                                                <p class="color-333">100GB</p>
                                                <span class="font-14 color-666">磁盘</span>
                                            </div>
                                        </div>
                                        <div class="other-info">
                                            <div>
                                                <span class="color-666 font-14">宽带：</span>
                                                <span class="color-666 font-14">2M</span>
                                            </div>
                                            <div>
                                                <span class="color-666 font-14">系统盘：</span>
                                                <span class="color-666 font-14">免费赠送40G系统盘</span>
                                            </div>
                                            <div>
                                                <span class="color-666 font-14">网络防护：</span>
                                                <span class="color-666 font-14">免费20G防护</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cs-bottom">
                                        <div class="cs-price color-red text-center">
                                            <span class="num font-36 bold lh-36">484</span>
                                            元/月
                                        </div>
                                        <a href="/server?type=gj" class="cs-btn text-center lh-42">立即购买</a>
                                    </div>
                                </li>
                                <li class="bg-fff swiper-slide rm">
                                    <div class="cs-top clearfix">
                                        <i class="icon"></i>
                                        <p class="font-24 lh-42 text-center">入门型</p>
                                    </div>
                                    <div class="cs-center clearfix">
                                        <div class="cs-info clearfix">
                                            <div class="text-center">
                                                <p class="color-333">1核</p>
                                                <span class="font-14 color-666">CPU</span>
                                            </div>
                                            <div class="text-center">
                                                <p class="color-333">2GB</p>
                                                <span class="font-14 color-666">内存</span>
                                            </div>
                                            <div class="text-center">
                                                <p class="color-333">20GB</p>
                                                <span class="font-14 color-666">磁盘</span>
                                            </div>
                                        </div>
                                        <div class="other-info">
                                            <div>
                                                <span class="color-666 font-14">宽带：</span>
                                                <span class="color-666 font-14">2M</span>
                                            </div>
                                            <div>
                                                <span class="color-666 font-14">系统盘：</span>
                                                <span class="color-666 font-14">免费赠送40G系统盘</span>
                                            </div>
                                            <div>
                                                <span class="color-666 font-14">网络防护：</span>
                                                <span class="color-666 font-14">免费20G防护</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cs-bottom">
                                        <div class="cs-price color-red text-center">
                                            <span class="num font-36 bold lh-36">172</span>
                                            元/月
                                        </div>
                                        <a href="/server?type=rm" class="cs-btn text-center lh-42">立即购买</a>
                                    </div>
                                </li>
                                <li class="bg-fff swiper-slide bz">
                                    <div class="cs-top clearfix">
                                        <i class="icon"></i>
                                        <p class="font-24 lh-42 text-center">标准型</p>
                                    </div>
                                    <div class="cs-center clearfix">
                                        <div class="cs-info clearfix">
                                            <div class="text-center">
                                                <p class="color-333">2核</p>
                                                <span class="font-14 color-666">CPU</span>
                                            </div>
                                            <div class="text-center">
                                                <p class="color-333">4GB</p>
                                                <span class="font-14 color-666">内存</span>
                                            </div>
                                            <div class="text-center">
                                                <p class="color-333">50GB</p>
                                                <span class="font-14 color-666">磁盘</span>
                                            </div>
                                        </div>
                                        <div class="other-info">
                                            <div>
                                                <span class="color-666 font-14">宽带：</span>
                                                <span class="color-666 font-14">2M</span>
                                            </div>
                                            <div>
                                                <span class="color-666 font-14">系统盘：</span>
                                                <span class="color-666 font-14">免费赠送40G系统盘</span>
                                            </div>
                                            <div>
                                                <span class="color-666 font-14">网络防护：</span>
                                                <span class="color-666 font-14">免费20G防护</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cs-bottom">
                                        <div class="cs-price color-red text-center">
                                            <span class="num font-36 bold lh-36">316</span>
                                            元/月
                                        </div>
                                        <a href="/server?type=bz" class="cs-btn text-center lh-42">立即购买</a>
                                    </div>
                                </li>
                                <li class="bg-fff swiper-slide gj">
                                    <div class="cs-top clearfix">
                                        <i class="icon"></i>
                                        <p class="font-24 lh-42 text-center">高级型</p>
                                    </div>
                                    <div class="cs-center clearfix">
                                        <div class="cs-info clearfix">
                                            <div class="text-center">
                                                <p class="color-333">4核</p>
                                                <span class="font-14 color-666">CPU</span>
                                            </div>
                                            <div class="text-center">
                                                <p class="color-333">4GB</p>
                                                <span class="font-14 color-666">内存</span>
                                            </div>
                                            <div class="text-center">
                                                <p class="color-333">100GB</p>
                                                <span class="font-14 color-666">磁盘</span>
                                            </div>
                                        </div>
                                        <div class="other-info">
                                            <div>
                                                <span class="color-666 font-14">宽带：</span>
                                                <span class="color-666 font-14">2M</span>
                                            </div>
                                            <div>
                                                <span class="color-666 font-14">系统盘：</span>
                                                <span class="color-666 font-14">免费赠送40G系统盘</span>
                                            </div>
                                            <div>
                                                <span class="color-666 font-14">网络防护：</span>
                                                <span class="color-666 font-14">免费20G防护</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cs-bottom">
                                        <div class="cs-price color-red text-center">
                                            <span class="num font-36 bold lh-36">484</span>
                                            元/月
                                        </div>
                                        <a href="/server?type=gj" class="cs-btn text-center lh-42">立即购买</a>
                                    </div>
                                </li>
                                <li class="bg-fff swiper-slide rm">
                                    <div class="cs-top clearfix">
                                        <i class="icon"></i>
                                        <p class="font-24 lh-42 text-center">入门型</p>
                                    </div>
                                    <div class="cs-center clearfix">
                                        <div class="cs-info clearfix">
                                            <div class="text-center">
                                                <p class="color-333">1核</p>
                                                <span class="font-14 color-666">CPU</span>
                                            </div>
                                            <div class="text-center">
                                                <p class="color-333">2GB</p>
                                                <span class="font-14 color-666">内存</span>
                                            </div>
                                            <div class="text-center">
                                                <p class="color-333">20GB</p>
                                                <span class="font-14 color-666">磁盘</span>
                                            </div>
                                        </div>
                                        <div class="other-info">
                                            <div>
                                                <span class="color-666 font-14">宽带：</span>
                                                <span class="color-666 font-14">2M</span>
                                            </div>
                                            <div>
                                                <span class="color-666 font-14">系统盘：</span>
                                                <span class="color-666 font-14">免费赠送40G系统盘</span>
                                            </div>
                                            <div>
                                                <span class="color-666 font-14">网络防护：</span>
                                                <span class="color-666 font-14">免费20G防护</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cs-bottom">
                                        <div class="cs-price color-red text-center">
                                            <span class="num font-36 bold lh-36">172</span>
                                            元/月
                                        </div>
                                        <a href="/server?type=rm" class="cs-btn text-center lh-42">立即购买</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="swiper-button-prev swiper-button-blue swiper-button-prev1" style="opacity:0.8;width:0.36rem;left: 0.1rem;z-index: 1000;top: 50%;background-size: contain;"></div>
                        <div class="swiper-button-next swiper-button-blue swiper-button-next1" style="opacity:0.8;width:0.36rem;right: 0.1rem;z-index: 1000;top: 50%;background-size: contain;"></div>
                    </div>
                </div>
            </div>
                        <!-- 租用托管 -->
            <div class="bg-f5" style="padding:0 .2rem; padding-top:.2rem;">
            <div class="host-choice">
                <ul class="tab-ul">
                    <li class="active" data_cid="13">主机租用
                        <div class="active-line"></div>
                    </li>
                    <li data_cid="14" class="">香港主机租用
                        <div class="active-line"></div>
                    </li>
                    <li data_cid="15" class="">主机托管
                        <div class="active-line"></div>
                    </li>
                </ul>
                <!--基础配置-->
                <div class="zjzy zj-content" style="display: block;">
                    <div class="host-type">
                        <h3 class="PHP-title">
                            <a href="javascript:mobileFunc.accordion(0);" style="display: block;">
                                <i class="icon1"></i>
                                超值商务型
                                <span class="toggle-detail"></span>
                            </a>
                        </h3>
                        <div class="ipc-info host-detail">
                            <div class="ipc-top">
                                <div class="ipc-left">
                                    <li>
                                        <span class="left">处理器：</span>
                                        <span class="right">酷睿双核E6600</span>
                                    </li>
                                    <li>
                                        <span class="left">内存：</span>
                                        <span class="right">DDR Ⅱ 2GB</span>
                                    </li>
                                    <li>
                                        <span class="left">硬盘：</span>
                                        <span class="right">500G SATA</span>
                                    </li>
                                    <li>
                                        <span class="left">机箱：</span>
                                        <span class="right">标准1U机架式</span>
                                    </li>
                                    <li>
                                        <span class="left">带宽：</span>
                                        <span class="right">双线100M共享</span>
                                    </li>
                                    <li>
                                        <span class="left">IP数：</span>
                                        <span class="right">双线IP</span>
                                    </li>
                                </div>
                                <div class="ipc-right">
                                    <p>7999</p>
                                    <span>元/件</span>
                                </div>
                            </div>
                            <div class="ipc-bottom">
                                <div class="ipc-b-title">优惠： 原价加1000元，送永久产权</div>
                                <a href="http://wpa.b.qq.com/cgi/wpa.php?ln=1&amp;key=XzkzODAzNjIwMl80NjUwNDVfNDAwNjAzNTAwMV8" class="ipc-btn" target="_blank">QQ联系购买</a>
                            </div>
                        </div>
                    </div>
                    <div class="host-type">
                        <h3 class="PHP-title">
                            <a href="javascript:mobileFunc.accordion(1);" style="display: block;">
                                <i class="icon2"></i>
                                普及商务型
                                <span class="toggle-detail"></span>
                            </a>
                        </h3>
                        <div class="ipc-info host-detail">
                            <div class="ipc-top">
                                <div class="ipc-left">
                                    <li>
                                        <span class="left">处理器：</span>
                                        <span class="right">四核至强3430</span>
                                    </li>
                                    <li>
                                        <span class="left">内存：</span>
                                        <span class="right">DDR Ⅲ ECC 2GB</span>
                                    </li>
                                    <li>
                                        <span class="left">硬盘：</span>
                                        <span class="right">500G SATA</span>
                                    </li>
                                    <li>
                                        <span class="left">机箱：</span>
                                        <span class="right">标准1U机架式</span>
                                    </li>
                                    <li>
                                        <span class="left">带宽：</span>
                                        <span class="right">双线100M共享</span>
                                    </li>
                                    <li>
                                        <span class="left">IP数：</span>
                                        <span class="right">双线IP</span>
                                    </li>
                                </div>
                                <div class="ipc-right">
                                    <p>9999</p>
                                    <span>元/件</span>
                                </div>
                            </div>
                            <div class="ipc-bottom">
                                <div class="ipc-b-title">优惠： 原价加1000元，送永久产权</div>
                                <a href="http://wpa.b.qq.com/cgi/wpa.php?ln=1&amp;key=XzkzODAzNjIwMl80NjUwNDVfNDAwNjAzNTAwMV8" class="ipc-btn" target="_blank">QQ联系购买</a>
                            </div>
                        </div>
                    </div>
                    <div class="host-type">
                        <h3 class="PHP-title">
                            <a href="javascript:mobileFunc.accordion(2);" style="display: block;">
                                <i class="icon3"></i>
                                旗舰商务型
                                <span class="toggle-detail"></span>
                            </a>
                        </h3>
                        <div class="ipc-info host-detail">
                            <div class="ipc-top">
                                <div class="ipc-left">
                                    <li>
                                        <span class="left">处理器：</span>
                                        <span class="right">四核至强5606</span>
                                    </li>
                                    <li>
                                        <span class="left">内存：</span>
                                        <span class="right">DDR Ⅲ ECC 4GB</span>
                                    </li>
                                    <li>
                                        <span class="left">硬盘：</span>
                                        <span class="right">300G SAS</span>
                                    </li>
                                    <li>
                                        <span class="left">机箱：</span>
                                        <span class="right">标准1U机架式</span>
                                    </li>
                                    <li>
                                        <span class="left">带宽：</span>
                                        <span class="right">双线100M共享</span>
                                    </li>
                                    <li>
                                        <span class="left">IP数：</span>
                                        <span class="right">双线IP</span>
                                    </li>
                                </div>
                                <div class="ipc-right">
                                    <p>12999</p>
                                    <span>元/件</span>
                                </div>
                            </div>
                            <div class="ipc-bottom">
                                <div class="ipc-b-title">优惠： 原价加1000元，送永久产权</div>
                                <a href="http://wpa.b.qq.com/cgi/wpa.php?ln=1&amp;key=XzkzODAzNjIwMl80NjUwNDVfNDAwNjAzNTAwMV8" class="ipc-btn" target="_blank">QQ联系购买</a>
                            </div>
                        </div>
                    </div>
                    <div class="host-type">
                        <h3 class="PHP-title">
                            <a href="javascript:mobileFunc.accordion(3);" style="display: block;">
                                <i class="icon4"></i>
                                尊享商务型
                                <span class="toggle-detail"></span>
                            </a>
                        </h3>
                        <div class="ipc-info host-detail">
                            <div class="ipc-top">
                                <div class="ipc-left">
                                    <li>
                                        <span class="left">处理器：</span>
                                        <span class="right">四核至强5606*2</span>
                                    </li>
                                    <li>
                                        <span class="left">内存：</span>
                                        <span class="right">DDR Ⅲ ECC 8GB</span>
                                    </li>
                                    <li>
                                        <span class="left">硬盘：</span>
                                        <span class="right">300G*2 SAS</span>
                                    </li>
                                    <li>
                                        <span class="left">机箱：</span>
                                        <span class="right">标准1U机架式</span>
                                    </li>
                                    <li>
                                        <span class="left">带宽：</span>
                                        <span class="right">双线100M共享</span>
                                    </li>
                                    <li>
                                        <span class="left">IP数：</span>
                                        <span class="right">双线IP</span>
                                    </li>
                                </div>
                                <div class="ipc-right">
                                    <p>14999</p>
                                    <span>元/件</span>
                                </div>
                            </div>
                            <div class="ipc-bottom">
                                <div class="ipc-b-title">优惠： 原价加1000元，送永久产权</div>
                                <a href="http://wpa.b.qq.com/cgi/wpa.php?ln=1&amp;key=XzkzODAzNjIwMl80NjUwNDVfNDAwNjAzNTAwMV8" class="ipc-btn" target="_blank">QQ联系购买</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="xgzj zj-content">
                    <div class="table">
                        <br>
                        <table border="0" cellspacing="0" cellpadding="0">
                            <tbody>
                                <tr>
                                    <th colspan="4">产品配置</th>
                                </tr>
                                <tr>
                                    <td>处理器</td>
                                    <td>E2180</td>
                                    <td>Q8200</td>
                                    <td>i3</td>
                                </tr>
                                <tr>
                                    <td>内存</td>
                                    <td>2GB</td>
                                    <td>2GB</td>
                                    <td>4GB</td>
                                </tr>
                                <tr>
                                    <td>硬盘</td>
                                    <td>500G SATA</td>
                                    <td>500G SATA</td>
                                    <td>500G SATA</td>
                                </tr>
                                <tr>
                                    <td>宽带</td>
                                    <td>3M独享</td>
                                    <td>3M独享</td>
                                    <td>3M独享</td>
                                </tr>
                                <tr>
                                    <td>IP数</td>
                                    <td>3个</td>
                                    <td>3个</td>
                                    <td>3个</td>
                                </tr>
                                <tr class="price">
                                    <td>价格</td>
                                    <td>
                                        <p>539元/年</p>
                                        <a href="http://wpa.b.qq.com/cgi/wpa.php?ln=1&amp;key=XzkzODAzNjIwMl80NjUwNDVfNDAwNjAzNTAwMV8" target="_blank">企业QQ</a>
                                    </td>
                                    <td>
                                        <p>799元/年</p>
                                        <a href="http://wpa.b.qq.com/cgi/wpa.php?ln=1&amp;key=XzkzODAzNjIwMl80NjUwNDVfNDAwNjAzNTAwMV8" target="_blank">企业QQ</a>
                                    </td>
                                    <td>
                                        <p>899元/年</p>
                                        <a href="http://wpa.b.qq.com/cgi/wpa.php?ln=1&amp;key=XzkzODAzNjIwMl80NjUwNDVfNDAwNjAzNTAwMV8" target="_blank">企业QQ</a>
                                    </td>
                                </tr>

                                <tr>
                                    <td>处理器</td>
                                    <td>i3</td>
                                    <td>i5</td>
                                    <td>i7</td>
                                </tr>
                                <tr>
                                    <td>内存</td>
                                    <td>8GB</td>
                                    <td>8GB</td>
                                    <td>8GB</td>
                                </tr>
                                <tr>
                                    <td>硬盘</td>
                                    <td>500G SATA</td>
                                    <td>500G SATA</td>
                                    <td>500G SATA</td>
                                </tr>
                                <tr>
                                    <td>宽带</td>
                                    <td>3M独享</td>
                                    <td>3M独享</td>
                                    <td>3M独享</td>
                                </tr>
                                <tr>
                                    <td>IP数</td>
                                    <td>3个</td>
                                    <td>3个</td>
                                    <td>3个</td>
                                </tr>
                                <tr class="price">
                                    <td>价格</td>
                                    <td>
                                        <p>999元/月</p>
                                        <a href="http://wpa.b.qq.com/cgi/wpa.php?ln=1&amp;key=XzkzODAzNjIwMl80NjUwNDVfNDAwNjAzNTAwMV8" target="_blank">企业QQ</a>
                                    </td>
                                    <td>
                                        <p>1099元/月</p>
                                        <a href="http://wpa.b.qq.com/cgi/wpa.php?ln=1&amp;key=XzkzODAzNjIwMl80NjUwNDVfNDAwNjAzNTAwMV8" target="_blank">企业QQ</a>
                                    </td>
                                    <td>
                                        <p>1329元/月</p>
                                        <a href="http://wpa.b.qq.com/cgi/wpa.php?ln=1&amp;key=XzkzODAzNjIwMl80NjUwNDVfNDAwNjAzNTAwMV8" target="_blank">企业QQ</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="table"></div>
                </div>
                <div class="zjtg zj-content" style="position: relative;margin-top: .2rem;background: #fff;">
                    <div class="tg-tab">
                        <li class="active">金华双线<br>大带宽机房
                            <i class="i-line" style="left: 0;"></i>
                        </li>
                        <li>杭州<br>双线机房
                            <i class="i-line" style="left: 36%;"></i>
                        </li>
                        <li style="margin-right: 0;">绍兴<br>电信机房
                            <i class="i-line" style="left: 72%;"></i>
                        </li>
                        <div class="div-line"></div>
                    </div>
                    <div class="tg-room-1 tg-room-swiper">
                        <div class="room-content swiper-container" style="width: 4.9rem;border: solid 1px #ccc;">
                            <div class="room-list swiper-wrapper" style="">
                                <div class="room swiper-slide">
                                    <div class="room-top">
                                        <img src="https://www.eb.com.cn/template/Home/Default/Mobile/Static/img/ipc_12.png">
                                    </div>
                                    <div class="room-bottom">
                                        <ul>
                                            <li>
                                                <h4>2个</h4>
                                                <p>独享独立IP数</p>
                                            </li>
                                            <li>
                                                <h4>1U</h4>
                                                <p>服务器规格</p>
                                            </li>
                                            <li>
                                                <h4>有</h4>
                                                <p>防火墙</p>
                                            </li>
                                        </ul>
                                        <p class="price">1500
                                            <span>元/年</span>
                                        </p>
                                        <a href="http://wpa.b.qq.com/cgi/wpa.php?ln=1&amp;key=XzkzODAzNjIwMl80NjUwNDVfNDAwNjAzNTAwMV8" target="_blank" class="room-btn">QQ联系购买</a>
                                    </div>
                                </div>
                                <div class="room swiper-slide">
                                    <div class="room-top">
                                        <img src="https://www.eb.com.cn/template/Home/Default/Mobile/Static/img/ipc_12.png">
                                    </div>
                                    <div class="room-bottom">
                                        <ul>
                                            <li>
                                                <h4>2个</h4>
                                                <p>独享独立IP数</p>
                                            </li>
                                            <li>
                                                <h4>1U</h4>
                                                <p>服务器规格</p>
                                            </li>
                                            <li>
                                                <h4>有</h4>
                                                <p>防火墙</p>
                                            </li>
                                        </ul>
                                        <p class="price">1500
                                            <span>元/年</span>
                                        </p>
                                        <a href="http://wpa.b.qq.com/cgi/wpa.php?ln=1&amp;key=XzkzODAzNjIwMl80NjUwNDVfNDAwNjAzNTAwMV8" target="_blank" class="room-btn">QQ联系购买</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-button-prev swiper-button-blue swiper-button-prev1" style="opacity:0.8;width:0.36rem;left: 0.4rem;z-index: 1000;top: 58%;background-size: contain;"></div>
                        <div class="swiper-button-next swiper-button-blue swiper-button-next1" style="opacity:0.8;width:0.36rem;right: 0.4rem;z-index: 1000;top: 58%;background-size: contain;"></div>
                    </div>
                    <div class="tg-room-2 tg-room-swiper" style="display: none;">
                        <div class="room-content swiper-container" style="width: 4.9rem;border: solid 1px #ccc;">
                            <div class="room-list swiper-wrapper" style="">
                                <div class="room swiper-slide">
                                    <div class="room-top">
                                        <img src="https://www.eb.com.cn/template/Home/Default/Mobile/Static/img/ipc_12.png">
                                    </div>
                                    <div class="room-bottom">
                                        <ul>
                                            <li>
                                                <h4>2个</h4>
                                                <p>独享独立IP数</p>
                                            </li>
                                            <li>
                                                <h4>1U</h4>
                                                <p>服务器规格</p>
                                            </li>
                                            <li>
                                                <h4>有</h4>
                                                <p>防火墙</p>
                                            </li>
                                        </ul>
                                        <p class="price">1500
                                            <span>元/年</span>
                                        </p>
                                        <a href="http://wpa.b.qq.com/cgi/wpa.php?ln=1&amp;key=XzkzODAzNjIwMl80NjUwNDVfNDAwNjAzNTAwMV8" target="_blank" class="room-btn">QQ联系购买</a>
                                    </div>
                                </div>
                                <div class="room swiper-slide">
                                    <div class="room-top">
                                        <img src="https://www.eb.com.cn/template/Home/Default/Mobile/Static/img/ipc_12.png">
                                    </div>
                                    <div class="room-bottom">
                                        <ul>
                                            <li>
                                                <h4>854156</h4>
                                                <p>独享独立IP数</p>
                                            </li>
                                            <li>
                                                <h4>1U</h4>
                                                <p>服务器规格</p>
                                            </li>
                                            <li>
                                                <h4>有</h4>
                                                <p>防火墙</p>
                                            </li>
                                        </ul>
                                        <p class="price">1500
                                            <span>元/年</span>
                                        </p>
                                        <a href="http://wpa.b.qq.com/cgi/wpa.php?ln=1&amp;key=XzkzODAzNjIwMl80NjUwNDVfNDAwNjAzNTAwMV8" target="_blank" class="room-btn">QQ联系购买</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-button-prev swiper-button-blue swiper-button-prev2" style="opacity:0.8;width:0.36rem;left: 0.4rem;z-index: 1000;top: 58%;background-size: contain;"></div>
                        <div class="swiper-button-next swiper-button-blue swiper-button-next2" style="opacity:0.8;width:0.36rem;right: 0.4rem;z-index: 1000;top: 58%;background-size: contain;"></div>
                    </div>
                    <div class="tg-room-3 tg-room-swiper" style="display: none;">
                        <div class="room-content swiper-container" style="width: 4.9rem;border: solid 1px #ccc;">
                            <div class="room-list swiper-wrapper" style="">
                                <div class="room swiper-slide">
                                    <div class="room-top">
                                        <img src="https://www.eb.com.cn/template/Home/Default/Mobile/Static/img/ipc_12.png">
                                    </div>
                                    <div class="room-bottom">
                                        <ul>
                                            <li>
                                                <h4>2个</h4>
                                                <p>独享独立IP数</p>
                                            </li>
                                            <li>
                                                <h4>1U</h4>
                                                <p>服务器规格</p>
                                            </li>
                                            <li>
                                                <h4>有</h4>
                                                <p>防火墙</p>
                                            </li>
                                        </ul>
                                        <p class="price">1500
                                            <span>元/年</span>
                                        </p>
                                        <a href="http://wpa.b.qq.com/cgi/wpa.php?ln=1&amp;key=XzkzODAzNjIwMl80NjUwNDVfNDAwNjAzNTAwMV8" target="_blank" class="room-btn">QQ联系购买</a>
                                    </div>
                                </div>
                                <div class="room swiper-slide">
                                    <div class="room-top">
                                        <img src="https://www.eb.com.cn/template/Home/Default/Mobile/Static/img/ipc_12.png">
                                    </div>
                                    <div class="room-bottom">
                                        <ul>
                                            <li>
                                                <h4>854156</h4>
                                                <p>独享独立IP数</p>
                                            </li>
                                            <li>
                                                <h4>1U</h4>
                                                <p>服务器规格</p>
                                            </li>
                                            <li>
                                                <h4>有</h4>
                                                <p>防火墙</p>
                                            </li>
                                        </ul>
                                        <p class="price">1500
                                            <span>元/年</span>
                                        </p>
                                        <a href="http://wpa.b.qq.com/cgi/wpa.php?ln=1&amp;key=XzkzODAzNjIwMl80NjUwNDVfNDAwNjAzNTAwMV8" target="_blank" class="room-btn">QQ联系购买</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-button-prev swiper-button-blue swiper-button-prev3" style="opacity:0.8;width:0.36rem;left: 0.4rem;z-index: 1000;top: 58%;background-size: contain;"></div>
                        <div class="swiper-button-next swiper-button-blue swiper-button-next3" style="opacity:0.8;width:0.36rem;right: 0.4rem;z-index: 1000;top: 58%;background-size: contain;"></div>
                    </div>
                </div>
            </div>
            </div>
            <!-- 我们的优势 -->
            <div class="section3">
                <div class="virtue-desc pd-20">
                    <div class="section-title-line">
                        <span class="section-title-span bg-fff">我们的优势</span>
                    </div>
                    <ul class="vd-list">
                        <li class="vd-icon">
                            <p class="vd-img vd-icon1"></p>
                            <p class="vd-text">性能卓越</p>
                        </li>
                        <li class="vd-icon">
                            <p class="vd-img"><img src="http://user.epower.cn/template/Home/Default/PC/Static/img/whychoose-yun.png" alt=""></p>
                            <p class="vd-text">安全稳固</p>
                        </li>
                        <li class="vd-icon">
                            <p class="vd-img"><img src="http://user.epower.cn/template/Home/Default/PC/Static/img/cloud_06.png" alt=""></p>
                            <p class="vd-text">按需购买 节约成本</p>
                        </li>
                        <li class="vd-icon">
                            <p class="vd-img"><img src="http://user.epower.cn/template/Home/Default/PC/Static/img/cloud_07.png" alt=""></p>
                            <p class="vd-text">故障赔付</p>
                        </li>
                        <li class="vd-icon">
                            <p class="vd-img"><img src="http://user.epower.cn/template/Home/Default/PC/Static/img/cloud_09.png" alt=""></p>
                            <p class="vd-text">全天支持服务</p>
                        </li>
                        <li class="vd-icon">
                            <p class="vd-img"><img src="http://user.epower.cn/template/Home/Default/PC/Static/img/cloud_10.png" alt=""></p>
                            <p class="vd-text">专人解疑答惑</p>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</template>
<style scoped>
@import url('http://tm.epower.cn/template/Home/Default/Mobile/Static/css/module/yun/yun.css');
@import url('https://www.eb.com.cn/template/Home/Default/Mobile/Static/css/module/idc/mobile_A.css');

.mobile * {
  box-sizing: border-box;
}
img {
  border: 0;
  width: 100%;
  display: block;
  height: 100%;
}
.section-tab {
  padding: 0 0.3rem;
  height: auto;
  padding-bottom: 0.4rem;
}
.section-tab > div {
  margin-right: 0.36rem;
}
.section-tab > div:last-child {
  margin-right: 0;
}
.tab-content .child-tab li {
  max-width: 33%;
}
.child-info {
  overflow: hidden;
  margin-bottom: 0.2rem;
}
.child-info p {
  line-height: 0.4rem;
  font-size: 0.24rem;
  color: #666;
  padding-left: 0.6rem;
  text-align: left;
}
.tab-content .child-tab li.active {
  border: 0;
}
.pw-left {
  width: 50%;
  float: left;
}
.price-wrap {
  padding-bottom: 0.4rem;
  overflow: hidden;
  padding-left: 0.6rem;
}
.tab-content .price-wrap .price {
  line-height: normal;
  margin-bottom: 0;
  text-align: left;
  margin-top: -4px;
}
.pw-left p {
  color: #f8823d;
  font-size: 0.24rem;
  line-height: normal;
  text-align: left;
}
.pw-right {
  float: right;
  width: auto;
}
.tab-content .icon {
  display: inline-block;
  width: 15px;
  height: 14px;
  vertical-align: -2px;
  margin-right: 5px;
  background-image: url('https://www.eb.com.cn/template/Home/Default/PC/Static/img/VirtualHost.png');
}
.gift-icon {
  background-position: -189px -739px;
}
body .room-top img {
    width: 1rem;
    height: 1rem;
    display: inline-block;
}
.room-bottom .room-btn{
    font-size: 0.24rem;
    margin-top: 0.2rem;
    border-radius: 5px;
}
</style>
<script>
import mobileHeader from '../components/mobileHeader.vue'
export default {
  components: {
    mobileHeader
  },
  mounted() {
    $(function() {
        var arr = ['mySwiper_1', 'mySwiper_2', 'mySwiper_3'];
		$('.tab-ul li').on('click', function () {
			if ($(this).hasClass('active')) {
				return false;
			}
			var index = $(this).index();
			$('.zj-content').hide();
			$('.tab-ul li').removeClass('active');
			$(this).addClass('active');
			$('.zj-content').eq(index).show();
			if (index == 2) {
				arr[0] = new Swiper('.tg-room-1 .swiper-container', {
					loop: true,
					pagination: '.swiper-pagination',
					paginationClickable: true,
					prevButton: '.swiper-button-prev1',
					nextButton: '.swiper-button-next1',
					autoPlay: 1000
				});
				arr[1] = new Swiper('.tg-room-2 .swiper-container', {
					loop: true,
					pagination: '.swiper-pagination',
					paginationClickable: true,
					prevButton: '.swiper-button-prev2',
					nextButton: '.swiper-button-next2',
					autoPlay: 1000
				});
				arr[2] = new Swiper('.tg-room-3 .swiper-container', {
					loop: true,
					pagination: '.swiper-pagination',
					paginationClickable: true,
					prevButton: '.swiper-button-prev3',
					nextButton: '.swiper-button-next3',
					autoPlay: 1000
				});
			}
		})
		$('.tg-tab').on('click', 'li', function () {
			if ($(this).hasClass('active')) {
				return false;
			}
			var n = $(this).index();
			$('.tg-tab li').removeClass('active');
			$(this).addClass('active');
			$('.tg-room-swiper').hide();
			$('.tg-room-swiper').eq(n).show();
			arr[n].update()
		})
      var mySwiper4 = new Swiper('.swiper-container', {
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        prevButton: '.swiper-button-prev1',
        nextButton: '.swiper-button-next1',
        autoPlay: 4000
      })
      $('.section-tab div').on('click', function() {
        var _class = $(this).attr('class')
        var id = $(this).attr('data-id')
        if (_class.indexOf('active') !== -1) {
          return false
        }
        $(this)
          .addClass('active')
          .siblings()
          .removeClass('active')
        $('.tab-content').addClass('hide')
        $('#' + id).removeClass('hide')
      })
      $('.child-tab li').on('click', function() {
        var _class = $(this).attr('class')
        if (_class.indexOf('active') !== -1) {
          return false
        }
        $(this)
          .addClass('active')
          .siblings()
          .removeClass('active')
        var _id = $(this).attr('data-id')
        var _parent = $(this)
          .parent()
          .parent()
        _parent.find('.child-content-wrap').addClass('hide')
        _parent
          .find('.child-content-wrap[data-id="' + _id + '"]')
          .removeClass('hide')
      })
    })
  }
}
</script>

