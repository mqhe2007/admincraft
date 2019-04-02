export default Vue => (layout, cb) => {
  if (layout) {
    for (let key in layout) {
      Vue.component(key, layout[key])
    }
  }
  if (cb && typeof cb === 'function') cb()
}
