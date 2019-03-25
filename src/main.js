import Vue from 'vue'
import App from './App.vue'
import Router from './router/'
import Store from './store/'
import Meta from 'vue-meta'
// 方法
import AddRoutes from './methods/AddRoutes'
import AddStore from './methods/AddStore'
import AddMenus from './methods/AddMenus'
import AddDynamicComponent from './methods/AddDynamicComponent'
// import AddConst from './methods/AddConst'
import AddRemoteLib from './methods/AddRemoteLib'
import Http from './methods/Http'

// 自定义指令
import customDirective from './custom-directive'
// 导入插件
import './plugins'
// iconfont
import './iconfont'
// 自动加载全局组件
const requireComponent = require.context(
  './global-components',
  true,
  /index+\.(vue|js)$/
)
requireComponent.keys().forEach(fileName => {
  requireComponent(fileName)
})
Vue.use(Meta)
let defaultOptions = { title: '', logo: {}, modules: [], http: {}, router: {} }
class Admincraft {
  constructor(options) {
    this.instanceOptions = { ...defaultOptions, ...options }
    this.router = new Router()
    this.store = new Store()
    this.store.commit('instance/setOptions', this.instanceOptions)
    Vue.prototype.$addRoutes = new AddRoutes(this.router, this.store)
    Vue.prototype.$addStore = new AddStore(this.store)
    Vue.prototype.$addMenus = new AddMenus(this.store)
    Vue.prototype.$addDynamicComponent = new AddDynamicComponent(this.store).add
    Vue.prototype.$removeDynamicComponent = new AddDynamicComponent(
      this.store
    ).remove
    Vue.prototype.$http = new Http(this.instanceOptions.http)
    Vue.prototype.$addRemoteLib = new AddRemoteLib()
    Vue.prototype.$modifyHomepage = (routeName, cb) => {
      this.store.commit('instance/setHomeRouteName', routeName)
      if (cb && typeof cb === 'function') cb()
    }
    // 自定义指令
    customDirective(Vue, this.store)

    if (this.instanceOptions.modules) {
      this.instanceOptions.modules.forEach(module => {
        module(Vue)
      })
    }

    this.router.beforeResolve((to, from, next) => {
      // console.log(to)
      if (to.matched.length > 0) {
        next()
      } else {
        next({ name: 'error' })
      }
    })

    // 创建Vue实例
    this.vue = new Vue({
      router: this.router,
      store: this.store,
      render: h => h(App)
    })
  }
  use(vuePlugin) {
    Vue.use(vuePlugin)
  }
}

export default Admincraft
