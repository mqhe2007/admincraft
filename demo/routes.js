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
  }
]
