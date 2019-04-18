import Router from 'vue-router'

export default (context) => {
  context.Vue.use(Router)
  const routerOptions = context.config.router
  let _router = new Router(routerOptions && routerOptions.config)
  if (routerOptions && routerOptions.guards) {
    const guards = routerOptions.guards(context)
    _router.beforeEach(guards.beforeEach)
    _router.beforeResolve(guards.beforeResolve)
    _router.afterEach(guards.afterEach)
  }
  return _router
}
