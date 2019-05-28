import Admincraft from '../src/main.js'
import admincraftShowcase from 'admincraft-showcase'
import admincraftUI from 'admincraft-ui'
Admincraft.add(admincraftUI)
Admincraft.add(admincraftShowcase)
let el = document.createElement('div')
document.body.appendChild(el)
let admincraft = new Admincraft({
  http: {
    config: {},
    interceptor: context => {
      return {
        response: {
          success: response => {
            return response.data
          }
        }
      }
    }
  },
  router: {
    config: {},
    guards: context => {
      return {
        beforeResolve: (to, from, next) => {
          next()
        }
      }
    }
  },
  theme: {
    title: 'SHOWCASE',
    logo: {
      text: 'SHOWCASE',
      image: ''
    }
  }
})
admincraft.$mount(el)
