import Vue from 'vue'
import Router from 'vue-router'
// import pcTradeInfo from '@/components/www_epower/info/pc_trade_info'
// import mobileTradeInfo from '@/components/www_epower/info/mobile_trade_info'

import pcGwInfo from '@/components/www_epower/info/pc_gw_info'
import mobileGwInfo from '@/components/www_epower/info/mobile_gw_info'

//做完的页面不再引入

// import cloudComputing from '@/components/user/yun/cloudComputing'

// import mobileCloud from '@/components/user/yun/mobile_cloud'

// 首页改版--暂时注释掉

// import index from '@/components/user/index/index'
// import mobileIndex from '@/components/user/index/mobileIndex'



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/trade',
    //   name: 'pcTradeInfo',
    //   component: pcTradeInfo
    // }, {
    //   path: '/trade/m',
    //   name: 'mobileTradeInfo',
    //   component: mobileTradeInfo
    // },
    {
      path: '/gw',
      name: 'pcGwInfo',
      component: pcGwInfo
    }, {
      path: '/gw/m',
      name: 'mobileGwInfo',
      component: mobileGwInfo
    },
    //  {
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
    // }
  ]
})
