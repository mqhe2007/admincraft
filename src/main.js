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
  http: {},
  router: {}
}
let admincraftModuleSet = new Set()
class Admincraft extends Vue {
  constructor(options) {
    const context = { config: { ...defaultOptions, ...options } }
    context.router = Router(Vue, context)
    context.store = Store(Vue)
    context.store.commit('app/setOptions', context.config)
    Vue.component('layoutDefault', layoutDefault)
    Vue.use(Meta)
    Vue.use(moreDirective, context)
    Vue.use(moreMethods, context)
    super({
      router: context.router,
      store: context.store,
      render: h => h(App)
    })
    for (const value of admincraftModuleSet) {
      value(this, Vue)
    }
  }
  static add(module) {
    admincraftModuleSet.add(module)
  }
  static use(plugin, options) {
    Vue.use(plugin, options)
  }
}
export default Admincraft
