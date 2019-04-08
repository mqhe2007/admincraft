(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{175:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("ul",[s("li",[t._m(3),t._v(" "),s("ul",[s("li",[t._v("{Function} "),s("router-link",{attrs:{to:"/guide/#编写一个模块"}},[t._v("admincraftModule")])],1)])]),t._v(" "),t._m(4)]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),s("p",[t._v("在routes中使用自定义布局")]),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),s("ul",[t._m(20),t._v(" "),s("li",[t._m(21),t._v(" "),s("p",[t._v("为侧边栏菜单添加菜单项，可以直接传入"),s("router-link",{attrs:{to:"/options/#路由选项配置"}},[t._v("路由配置数组")]),t._v("，也可以传入"),s("router-link",{attrs:{to:"/options/#菜单配置"}},[t._v("菜单配置数组")]),t._v("数组。")],1)])]),t._v(" "),t._m(22),t._m(23),t._v(" "),s("p",[t._v("动态组件操作")]),t._v(" "),t._m(24),t._v(" "),s("p",[t._v("添加")]),t._v(" "),s("ul",[t._m(25),t._v(" "),s("li",[s("p",[t._v("用法:")]),t._v(" "),s("p",[t._v("为预设的"),s("router-link",{attrs:{to:"/appendix/#动态组件区域"}},[t._v("动态组件区域")]),t._v("添加组件")],1)])]),t._v(" "),t._m(26),t._m(27),t._v(" "),s("p",[t._v("移除")]),t._v(" "),t._m(28),t._v(" "),t._m(29),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._m(39),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),s("p",[t._v("监听一个事件，并且指定回调函数。")]),t._v(" "),t._m(43),t._v(" "),t._m(44),t._v(" "),s("p",[t._v("触发一个事件，并且发送任意数据作为监听方法回调函数的参数。")]),t._v(" "),t._m(45),t._v(" "),t._m(46),t._v(" "),s("p",[t._v("取消一个事件的监听器。")]),t._v(" "),t._m(47),t._v(" "),t._m(48),t._v(" "),s("p",[t._v("清空 eventBus，这会取消所有事件监听。")]),t._v(" "),t._m(49),t._v(" "),t._m(50),t._v(" "),s("p",[t._v("用法参见："),s("a",{attrs:{href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"}},[t._v("axios 官方文档"),s("OutboundLink")],1)]),t._v(" "),t._m(51),t._v(" "),t._m(52),t._v(" "),s("p",[t._v("用法参见："),s("a",{attrs:{href:"https://ustbhuangyi.github.io/better-scroll/#/zh",target:"_blank",rel:"noopener noreferrer"}},[t._v("better-scroll 官方文档"),s("OutboundLink")],1)])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("#")]),this._v(" API")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"全局-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局-api","aria-hidden":"true"}},[this._v("#")]),this._v(" 全局 API")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"admincraft-add"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#admincraft-add","aria-hidden":"true"}},[this._v("#")]),this._v(" Admincraft.add")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h4",{attrs:{id:"参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数","aria-hidden":"true"}},[this._v("#")]),this._v(" 参数:")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",[s("h4",{attrs:{id:"用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用法","aria-hidden":"true"}},[t._v("#")]),t._v(" 用法:")]),t._v(" "),s("p",[t._v("用于提前安装 Admincraft 模块。")]),t._v(" "),s("p",[t._v("除了模块的"),s("code",[t._v("动态加载")]),t._v("，我们实例化应用前也可以预先装载已有的模块数据，这在使得我们在开发 Admincraft 模块的时候可以同步载入模块数据，方便开发。")]),t._v(" "),s("p",[t._v("模块初始化函数会接收两个参数：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("实例对象")]),t._v(" "),s("p",[t._v("可以调用 Admincraft 实例API")])]),t._v(" "),s("li",[s("p",[t._v("Vue构造函数")]),t._v(" "),s("p",[t._v("可以调用 Vue 全局API")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"admincraft-use"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#admincraft-use","aria-hidden":"true"}},[this._v("#")]),this._v(" Admincraft.use")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("h4",{attrs:{id:"参数-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("{Object | Function} plugin")])]),t._v(" "),s("li",[s("p",[t._v("{Object} pluginOptions")])])])]),t._v(" "),s("li",[s("h4",{attrs:{id:"用法-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用法-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 用法:")]),t._v(" "),s("p",[t._v("安装 Vue.js 插件。此处仅仅是起到了转发参数的作用，实际内部使用的还是 Vue.use 接口。")]),t._v(" "),s("p",[t._v("该方法需要在调用 new Admincraft() 之前被调用。")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 虚拟的例子")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" vuePlugin "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-plugin'")]),t._v("\n\nAdmincraft"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vuePlugin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" app "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Admincraft")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"实例-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例-api","aria-hidden":"true"}},[this._v("#")]),this._v(" 实例 API")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"app-addlayout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app-addlayout","aria-hidden":"true"}},[this._v("#")]),this._v(" app.$addLayout")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("h4",{attrs:{id:"参数-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数-3","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("{Object} componentOptionsMap")])]),t._v(" "),s("li",[s("p",[t._v("{Function} callback")])])])]),t._v(" "),s("li",[s("h4",{attrs:{id:"用法-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用法-3","aria-hidden":"true"}},[t._v("#")]),t._v(" 用法:")]),t._v(" "),s("p",[t._v("使用此方法添加自定义布局")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" LayoutDemo "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./LayoutDemo'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$addLayout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'layoutName'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" LayoutDemo\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/any-path'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'routerName'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    meta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'页面示例'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      layout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'layoutName'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    component"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" routerComponent\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"app-addroutes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app-addroutes","aria-hidden":"true"}},[this._v("#")]),this._v(" app.$addRoutes")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("h4",{attrs:{id:"参数-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数-4","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("{Array} routes")])]),t._v(" "),s("li",[s("p",[t._v("{Function} callback")])])])]),t._v(" "),s("li",[s("h4",{attrs:{id:"用法-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用法-4","aria-hidden":"true"}},[t._v("#")]),t._v(" 用法:")]),t._v(" "),s("p",[t._v("添加路由配置")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$addRoutes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("routes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"app-addstore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app-addstore","aria-hidden":"true"}},[this._v("#")]),this._v(" app.$addStore")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("h4",{attrs:{id:"参数-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数-5","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("{String} vuexModuleName")])]),t._v(" "),s("li",[s("p",[t._v("{Object} vuexModule")])]),t._v(" "),s("li",[s("p",[t._v("{Function} callback")])])])]),t._v(" "),s("li",[s("h4",{attrs:{id:"用法-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用法-5","aria-hidden":"true"}},[t._v("#")]),t._v(" 用法:")]),t._v(" "),s("p",[t._v("添加 Vuex 状态模块")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$addStore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuexModuleName'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vuexModule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"app-addmenus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app-addmenus","aria-hidden":"true"}},[this._v("#")]),this._v(" app.$addMenus")])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("h4",{attrs:{id:"参数-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数-6","aria-hidden":"true"}},[this._v("#")]),this._v(" 参数:")]),this._v(" "),a("ul",[a("li",[a("p",[this._v("{Array} routes | menus")])]),this._v(" "),a("li",[a("p",[this._v("{Function} callback")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h4",{attrs:{id:"用法-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法-6","aria-hidden":"true"}},[this._v("#")]),this._v(" 用法:")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$addMenus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("someArray"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"app-dynamiccomponent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app-dynamiccomponent","aria-hidden":"true"}},[this._v("#")]),this._v(" app.$dynamicComponent")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h4",{attrs:{id:"add"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add","aria-hidden":"true"}},[this._v("#")]),this._v(" add")])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("p",[this._v("参数:")]),this._v(" "),a("ul",[a("li",[a("p",[this._v("{String} position")])]),this._v(" "),a("li",[a("p",[this._v("{Object} component")])]),this._v(" "),a("li",[a("p",[this._v("{Function} callback")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$dynamicComponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HEADER_RIGHT_MENUS'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Component"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h4",{attrs:{id:"remove"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remove","aria-hidden":"true"}},[this._v("#")]),this._v(" remove")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("p",[t._v("参数:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("{String} position")])]),t._v(" "),s("li",[s("p",[t._v("{String} componentName")])]),t._v(" "),s("li",[s("p",[t._v("{Function} callback")])])])]),t._v(" "),s("li",[s("p",[t._v("用法:")]),t._v(" "),s("p",[t._v("移除某个动态组件区域内的某个组件")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$dynamicComponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HEADER_RIGHT_MENUS'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'componentName'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"app-addremotelib"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app-addremotelib","aria-hidden":"true"}},[this._v("#")]),this._v(" app.$addRemoteLib")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("h4",{attrs:{id:"参数-7"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数-7","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数:")]),t._v(" "),s("ul",[s("li",[t._v("{Array} libUrl")])])]),t._v(" "),s("li",[s("h4",{attrs:{id:"用法-7"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用法-7","aria-hidden":"true"}},[t._v("#")]),t._v(" 用法:")]),t._v(" "),s("p",[t._v("添加远程库，因为远程资源加载是异步过程，所以方法返回一个 Promise。")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$addRemoteLib")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("libUrlArray"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"app-modifyhome"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app-modifyhome","aria-hidden":"true"}},[this._v("#")]),this._v(" app.$modifyHome")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("h4",{attrs:{id:"参数-8"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数-8","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("{String} routeName")])]),t._v(" "),s("li",[s("p",[t._v("{Function} callback")])])])]),t._v(" "),s("li",[s("h4",{attrs:{id:"用法-8"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用法-8","aria-hidden":"true"}},[t._v("#")]),t._v(" 用法:")]),t._v(" "),s("p",[t._v("改变首页。")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$modifyHome")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'routeName'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"app-moduleloader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app-moduleloader","aria-hidden":"true"}},[this._v("#")]),this._v(" app.$moduleLoader")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("h4",{attrs:{id:"参数-9"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数-9","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数:")]),t._v(" "),s("ul",[s("li",[t._v("{Object} moduleUrlMap")])])]),t._v(" "),s("li",[s("h4",{attrs:{id:"用法-9"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用法-9","aria-hidden":"true"}},[t._v("#")]),t._v(" 用法:")]),t._v(" "),s("p",[t._v("动态加载一个模块，参数需要传入一个模块地址的 map 对象，方法返回 Promise。")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$moduleLoader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'module-a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://www.domain.com/modulea.umd.js'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"实例-api-eventbus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例-api-eventbus","aria-hidden":"true"}},[this._v("#")]),this._v(" 实例 API / eventBus")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("事件总线通过 "),a("code",[this._v("app.$eventBus")]),this._v(" 上的若干个方法进行调用，具体说明如下：")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"eventbus-on"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eventbus-on","aria-hidden":"true"}},[this._v("#")]),this._v(" $eventBus.on()")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[a("h4",{attrs:{id:"参数-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数-10","aria-hidden":"true"}},[this._v("#")]),this._v(" 参数:")]),this._v(" "),a("ul",[a("li",[a("p",[this._v("{String} eventName")])]),this._v(" "),a("li",[a("p",[this._v("{Function} handler")])])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"eventbus-emit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eventbus-emit","aria-hidden":"true"}},[this._v("#")]),this._v(" $eventBus.emit()")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[a("h4",{attrs:{id:"参数-11"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数-11","aria-hidden":"true"}},[this._v("#")]),this._v(" 参数:")]),this._v(" "),a("ul",[a("li",[a("p",[this._v("{String} eventName")])]),this._v(" "),a("li",[a("p",[this._v("{any} payload")])])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"eventbus-off"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eventbus-off","aria-hidden":"true"}},[this._v("#")]),this._v(" $eventBus.off()")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[a("h4",{attrs:{id:"参数-12"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数-12","aria-hidden":"true"}},[this._v("#")]),this._v(" 参数:")]),this._v(" "),a("ul",[a("li",[a("p",[this._v("{String} eventName")])]),this._v(" "),a("li",[a("p",[this._v("{Function} handler")])])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"eventbus-clean"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eventbus-clean","aria-hidden":"true"}},[this._v("#")]),this._v(" $eventBus.clean()")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[a("h4",{attrs:{id:"参数-无"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数-无","aria-hidden":"true"}},[this._v("#")]),this._v(" 参数: 无")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"实例-api-http"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例-api-http","aria-hidden":"true"}},[this._v("#")]),this._v(" 实例 API / $http")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("转发"),a("code",[this._v("axios")]),this._v("配置")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"实例-api-scroll"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例-api-scroll","aria-hidden":"true"}},[this._v("#")]),this._v(" 实例 API / $Scroll")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("转发"),a("code",[this._v("better-scroll")]),this._v("配置，创建一个更像原生应用的滚动盒子。")])}],!1,null,null,null);a.default=n.exports}}]);