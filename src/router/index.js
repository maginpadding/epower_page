import Vue from 'vue'
import Router from 'vue-router'
// import pcTradeInfo from '@/components/pc_trade_info'
// import mobileTradeInfo from '@/components/mobile_trade_info'

import pcGwInfo from '@/components/pc_gw_info'
import mobileGwInfo from '@/components/mobile_gw_info'

//以及做完的页面不再引入

// import cloudComputing from '@/components/cloudComputing'

// import mobileCloud from '@/components/mobile_cloud'

// 首页改版
import index from '@/components/index'



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'pcTradeInfo',
    //   component: pcTradeInfo
    // }, {
    //   path: '/mobile',
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
    {
      path: '/index',
      name: 'index',
      component: index
    }
  ]
})
