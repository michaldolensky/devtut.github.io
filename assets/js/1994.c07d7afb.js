(window.webpackJsonp=window.webpackJsonp||[]).push([[1994],{2340:function(s,t,a){"use strict";a.r(t);var e=a(19),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"dbmail"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dbmail"}},[s._v("#")]),s._v(" DBMAIL")]),s._v(" "),a("h2",{attrs:{id:"send-simple-email"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#send-simple-email"}},[s._v("#")]),s._v(" Send simple email")]),s._v(" "),a("p",[s._v("This code sends a simple text-only email to recipient@someaddress.com")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXEC")]),s._v(" msdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dbo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sp_send_dbmail  \n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@profile_name")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'The Profile Name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@recipients")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'recipient@someaddress.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@body")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'This is a simple email sent from SQL Server.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@subject")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Simple email'")]),s._v(" \n\n")])])]),a("h2",{attrs:{id:"send-results-of-a-query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#send-results-of-a-query"}},[s._v("#")]),s._v(" Send results of a query")]),s._v(" "),a("p",[s._v("This attaches the results of the query "),a("code",[s._v("SELECT * FROM Users")]),s._v(" and sends it to "),a("code",[s._v("recipient@someaddress.com")])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXEC")]),s._v(" msdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dbo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sp_send_dbmail  \n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@profile_name")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'The Profile Name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@recipients")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'recipient@someaddress.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@query")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SELECT * FROM Users'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@subject")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'List of users'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@attach_query_result_as_file")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n\n")])])]),a("h2",{attrs:{id:"send-html-email"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#send-html-email"}},[s._v("#")]),s._v(" Send HTML email")]),s._v(" "),a("p",[s._v("HTML content must be passed to "),a("code",[s._v("sp_send_dbmail")])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DECLARE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@html")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("MAX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@html")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" CONCAT\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<html><body>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<h1>Some Header Text</h1>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<p>Some paragraph text</p>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'</body></html>'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])])]),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DECLARE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@html")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("MAX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@html")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<html><body>'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<h1>Some Header Text</h1>'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<p>Some paragraph text</p>'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'</body></html>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),a("p",[s._v("Then use the "),a("code",[s._v("@html")]),s._v(" variable with the "),a("code",[s._v("@body argument")]),s._v(". The HTML string can also be passed directly to "),a("code",[s._v("@body")]),s._v(", although it may make the code harder to read.")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXEC")]),s._v(" msdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dbo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sp_send_dbmail \n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@recipients")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'recipient@someaddress.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@subject")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Some HTML content'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@body")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@body_format")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'HTML'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n\n")])])]),a("h4",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[s._v("#")]),s._v(" Syntax")]),s._v(" "),a("li",[s._v("sp_send_dbmail [ [ @profile_name = ] 'profile_name' ]\n[ , [ @recipients = ] 'recipients [ ; ...n ]' ]\n[ , [ @copy_recipients = ] 'copy_recipient [ ; ...n ]' ]\n[ , [ @blind_copy_recipients = ] 'blind_copy_recipient [ ; ...n ]' ]\n[ , [ @from_address = ] 'from_address' ]\n[ , [ @reply_to = ] 'reply_to' ]\n[ , [ @subject = ] 'subject' ]\n[ , [ @body = ] 'body' ]\n[ , [ @body_format = ] 'body_format' ]\n[ , [ @importance = ] 'importance' ]\n[ , [ @sensitivity = ] 'sensitivity' ]\n[ , [ @file_attachments = ] 'attachment [ ; ...n ]' ]\n[ , [ @query = ] 'query' ]\n[ , [ @execute_query_database = ] 'execute_query_database' ]\n[ , [ @attach_query_result_as_file = ] attach_query_result_as_file ]\n[ , [ @query_attachment_filename = ] query_attachment_filename ]\n[ , [ @query_result_header = ] query_result_header ]\n[ , [ @query_result_width = ] query_result_width ]\n[ , [ @query_result_separator = ] 'query_result_separator' ]\n[ , [ @exclude_query_output = ] exclude_query_output ]\n[ , [ @append_query_error = ] append_query_error ]\n[ , [ @query_no_truncate = ] query_no_truncate ]\n[ , [@query_result_no_padding = ] @query_result_no_padding ]\n[ , [ @mailitem_id = ] mailitem_id ] [ OUTPUT ]")])])}),[],!1,null,null,null);t.default=r.exports}}]);