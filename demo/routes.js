import Login from './views/Login.vue'
import Scroll from './views/scroll/'
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
  },
  {
    path: '/scroll',
    name: 'scroll',
    meta: {
      title: '滚动演示'
    },
    component: Scroll
  }
]
