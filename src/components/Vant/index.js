import {NavBar,Icon,Lazyload,Tab,Tabs} from 'vant'
// 导出的对象含有install方法 当vue.use(Vant)时 统一执行内部的Vue.use()
export default {
  install(Vue){
    Vue.use(NavBar)
    Vue.use(Icon)
    Vue.use(Lazyload)
    Vue.use(Tab)
    Vue.use(Tabs)
  }
}