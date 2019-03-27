import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

export default ({ beforeResolve }) => {
  Vue.use(Router)
  let router = new Router({
    routes
  })
  router.beforeResolve(beforeResolve)
  return router
}
