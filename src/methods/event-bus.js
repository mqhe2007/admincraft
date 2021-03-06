let eventMap = {}
export default {
  /** 事件触发 */
  emit(eventName, payload) {
    if (!eventMap[eventName])
      return console.warn(
        `事件：${eventName}，被触发了，但是无监听者。事件内容为：${payload}`
      )

    for (let item of eventMap[eventName].values()) {
      item(payload)
    }
  },
  /** 事件监听 */
  on(eventName, handler) {
    if (typeof handler === 'function') {
      if (!eventMap[eventName]) eventMap[eventName] = new Set()
      eventMap[eventName].add(handler)
    }
  },
  /** 取消事件监听 */
  off(eventName, handler) {
    if (!handler) return console.warn(`取消监听必须传入已被监听的事件处理函数`)
    eventMap[eventName].delete(handler)
  },
  /** 清理事件总线 */
  clean() {
    eventMap = {}
  },
  /** 获取当前事件总线详情 */
  getEvents() {
    return eventMap
  }
}
