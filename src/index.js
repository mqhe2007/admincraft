import VueApp from './core/VueApp'
import Router from './core/router/'
import Store from './core/store/'
const defaultOptions = {
  title: '',
  logo: {},
  modules: [],
  http: {},
  router: {}
}
class Admincraft {
  constructor(options) {
    const instanceOptions = { ...defaultOptions, ...options }
    const router = new Router(instanceOptions.router)
    const store = new Store()
    store.commit('app/setOptions', instanceOptions)
    const vueApp = new VueApp({ router, store, instanceOptions })
    if (instanceOptions.modules.length > 0) {
      instanceOptions.modules.forEach(module => {
        module(vueApp)
      })
    }
    router.replace(location.hash.replace('#/', ''))
    return vueApp
  }
  static use(vuePlugin) {
    VueApp.use(vuePlugin)
  }
}

export default Admincraft
