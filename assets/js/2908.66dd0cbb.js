(window.webpackJsonp=window.webpackJsonp||[]).push([[2908],{3254:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json"}},[t._v("#")]),t._v(" JSON")]),t._v(" "),a("h2",{attrs:{id:"json-to-from-r-objects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-to-from-r-objects"}},[t._v("#")]),t._v(" JSON to / from R objects")]),t._v(" "),a("p",[t._v("The "),a("a",{attrs:{href:"https://cran.r-project.org/web/packages/jsonlite/index.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("jsonlite")]),t._v(" package"),a("OutboundLink")],1),t._v(" is a fast JSON parser and generator optimized for statistical data and the web. The two main functions used to read and write JSON are "),a("code",[t._v("fromJSON()")]),t._v(" and "),a("code",[t._v("toJSON()")]),t._v(" respecitively, and are designed to work with "),a("code",[t._v("vectors")]),t._v(", "),a("code",[t._v("matrices")]),t._v(" and "),a("code",[t._v("data.frames")]),t._v(", and streams of JSON from the web.")]),t._v(" "),a("p",[t._v("Create a JSON array from a vector, and vice versa")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("library"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("jsonlite"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## vector to JSON")]),t._v("\ntoJSON"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [1,2,3]")]),t._v("\n\nfromJSON"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[1,2,3]'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [1] 1 2 3")]),t._v("\n\n")])])]),a("p",[t._v("Create a named JSON array from a list, and vice versa")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("toJSON"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myVec "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# {"myVec":[1,2,3]}')]),t._v("\n\nfromJSON"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{\"myVec\":[1,2,3]}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# $myVec")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [1] 1 2 3")]),t._v("\n\n")])])]),a("p",[t._v("More complex list structures")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## list structures")]),t._v("\nlst "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("letters"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ntoJSON"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lst"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# {"a":[1,2,3],"b":[["a","b","c","d","e","f"]]} ')]),t._v("\n\n\nfromJSON"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"a":[1,2,3],"b":[["a","b","c","d","e","f"]]} \'')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# $a")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [1] 1 2 3")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# $b")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [,1] [,2] [,3] [,4] [,5] [,6]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# [1,] "a"  "b"  "c"  "d"  "e"  "f" ')]),t._v("\n\n")])])]),a("p",[t._v("Create JSON from a "),a("code",[t._v("data.frame")]),t._v(", and vice versa")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## converting a data.frame to JSON")]),t._v("\ndf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" data.frame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" seq_along"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                 val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" letters"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ntoJSON"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("df"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# [{"id":1,"val":"a"},{"id":2,"val":"b"},{"id":3,"val":"c"},{"id":4,"val":"d"},{"id":5,"val":"e"},{"id":6,"val":"f"},{"id":7,"val":"g"},{"id":8,"val":"h"},{"id":9,"val":"i"},{"id":10,"val":"j"}] ')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## reading a JSON string")]),t._v("\nfromJSON"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'[{"id":1,"val":"a"},{"id":2,"val":"b"},{"id":3,"val":"c"},{"id":4,"val":"d"},{"id":5,"val":"e"},{"id":6,"val":"f"},{"id":7,"val":"g"},{"id":8,"val":"h"},{"id":9,"val":"i"},{"id":10,"val":"j"}]\'')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     id val")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1   1   a")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2   2   b")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3   3   c")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 4   4   d")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 5   5   e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 6   6   f")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 7   7   g")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 8   8   h")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 9   9   i")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 10 10   j")]),t._v("\n\n")])])]),a("p",[t._v("Read JSON direct from the internet")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Reading JSON from URL")]),t._v("\ngoogleway_issues "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" fromJSON"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/repos/SymbolixAU/googleway/issues"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ngoogleway_issues"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("url\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# [1] "https://api.github.com/repos/SymbolixAU/googleway/issues/20" "https://api.github.com/repos/SymbolixAU/googleway/issues/19"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# [3] "https://api.github.com/repos/SymbolixAU/googleway/issues/14" "https://api.github.com/repos/SymbolixAU/googleway/issues/11"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# [5] "https://api.github.com/repos/SymbolixAU/googleway/issues/9"  "https://api.github.com/repos/SymbolixAU/googleway/issues/5" ')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# [7] "https://api.github.com/repos/SymbolixAU/googleway/issues/2"')]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);