import Vue from 'vue'
import Router from 'vue-router'
import pcTradeInfo from '@/components/pc_trade_info'
import mobileTradeInfo from '@/components/mobile_trade_info'

import pcGwInfo from '@/components/pc_gw_info'
import mobileGwInfo from '@/components/mobile_gw_info'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'pcTradeInfo',
      component: pcTradeInfo
    }, {
      path: '/mobile',
      name: 'mobileTradeInfo',
      component: mobileTradeInfo
    },
    {
      path: '/gw',
      name: 'pcGwInfo',
      component: pcGwInfo
    }, {
      path: '/mobile_gw',
      name: 'mobileGwInfo',
      component: mobileGwInfo
    }
  ]
})
