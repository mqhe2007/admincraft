export default (router) => (routes, handle) => {
  if (!routes)
    return console.error('addRoutes方法至少接收一个vue-router路由配置数组。')
  router.addRoutes(typeof handle === 'function' ? handle(routes) : routes)
}
