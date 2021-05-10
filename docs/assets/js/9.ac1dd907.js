(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{213:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("h2",{attrs:{id:"项目信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目信息"}},[t._v("#")]),t._v(" 项目信息")]),t._v(" "),a("p",[t._v("项目（模块）的基本信息通过 npm 包配置文件"),a("code",[t._v("package.json")]),t._v("来配置，跟模块相关的主要是以下两个属性：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("name")]),t._v(" "),a("ul",[a("li",[t._v("类型："),a("code",[t._v("{String}")])])]),t._v(" "),a("p",[t._v("模块的名称，作为模块相关数据（初始化函数名，vuex 模块名，二级路由名称和路径等）的命名空间。")]),t._v(" "),a("p",[t._v("模块名称遵从 npm 包命名规范。")])]),t._v(" "),a("li",[a("p",[t._v("version")]),t._v(" "),a("ul",[a("li",[t._v("类型："),a("code",[t._v("{String}")])])]),t._v(" "),a("p",[t._v("模块的版本号，版本号命名应遵从"),a("a",{attrs:{href:"https://semver.org/lang/zh-CN/",target:"_blank",rel:"noopener noreferrer"}},[t._v("语义化版本规范"),a("OutboundLink")],1),t._v("。")])])]),t._v(" "),a("h2",{attrs:{id:"admincraft-实例化选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#admincraft-实例化选项"}},[t._v("#")]),t._v(" Admincraft 实例化选项")]),t._v(" "),a("p",[t._v("实例化数据会被保存在"),a("code",[t._v("$store.state.app.config")]),t._v("中，运行时可随时调用。")]),t._v(" "),a("h3",{attrs:{id:"theme"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#theme"}},[t._v("#")]),t._v(" theme")]),t._v(" "),a("p",[t._v("应用主题相关配置")]),t._v(" "),a("h4",{attrs:{id:"title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#title"}},[t._v("#")]),t._v(" title")]),t._v(" "),a("ul",[a("li",[t._v("类型 "),a("code",[t._v("{String} text")])])]),t._v(" "),a("p",[t._v("标题会反映在浏览器选项卡，页脚，logo（如果没有配置 logo 选项）。")]),t._v(" "),a("h4",{attrs:{id:"logo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logo"}},[t._v("#")]),t._v(" logo")]),t._v(" "),a("ul",[a("li",[t._v("类型 "),a("code",[t._v("{String} text")])])]),t._v(" "),a("p",[t._v("logo 可以自定义图片。")]),t._v(" "),a("h3",{attrs:{id:"router"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#router"}},[t._v("#")]),t._v(" router")]),t._v(" "),a("p",[t._v("在 Admincraft 实例化时会同时实例化 vue-router，我们可以通过"),a("code",[t._v("router")]),t._v("选项去配置 vue-router。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" admincraft "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Admincraft")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      mode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hash'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("guards")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("context")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("beforeResolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[a("p",[t._v("config")]),t._v(" "),a("ul",[a("li",[t._v("类型 "),a("code",[t._v("{Object}")])])]),t._v(" "),a("p",[t._v("选项可以参考"),a("a",{attrs:{href:"https://router.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-router 官方文档"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("guards")]),t._v(" "),a("ul",[a("li",[t._v("类型 "),a("code",[t._v("{Function}")])])]),t._v(" "),a("p",[t._v("函数接受上下文对象作为参数，并需要返回 vue-router 全局导航守卫对象。")])])]),t._v(" "),a("h3",{attrs:{id:"http"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[t._v("#")]),t._v(" http")]),t._v(" "),a("p",[t._v("请求实例配置")]),t._v(" "),a("p",[t._v("Admincraft 内部封装了强大易用的 http 网络请求库"),a("a",{attrs:{href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"}},[t._v("axios"),a("OutboundLink")],1),t._v("。如果你还没用过，那需要了解一下，很容易上手。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("strong",[t._v("为什么要把网络请求库也集成在内？")])]),t._v(" "),a("p",[t._v("大多数时候，我们一个项目中的网络请求库在使用前会进行一些全局配置，比如库的选取，请求参数的调整，拦截器的处理，错误情况的处理等等，往后更多的时间就是逐个实现业务接口，全局化配置便不再改动。所以我们不如把请求库，拦截器，错误处理逻辑提前准备好，尽量做到开箱即用。")])]),t._v(" "),a("p",[t._v("在 Admincraft 实例化时会同时实例化 axios，我们可以通过"),a("code",[t._v("http")]),t._v("选项去配置 axios。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" admincraft "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Admincraft")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      baseURL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://some-domain.com/api/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      timeout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("interceptor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("context")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[a("p",[t._v("config")]),t._v(" "),a("ul",[a("li",[t._v("类型 "),a("code",[t._v("{Object}")])])]),t._v(" "),a("p",[t._v("选项列表可以参考"),a("a",{attrs:{href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"}},[t._v("axios 官方文档"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("interceptor")]),t._v(" "),a("ul",[a("li",[t._v("类型 "),a("code",[t._v("{Function}")])])]),t._v(" "),a("p",[t._v("可选配置的拦截器方法, 函数接受上下文对象作为参数，并需要返回如下拦截器配置对象：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("request")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("success")]),t._v(" "),a("p",[t._v("请求"),a("code",[t._v("成功")]),t._v("拦截器方法。")])]),t._v(" "),a("li",[a("p",[t._v("error")]),t._v(" "),a("p",[t._v("请求"),a("code",[t._v("失败")]),t._v("拦截器方法。")])])])]),t._v(" "),a("li",[a("p",[t._v("response")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("success")]),t._v(" "),a("p",[t._v("响应"),a("code",[t._v("成功")]),t._v("拦截器方法。")])]),t._v(" "),a("li",[a("p",[t._v("error")]),t._v(" "),a("p",[t._v("响应"),a("code",[t._v("失败")]),t._v("拦截器方法。")])])])])])])]),t._v(" "),a("h2",{attrs:{id:"路由选项配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由选项配置"}},[t._v("#")]),t._v(" 路由选项配置")]),t._v(" "),a("p",[t._v("在 Admincraft 项目中，路由的"),a("code",[t._v("name")]),t._v("属性是必选且要保持唯一，我们会使用"),a("code",[t._v("name")]),t._v("进行路由导航，匹配菜单，匹配页签等。")]),t._v(" "),a("p",[t._v("除"),a("a",{attrs:{href:"https://router.vuejs.org/zh/api/#routes",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue-router 原本的属性"),a("OutboundLink")],1),t._v("外，Admincraft 还支持如下 meta 属性：")]),t._v(" "),a("h3",{attrs:{id:"meta-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#meta-title"}},[t._v("#")]),t._v(" meta.title")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("类型："),a("code",[t._v("String")])])]),t._v(" "),a("li",[a("p",[t._v("必选")])])]),t._v(" "),a("p",[t._v("当前路由对应的页面标题，会更新浏览器选项卡，作为控制台页签栏标题。")]),t._v(" "),a("h3",{attrs:{id:"meta-icon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#meta-icon"}},[t._v("#")]),t._v(" meta.icon")]),t._v(" "),a("ul",[a("li",[t._v("类型："),a("code",[t._v("String")])])]),t._v(" "),a("p",[t._v("菜单名称前的小图标，仅支持 iconfont 平台的 symbol 引用方式。")]),t._v(" "),a("p",[t._v("第一步：下载 iconfont 项目文件，在项目入口文件导入 symbol 引用的 js 文件。")]),t._v(" "),a("p",[t._v("第二步：icon 处填写相应图标类名")]),t._v(" "),a("h3",{attrs:{id:"meta-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#meta-index"}},[t._v("#")]),t._v(" meta.index")]),t._v(" "),a("ul",[a("li",[t._v("类型："),a("code",[t._v("Number")])])]),t._v(" "),a("p",[t._v("作为菜单时同级的显示顺序，如果值相同则按先后顺序排列。")]),t._v(" "),a("h3",{attrs:{id:"meta-layout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#meta-layout"}},[t._v("#")]),t._v(" meta.layout")]),t._v(" "),a("ul",[a("li",[t._v("类型："),a("code",[t._v("String")])])]),t._v(" "),a("p",[t._v("为当前路由页面指定使用的布局，如果不指定则使用默认的控制台布局。")]),t._v(" "),a("h3",{attrs:{id:"meta-nonmenu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#meta-nonmenu"}},[t._v("#")]),t._v(" meta.NonMenu")]),t._v(" "),a("ul",[a("li",[t._v("类型："),a("code",[t._v("Boolean")])])]),t._v(" "),a("p",[t._v("是否生成为菜单，默认为不配置，如果设置成 true,则生成菜单时会跳过当前路由。")]),t._v(" "),a("h3",{attrs:{id:"meta-nontab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#meta-nontab"}},[t._v("#")]),t._v(" meta.NonTab")]),t._v(" "),a("ul",[a("li",[t._v("类型："),a("code",[t._v("Boolean")])])]),t._v(" "),a("p",[t._v("页面是否在页签栏生成记录，默认为不配置，如果设置成 true,则当前页面打开后不会记录在页签栏。")]),t._v(" "),a("h3",{attrs:{id:"meta-permissiontag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#meta-permissiontag"}},[t._v("#")]),t._v(" meta.permissionTag")]),t._v(" "),a("ul",[a("li",[t._v("类型："),a("code",[t._v("String")])])]),t._v(" "),a("p",[t._v("当前路由的权限标签，此权限标签在生成菜单时会和用户权限列表进行匹配，只有匹配成功的路由才可见。")]),t._v(" "),a("h2",{attrs:{id:"菜单配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#菜单配置"}},[t._v("#")]),t._v(" 菜单配置")]),t._v(" "),a("h3",{attrs:{id:"index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#index"}},[t._v("#")]),t._v(" index")]),t._v(" "),a("ul",[a("li",[t._v("类型："),a("code",[t._v("Number")])])]),t._v(" "),a("p",[t._v("作为菜单时同级的显示顺序，如果值相同则按先后顺序排列。")]),t._v(" "),a("h3",{attrs:{id:"title-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#title-2"}},[t._v("#")]),t._v(" title")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("类型："),a("code",[t._v("String")])])]),t._v(" "),a("li",[a("p",[t._v("必选")])])]),t._v(" "),a("p",[t._v("当前路由对应的页面标题，会更新浏览器选项卡，作为控制台页签栏标题。")]),t._v(" "),a("h3",{attrs:{id:"name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[t._v("#")]),t._v(" name")]),t._v(" "),a("ul",[a("li",[t._v("类型："),a("code",[t._v("String")])])]),t._v(" "),a("p",[t._v("对应要访问的路由的"),a("code",[t._v("name")]),t._v("值。")]),t._v(" "),a("h3",{attrs:{id:"children"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#children"}},[t._v("#")]),t._v(" children")]),t._v(" "),a("ul",[a("li",[t._v("类型："),a("code",[t._v("Array")])])]),t._v(" "),a("p",[t._v("子菜单对象数组。")]),t._v(" "),a("h3",{attrs:{id:"parents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parents"}},[t._v("#")]),t._v(" parents")]),t._v(" "),a("ul",[a("li",[t._v("类型："),a("code",[t._v("String")])])]),t._v(" "),a("p",[t._v("以菜单项"),a("code",[t._v("name")]),t._v("值（路由"),a("code",[t._v("name")]),t._v("）组成的路径格式指定父级菜单，当前菜单会插入最后一级菜单的"),a("code",[t._v("children")]),t._v("中。例如：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$addMenus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    parents"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'level1/level2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'三级菜单'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'level3'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("当前菜单项就会被插入到 "),a("code",[t._v("level1")]),t._v("下的"),a("code",[t._v("level2")]),t._v("下，结构应该是这样的。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("level1")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("level2")]),t._v(" "),a("ul",[a("li",[t._v("level3")])])])])])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("如果插入次级的菜单"),a("code",[t._v("name")]),t._v("值来源于路由配置，为避免重复定义，则需要在同名路由中设置"),a("code",[t._v("NonMenu")]),t._v("为 true。")])]),t._v(" "),a("h3",{attrs:{id:"url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#url"}},[t._v("#")]),t._v(" url")]),t._v(" "),a("ul",[a("li",[t._v("类型："),a("code",[t._v("String")])])]),t._v(" "),a("p",[t._v("外链地址，如果菜单对象中配置了此属性，则菜单会作为一个外链菜单，点击后会优先在新标签页跳转到此地址。")]),t._v(" "),a("h2",{attrs:{id:"远程库配置（废弃）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#远程库配置（废弃）"}},[t._v("#")]),t._v(" 远程库配置（废弃）")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("推荐使用 npm 安装并导入使用一个第三方库")])]),t._v(" "),a("p",[t._v("如果有特殊需求必须放在模块本地目录，我们需要特别的去配置以 html 标签的方式加载第三方库。")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("首选需要把要引用的第三方库放在"),a("code",[t._v("public")]),t._v("目录下。")])]),t._v(" "),a("li",[a("p",[t._v("创建一个 js 文件导出第三方库引用路径的列表数组。")])])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("路径默认开始于"),a("code",[t._v("public")]),t._v("，并且最前面不需要加"),a("code",[t._v("/")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// libs.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'libs/prism.css'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'libs/prism.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("在模块的初始化函数中导入第三方库列表，初始化时使用$addRemoteLib 方法加载。")])]),t._v(" "),a("p",[t._v("看起来如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" libs "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./libs'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 动态的获取到模块部署地址的url")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" moduleServerUrl\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentScript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/(.+\\/)[^/]+\\.js$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  moduleServerUrl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// init函数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("Vue")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注册libs")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取完整第三方库url连接")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getRemoteLibUrlList")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("libs")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" libs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" moduleServerUrl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$addRemoteLib")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRemoteLibUrlList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("libs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"构建环境配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建环境配置"}},[t._v("#")]),t._v(" 构建环境配置")]),t._v(" "),a("p",[t._v("我们可以通过"),a("a",{attrs:{href:"https://cli.vuejs.org/zh/guide/mode-and-env.html#%E6%A8%A1%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-cli@3 的模式"),a("OutboundLink")],1),t._v("，根据不同构建模式选取"),a("code",[t._v("VUE_APP_ENV")]),t._v("常量值，并在构建时根据"),a("code",[t._v("VUE_APP_ENV")]),t._v("的值动态获取响应环境的配置。")]),t._v(" "),a("h3",{attrs:{id:"添加一个构建环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加一个构建环境"}},[t._v("#")]),t._v(" 添加一个构建环境")]),t._v(" "),a("p",[t._v("如果我们需要添加一个名为"),a("code",[t._v("test")]),t._v("的构建环境。")]),t._v(" "),a("ol",[a("li",[t._v("在根目录添加以构建环境为后缀名的.env 文件，并且"),a("code",[t._v("VUE_APP_ENV=test")]),t._v("。")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# .env.test")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("NODE_ENV")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("production\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("VUE_APP_ENV")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("test\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("在"),a("code",[t._v("package.json")]),t._v("的"),a("code",[t._v("scripts")]),t._v("中添加相对应的构建脚本，注意出现"),a("code",[t._v("test")]),t._v("字符的位置，其他环境同理替换。")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build:test"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue-cli-service build --mode test --target lib src/init.js"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("至此，我们就添加了一个以 test 环境构建生产代码的构建配置，再配合根据每套环境名配置的常量，我们就实现了根据不同环境切换常量，见下文。")]),t._v(" "),a("h3",{attrs:{id:"环境常量配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境常量配置"}},[t._v("#")]),t._v(" 环境常量配置")]),t._v(" "),a("p",[t._v("环境常量通常记录着代码中用到的固定值，通常需要根据构建环境去切换，通过上面创建的环境构建我们很容易切换配置。")]),t._v(" "),a("p",[t._v("我们可以创建一个 js 文件，按如下操作导出常量对象。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// envConst.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" list "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  development"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CONST_KEY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'const value'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  production"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CONST_KEY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'constValue'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通过构建环境来获取不同常量对象")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" envConst "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VUE_APP_ENV")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VUE_APP_ENV")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" envConst\n")])])]),a("p",[t._v("使用：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在使用时导入envConst")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" envConst "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./envConst.js'")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("envConst"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'CONST_KEY'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);