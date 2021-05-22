import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShow:false,
    scrollY:0,
    title:'',
    dataLists:{
      'welfare': '福利',
      'day': '每日推荐',
      'android': 'Andriod',
      'ios':  'IOS',
      'web': '前端',
    }
  },
  mutations: { //当侧栏导航出现时 禁止出现滚动条
    changeShow(state,payload){
      if(payload===true){
        document.body.style.overflow = "hidden"
      }else{
        document.body.style.overflow = "visible"
      }
      state.isShow = payload
  },
  changeTitle(state,payload){ //改变标题
    state.title = state.dataLists[payload]
  },
  scroll(state,payload){ //记录滚动条位置
    state.scrollY = payload
  }
  },
})
