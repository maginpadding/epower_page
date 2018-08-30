
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import glob from 'glob'

// import scrollReveal from "./assets/js/scrollReveal";  //引入第三方插件，最后.js后缀可以不写

// Vue.prototype.$scroll = scrollReveal;  //注册到Vue原型上，名字可以自己命名一个，别和已命名和Vue存在的冲突便可，我这儿随便命名了一个$scroll


//node版本的原因(?),安装提示内存溢出,暂时使用本地js
//本地js报错,暂时不知道哪里错了
//将node升级到8.11.4之后就可以安装成功了 2018年8月2日09:03:04

// import layer from 'vue-layer'
// Vue.prototype.$layer = layer(Vue);

// import layer from '../static/js/layer.js'

Vue.config.productionTip = false

//引入element组件
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

// Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
