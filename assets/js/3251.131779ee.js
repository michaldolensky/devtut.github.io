(window.webpackJsonp=window.webpackJsonp||[]).push([[3251],{3597:function(e,t,a){"use strict";a.r(t);var s=a(19),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"cross-apply-outer-apply"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cross-apply-outer-apply"}},[e._v("#")]),e._v(" cross apply, outer apply")]),e._v(" "),a("h2",{attrs:{id:"cross-apply-and-outer-apply-basics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cross-apply-and-outer-apply-basics"}},[e._v("#")]),e._v(" CROSS APPLY and OUTER APPLY basics")]),e._v(" "),a("p",[e._v("Apply will be used when when table valued function in the right expression.")]),e._v(" "),a("p",[e._v("create a Department table to hold information about departments. Then create an Employee table which hold information about the employees. Please note, each employee belongs to a department, hence the Employee table has referential integrity with the Department table.")]),e._v(" "),a("p",[e._v("First query selects data from Department table and uses CROSS APPLY to evaluate the Employee table for each record of the Department table. Second query simply joins the Department table with the Employee table and all the matching records are produced.")]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" Department D\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CROSS")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("APPLY")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" Employee E\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WHERE")]),e._v(" E"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("DepartmentID "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" D"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("DepartmentID\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" A\nGO\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" Department D\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("INNER")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("JOIN")]),e._v(" Employee E\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ON")]),e._v(" D"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("DepartmentID "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" E"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("DepartmentID\n\n")])])]),a("p",[e._v("If you look at the results they produced, it is the exact same result-set;  How does it differ from a JOIN and how does it help in writing more efficient queries.")]),e._v(" "),a("p",[e._v("The first query in Script #2 selects data from Department table and uses OUTER APPLY to evaluate the Employee table for each record of the Department table.  For those rows for which there is not a match in Employee table, those rows contains NULL values as you can see in case of row 5 and 6. The second query simply uses a LEFT OUTER JOIN between the Department table and the Employee table.  As expected the query returns all rows from Department table; even for those rows for which there is no match in the Employee table.")]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" Department D\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("OUTER")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("APPLY")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" Employee E\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WHERE")]),e._v(" E"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("DepartmentID "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" D"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("DepartmentID\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" A\nGO\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" Department D\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("LEFT")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("OUTER")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("JOIN")]),e._v(" Employee E\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ON")]),e._v(" D"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("DepartmentID "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" E"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("DepartmentID\nGO\n\n")])])]),a("p",[e._v("Even though the above two queries return the same information, the execution plan will be bit different. But cost wise there will be not much difference.")]),e._v(" "),a("p",[e._v("Now comes the time to see where the APPLY operator is really required. In Script #3, I am creating a table-valued function which accepts DepartmentID as its parameter and returns all the employees who belong to this department. The next query selects data from Department table and uses CROSS APPLY to join with the function we created.  It passes the DepartmentID for each row from the outer table expression (in our case Department table) and evaluates the function for each row similar to a correlated subquery. The next query uses the OUTER APPLY in place of CROSS APPLY and hence unlike CROSS APPLY which returned only correlated data, the OUTER APPLY returns non-correlated data as well, placing NULLs into the missing columns.")]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CREATE")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FUNCTION")]),e._v(" dbo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("fn_GetAllEmployeeOfADepartment "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("@DeptID")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("AS")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("RETURNS")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("TABLE")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("AS")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("RETURN")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" Employee E\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WHERE")]),e._v(" E"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("DepartmentID "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("@DeptID")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\nGO\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" Department D\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CROSS")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("APPLY")]),e._v(" dbo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("fn_GetAllEmployeeOfADepartment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("D"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("DepartmentID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\nGO\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" Department D\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("OUTER")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("APPLY")]),e._v(" dbo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("fn_GetAllEmployeeOfADepartment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("D"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("DepartmentID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\nGO\n\n")])])]),a("p",[e._v('So now if you are wondering, can we use a simple join in place of the above queries? Then the answer is NO, if you replace CROSS/OUTER APPLY in the above queries with INNER JOIN/LEFT OUTER JOIN, specify ON clause (something as 1=1) and run the query, you will get "The multi-part identifier "D.DepartmentID" could not be bound."  error. This is because with JOINs the execution context of outer query is different from the execution context of the function (or a derived table), and you can not bind a value/variable from the outer query to the function as a parameter.  Hence the APPLY operator is required for such queries.')])])}),[],!1,null,null,null);t.default=n.exports}}]);