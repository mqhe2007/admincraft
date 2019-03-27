import Vue from 'vue'
import Meta from 'vue-meta'
import { App } from '../ui/'
// 自定义指令
import directive from './directive'

// 扩展方法
import admincraftMethods from './methods/'

export default class VueApp {
  constructor({ router, store, instanceOptions }) {
    Vue.use(directive, { store })
    Vue.use(Meta)
    Vue.use(admincraftMethods, { router, store, instanceOptions })
    return new Vue({
      router,
      store,
      render: h => h(App)
    })
  }
  static use(vuePlugin) {
    Vue.use(vuePlugin)
  }
}
