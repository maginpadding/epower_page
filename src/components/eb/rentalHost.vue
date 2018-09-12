<template>
    <div>
        <div class="rental bg-f5 text-center box-size clearfix">
            <div class="center-1200">
                <div class="title pr">
                    <h3 class="color-666 font-32 lh-56 bg-f5 pr">租用托管</h3>
                    <p class="info color-999 font-14">六大数据中心任您选择，创新互联服务，重获网络基础</p>
                    <b class="title-line po"></b>
                </div>
                <div class="rental-tab top-nav">
                    <li class="tab-li lis show" data-id="host_lease">
                         主机租用
                    </li>
                    <li class="tab-li lis" data-id="hongKong_lease">
                         香港主机租用
                    </li>
                    <li class="tab-li lis" data-id="host_hosting">
                         主机托管
                    </li>
                </div>
                <!-- 写着头疼，直接抄了 -->
                <hostInfo></hostInfo>
                <!-- <div class="content"> -->
                    <!-- 主机租用 -->
                    <!-- <div id="host_lease" class="host-lease-type">
                        <ul class="host-lease-list">
                            <li class="host-lease-li">
                                <h4>超值商务型</h4>
                                <div class="host-lease-price">
                                    <b>799</b>
                                    <span>元/年</span>
                                </div>
                                <div class="host-lease-config">
                                    <p>处理器： 酷睿双核E6600</p>
                                    <p>内存：  DDR Ⅱ 2GB</p>
                                    <p>硬盘：  500G SATA</p>
                                    <p>机箱：  标准1U机架式</p>
                                    <p></p>
                                </div>
                            </li>
                        </ul>
                    </div> -->
                <!-- </div> -->
            </div>
        </div>
    </div>
</template>
<script>
import hostInfo from './host_info.vue';
export default {
    components:{
        hostInfo
    }
}
</script>

<style lang="less" scoped>
// 主机租用
.host-lease-list{
    display: flex;
}
// .host-lease-li{
//     flex: 1;
//     background: #ffffff;
//     border: solid 1px #e6e6e6;
//     height: 475px;
//     position: relative;
//     z-index: 10;
//     padding-top: 15px;
//     text-align: center;
//     h4{
//         line-height: 48px;
//         font-size: 22px;
//         color: #333333;
//     }
//     .host-lease-price{
//         width: 100px;
//         height: 100px;
//         margin: 0 auto;
//         border-radius: 50px;
//         border: solid 1px #e6e6e6;
//         text-align: center;
//         padding-top: 22px;
//         b{
//             color: #e2383a;
//             font-size: 24px;
//             display: block;
//             line-height: 28px;
//         }
//         span{
//             font-size: 12px;
//             color: #333333;
//             line-height: 22px;
//             display: block;
//         }
//     }
// }
// .host-lease-li:hover{
//     z-index: 100;
//     border-color: #ff8281;
//     box-shadow: 0 0 13px rgba(6, 0, 1, 0.14);
// }
.rental {
  padding-top: 48px;
}
.title h3 {
  display: inline-block;
  z-index: 100;
  padding: 0 25px;
}
.title-line {
  top: 50%;
  margin-top: -15px;
  left: 0;
  width: 100%;
  height: 1px;
  background: #d9d9d9;
  z-index: 10;
}
.info {
  line-height: 32px;
  margin-bottom: 25px;
}
.rental-tab{
    line-height: 50px;
    text-align: center;
    display: flex;
    // margin-bottom: 40px;
    .tab-li{
        flex: 1;
        background: #ffffff;
        border-right: solid 1px #e6e6e6;
        font-size: 16px;
        color: #333333;
        cursor: pointer;
    }
    .active,.show{
        background: #e2383a;
        color: #fff;
        border-right-color:#e2383a;
    }
    .tab-li:last-child.active{
        border-right: none;
    }
    .tab-li:last-child{
        border-right: none;
    }
}
</style>