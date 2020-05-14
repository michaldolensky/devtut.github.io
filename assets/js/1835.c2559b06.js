(window.webpackJsonp=window.webpackJsonp||[]).push([[1835],{2179:function(t,n,s){"use strict";s.r(n);var a=s(19),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"coroutines"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#coroutines"}},[t._v("#")]),t._v(" coroutines")]),t._v(" "),s("p",[t._v("Examples of Kotlin's experimental(yet) implementation of coroutines")]),t._v(" "),s("h2",{attrs:{id:"simple-coroutine-which-delay-s-1-second-but-not-blocks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simple-coroutine-which-delay-s-1-second-but-not-blocks"}},[t._v("#")]),t._v(" Simple coroutine which delay's 1 second but not blocks")]),t._v(" "),s("p",[t._v("(from official "),s("a",{attrs:{href:"https://github.com/Kotlin/kotlinx.coroutines/blob/master/coroutines-guide.md#your-first-coroutine",target:"_blank",rel:"noopener noreferrer"}},[t._v("doc"),s("OutboundLink")],1),t._v(")")]),t._v(" "),s("div",{staticClass:"language-kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Array"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("launch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CommonPool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// create new coroutine in common thread pool")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("delay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000L")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// non-blocking delay for 1 second (default time unit is ms)")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"World!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// print after delay")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello,"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// main function continues while coroutine is delayed")]),t._v("\n    Thread"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000L")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// block main thread for 2 seconds to keep JVM alive")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("result")]),t._v(" "),s("div",{staticClass:"language-kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[t._v("Hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nWorld"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n\n")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);