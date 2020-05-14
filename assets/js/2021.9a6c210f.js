(window.webpackJsonp=window.webpackJsonp||[]).push([[2021],{2365:function(t,s,e){"use strict";e.r(s);var a=e(19),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"limit-result-set"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#limit-result-set"}},[t._v("#")]),t._v(" Limit Result Set")]),t._v(" "),e("p",[t._v("As database tables grow, it's often useful to limit the results of queries to a fixed number or percentage. This can be achieved using SQL Server's "),e("code",[t._v("TOP")]),t._v(" keyword or "),e("code",[t._v("OFFSET FETCH")]),t._v(" clause.")]),t._v(" "),e("h2",{attrs:{id:"limiting-with-percent"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#limiting-with-percent"}},[t._v("#")]),t._v(" Limiting With PERCENT")]),t._v(" "),e("p",[t._v("This example limits "),e("code",[t._v("SELECT")]),t._v(" result to 15 percentage of total row count.")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TOP")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PERCENT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" table_name\n\n")])])]),e("h2",{attrs:{id:"limiting-with-top"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#limiting-with-top"}},[t._v("#")]),t._v(" Limiting With TOP")]),t._v(" "),e("p",[t._v("This example limits "),e("code",[t._v("SELECT")]),t._v(" result to 100 rows.")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TOP")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" table_name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),e("p",[t._v("It is also possible to use a variable to specify the number of rows:")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DECLARE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@CountDesiredRows")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TOP")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@CountDesiredRows")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" table_name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),e("h2",{attrs:{id:"limiting-with-fetch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#limiting-with-fetch"}},[t._v("#")]),t._v(" Limiting with FETCH")]),t._v(" "),e("p",[e("code",[t._v("FETCH")]),t._v(" is generally more useful for pagination, but can be used as an alternative to "),e("code",[t._v("TOP")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" table_name\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("OFFSET")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ROWS")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FETCH")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("NEXT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ROWS")]),t._v(" ONLY\n\n")])])]),e("h4",{attrs:{id:"parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Parameter")]),t._v(" "),e("th",[t._v("Details")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("TOP")])]),t._v(" "),e("td",[t._v("Limiting keyword. Use with a number.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("PERCENT")])]),t._v(" "),e("td",[t._v("Percentage keyword. Comes after "),e("code",[t._v("TOP")]),t._v(" and limiting number.")])])])]),t._v(" "),e("h4",{attrs:{id:"remarks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),e("p",[t._v("If "),e("code",[t._v("ORDER BY")]),t._v(" clause is used, limiting applies to the ordered result set.")])])}),[],!1,null,null,null);s.default=r.exports}}]);