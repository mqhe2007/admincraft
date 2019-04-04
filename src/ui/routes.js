export default [
  {
    path: '/',
    name: 'home',
    meta: {
      NonMenu: true,
      title: '首页'
    },
    component: () => import('./views/Home.vue')
  }
]
