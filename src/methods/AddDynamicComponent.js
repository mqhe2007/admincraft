export default store => ({
  add: (position, component, cb) => {
    store.commit('dynamicComponent/add', {
      position,
      component
    })
    if (cb && typeof cb === 'function') cb()
  },
  remove: (position, name, cb) => {
    if (!position && !name) return console.error('destroyComponent参数错误')
    store.commit('dynamicComponent/destroy', {
      position,
      name
    })
    if (cb && typeof cb === 'function') cb()
  }
})
