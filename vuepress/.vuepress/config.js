const path = require('path')
module.exports = {
  base: '/admincraft/',
  title: 'Admincraft',
  dest: path.resolve(__dirname, '../../docs'),
  description: '一个支持模块化分布部署和加载的 Vue Admin',
  themeConfig: {
    sidebarDepth: 2,
    nav: [
      {
        text: '指南',
        link: '/guide/'
      },
      {
        text: '配置',
        link: '/options/'
      },
      {
        text: 'API',
        link: '/api/'
      },
      {
        text: '内置UI',
        link: '/ui/'
      },
      {
        text: '附录',
        link: '/appendix/'
      },
      {
        text: '常见问题',
        link: '/qa/'
      },
      {
        text: 'github',
        link: 'https://github.com/mqhe2007/admincraft'
      }
    ],
    sidebar: {
      '/guide/': [''],
      '/options/': [''],
      '/api/': [''],
      '/ui/': [''],
      '/appendix/': [''],
      '/qa/': ['']
    }
  }
}
