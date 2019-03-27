import Vue from 'vue'
import store from '@/core/store/index'
import Component from './Component.vue'
let NOTICE_INSTANCE_TOP = 10
let noticeInstances = new Set()
let createInstance = (props = {}) => {
  return new Vue({
    name: 'notice',
    store,
    render(h) {
      return h(Component, {
        props
      })
    }
  })
}
Vue.prototype.$notice = {
  open(props) {
    let instance = createInstance(props)
    noticeInstances.add(instance)
    let componentEl = instance.$mount().$el
    let top = NOTICE_INSTANCE_TOP
    let nodeList = document.querySelectorAll('.notice')
    for (let i = 0; i < nodeList.length; i++) {
      top += nodeList[i].offsetHeight + NOTICE_INSTANCE_TOP
    }
    document.body.appendChild(componentEl)
    componentEl.style.top = top + 'px'
  },
  close(vm) {
    vm.$destroy()
    document.body.removeChild(vm.$el)
    noticeInstances.delete(vm)
    let nodeList = document.querySelectorAll('.notice')
    let preNode = null
    let top = 0
    for (let i = 0; i < nodeList.length; i++) {
      if (!preNode) {
        preNode = nodeList[i]
        top += NOTICE_INSTANCE_TOP
      } else {
        top += NOTICE_INSTANCE_TOP + preNode.offsetHeight
      }
      nodeList[i].style.top = top + 'px'
    }
  }
}
