export default class DynamicComponent{
  constructor(store) {
    this.store = store
  }
  add(position, component, cb) {
    this.store.commit('dynamicComponent/add', {
      position,
      component
    })
    if (cb && typeof cb === 'function') cb()
  }
  remove(position, name, cb){
    if (!position && !name) return console.error('destroyComponent参数错误')
    this.store.commit('dynamicComponent/destroy', {
      position,
      name
    })
    if (cb && typeof cb === 'function') cb()
  }
}
