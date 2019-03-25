import Vue from 'vue'
import axios from 'axios'
// import errorHandler from './errorHandler'

export default config => {
  if (!config.factorOfSuccess.key || !config.factorOfSuccess.value)
    throw new Error('factorOfSuccess必须配置。')
  let instance = axios.create(config)
  // 拦截器
  instance.interceptors.response.use(
    response => {
      // 业务失败的情况
      if (
        response.data[instance.defaults.factorOfSuccess.key] !==
        instance.defaults.factorOfSuccess.value
      ) {
        // errorHandler({ response })
        Vue.prototype.$eventBus.emit(
          'HTTP_ERROR',
          '业务失败：' + response.data.code
        )
        return Promise.reject(response.data)
      }
      // 业务成功时直接返回服务器响应的数据
      return response.data
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
