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
  },
  {
    path: '/error',
    name: 'error',
    meta: {
      NonMenu: true,
      NonTab: true,
      layout: 'error'
    },
    component: CError,
    children: [
      // 路由对象
      {
        path: '404',
        name: 'error404',
        meta: {
          index: 0, // 排序
          NonTab: true, // 不加入到tabbar
          NonMenu: true, // 不加入菜单项
          title: '页面未找到', // 标题
          icon: '' // 图标
        },
        component: CError404
      }
    ]
  }
]
