<template>
    <div class="tab-content iact-service">
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
            <div class="tr-li fl clearfix text-center bg-fff" v-for="item in iacts" :data-name="item.name">
                <div class="tr-top clearfix">
                    <div class="tr-icon fl"></div>
                    <div class="tr-name lh-48 font-18 color-333 fl font-bold">{{item.name}}</div>
                </div>
                <div class="tr-center color-666 font-14 lh-24 text-left">
                    主要面向中小型企业、私营、股份制等在京投资设立的办事机......
                </div>
                <div class="tr-btnn clearfix">
                    <div class="fl font-20 lh-36 price color-e2383a">￥580</div>
                    <a href="item.href" target="_blank">
                        <div class="fr detail font-14 lh-32" :title="item.name">查看详情</div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
