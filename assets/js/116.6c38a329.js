(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{460:function(t,a,s){"use strict";s.r(a);var n=s(19),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"bottomnavigationview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bottomnavigationview"}},[t._v("#")]),t._v(" BottomNavigationView")]),t._v(" "),s("p",[t._v("The Bottom Navigation View has been in the material design "),s("a",{attrs:{href:"https://material.io/guidelines/components/bottom-navigation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("guidelines"),s("OutboundLink")],1),t._v(" for some time, but it hasn’t been easy for us to implement it into our apps.")]),t._v(" "),s("p",[t._v("Some applications have built their own solutions, whilst others have relied on third-party open-source libraries to get the job done.")]),t._v(" "),s("p",[t._v("Now the design support library is seeing the addition of this bottom navigation bar, let’s take a dive into how we can use it!")]),t._v(" "),s("h2",{attrs:{id:"basic-implemetation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-implemetation"}},[t._v("#")]),t._v(" Basic implemetation")]),t._v(" "),s("p",[t._v("To add the "),s("code",[t._v("BottomNavigationView")]),t._v(" follow these steps:")]),t._v(" "),s("ol",[s("li",[t._v("Add in your "),s("code",[t._v("build.gradle")]),t._v(" the "),s("strong",[t._v("dependency")]),t._v(":")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("compile "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'com.android.support:design:25.1.0'")]),t._v("\n\n")])])]),s("ol",[s("li",[t._v("Add the "),s("code",[t._v("BottomNavigationView")]),t._v(" in "),s("strong",[t._v("your layout")]),t._v(":")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("android"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("support"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("design"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("widget"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BottomNavigationView")]),t._v("\n        xmlns"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://schemas.android.com/apk/res/android"')]),t._v("\n        xmlns"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://schemas.android.com/apk/res-auto"')]),t._v("\n        android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@+id/bottom_navigation"')]),t._v("\n        android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_width"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"match_parent"')]),t._v("\n        android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wrap_content"')]),t._v("\n        app"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("menu"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@menu/bottom_navigation_menu"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),s("ol",[s("li",[t._v("Create the "),s("strong",[t._v("menu")]),t._v(" to populate the view:")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" res"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("menu"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("bottom_navigation_menu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xml "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("xml version"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0"')]),t._v(" encoding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"utf-8"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("menu xmlns"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://schemas.android.com/apk/res/android"')]),t._v("\n    xmlns"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://schemas.android.com/apk/res-auto"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("item\n        android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@+id/my_action1"')]),t._v("\n        android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("enabled"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),t._v("\n        android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("icon"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@drawable/my_drawable"')]),t._v("\n        android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@string/text"')]),t._v("\n        app"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("showAsAction"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ifRoom"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("menu"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),s("ol",[s("li",[t._v("Attach "),s("strong",[t._v("a listener")]),t._v(" for the click events:")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Get the view")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BottomNavigationView")]),t._v(" bottomNavigationView "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BottomNavigationView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findViewById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("R")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bottom_navigation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Attach the listener")]),t._v("\nbottomNavigationView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setOnNavigationItemSelectedListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BottomNavigationView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OnNavigationItemSelectedListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onNavigationItemSelected")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@NonNull")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MenuItem")]),t._v(" item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItemId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("R")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("my_action1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Do something...")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//returning false disables the Navigation bar animations")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("Checkout demo code at "),s("a",{attrs:{href:"https://github.com/1priyank1/BottomNavigation-Demo",target:"_blank",rel:"noopener noreferrer"}},[t._v("BottomNavigation-Demo"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"customization-of-bottomnavigationview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#customization-of-bottomnavigationview"}},[t._v("#")]),t._v(" Customization of BottomNavigationView")]),t._v(" "),s("p",[s("strong",[t._v("Note : I am assuming that you know about how to use "),s("strong",[s("code",[t._v("BottomNavigationView")])]),t._v(".")])]),t._v(" "),s("p",[t._v("This example I will explain how to add selector for "),s("strong",[s("code",[t._v("BottomNavigationView")])]),t._v(". So you can state on UI for icons and texts.")]),t._v(" "),s("p",[t._v("Create drawable "),s("code",[t._v("bottom_navigation_view_selector.xml")]),t._v(" as")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("xml version"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0"')]),t._v(" encoding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"utf-8"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("selector xmlns"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://schemas.android.com/apk/res/android"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("item  android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("color"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@color/bottom_nv_menu_selected"')]),t._v(" android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("state_checked"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("item android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("color"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@color/bottom_nv_menu_default"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("selector"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),s("p",[t._v("And use below attributes into "),s("strong",[s("code",[t._v("BottomNavigationView")])]),t._v(" in layout file")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("app"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("itemIconTint"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@drawable/bottom_navigation_view_selector"')]),t._v(" \napp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("itemTextColor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@drawable/bottom_navigation_view_selector"')]),t._v("\n\n")])])]),s("blockquote"),t._v(" "),s("p",[t._v("In above example, I have used same selector\n`bottom_navigation_view_selector` for `app:itemIconTint` and\n`app:itemTextColor` both to keep text and icon colors same. But if\nyour design has different color for text and icon, you can define 2\ndifferent selectors and use them.")]),t._v(" "),s("p",[t._v("Output will be similar to below")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://i.stack.imgur.com/HT7wB.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://i.stack.imgur.com/HT7wB.png",alt:"Option 1"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://i.stack.imgur.com/pScpu.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://i.stack.imgur.com/pScpu.png",alt:"Option 2"}}),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"handling-enabled-disabled-states"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#handling-enabled-disabled-states"}},[t._v("#")]),t._v(" Handling Enabled / Disabled states")]),t._v(" "),s("p",[t._v("Create Selector for Enable/Disable Menu Item.")]),t._v(" "),s("p",[s("strong",[t._v("selector.xml")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("xml version"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0"')]),t._v(" encoding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"utf-8"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("selector xmlns"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://schemas.android.com/apk/res/android"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("item android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("color"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@color/white"')]),t._v(" android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("state_enabled"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("item android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("color"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@color/colorPrimaryDark"')]),t._v(" android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("state_enabled"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"false"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("selector"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),s("p",[s("strong",[t._v("design.xml")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("android"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("support"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("design"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("widget"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BottomNavigationView")]),t._v("\n    android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@+id/bottom_navigation"')]),t._v("\n    android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_width"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"match_parent"')]),t._v("\n    android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wrap_content"')]),t._v("\n    android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_alignParentBottom"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),t._v("\n    app"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("itemBackground"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@color/colorPrimary"')]),t._v("\n    app"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("itemIconTint"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@drawable/nav_item_color_state"')]),t._v("\n    app"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("itemTextColor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@drawable/nav_item_color_state"')]),t._v("\n    app"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("menu"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@menu/bottom_navigation_main"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"allowing-more-than-3-menus"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#allowing-more-than-3-menus"}},[t._v("#")]),t._v(" Allowing more than 3 menus")]),t._v(" "),s("p",[t._v("This example is strictly a workaround since, currently there is no way to disable a behaviour known as ShiftMode.")]),t._v(" "),s("p",[t._v("Create a function as such.")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("disableMenuShiftMode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BottomNavigationView")]),t._v(" view"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BottomNavigationMenuView")]),t._v(" menuView "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BottomNavigationMenuView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" view"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getChildAt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Field")]),t._v(" shiftingMode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" menuView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getClass")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDeclaredField")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mShiftingMode"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        shiftingMode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAccessible")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        shiftingMode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setBoolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("menuView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        shiftingMode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAccessible")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" menuView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getChildCount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BottomNavigationItemView")]),t._v(" item "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BottomNavigationItemView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" menuView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getChildAt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//noinspection RestrictedApi")]),t._v("\n            item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setShiftingMode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// set once again checked value, so view will be updated")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//noinspection RestrictedApi")]),t._v("\n            item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setChecked")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItemData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isChecked")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NoSuchFieldException")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BNVHelper"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Unable to get shift mode field"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IllegalAccessException")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BNVHelper"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Unable to change value of shift mode"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("This disables the Shifting behaviour of the menu when item count exceeds 3 nos.")]),t._v(" "),s("p",[s("strong",[t._v("USAGE")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BottomNavigationView")]),t._v(" navView "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BottomNavigationView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findViewById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("R")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bottom_navigation_bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("disableMenuShiftMode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("navView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[s("strong",[t._v("Proguard Issue")]),t._v(" : Add following line proguard configuration file as well else, this wouldn't work.")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("keepclassmembers "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" android"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("support"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("design"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("internal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BottomNavigationMenuView")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" mShiftingMode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("Alternatively, you can create a Class and access this method from there. "),s("a",{attrs:{href:"http://stackoverflow.com/a/40189977/1149398",target:"_blank",rel:"noopener noreferrer"}},[t._v("See Original Reply Here"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("strong",[t._v("NOTE")]),t._v(" : This is a Reflection based "),s("strong",[t._v("HOTFIX")]),t._v(", please update this once Google's support library is updated with a direct function call.")]),t._v(" "),s("h4",{attrs:{id:"remarks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),s("p",[t._v("Represents a standard bottom navigation bar for application. It is an implementation of material design bottom navigation.")]),t._v(" "),s("h3",{attrs:{id:"links"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#links"}},[t._v("#")]),t._v(" Links:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://developer.android.com/reference/android/support/design/widget/BottomNavigationView.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official Javadoc"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);