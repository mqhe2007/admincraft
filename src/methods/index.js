// 方法
import BScroll from 'better-scroll'
import addRoutes from './addRoutes'
import addStore from './addStore'
import addMenus from './addMenus'
import DynamicComponent from './DynamicComponent'
import http from './http/'
import modifyHome from './modifyHome'
import eventBus from './eventBus'
import moduleLoader from './module-loader'
import addLayout from './addLayout'
export default (Vue, { router, store, config }) => {
  Vue.prototype.$addRoutes = addRoutes(router, store)
  Vue.prototype.$addStore = addStore(store)
  Vue.prototype.$addMenus = addMenus(store)
  Vue.prototype.$eventBus = eventBus
  Vue.prototype.$http = http(config.http, Vue.prototype.$eventBus)
  Vue.prototype.$modifyHome = modifyHome(store)
  Vue.prototype.$dynamicComponent = new DynamicComponent(store)
  Vue.prototype.$addRemoteLib = () => {
    console.warn(
      '$addRemoteLib方法已被废弃，请使用ES模块导入方式添加第三方库。'
    )
  }
  Vue.prototype.$Scroll = BScroll
  Vue.prototype.$moduleLoader = moduleLoader
  Vue.prototype.$addLayout = addLayout(Vue)
}
