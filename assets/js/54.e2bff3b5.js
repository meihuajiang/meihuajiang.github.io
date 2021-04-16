(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{313:function(t,s,a){"use strict";a.r(s);var n=a(9),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"同源协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同源协议"}},[t._v("#")]),t._v(" 同源协议")]),t._v(" "),a("p",[t._v('所谓同源是指 "协议 +域名 +端口(可以忽略) "三者相同。')]),t._v(" "),a("p",[a("strong",[t._v("标准规定端口不同的网址不是同源，但是浏览器没有遵守这条规定。")])]),t._v(" "),a("p",[a("strong",[t._v("实际上，同一个网域的不同端口，是可以互相读取 Cookie 的。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("主域相同，子域不同时不允许通信")]),t._v(" "),a("p",[t._v("域名和域名对应的ip也不允许通信")])]),t._v(" "),a("h3",{attrs:{id:"目的和原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目的和原因"}},[t._v("#")]),t._v(" 目的和原因")]),t._v(" "),a("p",[t._v("同源政策的目的，是为了保证用户信息的安全，防止恶意的网站窃取数据。")]),t._v(" "),a("p",[t._v("设想这样一种情况：A 网站是一家银行，用户登录以后，A 网站在用户的机器上设置了一个 Cookie，包含了一些隐私信息。")]),t._v(" "),a("p",[t._v("用户离开 A 网站以后，又去访问 B 网站，如果没有同源限制，B 网站可以读取 A 网站的 Cookie，那么隐私就泄漏了。")]),t._v(" "),a("p",[t._v("更可怕的是，Cookie 往往用来保存用户的登录状态，如果用户没有退出登录，其他网站就可以冒充用户，为所欲为。")]),t._v(" "),a("p",[a("strong",[t._v("浏览器同时还规定，提交表单不受同源政策的限制。")])]),t._v(" "),a("p",[t._v("由此可见，同源政策是必需的，否则 Cookie 可以共享，互联网就毫无安全可言了")]),t._v(" "),a("h3",{attrs:{id:"限制范围"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#限制范围"}},[t._v("#")]),t._v(" 限制范围")]),t._v(" "),a("p",[t._v("目前，如果非同源，共有三种行为受到限制。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("无法读取非同源网页的 Cookie、LocalStorage 和 IndexedDB。")])]),t._v(" "),a("li",[a("p",[t._v("无法接触非同源网页的 DOM。")])]),t._v(" "),a("li",[a("p",[t._v("无法向非同源地址发送 AJAX 请求（可以发送，但浏览器会拒绝接受响应）。")])])]),t._v(" "),a("p",[t._v("通过 JavaScript 脚本可以拿到其他窗口的window对象。")]),t._v(" "),a("p",[t._v("如果是非同源的网页，目前允许一个窗口可以接触其他网页的window对象的九个属性和四个方法。")]),t._v(" "),a("ul",[a("li",[t._v("window.closed")]),t._v(" "),a("li",[t._v("window.frames")]),t._v(" "),a("li",[t._v("window.length")]),t._v(" "),a("li",[t._v("window.location")]),t._v(" "),a("li",[t._v("window.opener")]),t._v(" "),a("li",[t._v("window.parent")]),t._v(" "),a("li",[t._v("window.self")]),t._v(" "),a("li",[t._v("window.top")]),t._v(" "),a("li",[t._v("window.window")]),t._v(" "),a("li",[t._v("window.blur()")]),t._v(" "),a("li",[t._v("window.close()")]),t._v(" "),a("li",[t._v("window.focus()")]),t._v(" "),a("li",[t._v("window.postMessage()")])]),t._v(" "),a("p",[t._v("上面的九个属性之中，只有window.location是可读写的，其他八个全部都是只读。")]),t._v(" "),a("p",[t._v("而且，即使是location对象，非同源的情况下，也只允许调用location.replace()方法和写入location.href属性。")]),t._v(" "),a("h2",{attrs:{id:"哪些情况会发生跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哪些情况会发生跨域"}},[t._v("#")]),t._v(" 哪些情况会发生跨域")]),t._v(" "),a("ul",[a("li",[t._v("ajax")]),t._v(" "),a("li",[t._v("cookie")]),t._v(" "),a("li",[t._v("iframe")]),t._v(" "),a("li",[t._v("LocalStorage")])]),t._v(" "),a("h2",{attrs:{id:"cookie跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie跨域"}},[t._v("#")]),t._v(" cookie跨域")]),t._v(" "),a("p",[a("strong",[t._v("如果两个网页一级域名相同，只是次级域名不同，浏览器允许通过设置document.domain共享 Cookie。")])]),t._v(" "),a("p",[t._v("因为浏览器通过document.domain属性来检查是否同源。两个网页都需要设置document.domain属性，才能达到同源的目的。")]),t._v(" "),a("p",[t._v("因为设置document.domain的同时，会把端口重置为null，因此如果只设置一个网页的document.domain，会导致两个网址的端口不同，还是达不到同源的目的。")]),t._v(" "),a("p",[a("strong",[t._v("只适用于 Cookie 和 iframe 窗口，LocalStorage 和 IndexedDB 无法通过这种方法")])]),t._v(" "),a("h3",{attrs:{id:"qq-com和b-qq-com之间可以访问cookie吗？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qq-com和b-qq-com之间可以访问cookie吗？"}},[t._v("#")]),t._v(" qq.com和b.qq.com之间可以访问cookie吗？")]),t._v(" "),a("p",[t._v("可以访问")]),t._v(" "),a("h2",{attrs:{id:"localstorage跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#localstorage跨域"}},[t._v("#")]),t._v(" LocalStorage跨域")]),t._v(" "),a("p",[t._v("通过window.postMessage，可以读写其他窗口的 LocalStorage")]),t._v(" "),a("h2",{attrs:{id:"img-标签跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#img-标签跨域"}},[t._v("#")]),t._v(" img 标签跨域")]),t._v(" "),a("p",[t._v("因为src请求资源不属于同源策略，所以一般可以用来做埋点，比如监听网页的PV(Page View)，UV(Unique Visitor)。")]),t._v(" "),a("blockquote",[a("p",[t._v("不需要管会返回成功还是失败,因为 img只能单向发送get请求，不可访问响应内容（只是展现）所以刚刚好")])]),t._v(" "),a("h3",{attrs:{id:"服务端向服务端请求会产生跨域吗？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务端向服务端请求会产生跨域吗？"}},[t._v("#")]),t._v(" 服务端向服务端请求会产生跨域吗？")]),t._v(" "),a("p",[t._v("浏览器基于安全方面的考虑，引入同源策略(same-origin policy)，非同源情况下，浏览器会将服务端返回的结果拦截掉。")]),t._v(" "),a("p",[a("strong",[t._v("同源策略是浏览器需要遵循的标准，而如果是服务器向服务器请求就无需遵循同源策略")])]),t._v(" "),a("h2",{attrs:{id:"解决跨域的措施"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决跨域的措施"}},[t._v("#")]),t._v(" 解决跨域的措施")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("jsonp跨域")])]),t._v(" "),a("li",[a("p",[t._v("document.domain + iframe跨域")]),t._v(" "),a("p",[t._v("只有在主域相同的时候才能使用该方法")])]),t._v(" "),a("li",[a("p",[t._v("location.hash + iframe")]),t._v(" "),a("p",[t._v("利用location.hash来进行传值")])]),t._v(" "),a("li",[a("p",[t._v("window.name + iframe跨域")]),t._v(" "),a("p",[t._v("name 值在不同的页面（甚至不同域名）加载后依旧存在，并且可以支持非常长的 name 值（2MB）")])]),t._v(" "),a("li",[a("p",[t._v("postMessage跨域")])]),t._v(" "),a("li",[a("p",[t._v("跨域资源共享（CORS）")]),t._v(" "),a("p",[t._v("推荐使用")])]),t._v(" "),a("li",[a("p",[t._v("nginx代理跨域")])]),t._v(" "),a("li",[a("p",[t._v("nodejs中间件代理跨域")])]),t._v(" "),a("li",[a("p",[t._v("WebSocket协议跨域")]),t._v(" "),a("p",[t._v("同源策略对web sockets不适用")])])]),t._v(" "),a("h2",{attrs:{id:"通过jsonp跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过jsonp跨域"}},[t._v("#")]),t._v(" 通过jsonp跨域")]),t._v(" "),a("p",[t._v("JSONP 是服务器与客户端跨源通信的常用方法。最大特点就是简单易用，没有兼容性问题，老式浏览器全部支持，服务端改造非常小。")]),t._v(" "),a("p",[t._v("步骤如下：")]),t._v(" "),a("ol",[a("li",[t._v("网页添加一个script元素，向服务器请求一个脚本，这不受同源政策限制，可以跨域请求。")])]),t._v(" "),a("p",[a("code",[t._v('<script src="http://api.foo.com?callback=bar"><\/script>')])]),t._v(" "),a("p",[a("strong",[t._v("请求的脚本网址有一个callback参数（?callback=bar），用来告诉服务器，客户端的回调函数名称（bar）。")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[a("strong",[t._v("服务器收到请求后，拼接一个字符串，将 JSON 数据放在函数名里面，作为字符串返回（bar({...})）。")])])]),t._v(" "),a("li",[a("p",[t._v("客户端会将服务器返回的字符串，作为代码解析，因为浏览器认为，这是script标签请求的脚本内容。")])]),t._v(" "),a("li",[a("p",[t._v("这时，客户端只要定义了bar()函数，就能在该函数体内，拿到服务器返回的 JSON 数据。")])])]),t._v(" "),a("p",[t._v("由于script元素请求的脚本，直接作为代码运行。这时，只要浏览器定义了回调函数，该函数就会立即调用。")]),t._v(" "),a("p",[a("strong",[t._v("作为参数的 JSON 数据被视为 JavaScript 对象，而不是字符串，因此避免了使用JSON.parse的步骤")]),t._v("。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("说明")]),t._v(" "),a("p",[t._v("听说很少使用了，在这里单纯提及一下。")])]),t._v(" "),a("h3",{attrs:{id:"缺陷"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺陷"}},[t._v("#")]),t._v(" 缺陷")]),t._v(" "),a("ul",[a("li",[t._v("JSONP 只能发GET请求")])]),t._v(" "),a("h3",{attrs:{id:"如何防止其他人使用-jsonp-或者-跨域请求接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何防止其他人使用-jsonp-或者-跨域请求接口"}},[t._v("#")]),t._v(" 如何防止其他人使用 jsonp 或者 跨域请求接口")]),t._v(" "),a("p",[t._v("做 Referer 校验和 Token 校验。")]),t._v(" "),a("p",[t._v("HTTP Referer是header的一部分，当浏览器向web服务器发送请求的时候，一般会带上Referer，告诉服务器请求是从哪个页面链接过来的，服务器基此可以获得一些信息用于处理。通过对header中的访问发起者的来源进行验证来保证安全性。")]),t._v(" "),a("p",[t._v("但是Referer是存在被绕过的可能的，即可以“不发送Referer”，比如：")]),t._v(" "),a("ul",[a("li",[t._v("使用data URI方案")]),t._v(" "),a("li",[t._v("从HTTPS向HTTP发起请求")])]),t._v(" "),a("p",[t._v("Token 主要是指能代表用户身份的标识")]),t._v(" "),a("p",[t._v("虽然也可以破解，但是破解的难度较高，通过在运行非同源跨域的网站植入恶意代码，间接依靠“白名单”站点来获取Token发起跨域访问，可以同时绕过Referer和Token的，但是植入恶意代码的难度较高。")]),t._v(" "),a("h3",{attrs:{id:"jsonp里的回调如何执行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsonp里的回调如何执行"}},[t._v("#")]),t._v(" JSONP里的回调如何执行")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//客户端，src为请求地址")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addScriptTag")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" script "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  script"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttribute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/javascript"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  script"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" src"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onload")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addScriptTag")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://example.com/ip?callback=foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'response data: '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                      \n    \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//服务端")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//服务端对应的接口在返回参数外面添加函数包裹层")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"testData"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                     \n")])])]),a("h2",{attrs:{id:"location-hash-iframe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#location-hash-iframe"}},[t._v("#")]),t._v(" location.hash + iframe")]),t._v(" "),a("p",[t._v("片段标识符（fragment identifier）指的是，URL 的#号后面的部分")]),t._v(" "),a("p",[t._v("如果只是改变片段标识符，页面不会重新刷新。")]),t._v(" "),a("p",[t._v("父窗口可以把信息，写入子窗口的片段标识符。")]),t._v(" "),a("p",[t._v("子窗口通过监听hashchange事件得到通知。")]),t._v(" "),a("h2",{attrs:{id:"postmessage跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#postmessage跨域"}},[t._v("#")]),t._v(" postMessage跨域")]),t._v(" "),a("p",[t._v("HTML5 引入了一个全新的API：跨文档通信 API（Cross-document messaging）")]),t._v(" "),a("p",[t._v("该API 为window对象新增了一个window.postMessage方法，允许跨窗口通信，不论这两个窗口是否同源。")]),t._v(" "),a("p",[t._v("举例来说，父窗口aaa.com向子窗口bbb.com发消息，调用postMessage方法就可以了。")]),t._v(" "),a("p",[t._v("postMessage方法的第一个参数是具体的信息内容，")]),t._v(" "),a("p",[t._v("第二个参数是接收消息的窗口的源（origin），即“协议 + 域名 + 端口”。也可以设为*，表示不限制域名，向所有窗口发送。")]),t._v(" "),a("p",[t._v("子窗口向父窗口发送消息的写法类似。")]),t._v(" "),a("p",[t._v("父窗口和子窗口都可以通过message事件，监听对方的消息")]),t._v(" "),a("p",[t._v("message事件的参数是事件对象event，提供以下三个属性。")]),t._v(" "),a("ul",[a("li",[t._v("event.source：发送消息的窗口")]),t._v(" "),a("li",[t._v("event.origin: 消息发向的网址")]),t._v(" "),a("li",[t._v("event.data: 消息内容")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发送端")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("load")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("params")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" frame "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'frame'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取iframe中的窗口,给iframe里嵌入的window发消息")]),t._v("\n    frame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contentWindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("postMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:4000'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接收b.html回过来的消息")]),t._v("\n    window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onmessage")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//接收端")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//监听发送端发来的消息")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onmessage")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//给发送源回消息")]),t._v("\n    e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("postMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nice to meet you'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("origin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"跨域资源共享（cors）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨域资源共享（cors）"}},[t._v("#")]),t._v(" 跨域资源共享（CORS）⭐️")]),t._v(" "),a("p",[t._v("CORS 是一个 W3C 标准，全称是“跨域资源共享”（Cross-origin resource sharing）。")]),t._v(" "),a("p",[t._v("它允许浏览器向跨域的服务器，发出XMLHttpRequest请求，从而克服了 AJAX 只能同源使用的限制")]),t._v(" "),a("p",[a("strong",[t._v("CORS 需要浏览器和服务器同时支持")])]),t._v(" "),a("p",[t._v("CORS 请求分成两类：简单请求（simple request）和非简单请求（not-so-simple request）。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/3236727274-5a37338316b31.png",alt:"流程"}})]),t._v(" "),a("h3",{attrs:{id:"简单请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单请求"}},[t._v("#")]),t._v(" 简单请求")]),t._v(" "),a("p",[t._v("只要同时满足以下两大条件，就属于简单请求。")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("请求方法是以下三种方法之一。")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("HEAD")])]),t._v(" "),a("li",[t._v("GET")]),t._v(" "),a("li",[t._v("POST")])])]),t._v(" "),a("li",[a("p",[t._v("HTTP 的头信息不超出以下几种字段。")]),t._v(" "),a("ul",[a("li",[t._v("Accept")]),t._v(" "),a("li",[t._v("Accept-Language")]),t._v(" "),a("li",[t._v("Content-Language")]),t._v(" "),a("li",[a("strong",[t._v("Last-Event-ID")])]),t._v(" "),a("li",[a("strong",[t._v("Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain")])])])])]),t._v(" "),a("p",[t._v("表单在历史上一直可以跨域发出请求。简单请求就是表单请求，浏览器沿袭了传统的处理方式")]),t._v(" "),a("p",[a("strong",[t._v("对于简单请求，浏览器直接发出 CORS 请求。具体来说，就是在头信息之中，增加一个Origin字段")])]),t._v(" "),a("blockquote",[a("p",[t._v("Origin字段用来说明，本次请求来自哪个域（协议 + 域名 + 端口）。服务器根据这个值，决定是否同意这次请求。")])]),t._v(" "),a("p",[t._v("如果Origin指定的源，不在许可范围内，服务器会返回一个正常的 HTTP 回应。")]),t._v(" "),a("p",[t._v("浏览器发现，"),a("strong",[t._v("回应的头信息没有包含Access-Control-Allow-Origin字段，就知道出错了")]),t._v("，从而抛出一个错误，被XMLHttpRequest的onerror回调函数捕获。")]),t._v(" "),a("p",[a("strong",[t._v("注意，这种错误无法通过状态码识别，因为 HTTP 回应的状态码有可能是200。")])]),t._v(" "),a("p",[t._v("如果Origin指定的域名在许可范围内，服务器返回的响应，会多出几个头信息字段。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Access-Control-Allow-Origin")]),t._v(" "),a("p",[t._v("该字段是必须的。它的值要么是请求时Origin字段的值，要么是一个*，表示接受任意域名的请求。")])]),t._v(" "),a("li",[a("p",[t._v("Access-Control-Allow-Credentials")]),t._v(" "),a("p",[t._v("该字段可选。它的值是一个布尔值，表示是否允许发送 Cookie。")]),t._v(" "),a("p",[t._v("默认情况下，Cookie 不包括在 CORS 请求之中。设为true，即表示服务器明确许可，浏览器可以把 Cookie 包含在请求中，一起发给服务器。")]),t._v(" "),a("blockquote",[a("p",[t._v("同时，必须在 AJAX 请求中打开withCredentials属性。")])]),t._v(" "),a("p",[t._v("这个值也只能设为true，如果服务器不要浏览器发送 Cookie，不发送该字段即可。")]),t._v(" "),a("p",[t._v("Cookie 依然遵循同源政策")])]),t._v(" "),a("li",[a("p",[t._v("Access-Control-Expose-Headers(该字段可选。)")]),t._v(" "),a("p",[t._v("CORS 请求时，XMLHttpRequest对象的getResponseHeader()方法只能拿到6个服务器返回的基本字段：")]),t._v(" "),a("ul",[a("li",[t._v("Cache-Control")]),t._v(" "),a("li",[t._v("Content-Language")]),t._v(" "),a("li",[t._v("Content-Type")]),t._v(" "),a("li",[t._v("Expires")]),t._v(" "),a("li",[t._v("Last-Modified")]),t._v(" "),a("li",[t._v("Pragma。")])]),t._v(" "),a("p",[t._v("如果想拿到其他字段，就必须在Access-Control-Expose-Headers里面指定。")])])]),t._v(" "),a("h3",{attrs:{id:"非简单请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#非简单请求"}},[t._v("#")]),t._v(" 非简单请求")]),t._v(" "),a("p",[t._v("非简单请求是那种对服务器提出特殊要求的请求")]),t._v(" "),a("blockquote",[a("p",[t._v("比如请求方法是PUT或DELETE，或者Content-Type字段的类型是application/json。")])]),t._v(" "),a("h4",{attrs:{id:"预检请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预检请求"}},[t._v("#")]),t._v(" 预检请求")]),t._v(" "),a("p",[t._v("非简单请求的 CORS 请求，会在正式通信之前，增加一次 HTTP 查询请求，称为“预检”请求（preflight）。")]),t._v(" "),a("p",[a("strong",[t._v("浏览器先询问服务器，当前网页所在的域名是否在服务器的许可名单之中，以及可以使用哪些 HTTP 方法和头信息字段。")])]),t._v(" "),a("p",[t._v("只有得到肯定答复，浏览器才会发出正式的XMLHttpRequest请求，否则就报错。")]),t._v(" "),a("p",[t._v("这是为了防止这些新增的请求，对传统的没有 CORS 支持的服务器形成压力，给服务器一个提前拒绝的机会")]),t._v(" "),a("p",[a("strong",[t._v("预检请求用的请求方法是OPTIONS，表示这个请求是用来询问的。")])]),t._v(" "),a("p",[t._v("头信息里面，关键字段是Origin，表示请求来自哪个源。")]),t._v(" "),a("p",[t._v("除了Origin字段，“预检”请求的头信息包括两个特殊字段。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Access-Control-Request-Method")]),t._v(" "),a("p",[t._v("该字段是必须的，用来列出浏览器的 CORS 请求会用到哪些 HTTP 方法")])]),t._v(" "),a("li",[a("p",[t._v("Access-Control-Request-Headers")]),t._v(" "),a("p",[t._v("该字段是一个逗号分隔的字符串，指定浏览器 CORS 请求会额外发送的头信息字段")])])]),t._v(" "),a("p",[t._v("如果服务器否定了“预检”请求，会返回一个正常的 HTTP 回应（返回200），但是没有任何 CORS 相关的头信息字段，或者明确表示请求不符合条件。")]),t._v(" "),a("p",[t._v("这时，浏览器就会认定，服务器不同意预检请求，因此触发一个错误，被XMLHttpRequest对象的onerror回调函数捕获。")]),t._v(" "),a("p",[t._v("反之，服务器收到“预检”请求以后，检查了Origin、Access-Control-Request-Method 和 Access-Control-Request-Headers字段以后，确认允许跨源请求（返回200），就会做出回应，包含如下字段：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Access-Control-Allow-Methods")]),t._v(" "),a("p",[t._v("该字段必需，它的值是逗号分隔的一个字符串，表明服务器支持的所有跨域请求的方法。")]),t._v(" "),a("p",[a("strong",[t._v("注意，返回的是所有支持的方法，而不单是浏览器请求的那个方法。这是为了避免多次“预检”请求。")])])]),t._v(" "),a("li",[a("p",[t._v("Access-Control-Allow-Headers")]),t._v(" "),a("p",[t._v("如果浏览器请求包括Access-Control-Request-Headers字段，则Access-Control-Allow-Headers字段是必需的。")]),t._v(" "),a("p",[t._v("它也是一个逗号分隔的字符串，表明服务器支持的所有头信息字段，不限于浏览器在“预检”中请求的字段。")])]),t._v(" "),a("li",[a("p",[t._v("Access-Control-Allow-Credentials")]),t._v(" "),a("p",[t._v("该字段与简单请求时的含义相同。表示是否允许发送cookie")])]),t._v(" "),a("li",[a("p",[t._v("Access-Control-Max-Age")]),t._v(" "),a("p",[t._v("该字段可选，用来指定本次预检请求的有效期，单位为秒。即允许缓存该条回应存在多少秒，在此期间，不用发出另一条预检请求。")])])]),t._v(" "),a("p",[t._v("一旦服务器通过了“预检”请求，以后每次浏览器正常的 CORS 请求，就都跟简单请求一样，")]),t._v(" "),a("p",[t._v("会有一个Origin头信息字段。服务器的回应，也都会有一个Access-Control-Allow-Origin头信息字段。")]),t._v(" "),a("p",[t._v("CORS 支持所有类型的 HTTP 请求")]),t._v(" "),a("h3",{attrs:{id:"如果没有响应头，那么数据会返回吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如果没有响应头，那么数据会返回吗"}},[t._v("#")]),t._v(" 如果没有响应头，那么数据会返回吗")]),t._v(" "),a("p",[t._v("这些跨站点请求与浏览器发出的其他跨站点请求并无二致。如果服务器未返回正确的响应首部，则请求方不会收到任何数据。")]),t._v(" "),a("blockquote",[a("p",[t._v("那些不允许跨站点请求的网站无需为这一新的 HTTP 访问控制特性担心。")])]),t._v(" "),a("h2",{attrs:{id:"nginx代理跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx代理跨域"}},[t._v("#")]),t._v(" nginx代理跨域")]),t._v(" "),a("blockquote",[a("p",[t._v("发音'engine x'")])]),t._v(" "),a("p",[t._v("代理服务器需要做以下几个步骤：")]),t._v(" "),a("ol",[a("li",[t._v("接受客户端的请求")]),t._v(" "),a("li",[t._v("将请求转发给实际的服务器")]),t._v(" "),a("li",[t._v("将服务器的响应结果返回给客户端")])]),t._v(" "),a("h3",{attrs:{id:"正向代理和反向代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正向代理和反向代理"}},[t._v("#")]),t._v(" 正向代理和反向代理")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("正向代理：")]),t._v(" "),a("p",[t._v("是指是一个位于客户端和原始服务器之间的服务器，为了从原始服务器取得内容，")]),t._v(" "),a("p",[t._v("客户端向代理发送一个请求并指定目标(原始服务器)，然后代理向原始服务器转交请求并将获得的内容返回给客户端。")]),t._v(" "),a("p",[t._v("客户端才能使用正向代理。")])]),t._v(" "),a("li",[a("p",[t._v("反向代理：")]),t._v(" "),a("p",[t._v("是指以代理服务器来接受 Internet 上的连接请求，然后将请求转发给内部网络上的服务器，并将从服务器上得到的结果返回给 Internet 上请求连接的客户端，此时代理服务器对外就表现为一个反向代理服务器。")])])]),t._v(" "),a("p",[t._v("简单来说，正向代理，目标服务器不清楚客户端信息，请求是由代理服务器发起。")]),t._v(" "),a("p",[t._v("反向代理，客户端不清楚具体是由哪台服务器处理业务")]),t._v(" "),a("h2",{attrs:{id:"nodejs中间件代理跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodejs中间件代理跨域"}},[t._v("#")]),t._v(" Nodejs中间件代理跨域")]),t._v(" "),a("p",[t._v("NodeJS 中间件 http-proxy-middleware 实现跨域代理，原理大致与 nginx 相同，都是通过一个代理服务器，实现转发")]),t._v(" "),a("h2",{attrs:{id:"websocket协议跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#websocket协议跨域"}},[t._v("#")]),t._v(" WebSocket协议跨域")]),t._v(" "),a("p",[t._v("WebSocket 是一种通信协议，使用ws://（非加密）和wss://（加密）作为协议前缀。")]),t._v(" "),a("p",[a("strong",[t._v("该协议不实行同源政策，只要服务器支持，就可以通过它进行跨源通信。")])]),t._v(" "),a("p",[t._v("浏览器发出的 WebSocket 请求的头信息，有一个字段是Origin，表示该请求的请求源（origin），即发自哪个域名。")]),t._v(" "),a("p",[t._v("服务器可以根据这个字段，判断是否许可本次通信。")]),t._v(" "),a("h2",{attrs:{id:"不受同源策略影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不受同源策略影响"}},[t._v("#")]),t._v(" 不受同源策略影响")]),t._v(" "),a("ul",[a("li",[t._v("script")]),t._v(" "),a("li",[t._v("img")]),t._v(" "),a("li",[t._v("提交表单")])])])}),[],!1,null,null,null);s.default=e.exports}}]);