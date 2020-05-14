(window.webpackJsonp=window.webpackJsonp||[]).push([[2122],{2467:function(t,a,s){"use strict";s.r(a);var e=s(19),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"load-data-infile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#load-data-infile"}},[t._v("#")]),t._v(" LOAD DATA INFILE")]),t._v(" "),s("h2",{attrs:{id:"using-load-data-infile-to-load-large-amount-of-data-to-database"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-load-data-infile-to-load-large-amount-of-data-to-database"}},[t._v("#")]),t._v(" using LOAD DATA INFILE to load large amount of data to database")]),t._v(" "),s("p",[t._v("Consider the following example assuming that you have a ';'-delimited CSV to load into your database.")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("max"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("male"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("manager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1985")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("jack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("male"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("executive"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1990")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("marta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("female"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("accountant"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1992")]),t._v("\n\n")])])]),s("p",[t._v("Create the table for insertion.")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("employee"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARCHAR")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("sex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARCHAR")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("designation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARCHAR")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("dob"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARCHAR")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                              \n\n")])])]),s("p",[t._v("Use the following query to insert the values in that table.")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LOAD")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATA")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INFILE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path of the file/file_name.txt'")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" employee\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FIELDS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TERMINATED")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("';'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//specify the delimiter separating the values")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LINES")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TERMINATED")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\r\\n'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("sex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("designation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("dob"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v("Consider the case where the date format is non standard.")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("max"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("male"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("manager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Jan"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1985")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("jack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("male"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("executive"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("01")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Feb"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1992")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("marta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("female"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("accountant"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Apr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1993")]),t._v("\n\n")])])]),s("p",[t._v("In this case you can change the format of the "),s("code",[t._v("dob")]),t._v(" column before inserting like this.")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LOAD")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATA")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INFILE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path of the file/file_name.txt'")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" employee\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FIELDS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TERMINATED")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("';'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//specify the delimiter separating the values")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LINES")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TERMINATED")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\r\\n'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("sex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("designation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@dob")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("date")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" STR_TO_DATE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%d-%b-%Y'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("This example of LOAD DATA INFILE does not specify all the available features.")]),t._v(" "),s("p",[t._v("You can see more references on LOAD DATA INFILE "),s("a",{attrs:{href:"http://dev.mysql.com/doc/refman/5.7/en/load-data.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"load-data-with-duplicates"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#load-data-with-duplicates"}},[t._v("#")]),t._v(" Load data with duplicates")]),t._v(" "),s("p",[t._v("If you use the "),s("code",[t._v("LOAD DATA INFILE")]),t._v(" command to populate a table with existing data, you will often find that the import fails due to duplicates. There are several possible ways to overcome this problem.")]),t._v(" "),s("h3",{attrs:{id:"load-data-local"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#load-data-local"}},[t._v("#")]),t._v(" LOAD DATA LOCAL")]),t._v(" "),s("p",[t._v("If this option has been enabled in your server, it can be used to load a file that exists on the client computer rather than the server. A side effect is that duplicate rows for unique values are ignored.")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LOAD")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATA")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LOCAL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INFILE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path of the file/file_name.txt'")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" employee\n\n")])])]),s("h3",{attrs:{id:"load-data-infile-fname-replace"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#load-data-infile-fname-replace"}},[t._v("#")]),t._v(" LOAD DATA INFILE 'fname' REPLACE")]),t._v(" "),s("p",[t._v("When the replace keyword is used duplicate unique or primary keys will result in the existing row being replaced with new ones")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LOAD")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATA")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INFILE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path of the file/file_name.txt'")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REPLACE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" employee\n\n")])])]),s("h3",{attrs:{id:"load-data-infile-fname-ignore"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#load-data-infile-fname-ignore"}},[t._v("#")]),t._v(" LOAD DATA INFILE 'fname' IGNORE")]),t._v(" "),s("p",[t._v("The opposite of "),s("code",[t._v("REPLACE")]),t._v(", existing rows will be preserved and new ones ignored. This behavior is similar to "),s("code",[t._v("LOCAL")]),t._v(" described above. However the file need not exist on the client computer.")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LOAD")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATA")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INFILE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path of the file/file_name.txt'")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IGNORE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" employee\n\n")])])]),s("h3",{attrs:{id:"load-via-intermediary-table"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#load-via-intermediary-table"}},[t._v("#")]),t._v(" Load via intermediary table")]),t._v(" "),s("p",[t._v("Sometimes ignoring or replacing all duplicates may not be the ideal option. You may need to make decisions based on the contents of other columns. In that case the best option is to load into an intermediary table and transfer from there.")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" employee "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" intermediary "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"import-a-csv-file-into-a-mysql-table"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#import-a-csv-file-into-a-mysql-table"}},[t._v("#")]),t._v(" Import a CSV file into a MySQL table")]),t._v(" "),s("p",[t._v("The following command imports CSV files into a MySQL table with the same columns while respecting CSV quoting and escaping rules.")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("load")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("data")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("infile")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/tmp/file.csv'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" my_table\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fields")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("terminated")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("','")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("optionally")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enclosed")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\"'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("escaped")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\"'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("lines")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("terminated")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\n'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ignore")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("lines")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- skip the header row")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"import-export"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#import-export"}},[t._v("#")]),t._v(" import / export")]),t._v(" "),s("p",[t._v("import")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("c  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("OUTFILE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'result.txt'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FIELDS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TERMINATED")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("','")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("OPTIONALLY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENCLOSED")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\"'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LINES")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TERMINATED")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\n'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("Export")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LOAD")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATA")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INFILE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'result.txt'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("h4",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),s("ol",[s("li",[t._v("LOAD DATA [LOW_PRIORITY | CONCURRENT] [LOCAL] INFILE 'file_name'")]),t._v(" "),s("li",[t._v("INTO TABLE tbl_name")]),t._v(" "),s("li",[t._v("[CHARACTER SET charset]\n")]),s("li",[t._v("[{FIELDS | COLUMNS}\n[TERMINATED BY 'string']\n[[OPTIONALLY] ENCLOSED BY 'char']]")]),t._v(" "),s("li",[t._v("[LINES\n[STARTING BY 'string']\n[TERMINATED BY 'string']\n]")]),t._v(" "),s("li",[t._v("[IGNORE number {LINES | ROWS}]")]),t._v(" "),s("li",[t._v("[(col_name_or_user_var,...)]")]),t._v(" "),s("li",[t._v("[SET col_name = expr,...]")])])])}),[],!1,null,null,null);a.default=n.exports}}]);