export default store => routes => {
  return permissionFilter(routes)
  /** 根据路由配置对象中的permissionTag进行过滤。 */
  function permissionFilter(_routes) {
    let newRoutes = []
    _routes.forEach(route => {
      if (route.meta.permissionTag) {
        if (
          store.state.main.user.permissionTags.find(
            item => item === route.meta.permissionTag
          )
        ) {
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
}
