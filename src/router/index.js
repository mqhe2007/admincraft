import Router from 'vue-router'

export default (Vue, instanceOptions) => {
  Vue.use(Router)
  const routerOptions = instanceOptions.router
  let _router = new Router(routerOptions.config)
  _router.beforeEach(routerOptions.guards.beforeEach)
  _router.beforeResolve(routerOptions.guards.beforeResolve)
  _router.afterEach(routerOptions.guards.afterEach)
  return _router
}
