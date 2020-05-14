(window.webpackJsonp=window.webpackJsonp||[]).push([[3564],{3909:function(t,a,s){"use strict";s.r(a);var r=s(19),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"xamarin-android-how-to-create-a-toolbar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xamarin-android-how-to-create-a-toolbar"}},[t._v("#")]),t._v(" Xamarin.Android - How to create a toolbar")]),t._v(" "),s("h2",{attrs:{id:"add-toolbar-to-the-xamarin-android-application"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-toolbar-to-the-xamarin-android-application"}},[t._v("#")]),t._v(" Add toolbar to the Xamarin.Android application")]),t._v(" "),s("p",[t._v("Firstly you have to add Xamarin.Android.Support.V7.AppCompat library for NuGet:\n"),s("a",{attrs:{href:"https://www.nuget.org/packages/Xamarin.Android.Support.v7.AppCompat/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.nuget.org/packages/Xamarin.Android.Support.v7.AppCompat/"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v('In the "values" folder under "Resources" add new xml file called "styles.xml":\n'),s("a",{attrs:{href:"http://i.stack.imgur.com/D2LfG.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"http://i.stack.imgur.com/D2LfG.png",alt:"enter image description here"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v('"styles.xml" file should contain below code:')]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("xml")]),t._v(" version"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0"')]),t._v(" encoding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"utf-8"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("resources"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("style")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyTheme"')]),t._v(" parent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyTheme.Base"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" Base theme applied no matter what API "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("style")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyTheme.Base"')]),t._v(" parent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Theme.AppCompat.Light.DarkActionBar"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"windowNoTitle"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("We will be "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" the toolbar so no need to show ActionBar"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"windowActionBar"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" Set theme colors "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("www"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("google"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("design"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("spec"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html#color"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("color"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("palette"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" colorPrimary "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("used")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" action bar background "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"colorPrimary"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("#2196F3"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" colorPrimaryDark "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("used")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the status bar "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"colorPrimaryDark"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("#1976D2"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" colorAccent "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("used")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("the")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("value")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" colorControlActivated\n     which "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("used")]),t._v(" to tint widgets "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"colorAccent"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("#FF4081"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"colorControlHighlight"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("#FF4081"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" You can also "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" colorControlNormal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" colorControlActivated\n     colorControlHighlight and colorSwitchThumbNormal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),s("p",[t._v('Next step is to add "toolbar.axml" file that contains toolbar control definition to the "layout" folder:')]),t._v(" "),s("p",[s("a",{attrs:{href:"http://i.stack.imgur.com/8MQe0.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"http://i.stack.imgur.com/8MQe0.png",alt:"enter image description here"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Add below code to define toolbar:")]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("xml")]),t._v(" version"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0"')]),t._v(" encoding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"utf-8"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("android"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("support"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("v7"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("widget"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Toolbar")]),t._v(" xmlns"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://schemas.android.com/apk/res/android"')]),t._v("\nxmlns"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://schemas.android.com/apk/res-auto"')]),t._v("\nandroid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@+id/toolbar"')]),t._v("\nandroid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("layout_width"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"match_parent"')]),t._v("\nandroid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("layout_height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wrap_content"')]),t._v("\nandroid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("minHeight"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"?attr/actionBarSize"')]),t._v("\nandroid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("background"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"?attr/colorPrimary"')]),t._v("\nandroid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("theme"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@style/ThemeOverlay.AppCompat.Dark.ActionBar"')]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("popupTheme"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@style/ThemeOverlay.AppCompat.Light"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),s("p",[t._v('Now please open "Main.axml" file and add below code just below closing tag for the first layout. Your code should look like below:')]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("xml")]),t._v(" version"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0"')]),t._v(" encoding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"utf-8"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LinearLayout")]),t._v(" xmlns"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://schemas.android.com/apk/res/android"')]),t._v("\nandroid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("orientation"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vertical"')]),t._v("\nandroid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("layout_width"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"match_parent"')]),t._v("\nandroid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("layout_height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"match_parent"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("include")]),t._v(" android"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@+id/toolbar"')]),t._v(" layout"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@layout/toolbar"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("LinearLayout"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n\n")])])]),s("p",[t._v('Now you have to add information about theme that your app uses. Open "AndroidManifest" file and add theme information to the "application" tag:')]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("application")]),t._v(" android"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("theme"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@style/MyTheme"')]),t._v(" android"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("allowBackup"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),t._v(" android"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("icon"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@mipmap/icon"')]),t._v(" android"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("label"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@string/app_name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),s("p",[t._v('Last step is to connect the toolbar in Activity file. Open "MainActivity.cs" file.\nYou have to change derivation from "Activity" to "AppCompatActivity".\nNow get reference to the toolbar and set it as default toolbar for the activity in the "OnCreate" method.\nYou can also define title:')]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" toolbar "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("FindViewById")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Android"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Support"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("V7"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Widget"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Toolbar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Resource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toolbar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetSupportActionBar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("toolbar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        SupportActionBar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Title "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello from Appcompat Toolbar"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("Whole method should look like below:")]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("OnCreate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bundle")]),t._v(" savedInstanceState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("base")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("OnCreate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("savedInstanceState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetContentView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Resource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Layout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" toolbar "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("FindViewById")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Android"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Support"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("V7"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Widget"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Toolbar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Resource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toolbar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetSupportActionBar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("toolbar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        SupportActionBar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Title "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello from Appcompat Toolbar"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("Rebuild project and launch it to see result:")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://i.stack.imgur.com/31ApW.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"http://i.stack.imgur.com/31ApW.png",alt:"enter image description here"}}),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"remarks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),s("p",[t._v("Dear Team,")]),t._v(" "),s("p",[t._v("I think that its good to mention about official Android documentation where toolbar control is explained in details:")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.android.com/reference/android/support/v7/widget/Toolbar.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.android.com/reference/android/support/v7/widget/Toolbar.html"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("There is also interested content about Android.Support.v7 library used in the sample:")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.android.com/training/appbar/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.android.com/training/appbar/index.html"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);