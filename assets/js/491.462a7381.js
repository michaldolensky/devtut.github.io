(window.webpackJsonp=window.webpackJsonp||[]).push([[491],{836:function(s,a,t){"use strict";t.r(a);var e=t(19),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"cut-command"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cut-command"}},[s._v("#")]),s._v(" Cut Command")]),s._v(" "),t("p",[s._v("In Bash, the "),t("code",[s._v("cut")]),s._v(" command is useful for dividing a file into several smaller parts.")]),s._v(" "),t("h2",{attrs:{id:"show-the-first-column-of-a-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-the-first-column-of-a-file"}},[s._v("#")]),s._v(" Show the first column of a file")]),s._v(" "),t("p",[s._v("Suppose you have a file that looks like this")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("John Smith "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),s._v("\nRobert Jones "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n\n")])])]),t("p",[s._v("This file has 3 columns separated by spaces. To select only the first column, do the following.")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -d "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("' '")]),s._v(" -f1 filename\n\n")])])]),t("p",[s._v("Here the "),t("code",[s._v("-d")]),s._v(" flag, specifies the delimiter, or what separates the records. The "),t("code",[s._v("-f")]),s._v(" flag specifies the field or column number. This will display the following output")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("John\nRobert\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n\n")])])]),t("h2",{attrs:{id:"show-columns-x-to-y-of-a-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-columns-x-to-y-of-a-file"}},[s._v("#")]),s._v(" Show columns x to y of a file")]),s._v(" "),t("p",[s._v("Sometimes, it's useful to display a range of columns in a file. Suppose you have this file")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Apple California "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.00")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("47")]),s._v("\nMango Oregon "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2015")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.30")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("33")]),s._v("\n\n")])])]),t("p",[s._v("To select the first 3 columns do")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -d "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("' '")]),s._v(" -f1-3 filename\n\n")])])]),t("p",[s._v("This will display the following output")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Apple California "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),s._v("\nMango Oregon "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2015")]),s._v("\n\n")])])]),t("h4",{attrs:{id:"syntax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[s._v("#")]),s._v(" Syntax")]),s._v(" "),t("ul",[t("li",[s._v("cut [option] file")])]),s._v(" "),t("h4",{attrs:{id:"parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[s._v("#")]),s._v(" Parameters")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("Option")]),s._v(" "),t("th",[s._v("Description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[t("code",[s._v("-b LIST")]),s._v(", "),t("code",[s._v("--bytes=LIST")])]),s._v(" "),t("td",[s._v("Print the bytes listed in the LIST parameter")])]),s._v(" "),t("tr",[t("td",[t("code",[s._v("-c LIST")]),s._v(", "),t("code",[s._v("--characters=LIST")])]),s._v(" "),t("td",[s._v("Print characters in positions specified in LIST parameter")])]),s._v(" "),t("tr",[t("td",[t("code",[s._v("-f LIST")]),s._v(", "),t("code",[s._v("--fields=LIST")])]),s._v(" "),t("td",[s._v("Print fields or columns")])]),s._v(" "),t("tr",[t("td",[t("code",[s._v("-d DELIMITER")])]),s._v(" "),t("td",[s._v("Used to separate columns or fields")])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);