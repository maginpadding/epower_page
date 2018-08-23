<template>
    <div>
        <div class="company_bottom">
            <!-- 证书 -->
            <div class="zs">
                <div class="company_title">证书</div>
                <ul class="list">
                    <li v-for="item in zs">
                        <div class="img_wrap">
                            <a :href="item.src" data-lightbox="img-license" class="text-stress">
                                <img v-bind:src="item.src" alt="">
	                        </a>
                        </div>
                        <p>{{item.text}}</p>
                    </li>
                </ul>
            </div>
            <!-- 资质 -->
            <div class="zs zizhi">
                <div class="company_title">资质</div>
                <ul class="list">
                    <li v-for="item in zizhi">
                         <div class="img_wrap">
                            <a :href="item.src" data-lightbox="img-license" class="text-stress">
                                <img v-bind:src="item.src" alt="">
	                        </a>
                        </div>
                        <p>{{item.text}}</p>
                    </li>
                </ul>
            </div>
              <!-- 荣誉 -->
            <div class="zs">
                <div class="company_title">荣誉</div>
                <ul class="list">
                    <li v-for="item in ry">
                         <div class="img_wrap">
                            <a :href="item.src" data-lightbox="img-license" class="text-stress">
                                <img v-bind:src="item.src" alt="">
	                        </a>
                        </div>
                        <p>{{item.text}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
        zs:[
            {
                src:"../../../style/single/zhengshu_03.jpg",
                text:"ePower企服引擎系统",
            },
             {
                src:"../../../style/single/zhengshu_05.jpg",
                text:"电商互联用户业务管理软件",
            },
             {
                src:"../../../style/single/zhengshu_07.jpg",
                text:"电商互联商标查询数据库系统",
            },
        ],
        zizhi:[
             {
                src:"../../../style/single/zhengshu_13.jpg",
                text:"2017年度—.网址 域名注册服务机构",
            },
             {
                src:"../../../style/single/zhengshu_16.jpg",
                text:"2017年度—中网授权全国验证服务中心",
            },
             {
                src:"../../../style/single/zhengshu_18.jpg",
                text:"电商互联商标查询数据库系统",
            },
             {
                src:"../../../style/single/zhengshu_23.jpg",
                text:"中国域名体系IPV6升级改造项目-共建单位",
            },
             {
                src:"../../../style/single/zhengshu_25.jpg",
                text:"城市生活数字信息平台-应用示范单位",
            }, {
                src:"../../../style/single/zhengshu_26.jpg",
                text:"杭州市大学生见习训练—见习基地",
            }, {
                src:"../../../style/single/zhengshu_32.jpg",
                text:"2014年度—认证CA服务器证书合作伙伴",
            }, {
                src:"../../../style/single/zhengshu_34.jpg",
                text:"电商互联商标查询数据库系统",
            }, {
                src:"../../../style/single/zhengshu_30.jpg",
                text:"2014年度—认证域名注册服务机构",
            }, {
                src:"../../../style/single/zhengshu_39.jpg",
                text:"2012年度—认证中文域名注册服务机构",
            }, {
                src:"../../../style/single/zhengshu_41.jpg",
                text:"2012年度—认证CN域名注册服务机构",
            }, {
                src:"../../../style/single/zhengshu_42.jpg",
                text:"2011年度—认证CN域名注册服务机构",
            }, {
                src:"../../../style/single/zhengshu_46.jpg",
                text:"2011年度—认证中文域名注册服务机构",
            }, {
                src:"../../../style/single/zhengshu_47.jpg",
                text:"2010年度—认证CN域名注册服务机构",
            }, {
                src:"../../../style/single/zhengshu_48.jpg",
                text:"2010年度—通用网址注册服务机构",
            },
        ],
        ry:[
            {
                src:"../../../style/single/zhengshu_52.jpg",
                text:"2017年度—CNNIC五星级注册服务机构",
            },
            {
                src:"../../../style/single/zhengshu_53.jpg",
                text:"2014年度—杭州电子商务优秀企业",
            },
             {
                src:"../../../style/single/zhengshu_55.jpg",
                text:"2014年度—优秀电子商务统计单位",
            },{
                src:"../../../style/single/zhengshu_62.jpg",
                text:"2009-2010年度—最受站长欢迎的IDC服务商",
            },
             {
                src:"../../../style/single/zhengshu_64.jpg",
                text:"2008-2009年度—最受站长欢迎的域名服务商",
            },
             {
                src:"../../../style/single/zhengshu_57.jpg",
                text:"2008年度—中文域名最佳成长奖",
            }
        ],
    }
  },
}
</script>

<style lang="less">
    *{
        margin: 0;padding: 0;
    }
    ul,li{
        list-style: none;
    }
    .company_bottom{
        width: 982px;
        overflow: hidden;
        margin: 0 auto;
        background: #ffffff;
        padding: 0 42px;
        box-sizing: border-box;
        .company_title{
            color: #333;
            font-size: 24px;
            text-align: left;
            line-height: 100px;
        }
    }
    .company_bottom *{
        box-sizing: border-box;
    }
    .zizhi .list li:first-child img{
        height: 165px;
    }
    .zs{
        .list{
            overflow: hidden;
            li{
                float: left;
                height: auto;
                margin: 0 40px 20px 0;
                text-align:center;
                .img_wrap{
                    border: solid 1px #e6e6e6;
                    height: auto;
                }
                p{
                    line-height: 48px;
                    text-align: center;
                    font-size: 12px;
                    color: #333;
                }
                img{
                      display: inline-block;
                    width: auto;
                    height: auto;
                        margin: 15px 20px;
                }
            }
            li:nth-child(3n){
                margin-right: 20px;
            }
        }
    }
</style>
