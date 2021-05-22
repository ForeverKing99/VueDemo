import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from './components/Vant/index'
import './common/css/myVant.less'
import './common/font/iconfont.css'
Vue.use(Vant) //使用Vant
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
