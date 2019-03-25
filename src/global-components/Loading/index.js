import Vue from 'vue'
import Component from './Component.vue'

let Loading = Vue.extend(Component)
let loading = new Loading()
Vue.prototype.$loading = {
  open() {
    if (!loading._isMounted) {
      let componentEl = loading.$mount().$el
      document.body.appendChild(componentEl)
    }
  },
  close() {
    loading.$destroy()
    document.body.removeChild(loading.$el)
  }
}