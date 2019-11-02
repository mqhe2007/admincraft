const path = require('path')
module.exports = {
  base: '/vue-module-loader/',
  title: 'vue-module-loader',
  dest: path.resolve(__dirname, '../../doc_dist'),
  description: 'vue.js项目的微前端模块加载器',
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
        text: 'UI',
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
