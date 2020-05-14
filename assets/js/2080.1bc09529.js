(window.webpackJsonp=window.webpackJsonp||[]).push([[2080],{2426:function(e,s,a){"use strict";a.r(s);var t=a(19),r=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"views"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#views"}},[e._v("#")]),e._v(" Views")]),e._v(" "),a("h2",{attrs:{id:"create-a-view-with-schema-binding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-view-with-schema-binding"}},[e._v("#")]),e._v(" Create a view with schema binding")]),e._v(" "),a("p",[e._v("If a view is created WITH SCHEMABINDING, the underlying table(s) can't be dropped or modified in such a way that they would break the view. For example, a table column referenced in a view can't be removed.")]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CREATE")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("VIEW")]),e._v(" dbo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("PersonsView\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WITH")]),e._v(" SCHEMABINDING\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("AS")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" \n    name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    address\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" dbo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("PERSONS  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("-- database schema must be specified when WITH SCHEMABINDING is present")]),e._v("\n\n")])])]),a("p",[e._v("Views "),a("strong",[e._v("without")]),e._v(" schema binding can break if their underlying table(s) change or get dropped. Querying a broken view results in an error message. sp_refreshview can be used to ensure existing views without schema binding aren't broken.")]),e._v(" "),a("h2",{attrs:{id:"create-a-view"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-view"}},[e._v("#")]),e._v(" Create a view")]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CREATE")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("VIEW")]),e._v(" dbo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("PersonsView\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("AS")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v("\n    name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" \n    address \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" persons"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n")])])]),a("h2",{attrs:{id:"create-or-replace-view"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-or-replace-view"}},[e._v("#")]),e._v(" Create or replace view")]),e._v(" "),a("p",[e._v("This query will drop the view - if it already exists - and create a new one.")]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("IF")]),e._v(" OBJECT_ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'dbo.PersonsView'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'V'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("IS")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("NOT")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("NULL")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("DROP")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("VIEW")]),e._v(" dbo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("PersonsView\nGO\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CREATE")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("VIEW")]),e._v(" dbo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("PersonsView\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("AS")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v("\n    name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" \n    address \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" persons"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n")])])]),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[e._v("#")]),e._v(" Remarks")]),e._v(" "),a("p",[e._v("Views are stored queries that can be queried like regular tables. Views are not part of the physical model of the database. Any changes that are applied to the data source of a view, such as a table, will be reflected in the view as well.")])])}),[],!1,null,null,null);s.default=r.exports}}]);