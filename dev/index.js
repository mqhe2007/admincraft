import Admincraft from '../src/main.js'
import admincraftShowcase from 'admincraft-showcase'
import admincraftUI from 'admincraft-ui'
Admincraft.add(admincraftUI)
Admincraft.add(admincraftShowcase)
let el = document.createElement('div')
document.body.appendChild(el)
let admincraft = new Admincraft({
  title: 'SHOWCASE',
  logo: {
    text: 'SHOWCASE'
  },
  http: {
    config: {},
    interceptor: {
      response: {
        success: response => {
          return response.data
        }
      }
    }
  },
  router: {
    config: {},
    guards: {
      beforeResolve: (to, from, next) => {
        next()
      }
    }
  }
})
admincraft.$mount(el)
