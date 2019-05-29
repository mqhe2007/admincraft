export default class DynamicComponent {
  constructor(store) {
    this.store = store
  }
  add(component, position, cb) {
    if (typeof component !== 'object')
      return console.error(`动态组件add方法至少接受一个组件对象参数。`)
    if (
      position &&
      typeof position !== 'string' &&
      typeof position !== 'function'
    )
      return console.error(`动态组件add方法参数错误`)
    if (typeof position === 'function') {
      cb = position
      position = undefined
    }
    this.store.commit('dynamicComponent/add', {
      position,
      component
    })
    if (cb && typeof cb === 'function') cb()
  }
  remove(name, position, cb) {
    if (typeof name !== 'string')
      return console.error('动态组件remove方法至少接收一个组件名称参数。')
    if (typeof position === 'function') {
      cb = position
      position = undefined
    }
    this.store.commit('dynamicComponent/destroy', {
      position,
      name
    })
    if (cb && typeof cb === 'function') cb()
  }
}
