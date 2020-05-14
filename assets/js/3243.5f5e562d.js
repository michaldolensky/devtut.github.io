(window.webpackJsonp=window.webpackJsonp||[]).push([[3243],{3588:function(t,s,a){"use strict";a.r(s);var e=a(19),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"case"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#case"}},[t._v("#")]),t._v(" CASE")]),t._v(" "),a("p",[t._v("The CASE expression is used to implement if-then logic.")]),t._v(" "),a("h2",{attrs:{id:"use-case-to-count-the-number-of-rows-in-a-column-match-a-condition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-case-to-count-the-number-of-rows-in-a-column-match-a-condition"}},[t._v("#")]),t._v(" Use CASE to COUNT the number of rows in a column match a condition.")]),t._v(" "),a("p",[a("strong",[t._v("Use Case")])]),t._v(" "),a("p",[a("code",[t._v("CASE")]),t._v(" can be used in conjunction with "),a("code",[t._v("SUM")]),t._v(" to return a count of only those items matching a pre-defined condition. (This is similar to "),a("code",[t._v("COUNTIF")]),t._v(" in Excel.)")]),t._v(" "),a("p",[t._v('The trick is to return binary results indicating matches, so the "1"s returned for matching entries can be summed for a count of the total number of matches.')]),t._v(" "),a("p",[t._v("Given this table "),a("code",[t._v("ItemSales")]),t._v(', let\'s say you want to learn the total number of items that have been categorized as "Expensive":')]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Id")]),t._v(" "),a("th",[t._v("ItemId")]),t._v(" "),a("th",[t._v("Price")]),t._v(" "),a("th",[t._v("PriceRating")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("100")]),t._v(" "),a("td",[t._v("34.5")]),t._v(" "),a("td",[t._v("EXPENSIVE")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("145")]),t._v(" "),a("td",[t._v("2.3")]),t._v(" "),a("td",[t._v("CHEAP")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("100")]),t._v(" "),a("td",[t._v("34.5")]),t._v(" "),a("td",[t._v("EXPENSIVE")])]),t._v(" "),a("tr",[a("td",[t._v("4")]),t._v(" "),a("td",[t._v("100")]),t._v(" "),a("td",[t._v("34.5")]),t._v(" "),a("td",[t._v("EXPENSIVE")])]),t._v(" "),a("tr",[a("td",[t._v("5")]),t._v(" "),a("td",[t._v("145")]),t._v(" "),a("td",[t._v("10")]),t._v(" "),a("td",[t._v("AFFORDABLE")])])])]),t._v(" "),a("p",[a("strong",[t._v("Query")])]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("COUNT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" ItemsCount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SUM")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CASE")]),t._v(" \n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" PriceRating "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Expensive'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("THEN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ELSE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" ExpensiveItemsCount\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" ItemSales \n\n")])])]),a("p",[a("strong",[t._v("Results:")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("ItemsCount")]),t._v(" "),a("th",[t._v("ExpensiveItemsCount")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("5")]),t._v(" "),a("td",[t._v("3")])])])]),t._v(" "),a("p",[t._v("Alternative:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("COUNT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" ItemsCount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SUM")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CASE")]),t._v(" PriceRating \n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Expensive'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("THEN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ELSE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" ExpensiveItemsCount\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" ItemSales \n\n")])])]),a("h2",{attrs:{id:"searched-case-in-select-matches-a-boolean-expression"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#searched-case-in-select-matches-a-boolean-expression"}},[t._v("#")]),t._v(" Searched CASE in SELECT (Matches a boolean expression)")]),t._v(" "),a("p",[t._v("The "),a("strong",[t._v("searched")]),t._v(" CASE returns results when a "),a("strong",[t._v("boolean")]),t._v(" expression is TRUE.")]),t._v(" "),a("p",[t._v("(This differs from the simple case, which can only check for equivalency with an input.)")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" Id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ItemId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Price"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CASE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" Price "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("THEN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'CHEAP'")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" Price "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("THEN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'AFFORDABLE'")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ELSE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'EXPENSIVE'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" PriceRating\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" ItemSales\n\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Id")]),t._v(" "),a("th",[t._v("ItemId")]),t._v(" "),a("th",[t._v("Price")]),t._v(" "),a("th",[t._v("PriceRating")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("100")]),t._v(" "),a("td",[t._v("34.5")]),t._v(" "),a("td",[t._v("EXPENSIVE")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("145")]),t._v(" "),a("td",[t._v("2.3")]),t._v(" "),a("td",[t._v("CHEAP")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("100")]),t._v(" "),a("td",[t._v("34.5")]),t._v(" "),a("td",[t._v("EXPENSIVE")])]),t._v(" "),a("tr",[a("td",[t._v("4")]),t._v(" "),a("td",[t._v("100")]),t._v(" "),a("td",[t._v("34.5")]),t._v(" "),a("td",[t._v("EXPENSIVE")])]),t._v(" "),a("tr",[a("td",[t._v("5")]),t._v(" "),a("td",[t._v("145")]),t._v(" "),a("td",[t._v("10")]),t._v(" "),a("td",[t._v("AFFORDABLE")])])])]),t._v(" "),a("h2",{attrs:{id:"case-in-a-clause-order-by"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#case-in-a-clause-order-by"}},[t._v("#")]),t._v(" CASE in a clause ORDER BY")]),t._v(" "),a("p",[t._v("We can use 1,2,3.. to determine the type of order:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" DEPT\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CASE")]),t._v(" DEPARTMENT\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MARKETING'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("THEN")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SALES'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("THEN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'RESEARCH'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("THEN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'INNOVATION'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("THEN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ELSE")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      CITY\n\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("ID")]),t._v(" "),a("th",[t._v("REGION")]),t._v(" "),a("th",[t._v("CITY")]),t._v(" "),a("th",[t._v("DEPARTMENT")]),t._v(" "),a("th",[t._v("EMPLOYEES_NUMBER")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("12")]),t._v(" "),a("td",[t._v("New England")]),t._v(" "),a("td",[t._v("Boston")]),t._v(" "),a("td",[t._v("MARKETING")]),t._v(" "),a("td",[t._v("9")])]),t._v(" "),a("tr",[a("td",[t._v("15")]),t._v(" "),a("td",[t._v("West")]),t._v(" "),a("td",[t._v("San Francisco")]),t._v(" "),a("td",[t._v("MARKETING")]),t._v(" "),a("td",[t._v("12")])]),t._v(" "),a("tr",[a("td",[t._v("9")]),t._v(" "),a("td",[t._v("Midwest")]),t._v(" "),a("td",[t._v("Chicago")]),t._v(" "),a("td",[t._v("SALES")]),t._v(" "),a("td",[t._v("8")])]),t._v(" "),a("tr",[a("td",[t._v("14")]),t._v(" "),a("td",[t._v("Mid-Atlantic")]),t._v(" "),a("td",[t._v("New York")]),t._v(" "),a("td",[t._v("SALES")]),t._v(" "),a("td",[t._v("12")])]),t._v(" "),a("tr",[a("td",[t._v("5")]),t._v(" "),a("td",[t._v("West")]),t._v(" "),a("td",[t._v("Los Angeles")]),t._v(" "),a("td",[t._v("RESEARCH")]),t._v(" "),a("td",[t._v("11")])]),t._v(" "),a("tr",[a("td",[t._v("10")]),t._v(" "),a("td",[t._v("Mid-Atlantic")]),t._v(" "),a("td",[t._v("Philadelphia")]),t._v(" "),a("td",[t._v("RESEARCH")]),t._v(" "),a("td",[t._v("13")])]),t._v(" "),a("tr",[a("td",[t._v("4")]),t._v(" "),a("td",[t._v("Midwest")]),t._v(" "),a("td",[t._v("Chicago")]),t._v(" "),a("td",[t._v("INNOVATION")]),t._v(" "),a("td",[t._v("11")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("Midwest")]),t._v(" "),a("td",[t._v("Detroit")]),t._v(" "),a("td",[t._v("HUMAN RESOURCES")]),t._v(" "),a("td",[t._v("9")])])])]),t._v(" "),a("h2",{attrs:{id:"shorthand-case-in-select"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shorthand-case-in-select"}},[t._v("#")]),t._v(" Shorthand CASE in SELECT")]),t._v(" "),a("p",[a("code",[t._v("CASE")]),t._v("'s shorthand variant evaluates an expression (usually a column) against a series of values. This variant is a bit shorter, and saves repeating the evaluated expression over and over again. The "),a("code",[t._v("ELSE")]),t._v(" clause can still be used, though:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" Id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ItemId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Price"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CASE")]),t._v(" Price "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("THEN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'CHEAP'")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("THEN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'AFFORDABLE'")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ELSE")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'EXPENSIVE'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" PriceRating\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" ItemSales\n\n")])])]),a("p",[t._v("A word of caution. It's important to realize that when using the short variant the entire statement is evaluated at each "),a("code",[t._v("WHEN")]),t._v(". Therefore the following statement:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CASE")]),t._v(" ABS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CHECKSUM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NEWID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("THEN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Dr'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("THEN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Master'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("THEN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Mr'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("THEN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Mrs'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),t._v("\n\n")])])]),a("p",[t._v("may produce a "),a("code",[t._v("NULL")]),t._v(" result. That is because at each "),a("code",[t._v("WHEN")]),t._v(" "),a("code",[t._v("NEWID()")]),t._v(" is being called again with a new result. Equivalent to:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CASE")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" ABS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CHECKSUM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NEWID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("THEN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Dr'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" ABS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CHECKSUM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NEWID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("THEN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Master'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" ABS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CHECKSUM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NEWID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("THEN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Mr'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" ABS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CHECKSUM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NEWID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("THEN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Mrs'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),t._v("\n\n")])])]),a("p",[t._v("Therefore it can miss all the "),a("code",[t._v("WHEN")]),t._v(" cases and result as "),a("code",[t._v("NULL")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"using-case-in-update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-case-in-update"}},[t._v("#")]),t._v(" Using CASE in UPDATE")]),t._v(" "),a("p",[t._v("sample on price increases:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),t._v(" ItemPrice\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" Price "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Price "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CASE")]),t._v(" ItemId\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("THEN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.05")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("THEN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.10")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("THEN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.15")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ELSE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.00")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"case-use-for-null-values-​​ordered-last"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#case-use-for-null-values-​​ordered-last"}},[t._v("#")]),t._v(" CASE use for NULL values ​​ordered last")]),t._v(" "),a("p",[t._v("in this way '0' representing the known values ​​are ranked first, '1' representing the NULL values ​​are sorted by the last:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" ID\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("REGION\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("CITY\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("DEPARTMENT\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("EMPLOYEES_NUMBER\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" DEPT\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CASE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" REGION "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("THEN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ELSE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  REGION\n\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("ID")]),t._v(" "),a("th",[t._v("REGION")]),t._v(" "),a("th",[t._v("CITY")]),t._v(" "),a("th",[t._v("DEPARTMENT")]),t._v(" "),a("th",[t._v("EMPLOYEES_NUMBER")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("10")]),t._v(" "),a("td",[t._v("Mid-Atlantic")]),t._v(" "),a("td",[t._v("Philadelphia")]),t._v(" "),a("td",[t._v("RESEARCH")]),t._v(" "),a("td",[t._v("13")])]),t._v(" "),a("tr",[a("td",[t._v("14")]),t._v(" "),a("td",[t._v("Mid-Atlantic")]),t._v(" "),a("td",[t._v("New York")]),t._v(" "),a("td",[t._v("SALES")]),t._v(" "),a("td",[t._v("12")])]),t._v(" "),a("tr",[a("td",[t._v("9")]),t._v(" "),a("td",[t._v("Midwest")]),t._v(" "),a("td",[t._v("Chicago")]),t._v(" "),a("td",[t._v("SALES")]),t._v(" "),a("td",[t._v("8")])]),t._v(" "),a("tr",[a("td",[t._v("12")]),t._v(" "),a("td",[t._v("New England")]),t._v(" "),a("td",[t._v("Boston")]),t._v(" "),a("td",[t._v("MARKETING")]),t._v(" "),a("td",[t._v("9")])]),t._v(" "),a("tr",[a("td",[t._v("5")]),t._v(" "),a("td",[t._v("West")]),t._v(" "),a("td",[t._v("Los Angeles")]),t._v(" "),a("td",[t._v("RESEARCH")]),t._v(" "),a("td",[t._v("11")])]),t._v(" "),a("tr",[a("td",[t._v("15")]),t._v(" "),a("td",[t._v("NULL")]),t._v(" "),a("td",[t._v("San Francisco")]),t._v(" "),a("td",[t._v("MARKETING")]),t._v(" "),a("td",[t._v("12")])]),t._v(" "),a("tr",[a("td",[t._v("4")]),t._v(" "),a("td",[t._v("NULL")]),t._v(" "),a("td",[t._v("Chicago")]),t._v(" "),a("td",[t._v("INNOVATION")]),t._v(" "),a("td",[t._v("11")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("NULL")]),t._v(" "),a("td",[t._v("Detroit")]),t._v(" "),a("td",[t._v("HUMAN RESOURCES")]),t._v(" "),a("td",[t._v("9")])])])]),t._v(" "),a("h2",{attrs:{id:"case-in-order-by-clause-to-sort-records-by-lowest-value-of-2-columns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#case-in-order-by-clause-to-sort-records-by-lowest-value-of-2-columns"}},[t._v("#")]),t._v(" CASE in ORDER BY clause to sort records by lowest value of 2 columns")]),t._v(" "),a("p",[t._v("Imagine that you need sort records by lowest value of either one of two columns.\nSome databases could use a non-aggregated "),a("code",[t._v("MIN()")]),t._v(" or "),a("code",[t._v("LEAST()")]),t._v(" function for this ("),a("code",[t._v("... ORDER BY MIN(Date1, Date2)")]),t._v("), but in standard SQL, you have to use a "),a("code",[t._v("CASE")]),t._v(" expression.")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("CASE")]),t._v(" expression in the query below looks at the "),a("code",[t._v("Date1")]),t._v(" and "),a("code",[t._v("Date2")]),t._v(" columns, checks which column has the lower value, and sorts the records depending on this value.")]),t._v(" "),a("h3",{attrs:{id:"sample-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sample-data"}},[t._v("#")]),t._v(" Sample data")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Id")]),t._v(" "),a("th",[t._v("Date1")]),t._v(" "),a("th",[t._v("Date2")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("2017-01-01")]),t._v(" "),a("td",[t._v("2017-01-31")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("2017-01-31")]),t._v(" "),a("td",[t._v("2017-01-03")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("2017-01-31")]),t._v(" "),a("td",[t._v("2017-01-02")])]),t._v(" "),a("tr",[a("td",[t._v("4")]),t._v(" "),a("td",[t._v("2017-01-06")]),t._v(" "),a("td",[t._v("2017-01-31")])]),t._v(" "),a("tr",[a("td",[t._v("5")]),t._v(" "),a("td",[t._v("2017-01-31")]),t._v(" "),a("td",[t._v("2017-01-05")])]),t._v(" "),a("tr",[a("td",[t._v("6")]),t._v(" "),a("td",[t._v("2017-01-04")]),t._v(" "),a("td",[t._v("2017-01-31")])])])]),t._v(" "),a("h3",{attrs:{id:"query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query"}},[t._v("#")]),t._v(" Query")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" Id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Date1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Date2\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" YourTable\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CASE")]),t._v(" \n           "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COALESCE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Date1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1753-01-01'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COALESCE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Date2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1753-01-01'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("THEN")]),t._v(" Date1 \n           "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ELSE")]),t._v(" Date2 \n         "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"results"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#results"}},[t._v("#")]),t._v(" Results")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Id")]),t._v(" "),a("th",[t._v("Date1")]),t._v(" "),a("th",[t._v("Date2")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[a("strong",[t._v("2017-01-01")])]),t._v(" "),a("td",[t._v("2017-01-31")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("2017-01-31")]),t._v(" "),a("td",[a("strong",[t._v("2017-01-02")])])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("2017-01-31")]),t._v(" "),a("td",[a("strong",[t._v("2017-01-03")])])]),t._v(" "),a("tr",[a("td",[t._v("6")]),t._v(" "),a("td",[a("strong",[t._v("2017-01-04")])]),t._v(" "),a("td",[t._v("2017-01-31")])]),t._v(" "),a("tr",[a("td",[t._v("5")]),t._v(" "),a("td",[t._v("2017-01-31")]),t._v(" "),a("td",[a("strong",[t._v("2017-01-05")])])]),t._v(" "),a("tr",[a("td",[t._v("4")]),t._v(" "),a("td",[a("strong",[t._v("2017-01-06")])]),t._v(" "),a("td",[t._v("2017-01-31")])])])]),t._v(" "),a("h3",{attrs:{id:"explanation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#explanation"}},[t._v("#")]),t._v(" Explanation")]),t._v(" "),a("p",[t._v("As you see row with "),a("code",[t._v("Id = 1")]),t._v(" is first, that because "),a("code",[t._v("Date1")]),t._v(" have lowest record from entire table "),a("code",[t._v("2017-01-01")]),t._v(", row where "),a("code",[t._v("Id = 3")]),t._v(" is second that because "),a("code",[t._v("Date2")]),t._v(" equals to "),a("code",[t._v("2017-01-02")]),t._v(" that is second lowest value from table and so on.")]),t._v(" "),a("p",[t._v("So we have sorted records from "),a("code",[t._v("2017-01-01")]),t._v(" to "),a("code",[t._v("2017-01-06")]),t._v(" ascending and no care on which one column "),a("code",[t._v("Date1")]),t._v(" or "),a("code",[t._v("Date2")]),t._v(" are those values.")]),t._v(" "),a("h4",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("li",[t._v("CASE input_expression"),a("br"),t._v("\n WHEN compare1 THEN result1"),a("br"),t._v("\n[WHEN compare2 THEN result2]..."),a("br"),t._v("\n[ELSE resultX]"),a("br"),t._v("\nEND")]),t._v(" "),a("li",[t._v("CASE"),a("br"),t._v("\n WHEN condition1 THEN result1"),a("br"),t._v("\n[WHEN condition2 THEN result2]..."),a("br"),t._v("\n[ELSE resultX]"),a("br"),t._v("\nEND")]),t._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),a("p",[t._v("The "),a("strong",[t._v("simple CASE expression")]),t._v(" returns the first result whose "),a("code",[t._v("compareX")]),t._v(" value is equal to the "),a("code",[t._v("input_expression")]),t._v(".")]),t._v(" "),a("p",[t._v("The "),a("strong",[t._v("searched CASE expression")]),t._v(" returns the first result whose "),a("code",[t._v("conditionX")]),t._v(" is true.")])])}),[],!1,null,null,null);s.default=r.exports}}]);