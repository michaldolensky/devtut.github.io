(window.webpackJsonp=window.webpackJsonp||[]).push([[3064],{3410:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"destructuring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#destructuring"}},[t._v("#")]),t._v(" Destructuring")]),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("p",[t._v("Most of the magic of destructuring uses the splat ("),a("code",[t._v("*")]),t._v(") operator.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Example")]),t._v(" "),a("th",[t._v("Result / "),a("strong",[t._v("comment")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("a, b = [0,1]")])]),t._v(" "),a("td",[a("code",[t._v("a=0, b=1")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("a, *rest = [0,1,2,3]")])]),t._v(" "),a("td",[a("code",[t._v("a=0, rest=[1,2,3]")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("a, * = [0,1,2,3]")])]),t._v(" "),a("td",[a("code",[t._v("a=0")]),t._v(" "),a("strong",[t._v("Equivalent to "),a("code",[t._v(".first")])])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("*, z = [0,1,2,3]")])]),t._v(" "),a("td",[a("code",[t._v("z=3")]),t._v(" "),a("strong",[t._v("Equivalent to "),a("code",[t._v(".last")])])])])])]),t._v(" "),a("h2",{attrs:{id:"destructuring-block-arguments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#destructuring-block-arguments"}},[t._v("#")]),t._v(" Destructuring Block Arguments")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[t._v("triples "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\ntriples"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("each")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" second"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" third"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" puts second "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 5")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 8")]),t._v("\n\ntriples"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("map "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("rest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" rest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# => ["2 3", "5 6", "8 9"]')]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);