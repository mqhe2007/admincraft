import Admincraft from '../src/main.js'
import admincraftUI from 'admincraft-ui'
import admincraftShowcase from 'admincraft-showcase'
Admincraft.add(admincraftUI)
Admincraft.add(admincraftShowcase)
let el = document.createElement('div')
document.body.appendChild(el)
let admincraft = new Admincraft({
  title: 'Admincraft Demo',
  logo: {
    image: '',
    text: ''
  },
  http: {
    config: {},
    interceptor: {
      response: {
        success: response => {
          // 判断业务状态结果
          if (true) {
            // 业务成功时直接返回服务器响应的数据
            return response.data
          } else {
            // 业务失败的情况
            admincraft.$eventBus.emit(
              'HTTP_ERROR',
              '业务失败：' + businessStatusCode
            )
            return Promise.reject(response.data)
          }
        },
        error: error => {
          if (error.response) {
            admincraft.$eventBus.emit(
              'HTTP_ERROR',
              '请求失败：' + response.status
            )
          } else if (error.request) {
            admincraft.$eventBus.emit('HTTP_ERROR', '请求无响应')
          } else {
            admincraft.$eventBus.emit(
              'HTTP_ERROR',
              '请求触发了一个Error：',
              error.message
            )
          }
          return Promise.reject(error)
        }
      }
    }
  },
  router: {
    beforeResolve: (to, from, next) => {
      // console.log(to)
      next()
    }
  }
})
admincraft.$mount(el)
admincraft.$http('https://api.douban.com/v2/movie/search?q=张艺谋').then()
admincraft.$eventBus.on('HTTP_ERROR', data => {
  console.log('监听HTTP_ERROR', data)
})
