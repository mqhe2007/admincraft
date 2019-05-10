export default ({router, store}) => (routes, cb) => {
  let permissionFilter = routes => {
    let newRoutes = []
    routes.forEach(route => {
      if (route.meta.permissionTag) {
        if (store.state.main.user.permissionTags.find(item => item === route.meta.permissionTag)) {
          if (route.children && route.children.length > 0) {
            route.children = permissionFilter(route.children)
          }
          newRoutes.push(route)
        }
      } else {
        if (route.children && route.children.length > 0) {
          route.children = permissionFilter(route.children)
        }
        newRoutes.push(route)
      }
    })
    return newRoutes
  }
  if (!routes) return console.error('addRoutes参数错误')
  let safeRoutes = permissionFilter(routes)
  router.addRoutes(safeRoutes)
  if (cb && typeof cb === 'function') cb()
}
