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
export default (context) => {
  context.Vue.prototype.$addRoutes = addRoutes(context)
  context.Vue.prototype.$addStore = addStore(context.store)
  context.Vue.prototype.$addMenus = addMenus(context.store)
  context.Vue.prototype.$eventBus = eventBus
  context.Vue.prototype.$http = http(context)
  context.Vue.prototype.$modifyHome = modifyHome(context.store)
  context.Vue.prototype.$dynamicComponent = new DynamicComponent(context.store)
  context.Vue.prototype.$addRemoteLib = () => {
    console.warn(
      '$addRemoteLib方法已被废弃，请使用ES模块导入方式添加第三方库。'
    )
  }
  context.Vue.prototype.$Scroll = BScroll
  context.Vue.prototype.$moduleLoader = moduleLoader
  context.Vue.prototype.$addLayout = addLayout(context.Vue)
}
