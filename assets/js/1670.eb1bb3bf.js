(window.webpackJsonp=window.webpackJsonp||[]).push([[1670],{2017:function(t,a,s){"use strict";s.r(a);var e=s(19),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"splitting-a-string-into-fixed-length-parts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#splitting-a-string-into-fixed-length-parts"}},[t._v("#")]),t._v(" Splitting a string into fixed length parts")]),t._v(" "),s("h2",{attrs:{id:"break-a-string-up-into-substrings-all-of-a-known-length"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#break-a-string-up-into-substrings-all-of-a-known-length"}},[t._v("#")]),t._v(" Break a string up into substrings all of a known length")]),t._v(" "),s("p",[t._v("The trick is to use a look-behind with the regex "),s("code",[t._v("\\G")]),t._v(', which means "end of previous match":')]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" parts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"(?<=\\\\G.{8})"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v('The regex matches 8 characters after the end of the last match. Since in this case the match is zero-width, we could more simply say "8 characters after the last match".')]),t._v(" "),s("p",[t._v("Conveniently, "),s("code",[t._v("\\G")]),t._v(" is initialized to start of input, so it works for the first part of the input too.")]),t._v(" "),s("h2",{attrs:{id:"break-a-string-up-into-substrings-all-of-variable-length"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#break-a-string-up-into-substrings-all-of-variable-length"}},[t._v("#")]),t._v(" Break a string up into substrings all of variable length")]),t._v(" "),s("p",[t._v("Same as the known length example, but insert the length into regex:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" parts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"(?<=\\\\G.{"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"})"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("h4",{attrs:{id:"remarks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),s("p",[t._v("The goal here is to not lose content, so the regex must not consume (match) any input. Rather it must match "),s("strong",[t._v("between")]),t._v(" the last character of the previous target input and the first character of the next target input. eg for 8-character substrings, we need to break the input up (ie match) at the places marked below:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("a b c d e f g h i j k l m n o p q r s t u v w x y z\n               "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v("               "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v("               "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v("\n\n")])])]),s("p",[t._v("Ignore the spaces in the input which were required to show "),s("strong",[t._v("between")]),t._v(" character positions.")])])}),[],!1,null,null,null);a.default=n.exports}}]);