import Admincraft from '../src/main'
import routes from './routes'
import menus from './menus'
let el = document.createElement('div')
document.body.appendChild(el)
let app = new Admincraft({
  title: 'admincraft',
  logo: {
    image: '',
    text: ''
  },
  modules: [],
  http: {
    factorOfSuccess: {
      key: 'ok',
      value: true
    }
  }
})
app.$addRoutes(routes)
app.$addMenus(menus)
app.$mount(el)
