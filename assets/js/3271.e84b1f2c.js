(window.webpackJsonp=window.webpackJsonp||[]).push([[3271],{3616:function(s,a,t){"use strict";t.r(a);var e=t(19),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"in-clause"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#in-clause"}},[s._v("#")]),s._v(" IN clause")]),s._v(" "),t("h2",{attrs:{id:"simple-in-clause"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#simple-in-clause"}},[s._v("#")]),s._v(" Simple IN clause")]),s._v(" "),t("p",[s._v("To get records having "),t("strong",[s._v("any")]),s._v(" of the given "),t("code",[s._v("id")]),s._v("s")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" products\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])])]),t("p",[s._v("The query above is equal to")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" products\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("or")]),s._v(" id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("or")]),s._v(" id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n\n")])])]),t("h2",{attrs:{id:"using-in-clause-with-a-subquery"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-in-clause-with-a-subquery"}},[s._v("#")]),s._v(" Using IN clause with a subquery")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" customers \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IN")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DISTINCT")]),s._v(" customer_id \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" orders\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),t("p",[s._v("The above will give you all the customers that have orders in the system.")])])}),[],!1,null,null,null);a.default=r.exports}}]);