import Login from './views/Login.vue'
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
    path: '/layoutDemo',
    name: 'layoutDemo',
    meta: {
      NonMenu: true,
      title: '布局演示',
      layout: 'default'
    }
  }
]
