import Vue from 'vue'
let eventMap = {}
Vue.prototype.$eventBus = {
  emit(eventName, payload) {
    if (!eventMap[eventName])
      return console.error(
        `事件：${eventName}，被触发了，但是无监听者。事件内容为：${payload}`
      )
    for (let i = 0; i < eventMap[eventName].length; i++) {
      eventMap[eventName][i](payload)
    }
  },
  on(eventName, cb) {
    if (typeof cb === 'function') {
      if (!eventMap[eventName]) eventMap[eventName] = []
      eventMap[eventName].push(cb)
    }
  },
  off(eventName) {
    eventMap[eventName] = []
  },
  clean() {
    eventMap = {}
  },
  getEvents() {
    return eventMap
  }
}
