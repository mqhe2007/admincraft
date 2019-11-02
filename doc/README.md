---
home: true
actionText: 快速上手 →
actionLink: /guide/
features:
  - title: 基于@vue/cli
    details: vue-module-loader 基于 vue 生态的最佳脚手架方案@vue/cli，配置简单，功能强大。
  - title: 官方API
    details: vue-module-loader 的大部分能力都由Vue, vue-router, vuex的官方API组合实现，易于理解。
  - title: 还有啥？
    details: 没了
footer: Copyright © 2019 mengqinghe.com
---

## 安装

```
yarn add vue-module-loader
```

## 使用

#### 1. 导入

```javascript
// 导入插件
import Vue from 'vue'
import vueModuleLoader from 'vue-module-loader'
// 安装使用，配置项中router实例和store实例必传。
Vue.use(vueModuleLoader, { router, store })
const app = new Vue({...})
// 使用插件提供的能力
app.$moduleLoader({
  module1: '//domain.com/module-a.js'
})
```

## 进群交流
![qq群](/group.png)