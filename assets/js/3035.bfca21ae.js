(window.webpackJsonp=window.webpackJsonp||[]).push([[3035],{3381:function(t,a,s){"use strict";s.r(a);var n=s(19),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"navigator-best-practices"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#navigator-best-practices"}},[t._v("#")]),t._v(" Navigator Best Practices")]),t._v(" "),s("h2",{attrs:{id:"navigator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#navigator"}},[t._v("#")]),t._v(" Navigator")]),t._v(" "),s("p",[s("code",[t._v("Navigator")]),t._v(" is React Native's default navigator.  A "),s("code",[t._v("Navigator")]),t._v(" component manages a "),s("strong",[t._v("stack")]),t._v(" of route objects, and provides methods for managing that stack.")]),t._v(" "),s("p",[s("strong",[t._v("Managing the Route Stack")])]),t._v(" "),s("p",[t._v("First of all, notice the "),s("code",[t._v("initialRoute")]),t._v(" prop.  A route is simply a javascript object, and can take whatever shape you want, and have whatever values you want.  It's the primary way you'll pass values and methods between components in your navigation stack.")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("Navigator")]),t._v(" knows what to render based on the value returned from its "),s("code",[t._v("renderScene")]),t._v(" prop.")]),t._v(" "),s("p",[t._v("Let's imagine an implementation of "),s("code",[t._v("ExampleScene")]),t._v(" in this example:")]),t._v(" "),s("p",[s("strong",[t._v("Configuring the Navigator")])]),t._v(" "),s("p",[t._v("You can configure the "),s("code",[t._v("Navigator")]),t._v("'s transitions with the "),s("code",[t._v("configureScene")]),t._v(" prop.  This is a function that's passed the "),s("code",[t._v("route")]),t._v(" object, and needs to return a configuration object. These are the available configuration objects:")]),t._v(" "),s("ul",[s("li",[t._v("Navigator.SceneConfigs.PushFromRight (default)")]),t._v(" "),s("li",[t._v("Navigator.SceneConfigs.FloatFromRight")]),t._v(" "),s("li",[t._v("Navigator.SceneConfigs.FloatFromLeft")]),t._v(" "),s("li",[t._v("Navigator.SceneConfigs.FloatFromBottom")]),t._v(" "),s("li",[t._v("Navigator.SceneConfigs.FloatFromBottomAndroid")]),t._v(" "),s("li",[t._v("Navigator.SceneConfigs.FadeAndroid")]),t._v(" "),s("li",[t._v("Navigator.SceneConfigs.HorizontalSwipeJump")]),t._v(" "),s("li",[t._v("Navigator.SceneConfigs.HorizontalSwipeJumpFromRight")]),t._v(" "),s("li",[t._v("Navigator.SceneConfigs.VerticalUpSwipeJump")]),t._v(" "),s("li",[t._v("Navigator.SceneConfigs.VerticalDownSwipeJump")])]),t._v(" "),s("p",[t._v("You can return one of these objects without modification, or you can modify the configuration object to customize the navigation transitions.  For example, to modify the edge hit width to more closely emulate the iOS "),s("code",[t._v("UINavigationController")]),t._v("'s "),s("code",[t._v("interactivePopGestureRecognizer")]),t._v(":")]),t._v(" "),s("p",[s("strong",[t._v("Managing the NavigationBar")])]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("Navigator")]),t._v(" component comes with a "),s("code",[t._v("navigationBar")]),t._v(" prop, which can theoretically take any properly configured React component.  But the most common implementation uses the default "),s("code",[t._v("Navigator.NavigationBar")]),t._v(".  This takes a "),s("code",[t._v("routeMapper")]),t._v(" prop that you can use to configure the appearance of the navigation bar based on the route.")]),t._v(" "),s("p",[t._v("A "),s("code",[t._v("routeMapper")]),t._v(" is a regular javascript object with three functions: "),s("code",[t._v("Title")]),t._v(", "),s("code",[t._v("RightButton")]),t._v(", and "),s("code",[t._v("LeftButton")]),t._v(".  For example:")]),t._v(" "),s("p",[s("strong",[t._v("See more")])]),t._v(" "),s("p",[t._v("For more detailed documentation of each prop, see the "),s("a",{attrs:{href:"https://facebook.github.io/react-native/docs/navigator.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("the official React Native Documentation for "),s("code",[t._v("Navigator")]),s("OutboundLink")],1),t._v(", and the React Native guide on "),s("a",{attrs:{href:"https://facebook.github.io/react-native/docs/using-navigators.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Using Navigators"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"use-react-navigation-for-navigation-in-react-native-apps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-react-navigation-for-navigation-in-react-native-apps"}},[t._v("#")]),t._v(" Use react-navigation for navigation in react native apps")]),t._v(" "),s("p",[t._v("With the help of "),s("a",{attrs:{href:"https://reactnavigation.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("react-navigation"),s("OutboundLink")],1),t._v(", you can add navigation to your app really easy.")]),t._v(" "),s("p",[t._v("Install react-navigation")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("npm install "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("save react"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("navigation\n")])])]),s("p",[t._v("Example:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Button"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" View"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" AppRegistry "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react-native'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" StackNavigator "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react-navigation'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" App "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("StackNavigator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  FirstPage"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("screen"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" FirstPage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  SecondPage"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("screen"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" SecondPage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FirstPage")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("React"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Component")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" navigationOptions "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Welcome'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" navigate "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("navigation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Button\n        title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Go to Second Page'")]),t._v("\n        onPress"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("navigate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SecondPage'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Awesomepankaj'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SecondPage")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("React"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Component")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("navigationOptions")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("navigation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" navigation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" goBack "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("navigation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("View"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Welcome to Second Page"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Button\n          title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Go back to First Page"')]),t._v("\n          onPress"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("goBack")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("View"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"react-native-navigation-with-react-native-router-flux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react-native-navigation-with-react-native-router-flux"}},[t._v("#")]),t._v(" react-native Navigation with react-native-router-flux")]),t._v(" "),s("p",[t._v("Install by using "),s("code",[t._v("npm install --save react-native-router-flux")])]),t._v(" "),s("p",[t._v("In react-native-router-flux, each route is called a "),s("code",[t._v("<Scene>")])]),t._v(" "),s("blockquote"),t._v(" "),s("p",[s("code",[t._v('<Scene key="home" component={LogIn} title="Home" initial />')])]),t._v(" "),s("p",[s("code",[t._v("key")]),t._v(" A unique string that can be used to refer to the particular scene.")]),t._v(" "),s("p",[s("code",[t._v("component")]),t._v(" Which component to show, here it's")]),t._v(" "),s("p",[s("code",[t._v("title")]),t._v(" make a NavBar and give it a title 'Home'")]),t._v(" "),s("p",[s("code",[t._v("initial")]),t._v(" Is this the first screen of the App")]),t._v(" "),s("blockquote"),t._v(" "),s("p",[t._v("Example:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" React "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Scene"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Router "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react-native-router-flux'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" LogIn "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./components/LogIn'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" SecondPage "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./components/SecondPage'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("RouterComponent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Router"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Scene key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"login"')]),t._v(" component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("LogIn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Login Form"')]),t._v(" initial "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Scene key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"secondPage"')]),t._v(" component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SecondPage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Home"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Router"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" RouterComponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("Import this file in the main App.js(index file) and render it.\nFor more information can visit this "),s("a",{attrs:{href:"https://github.com/aksonov/react-native-router-flux/blob/master/docs/MINI_TUTORIAL.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),s("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);a.default=e.exports}}]);