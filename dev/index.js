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
    factorOfSuccess: {
      key: 'ok',
      value: true
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
