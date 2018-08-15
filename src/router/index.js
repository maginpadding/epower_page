import Vue from 'vue'
import Router from 'vue-router'
import pcTradeInfo from '@/components/pc_trade_info'
import mobileTradeInfo from '@/components/mobile_trade_info'

import pcGwInfo from '@/components/pc_gw_info'
import mobileGwInfo from '@/components/mobile_gw_info'

import cloudComputing from '@/components/cloudComputing'

import mobileCloud from '@/components/mobile_cloud'

// 协议
import xieYi from '@/components/xieyi'
import step1 from '@/components/step/step1'
import step2 from '@/components/step/step2'
import step3 from '@/components/step/step3'
import step4 from '@/components/step/step4'

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
      path: '/gw/m',
      name: 'mobileGwInfo',
      component: mobileGwInfo
    }, {
      path: '/cloud',
      name: 'cloudComputing',
      component: cloudComputing
    }, {
      path: '/cloud/m',
      name: 'cloudComputing',
      component: mobileCloud
    }, {
      path: '/xieYi',
      name: 'xieYi',
      component: xieYi
    }, {
      path: '/step1',
      name: 'step1',
      component: step1
    }, {
      path: '/step2',
      name: 'step2',
      component: step2
    }, {
      path: '/step3',
      name: 'step3',
      component: step3
    }, {
      path: '/step4',
      name: 'step4',
      component: step4
    }
  ]
})
