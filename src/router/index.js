import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
import welfare from '../views/welfare.vue'
import day from '../views/day.vue'
import ios from '../views/ios.vue'
import android from '../views/android.vue'
import web from '../views/web.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:'/welfare'
  },
 {
   path:"/welfare",
   name:"welfare",
   component:welfare
 },
 {
  path:"/web",
  name:"web",
  component:web
},
{
  path:"/android",
  name:"android",
  component:android
},
{
  path:"/ios",
  name:"ios",
  component:ios
},
{
  path:"/day",
  name:"day",
  component:day
},
]

const router = new VueRouter({
  routes
})

// 每次切换路由时 隐藏侧栏导航
router.beforeEach((to, from, next) => {
  store.commit('changeShow',false)
  if(from.path==="/welfare"){ //判断是否是welfare 如果是则保存滚动条位置
    const scrollY = document.documentElement.scrollTop
    store.commit('scroll',scrollY)
  }
  next()
})

export default router
