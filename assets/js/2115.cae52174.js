(window.webpackJsonp=window.webpackJsonp||[]).push([[2115],{2460:function(e,t,a){"use strict";a.r(t);var s=a(19),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"indexes-and-keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#indexes-and-keys"}},[e._v("#")]),e._v(" Indexes and Keys")]),e._v(" "),a("h2",{attrs:{id:"create-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-index"}},[e._v("#")]),e._v(" Create index")]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("-- Create an index for column 'name' in table 'my_table'")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CREATE")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("INDEX")]),e._v(" idx_name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ON")]),e._v(" my_table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n")])])]),a("h2",{attrs:{id:"create-unique-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-unique-index"}},[e._v("#")]),e._v(" Create unique index")]),e._v(" "),a("p",[e._v("A unique index prevents the insertion of duplicated data in a table. "),a("code",[e._v("NULL")]),e._v(" values can be inserted in the columns that form part of the unique index (since, by definition, a "),a("code",[e._v("NULL")]),e._v(" value is different from any other value, including another "),a("code",[e._v("NULL")]),e._v(" value)")]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("-- Creates a unique index for column 'name' in table 'my_table'")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CREATE")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("UNIQUE")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("INDEX")]),e._v(" idx_name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ON")]),e._v(" my_table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n")])])]),a("h2",{attrs:{id:"drop-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#drop-index"}},[e._v("#")]),e._v(" Drop index")]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("-- Drop an index for column 'name' in table 'my_table'")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("DROP")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("INDEX")]),e._v(" idx_name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ON")]),e._v(" my_table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n")])])]),a("h2",{attrs:{id:"create-composite-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-composite-index"}},[e._v("#")]),e._v(" Create composite index")]),e._v(" "),a("p",[e._v("This will create a composite index of both keys, "),a("code",[e._v("mystring")]),e._v(" and "),a("code",[e._v("mydatetime")]),e._v(" and speed up queries with both columns in the "),a("code",[e._v("WHERE")]),e._v(" clause.")]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CREATE")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("INDEX")]),e._v(" idx_mycol_myothercol "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ON")]),e._v(" my_table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("mycol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" myothercol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n")])])]),a("p",[a("strong",[e._v("Note:")]),e._v(" The order is important! If the search query does not include both columns in the "),a("code",[e._v("WHERE")]),e._v(" clause, it can only use the leftmost index. In this case, a query with "),a("code",[e._v("mycol")]),e._v(" in the "),a("code",[e._v("WHERE")]),e._v(" will use the index, a query searching for "),a("code",[e._v("myothercol")]),e._v(" "),a("strong",[e._v("without")]),e._v(" also searching for "),a("code",[e._v("mycol")]),e._v(" will "),a("strong",[e._v("not")]),e._v(". For more information "),a("a",{attrs:{href:"https://www.percona.com/blog/2009/06/05/a-rule-of-thumb-for-choosing-column-order-in-indexes/",target:"_blank",rel:"noopener noreferrer"}},[e._v("check out this blog post"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" Due to the way BTREE's work, columns that are usually queried in ranges should go in the rightmost value. For example, "),a("code",[e._v("DATETIME")]),e._v(" columns are usualy queried like "),a("code",[e._v("WHERE datecol > '2016-01-01 00:00:00'")]),e._v(". BTREE indexes handle ranges very efficiently but only if the column being queried as a range is the last one in the composite index.")]),e._v(" "),a("h2",{attrs:{id:"auto-increment-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auto-increment-key"}},[e._v("#")]),e._v(" AUTO_INCREMENT key")]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CREATE")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("TABLE")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n    id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("INT")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("UNSIGNED")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("NOT")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("NULL")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("AUTO_INCREMENT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("PRIMARY")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("KEY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n")])])]),a("p",[e._v("Main notes:")]),e._v(" "),a("ul",[a("li",[e._v("Starts with 1 and increments by 1 automatically when you fail to specify it on "),a("code",[e._v("INSERT")]),e._v(", or specify it as "),a("code",[e._v("NULL")]),e._v(".")]),e._v(" "),a("li",[e._v("The ids are always distinct from each other, but...")]),e._v(" "),a("li",[e._v("Do not make any assumptions (no gaps, consecutively generated, not reused, etc) about the values of the id other than being unique at any given instant.")])]),e._v(" "),a("p",[e._v("Subtle notes:")]),e._v(" "),a("ul",[a("li",[e._v("On restart of server, the 'next' value is 'computed' as "),a("code",[e._v("MAX(id)+1")]),e._v(".")]),e._v(" "),a("li",[e._v("If the last operation before shutdown or crash was to delete the highest id, that id "),a("strong",[e._v("may")]),e._v(" be reused (this is engine-dependent).  So, "),a("strong",[e._v("do not trust auto_increments to be permanently unique")]),e._v("; they are only unique at any moment.")]),e._v(" "),a("li",[e._v("For multi-master or clustered solutions, see "),a("code",[e._v("auto_increment_offset")]),e._v(" and "),a("code",[e._v("auto_increment_increment")]),e._v(".")]),e._v(" "),a("li",[e._v("It is OK to have something else as the "),a("code",[e._v("PRIMARY KEY")]),e._v(" and simply do "),a("code",[e._v("INDEX(id)")]),e._v(".  (This is an optimization in some situations.)")]),e._v(" "),a("li",[e._v("Using the "),a("code",[e._v("AUTO_INCREMENT")]),e._v(' as the "'),a("code",[e._v("PARTITION")]),e._v(' key" is rarely beneficial; do something different.')]),e._v(" "),a("li",[e._v("Various operations "),a("strong",[e._v("may")]),e._v(' "burn" values.  This happens when they pre-allocate value(s), then don\'t use them: '),a("code",[e._v("INSERT IGNORE")]),e._v(" (with dup key), "),a("code",[e._v("REPLACE")]),e._v(" (which is "),a("code",[e._v("DELETE")]),e._v(" plus "),a("code",[e._v("INSERT")]),e._v(") and others.  "),a("code",[e._v("ROLLBACK")]),e._v(" is another cause for gaps in ids.")]),e._v(" "),a("li",[e._v("In Replication, you cannot trust ids to arrive at the slave(s) in ascending order.  Although ids are assigned in consecutive order, InnoDB statements are sent to slaves in "),a("code",[e._v("COMMIT")]),e._v(" order.")])]),e._v(" "),a("h4",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),a("li",[e._v("\n-- Create simple index\nCREATE INDEX **index_name** ON **table_name**(**column_name1** [, **column_name2**, ...])\n")]),e._v(" "),a("li",[e._v("\n-- Create unique index\nCREATE UNIQUE INDEX **index_name** ON **table_name**(**column_name1** [, **column_name2**, ...]\n")]),e._v(" "),a("li",[e._v("\n-- Drop index\n"),a("p",[e._v("DROP INDEX **index_name** ON **tbl_name**\n[**algorithm_option** | **lock_option**] ...")]),e._v(" "),a("p",[e._v("**algorithm_option:**\nALGORITHM [=] {DEFAULT|INPLACE|COPY}")]),e._v(" "),a("p",[e._v("**lock_option:**\nLOCK [=] {DEFAULT|NONE|SHARED|EXCLUSIVE}")])]),e._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[e._v("#")]),e._v(" Remarks")]),e._v(" "),a("h3",{attrs:{id:"concepts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#concepts"}},[e._v("#")]),e._v(" Concepts")]),e._v(" "),a("p",[e._v("An index in a MySQL table works like an index in a book.")]),e._v(" "),a("p",[e._v("Let's say you have a book about databases and you want to find some information about, say, storage. Without an index (assuming no other aid, such as a table of contents) you'd have to go through the pages one by one, until you found the topic (that's a \"full table scan\"). On the other hand, an index has a list of keywords, so you'd consult the index and see that storage is mentioned on pages 113-120, 231, and 354. Then you could flip to those pages directly, without searching (that's a search with an index, somewhat faster).")]),e._v(" "),a("p",[e._v("Of course, the usefulness of the index depends on many things - a few examples, using the simile above:")]),e._v(" "),a("ul",[a("li",[e._v('If you had a book on databases and indexed the word "database", you might see that it\'s mentioned on pages 1-59, 61-290, and 292-400. That\'s a lot of pages, and in such a case, the index is not much help and it might be faster to go through the pages one by one. (In a database, this is "poor selectivity".)')]),e._v(" "),a("li",[e._v("For a 10-page book, it makes no sense to make an index, as you may end up with a 10-page book prefixed by a 5-page index, which is just silly - just scan the 10 pages and be done with it.")]),e._v(" "),a("li",[e._v('The index also needs to be useful - there\'s generally no point to indexing, for example, the frequency of the letter "L" per page.')])])])}),[],!1,null,null,null);t.default=n.exports}}]);