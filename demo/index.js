import Admincraft from '../src/'
import init from './init'
let el = document.createElement('div')
document.body.appendChild(el)

let admincraft = new Admincraft({
  title: 'admincraft',
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
      if (to.matched.length > 0) {
        next()
      }
    }
  }
})
admincraft.$mount(el)
