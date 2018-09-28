import Vue from 'vue'
import Router from 'vue-router'

// import pcTradeInfo from '@/components/www_epower/info/pc_trade_info'
// import mobileTradeInfo from '@/components/www_epower/info/mobile_trade_info'

// // 官网建站介绍
import pcGwInfo from '@/page/pc_gw_info'
import mobileGwInfo from '@/page/m_gw_info'

//付款页面
import pay from '@/page/pay'
import mobilePay from '@/page/mobilePay'
// //快速注册
// import registe from '@/components/www_epower/info/registe'

// //以及做完的页面不再引入

// import cloudComputing from '@/components/user/yun/cloudComputing'

// import mobileCloud from '@/components/user/yun/mobile_cloud'

// // 首页改版
// import index from '@/components/user/index/index'
// import mobileIndex from '@/components/user/index/mobileIndex'
// // 官网资质证书页面

// import company from '@/components/www_epower/about/company'
// import server from '@/components/www_epower/center/server'
// //运营赋能
// import funeng from '@/components/www_epower/funeng/funeng'
// import mobileFuneng from '@/components/www_epower/funeng/mobileFuneng'


// //测试页面
// import form from '@/components/user/form/form'

// //页面总路由
// import url from '@/components/url'


// import midAutumn from '@/page/huodong'

//EB云计算 
// import ebYun from '@/components/eb/yun'
// import ebCloud from '@/page/ebCloud'
// import mobile_cloud from '@/page/mobile_cloud'

Vue.use(Router)
//使用历史模式需要后台支持--不用路由,使用切换
export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/ebCloud',
    //   name: 'ebCloud',
    //   component: ebCloud
    // },
    // {
    //   path: '/ebCloud/m',
    //   name: 'mobile_cloud',
    //   component: mobile_cloud
    // },
    //  {
    //   path: '/midAutumn',
    //   name: 'midAutumn',
    //   component: midAutumn
    // }, {
    //   path: '/',
    //   name: 'url',
    //   component: url
    // }, {
    //   path: '/trade',
    //   name: 'pcTradeInfo',
    //   component: pcTradeInfo
    // }, {
    //   path: '/trade/m',
    //   name: 'mobileTradeInfo',
    //   component: mobileTradeInfo
    // },
    {
      path: '/jianzhan',
      name: 'pcGwInfo',
      component: pcGwInfo
    },
    {
      path: '/jianzhan/m',
      name: 'mobileGwInfo',
      component: mobileGwInfo
    },
    {
      path: '/pay',
      name: 'pay',
      component: pay
    },
    {
      path: '/pay/m',
      name: 'mobilePay',
      component: mobilePay
    },
    // {
    //   path: '/form',
    //   name: 'form',
    //   component: form
    // },

    // {
    //   path: '/company',
    //   name: 'company',
    //   component: company
    // },
    // {
    //   path: '/server',
    //   name: 'server',
    //   component: server
    // },

    // {
    //   path: '/cloud',
    //   name: 'cloudComputing',
    //   component: cloudComputing
    // }, {
    //   path: '/cloud/m',
    //   name: 'cloudComputing',
    //   component: mobileCloud
    // },
    // {
    //   path: '/index',
    //   name: 'index',
    //   component: index
    // },
    // {
    //   path: '/index/m',
    //   name: 'mobileIndex',
    //   component: mobileIndex
    // },
    // {
    //   path: '/registe',
    //   name: 'registe',
    //   component: registe
    // }, {
    //   path: '/funeng',
    //   name: 'funeng',
    //   component: funeng
    // }, {
    //   path: '/funeng/m',
    //   name: 'mobileFuneng',
    //   component: mobileFuneng
    // }, {
    //   path: '/funeng/m',
    //   name: 'mobileFuneng',
    //   component: mobileFuneng
    // }
  ]
})
