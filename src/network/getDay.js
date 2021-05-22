import request from './request'
// 获取每日推荐的数据
export function getDay(){
  return request({
  params:{
    reqpath:"day",
  }
})
}
