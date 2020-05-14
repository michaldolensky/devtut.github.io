(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{520:function(t,a,s){"use strict";s.r(a);var n=s(19),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"firebase-app-indexing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#firebase-app-indexing"}},[t._v("#")]),t._v(" Firebase App Indexing")]),t._v(" "),s("h2",{attrs:{id:"supporting-http-urls"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#supporting-http-urls"}},[t._v("#")]),t._v(" Supporting Http URLs")]),t._v(" "),s("p",[t._v("Step 1 :- Allow Google to Crawl to your content.Edit server’s robot.txt file.You can control google crawling for your content by editing this file,you can refer to "),s("a",{attrs:{href:"https://developers.google.com/webmasters/control-crawl-index/docs/getting_started",target:"_blank",rel:"noopener noreferrer"}},[t._v("this link"),s("OutboundLink")],1),t._v(" for more details.")]),t._v(" "),s("p",[t._v("Step 2 :- Associate your App with your website.Include assetlinks.json You upload it to your web server's .well-known directory.Content of your assetlinks.json are as-")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('\n      [{\n"relation": ["delegate_permission/common.handle_all_urls"],\n"target" : \n{ "namespace": "android_app",\n"package_name": "<your_package_name>",\n"sha256_cert_fingerprints": ["<hash_of_app_certificate>"] }\n\n')])])]),s("p",[t._v("}]")]),t._v(" "),s("p",[t._v("Step 3 :-  Include App links in your manifest file to redirect Urls into your Application like below,")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("activity\n       android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('".activity.SampleActivity"')]),t._v("\n       android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("label"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@string/app_name"')]),t._v("\n       android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("windowSoftInputMode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"adjustResize|stateAlwaysHidden"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("intent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("filter"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n             "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("action android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android.intent.action.VIEW"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n             "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("category android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android.intent.category.DEFAULT"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n             "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("category android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android.intent.category.BROWSABLE"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("data\n             android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("host"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"example.live"')]),t._v("\n             android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("pathPrefix"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/vod"')]),t._v("\n             android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("scheme"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("data\n             android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("host"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"example.live"')]),t._v("\n             android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("pathPrefix"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/vod"')]),t._v("\n             android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("scheme"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("intent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("filter"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("activity"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),s("p",[t._v("Refer to this if you want learn about each and every tag here.")]),t._v(" "),s("p",[s("strong",[t._v("< action>")]),t._v("\nSpecify the ACTION_VIEW intent action so that the intent filter can be reached from Google Search.")]),t._v(" "),s("p",[s("strong",[t._v("< data>")]),t._v("\nAdd one or more  tags, where each tag represents a URI format that resolves to the activity. At minimum, the  tag must include the android:scheme attribute.\nYou can add additional attributes to further refine the type of URI that the activity accepts. For example, you might have multiple activities that accept similar URIs, but which differ simply based on the path name. In this case, use the android:path attribute or its variants (pathPattern or pathPrefix) to differentiate which activity the system should open for different URI paths.")]),t._v(" "),s("p",[s("strong",[t._v("< category>")]),t._v("\nInclude the BROWSABLE category. The BROWSABLE category is required in order for the intent filter to be accessible from a web browser. Without it, clicking a link in a browser cannot resolve to your app. The DEFAULT category is optional, but recommended. Without this category, the activity can be started only with an explicit intent, using your app component name.")]),t._v(" "),s("p",[t._v("Step 4:- Handle incoming URLS")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\n   @Override\n    protected void onCreate(Bundle savedInstanceState) {\n       super.onCreate(savedInstanceState);\n       setContentView(R.layout.activity_schedule);\n       onNewIntent(getIntent());\n  }\n\n   protected void onNewIntent(Intent intent) {\n   String action = intent.getAction();\n   Uri data = intent.getData();\n   if (Intent.ACTION_VIEW.equals(action) && data != null) {\n       articleId = data.getLastPathSegment();\n       TextView linkText = (TextView)findViewById(R.id.link);\n       linkText.setText(data.toString());\n   }\n\n")])])]),s("p",[t._v("}")]),t._v(" "),s("p",[t._v("Step 5 :- You can test this by using Android Debug Bridge command or studio configurations.\nAdb command:-\nLaunch your application and then run this command:-")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("adb shell am start "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("a android"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("intent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("VIEW "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("d "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{URL}"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])]),s("p",[t._v("Android Studio Configurations:-\n"),s("strong",[t._v("Android studio > Build > Edit Configuration >Launch options>select URL>then type in your Url here >Apply")]),t._v(" and test.Run your application if “Run” window shows error then you need to check your URL format with your applinks mentioned in manifest otherwise it will successfully run,and redirect to page mentioned your URL if specified.")]),t._v(" "),s("h2",{attrs:{id:"add-appindexing-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-appindexing-api"}},[t._v("#")]),t._v(" Add AppIndexing API")]),t._v(" "),s("p",[t._v("For Adding this to project you can find official doc easily but in this example I'm going to highlight some of the key areas to be taken care of.")]),t._v(" "),s("p",[t._v("Step 1 :- Add google service")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("dependencies "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n      compile "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'com.google.android.gms:play-services-appindexing:9.4.0'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("Step 2 :- Import classes")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("google"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("android"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("appindexing")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Action")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("google"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("android"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("appindexing")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AppIndex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("google"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("android"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("common"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GoogleApiClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("Step 3 :- Add App Indexing API calls")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GoogleApiClient")]),t._v(" mClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Uri")]),t._v(" mUrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" mTitle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" mDescription"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//If you know the values that to be indexed then you can initialize these variables in onCreate() ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCreate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bundle")]),t._v(" savedInstanceState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\nmClient "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GoogleApiClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Builder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addApi")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AppIndex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("API"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmUrl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://examplepetstore.com/dogs/standard-poodle"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmTitle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Standard Poodle"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmDescription "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The Standard Poodle stands at least 18 inches at the withers"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//If your data is coming from a network request, then initialize these value in onResponse() and make checks for NPE so that your code won’t fall apart.")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//setting title and description for App Indexing")]),t._v("\nmUrl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Uri")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("“android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("famelive"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("https"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("live"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("vod"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("” "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmTitle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("   model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTitle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmDescription "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDescription")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("connect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AppIndex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AppIndexApi")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onStop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mTitle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" mDescription "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" mUrl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//if your response fails then check whether these are initialized or not")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AppIndex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AppIndexApi")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       mClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("disconnect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onStop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Action")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thing")]),t._v(" object "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thing")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Builder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mTitle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDescription")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mDescription"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setUrl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mUrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Action")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Builder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Action")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TYPE_WATCH"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setObject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setActionStatus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Action")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("STATUS_TYPE_COMPLETED"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("To test this just follow the step 4 in Remarks given below.")]),t._v(" "),s("h4",{attrs:{id:"remarks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),s("li",[t._v("\nWhen you opt to implement App Indexing then you may find lots of blogs, documentation out there which may confuse you, in this case, I suggest you to stick to official docs provided by Firebase-Google. Even if you want to use third party to do this, first try follow this documentation because this will give you a clear idea how things are working.\n")]),t._v(" "),s("li",[t._v("\nGoogle will take around 24 hours to index your content. So be patient. You can do testing to make every thing is fine on your side.\n")]),t._v(" "),s("li",[t._v("\nFirst example lets you support HTTP URL of your website to redirect in your App. This will work such as, you have searched a query in  the google search, results show one of your website URL, whose app links are present in your app which is already installed. On clicking this URL it will redirect you directly in your App Screen corresponding to that search result. That's it I have discovered for this.\n")]),t._v(" "),s("li",[t._v("\nAdding AppIndexing API indexes your content and used in Auto completions in Google search Bar. Lets take example of inShorts Application for each page there is a headline and small description. After reading 2 or 3 headlines, close the application and move to google searchBar.\n")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://i.stack.imgur.com/Ri7UP.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://i.stack.imgur.com/Ri7UP.png",alt:"enter image description here"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Try entering headline you just went through, you will get App page suggestion with that Headline as Title. This is different from App suggestions you get while searching for Apps. This happens because you have written AppIndexing API code for this particular page and title is same as you have initialized in "),s("code",[t._v("onCreate()")]),t._v(".")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://i.stack.imgur.com/mGYcG.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://i.stack.imgur.com/mGYcG.png",alt:"enter image description here"}}),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);