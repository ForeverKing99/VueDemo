const axios = require('axios')
let cancelToken = axios.CancelToken //引入canceltoken构造函数
let pending = []; //声明一个数组用于存储每个请求的取消函数和axios标识

// 用于检查请求是否重复
function checkPending(config) {
  for (let item of pending) {
    if (item.key === config.params.type + config.params.page) {
      item.f()
    }
  }
}
export default function request(config) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: 'https://service-88w1t0h9-1303185100.sh.apigw.tencentcs.com/release/myserver/',
    timeout: 5000,
  });
  // 2.请求拦截
  instance.interceptors.request.use(config => {
    checkPending(config)
    config.cancelToken = new cancelToken(function executor(c) {
      pending.push({
        key: config.params.type + config.params.page,
        f: c
      });
    });
    return config
  }, err => {
  })
  // 3.响应拦截
  instance.interceptors.response.use(response => {
    const params = response.config.params
    for (let index in pending) {
      if (pending[index] === params.type + params.page) {
        pending.splice(index, 1)
        break;
      }
    }
    return response
  }, err => {
  })
  // 4.发送真正的网络请求
  return instance(config)
}
