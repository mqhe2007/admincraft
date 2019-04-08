# 配置

## 基本信息

工程（模块）的基本信息通过 npm 包配置文件`package.json`来配置，主要是以下字段。

### name

- 类型：`String`

模块的名称。

模块名称遵从 npm 包命名规范，单词小写，多单词使用`-`连接。

### version

- 类型：`String`

模块的版本号，版本号命名应遵从[语义化版本规范](https://semver.org/lang/zh-CN/)。

## 实例化选项

### title 

- 类型 `{String}`

标题会反映在浏览器选项卡，页脚，logo（如果没有配置 logo 选项）。

### logo

- image

  - 类型 `{String} url`

- text

  - 类型 `{String}`


logo位于控制台框架左上角头部区域，可以自定义图片和文字内容，图片和文字也可单独配置，如果图片和文字都不配置，标识则会直接显示`title`

### modules

- 类型 `{Array} moduleInitFunction`

我们前一直在说模块的`动态加载`，其实我们实例化应用的时候就可以预先装载已有的模块数据，这在使得我们在开发 Admincraft 模块的时候可以同步载入模块数据，方便开发。

### router

路由实例配置

- beforeResolve

  - 类型 `{Function}`

  路由解析守卫，在所有组件内守卫和异步路由组件被解析之后，导航被确认之前调用。

### http

请求实例配置

Admincraft 内部封装了强大易用的 http 网络请求库[axios](https://github.com/axios/axios)。如果你还没用过，那需要了解一下，很容易上手。

::: tip
**为什么要把网络请求库也集成在内？**

大多数时候，我们一个项目中的网络请求库在使用前会进行一些全局配置，比如库的选取，请求参数的调整，拦截器的处理，错误情况的处理等等，往后更多的时间就是逐个实现业务接口，全局化配置便不再改动。所以我们不如把请求库，拦截器，错误处理逻辑提前准备好，尽量做到开箱即用。
:::

在 Admincraft 实例化时会同时实例化 axios，我们可以通过`http`选项去配置 axios。

```js
let admincraft = new Admincraft({
  ...
  http: {
    factorOfSuccess: {
      key: 'ok',
      value: true
    },
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    ...
  }
})
```

- factorOfSuccess
  
  - key

    - 类型 `String`

    - 必选

    后端返回数据时用来表示请求结果状态的属性名。

  - value

    - 类型 `String || Number || Boolean`

    - 必选

    后端返回数据时用来表示请求成功时的`key`的值。

  其他选项可以参考[axios 官方文档]()。

> 更多实例化配置敬请期待。

## 路由选项配置

在 Admincraft 项目中，路由的`name`属性是必选且要保持唯一，我们会使用`name`进行路由导航，匹配菜单，匹配页签等。

除[Vue-router 原本的属性](https://router.vuejs.org/zh/api/#routes)外，Admincraft 还支持如下 meta 属性：

### meta.title

- 类型：`String`

- 必选

当前路由对应的页面标题，会更新浏览器选项卡，作为控制台页签栏标题。

### meta.icon

- 类型：`String`

菜单名称前的小图标，仅支持 iconfont 平台的 symbol 引用方式。

第一步：下载 iconfont 项目文件，在项目入口文件导入 symbol 引用的 js 文件。

第二步：icon 处填写相应图标类名

### meta.index

- 类型：`Number`

作为菜单时同级的显示顺序，如果值相同则按先后顺序排列。

### meta.layout

- 类型：`String`

为当前路由页面指定使用的布局，如果不指定则使用默认的控制台布局。

### meta.NonMenu

- 类型：`Boolean`

是否生成为菜单，默认为不配置，如果设置成 true,则生成菜单时会跳过当前路由。

### meta.NonTab

- 类型：`Boolean`

页面是否在页签栏生成记录，默认为不配置，如果设置成 true,则当前页面打开后不会记录在页签栏。

### meta.permissionTag

- 类型：`String`

当前路由的权限标签，此权限标签在生成菜单时会和用户权限列表进行匹配，只有匹配成功的路由才可见。

## 菜单配置

### index

- 类型：`Number`

作为菜单时同级的显示顺序，如果值相同则按先后顺序排列。

### title

- 类型：`String`

- 必选

当前路由对应的页面标题，会更新浏览器选项卡，作为控制台页签栏标题。

### name

- 类型：`String`

对应要访问的路由的`name`值。

### children

- 类型：`Array`

子菜单对象数组。

### parents

- 类型：`String`

以菜单项`name`值（路由`name`）组成的路径格式指定父级菜单，当前菜单会插入最后一级菜单的`children`中。例如：

```js
Vue.prototype.$addMenus([
  {
    parents: 'level1/level2',
    title: '三级菜单',
    name: 'level3'
  }
])
```

当前菜单项就会被插入到 `level1`下的`level2`下，结构应该是这样的。

- level1

  - level2

    - level3

:::warning
如果插入次级的菜单`name`值来源于路由配置，为避免重复定义，则需要在同名路由中设置`NonMenu`为 true。
:::

### url

- 类型：`String`

外链地址，如果菜单对象中配置了此属性，则菜单会作为一个外链菜单，点击后会优先在新标签页跳转到此地址。

::: danger
本页文档正在撰写中，请勿参考。
:::

可配置项通过`/src/config.js`文件进行配置。

## 远程库配置

:::tip
推荐使用 npm 安装并导入使用一个第三方库
:::

如果有特殊需求必须放在模块本地目录，我们需要特别的去配置以 html 标签的方式加载第三方库。

1. 首选需要把要引用的第三方库放在`public`目录下。

2. 创建一个 js 文件导出第三方库引用路径的列表数组。

:::warning
路径默认开始于`public`，并且最前面不需要加`/`
:::

```js
// libs.js
module.exports = ['libs/prism.css', 'libs/prism.js']
```

3. 在模块的初始化函数中导入第三方库列表，初始化时使用\$addRemoteLib 方法加载。

看起来如下：

```js
import libs from './libs'

// 动态的获取到模块部署地址的url
let i, moduleServerUrl
if (
  (i = window.document.currentScript) &&
  (i = i.src.match(/(.+\/)[^/]+\.js$/))
) {
  moduleServerUrl = i[1]
}
// init函数
export default Vue =>
  new Promise((resolve, reject) => {
    // 注册libs
    // 获取完整第三方库url连接
    let getRemoteLibUrlList = libs => libs.map(item => moduleServerUrl + item)
    Vue.prototype
      .$addRemoteLib(getRemoteLibUrlList(libs))
      .then(() => {
        resolve()
      })
      .catch(() => {
        reject()
      })
  })
```

## 构建环境配置

我们可以通过[vue-cli@3 的模式](https://cli.vuejs.org/zh/guide/mode-and-env.html#%E6%A8%A1%E5%BC%8F)，根据不同构建模式选取`VUE_APP_ENV`常量值，并在构建时根据`VUE_APP_ENV`的值动态获取响应环境的配置。

### 添加一个构建环境

如果我们需要添加一个名为`test`的构建环境。

1. 在根目录添加以构建环境为后缀名的.env 文件，并且`VUE_APP_ENV=test`。

```bash
# .env.test
NODE_ENV=production
VUE_APP_ENV=test
```

2. 在`package.json`的`scripts`中添加相对应的构建脚本，注意出现`test`字符的位置，其他环境同理替换。

```json
{
  "scripts": {
    "build:test": "vue-cli-service build --mode test --target lib src/init.js"
  }
}
```

至此，我们就添加了一个以 test 环境构建生产代码的构建配置，再配合根据每套环境名配置的常量，我们就实现了根据不同环境切换常量，见下文。

### 环境常量配置

环境常量通常记录着代码中用到的固定值，通常需要根据构建环境去切换，通过上面创建的环境构建我们很容易切换配置。

我们可以创建一个 js 文件，按如下操作导出常量对象。

```js
// envConst.js
const list = {
  development: {
    CONST_KEY: 'const value'
  },
  production: {
    test: {
      CONST_KEY: 'constValue'
    }
  }
}
// 通过构建环境来获取不同常量对象
let envConst = process.env.VUE_APP_ENV
  ? list[process.env.NODE_ENV][process.env.VUE_APP_ENV]
  : list[process.env.NODE_ENV]
export default envConst
```

使用：

```javascript
// 在使用时导入envConst
import envConst from './envConst.js'
console.log(envConst['CONST_KEY'])
```
