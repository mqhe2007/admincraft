export default ({ request, response, message }/* 三个互斥参数,禁止同时出现。 */) => {
  if (request) {
    console.log('请求无响应。请求体：', request)
  } else if (response) {
    if (!response.data) {
      console.log(`请求响应${response.status};`)
    } else {
      console.log(`业务状态码${response.data.code}:${response.data.message}`)
    }
    
  } else if (message) {
    console.log('请求触发了一个Error：', message)
  }
  
}
