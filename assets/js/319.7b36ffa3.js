(window.webpackJsonp=window.webpackJsonp||[]).push([[319],{666:function(t,a,s){"use strict";s.r(a);var e=s(19),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"tools-attributes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tools-attributes"}},[t._v("#")]),t._v(" Tools Attributes")]),t._v(" "),s("h2",{attrs:{id:"designtime-layout-attributes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#designtime-layout-attributes"}},[t._v("#")]),t._v(" Designtime Layout Attributes")]),t._v(" "),s("p",[t._v("These attributes are used when the layout is rendered in Android Studio, but have no impact on the runtime.")]),t._v(" "),s("p",[t._v("In general you can use any Android framework attribute, just using the "),s("code",[t._v("tools:")]),t._v(" namespace rather than the "),s("code",[t._v("android:")]),t._v(" namespace for layout preview.\nYou can add both the "),s("code",[t._v("android:")]),t._v(" namespace attribute (which is used at runtime) and the matching "),s("code",[t._v("tools:")]),t._v(" attribute (which overrides the runtime attribute in the layout preview only).")]),t._v(" "),s("p",[t._v("Just define the tools namespace as described in the remarks section.")]),t._v(" "),s("p",[t._v("For example the "),s("code",[t._v("text")]),t._v(" attribute:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EditText")]),t._v(" \n      tools"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My Text"')]),t._v("\n      android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_width"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wrap_content"')]),t._v("\n      android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wrap_content"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),s("p",[t._v("Or the "),s("code",[t._v("visibility")]),t._v(" attribute to unset a view for preview:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LinearLayout")]),t._v("\n        android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@+id/ll1"')]),t._v("\n        android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_width"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wrap_content"')]),t._v("\n        android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wrap_content"')]),t._v("\n        tools"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("visibility"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gone"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),s("p",[t._v("Or the "),s("code",[t._v("context")]),t._v(" attribute to associate the layout with activity or fragment")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LinearLayout")]),t._v("\n    xmlns"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://schemas.android.com/apk/res/android"')]),t._v("\n    xmlns"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("tools"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://schemas.android.com/tools"')]),t._v("\n    tools"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('".MainActivity"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),s("p",[t._v("Or the "),s("code",[t._v("showIn")]),t._v(" attribute to see and included layout preview in another layout")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EditText")]),t._v(" xmlns"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://schemas.android.com/apk/res/android"')]),t._v("\n    xmlns"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("tools"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://schemas.android.com/tools"')]),t._v("\n    android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_width"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wrap_content"')]),t._v("\n    android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wrap_content"')]),t._v("\n    android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@string/text"')]),t._v("\n    tools"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("showIn"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@layout/activity_main"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),s("h4",{attrs:{id:"remarks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),s("p",[t._v("Android has a dedicated XML namespace intended for tools to be able to record information in XML file.")]),t._v(" "),s("p",[t._v("The namespace URI is :")]),t._v(" "),s("p",[s("code",[t._v("http://schemas.android.com/tools")]),t._v(" and is usually bound to the "),s("code",[t._v("tools:")]),t._v(" prefix.")])])}),[],!1,null,null,null);a.default=r.exports}}]);