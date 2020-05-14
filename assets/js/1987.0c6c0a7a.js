(window.webpackJsonp=window.webpackJsonp||[]).push([[1987],{2331:function(t,a,s){"use strict";s.r(a);var e=s(19),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"cross-apply"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cross-apply"}},[t._v("#")]),t._v(" cross apply")]),t._v(" "),s("h2",{attrs:{id:"join-table-rows-with-dynamically-generated-rows-from-a-cell"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#join-table-rows-with-dynamically-generated-rows-from-a-cell"}},[t._v("#")]),t._v(" Join table rows with dynamically generated rows from a cell")]),t._v(" "),s("p",[t._v('CROSS APPLY enables you to "join" rows from a table with dynamically generated rows returned by some table-value function.')]),t._v(" "),s("p",[t._v('Imagine that you have a Company table with a column that contains an array of products (ProductList column), and a function that parse these values and returns a set of products. You can select all rows from a Company table, apply this function on a ProductList column and "join" generated results with parent Company row:')]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" Companies c \n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CROSS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("APPLY")]),t._v(" dbo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GetProductList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ProductList "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" p\n\n")])])]),s("p",[t._v("For each row, value of "),s("strong",[t._v("ProductList")]),t._v(" cell will be provided to the function, and the function will return those products as a set of rows that can be joined with the parent row.")]),t._v(" "),s("h2",{attrs:{id:"join-table-rows-with-json-array-stored-in-cell"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#join-table-rows-with-json-array-stored-in-cell"}},[t._v("#")]),t._v(" Join table rows with JSON array stored in cell")]),t._v(" "),s("p",[t._v('CROSS APPLY enables you to "join" rows from a table with collection of JSON objects stored in a column.')]),t._v(" "),s("p",[t._v('Imagine that you have a Company table with a column that contains an array of products (ProductList column) formatted as JSON array. OPENJSON table value function can parse these values and return the set of products. You can select all rows from a Company table, parse JSON products with OPENJSON and "join" generated results with parent Company row:')]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" Companies c \n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CROSS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("APPLY")]),t._v(" OPENJSON"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ProductList "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" Id "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Title nvarchar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Price money"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v("For each row, value of "),s("strong",[t._v("ProductList")]),t._v(" cell will be provided to OPENJSON function that will transform JSON objects to rows with the schema defined in WITH clause.")]),t._v(" "),s("h2",{attrs:{id:"filter-rows-by-array-values"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#filter-rows-by-array-values"}},[t._v("#")]),t._v(" Filter rows by array values")]),t._v(" "),s("p",[t._v("If you store a list of tags in a row as coma separated values, "),s("strong",[t._v("STRING_SPLIT")]),t._v(" function enables you to transform list of tags into a table of values.\n"),s("strong",[t._v("CROSS APPLY")]),t._v(' enables you to "join" values parsed by '),s("strong",[t._v("STRING_SPLIT")]),t._v(" function with a parent row.")]),t._v(" "),s("p",[t._v("Imagine that you have a Product table with a column that contains an array of comma separated tags (e.g. promo,sales,new). STRING_SPLIT and CROSS APPLY enable you to join product rows with their tags so you can filter products by tags:")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" Products p \n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CROSS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("APPLY")]),t._v(" STRING_SPLIT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Tags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("','")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" tags\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" tags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("value")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'promo'")]),t._v("\n\n")])])]),s("p",[t._v("For each row, value of "),s("strong",[t._v("Tags")]),t._v(" cell will be provided to STRING_SPLIT function that will return tag values. Then you can filter rows by these values.")]),t._v(" "),s("p",[s("strong",[t._v("Note:")]),t._v(" "),s("strong",[t._v("STRING_SPLIT")]),t._v(" function is not available before "),s("strong",[t._v("SQL Server 2016")])])])}),[],!1,null,null,null);a.default=r.exports}}]);