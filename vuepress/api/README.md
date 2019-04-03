# API

## 全局 API

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
    'layoutName': LayoutDemo
  },
  () => {}
)
```

在routes中使用自定义布局

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

### app.$addMenus

- #### 参数:

  - {Array} routes | menus

  - {Function} callback

- #### 用法:

  为侧边栏菜单添加菜单项，可以直接传入[路由配置数组](/options/#路由选项配置)，也可以传入[菜单配置数组](/options/#菜单配置)数组。

```javascript
this.$addMenus(someArray, () => {})
```

### app.$dynamicComponent

动态组件操作

#### add

添加

- 参数:

  - {String} position

  - {Object} component

  - {Function} callback

- 用法:

  为预设的[动态组件区域](/appendix/#动态组件区域)添加组件

```javascript
this.$dynamicComponent.add('HEADER_RIGHT_MENUS', Component, () => {})
```

#### remove

移除

- 参数:

  - {String} position

  - {String} componentName

  - {Function} callback

- 用法:

  移除某个动态组件区域内的某个组件

```javascript
this.$dynamicComponent.remove('HEADER_RIGHT_MENUS', 'componentName', () => {})
```

### app.$addRemoteLib

- #### 参数:

  - {Array} libUrl

- #### 用法:

  添加远程库，因为远程资源加载是异步过程，所以方法返回一个 Promise。

```javascript
this.$addRemoteLib(libUrlArray).then()
```

### app.$modifyHome

- #### 参数:

  - {String} routeName

  - {Function} callback

- #### 用法:

  改变首页。

```javascript
this.$modifyHome('routeName', () => {})
```

### app.$moduleLoader

- #### 参数:

  - {Object} moduleUrlMap

- #### 用法:

  动态加载一个模块，参数需要传入一个模块地址的 map 对象，方法返回 Promise。

```javascript
this.$moduleLoader({
  'module-a': 'https://www.domain.com/modulea.umd.js'
})
  .then()
  .catch()
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

用法参见：[axios 官方文档](https://github.com/axios/axios)
