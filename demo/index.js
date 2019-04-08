import Admincraft from '../src/main.js'
import init from './init'
let el = document.createElement('div')
document.body.appendChild(el)
let admincraft = new Admincraft({
  title: 'Admincraft Demo',
  logo: {
    image: '',
    text: ''
  },
  modules: [init],
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
