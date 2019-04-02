import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

export default ({ hasUI, router }) => {
  Vue.use(Router)

  let _router
  if (hasUI) {
    _router = new Router({
      routes
    })
  } else {
    _router = new Router()
  }

  _router.beforeResolve(router.beforeResolve)
  return _router
}
