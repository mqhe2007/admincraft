import Home from '../views/Home.vue'
import Error from '../views/Error/'
export default [
  {
    path: '/',
    name: 'home',
    meta: {
      NonMenu: true,
      title: '首页'
    },
    component: Home
  },
  {
    path: '/error',
    name: 'error',
    meta: {
      layout: 'blank',
      NonMenu: true,
      NonTab: true,
      title: '访问错误'
    },
    component: Error
  }
]
