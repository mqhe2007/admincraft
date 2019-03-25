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

// 自动加载全局组件
const requireComponent = require.context(
  './global-components',
  true,
  /index+\.(vue|js)$/
)
requireComponent.keys().forEach(fileName => {
  requireComponent(fileName)
})

let Admincraft = (options = { title: '', logo: {}, modules: [], http: {} }) => {
  Vue.use(Meta)
  let router = new Router()
  let store = new Store()
  // 保存实例化配置
  store.commit('instance/setOptions', options)
  // 在所有组件内守卫和异步路由组件被解析之后，在导航被确认之前调用。
  router.beforeResolve((to, from, next) => {
    // console.log(to)
    if (to.matched.length > 0) return next()
  })

  Vue.prototype.$addRoutes = new AddRoutes(router, store)
  Vue.prototype.$addStore = new AddStore(store)
  Vue.prototype.$addMenus = new AddMenus(store)
  Vue.prototype.$addDynamicComponent = new AddDynamicComponent(store).add
  Vue.prototype.$removeDynamicComponent = new AddDynamicComponent(store).remove
  Vue.prototype.$http = new Http(options.http)
  // Vue.prototype.$addConst = new AddConst(Vue)
  Vue.prototype.$addRemoteLib = new AddRemoteLib()
  Vue.prototype.$modifyHomepage = (routeName, cb) => {
    store.commit('instance/setHomeRouteName', routeName)
    if (cb && typeof cb === 'function') cb()
  }
  // 自定义指令
  customDirective(Vue, store)


  if (options.modules) {
    options.modules.forEach(module => {
      module(Vue)
    })
  }
  // 创建Vue实例
  return new Vue({
    router,
    store,
    render: h => h(App)
  })
}
Admincraft.use = p => Vue.use(p)

export default Admincraft
