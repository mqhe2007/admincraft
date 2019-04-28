# admincraft-ui

:::warning

可选 UI 模块现已抽离，可以单独安装[admincraft-ui](https://github.com/mqhe2007/admincraft-ui)模块进行体验，请勿用于正式项目。文档持续撰写中……

:::

## 可选布局

### 默认布局

meta.layout 值: `layoutDefault`

默认为控制台布局，是系统主要布局，包括头部，左侧菜单，尾部，页签栏，页面内容等。

此布局用于绝大多数业务模块路由。

### 毛坯布局

meta.layout 值: `layoutBlank`

毛坯布局为全空白页面，任何路由页面选用此布局后，只会显示路由页面自身内容。常用于系统注册流程，登录页，帮助页面等页面。

## 组件

### 展示

#### menu 菜单

。。。

### 提醒

#### loading 加载中间态提示器

使用`this.$loading`对象调用。

- open() 打开

- close() 关闭

#### notice 消息提醒

使用`this.$notice`对象调用，每次调用会在窗口右上角显示一个弹出式提示，多次调用依次排列。

- open()

  弹出一个消息框，方法接收一个配置对象：

    - {String} title 消息标题

    - {String} content 消息内容

    - {Number} duration 消息框显示持续时间，单位毫秒。

    - {Function} onClosed 消息框关闭时的回调

  ```js
  this.$notice.open({
    title: '消息通知标题',
    content: '消息通知内容',
    duration: 5000, // 可选
    onClosed: () => {
      console.log('notice已关闭')
    }
  })
  ```

#### dialog 窗口对话框

使用`this.$dialog`对象调用，每次调用会在窗口正中显示一个对话框，多次调用层叠显示。

- open()

  弹出一个对话框，方法接收一个配置对象：

  - {String} title 消息标题

  - {Object} render 组件选项对象

  - {Function} onClosed 关闭时的回调

```js
import component from './component.vue'
this.$dialog.open({
  title: '标题',
  render: component,
  onClosed: () => {
    console.log('dialog已关闭')
  }
})
```

## API

### $setHomepage

- #### 参数:

  - {String} routeName

  - {Function} callback

- #### 用途:

  Admincraft-ui 使用 render 函数令首页变得可配置，首页路由地址可以显示任何页面。我们通过提交一个实例方法来实现修改首页：

  ```javascript
  this.$setHomepage('routeName', () => {})
  ```

### $addMenus

- #### 参数:

  - {Array} routes | menus

  - {Function} callback

- #### 用法:

  为侧边栏菜单添加菜单项，可以直接传入[路由配置数组](/options/#路由选项配置)，也可以传入[菜单配置数组](/options/#菜单配置)数组。

  ```javascript
  this.$addMenus(someArray, () => {})
  ```

## 指令

### v-permission

权限控制

通过此指令配合[用户权限标记](/ui/#user)可以实现任何粒度的权限控制。

```vue
<template>
  <button v-permission="USER_ADD">添加用户</button>
</template>
```

## 状态

ui自带状态，可以通过vue-devtools查看

### user

用户信息

#### permissionTags 

- `{Array}`

用户权限标记

## 事件列表

### NOTICE_CENTER_CLEAN_ALL

- 载荷

  无

- 触发时机

  消息中心的消息列表被清空时触发。

## 动态组件区域

### HEADER_RIGHT_MENUS

控制台头部右侧菜单区域
