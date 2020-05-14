(window.webpackJsonp=window.webpackJsonp||[]).push([[2078],{2424:function(a,t,s){"use strict";s.r(t);var e=s(19),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"user-defined-table-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#user-defined-table-types"}},[a._v("#")]),a._v(" User Defined Table Types")]),a._v(" "),s("h2",{attrs:{id:"creating-a-udt-with-a-single-int-column-that-is-also-a-primary-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-udt-with-a-single-int-column-that-is-also-a-primary-key"}},[a._v("#")]),a._v(" creating a UDT with a single int column that is also a primary key")]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TYPE")]),a._v(" dbo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Ids "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("as")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n    Id "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("PRIMARY")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("KEY")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n")])])]),s("h2",{attrs:{id:"creating-a-udt-with-multiple-columns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-udt-with-multiple-columns"}},[a._v("#")]),a._v(" Creating a UDT with multiple columns")]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TYPE")]),a._v(" MyComplexType "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("as")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n    Id "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    Name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n")])])]),s("h2",{attrs:{id:"creating-a-udt-with-a-unique-constraint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-udt-with-a-unique-constraint"}},[a._v("#")]),a._v(" Creating a UDT with a unique constraint:")]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TYPE")]),a._v(" MyUniqueNamesType "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("as")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n    FirstName "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    LastName "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("UNIQUE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("FirstName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("LastName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n")])])]),s("p",[a._v("Note: constraints in user defined table types can not be named.")]),a._v(" "),s("h2",{attrs:{id:"creating-a-udt-with-a-primary-key-and-a-column-with-a-default-value"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-udt-with-a-primary-key-and-a-column-with-a-default-value"}},[a._v("#")]),a._v(" Creating a UDT with a primary key and a column with a default value:")]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TYPE")]),a._v(" MyUniqueNamesType "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("as")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n    FirstName "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    LastName "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    CreateDate "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("datetime")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("default")]),a._v(" GETDATE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("PRIMARY")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("KEY")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("FirstName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("LastName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n")])])]),s("h4",{attrs:{id:"remarks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[a._v("#")]),a._v(" Remarks")]),a._v(" "),s("p",[a._v("UDTs have following restrictions -")]),a._v(" "),s("ul",[s("li",[a._v("can not be used as a column in a table or a field in a structured user-defined types")]),a._v(" "),s("li",[a._v("a non-clustered index cannot be created in a UDT unless the index is the result of creating a PRIMARY KEY or UNIQUE constraint on the UDT")]),a._v(" "),s("li",[a._v("UDT definition CANNOT be modified after it is created")])])])}),[],!1,null,null,null);t.default=n.exports}}]);