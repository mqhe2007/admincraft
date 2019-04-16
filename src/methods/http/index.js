import axios from 'axios'

export default http => {
  let instance = axios.create(http.config)
  if (http.interceptor) {
    instance.interceptors.request.use(
      http.interceptor.request && http.interceptor.request.success,
      http.interceptor.request && http.interceptor.request.error
    )
    instance.interceptors.response.use(
      http.interceptor.response && http.interceptor.response.success,
      http.interceptor.response && http.interceptor.response.error
    )
  }
  return instance
}
