# admincraft

Admincraft，名称借鉴自“Minecraft”。也是希望 Admincraft 能够像“Minecraft”一样成为一个灵活自由强大的工具，为中后台应用的快速开发寻找一个新的方式。

## 安装

```
yarn add admincraft
```

## 快速开始

``` javascript

// 导入Admincraft构造函数
import { Admincraft } from 'admincraft'
// 创建挂载DOM
let appElement = document.createElement('div')
document.body.appendChild(appElement)
// 实例化
let admincraft = new Admincraft()
admincraft.$mount(appElement)

```

详细用法请阅读[使用文档](https://mqhe2007.github.io/admincraft/)