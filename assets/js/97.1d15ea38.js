(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{356:function(t,a,s){"use strict";s.r(a);var r=s(9),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"element-ui要覆盖默认样式怎么做"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#element-ui要覆盖默认样式怎么做"}},[t._v("#")]),t._v(" Element-UI要覆盖默认样式怎么做")]),t._v(" "),s("p",[t._v("由于 element-ui 的样式我们是在全局引入的，所以你想在某个view里面覆盖它的样式就不能加 scoped，但你又想只覆盖这个页面的 element 样式，你就可在它的父级加一个 class，以用命名空间来解决问题")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 你的命名空间 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".article-page")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* element-ui 元素 */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".el-tag")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-right")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"ui组件库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ui组件库"}},[t._v("#")]),t._v(" UI组件库")]),t._v(" "),s("h2",{attrs:{id:"开发组件库需要注意的事项，和正常开发业务组件的区别。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发组件库需要注意的事项，和正常开发业务组件的区别。"}},[t._v("#")]),t._v(" 开发组件库需要注意的事项，和正常开发业务组件的区别。")]),t._v(" "),s("h2",{attrs:{id:"echart"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#echart"}},[t._v("#")]),t._v(" Echart⭐️")]),t._v(" "),s("h3",{attrs:{id:"原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),s("h3",{attrs:{id:"echart和antv有什么区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#echart和antv有什么区别"}},[t._v("#")]),t._v(" Echart和antv有什么区别")]),t._v(" "),s("h3",{attrs:{id:"echart模块化开发一个柱形图怎么做"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#echart模块化开发一个柱形图怎么做"}},[t._v("#")]),t._v(" Echart模块化开发一个柱形图怎么做")]),t._v(" "),s("h3",{attrs:{id:"echart使用的是svg还是canvas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#echart使用的是svg还是canvas"}},[t._v("#")]),t._v(" Echart使用的是svg还是canvas")]),t._v(" "),s("p",[t._v("Canvas：更适合绘制图形元素数量非常大的图表，比如热力图、地理坐标系，也利于实现某些视觉效果。\nSvg：内存占有更低（适合移动端）、渲染性能高、并且用户使用浏览器内置的缩放功能不会模糊。")]),t._v(" "),s("ul",[s("li",[t._v("在软硬件环境较好，数据量不大的场景下，都可以使用两种")]),t._v(" "),s("li",[t._v("在创建很多实例，且浏览器易崩溃的时候，可以使用Svg渲染器进行改善。")]),t._v(" "),s("li",[t._v("数据量很大、较多交互时，可以使用Canvas渲染器。")])]),t._v(" "),s("h3",{attrs:{id:"项目中包含数据的可视化展示模块，问数据量大小，数据量大的话可能会出现什么问题，优化方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目中包含数据的可视化展示模块，问数据量大小，数据量大的话可能会出现什么问题，优化方法"}},[t._v("#")]),t._v(" 项目中包含数据的可视化展示模块，问数据量大小，数据量大的话可能会出现什么问题，优化方法")]),t._v(" "),s("h3",{attrs:{id:"echart图之间的相互切换可能会有延迟或卡顿，如何优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#echart图之间的相互切换可能会有延迟或卡顿，如何优化"}},[t._v("#")]),t._v(" Echart图之间的相互切换可能会有延迟或卡顿，如何优化")]),t._v(" "),s("h3",{attrs:{id:"echart的自适应"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#echart的自适应"}},[t._v("#")]),t._v(" Echart的自适应")]),t._v(" "),s("p",[t._v("因为 ECharts 本身并不是自适应的，当你父级容器的宽度发生变化的时候需要手动调用它的 .resize() 方法。")]),t._v(" "),s("h3",{attrs:{id:"echart销毁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#echart销毁"}},[t._v("#")]),t._v(" Echart销毁")]),t._v(" "),s("h3",{attrs:{id:"可视化分析手法，数据处理算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可视化分析手法，数据处理算法"}},[t._v("#")]),t._v(" 可视化分析手法，数据处理算法")]),t._v(" "),s("h2",{attrs:{id:"better-scroll"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#better-scroll"}},[t._v("#")]),t._v(" better-scroll")])])}),[],!1,null,null,null);a.default=e.exports}}]);