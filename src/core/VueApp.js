import Vue from 'vue'
import Meta from 'vue-meta'
import { App } from '../ui/'
// 自定义指令
import directive from './directive'

// 扩展方法
import admincraftMethods from './methods/'
import Default from '@/ui/layout/Default.vue'
import Blank from '@/ui/layout/Blank.vue'
export default class VueApp {
  constructor({ router, store, instanceOptions }) {
    Vue.use(directive, { store })
    Vue.use(Meta)
    Vue.use(admincraftMethods, { router, store, instanceOptions })
    Vue.component('default', Default)
    Vue.component('Blank', Blank)
    return new Vue({
      router,
      store,
      render: h => h(App)
    })
  }
  static use(vuePlugin, options) {
    Vue.use(vuePlugin, options)
  }
}
