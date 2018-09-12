<template>
    <div>
        <div id="whyChoose" class="bg-fff">
            <div class="center">
                <div class="home-title-line" style="margin-bottom: 30px;">
                    <span class="bg-fff">我们的优势</span>
                </div>
                <div class="logo text-center">
                    <ul>
                        <li>
                            <div class="img">
                                <div>
                                    <img src="http://user.epower.cn/template/Home/Default/PC/Static/img/whychoose-logo1.png" alt="">
                                </div>
                            </div>
                            <div class="describ">
                                <p>性能卓越</p>
                                <span class="font-12 color-999">先进的云计算技术架构以及高端硬件组</span>
                            </div>
                        </li>
                        <li>
                            <div class="img">
                                <div>
                                    <img src="http://user.epower.cn/template/Home/Default/PC/Static/img/whychoose-yun.png" alt="">
                                </div>
                            </div>
                            <div class="describ">
                                <p>安全稳固</p>
                                <span class="font-12 color-999">数据安全、网络安全、系统稳定</span>
                            </div>
                        </li>
                        <li>
                            <div class="img">
                                <div>
                                    <img src="http://user.epower.cn/template/Home/Default/PC/Static/img/cloud_06.png" alt="">
                                </div>
                            </div>
                            <div class="describ">
                                <p>按需购买 节约成本</p>
                                <span class="font-12 color-999">贴心的计费方式，为您节省每分钱</span>
                            </div>
                        </li>
                        <li>
                            <div class="img">
                                <div>
                                    <img src="http://user.epower.cn/template/Home/Default/PC/Static/img/cloud_07.png" alt="">
                                </div>
                            </div>
                            <div class="describ">
                                <p>故障赔付 </p>
                                <span class="font-12 color-999">1小时故障赔1天，1天陪1个月</span>
                            </div>
                        </li>
                        <li>
                            <div class="img">
                                <div>
                                    <img src="http://user.epower.cn/template/Home/Default/PC/Static/img/cloud_09.png" alt="">
                                </div>
                            </div>
                            <div class="describ">
                                <p>全天支持</p>
                                <span class="font-12 color-999">7×12小时服务支持</span>
                            </div>
                        </li>
                        <li>
                            <div class="img">
                                <div>
                                    <img src="http://user.epower.cn/template/Home/Default/PC/Static/img/cloud_10.png" alt="">
                                </div>
                            </div>
                            <div class="describ">
                                <p>4006-035-001</p>
                                <span class="font-12 color-999">售前/售后 专人解疑答惑</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
 #whyChoose .totle p {
	text-align: center;
	margin-top: 25px;
	color: #666;
	font-size: 16px;
	line-height: 28px
}
#whyChoose .title{
	text-align:center;position:relative;
}
#whyChoose .title-div{
	position:absolute;width:1200px;height:1px;left:0px;top:70px;border-top: 1px solid #e4e4e4;color:red;z-index:1;
}
#whyChoose .title-h1{
	display:inline-block;background:#f9f9f9;z-index:2;position:relative;padding-left:35px;padding-right:35px;
}
#whyChoose .logo {
	margin-top: 50px
}

#whyChoose .logo ul:after {
	content: "";
	display: block;
	clear: both
}

#whyChoose .logo ul li {
	float: left;
	width: 33.3333333%;
	height: 220px;
	position: relative;
	margin-bottom: 40px
}

#whyChoose .logo ul li .img {
	height: 130px;
	width: 130px;
	position: absolute;
	box-shadow: 0 0 12px #ccc;
	left: 0;
	border-radius: 50%;
	right: 0;
	margin: auto;
	transition: all 0.25s ease-in-out;
	-webkit-transform: translate3d(0,0,0);
	*position: static;
	*left: auto;
	*right: auto;
	*top: auto;
	*bottom: auto;
	*display: block
}

#whyChoose .logo ul li .img div {
	position: relative;
	width: 100%;
	height: 100%
}

#whyChoose .logo ul li .img:hover {
	box-shadow: 0 0 20px #bbb
}

#whyChoose .logo ul li img {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto
}

#whyChoose .logo ul li .describ {
	position: absolute;
	bottom: 30px;
	width: 100%
}

#whyChoose .logo ul li p {
	text-align: center;
	font-size: 16px;
    color: #333;
    line-height: 42px;
}
#whyChoose .logo ul li p {
    line-height: 32px;
}

</style>