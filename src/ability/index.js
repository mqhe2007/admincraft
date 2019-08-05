import addRoute from './add-route'
import addStore from './add-store'
import DynamicComponent from './dynamic-component'
import eventBus from './event-bus'
import moduleLoader from './module-loader'
export default function({ Vue, router, store }) {
  Vue.prototype.$addRoute = addRoute(router)
  Vue.prototype.$addStore = addStore(store)
  Vue.prototype.$eventBus = eventBus
  Vue.prototype.$dynamicComponent = new DynamicComponent(store)
  Vue.prototype.$moduleLoader = moduleLoader({ Vue, router, store })
}
