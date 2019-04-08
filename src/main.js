import Vue from 'vue'
import App from './App'
import Meta from 'vue-meta'
import moreDirective from './directive'
import moreMethods from './methods'
import Router from './router'
import Store from './store'
import layoutDefault from './layout/Default.vue'
const defaultOptions = {
  title: '',
  logo: {},
  modules: [],
  http: {},
  router: {}
}
let admincraftModuleSet = new Set()
class Admincraft extends Vue {
  constructor(options) {
    const instanceOptions = { ...defaultOptions, ...options }
    const router = Router(Vue, instanceOptions)
    const store = Store(Vue)
    store.commit('app/setOptions', instanceOptions)
    Vue.component('layoutDefault', layoutDefault)
    Vue.use(Meta)
    Vue.use(moreDirective, { store })
    Vue.use(moreMethods, { router, store, instanceOptions })
    for(const value of admincraftModuleSet) {
      Vue.use(value)
    }
    super({
      router,
      store,
      render: h => h(App)
    })
    if (instanceOptions.modules.length > 0) {
      instanceOptions.modules.forEach(module => {
        module(this)
      })
    }
  }
  static add(module) {
    admincraftModuleSet.add(module)
  }
}

export default Admincraft
