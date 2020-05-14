(window.webpackJsonp=window.webpackJsonp||[]).push([[1179],{1524:function(s,t,a){"use strict";a.r(t);var e=a(19),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"databases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#databases"}},[s._v("#")]),s._v(" Databases")]),s._v(" "),a("h2",{attrs:{id:"postgres"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#postgres"}},[s._v("#")]),s._v(" Postgres")]),s._v(" "),a("p",[s._v("Postgresql-simple is a mid-level Haskell library for communicating with a PostgreSQL backend database. It is very simple to use and provides a type-safe API for reading/writing to a DB.")]),s._v(" "),a("p",[s._v("Running a simple query is as easy as:")]),s._v(" "),a("div",{staticClass:"language-hs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-hs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("{-# LANGUAGE OverloadedStrings #-}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token import_statement"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Database.PostgreSQL.Simple")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token hvariable"}},[s._v("main")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("IO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token hvariable"}},[s._v("main")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- Connect using libpq strings")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token hvariable"}},[s._v("conn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token hvariable"}},[s._v("connectPostgreSQL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"host='my.dbhost' port=5432 user=bob pass=bob\"")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Only")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token hvariable"}},[s._v("i")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token hvariable"}},[s._v("query_")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token hvariable"}},[s._v("conn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"select 2 + 2"')]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- execute with no parameter substitution")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("print")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token hvariable"}},[s._v("i")]),s._v("\n\n")])])]),a("h3",{attrs:{id:"parameter-substitution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameter-substitution"}},[s._v("#")]),s._v(" Parameter substitution")]),s._v(" "),a("p",[s._v("PostreSQL-Simple supports parameter substitution for safe parameterised queries using "),a("code",[s._v("query")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-hs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-hs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token hvariable"}},[s._v("main")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("IO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token hvariable"}},[s._v("main")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- Connect using libpq strings")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token hvariable"}},[s._v("conn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token hvariable"}},[s._v("connectPostgreSQL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"host='my.dbhost' port=5432 user=bob pass=bob\"")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Only")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token hvariable"}},[s._v("i")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token hvariable"}},[s._v("query")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token hvariable"}},[s._v("conn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"select ? + ?"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("print")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token hvariable"}},[s._v("i")]),s._v("\n\n")])])]),a("h3",{attrs:{id:"executing-inserts-or-updates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#executing-inserts-or-updates"}},[s._v("#")]),s._v(" Executing inserts or updates")]),s._v(" "),a("p",[s._v("You can run inserts/update SQL queries using "),a("code",[s._v("execute")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-hs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-hs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token hvariable"}},[s._v("main")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("IO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token hvariable"}},[s._v("main")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- Connect using libpq strings")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token hvariable"}},[s._v("conn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token hvariable"}},[s._v("connectPostgreSQL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"host='my.dbhost' port=5432 user=bob pass=bob\"")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token hvariable"}},[s._v("execute")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token hvariable"}},[s._v("conn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"insert into people (name, age) values (?, ?)"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Alex"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);