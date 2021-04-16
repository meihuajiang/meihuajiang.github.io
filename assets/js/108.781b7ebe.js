(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{369:function(v,t,a){"use strict";a.r(t);var _=a(9),e=Object(_.a)({},(function(){var v=this,t=v.$createElement,a=v._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h2",{attrs:{id:"mvc，mvp和mvvm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mvc，mvp和mvvm"}},[v._v("#")]),v._v(" MVC，MVP和MVVM")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("MVC（Model-View-Controller）")]),v._v(" "),a("p",[a("img",{attrs:{src:"/img/bg2015020108.png",alt:"MVC"}})]),v._v(" "),a("ol",[a("li",[a("p",[v._v("用户可以向 View 发送指令（DOM 事件），再由 View 直接要求 Model 改变状态。")])]),v._v(" "),a("li",[a("p",[v._v("用户也可以直接向 Controller 发送指令（改变 URL 触发 hashChange 事件），再由 Controller 发送给 View。")])]),v._v(" "),a("li",[a("p",[v._v("Controller 非常薄，只起到路由的作用，而 View 非常厚，业务逻辑都部署在 View。")])])])]),v._v(" "),a("li",[a("p",[v._v("MVP")]),v._v(" "),a("p",[v._v("MVP 模式将 Controller 改名为 Presenter，同时改变了通信方向。")]),v._v(" "),a("p",[a("img",{attrs:{src:"/img/bg2015020109.png",alt:"MVP"}})]),v._v(" "),a("ol",[a("li",[a("p",[v._v("各部分之间的通信，都是双向的。")])]),v._v(" "),a("li",[a("p",[v._v("View 与 Model 不发生联系，都通过 Presenter 传递。")])]),v._v(" "),a("li",[a("p",[v._v('View 非常薄，不部署任何业务逻辑，称为"被动视图"（Passive View），即没有任何主动性，而 Presenter非常厚，所有逻辑都部署在那里。')])])])]),v._v(" "),a("li",[a("p",[v._v("MVVM")]),v._v(" "),a("p",[v._v("MVVM 模式将 Presenter 改名为 ViewModel，基本上与 MVP 模式完全一致。")]),v._v(" "),a("p",[a("img",{attrs:{src:"/img/bg2015020110.png",alt:"MVVM"}})]),v._v(" "),a("p",[v._v("唯一的区别是，它采用双向绑定（data-binding）：View的变动，自动反映在 ViewModel，反之亦然。Angular 和 vue 都采用这种模式。")]),v._v(" "),a("p",[a("img",{attrs:{src:"/img/168bd2ba2ae4ff92",alt:"Vue MVVM示意图"}})])])]),v._v(" "),a("h2",{attrs:{id:"单页应用的优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单页应用的优缺点"}},[v._v("#")]),v._v(" 单页应用的优缺点")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("优点")]),v._v(" "),a("ul",[a("li",[v._v("响应速度更快")]),v._v(" "),a("li",[v._v("单页应用的内容的改变不需要重新加载整个页面")]),v._v(" "),a("li",[v._v("单页应用没有页面之间的切换，就不会出现“白屏现象”,也不会出现假死并有“闪烁”现象")])])]),v._v(" "),a("li",[a("p",[v._v("缺点")]),v._v(" "),a("ul",[a("li",[v._v("不利于SEO")]),v._v(" "),a("li",[v._v("首屏加载慢")])])])]),v._v(" "),a("h3",{attrs:{id:"与多页应用的对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#与多页应用的对比"}},[v._v("#")]),v._v(" 与多页应用的对比")]),v._v(" "),a("p",[a("img",{attrs:{src:"/img/1013869-20180413214226425-113139192.png",alt:"对比"}})]),v._v(" "),a("h2",{attrs:{id:"框架帮我们做了什么事"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#框架帮我们做了什么事"}},[v._v("#")]),v._v(" 框架帮我们做了什么事")]),v._v(" "),a("p",[v._v("框架是一个可复用的设计构件，它规定了应用的体系结构，阐明了整个设计、协作构件之间的依赖关系、责任分配和控制流程，表现为一组抽象类以及其实例之间协作的方法，框架的关键还在于框架内对象间的交互模式和控制流模式。应用框架强调的是软件的设计重用性和系统的可扩充性,以缩短大型应用软件系统的开发周期，提高开发质量。")]),v._v(" "),a("p",[v._v("前端框架，以模型为中心，DOM操作只是附加，通过关注点分离鼓励改进应用程序。未来的发展趋势是前后端只靠json数据进行通信，后端只处理和发送一段json到前端，计算和模板渲染都在前端进行，后台程序不再做模板的任何处理。有效实现前后端的解耦，简化开发流程，便于维护管理，可以把精力更多放到业务逻辑，提升开发效率。")]),v._v(" "),a("ul",[a("li",[v._v("声明式和数据驱动")]),v._v(" "),a("li",[v._v("组件化")]),v._v(" "),a("li",[v._v("路由")]),v._v(" "),a("li",[v._v("社区生态")]),v._v(" "),a("li",[v._v("数据流和状态管理")])]),v._v(" "),a("h2",{attrs:{id:"vue-js相比原生js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-js相比原生js"}},[v._v("#")]),v._v(" Vue.js相比原生js")]),v._v(" "),a("p",[v._v("javaScript是运行在浏览器端的脚本语言，JavaScript主要解决的是前端与用户交互的问题，包括使用交互与数据交互，JavaScript是浏览器解释执行的。")]),v._v(" "),a("p",[v._v("Vue.js可以作为一个js库来使用，也可以用它全套的工具来构建系统界面，这些可以根据项目的需要灵活选择，所以说，Vue.js是一套构建用户界面的渐进式JavaScript框架。Vue的核心库只关注视图层，Vue的目标是通过尽可能简单的 API 实现响应的数据绑定。")]),v._v(" "),a("h3",{attrs:{id:"使用vue是否有利于seo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用vue是否有利于seo"}},[v._v("#")]),v._v(" 使用Vue是否有利于SEO")]),v._v(" "),a("p",[v._v("首先肯定的是前后端分离不利于SEO，为什么呢？")]),v._v(" "),a("ol",[a("li",[a("p",[v._v("搜索引擎的基础爬虫的原理就是抓取url，然后获取html源代码并解析。 而页面通常用了vue.js的数据绑定机制来展示页面数据，爬虫获取到的html是模型页面而不是最终数据的渲染页面。")])]),v._v(" "),a("li",[a("p",[v._v("seo 本质是一个服务器向另一个服务器发起请求，解析请求内容。但一般来说搜索引擎是不会去执行请求到的js的。也就是说，如果一个单页应用，html在服务器端还没有渲染部分数据数据，在浏览器才渲染出数据，而搜索引擎请求到的html是没有渲染数据的。 这样就很不利于内容被搜索引擎搜索到。")])])]),v._v(" "),a("h2",{attrs:{id:"vue与react"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue与react"}},[v._v("#")]),v._v(" Vue与React")]),v._v(" "),a("p",[v._v("React 和 Vue 有许多相似之处，它们都有：")]),v._v(" "),a("ul",[a("li",[v._v("使用 Virtual DOM")]),v._v(" "),a("li",[v._v("提供了响应式 (Reactive) 和组件化 (Composable) 的视图组件。")]),v._v(" "),a("li",[v._v("将注意力集中保持在核心库，而将其他功能如路由和全局状态管理交给相关的库。")])]),v._v(" "),a("h3",{attrs:{id:"组件变化重新渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件变化重新渲染"}},[v._v("#")]),v._v(" 组件变化重新渲染")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("React")]),v._v(" "),a("p",[v._v("在 React 应用中，当某个组件的状态发生变化时，它会以该组件为根，重新渲染整个组件子树。")]),v._v(" "),a("p",[v._v("如要避免不必要的子组件的重渲染，需要在所有可能的地方使用 PureComponent，或是手动实现 shouldComponentUpdate 方法。同时可能会需要使用不可变的数据结构来使得你的组件更容易被优化。")])]),v._v(" "),a("li",[a("p",[v._v("Vue")]),v._v(" "),a("p",[v._v("在 Vue 应用中，组件的依赖是在渲染过程中自动追踪的，所以系统能精确知晓哪个组件确实需要被重渲染。可以理解为每一个组件都已经自动获得了 shouldComponentUpdate，并且没有上述的子树问题限制。")])])]),v._v(" "),a("h3",{attrs:{id:"生态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生态"}},[v._v("#")]),v._v(" 生态")]),v._v(" "),a("p",[v._v("React 的生态系统相比 Vue 更加繁荣。")]),v._v(" "),a("h3",{attrs:{id:"视图更新的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视图更新的区别"}},[v._v("#")]),v._v(" 视图更新的区别")]),v._v(" "),a("h3",{attrs:{id:"组件通信的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件通信的区别"}},[v._v("#")]),v._v(" 组件通信的区别")]),v._v(" "),a("h3",{attrs:{id:"模板渲染方式的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模板渲染方式的区别"}},[v._v("#")]),v._v(" 模板渲染方式的区别")]),v._v(" "),a("h2",{attrs:{id:"发布订阅模式的优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布订阅模式的优缺点"}},[v._v("#")]),v._v(" 发布订阅模式的优缺点")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("优点：")]),v._v(" "),a("ul",[a("li",[v._v("广泛应用于异步编程。对异步运行状态不关心，只关心订阅的某个事件发生点。")]),v._v(" "),a("li",[v._v("一个对象不再显式调用另一个对象的接口，实现解耦合，在不清楚对方细节的情况下仍然可以互相通信。")])])]),v._v(" "),a("li",[a("p",[v._v("缺点：")]),v._v(" "),a("ul",[a("li",[v._v("如果一个被观察者对象有很多的直接和间接的观察者的话，将所有的观察者都通知到会花费很多时间。")]),v._v(" "),a("li",[v._v("如果在观察者和观察目标之间有循环依赖的话，观察目标会触发它们之间进行循环调用，可能导致系统崩溃。")]),v._v(" "),a("li",[v._v("观察者模式没有相应的机制让观察者知道所观察的目标对象是怎么发生变化的，而仅仅只是知道观察目标发生了变化。")])])])]),v._v(" "),a("h2",{attrs:{id:"如果一个页面涉及到的数据交互很少，那么选用那种框架更合适"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如果一个页面涉及到的数据交互很少，那么选用那种框架更合适"}},[v._v("#")]),v._v(" 如果一个页面涉及到的数据交互很少，那么选用那种框架更合适")])])}),[],!1,null,null,null);t.default=e.exports}}]);