# Admincraft

Admincraft 是一个 Vue 插件，让你使用微前端架构开发 Vue 应用。（[微前端？](https://www.thoughtworks.com/radar/techniques/micro-frontends)）

Admincraft 名称借鉴自“Minecraft”。

推荐使用`admincraft-cli`生成样板工程。

```
$ yarn global add admincraft-cli
$ admincraft init
```

## 安装

```
yarn add admincraft@next
```

## 快速开始

```javascript
// 导入插件
import Vue from 'vue'
import Admincraft from 'admincraft'
// 安装使用，配置项中router实例和store实例必传。
Vue.use(Admincraft, { router, store })
const app = new Vue({...})
// 使用插件提供的能力
app.$moduleLoader({
  module1: '//domain.com/module1.js'
})
```
