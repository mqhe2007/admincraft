import routes from './routes'
import menus from './menus'

export default app => {
  // 注册路由
  app.$addRoutes(routes, () => {})
  // 注册菜单
  app.$addMenus(menus, () => {})

  console.log(
    `%c模块加载完成`,
    'background: #4192d9; padding: 5px; color: #fff'
  )
}