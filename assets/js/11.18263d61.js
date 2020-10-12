(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{360:function(t,a,s){"use strict";s.r(a);var e=s(25),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"现代前端解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#现代前端解析"}},[t._v("#")]),t._v(" 现代前端解析")]),t._v(" "),s("h2",{attrs:{id:"web技术基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web技术基础"}},[t._v("#")]),t._v(" web技术基础")]),t._v(" "),s("h3",{attrs:{id:"浏览器组成部分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器组成部分"}},[t._v("#")]),t._v(" 浏览器组成部分")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("用户界面")])]),t._v(" "),s("p",[t._v("浏览器中可见的地址输入框，浏览器前进返回按钮，书签等功能选项。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("网络")])]),t._v(" "),s("p",[t._v("浏览器开启网络线程发送请求或下载资源文件的模块。")]),t._v(" "),s("p",[t._v("eg: DOM树解析过程中请求静态资源首先是通过浏览器的网络模块发起的。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("JavaScript引擎")])]),t._v(" "),s("p",[t._v("在用户界面和渲染引擎之前传输指令，或在客户端本地存储中读写数据等，是浏览器中各个部分之间相互通信的核心。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("渲染引擎")])]),t._v(" "),s("p",[t._v("解析DOM文档和CSS规则，并将内容排版到浏览器中，显示样式的界面。也称排版引擎，常说的浏览器内核指的就是渲染引擎。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("UI后端")])]),t._v(" "),s("p",[t._v("绘制基本的浏览器窗口控件。比如：按钮，输入框等。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("JavaScript解释器")])]),t._v(" "),s("p",[t._v("浏览器解析和执行javascript脚本")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("持久化数据存储")])]),t._v(" "),s("p",[t._v("客户端存储数据的技术，比如：cookie，localStorage等。")])])]),t._v(" "),s("h3",{attrs:{id:"渲染引擎"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渲染引擎"}},[t._v("#")]),t._v(" 渲染引擎")]),t._v(" "),s("h4",{attrs:{id:"主要工作流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主要工作流程"}},[t._v("#")]),t._v(" 主要工作流程")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("解析HTML构建DOM树")]),t._v(" "),s("p",[t._v("将HTML标签解析成多个DOM元素节点组成的且具有节点父子关系的DOM树结构。")])]),t._v(" "),s("li",[s("p",[t._v("构建渲染树")]),t._v(" "),s("p",[t._v("根据DOM树结构提取计算使用的CSS规则并重新计算DOM树结构的样式数据，生成带样式描述的DOM渲染树对象。")])]),t._v(" "),s("li",[s("p",[t._v("渲染树布局")]),t._v(" "),s("p",[t._v("根绝渲染树节点在页面中的大小和位置（position，folat，margin等属性），将节点固定在页面对应的位置。")])]),t._v(" "),s("li",[s("p",[t._v("绘制渲染树")]),t._v(" "),s("p",[t._v("将渲染树节点的样式（color，background等）属性绘制到浏览器页面中。")])])]),t._v(" "),s("h4",{attrs:{id:"渲染树布局阶段和绘制阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渲染树布局阶段和绘制阶段"}},[t._v("#")]),t._v(" 渲染树布局阶段和绘制阶段")]),t._v(" "),s("p",[t._v("页面生成后，如果元素位置发生变化，就要从布局阶段开始重新渲染，也就是重排，所以页面重排，一定会重绘。如果元素样式改变布局不变，将从绘制阶段开始，也称页面重绘。")]),t._v(" "),s("h4",{attrs:{id:"script标签会阻塞渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#script标签会阻塞渲染"}},[t._v("#")]),t._v(" script标签会阻塞渲染")]),t._v(" "),s("p",[t._v("渲染引擎对DOM渲染树的解析是逐行进行的，所以渲染树前面的内容可以先渲染展示，script标签内容辉阻塞页面结构的渲染。")]),t._v(" "),s("h4",{attrs:{id:"不同浏览器内核解析渲染过程不同"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不同浏览器内核解析渲染过程不同"}},[t._v("#")]),t._v(" 不同浏览器内核解析渲染过程不同")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("webkit内核")]),t._v(" "),s("p",[t._v("HTML和CSS解析可以认为i是并行的")])]),t._v(" "),s("li",[s("p",[t._v("Gecko内核")]),t._v(" "),s("p",[t._v("先解析HTML后解析CSS")])])]),t._v(" "),s("h4",{attrs:{id:"dom元素标签和dom元素对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dom元素标签和dom元素对象"}},[t._v("#")]),t._v(" DOM元素标签和DOM元素对象")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("DOM元素标签")]),t._v(" "),s("p",[t._v("指文本化的HTML标识")])]),t._v(" "),s("li",[s("p",[t._v("DOM元素对象")]),t._v(" "),s("p",[t._v("经过渲染引擎DOM解析后生成具有节点父子关系的树形对象")])])]),t._v(" "),s("h3",{attrs:{id:"浏览器数据持久化存储技术"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器数据持久化存储技术"}},[t._v("#")]),t._v(" 浏览器数据持久化存储技术")]),t._v(" "),s("p",[t._v("即浏览器缓存，有8种缓存机制")]),t._v(" "),s("h4",{attrs:{id:"http文件缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http文件缓存"}},[t._v("#")]),t._v(" HTTP文件缓存")]),t._v(" "),s("p",[t._v("文件缓存生效的情况下，让浏览器从本地读取文件，加快页面资源加载，节省网络流量。在HTML的")]),s("meta"),t._v("中的Expires或Cache-Control来设置。Cache-Control设置max-age的时间单位是秒，如果用时设置Expires和Cache-Control。则只有Cache-Control生效"),s("p"),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http-equiv")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Expires"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Mon, 20 Jul 2019 23:00:00 GMT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http-equiv")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Cache-Control"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("max-age=7200"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("基于HTTP协议")]),t._v(" "),s("ol",[s("li",[t._v("发起请求后，浏览器会查询Cache-Control来判断是否过期，未过期直接读取缓存文件，不发送请求，否则进入下一步。（也可以用Expires判断，但是Expires设置的是绝对过期时间，Cache-Control是设置现对过期时间）")]),t._v(" "),s("li",[t._v("浏览器判断上次文件返回头中是否含有Etag信息，有则连同If-None-Match一起传给服务器，服务器判断Etag，未修改返回状态码304，修改返回状态码200，否则进入下一步。")]),t._v(" "),s("li",[t._v("浏览器判断上次文件返回头中是否含有Last-Modified信息，有则连同If-Modified-Since一起传给服务器，服务器判断Last-Modified是否失效，失效返回200，未失效返回304， 否则下一步。")]),t._v(" "),s("li",[t._v("如果Etag和Last-Modified都不存在，直接像服务器请求内容")])]),t._v(" "),s("h4",{attrs:{id:"localstorage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#localstorage"}},[t._v("#")]),t._v(" LocalStorage")]),t._v(" "),s("p",[t._v("HTML5的本地缓存方案。浏览器多个标签页打开同个域名页面时，localStroage内容一般是共享的。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置存储的值 value是对象的话 需要用JSON.Stringily转成json字符串")]),t._v("\nwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取存储的值 如果是json对象字符串的话，需要用Json.parse()转成对象")]),t._v("\nwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除该域名下单条存储的记录")]),t._v("\nwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除该域名下所有localStorage存储记录")]),t._v("\n")])])]),s("h4",{attrs:{id:"sessionstorage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sessionstorage"}},[t._v("#")]),t._v(" SessionStorage")]),t._v(" "),s("p",[t._v("浏览器关闭会自动清空")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sessionStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置存储的值 value是对象的话 需要用JSON.Stringily转成json字符串")]),t._v("\nwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sessionStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取存储的值 如果是json对象字符串的话，需要用Json.parse()转成对象")]),t._v("\nwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sessionStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除该域名下单条存储的记录")]),t._v("\nwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sessionStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除该域名下所有localStorage存储记录")]),t._v("\n")])])]),s("h4",{attrs:{id:"cookie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[t._v("#")]),t._v(" Cookie")]),t._v(" "),s("p",[t._v("最大长度4KB，浏览器可以通过document.cookie来获取cookie。cookie设置HttpOnly参数，浏览器的document.cookie读取不到。")]),t._v(" "),s("p",[t._v("Session Cookie：一般不设置过期时间，关闭浏览器自动消失，保存在内存")]),t._v(" "),s("p",[t._v("持久性Cookie：设置过期时间，保存在硬盘上，关闭浏览器再次打开cookie依然有效，直到超过过期时间被清空，才失效。")]),t._v(" "),s("h4",{attrs:{id:"indexdb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#indexdb"}},[t._v("#")]),t._v(" indexDB")]),t._v(" "),s("p",[t._v("最大限制50MB。大量数据存到本地会造成数据泄露，实际项目很少用。")]),t._v(" "),s("h4",{attrs:{id:"web-sql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web-sql"}},[t._v("#")]),t._v(" Web SQL")]),t._v(" "),s("p",[t._v("用于存储较大数据的缓存机制，允许使用SQL语句查询。有兼容性")]),t._v(" "),s("h4",{attrs:{id:"cachestorage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cachestorage"}},[t._v("#")]),t._v(" CacheStorage")]),t._v(" "),s("p",[t._v("是在ServiceWorker规范中定义的。目浏览器兼容较差，导致不成熟。")]),t._v(" "),s("h4",{attrs:{id:"application-cache"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#application-cache"}},[t._v("#")]),t._v(" Application Cache")]),t._v(" "),s("p",[t._v("允许浏览器通过manifest配置文件选择性存储静态资源文件到本地。用作离线浏览，快速加载，服务器负载小。5MB，不兼容主流浏览器，是一个不成熟的本地缓存方案。已被标准弃用，用ServiceWorkers代替。")]),t._v(" "),s("h4",{attrs:{id:"flash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flash"}},[t._v("#")]),t._v(" Flash")]),t._v(" "),s("p",[t._v("用的不多")]),t._v(" "),s("h2",{attrs:{id:"http协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http协议"}},[t._v("#")]),t._v(" HTTP协议")]),t._v(" "),s("p",[t._v("是WWW服务器和用户请求代理之间通过应答请求模式传出的超文本内容的一种协议。")]),t._v(" "),s("h3",{attrs:{id:"http1-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http1-0"}},[t._v("#")]),t._v(" HTTP1.0")]),t._v(" "),s("ol",[s("li",[t._v("如果要建立长连接，需要在请求信息中包含connection：keep-alive头域信息。如果服务器响应头也包含connection：keep-alive，则表示后面请求的文件都用长连接。")]),t._v(" "),s("li",[t._v("需用用Expires头部控制缓存，只能用绝对时间")])]),t._v(" "),s("h3",{attrs:{id:"http1-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http1-1"}},[t._v("#")]),t._v(" HTTP1.1")]),t._v(" "),s("ol",[s("li",[t._v("长连接 默认采用connection：keep-alive")]),t._v(" "),s("li",[t._v("用Cache-Control头部，支持max-age用来表示相对过期时间，请求服务器可以根据Etag和Last-Modified判断是否加载浏览器缓存文件。")])]),t._v(" "),s("h3",{attrs:{id:"http2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http2"}},[t._v("#")]),t._v(" HTTP2")]),t._v(" "),s("p",[t._v("支持的浏览器很少")]),t._v(" "),s("ol",[s("li",[t._v("完全采用二进制格式传输数据")]),t._v(" "),s("li",[t._v("使用TCP复用的方式请求（请示是并行的，keep-live是行即一个文件传输完后下一个文件才能复用这个连接）")]),t._v(" "),s("li",[t._v("支持服务器推送：在特定条件下把资源主动推送给客户端")]),t._v(" "),s("li",[t._v("吃出传输流的优先级和流量控制机制：在未来，服务器优先传输css文件保证页面的渲染，之后传输js脚本文件。")])]),t._v(" "),s("h3",{attrs:{id:"安全机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安全机制"}},[t._v("#")]),t._v(" 安全机制")]),t._v(" "),s("h4",{attrs:{id:"xss-跨站脚本攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xss-跨站脚本攻击"}},[t._v("#")]),t._v(" XSS 跨站脚本攻击")]),t._v(" "),s("p",[t._v("页面可解析内容的数据未经处理直接插入到页面上导致的。")]),t._v(" "),s("p",[t._v("防范方法是：验证输入到页面上的所有内容来源数据是否安全，如果可能含有脚本标签等内容则需要进行必要的转义。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("存储型XSS")]),t._v(" "),s("p",[t._v("前端提交的数据未经处理直接存储到数据，然后从数据库中读取出来后直接插入到页面中所导致的。")])]),t._v(" "),s("li",[s("p",[t._v("反射性XSS")]),t._v(" "),s("p",[t._v("在网页URL参数中注入可解析内容的数据而导致，如果直接获取URL中不合法的并插入页面中则可能导致攻击")])]),t._v(" "),s("li",[s("p",[t._v("MXSS(DOM XSS)")]),t._v(" "),s("p",[t._v("渲染DOM属性时将攻击脚本插入DOM属性中被解析而导致")])])]),t._v(" "),s("h4",{attrs:{id:"sql注入-结构化查询语句"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql注入-结构化查询语句"}},[t._v("#")]),t._v(" SQL注入 结构化查询语句")]),t._v(" "),s("p",[t._v("页面提交数据到服务器后端，服务器后端未进行数据校验就将数据直接拼接到SQL语句中执行。")]),t._v(" "),s("p",[t._v("防范方法：对前端网页提交的数据内容进行严格的检查。")]),t._v(" "),s("h4",{attrs:{id:"csrf-跨站请求伪造"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csrf-跨站请求伪造"}},[t._v("#")]),t._v(" CSRF 跨站请求伪造")]),t._v(" "),s("p",[t._v("非源站点按照源站点的数据请求格式提交非法数据给源站点服务器的一种攻击方法")]),t._v(" "),s("p",[t._v("防范方法：token令牌验证")]),t._v(" "),s("h4",{attrs:{id:"网络劫持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络劫持"}},[t._v("#")]),t._v(" 网络劫持")]),t._v(" "),s("h5",{attrs:{id:"dns劫持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns劫持"}},[t._v("#")]),t._v(" DNS劫持")]),t._v(" "),s("p",[t._v("攻击者劫持了DNS服务器，通过某种手段修改域名的解析结果，导致用户对该域名地址的访问有原IP转到修改后的IP地址，结果就是让正确的网址不能解析或解析指向另一个网站IP，实现获取用户资料或破坏原网站正常服务的目的。")]),t._v(" "),s("h5",{attrs:{id:"http劫持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http劫持"}},[t._v("#")]),t._v(" HTTP劫持")]),t._v(" "),s("p",[t._v("在用户浏览器与访问目的的服务器之间所建立的网络数据传输通道中，从网关或防火墙层上监视特定数据信息，当满足一定条件时，就会在正常的数据包中插入或修改成攻击者的网络数据包，让用户浏览器解析错误的数据，或弹出新窗口的形式，在使用者浏览器界面上显示其他内容。")]),t._v(" "),s("p",[t._v("防范方法：尽量使用HTTPS协议")]),t._v(" "),s("h3",{attrs:{id:"https"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#https"}},[t._v("#")]),t._v(" HTTPS")]),t._v(" "),s("p",[t._v("通过加入SSL层来加密HTTP数据进行安全传输，默认开启443端口")]),t._v(" "),s("h3",{attrs:{id:"前端实时协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端实时协议"}},[t._v("#")]),t._v(" 前端实时协议")]),t._v(" "),s("h4",{attrs:{id:"websocket通信机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#websocket通信机制"}},[t._v("#")]),t._v(" WebSocket通信机制")]),t._v(" "),s("h4",{attrs:{id:"poll-和-long-poll"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#poll-和-long-poll"}},[t._v("#")]),t._v(" Poll 和 Long-poll")]),t._v(" "),s("h4",{attrs:{id:"ddp协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ddp协议"}},[t._v("#")]),t._v(" DDP协议")]),t._v(" "),s("h3",{attrs:{id:"css"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[t._v("#")]),t._v(" css")]),t._v(" "),s("h4",{attrs:{id:"伪类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#伪类"}},[t._v("#")]),t._v(" 伪类")]),t._v(" "),s("p",[t._v("会在HTML中添加before或after这类内容")]),t._v(" "),s("h4",{attrs:{id:"伪元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#伪元素"}},[t._v("#")]),t._v(" 伪元素")]),t._v(" "),s("p",[t._v("不会添加HTML内容，一般用于表示用户在不同操作下的状态或指定元素的描述")])])}),[],!1,null,null,null);a.default=r.exports}}]);