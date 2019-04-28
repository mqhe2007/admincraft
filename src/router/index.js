export default (Router, context) => {
  context.Vue.use(Router)
  const routerConfig = context.config.router
  let router = new Router(routerConfig && routerConfig.config)
  if (routerConfig && routerConfig.guards) {
    const guards = routerConfig.guards(context)
    router.beforeEach(guards.beforeEach)
    router.beforeResolve(guards.beforeResolve)
    router.afterEach(guards.afterEach)
  }
  return router
}
