# 指南

::: warning
开始使用 vue-module-loader 前，我们假设您已经拥有了使用 @vue/cli 开发项目的经验。如果还没有，请先阅读[文档](https://cli.vuejs.org/zh/)
:::

vue-module-loader 是基于Vue生态的微前端模块加载器，与[vue-micro-module]()工程配合使用，让你的工程秒变微前端架构。任何符合规范的模块工程，都能自由组合加载。

## 必要依赖

vue-module-loader 的正常运行必须依赖下列工具库。

- [vue](https://cn.vuejs.org)

- [vue-router](https://router.vuejs.org/zh/)

- [vuex](https://vuex.vuejs.org/zh/)

## 加载一个模块

应用运行时在任何时候可以通过实例方法[\$moduleLoader](/api/#app-moduleloader)进行加载。

## 编写一个模块

### 模块是什么

文件导出一个接收 vue-module-loader 实例上下文对象的函数，并且在函数内部合并数据的都算是一个模块。我们通常使用`/src/module-init.js`文件作为模块 build 入口文件。

```js
// /src/module-init.js
import LayoutFrame from '@/layout/Frame'
import routes from '@/router/routes.js'
import storeModule from './store'
export default ({ Vue }) => {
  Vue.prototype.$addLayout({ layoutDefault: LayoutFrame })
  Vue.prototype.$addRoutes(routes)
  Vue.prototype.$addStore('moduleName', storeModule)
  Vue.prototype.$addMenus(routes)
}
```

借助于[Vue-cli](https://cli.vuejs.org/zh/)脚手架工具创建模块工程，我们很容易的把代码打包成一个 vue-module-loader 模块。

一个 vue-module-loader 模块就是一个打包成 umd 规范的 js 库及相关资源。

打包为库的配置请参考：[构建目标-库](https://cli.vuejs.org/zh/guide/build-targets.html)

这里有一个带有完整演示的模块项目：[vue-module-loader-showcase](https://github.com/mqhe2007/vue-module-loader-showcase)

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
  layout ------------- 布局组件目录
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

### 依赖安装

#### 公共依赖

公共依赖是指大部分模块都要用到的依赖库，例如统一的 UI 组件库。这类公共依赖会在主框架模块中安装，业务模块开发时只需优先加载主框架模块，无需额外安装公共依赖。

#### 私有依赖

私有依赖是指只有业务模块自己要使用的依赖库。安装后导入为局部变量使用。

### 模块打包

下面是一个完整的模块打包入口例子：

```javascript
// /src/module-init.js
// 导入模块数据
import routes from './router/routes'
import storeModule from './store/storeModule'

// 从package.json中获取模块名称
let moduleName = require('../package.json').name

// 导出模块初始化函数
export default context => {
  // 注册路由
  context.vue.prototype.$addRoutes(routes, () => {
    console.log(moduleName + '：路由注册完成')
  })

  // 注册状态树
  context.vue.prototype.$addStore(moduleName, storeModule, () => {
    console.log(moduleName + '：状态注册完成')
  })

  // 注册菜单
  context.vue.prototype.$addMenus(routes, () => {
    console.log(moduleName + '：菜单注册完成')
  })
}
```

### 模块部署

一个使用 nginx+jenkins 的模块部署过程如下：

#### 1. 新建模块虚拟机

在部署服务器中找到 nginx 虚拟机配置目录`*/**/nginx/conf/vhost`。

创建模块的`vhost`配置文件。

着重以下配置：

```shell
server{
  # 监听端口号。
  listen 8081;
  location / {
    # 虚拟机根目录，以模块名命名，用以存放构建生成的文件。
    root /home/apps/<module_name>;
  }
}

```

#### 2. 配置构建脚本

登录 jenkins 构建工具创建新任务。

##### 执行 shell 第一步

本段 shell 主要是模块打包命令，打包过程根据自己模块`package.json`中实际的脚本进行配置。

```shell
node -v
yarn -v
yarn
yarn build
```

##### 执行 shell 第二步

把第一步打包完成的代码转移到部署服务器模块的虚拟机中。

```shell
ssh user@xxx.xxx.xxx.xxx "cd /home/apps
rm -rf <module_name>
mkdir <module_name>"
scp -r ${WORKSPACE}/dist/* user@xxx.xxx.xxx.xxx:/home/apps/<module_name>
```

#### 3. 验证模块地址

等待 jenkins 任务执行完毕，尝试访问`http://xxx.xxx.xxx.xxx:8081/<module_name>.umd.js`，如果能访问成功，既模块部署成功。

### 模块开发

从上文可知，代码打包成一个 vue-module-loader 模块可以用一个导出函数的入口文件`module-init.js`来实现。那作为一个 vue-module-loader 模块，我们如何去运行开发呢？

其实很简单，像传统的 Vue 工程一样，我们从`main.js`文件出发。我们只需要在我们的 `main.js` 文件中导入模块要导出的初始化函数（`module-init.js` ）和 `vue-module-loader`，我们当前开发服务所运行的代码就是一个 vue-module-loader 项目，我们就可以使用 vue-module-loader 创建实例，并在[实例化前添加我们的模块](/api/#vue-module-loader-add)。

```javascript
// main.js
import vue-module-loader from 'vue-module-loader'
import showCase from './init'
// 添加一个模块
vue-module-loader.add(showCase)
// 创建实例
let appElement = document.createElement('div')
let app = new vue-module-loader({
  title: 'Showcase',
  logo: { text: 'showcase演示' }
})
app.$mount(appElement)
document.body.appendChild(app.$el)
```

然后，就能正常开发了，任何模块相关代码改动都会及时的更新在实例中。

这样在开发阶段既能同步使用 vue-module-loader 提供的 API，组件，布局等能力，又能保证开发出的模块能完美被其他 vue-module-loader 项目加载。

## 事件总线

为了提高模块与模块，模块与框架之间通信的灵活性，vue-module-loader 特别引入了事件总线。

事件总线本质上是 Vue 原型对象上的一个对象 `eventBus`，我们可以用来监听和触发一些事件。

每个模块需要提供自己的[事件列表](/appendix/#事件列表)以供其他模块监听。反之，也可根据其他模块提供的事件列表按需监听。

:::tip
为表明事件的不变性，vue-module-loader 约定使用常量标识事件名称，事件名称多个单词通过下划线`_`连接。
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

根据业务接口发起异步请求获取数据，是前后端分离的系统最重要的功能之一。vue-module-loader 内部封装了强大易用的 http 网络请求库[axios](https://github.com/axios/axios)，并在实例化时赋化身为`$http`对象，我们使用`$http`发起请求就像使用 axios 一样，例如：

```js
this.$http
  .get('api/path', {
    params: {}
  })
  .then(data => {
    console.log(data)
  })
```

除了在 vue-module-loader 实例化时可以传入 http 配置，我们在使用实例方法`$http`时也可以随时修改请求配置，发起请求时传入的配置优先级大于实例化配置。

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
