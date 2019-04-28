export default store => (moduleName, storeModule, cb) => {
  if (!moduleName && !storeModule) return console.error('addStore参数错误')
  store.registerModule(moduleName, storeModule)
  if (cb && typeof cb === 'function') cb()
}
