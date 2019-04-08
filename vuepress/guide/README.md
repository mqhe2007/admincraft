# 指南

::: warning
开始使用 Admincraft 前，我们假设您已经拥有了创建或使用 vue + webpack 工程的开发经验。
:::

Admincraft，名称借鉴自“Minecraft”。也是希望 Admincraft 能够像“Minecraft”一样成为一个灵活自由强大的开发工具，为中后台应用的快速开发寻找新的可能。

Admincraft 在 Vue 已有 API 的基础上进行了更高级的 API 封装。令 Admincraft 支持除传统的单一工程开发外也支持模块化分离开发，开发完成的模块可以分布部署，并在另一个模块运行时热加载到主系统中。

## 内置工具库

Admincraft 内置了下列工具库，无需再次安装。

- [vue](https://cn.vuejs.org)

- [vue-meta](https://vue-meta.nuxtjs.org/)

- [vue-router](https://router.vuejs.org/zh/)

- [vuex](https://vuex.vuejs.org/zh/)

- [axios](https://github.com/axios/axios)

- [better-scroll](https://github.com/ustbhuangyi/better-scroll)

## 视图层次

为了使应用的页面布局灵活多变，不局限为单一的控制台布局，Admincraft 自带的用户界面采用了`布局 > 页面 > 组件`的层级结构。如下图：

![level](./img/level.png)

### 布局

布局是系统最顶层的[路由出口](https://router.vuejs.org/zh/guide/essentials/nested-routes.html)。Admincraft 预设了若干种布局，例如：控制台，空页面，错误提醒等。通过切换不同布局可以实现不同的顶级页面结构需要。

### 页面

页面是路由渲染的目标组件，相当于传统项目中的`html`页面，一个页面由若干个组件联合构成。

### 组件

这里所说的组件是指除布局，页面这些专用组件外，其他的`.vue`单文件组件。

## Admincraft 实例

每个应用或模块都是通过`Admincraft`类创建一个新的 Admincraft 实例开始的，Admincraft 实例本质上是一个增强了的 Vue 实例，具备 Vue 实例的所有属性和方法。

```javascript
let admincraft = new Admincraft({
  // 选项
})
```

当创建一个 Admincraft 实例时，你可以传入一个选项对象作为实例化参数，详细选项请查看[实例化选项](/options/#实例化选项)。

### 挂载实例

做完了以上那些内容，如果你启动一个开发服务，发现并不能在浏览器窗口中看到内容。因为当我们实例化 Admincraft 后仅仅是得到了一个存在于浏览器文档之外的实例对象：`admincraft`。我们接下来要做的就是使用 Vue 实例方法`$mount`把 Vue 实例挂载到一个 DOM 元素上。[学习\$mount](https://cn.vuejs.org/v2/api/#vm-mount)

通常代码看起来是这个样子：

```javascript
let el = document.createElement('div')
document.body.appendChild(el)
/**
 * 是否新建元素取决于你想怎么做，如果你想挂载实例到一个已存在于你index.html文件中的元素上。
 * $mount方法同样可以接收一个选择器字符串作为参数。
 **/
let admincraft = new Admincraft({
  title: 'admincraft',
  logo: {
    image: '',
    text: ''
  },
  modules: [],
  http: {}
})
admincraft.vue.$mount(el)
```

刷新浏览器，此时应该可以看到 admincraft 的控制台界面了。

### 路由配置

通常我们使用 Vue 来做项目，实例化的同时就会传入 vue-router 配置。Admincraft 也是这么做的，只不过是发生在 Admincraft 内部，我们并不需要关心细节，而且借助于`addRoutes`API，我们可以在实例化之后再添加路由配置。

通常我们新建一个路由配置文件，导出符合路由规范的数组。

:::tip
路由的 name 在 Admincraft 中非常重要。我们使用 name 进行路由导航，匹配菜单，匹配页签等，一定要记得配置，并且具有唯一性。
:::

```javascript
// routes.js
import Login from './views/Login.vue'
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
  ...
]
```

导入路由配置并在 Admincraft 实例化后使用 api 添加到实例中。

```javascript
// main.js
import routes from './routes'
app.$addRoutes(routes)
```

:::tip
**这里有个特殊情况：**
为了实现[动态可变的控制台首页](/guide/#首页配置)，`/`，也就是根路由，已经在 Admincraft 内部配置，任何情况下都不要再次配置。
:::

### 状态配置

情况和路由配置类似，并且使用了[Vuex 模块](https://vuex.vuejs.org/zh/guide/modules.html)的概念，您必须掌握其使用方法。

通常我们新建一个 Vuex 模块配置文件。

```javascript
// store.js
const storeModule = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}
export default storeModule
```

导入 Vuex 模块配置并在 Admincraft 实例化后使用 api 添加到实例中。

```javascript
// main.js
import storeModule from './store'
app.$addStore('moduleName', storeModule)
```

### 首页配置

为了使控制台首页地址可以显示任何页面，Admincraft 使用 render 函数令首页变得可配置。

改变一个路由非常容易，我们通过提交一个实例方法来实现修改首页：

```javascript
this.$modifyHomepage('routeName')
```

### 使用 Vue 插件

查看全局 API：[Admincraft.use](/api/#admincraft-use)

## 编写一个模块

借助于[Vue-cli](https://cli.vuejs.org/zh/)脚手架工具创建模块工程，我们很容易的把代码打包成一个 Admincraft 模块。

一个 Admincraft 模块就是一个打包成 umd 规范的 js 库及相关资源。

打包为库的配置请参考：[构建目标-库](https://cli.vuejs.org/zh/guide/build-targets.html)

这里有一个带有完整演示的模块项目：[Admincraft-module](https://github.com/mqhe2007/admincraft-module)

### 目录约定

:::tip
注意，缩进代表目录层级。
:::

```
dist ----------------- 编译完成后的发行代码目录
node_modules --------- nodejs项目依赖安装目录
public --------------- 不需要webpack打包的静态资源目录
  libs --------------- 通过远程调用的第三方库目录
  index.html --------- 开发预览的网页入口文件
src ------------------ 源代码目录
  assets ------------- 需要webpack打包编译的资源目录
  components --------- 局部组件目录
  router ------------- 路由配置目录
    routes.js -------- 路由配置
  store -------------- vuex状态管理配置
    storeModule.js --- vuex状态模块化配置
  views -------------- 视图组件目录，需要导入路由配置
  App.vue ------------ Vue实例根组件
  envConst ----------- 多环境常量配置
  init.js ------------ 模块初始化文件，模块化打包的入口文件
  libs.js ------------ 通过远程调用的第三方库清单文件
  main.js ------------ 开发服务入口文件
.browserslistrc ------ 浏览器支持情况配置
.env.* --------------- 构建环境与模式配置
.eslintrc.js --------- eslint的配置文件
.gitignore ----------- git 提交忽略文件
babel.config.js ------ babel编译配置文件
package.json --------- npm包配置文件
postcss.config.js ---- postcss样式处理配置文件
README.md ------------ 自述文件
vue.config.js -------- vue-cli配置文件
yarn.lock ------------ npm依赖版本锁
```

### 模块打包

Admincraft 的模块应该导出一个`init`函数。如果函数内部有异步操作，比如使用了`$addRemoteLib`API 来加载远程库，您可能需要让模块函数返回一个 Promise 来更好的控制异步流程。模块加载时此函数会被执行，接收的第一个参数是 `admincraft` 实例。使用 `admincraft` 实例方法，模块可以自行控制要加载的数据。

下面是一个完整的模块打包入口例子：

```javascript
// init.js
// 导入模块数据
import routes from './router/routes'
import storeModule from './store/storeModule'
import libs from './config/libs'

// 从package.json中获取模块名称
let moduleName = require('../package.json').name

// 动态获取模块js库的引用地址
let i, moduleServerUrl
if (
  (i = window.document.currentScript) &&
  (i = i.src.match(/(.+\/)[^/]+\.js$/))
) {
  moduleServerUrl = i[1]
}

// 导出模块init函数，当内部有异步操作时返回Promise
export default admincraft =>
  new Promise((resolve, reject) => {
    // 注册路由
    admincraft.$addRoutes(routes, () => {
      console.log(moduleName + '：路由注册完成')
    })

    // 注册状态树
    admincraft.$addStore(moduleName, storeModule, () => {
      console.log(moduleName + '：状态注册完成')
    })

    // 注册菜单
    admincraft.$addMenus(routes, () => {
      console.log(moduleName + '：菜单注册完成')
    })
    let getRemoteLibUrlList = libs =>
      libs.map(item => serverUrl + 'libs/' + item)
    // 注册libs
    admincraft
      .$addRemoteLib(getRemoteLibUrlList(libs))
      .then(() => {
        console.log(`${moduleName}模块加载完成`)
        resolve()
      })
      .catch(() => {
        reject()
      })
  })
```

### 模块开发

从上文可知，代码打包成一个 Admincraft 模块可以用一个导出函数的入口文件`init.js`来实现。那作为一个 Admincraft 模块，我们如何去运行开发呢？

其实很简单，像传统的 Vue 工程一样，我们从`main.js`文件出发。我们只需要在我们的 `main.js` 文件中导入模块要导出的初始化函数（`init.js` ）和 `Admincraft`，我们当前开发服务所运行的代码就是一个 Admincraft 项目，我们当然就可以使用 Admincraft 创建实例，并在[实例化的同时传入我们的当前模块](/guide/#实例化选项)。

```javascript
// main.js
import Admincraft from 'admincraft'
import showCase from './init'
// 创建实例
let appElement = document.createElement('div')
let app = new Admincraft({
  modules: [showCase],
  title: 'Showcase',
  logo: { text: 'showcase演示' }
})
app.$mount(appElement)
document.body.appendChild(app.$el)
```

然后，就能正常开发了，任何模块相关代码改动都会及时的更新在实例中。

这样在开发阶段既能同步使用 Admincraft 提供的 API，组件，布局等能力，又能保证开发出的模块能完美被其他 Admincraft 项目加载。

## 加载一个模块

在 Admincraft 项目中我们有两种方式加载模块。

### 实例化时加载

Admincraft 实例化时可以通过实例配置[modules](/options/#modules)传入模块初始化函数数组。

### 运行时加载

应用运行时在任何时候可以通过实例方法[\$moduleLoader](/api/#app-moduleloader)进行加载。

## 事件总线

为了提高模块与模块，模块与框架之间通信的灵活性，Admincraft 特别引入了事件总线。

事件总线本质上是 Vue 原型对象上的一个对象 `eventBus`，我们可以用来监听和触发一些事件。

每个模块需要提供自己的[事件列表](/appendix/#事件列表)以供其他模块监听。反之，也可根据其他模块提供的事件列表按需监听。

:::tip
为表明事件的不变性，Admincraft 约定使用常量标识事件名称，事件名称多个单词通过下划线`_`连接。
:::

### 触发事件

我们使用\$eventBus.emit()方法可以触发一个自定义事件。

```javascript
this.$eventBus.emit('EVENT_NAME', payloadData)
```

### 监听事件

我们使用\$eventBus.on()方法可以监听一个自定义事件，同一个事件可以重复监听多次。

```javascript
this.$eventBus.on('EVENT_NAME', payloadData => {})
```

### 取消监听

我们使用\$eventBus.off()方法可以监听一个自定义事件。

```javascript
this.$eventBus.off('EVENT_NAME')
```

## 发起异步请求

根据业务接口发起异步请求获取数据，是前后端分离的系统最重要的功能之一。Admincraft 内部封装了强大易用的 http 网络请求库[axios](https://github.com/axios/axios)，并在实例化时赋化身为`$http`方法，我们使用`$http`发起请求就像使用 axios 一样，例如：

```js
this.$http
  .get('api/path', {
    params: {}
  })
  .then(data => {
    console.log(data)
  })
```

Admincraft 在内部通过 axios 拦截器处理了请求结果情况，方便统一处理，正常返回会直接返回服务器数据体，不必再解析 response 对象，异常的情况可以查询事件列表监听请求异常事件。

除了前面讲到的，在 Admincraft 实例化时可以传入 http 配置，我们在使用实例方法`$http`时也可以随时修改请求配置，发起请求时传入的配置优先级大于实例化配置。

```js
this.$http
  .get('api/path', {
    params: {},
    timeout: 5000 // 当前接口的超时时间就会延长至5000ms
  })
  .then(data => {
    console.log(data)
  })
```