# 界面

:::warning

预设组件暂停使用

:::

## 全局组件

### loading

加载中间态提示器

使用`this.$loading`对象调用。

#### open()

打开

#### close()

关闭

### notice

消息提示器

使用`this.$notice`对象调用，每次调用会在窗口右上角显示一个弹出式提示，多次调用依次排列。

#### open()

弹出一个消息框，方法接收一个配置对象：

- 属性

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

### dialog

窗口对话框

使用`this.$dialog`对象调用，每次调用会在窗口正中显示一个对话框，多次调用层叠显示。

#### open()

弹出一个对话框，方法接收一个配置对象：

- 属性

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
