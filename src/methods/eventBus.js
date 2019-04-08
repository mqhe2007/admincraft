let eventMap = {}
export default {
  emit(eventName, payload) {
    if (!eventMap[eventName])
      return console.error(
        `事件：${eventName}，被触发了，但是无监听者。事件内容为：${payload}`
      )

    for (let item of eventMap[eventName].values()) {
      item(payload)
    }
  },
  on(eventName, handler) {
    if (typeof handler === 'function') {
      if (!eventMap[eventName]) eventMap[eventName] = new Set()
      eventMap[eventName].add(handler)
    }
  },
  off(eventName, handler) {
    if (!handler) return console.error(`取消监听必须传入已被监听的事件处理函数`)
    eventMap[eventName].delete(handler)
  },
  clean() {
    eventMap = {}
  },
  getEvents() {
    return eventMap
  }
}
