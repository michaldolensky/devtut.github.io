(window.webpackJsonp=window.webpackJsonp||[]).push([[314],{658:function(t,s,a){"use strict";a.r(s);var e=a(19),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"the-manifest-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-manifest-file"}},[t._v("#")]),t._v(" The Manifest File")]),t._v(" "),a("p",[t._v('The Manifest is an obligatory file named exactly "AndroidManifest.xml" and located in the app\'s root directory. It specifies the app name, icon, Java package name, version, declaration of Activities, Services, app permissions and other information.')]),t._v(" "),a("h2",{attrs:{id:"declaring-components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#declaring-components"}},[t._v("#")]),t._v(" Declaring Components")]),t._v(" "),a("p",[t._v("The primary task of the manifest is to inform the system about the app's components. For example, a manifest file can declare an activity as follows:")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("xml version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0"')]),t._v(" encoding"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"utf-8"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("manifest "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("application android"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("icon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@drawable/app_icon.png"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("activity android"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.example.project.ExampleActivity"')]),t._v("\n                  android"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("label"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@string/example_label"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("activity"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("application"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("manifest"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),a("p",[t._v("In the "),a("code",[t._v("<application>")]),t._v(" element, the "),a("code",[t._v("android:icon")]),t._v(" attribute points to resources for an icon that identifies the app.")]),t._v(" "),a("p",[t._v("In the  element, the "),a("code",[t._v("android:name")]),t._v(" attribute specifies the fully qualified class name of the Activity subclass and the android:label attribute specifies a string to use as the user-visible label for the activity.")]),t._v(" "),a("p",[t._v("You must declare all app components this way:")]),t._v(" "),a("p",[t._v("-"),a("code",[t._v("<activity>")]),t._v(" elements for activities")]),t._v(" "),a("p",[t._v("-"),a("code",[t._v("<service>")]),t._v(" elements for services")]),t._v(" "),a("p",[t._v("-"),a("code",[t._v("<receiver>")]),t._v(" elements for broadcast receivers")]),t._v(" "),a("p",[t._v("-"),a("code",[t._v("<provider>")]),t._v(" elements for content providers")]),t._v(" "),a("p",[t._v("Activities, services, and content providers that you include in your source but do not declare in the manifest are not visible to the system and, consequently, can never run. However, broadcast receivers can be either declared in the manifest or created dynamically in code (as "),a("code",[t._v("BroadcastReceiver")]),t._v(" objects) and registered with the system by calling "),a("code",[t._v("registerReceiver()")]),t._v(".")]),t._v(" "),a("p",[t._v("For more about how to structure the manifest file for your app, see The AndroidManifest.xml File documentation.")]),t._v(" "),a("h2",{attrs:{id:"declaring-permissions-in-your-manifest-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#declaring-permissions-in-your-manifest-file"}},[t._v("#")]),t._v(" Declaring permissions in your manifest file")]),t._v(" "),a("p",[t._v("Any permission required by your application to access a protected part of the API or to interact with other applications must be declared in your "),a("code",[t._v("AndroidManifest.xml")]),t._v(" file. This is done using the "),a("code",[t._v("<uses-permission />")]),t._v(" tag.")]),t._v(" "),a("p",[a("strong",[t._v("Syntax")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('\n<uses-permission android:name="string"\n    android:maxSdkVersion="integer"/>\n\n')])])]),a("p",[a("strong",[t._v("android:name:")]),t._v(" This is the name of the required permission")]),t._v(" "),a("p",[a("strong",[t._v("android:maxSdkVersion:")]),t._v(" The highest API level at which this permission should be granted to your app. Setting this permission is optional and should only be set if the permission your app requires is no longer needed at a certain API level.")]),t._v(" "),a("p",[t._v("Sample AndroidManifest.xml:")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("xml version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0"')]),t._v(" encoding"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"utf-8"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("manifest xmlns"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("android"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://schemas.android.com/apk/res/android"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.android.samplepackage"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n       \n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" request internet permission "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("permission android"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android.permission.INTERNET"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" request camera permission "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("permission android"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android.permission.CAMERA"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" request permission "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" write "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" external storage "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("permission\n         android"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android.permission.WRITE_EXTERNAL_STORAGE"')]),t._v("\n         android"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("maxSdkVersion"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"18"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("application"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("<"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("application"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("manifest"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),a("ul",[a("li",[t._v("Also see the "),a("a",{attrs:{href:"http://stackoverflow.com/documentation/android/1525/permissions-in-api-23#t=201607271704493154496",target:"_blank",rel:"noopener noreferrer"}},[t._v("Permissions"),a("OutboundLink")],1),t._v(" topic.")])])])}),[],!1,null,null,null);s.default=r.exports}}]);