(window.webpackJsonp=window.webpackJsonp||[]).push([[1981],{2326:function(s,e,t){"use strict";t.r(e);var a=t(19),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"common-language-runtime-integration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#common-language-runtime-integration"}},[s._v("#")]),s._v(" Common Language Runtime Integration")]),s._v(" "),t("h2",{attrs:{id:"enable-clr-on-database"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enable-clr-on-database"}},[s._v("#")]),s._v(" Enable CLR on database")]),s._v(" "),t("p",[s._v("CLR procedures are not enabled by default. You need to run the following queries to enable CLR:")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("sp_configure "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'show advanced options'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nGO\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RECONFIGURE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nGO\nsp_configure "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'clr enabled'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nGO\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RECONFIGURE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nGO\n\n")])])]),t("p",[s._v("In addition, if some CLR module need external access, you should set TRUSTWORTHY property to ON in your database:")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v(" MyDbWithClr "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" TRUSTWORTHY "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v("\n\n")])])]),t("h2",{attrs:{id:"adding-dll-that-contains-sql-clr-modules"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adding-dll-that-contains-sql-clr-modules"}},[s._v("#")]),s._v(" Adding .dll that contains Sql CLR modules")]),s._v(" "),t("p",[s._v("Procedures, functions, triggers, and types written in .Net languages are stored in .dll files. Once you create .dll file containing CLR procedures you should import it into SQL Server:")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" ASSEMBLY MyLibrary\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'C:\\lib\\MyStoredProcedures.dll'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" PERMISSION_SET "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" EXTERNAL_ACCESS\n\n")])])]),t("p",[s._v("PERMISSION_SET is Safe by default meaning that code in .dll don't need permission to access external resources (e.g. files, web sites, other servers), and that it will not use native code that can access memory.")]),s._v(" "),t("p",[s._v("PERMISSION_SET = EXTERNAL_ACCESS is used to mark assemblies that contain code that will access external resources.")]),s._v(" "),t("p",[s._v("you can find information about current CLR assembly files in sys.assemblies view:")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" sys"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("assemblies asms\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" is_user_defined "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n")])])]),t("h2",{attrs:{id:"create-clr-function-in-sql-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-clr-function-in-sql-server"}},[s._v("#")]),s._v(" Create CLR Function in SQL Server")]),s._v(" "),t("p",[s._v("If you have created .Net function, compiled it into .dll, and imported it into SQL server as an assembly, you can create user-defined function that references function in that assembly:")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FUNCTION")]),s._v(" dbo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("TextCompress"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@input")]),s._v(" nvarchar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RETURNS")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varbinary")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" EXTERNAL NAME MyLibrary"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Space"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ClassName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("TextCompress \n\n")])])]),t("p",[s._v("You need to specify name of the function and signature with input parameters and return values that match .Net function. In AS EXTERNAL NAME clause you need to specify assembly name, namespace/class name where this function is placed and name of the method in the class that contains the code that will be exposed as function.")]),s._v(" "),t("p",[s._v("You can find information about the CLR functions using the following query:")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" dbo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sysobjects "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TYPE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'FS'")]),s._v("\n\n")])])]),t("h2",{attrs:{id:"create-clr-user-defined-type-in-sql-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-clr-user-defined-type-in-sql-server"}},[s._v("#")]),s._v(" Create CLR User-defined type in SQL Server")]),s._v(" "),t("p",[s._v("If you have create .Net class that represents some user-defined type, compiled it into .dll, and imported it into SQL server as an assembly, you can create user-defined function that references this class:")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TYPE")]),s._v(" dbo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Point")]),s._v("\nEXTERNAL NAME MyLibrary"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Space"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Point")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n")])])]),t("p",[s._v("You need to specify name of the type that will be used in T-SQL queries. In EXTERNAL NAME clause you need to specify assembly name, namespace, and class name.")]),s._v(" "),t("h2",{attrs:{id:"create-clr-procedure-in-sql-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-clr-procedure-in-sql-server"}},[s._v("#")]),s._v(" Create CLR procedure in SQL Server")]),s._v(" "),t("p",[s._v("If you have created .Net method in some class, compiled it into .dll, and imported it into SQL server as an assembly, you can create user-defined stored procedure that references method in that assembly:")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PROCEDURE")]),s._v(" dbo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("DoSomethng"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@input")]),s._v(" nvarchar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" EXTERNAL NAME MyLibrary"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Space"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ClassName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("DoSomething\n\n")])])]),t("p",[s._v("You need to specify name of the procedure and signature with input parameters that match .Net method. In AS EXTERNAL NAME clause you need to specify assembly name, namespace/class name where this procedure is placed and name of the method in the class that contains the code that will be exposed as procedure.")])])}),[],!1,null,null,null);e.default=n.exports}}]);