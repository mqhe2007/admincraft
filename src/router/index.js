import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

export default () => {
  Vue.use(Router)
  return new Router({
    routes
  })
}
