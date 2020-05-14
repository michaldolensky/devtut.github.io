(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{574:function(a,e,t){"use strict";t.r(e);var n=t(19),s=Object(n.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"leakcanary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#leakcanary"}},[a._v("#")]),a._v(" Leakcanary")]),a._v(" "),t("p",[a._v("Leak Canary is an Android and Java library used to detect leak in the application")]),a._v(" "),t("h2",{attrs:{id:"implementing-a-leak-canary-in-android-application"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implementing-a-leak-canary-in-android-application"}},[a._v("#")]),a._v(" Implementing a Leak Canary in  Android Application")]),a._v(" "),t("p",[a._v("In your "),t("strong",[a._v("build.gradle")]),a._v(" you need to add the below dependencies:")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("debugCompile "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'com.squareup.leakcanary:leakcanary-android:1.5.1'")]),a._v("\nreleaseCompile "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'com.squareup.leakcanary:leakcanary-android-no-op:1.5.1'")]),a._v("\ntestCompile "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'com.squareup.leakcanary:leakcanary-android-no-op:1.5.1'")]),a._v("\n\n")])])]),t("p",[a._v("In your "),t("code",[a._v("Application")]),a._v(" class you need to add the below code inside your "),t("code",[a._v("onCreate()")]),a._v(":")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("LeakCanary")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n")])])]),t("p",[a._v("That's all you need to do for "),t("strong",[a._v("LeakCanary")]),a._v(", it will automatically show notifications when there is a leak in your build.")]),a._v(" "),t("h4",{attrs:{id:"remarks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[a._v("#")]),a._v(" Remarks")]),a._v(" "),t("p",[a._v("You can see the example in link below")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/square/leakcanary",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/square/leakcanary"),t("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);