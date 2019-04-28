export default (Router, { Vue, config }) => {
  Vue.use(Router)
  const routerOptions = config.router
  let router = new Router(routerOptions && routerOptions.config)
  if (routerOptions && routerOptions.guards) {
    const guards = routerOptions.guards(context)
    router.beforeEach(guards.beforeEach)
    router.beforeResolve(guards.beforeResolve)
    router.afterEach(guards.afterEach)
  }
  return router
}
