(window.webpackJsonp=window.webpackJsonp||[]).push([[2072],{2418:function(t,a,s){"use strict";s.r(a);var n=s(19),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"transaction-handling"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transaction-handling"}},[t._v("#")]),t._v(" Transaction handling")]),t._v(" "),s("h2",{attrs:{id:"basic-transaction-skeleton-with-error-handling"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-transaction-skeleton-with-error-handling"}},[t._v("#")]),t._v(" basic transaction skeleton with error handling")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BEGIN")]),t._v(" TRY "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- start error handling")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BEGIN")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TRANSACTION")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- from here on transactions (modifictions) are not final")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- start your statement(s) ")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" ANSWER  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- simple SQL Query with an error")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- end your statement(s)")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMIT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TRANSACTION")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- finalize all transactions (modifications)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),t._v(" TRY   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- end error handling -- jump to end")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BEGIN")]),t._v(" CATCH "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- execute this IF an error occured")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ROLLBACK")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TRANSACTION")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- undo any transactions (modifications)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- put together some information as a query")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" \n        ERROR_NUMBER"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" ErrorNumber\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("ERROR_SEVERITY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" ErrorSeverity\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("ERROR_STATE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" ErrorState\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("ERROR_PROCEDURE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" ErrorProcedure\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("ERROR_LINE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" ErrorLine\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("ERROR_MESSAGE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" ErrorMessage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),t._v(" CATCH"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- final line of error handling")]),t._v("\nGO "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- execute previous code")]),t._v("\n\n")])])]),s("h4",{attrs:{id:"parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameter")]),t._v(" "),s("th",[t._v("Details")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("transaction_name")]),t._v(" "),s("td",[t._v("for naming your transaction - useful with the parameter ["),s("strong",[t._v("with mark")]),t._v("] which will allow a meaningfull logging -- case-sensitive (!)")])]),t._v(" "),s("tr",[s("td",[t._v("with mark ['description']")]),t._v(" "),s("td",[t._v("can be added to ["),s("strong",[t._v("transaction_name")]),t._v("] and will store a mark in the log")])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);