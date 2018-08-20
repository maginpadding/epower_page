<template>
    <div>
        <div class="cloud-server bg-f5 clearfix pd-20">
                <div class="section-title-line">
                    <span class="section-title-span bg-f5">云服务器</span>
                </div>
                <ul class="server-list">
                    <li class="bg-fff">
                        <div class="cs-top clearfix">
                            <i class="icon"></i>
                            <p class="font-24 lh-42 text-center">标准型</p>
                        </div>
                        <div class="cs-center clearfix">
                            <div class="cs-info clearfix">
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
                            </div>
                            <div class="other-info">
                                <div>
                                    <span class="color-666">宽带：</span>
                                    <span class="color-666">2M</span>
                                </div>
                                <div>
                                    <span class="color-666">系统盘：</span>
                                    <span class="color-666">免费赠送30G系统盘</span>
                                </div>
                                <div>
                                    <span class="color-666">网络防护：</span>
                                    <span class="color-666">免费20G防护</span>
                                </div>
                            </div>
                        </div>
                        <div class="cs-bottom">
                            <div class="cs-price color-red text-center">
                                <span class="num font-36 bold lh-36">104</span>
                                元/月
                            </div>
                            <a href="" class="cs-btn text-center lh-42">立即购买</a>
                        </div>
                    </li>
                    <li class="bg-fff" v-show="false">
                        <div class="cs-top clearfix">
                            <i class="icon"></i>
                            <p class="font-24 lh-42 text-center">标准型</p>
                        </div>
                        <div class="cs-center clearfix">
                            <div class="cs-info clearfix">
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
                            </div>
                            <div class="other-info">
                                <div>
                                    <span class="color-666">宽带：</span>
                                    <span class="color-666">2M</span>
                                </div>
                                <div>
                                    <span class="color-666">系统盘：</span>
                                    <span class="color-666">免费赠送30G系统盘</span>
                                </div>
                                <div>
                                    <span class="color-666">网络防护：</span>
                                    <span class="color-666">免费20G防护</span>
                                </div>
                            </div>
                        </div>
                        <div class="cs-bottom">
                            <div class="cs-price color-red text-center">
                                <span class="num font-36 bold lh-36">104</span>
                                元/月
                            </div>
                            <a href="" class="cs-btn text-center lh-42">立即购买</a>
                        </div>
                    </li>
                    <li class="bg-fff" v-show="false">
                        <div class="cs-top clearfix">
                            <i class="icon"></i>
                            <p class="font-24 lh-42 text-center">标准型</p>
                        </div>
                        <div class="cs-center clearfix">
                            <div class="cs-info clearfix">
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
                            </div>
                            <div class="other-info">
                                <div>
                                    <span class="color-666">宽带：</span>
                                    <span class="color-666">2M</span>
                                </div>
                                <div>
                                    <span class="color-666">系统盘：</span>
                                    <span class="color-666">免费赠送30G系统盘</span>
                                </div>
                                <div>
                                    <span class="color-666">网络防护：</span>
                                    <span class="color-666">免费20G防护</span>
                                </div>
                            </div>
                        </div>
                        <div class="cs-bottom">
                            <div class="cs-price color-red text-center">
                                <span class="num font-36 bold lh-36">104</span>
                                元/月
                            </div>
                            <a href="" class="cs-btn text-center lh-42">立即购买</a>
                        </div>
                    </li>
                </ul>
        </div>
        <!-- <hostList></hostList> -->
    </div>
</template>
<style lang="less" scoped>
.cloud-server * {
  box-sizing: border-box;
}
.cloud-server {
  padding-bottom: 0.7rem;
  box-sizing: border-box;
}
.server-list > li {
  transition: all 0.1s;
  border: solid 1px #e6e6e6;
  margin: 0 auto;
  width: 5.3rem;
  padding: 0 0.4rem;
  padding-bottom: 0.2rem;
  .cs-top {
    border-bottom: 0.01rem solid #e6e6e6;
    .icon {
      width: 0.9rem;
      height: 0.6rem;
      display: block;
      margin: 0 auto;
      background-image: url('../../../style/single/postOffice.png');
      background-size: 5rem 6rem;
      margin-top: 0.28rem;
    }
    p {
      margin-top: 0.1rem;
      margin-bottom: 0.2rem;
    }
  }
  .cs-center {
    .cs-info {
      margin-top: 0.2rem;
      margin-bottom: 0.2rem;
      display: flex;
      div {
        flex: 1;
        border-right: solid 0.01rem #e6e6e6;
      }
      div:last-child {
        border-right: none;
      }
      p {
        font-size: 0.24rem;
        line-height: 0.24rem;
      }
      span {
        line-height: 0.2rem;
        font-size: 0.24rem;
      }
    }
    .other-info {
      div {
        line-height: normal;
        span {
          font-size: 0.24rem;
        }
      }
      div:nth-child(2) span:last-child,
      div:nth-child(3) span:last-child {
        color: #f8823d;
      }
    }
  }
  .cs-price {
    margin: 0.16rem auto;
  }
  .cs-btn {
    width: 2.2rem;
    height: 0.64rem;
    line-height: 0.6rem;
    border-radius: 0.05rem;
    display: block;
    margin: 0 auto;
    text-decoration: none;
    color: #fff;
    background: #e84047;
    border: solid 1px #e84047;
    font-size: 0.28rem;
  }
}
.server-list > li:first-child .icon {
  background-position: -1.18rem -0.73rem;
}
.server-list > li:nth-child(2) .icon {
  background-position: -1.15rem -1.43rem;
}
.server-list > li:last-child .icon {
  background-position: -1.18rem -2.25rem;
}
</style>

