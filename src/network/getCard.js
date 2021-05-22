import request from './request'
// 根据type参数获取数据(ios/web/android)
export function getCard(type){
  return request({
  params:{
    reqpath:"card",
    type
  }
})
}
