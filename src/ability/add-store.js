export default store => (moduleName, storeModule) => {
  if (!moduleName && !storeModule) return console.error('addStore参数错误')
  store.registerModule(moduleName, storeModule)
}
