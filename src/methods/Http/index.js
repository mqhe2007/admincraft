import Vue from 'vue'
import axios from 'axios'
// import errorHandler from './errorHandler'

export default (config = {}) => {
  if (config.factorOfSuccess) {
    if (!config.factorOfSuccess.key || !config.factorOfSuccess.value)
      throw new Error('factorOfSuccess必须配置key和value。')
  }
  let instance = axios.create(config)
  // 拦截器
  instance.interceptors.response.use(
    response => {
      // 判断业务状态结果
      let businessStatusResult = false
      let businessStatusCode =
        response.data[instance.defaults.factorOfSuccess.key]
      if (instance.defaults.factorOfSuccess) {
        businessStatusResult =
          businessStatusCode === instance.defaults.factorOfSuccess.value
      } else {
        businessStatusResult = response.data.code === 200
      }
      if (businessStatusResult) {
        // 业务成功时直接返回服务器响应的数据
        return response.data
        // errorHandler({ response })
      } else {
        // 业务失败的情况
        Vue.prototype.$eventBus.emit(
          'HTTP_ERROR',
          '业务失败：' + businessStatusCode
        )
        return Promise.reject(response.data)
      }
    },
    error => {
      if (error.response) {
        Vue.prototype.$eventBus.emit(
          'HTTP_ERROR',
          '请求失败：' + response.status
        )
        // errorHandler({ response: error.response })
      } else if (error.request) {
        Vue.prototype.$eventBus.emit('HTTP_ERROR', '请求无响应')
        // errorHandler({ request: error.request })
      } else {
        Vue.prototype.$eventBus.emit(
          'HTTP_ERROR',
          '请求触发了一个Error：',
          error.message
        )
        // errorHandler({ message: error.message })
      }
      return Promise.reject(error)
    }
  )
  return instance
}
