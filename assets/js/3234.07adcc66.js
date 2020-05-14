(window.webpackJsonp=window.webpackJsonp||[]).push([[3234],{3585:function(a,s,t){"use strict";t.r(s);var n=t(19),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"spring-profile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-profile"}},[a._v("#")]),a._v(" Spring profile")]),a._v(" "),t("h2",{attrs:{id:"spring-profiles-allows-to-configure-parts-available-for-certain-environment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-profiles-allows-to-configure-parts-available-for-certain-environment"}},[a._v("#")]),a._v(" Spring Profiles allows to configure parts available for certain environment")]),a._v(" "),t("p",[a._v("Any "),t("code",[a._v("@Component")]),a._v(" or "),t("code",[a._v("@Configuration")]),a._v(" could be marked with "),t("code",[a._v("@Profile")]),a._v(" annotation")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Configuration")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Profile")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"production"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ProductionConfiguration")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// ...")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n")])])]),t("p",[a._v("The same in XML config")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("beans profile"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"dev"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("bean id"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"dataSource"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"<some data source class>"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("beans"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n")])])]),t("p",[a._v("Active profiles could be configured in the "),t("code",[a._v("application.properties")]),a._v(" file")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("spring"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("profiles"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("active"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("dev"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("production\n\n")])])]),t("p",[a._v("or specified from command line")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("spring"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("profiles"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("active"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("dev"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("hsqldb\n\n")])])]),t("p",[a._v("or in SpringBoot")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("SpringApplication")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("setAdditionalProfiles")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"dev"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n")])])]),t("p",[a._v("It is possible to enable profiles in Tests using the annotation "),t("code",[a._v('@ActiveProfiles("dev")')])])])}),[],!1,null,null,null);s.default=e.exports}}]);