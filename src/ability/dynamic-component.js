import dynamicComponentStore from '../store/dynamicComponent'
export default class DynamicComponent {
  constructor(store) {
    store.registerModule('dynamicComponent', dynamicComponentStore)
    this.store = store
  }
  /** 添加动态组件方法 */
  add(component, position) {
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
  }
  /** 删除动态组件方法 */
  remove(name, position) {
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
  }
}
