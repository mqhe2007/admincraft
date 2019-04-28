import axios from 'axios'

export default (context) => {
  const httpConfig = context.config.http
  let instance = axios.create(httpConfig && httpConfig.config)
  if (httpConfig && httpConfig.interceptor) {
    const interceptor = httpConfig.interceptor(context)
    instance.interceptors.request.use(
      interceptor.request && interceptor.request.success,
      interceptor.request && interceptor.request.error
    )
    instance.interceptors.response.use(
      interceptor.response && interceptor.response.success,
      interceptor.response && interceptor.response.error
    )
  }
  return instance
}
