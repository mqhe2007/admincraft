export default store => (routeName, cb) => {
  store.commit('app/setHomeRouteName', routeName)
  if (cb && typeof cb === 'function') cb()
}
