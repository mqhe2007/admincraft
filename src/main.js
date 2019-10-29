import addRoute from './ability/add-route'
import addStore from './ability/add-store'
import DynamicComponent from './ability/dynamic-component'
import eventBus from './ability/event-bus'
import moduleLoader from './ability/module-loader'
export default function(Vue, { router, store }) {
  if (!router) return console.warn('vue-module-loader:', '必须传入router实例')
  if (!store) return console.error('vue-module-loader:', '必须传入store实例')
  Vue.prototype.$addRoute = addRoute(router)
  Vue.prototype.$addStore = addStore(store)
  Vue.prototype.$eventBus = eventBus
  Vue.prototype.$dynamicComponent = new DynamicComponent(store)
  Vue.prototype.$moduleLoader = moduleLoader({ Vue, router, store })
}
