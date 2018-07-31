import Vue from 'vue'
import Router from 'vue-router'
import pcTradeInfo from '@/components/pc_trade_info'
import mobileTradeInfo from '@/components/mobile_trade_info'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pcTradeInfo',
      component: pcTradeInfo
    },{
        path: '/mobile',
        name: 'mobileTradeInfo',
        component: mobileTradeInfo
      }
  ]
})
