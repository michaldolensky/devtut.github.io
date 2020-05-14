(window.webpackJsonp=window.webpackJsonp||[]).push([[1336],{1682:function(t,a,s){"use strict";s.r(a);var e=s(19),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"cllocation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cllocation"}},[t._v("#")]),t._v(" CLLocation")]),t._v(" "),s("h2",{attrs:{id:"distance-filter-using"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#distance-filter-using"}},[t._v("#")]),t._v(" Distance Filter using")]),t._v(" "),s("p",[t._v("Example :")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\n  CLLocationManager *locationManager = [[CLLocationManager alloc] init];\n   locationManager.delegate = self;\n   locationManager.desiredAccuracy = kCLLocationAccuracyBest;\n   locationManager.distanceFilter = 5;\n\n")])])]),s("p",[t._v("E.g. In the above  example code above, location changes of less than 5 metres won’t be sent to the callback, but instead be ignored.")]),t._v(" "),s("h2",{attrs:{id:"get-user-location-using-cllocationmanager"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-user-location-using-cllocationmanager"}},[t._v("#")]),t._v(" Get User Location Using CLLocationManager")]),t._v(" "),s("p",[t._v("1 - Include the CoreLocation.framework in your project; this is accomplished by clicking on:")]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[t._v("root directory "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" build phases "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Binary")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("With")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Libraries")]),t._v("\n\n")])])]),s("p",[t._v("Click on the (+) button, look for CoreLocation.framework and click add.")]),t._v(" "),s("p",[t._v("2- Modify the info.plist file to ask for permission to use user location by opening it as source code. Add either of the following key:value pair under the  tag to ask for usage of user's location while the application is in use:")]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("NSLocationWhenInUseUsageDescription")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("string"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("message to display when asking "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" permission"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("string"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),s("p",[t._v("3- import CoreLocation to the ViewController that will be using it.")]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("CoreLocation")]),t._v("\n\n")])])]),s("p",[t._v("4- Make sure your ViewController conforms to the CLLocationManagerDelagate protocol")]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ViewController")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIViewController")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("CLLocationManagerDelegate")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("After these steps, we can create a CLLocationManager object as instance variable and use it in the ViewController.")]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" manager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("CLLocationManager")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n\n")])])]),s("p",[t._v("We do not use 'let' here because we will modify the manager to specify its delegate, minimum distance before update event, and its accuracy")]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//initialize the manager")]),t._v("\nmanager "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CLLocationManager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//specify delegate")]),t._v("\nmanager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("delegate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//set the minimum distance the phone needs to move before an update event is triggered (for example:  100 meters)")]),t._v("\nmanager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("distanceFilter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//set Accuracy to any of the following depending on your use case")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//let kCLLocationAccuracyBestForNavigation: CLLocationAccuracy")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//let kCLLocationAccuracyBest: CLLocationAccuracy")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//let kCLLocationAccuracyNearestTenMeters: CLLocationAccuracy")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//let kCLLocationAccuracyHundredMeters: CLLocationAccuracy")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//let kCLLocationAccuracyKilometer: CLLocationAccuracy")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//let kCLLocationAccuracyThreeKilometers: CLLocationAccuracy")]),t._v("\n\nmanager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("desiredAccuracy "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("kCLLocationAccuracyBest")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//ask the user for permission")]),t._v("\nmanager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestWhenInUseAuthorization")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Start collecting location information")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" #"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("available")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iOS "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            \n   manager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestLocation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            \n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \n   manager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("startUpdatingLocation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("Now to get access to the location updates, we can implement the function below which is called overtime the distanceFilter is reached.")]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("locationManager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("manager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("CLLocationManager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" didUpdateLocations locations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("CLLocation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("The locations parameter is an array of CLLocation objects that represent the actual location of the device.From these objects, one can get access to the following attributes: "),s("code",[t._v("coordinate,altitude, floor, horizontalAccuracy, verticalAccuracy, timestamp, description, course, speed")]),t._v(", and a function "),s("code",[t._v("distance(from:)")]),t._v(" that measures the distance between two locations.")]),t._v(" "),s("p",[t._v("Note: While requesting permission for location, there are two different types of authorization.")]),t._v(" "),s("blockquote"),t._v(" "),s("p",[t._v('"When In Use" authorization only gives the app permission to receive\nyour location when the app is in use or foreground.')]),t._v(" "),s("p",[t._v('“Always" authorization, gives the app background\npermissions which may lead to decrease battery life in case your app is closed.')]),t._v("\nPlist file should be adjusted as necessary.\n")])}),[],!1,null,null,null);a.default=n.exports}}]);