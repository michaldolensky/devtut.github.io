(window.webpackJsonp=window.webpackJsonp||[]).push([[3264],{3610:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"functions-aggregate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#functions-aggregate"}},[t._v("#")]),t._v(" Functions (Aggregate)")]),t._v(" "),a("h2",{attrs:{id:"conditional-aggregation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conditional-aggregation"}},[t._v("#")]),t._v(" Conditional aggregation")]),t._v(" "),a("p",[t._v("Payments Table")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Customer")]),t._v(" "),a("th",[t._v("Payment_type")]),t._v(" "),a("th",[t._v("Amount")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Peter")]),t._v(" "),a("td",[t._v("Credit")]),t._v(" "),a("td",[t._v("100")])]),t._v(" "),a("tr",[a("td",[t._v("Peter")]),t._v(" "),a("td",[t._v("Credit")]),t._v(" "),a("td",[t._v("300")])]),t._v(" "),a("tr",[a("td",[t._v("John")]),t._v(" "),a("td",[t._v("Credit")]),t._v(" "),a("td",[t._v("1000")])]),t._v(" "),a("tr",[a("td",[t._v("John")]),t._v(" "),a("td",[t._v("Debit")]),t._v(" "),a("td",[t._v("500")])])])]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" customer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n       "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("when")]),t._v(" payment_type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'credit'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v(" amount "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" credit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("when")]),t._v(" payment_type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'debit'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v(" amount "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" debit\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" payments\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("group")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" customer\n\n")])])]),a("p",[t._v("Result:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Customer")]),t._v(" "),a("th",[t._v("Credit")]),t._v(" "),a("th",[t._v("Debit")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Peter")]),t._v(" "),a("td",[t._v("400")]),t._v(" "),a("td",[t._v("0")])]),t._v(" "),a("tr",[a("td",[t._v("John")]),t._v(" "),a("td",[t._v("1000")]),t._v(" "),a("td",[t._v("500")])])])]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" customer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n       "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("when")]),t._v(" payment_type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'credit'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" credit_transaction_count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("when")]),t._v(" payment_type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'debit'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" debit_transaction_count\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" payments\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("group")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" customer\n\n")])])]),a("p",[t._v("Result:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Customer")]),t._v(" "),a("th",[t._v("credit_transaction_count")]),t._v(" "),a("th",[t._v("debit_transaction_count")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Peter")]),t._v(" "),a("td",[t._v("2")]),t._v(" "),a("td",[t._v("0")])]),t._v(" "),a("tr",[a("td",[t._v("John")]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td",[t._v("1")])])])]),t._v(" "),a("h2",{attrs:{id:"list-concatenation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-concatenation"}},[t._v("#")]),t._v(" List Concatenation")]),t._v(" "),a("p",[t._v("Partial credit to "),a("a",{attrs:{href:"http://stackoverflow.com/a/19348687/4896952",target:"_blank",rel:"noopener noreferrer"}},[t._v("this"),a("OutboundLink")],1),t._v(" SO answer.")]),t._v(" "),a("p",[t._v("List Concatenation aggregates a column or expression by combining the values into a single string for each group. A string to delimit each value (either blank or a comma when omitted) and the order of the values in the result can be specified. While it is not part of the SQL standard, every major relational database vendor supports it in their own way.")]),t._v(" "),a("h3",{attrs:{id:"mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[t._v("#")]),t._v(" MySQL")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" ColumnA\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" GROUP_CONCAT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ColumnB "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" ColumnB SEPARATOR "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("','")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" ColumnBs\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" TableName\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GROUP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" ColumnA\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" ColumnA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"oracle-db2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oracle-db2"}},[t._v("#")]),t._v(" Oracle & DB2")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" ColumnA\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" LISTAGG"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ColumnB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("','")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITHIN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GROUP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" ColumnB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" ColumnBs\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" TableName\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GROUP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" ColumnA\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" ColumnA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"postgresql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#postgresql"}},[t._v("#")]),t._v(" PostgreSQL")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" ColumnA\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" STRING_AGG"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ColumnB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("','")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" ColumnB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" ColumnBs\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" TableName\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GROUP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" ColumnA\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" ColumnA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"sql-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-server"}},[t._v("#")]),t._v(" SQL Server")]),t._v(" "),a("h3",{attrs:{id:"sql-server-2016-and-earlier"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-server-2016-and-earlier"}},[t._v("#")]),t._v(" SQL Server 2016 and earlier")]),t._v(" "),a("p",[t._v("(CTE included to encourage the "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Don%27t_repeat_yourself",target:"_blank",rel:"noopener noreferrer"}},[t._v("DRY principle"),a("OutboundLink")],1),t._v(")")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\n WITH CTE_TableName AS (\n       SELECT ColumnA, ColumnB\n         FROM TableName)\nSELECT t0.ColumnA\n     , STUFF((\n       SELECT ',' + t1.ColumnB\n         FROM CTE_TableName t1\n        WHERE t1.ColumnA = t0.ColumnA\n        ORDER BY t1.ColumnB\n          FOR XML PATH('')), 1, 1, '') AS ColumnBs\n  FROM CTE_TableName t0\n GROUP BY t0.ColumnA\n ORDER BY ColumnA;\n\n")])])]),a("h3",{attrs:{id:"sql-server-2017-and-sql-azure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-server-2017-and-sql-azure"}},[t._v("#")]),t._v(" SQL Server 2017 and SQL Azure")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" ColumnA\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" STRING_AGG"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ColumnB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("','")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITHIN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GROUP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" ColumnB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" ColumnBs\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" TableName\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GROUP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" ColumnA\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" ColumnA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"sqlite"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sqlite"}},[t._v("#")]),t._v(" SQLite")]),t._v(" "),a("p",[t._v("without ordering:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" ColumnA\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" GROUP_CONCAT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ColumnB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("','")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" ColumnBs\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" TableName\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GROUP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" ColumnA\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" ColumnA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("ordering requires a subquery or CTE:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\n WITH CTE_TableName AS (\n       SELECT ColumnA, ColumnB\n         FROM TableName\n        ORDER BY ColumnA, ColumnB)\nSELECT ColumnA\n     , GROUP_CONCAT(ColumnB, ',') AS ColumnBs\n  FROM CTE_TableName\n GROUP BY ColumnA\n ORDER BY ColumnA;\n\n")])])]),a("h2",{attrs:{id:"sum"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sum"}},[t._v("#")]),t._v(" SUM")]),t._v(" "),a("p",[a("code",[t._v("Sum")]),t._v(" function sum the value of all the rows in the group. If the group by clause is omitted then sums all the rows.")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("salary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" TotalSalary\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" employees"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("TotalSalary")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("2500")])])])]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" DepartmentId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("salary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" TotalSalary\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" employees\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("group")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" DepartmentId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("DepartmentId")]),t._v(" "),a("th",[t._v("TotalSalary")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("2000")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("500")])])])]),t._v(" "),a("h2",{attrs:{id:"avg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#avg"}},[t._v("#")]),t._v(" AVG()")]),t._v(" "),a("p",[t._v("The aggregate function AVG() returns the average of a given expression, usually numeric values in a column. Assume we have a table containing the yearly calculation of population in cities across the world. The records for New York City look similar to the ones below:")]),t._v(" "),a("h3",{attrs:{id:"example-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-table"}},[t._v("#")]),t._v(" EXAMPLE TABLE")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("city_name")]),t._v(" "),a("th",[t._v("population")]),t._v(" "),a("th",[t._v("year")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("New York City")]),t._v(" "),a("td",[t._v("8,550,405")]),t._v(" "),a("td",[t._v("2015")])]),t._v(" "),a("tr",[a("td",[t._v("New York City")]),t._v(" "),a("td",[t._v("...")]),t._v(" "),a("td",[t._v("...")])]),t._v(" "),a("tr",[a("td",[t._v("New York City")]),t._v(" "),a("td",[t._v("8,000,906")]),t._v(" "),a("td",[t._v("2005")])])])]),t._v(" "),a("p",[t._v("To select the average population of the New York City, USA from a table containing city names, population measurements, and measurement years for last ten years:")]),t._v(" "),a("h3",{attrs:{id:"query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query"}},[t._v("#")]),t._v(" QUERY")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" city_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AVG")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("population"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" avg_population\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" city_population\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" city_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'NEW YORK CITY'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("Notice how measurement year is absent from the query since population is being averaged over time.")]),t._v(" "),a("h3",{attrs:{id:"results"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#results"}},[t._v("#")]),t._v(" RESULTS")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("city_name")]),t._v(" "),a("th",[t._v("avg_population")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("New York City")]),t._v(" "),a("td",[t._v("8,250,754")])])])]),t._v(" "),a("blockquote"),t._v(" "),a("p",[t._v("Note: The AVG() function will convert values to numeric types. This is especially important to keep in mind when working with dates.")]),t._v(" "),a("h2",{attrs:{id:"count"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#count"}},[t._v("#")]),t._v(" Count")]),t._v(" "),a("p",[t._v("You can count the number of rows:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" TotalRows\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" employees"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("TotalRows")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("4")])])])]),t._v(" "),a("p",[t._v("Or count the employees per department:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" DepartmentId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" NumEmployees\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" employees\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GROUP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" DepartmentId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("DepartmentId")]),t._v(" "),a("th",[t._v("NumEmployees")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("3")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("1")])])])]),t._v(" "),a("p",[t._v("You can count over a column/expression with the effect that will not count the "),a("code",[t._v("NULL")]),t._v(" values:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ManagerId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" mgr\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" EMPLOYEES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("mgr")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("3")])])])]),t._v(" "),a("p",[t._v("(There is one null value managerID column)")]),t._v(" "),a("p",[t._v("You can also use "),a("strong",[t._v("DISTINCT")]),t._v(" inside of another function such as "),a("strong",[t._v("COUNT")]),t._v(" to only find the "),a("strong",[t._v("DISTINCT")]),t._v(" members of the set to perform the operation on.")]),t._v(" "),a("p",[t._v("For example:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\nSELECT COUNT(ContinentCode) AllCount\n ,      COUNT(DISTINCT ContinentCode) SingleCount\n FROM Countries;\n\n")])])]),a("p",[t._v("Will return different values. The "),a("strong",[t._v("SingleCount")]),t._v(" will only Count individual Continents once, while the "),a("strong",[t._v("AllCount")]),t._v(" will include duplicates.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("ContinentCode")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("OC")])]),t._v(" "),a("tr",[a("td",[t._v("EU")])]),t._v(" "),a("tr",[a("td",[t._v("AS")])]),t._v(" "),a("tr",[a("td",[t._v("NA")])]),t._v(" "),a("tr",[a("td",[t._v("NA")])]),t._v(" "),a("tr",[a("td",[t._v("AF")])]),t._v(" "),a("tr",[a("td",[t._v("AF")])])])]),t._v(" "),a("p",[t._v("AllCount: 7\nSingleCount: 5")]),t._v(" "),a("h2",{attrs:{id:"max"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#max"}},[t._v("#")]),t._v(" Max")]),t._v(" "),a("p",[t._v("Find the maximum value of column:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" employee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("Above example will return largest value for column "),a("code",[t._v("age")]),t._v(" of "),a("code",[t._v("employee")]),t._v(" table.")]),t._v(" "),a("p",[t._v("Syntax:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MAX")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("column_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" table_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"min"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#min"}},[t._v("#")]),t._v(" Min")]),t._v(" "),a("p",[t._v("Find the smallest value of column:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\nselect min(age) from employee;\n\n")])])]),a("p",[t._v("Above example will return smallest value for column "),a("code",[t._v("age")]),t._v(" of "),a("code",[t._v("employee")]),t._v(" table.")]),t._v(" "),a("p",[t._v("Syntax:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\nSELECT MIN(column_name) FROM table_name;\n\n")])])]),a("h4",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("ul",[a("li",[t._v("Function(["),a("strong",[t._v("DISTINCT")]),t._v("] expression) -DISTINCT is an optional parameter")]),t._v(" "),a("li",[t._v("AVG ( [ ALL | DISTINCT ] expression )")]),t._v(" "),a("li",[t._v("COUNT( { [ALL | DISTINCT ] expression ] | * } )")]),t._v(" "),a("li",[t._v("GROUPING(<column_expression>)")]),t._v(" "),a("li",[t._v("MAX ( [ ALL | DISTINCT ] expression )")]),t._v(" "),a("li",[t._v("MIN ( [ ALL | DISTINCT ] expression )")]),t._v(" "),a("li",[t._v("SUM ( [ ALL | DISTINCT ] expression )\n")]),a("li",[t._v("VAR ( [ ALL | DISTINCT ] expression )"),a("br"),t._v("\nOVER ( [ partition_by_clause ] order_by_clause )")]),t._v(" "),a("li",[t._v("VARP ( [ ALL | DISTINCT ] expression )"),a("br"),t._v("\nOVER ( [ partition_by_clause ] order_by_clause")]),t._v(" "),a("li",[t._v("STDEV ( [ ALL | DISTINCT ] expression )"),a("br"),t._v("\nOVER ( [ partition_by_clause ] order_by_clause )")]),t._v(" "),a("li",[t._v("STDEVP ( [ ALL | DISTINCT ] expression )"),a("br"),t._v("\nOVER ( [ partition_by_clause ] order_by_clause )")])]),t._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),a("p",[t._v("In database management an aggregate function is a function where the values of multiple rows are grouped together as input on certain criteria to form a single value of more significant meaning or measurement such as a set, a bag or a list.")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("MIN        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" the smallest "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("value")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" a given "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("column")]),t._v("\nMAX        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" the largest "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("value")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" a given "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("column")]),t._v("\nSUM        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" the sum "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" the "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("numeric")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" a given "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("column")]),t._v("\nAVG        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" the average "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("value")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" a given "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("column")]),t._v("\nCOUNT      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" the total number "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" a given "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("column")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("COUNT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" the number "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rows")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v("\nGROUPING   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("Is")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("column")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("or")]),t._v(" an expression that "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("contains")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("column")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GROUP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" clause"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nSTDEV      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" the statistical standard deviation "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("all")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" the specified expression"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nSTDEVP     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" the statistical standard deviation "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the population "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("all")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" the specified expression"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nVAR        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" the statistical variance "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("all")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" the specified expression"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" may be followed "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" the "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("OVER")]),t._v(" clause"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nVARP       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" the statistical variance "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the population "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("all")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" the specified expression"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n")])])]),a("blockquote"),t._v(" "),a("p",[t._v('Aggregate functions are used to compute against a "returned column of\nnumeric data" from your `SELECT` statement. They basically summarize\nthe results of a particular column of selected data. - [SQLCourse2.com](http://www.sqlcourse2.com/agg_functions.html)')]),t._v(" "),a("p",[t._v("All aggregate functions ignore NULL values.")])])}),[],!1,null,null,null);s.default=n.exports}}]);