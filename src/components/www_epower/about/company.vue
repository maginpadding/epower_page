<template>
    <div>
        <div class="company_bottom">
            <!-- 证书 -->
            <div class="zs">
                <div class="company_title">证书</div>
                <ul class="list">
                    <li v-for="(item,index) in zs">
                        <div class="img_wrap">
                            <a :href="'http://www.epower.cn/template/Home/Default/PC/Static/epower/images/company/'+(index+1)+'.jpg'" data-lightbox="img-license">
                                <img v-bind:src="'http://www.epower.cn/template/Home/Default/PC/Static/epower/images/company/'+item.src" alt="">
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
                    <li v-for="(item,index) in zizhi">
                        <div class="img_wrap">
                            <a :href="'http://www.epower.cn/template/Home/Default/PC/Static/epower/images/company/'+(index+4)+'.jpg'" data-lightbox="img-license">
                                <img v-bind:src="'http://www.epower.cn/template/Home/Default/PC/Static/epower/images/company/'+item.src" alt="">
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
                    <li v-for="(item,index) in ry">
                        <div class="img_wrap">
                            <a :href="'http://www.epower.cn/template/Home/Default/PC/Static/epower/images/company/'+(index+19)+'.jpg'" data-lightbox="img-license">
                                <img v-bind:src="'http://www.epower.cn/template/Home/Default/PC/Static/epower/images/company/'+item.src" alt="">
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
      zs: [
        {
          src: 'zhengshu_03.jpg',
          text: 'ePower企服引擎系统',
          href: 'zhengshu_03.jpg'
        },
        {
          src: 'zhengshu_05.jpg',
          text: '电商互联用户业务管理软件',
          href: 'zhengshu_05.jpg'
        },
        {
          src: 'zhengshu_07.jpg',
          text: '电商互联商标查询数据库系统',
          href: 'zhengshu_07.jpg'
        }
      ],
      zizhi: [
        {
          src: 'zhengshu_13.jpg',
          text: '2017年度—.网址 域名注册服务机构',
          href: 'zhengshu_13.jpg'
        },
        {
          src: 'zhengshu_16.jpg',
          text: '2017年度—中网授权全国验证服务中心',
          href: 'zhengshu_16.jpg'
        },
        {
          src: 'zhengshu_18.jpg',
          text: '杭州市网络安全协会-理事单位',
          href: 'zhengshu_18.jpg'
        },
        {
          src: 'zhengshu_23.jpg',
          text: '中国域名体系IPV6升级改造项目-共建单位',
          href: 'zhengshu_23.jpg'
        },
        {
          src: 'zhengshu_25.jpg',
          text: '城市生活数字信息平台-应用示范单位',
          href: 'zhengshu_25.jpg'
        },
        {
          src: 'zhengshu_26.jpg',
          text: '杭州市大学生见习训练—见习基地',
          href: 'zhengshu_26.jpg'
        },
        {
          src: 'zhengshu_32.jpg',
          text: '2014年度—认证CA服务器证书合作伙伴',
          href: 'zhengshu_32.jpg'
        },
        {
          src: 'zhengshu_34.jpg',
          text: '2014年度—认证域名注册服务机构',
          href: 'zhengshu_34.jpg'
        },
        {
          src: 'zhengshu_30.jpg',
          text: '2013年度—认证域名注册服务机构',
          href: 'zhengshu_30.jpg'
        },
        {
          src: 'zhengshu_39.jpg',
          text: '2012年度—认证中文域名注册服务机构',
          href: 'zhengshu_39.jpg'
        },
        {
          src: 'zhengshu_41.jpg',
          text: '2012年度—认证CN域名注册服务机构',
          href: 'zhengshu_41.jpg'
        },
        {
          src: 'zhengshu_42.jpg',
          text: '2011年度—认证CN域名注册服务机构',
          href: 'zhengshu_42.jpg'
        },
        {
          src: 'zhengshu_46.jpg',
          text: '2011年度—认证中文域名注册服务机构',
          href: 'zhengshu_46.jpg'
        },
        {
          src: 'zhengshu_47.jpg',
          text: '2010年度—认证CN域名注册服务机构',
          href: 'zhengshu_47.jpg'
        },
        {
          src: 'zhengshu_48.jpg',
          text: '2010年度—通用网址注册服务机构',
          href: 'zhengshu_48.jpg'
        }
      ],
      ry: [
        {
          src: 'zhengshu_52.jpg',
          text: '2017年度—CNNIC五星级注册服务机构',
          href: 'zhengshu_52.jpg'
        },
        {
          src: 'zhengshu_53.jpg',
          text: '2014年度—杭州电子商务优秀企业',
          href: 'zhengshu_53.jpg'
        },
        {
          src: 'zhengshu_55.jpg',
          text: '2014年度—优秀电子商务统计单位',
          href: 'zhengshu_55.jpg'
        },
        {
          src: 'zhengshu_62.jpg',
          text: '2009-2010年度—最受站长欢迎的IDC服务商',
          href: 'zhengshu_62.jpg'
        },
        {
          src: 'zhengshu_64.jpg',
          text: '2008-2009年度—最受站长欢迎的域名服务商',
          href: 'zhengshu_64.jpg'
        },
        {
          src: 'zhengshu_57.jpg',
          text: '2008年度—中文域名最佳成长奖',
          href: 'zhengshu_57.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style: none;
}
.company_bottom {
  width: 982px;
  overflow: hidden;
  margin: 0 auto;
  background: #ffffff;
  padding: 0 42px;
  box-sizing: border-box;
  .company_title {
    color: #333;
    font-size: 24px;
    text-align: left;
    line-height: 100px;
  }
}
.company_bottom * {
  box-sizing: border-box;
}
.zizhi .list li:first-child img {
  height: 165px;
}
.zs {
  .list {
    overflow: hidden;
    li {
      float: left;
      height: auto;
      margin: 0 40px 20px 0;
      text-align: center;
      .img_wrap {
        border: solid 1px #e6e6e6;
        height: auto;
      }
      p {
        line-height: 48px;
        text-align: center;
        font-size: 12px;
        color: #333;
      }
      img {
        display: inline-block;
        width: auto;
        height: auto;
        margin: 15px 20px;
      }
    }
    li:nth-child(3n) {
      margin-right: 20px;
    }
  }
}
</style>
