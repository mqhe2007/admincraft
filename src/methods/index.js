/** 以vue插件方式注册扩展方法 */
import BScroll from 'better-scroll'
import addRoutes from './add-routes'
import addStore from './add-store'
import DynamicComponent from './dynamic-component'
import axios from './axios'
import eventBus from './event-bus'
import moduleLoader from './module-loader'
import addLayout from './add-layout'
export default (context) => {
  context.Vue.prototype.$addRoutes = addRoutes(context)
  context.Vue.prototype.$addStore = addStore(context.store)
  context.Vue.prototype.$eventBus = eventBus
  context.Vue.prototype.$http = axios(context)
  context.Vue.prototype.$dynamicComponent = new DynamicComponent(context.store)
  context.Vue.prototype.$addRemoteLib = () => {
    console.warn(
      '$addRemoteLib方法已被废弃，请使用ES模块导入方式添加第三方库。'
    )
  }
  context.Vue.prototype.$Scroll = BScroll
  context.Vue.prototype.$moduleLoader = moduleLoader(context)
  context.Vue.prototype.$addLayout = addLayout(context.Vue)
}
