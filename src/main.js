import Vue from 'vue'
import App from './App'
import Meta from 'vue-meta'
import moreDirective from './directive'
import moreMethods from './methods'
import Router from './router'
import Store from './store'
import layoutDefault from './layout/Default.vue'
let admincraftModuleSet = new Set()
class Admincraft {
  constructor(options) {
    this.context = {}
    this.context.config = options
    this.context.Vue = Vue
    this.context.router = Router(this.context)
    this.context.store = Store(this.context)
    this.context.store.commit('app/setOptions', this.context.config)
    this.context.Vue.component('layoutDefault', layoutDefault)
    this.context.Vue.use(Meta)
    this.context.Vue.use(moreDirective, this.context)
    moreMethods(this.context)
    for (const admincraftModule of admincraftModuleSet) {
      admincraftModule(this.context)
    }
    return new Vue({
      router: this.context.router,
      store: this.context.store,
      render: h => h(App)
    })
  }
  static add(admincraftModule) {
    admincraftModuleSet.add(admincraftModule)
  }
  static use(plugin, options) {
    Vue.use(plugin, options)
  }
}
export default Admincraft
