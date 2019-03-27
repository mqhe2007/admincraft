// 方法
import BScroll from 'better-scroll'
import addRoutes from './addRoutes'
import addStore from './addStore'
import addMenus from './addMenus'
import DynamicComponent from './DynamicComponent'
import addRemoteLib from './addRemoteLib'
import http from './http/'
import modifyHome from './modifyHome'
import eventBus from './eventBus'
import moduleLoader from './module-loader/'
export default (Vue, { router, store, instanceOptions }) => {
  Vue.prototype.$addRoutes = addRoutes(router, store)
  Vue.prototype.$addStore = addStore(store)
  Vue.prototype.$addMenus = addMenus(store)
  Vue.prototype.$http = http(instanceOptions.http, Vue.prototype.$eventBus)
  Vue.prototype.$modifyHome = modifyHome(store)
  Vue.prototype.$dynamicComponent = new DynamicComponent(store)
  Vue.prototype.$addRemoteLib = addRemoteLib
  Vue.prototype.$Scroll = BScroll
  Vue.prototype.$eventBus = eventBus
  Vue.prototype.$moduleLoader = moduleLoader
}
