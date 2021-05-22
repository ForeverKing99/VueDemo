import request from './request'
// 获取首页福利图片数据
export function getGirls(type,page){
  return request({
  params:{
    reqpath:"data",
    type,
    page
  }
})
}
