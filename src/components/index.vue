<template>
    <div>
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
                        <div class="sc-li fl active">商标服务</div>
                        <div class="sc-li fl">专利服务</div>
                        <div class="sc-li fl">工商财税</div>
                        <div class="sc-li fl">海量商标库</div>
                    </div>
                    <!-- 商标服务 -->
                    <div class="tab-content trade-service">
                        <div class="tc-left bg-common text-center clearfix fl">
                            <div class="tl-top lh-36 bg-common">
                                <div class="tl-title color-fff">商标注册</div>
                                <p class="tl-desc font-12 lh-24 color-fff mt-15">优质服务、快速高效专业人员审核资料，诚信可靠。</p>
                            </div>
                            <div class="tl-bot lh-36">
                                <div class="tl-title color-fff">商标服务</div>
                                <p class="tl-desc font-12 lh-24 color-fff mt-15">高性价比，极速办理，资质顾问，优质服务。</p>
                            </div>
                        </div>
                        <div class="tc-right bg-f5f6fb fl">
                            <!-- TODO -->
                            <div class="tr-li fl clearfix text-center bg-fff" v-for="item in items" :data-name="item.name">
                                <div class="tr-icon mt-40"></div>
                                <div class="tr-name lh-48 font-16 font-bold">{{item.name}}</div>
                                <div class="tr-btnn clearfix">
                                    <div class="fl font-20 lh-36 price color-e2383a">￥580</div>
                                    <div class="fr search font-14 lh-36 bg-common">
                                        <a :href="item.href" class=" color-666" target="_blank">立即查询</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 专利服务 -->
                    <div class="tab-content patent-service hide">
                        <div class="tc-left bg-common text-center clearfix fl">
                            <div class="tl-top lh-36 bg-common">
                                <div class="tl-title color-fff">专利服务</div>
                                <p class="tl-desc font-12 lh-24 color-fff mt-15">为您的发明保驾护航</p>
                            </div>
                            <div class="tl-bot lh-36">
                                <div class="tl-title color-fff">版权服务</div>
                                <p class="tl-desc font-12 lh-24 color-fff mt-15">登记发证，保护您的的创作</p>
                            </div>
                        </div>
                        <div class="tc-right bg-f5f6fb fl">
                            <div class="tr-li fl clearfix text-center bg-fff" v-for="item in patents" :data-name="item.name">
                                <div class="tr-icon mt-40"></div>
                                <div class="tr-name lh-48 font-16 font-bold">{{item.name}}</div>
                                <div class="tr-btnn clearfix">
                                    <div class="fl font-18 font-bold lh-36 price color-e2383a">￥580/件</div>
                                    <div class="fr search font-14 lh-36 bg-common">
                                        <a :href="item.href" target="_blank" class="color-666">
                                            立即办理
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 工商财税 -->
                    <div class="tab-content iact-service hide">
                        <div class="tc-left bg-common text-center clearfix fl">
                            <div class="tl-top">
                                <div class="tt-title bg-common"></div>
                                <div class="tt-desc font-16 color-fff lh-52">专业的团队，优质的服务</div>
                            </div>
                            <div class="tl-bot lh-36">
                                <div class="tl-title color-fff">省心</div>
                                <div class="tl-title color-fff">省力</div>
                                <div class="tl-title color-fff">省时</div>
                            </div>
                        </div>
                        <div class="tc-right bg-f5f6fb fl">
                            <div class="tr-li fl clearfix text-center bg-fff" v-for="item in iacts" :data-name="item.name">
                                <div class="tr-top clearfix">
                                    <div class="tr-icon fl"></div>
                                    <div class="tr-name lh-48 font-18 color-333 fl">{{item.name}}</div>
                                </div>
                                <div class="tr-center color-666 font-14 lh-24 text-left">
                                    主要面向中小型企业、私营、股份制等在京投资设立的办事机......
                                </div>
                                <div class="tr-btnn clearfix">
                                    <div class="fl font-20 lh-36 price color-e2383a">￥580</div>
                                    <a href="" target="_blank"><div class="fr detail font-14 lh-32">查看详情</div></a>
                                </div>
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
                                <div class="look-btn color-fff text-center">查看商标库</div>
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
                            <!-- <div class="swiper-pagenation"></div> -->
                            <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div>
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
                <div class="bg-block"><img src="../style/index/index_33.png" alt=""></div>
                <div class="bg-block"><img src="../style/index/index_33.png" alt=""></div>
                <div class="bg-block"><img src="../style/index/index_33.png" alt=""></div>
            </div>
        </div>
        <!-- 提交需求 -->
        <formCommit></formCommit>
    </div>
</template>


<script>
import section1 from '../components/section1'

import ziXun from '../components/zixun'
import formCommit from '../components/formCommit'
export default {
  components: { ziXun, formCommit, section1 },
  data: function() {
    return {
      items: [
        { name: '商标查询', href: '/trademark/search' },
        { name: '商标普通注册', href: '/trademark/form' },
        { name: '商标保姆注册', href: '/trademark/baomuIndex' },
        { name: '商标担保注册', href: '/trademark/danbao' },
        { name: '商标续展', href: '/trademark/services?remindinfo=xuzhan' },
        { name: '商标转让', href: '/trademark/services?remindinfo=zhuanrang' },
        { name: '商标变更', href: '/trademark/services?remindinfo=biangeng' },
        { name: '商标撤三申请', href: '/trademark/services?remindinfo=chexiao' }
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
        iacts:[
            {
                name:'代理记账'
            },
            {
                name:'公司注册'
            },
            {
                name:'社保代理'
            },
            {
                name:'网站建站'
            },
            {
                name:'高新企业认证'
            },
            {
                name:'代办ICP许可证'
            }
        ]
    }
  }
}
</script>

<style>
@import url('../style/css/global');
</style>

<style lang="less">
@import url('../style/less/index');
</style>
