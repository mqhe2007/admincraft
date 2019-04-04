import Vue from 'vue'
import App from './App'
import Meta from 'vue-meta'
import moreDirective from './core/directive'
import moreMethods from './core/methods/'
import Router from './core/router/'
import Store from './core/store/'
import uiInit from './ui/'
const defaultOptions = {
  title: '',
  logo: {},
  modules: [],
  hasUI: true,
  http: {},
  router: {}
}
class Admincraft extends Vue {
  constructor(options) {
    const instanceOptions = { ...defaultOptions, ...options }
    const router = Router(Vue, instanceOptions)
    const store = Store(Vue)
    store.commit('app/setOptions', instanceOptions)
    Vue.use(Meta)
    Vue.use(moreDirective, { store })
    Vue.use(moreMethods, { router, store, instanceOptions })
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
    if (instanceOptions.hasUI) {
      uiInit(this)
    }
  }
}

export default Admincraft
