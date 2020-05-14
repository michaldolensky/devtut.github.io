(window.webpackJsonp=window.webpackJsonp||[]).push([[2328],{2674:function(s,t,a){"use strict";a.r(t);var r=a(19),n=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"autonomous-transactions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#autonomous-transactions"}},[s._v("#")]),s._v(" Autonomous Transactions")]),s._v(" "),a("h2",{attrs:{id:"using-autonomous-transaction-for-logging-errors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-autonomous-transaction-for-logging-errors"}},[s._v("#")]),s._v(" Using autonomous transaction for logging errors")]),s._v(" "),a("p",[s._v("The following procedure is a generic one which will be used to log all errors in an application to a common error log table.")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("OR")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REPLACE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PROCEDURE")]),s._v(" log_errors\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  p_calling_program "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IN")]),s._v(" VARCHAR2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  p_error_code "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTEGER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  p_error_description "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IN")]),s._v(" VARCHAR2\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IS")]),s._v("\n  PRAGMA AUTONOMOUS_TRANSACTION"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BEGIN")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" error_log\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  p_calling_program"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  p_error_code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  p_error_description"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  SYSDATE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMIT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v(" log_errors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),a("p",[s._v("The following anonymous PLSQL block shows how to call the log_errors procedure.")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BEGIN")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELETE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" dept "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" deptno "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nEXCEPTION\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" OTHERS "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v("\n      log_errors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Delete dept'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("sqlcode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sqlerrm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      RAISE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" error_log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nCALLING_PROGRAM    ERROR_CODE    ERROR_DESCRIPTION                                                ERROR_DATETIME         DB_USER\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Delete")]),s._v(" dept        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2292")]),s._v("         ORA"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("02292")]),s._v(": integrity "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("constraint")]),s._v(" violated "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" child record found    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("08")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("09")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2016")]),s._v("             APEX_PUBLIC_USER\n\n")])])]),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[s._v("#")]),s._v(" Remarks")]),s._v(" "),a("p",[s._v("Typical use cases for autonomous transaction are.")]),s._v(" "),a("ol",[a("li",[s._v("For building any kind of logging framework like the error logging framework explained in the above example.")]),s._v(" "),a("li",[s._v("For auditing DML operations in triggers on tables irrespective of the final status of the transaction (COMMIT or ROLLBACK).")])])])}),[],!1,null,null,null);t.default=n.exports}}]);