<template>
    <div>
        <div class="cloud-server bg-fff clearfix">
            <div class="center-1200">
                <div class="home-title-line">
                    <span class="bg-fff">云服务器</span>
                    <p>不管你处于什么行业,我们提供快速、安全、稳定的云产品,助你轻松跨入 "互联网+" 时代</p>
                </div>
                <ul class="server-list">
                    <li class="bg-fff pd-20">
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
                                <div class="lh-32">
                                    <span class="color-666 font-14">宽带：</span>
                                    <span class="color-666 font-14">2M</span>
                                </div>
                                <div class="lh-32">
                                    <span class="color-666 font-14">系统盘：</span>
                                    <span class="color-666 font-14">免费赠送40G系统盘</span>
                                </div>
                                <div class="lh-32">
                                    <span class="color-666 font-14">网络防护：</span>
                                    <span class="color-666 font-14">免费20G防护</span>
                                </div>
                            </div>
                        </div>
                        <div class="cs-bottom">
                            <div class="cs-price color-red text-center">
                                <span class="num font-36 bold lh-36 color-red">138</span>
                                元/月
                            </div>
                            <a href="/server?type=rm" class="cs-btn text-center lh-42">立即购买</a>
                        </div>
                    </li>
                    <li class="bg-fff pd-20">
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
                                <div class="lh-32">
                                    <span class="color-666 font-14">宽带：</span>
                                    <span class="color-666 font-14">2M</span>
                                </div>
                                <div class="lh-32">
                                    <span class="color-666 font-14">系统盘：</span>
                                    <span class="color-666 font-14">免费赠送40G系统盘</span>
                                </div>
                                <div class="lh-32">
                                    <span class="color-666 font-14">网络防护：</span>
                                    <span class="color-666 font-14">免费20G防护</span>
                                </div>
                            </div>
                        </div>
                        <div class="cs-bottom">
                            <div class="cs-price color-red text-center">
                                <span class="num font-36 bold lh-36 color-red">253</span>
                                元/月
                            </div>
                            <a href="/server?type=bz" class="cs-btn text-center lh-42">立即购买</a>
                        </div>
                    </li>
                    <li class="bg-fff pd-20">
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
                                <div class="lh-32">
                                    <span class="color-666 font-14">宽带：</span>
                                    <span class="color-666 font-14">2M</span>
                                </div>
                                <div class="lh-32">
                                    <span class="color-666 font-14">系统盘：</span>
                                    <span class="color-666 font-14">免费赠送40G系统盘</span>
                                </div>
                                <div class="lh-32">
                                    <span class="color-666 font-14">网络防护：</span>
                                    <span class="color-666 font-14">免费20G防护</span>
                                </div>
                            </div>
                        </div>
                        <div class="cs-bottom">
                            <div class="cs-price color-red text-center">
                                <span class="num font-36 bold lh-36 color-red">387</span>
                                元/月
                            </div>
                            <a href="/server?type=gj" class="cs-btn text-center lh-42">立即购买</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
.cloud-server * {
  box-sizing: border-box;
}
.cloud-server {
  padding-bottom: 70px;
  box-sizing: border-box;
}
.server-list {
  display: flex;
}
.server-list > li:last-child {
  margin-right: 0;
}
.server-list > li {
  transition: all 0.1s;
  border: solid 1px #e6e6e6;
  flex: 1;
  width: 380px;
  height: 500px;
  margin-right: 30px;
  float: left;
  margin-right: 20px;
}
.server-list > li .cs-top {
  border-bottom: 1px solid #e6e6e6;
}
.server-list > li .cs-top .icon {
  width: 90px;
  height: 60px;
  display: block;
  margin: 0 auto;
  background-image: url('http://user.epower.cn/template/Home/Default/PC/Static/img/postOffice.png');
  background-size: 500px 600px;
  margin-top: 28px;
}
.server-list > li .cs-top p {
  margin-top: 10px;
  margin-bottom: 20px;
}
.server-list > li .cs-center .cs-info {
  margin-top: 30px;
  margin-bottom: 20px;
  display: flex;
}
.server-list > li .cs-center .cs-info div {
  flex: 1;
  height: 44px;
  border-right: solid 1px #e6e6e6;
}
.server-list > li .cs-center .cs-info div:last-child {
  border-right: none;
}
.server-list > li .cs-center .cs-info p {
  font-size: 20px;
  line-height: 24px;
}
.server-list > li .cs-center .cs-info span {
  line-height: 20px;
}
.server-list > li .cs-center .other-info {
  padding-left: 40px;
}
.server-list > li .cs-center .other-info div:nth-child(2) span:last-child,
.server-list > li .cs-center .other-info div:nth-child(3) span:last-child {
  color: #f8823d;
}
.server-list > li .cs-price {
  margin: 16px auto;
}
.server-list > li .cs-btn {
  width: 220px;
  height: 44px;
  border-radius: 5px;
  display: block;
  margin: 0 auto;
  text-decoration: none;
  color: #666666;
  background: #fff;
  border: solid 1px #e6e6e6;
}
.server-list > li:hover {
  margin-top: -10px;
  border-color: #e84047;
  box-shadow: 0 0 5px 5px rgba(212, 142, 145, 0.15);
}
.server-list > li:first-child .icon {
  background-position: -234px -73px;
}
.server-list > li:first-child:hover .icon {
  background-position: -118px -73px;
}
.server-list > li:nth-child(2) .icon {
  background-position: -234px -143px;
}
.server-list > li:nth-child(2):hover .icon {
  background-position: -115px -143px;
}
.server-list > li:last-child .icon {
  background-position: -234px -225px;
}
.server-list > li:last-child:hover .icon {
  background-position: -118px -225px;
}
.server-list > li:hover .cs-btn {
  background-color: #e84047;
  color: #fff;
  border: solid 1px #e84047;
}
.cloud-server li:last-child {
  margin-right: 0;
}
</style>