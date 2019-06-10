import axios from 'axios'
export default context => {
  const httpConfig = context.config.http
  const requestConfig = httpConfig ? httpConfig.config : {}
  for (let key in requestConfig) {
    axios.defaults[key] = requestConfig[key]
  }
  
  if (httpConfig && httpConfig.interceptor) {
    const interceptor = httpConfig.interceptor(context)
    axios.interceptors.request.use(
      interceptor.request && interceptor.request.success,
      interceptor.request && interceptor.request.error
    )
    axios.interceptors.response.use(
      interceptor.response && interceptor.response.success,
      interceptor.response && interceptor.response.error
    )
  }
  return axios
}
