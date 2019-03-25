import Login from './views/Login.vue'
import CError from './views/Error/'
import CError404 from './views/Error/404.vue'
export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      NonMenu: true,
      title: '请登录',
      layout: 'blank'
    },
    component: Login
  }
]
