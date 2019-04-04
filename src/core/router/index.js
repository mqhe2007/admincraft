import Router from 'vue-router'

export default (Vue, instanceOptions) => {
  Vue.use(Router)
  const routerOptions = instanceOptions.router
  let _router = new Router()
  _router.beforeResolve(routerOptions.beforeResolve)
  return _router
}
