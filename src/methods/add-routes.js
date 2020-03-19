export default ({ router, store }) => routes => {
  if (!routes)
    return console.error('addRoutes方法至少接收一个vue-router路由配置数组。')
  let FilteredRoutes = permissionFilter(routes)
  /** 根据路由配置对象中的permissionTag进行过滤。 */
  function permissionFilter(routes) {
    let newRoutes = []
    routes.forEach(route => {
      if (route.meta && route.meta.permissionTag) {
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
  router.addRoutes(FilteredRoutes)
}
