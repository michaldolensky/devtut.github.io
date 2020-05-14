(window.webpackJsonp=window.webpackJsonp||[]).push([[1674],{2020:function(t,n,s){"use strict";s.r(n);var a=s(19),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"stringbuffer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stringbuffer"}},[t._v("#")]),t._v(" StringBuffer")]),t._v(" "),s("p",[s("strong",[t._v("Introduction to Java StringBuffer class.")])]),t._v(" "),s("h2",{attrs:{id:"string-buffer-class"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#string-buffer-class"}},[t._v("#")]),t._v(" String Buffer class")]),t._v(" "),s("p",[s("strong",[t._v("Key Points :-")])]),t._v(" "),s("li",[t._v("\nused to created mutable (modifiable) string.\n")]),t._v(" "),s("li",[t._v("\n**Mutable** :- Which can be changed.\n")]),t._v(" "),s("li",[t._v("\nis thread-safe i.e. multiple threads cannot access it simultaneously.\n")]),t._v(" "),s("p",[s("strong",[t._v("Methods :-")])]),t._v(" "),s("li",[t._v("\npublic synchronized StringBuffer append(String s)\n")]),t._v(" "),s("li",[t._v("\npublic synchronized StringBuffer insert(int offset, String s)\n")]),t._v(" "),s("li",[t._v("\npublic synchronized StringBuffer replace(int startIndex, int endIndex, String str)\n")]),t._v(" "),s("li",[t._v("\npublic synchronized StringBuffer delete(int startIndex, int endIndex)\n")]),t._v(" "),s("li",[t._v("\npublic synchronized StringBuffer reverse()\n")]),t._v(" "),s("li",[t._v("\npublic int capacity()\n")]),t._v(" "),s("li",[t._v("\npublic void ensureCapacity(int minimumCapacity)\n")]),t._v(" "),s("li",[t._v("\npublic char charAt(int index)\n")]),t._v(" "),s("li",[t._v("\npublic int length()\n")]),t._v(" "),s("li",[t._v("\npublic String substring(int beginIndex)\n")]),t._v(" "),s("li",[t._v("\npublic String substring(int beginIndex, int endIndex)\n")]),t._v(" "),s("p",[s("strong",[t._v("Example Showing diffrence between String and String Buffer implementation :-")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Test")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" str "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"study"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("concat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tonight"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Output: study")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringBuffer")]),t._v(" strB "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringBuffer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"study"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  strB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tonight"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("strB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Output: studytonight")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);