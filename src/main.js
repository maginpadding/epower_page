// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import scrollReveal from "./assets/js/scrollReveal.js";  //引入第三方插件，最后.js后缀可以不写
console.log(scrollReveal)
Vue.prototype.$scroll = scrollReveal;  //注册到Vue原型上，名字可以自己命名一个，别和已命名和Vue存在的冲突便可，我这儿随便命名了一个$scroll
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
