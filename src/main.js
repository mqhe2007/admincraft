import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App'
import Meta from 'vue-meta'
import AddMethods from './methods'
import router from './router'
import Store from './store'
import layoutDefault from './layout/Default.vue'
let addedModules = new Set()
class Admincraft {
  constructor(config) {
    Vue.component('layoutDefault', layoutDefault)
    Vue.use(Meta)
    this.context = {}
    this.context.Vue = Vue
    this.context.config = { http: {}, router: {}, ...config }
    this.context.router = router(VueRouter, this.context)
    this.context.store = Store(Vuex, this.context)
    this.context.store.commit('app/setConfig', this.context.config)
    AddMethods(this.context)
    for (const moduleInit of addedModules) {
      moduleInit(this.context)
    }
    return new this.context.Vue({
      router: this.context.router,
      store: this.context.store,
      render: h => h(App)
    })
  }
  static add(moduleInit) {
    addedModules.add(moduleInit)
  }
  static use(plugin, options) {
    Vue.use(plugin, options)
  }
}
export default Admincraft
