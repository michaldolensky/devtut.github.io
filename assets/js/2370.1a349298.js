(window.webpackJsonp=window.webpackJsonp||[]).push([[2370],{2716:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"update-with-joins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-with-joins"}},[t._v("#")]),t._v(" Update with Joins")]),t._v(" "),a("h2",{attrs:{id:"examples-what-works-and-what-doesn-t"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-what-works-and-what-doesn-t"}},[t._v("#")]),t._v(" Examples: what works and what doesn't")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" tgt "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" val "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" dual "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("union")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("all")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" dual\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Table")]),t._v(" TGT created"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" src "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" val "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" dual "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("union")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("all")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'y'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" dual\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Table")]),t._v(" SRC created"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" t_val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" s_val\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v("   tgt t "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("inner")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("join")]),t._v(" src s "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" t_val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s_val\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SQL")]),t._v(" Error: ORA"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("01779")]),t._v(": cannot "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("modify")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("column")]),t._v(" which maps "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" a non "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("preserved "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("01779.")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("00000")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cannot modify a column which maps to a non key-preserved table"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("Cause:    An attempt was made "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("or")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("columns")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("join")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("view")]),t._v(" which\n           map "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" a non"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("preserved "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Action")]),t._v(":   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Modify")]),t._v(" the underlying base "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("tables")]),t._v(" directly"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n")])])]),a("p",[t._v("Imagine what would happen if we had the value "),a("code",[t._v("1")]),t._v(" in the column "),a("code",[t._v("src.id")]),t._v(" more than once, with different values for "),a("code",[t._v("src.val")]),t._v(". Obviously, the update would make no sense (in ANY database - that's a logical issue). Now, "),a("strong",[t._v("we")]),t._v(" know that there are no duplicates in "),a("code",[t._v("src.id")]),t._v(", but the Oracle engine doesn't know that - so it's complaining. Perhaps this is why so many practitioners believe Oracle \"doesn't have UPDATE with joins\"?")]),t._v(" "),a("p",[t._v("What Oracle expects is that "),a("code",[t._v("src.id")]),t._v(" should be unique, and that it, Oracle, would know that beforehand. Easily fixed! Note that the same works with composite keys (on more than one column), if the matching for the update needs to use more than one column. In practice, "),a("code",[t._v("src.id")]),t._v(" may be PK and "),a("code",[t._v("tgt.id")]),t._v(" may be FK pointing to this PK, but that is not relevant for updates with join; what "),a("strong",[t._v("is")]),t._v(" relevant is the unique constraint.")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alter")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" src "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constraint")]),t._v(" src_uc "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unique")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Table")]),t._v(" SRC altered"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" t_val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" s_val\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v("   tgt t "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("inner")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("join")]),t._v(" src s "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" t_val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s_val\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rows")]),t._v(" updated"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" tgt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nID  VAL\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--  ---")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("  x\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("  y\n\n")])])]),a("p",[t._v('The same result could be achieved with a MERGE statement (which deserves its own Documentation article), and I personally prefer MERGE in these cases, but the reason is not that "Oracle doesn\'t do updates with joins." As this example shows, Oracle '),a("strong",[t._v("does")]),t._v(" do updates with joins.")])])}),[],!1,null,null,null);s.default=n.exports}}]);