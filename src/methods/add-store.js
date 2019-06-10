export default store => (moduleName, storeModule, cb) => {
  //TODO: 更细粒度的参数判断
  if (!moduleName && !storeModule) return console.error('addStore参数错误')
  store.registerModule(moduleName, storeModule)
  if (cb && typeof cb === 'function') cb()
}
