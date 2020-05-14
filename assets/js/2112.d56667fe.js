(window.webpackJsonp=window.webpackJsonp||[]).push([[2112],{2458:function(s,a,t){"use strict";t.r(a);var e=t(19),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"getting-started-with-mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-mysql"}},[s._v("#")]),s._v(" Getting started with MySQL")]),s._v(" "),t("h2",{attrs:{id:"getting-started"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[s._v("#")]),s._v(" Getting Started")]),s._v(" "),t("p",[t("strong",[s._v("Creating a database in MySQL")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v(" mydb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),t("p",[s._v("Return value:")]),s._v(" "),t("blockquote"),s._v(" "),t("p",[s._v("Query OK, 1 row affected (0.05 sec)")]),s._v(" "),t("p",[t("strong",[s._v("Using the created database")]),s._v(" "),t("code",[s._v("mydb")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USE")]),s._v(" mydb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),t("p",[s._v("Return value:")]),s._v(" "),t("blockquote"),s._v(" "),t("p",[s._v("Database Changed")]),s._v(" "),t("p",[t("strong",[s._v("Creating a table in MySQL")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" mytable\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  id              "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("auto_increment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  username        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  email           "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIMARY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),t("p",[t("code",[s._v("CREATE TABLE mytable")]),s._v(" will create a new table called "),t("code",[s._v("mytable")]),s._v(".")]),s._v(" "),t("p",[t("code",[s._v("id int unsigned NOT NULL auto_increment")]),s._v(" creates the "),t("code",[s._v("id")]),s._v(" column, this type of field will assign a unique numeric ID to each record in the table (meaning that no two rows can have the same "),t("code",[s._v("id")]),s._v(" in this case), MySQL will automatically assign a new, unique value to the record's "),t("code",[s._v("id")]),s._v(" field (starting with 1).")]),s._v(" "),t("p",[s._v("Return value:")]),s._v(" "),t("blockquote"),s._v(" "),t("p",[s._v("Query OK, 0 rows affected (0.10 sec)")]),s._v(" "),t("p",[t("strong",[s._v("Inserting a row into a MySQL table")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" mytable "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" username"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" email "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"myuser"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"myuser@example.com"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),t("p",[s._v("Example return value:")]),s._v(" "),t("blockquote"),s._v(" "),t("p",[s._v("Query OK, 1 row affected (0.06 sec)")]),s._v(" "),t("p",[s._v("The "),t("code",[s._v("varchar")]),s._v(" a.k.a "),t("code",[s._v("strings")]),s._v(" can be also be inserted using single quotes:")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" mytable "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" username"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" email "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'username'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'username@example.com'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),t("p",[t("strong",[s._v("Updating a row into a MySQL table")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" mytable "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" username"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"myuser"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("\n\n")])])]),t("p",[s._v("Example return value:")]),s._v(" "),t("blockquote"),s._v(" "),t("p",[s._v("Query OK, 1 row affected (0.06 sec)")]),s._v(" "),t("p",[s._v("The "),t("code",[s._v("int")]),s._v(" value can be inserted in a query without quotes. Strings and Dates must be enclosed in single quote "),t("code",[s._v("'")]),s._v(" or double quotes "),t("code",[s._v('"')]),s._v(".")]),s._v(" "),t("p",[t("strong",[s._v("Deleting a row into a MySQL table")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELETE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" mytable "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("\n\n")])])]),t("p",[s._v("Example return value:")]),s._v(" "),t("blockquote"),s._v(" "),t("p",[s._v("Query OK, 1 row affected (0.06 sec)")]),s._v(" "),t("p",[s._v("This will delete the row having "),t("code",[s._v("id")]),s._v(" is 8.")]),s._v(" "),t("p",[t("strong",[s._v("Selecting rows based on conditions in MySQL")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" mytable "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" username "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"myuser"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),t("p",[s._v("Return value:")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----+----------+---------------------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" username "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" email               "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----+----------+---------------------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" myuser   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" myuser"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@example.com")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----+----------+---------------------+")]),s._v("\n\n")])])]),t("blockquote"),s._v(" "),t("p",[s._v("1 row in set (0.00 sec)")]),s._v(" "),t("p",[t("strong",[s._v("Show list of existing databases")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("databases")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),t("p",[s._v("Return value:")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-------------------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Databases")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-------------------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" information_schema"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" mydb              "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-------------------+")]),s._v("\n\n")])])]),t("blockquote"),s._v(" "),t("p",[s._v("2 rows in set (0.00 sec)")]),s._v(" "),t("p",[s._v('You can think of "information_schema" as a "master database" that provides access to database metadata.')]),s._v(" "),t("p",[t("strong",[s._v("Show tables in an existing database")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("tables")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),t("p",[s._v("Return value:")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----------------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Tables_in_mydb "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----------------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" mytable        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----------------+")]),s._v("\n\n")])])]),t("blockquote"),s._v(" "),t("p",[s._v("1 row in set (0.00 sec)")]),s._v(" "),t("p",[t("strong",[s._v("Show all the fields of a table")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESCRIBE")]),s._v(" databaseName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tableName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),t("p",[s._v("or, if already using a database:")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESCRIBE")]),s._v(" tableName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),t("p",[s._v("Return value:")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------+----------------+--------+---------+-------------------+-------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Field     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Type")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("Null")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Key")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Default")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Extra "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------+----------------+--------+---------+-------------------+-------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" fieldname "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" fieldvaluetype "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("NO")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("YES "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" keytype "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" defaultfieldvalue "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------+----------------+--------+---------+-------------------+-------+")]),s._v("\n\n")])])]),t("p",[t("code",[s._v("Extra")]),s._v(" may contain "),t("code",[s._v("auto_increment")]),s._v(" for example.")]),s._v(" "),t("p",[t("code",[s._v("Key")]),s._v(" refers to the type of key that may affect the field. Primary (PRI), Unique (UNI) ...")]),s._v(" "),t("blockquote"),s._v(" "),t("p",[s._v("n row in set (0.00 sec)")]),s._v(" "),t("p",[s._v("Where n is the number of fields in the table.")]),s._v(" "),t("p",[t("strong",[s._v("Creating user")])]),s._v(" "),t("p",[s._v("First, you need to create a user and then give the user permissions on certain databases/tables. While creating the user, you also need to specify where this user can connect from.")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'user'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'localhost'")]),s._v(" IDENTIFIED "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'some_password'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),t("p",[s._v("Will create a user that can only connect on the local machine where the database is hosted.")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'user'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'%'")]),s._v(" IDENTIFIED "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'some_password'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),t("p",[s._v("Will create a user that can connect from anywhere (except the local machine).")]),s._v(" "),t("p",[s._v("Example return value:")]),s._v(" "),t("blockquote"),s._v(" "),t("p",[s._v("Query OK, 0 rows affected (0.00 sec)")]),s._v(" "),t("p",[t("strong",[s._v("Adding privileges")])]),s._v(" "),t("p",[s._v("Grant common, basic privileges to the user for all tables of the specified database:")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" databaseName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'userName'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'localhost'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),t("p",[s._v("Grant all privileges to the user for all tables on all databases (attention with this):")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALL")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'userName'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'localhost'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OPTION")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),t("p",[s._v("As demonstrated above, "),t("code",[s._v("*.*")]),s._v(" targets all databases and tables, "),t("code",[s._v("databaseName.*")]),s._v(" targets all tables of the specific database. It is also possible to specify database and table like so "),t("code",[s._v("databaseName.tableName")]),s._v(".")]),s._v(" "),t("p",[t("code",[s._v("WITH GRANT OPTION")]),s._v(" should be left out if the user need not be able to grant other users privileges.")]),s._v(" "),t("p",[s._v("Privileges can be "),t("strong",[s._v("either")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALL")]),s._v("\n\n")])])]),t("p",[t("strong",[s._v("or")]),s._v(" a combination of the following, each separated by a comma (non-exhaustive list).")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELETE")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DROP")]),s._v("\n\n")])])]),t("p",[t("strong",[s._v("Note")])]),s._v(" "),t("p",[s._v("Generally, you should try to avoid using column or table names containing spaces or using reserved words in SQL. For example, it's best to avoid names like "),t("code",[s._v("table")]),s._v(" or "),t("code",[s._v("first name")]),s._v(".")]),s._v(" "),t("p",[s._v("If you must use such names, put them between back-tick ```sql` delimiters. For example:")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("   \n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("first")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VARCHAR")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),t("p",[s._v("A query containing the back-tick delimiters on this table might be:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\nSELECT `first name` FROM `table` WHERE `first name` LIKE 'a%';\n\n")])])]),t("h2",{attrs:{id:"information-schema-examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#information-schema-examples"}},[s._v("#")]),s._v(" Information Schema Examples")]),s._v(" "),t("h3",{attrs:{id:"processlist"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#processlist"}},[s._v("#")]),s._v(" Processlist")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" information_schema"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("PROCESSLIST "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" INFO "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TIME")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),t("p",[s._v("This is a bit more detail on time-frames as it is in seconds by default")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" ID"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" HOST"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" DB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" COMMAND"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TIME")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" time_seconds"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ROUND")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TIME")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" time_minutes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ROUND")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TIME")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" time_hours"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \nSTATE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" INFO\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" information_schema"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("PROCESSLIST "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" INFO "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TIME")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),t("h3",{attrs:{id:"stored-procedure-searching"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stored-procedure-searching"}},[s._v("#")]),s._v(" Stored Procedure Searching")]),s._v(" "),t("p",[s._v("Easily search thru all "),t("code",[s._v("Stored Procedures")]),s._v(" for words and wildcards.")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" information_schema"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ROUTINES "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" ROUTINE_DEFINITION "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("LIKE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%word%'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),t("h4",{attrs:{id:"remarks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[s._v("#")]),s._v(" Remarks")]),s._v(" "),t("img",{attrs:{src:"https://i.stack.imgur.com/NWTjw.png",alt:"MySQL Logo"}}),s._v(" "),t("p",[t("a",{attrs:{href:"http://www.mysql.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("MySQL"),t("OutboundLink")],1),s._v(" is an open-source Relational Database Management System (RDBMS) that is developed and supported by Oracle Corporation.")]),s._v(" "),t("p",[s._v("MySQL is "),t("a",{attrs:{href:"http://www.mysql.com/support/supportedplatforms/database.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("supported"),t("OutboundLink")],1),s._v(" on a large number of platforms, including Linux variants, OS X, and Windows. It also has "),t("a",{attrs:{href:"http://dev.mysql.com/doc/refman/5.7/en/connectors-apis.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("APIs"),t("OutboundLink")],1),s._v(" for a large number of languages, including C, C++, Java, Lua, .Net, Perl, PHP, Python, and Ruby.")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://mariadb.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("MariaDB"),t("OutboundLink")],1),s._v(" is a fork of MySQL with a "),t("a",{attrs:{href:"https://mariadb.com/kb/en/mariadb/mariadb-vs-mysql-features/",target:"_blank",rel:"noopener noreferrer"}},[s._v("slightly different feature set"),t("OutboundLink")],1),s._v(". It is entirely compatible with MySQL for most applications.")])])}),[],!1,null,null,null);a.default=r.exports}}]);