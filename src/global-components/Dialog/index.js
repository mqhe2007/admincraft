import Vue from 'vue'
import Component from './Component'
let instances = new Set()
let createInstance = (props = {}) => {
  return new Vue({
    name: 'dialog',
    render(h) {
      return h(Component, {
        props
      })
    }
  })
}
Vue.prototype.$dialog = {
  open(props) {
    let instance = createInstance(props)
    instances.add(instance)
    let componentEl = instance.$mount().$el
    document.body.appendChild(componentEl)
  },
  close(vm) {
    vm.$destroy()
    document.body.removeChild(vm.$el)
    instances.delete(vm)
  }
}
