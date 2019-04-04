import routes from './routes'
export default admincraft => {
  import('./style/index.styl')
  import('./assets/iconfont')
  admincraft.$addLayout({
    acDefault: () => import('./layout/Default.vue'),
    acBlank: () => import('./layout/Blank.vue')
  })
  admincraft.$addRoutes(routes)
}
