# API

## 全局 API

### Admincraft.add

- #### 参数:

  - {Function} [admincraftModule](/guide/#编写一个模块)

- #### 用法:

  用于提前安装 Admincraft 模块。

  除了模块的`动态加载`，我们实例化应用前也可以预先装载已有的模块数据，这在使得我们在开发 Admincraft 模块的时候可以同步载入模块数据，方便开发。

  模块初始化函数会接收一个上下文对象作为参数。

### Admincraft.use

- #### 参数:

  - {Object | Function} plugin

  - {Object} pluginOptions

- #### 用法:

  安装 Vue.js 插件。此处仅仅是起到了转发参数的作用，实际内部使用的还是 Vue.use 接口。

  该方法需要在调用 new Admincraft() 之前被调用。

```javascript
// 虚拟的例子
import vuePlugin from 'vue-plugin'

Admincraft.use(vuePlugin, {})
let app = new Admincraft({})
```

## 实例 API

### app.$addLayout

- #### 参数:

  - {Object} componentOptionsMap

  - {Function} callback

- #### 用法:

  使用此方法添加自定义布局

```javascript
import LayoutDemo from './LayoutDemo'
this.$addLayout(
  {
    layoutName: LayoutDemo
  },
  () => {}
)
```

在 routes 中使用自定义布局

```javascript
export default [
  {
    path: '/any-path',
    name: 'routerName',
    meta: {
      title: '页面示例',
      layout: 'layoutName'
    },
    component: routerComponent
  }
]
```

### app.$addRoutes

- #### 参数:

  - {Array} routes

  - {Function} callback

- #### 用法:
  添加路由配置

```javascript
this.$addRoutes(routes, () => {})
```

### app.$addStore

- #### 参数:

  - {String} vuexModuleName

  - {Object} vuexModule

  - {Function} callback

- #### 用法:

  添加 Vuex 状态模块

```javascript
this.$addStore('vuexModuleName', vuexModule, () => {})
```

### app.$dynamicComponent

动态组件操作

#### add

添加

- 参数:

  - {Object} component (必选)
  
  - {String} position

  - {Function} callback

- 用法:

  为预设的动态组件区域添加组件

```javascript
import Component from './component.vue'
this.$dynamicComponent.add(Component, 'HEADER_RIGHT_MENUS', () => {})
```

如果不传 position 参数，组件会被添加到名为“GLOBAL”的位置。

#### remove

移除

- 参数:
  
  - {String} componentName

  - {String} position

  - {Function} callback

- 用法:

  移除某个动态组件区域内的某个组件，如果不传 position 参数，默认会去“GLOBAL”的位置查找。

```javascript
this.$dynamicComponent.remove('componentName', 'HEADER_RIGHT_MENUS', () => {})
```

### app.$moduleLoader

- #### 参数:

  - {Object | Function} moduleUrl | moduleInitFunction

- #### 用法:

  动态加载一个模块，参数支持两种方式：

  1. 一个登记模块地址对象，此时方法返回 Promise。

  ```javascript
  this.$moduleLoader({
    'module-a': 'https://www.domain.com/modulea.umd.js'
  })
    .then()
    .catch()
  ```

  2. 模块的初始化函数

  ```javascript
  moduleA = require('./module-a.js')
  this.$moduleLoader(moduleA)
  ```

## 实例 API / eventBus

事件总线通过 `app.$eventBus` 上的若干个方法进行调用，具体说明如下：

### $eventBus.on()

- #### 参数:

  - {String} eventName

  - {Function} handler

监听一个事件，并且指定回调函数。

### $eventBus.emit()

- #### 参数:

  - {String} eventName

  - {any} payload

触发一个事件，并且发送任意数据作为监听方法回调函数的参数。

### $eventBus.off()

- #### 参数:

  - {String} eventName

  - {Function} handler

取消一个事件的监听器。

### $eventBus.clean()

- #### 参数: 无

清空 eventBus，这会取消所有事件监听。

## 实例 API / $http

转发`axios`配置

用法参见：[axios 官方文档](https://github.com/axios/axios)

## 实例 API / $Scroll

转发`better-scroll`配置，创建一个更像原生应用的滚动盒子。

用法参见：[better-scroll 官方文档](https://ustbhuangyi.github.io/better-scroll/#/zh)
