---
home: true
heroImage: /logo.png
actionText: 快速上手 →
actionLink: /guide/
features:
  - title: 一切基于Vue.js生态
    details: Admincraft 基于 vue 生态的最佳方案（希望），内置了常用的Vue周边库，并且提供了丰富的配置项让您自由配置。
  - title: 可选高质量UI组件库
    details: Admincraft 可选安装整套适用于中后台系统的UI组件库和布局页面，开箱即用。但是 Admincraft 不会强制您使用它们，您可以使用自己喜欢的其他UI组件库。
  - title: 模块化开发与加载
    details: Admincraft 内部提供了模块化开发和加载的方法，借助于 Vue-cli ，既可把代码打包成能分布部署的“模块”，又能在任何时候加载一个模块。使用了 Admincraft 的项目看起来就像是一节节火车车厢，首尾相连（模块串联）就成了一列巨大的列车。
footer: Copyright © 2019 mengqinghe.com
---

## 使用超简单

#### 1. 安装 admincraft

```
yarn add admincraft
```

#### 2. 导入 admincraft

```
import Admincraft from 'admincraft'
```

#### 3. 创建应用实例

```javascript
let admincraft = new Admincraft()
```

::: warning
本项目处在 alpha 阶段，架构和API都不稳定，如果您希望尝试一下，请和我保持联系-[青衿的邮箱](mailto:122274389@qq.com) 或使用 issues 交流。
:::
