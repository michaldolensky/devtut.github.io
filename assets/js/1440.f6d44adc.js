(window.webpackJsonp=window.webpackJsonp||[]).push([[1440],{1787:function(e,t,a){"use strict";a.r(t);var s=a(19),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"segues"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#segues"}},[e._v("#")]),e._v(" Segues")]),e._v(" "),a("h2",{attrs:{id:"using-segues-to-navigate-backwards-in-the-navigation-stack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-segues-to-navigate-backwards-in-the-navigation-stack"}},[e._v("#")]),e._v(" Using Segues to navigate backwards in the navigation stack")]),e._v(" "),a("p",[a("strong",[e._v("Unwind Segues")])]),e._v(" "),a("blockquote"),e._v(" "),a("p",[e._v("Unwind Segues give you a way to “unwind” the navigation stack and specify a destination to go back to.\nThe signature of this function is key to Interface Builder recognizing it.\n**It must have a return value of IBAction and take one parameter of UIStoryboardSegue**. The name of the function does not matter. In fact, the function does not even have to do anything. It’s just there as a marker of which UIViewController is the destination of the Unwind Segue. [source][1]")]),e._v(" "),a("p",[e._v("Required signature of an unwind segue")]),e._v(" "),a("p",[e._v("Objective C:")]),e._v(" "),a("div",{staticClass:"language-swift extra-class"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("IBAction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("prepareForUnwind"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("UIStoryboardSegue")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("segue "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n")])])]),a("p",[e._v("Swift:")]),e._v(" "),a("div",{staticClass:"language-swift extra-class"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[e._v("@IBAction")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("func")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("prepareForUnwind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("segue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("UIStoryboardSegue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n")])])]),a("h2",{attrs:{id:"an-overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#an-overview"}},[e._v("#")]),e._v(" An Overview")]),e._v(" "),a("p",[e._v("From the Apple documentation:")]),e._v(" "),a("blockquote"),e._v(" "),a("p",[e._v("A UIStoryboardSegue object is responsible for "),a("strong",[e._v("performing the visual transition between two view controllers")]),e._v(". In addition, segue objects are used to prepare for the transition from one view controller to another. "),a("strong",[e._v("Segue objects contain information about the view controllers involved in a transition")]),e._v(". When a segue is triggered, but before the visual transition occurs, the storyboard runtime calls the current view controller’s prepareForSegue:sender: method so that it can pass any needed data to the view controller that is about to be displayed.")]),e._v(" "),a("p",[a("strong",[e._v("Attributes")])]),e._v(" "),a("p",[e._v("Swift")]),e._v(" "),a("div",{staticClass:"language-swift extra-class"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[e._v("sourceViewController"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("UIViewController")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\ndestinationViewController"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("UIViewController")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\nidentifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("String")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("?")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n")])])]),a("p",[e._v("References:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIViewController_Class/index.html#//apple_ref/occ/instm/UIViewController/shouldPerformSegueWithIdentifier:sender:",target:"_blank",rel:"noopener noreferrer"}},[e._v("UIViewController Class Reference"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIStoryboardSegue_Class/index.html#//apple_ref/doc/uid/TP40010911-CH1-SW8",target:"_blank",rel:"noopener noreferrer"}},[e._v("UIStoryBoardSegue Class Reference"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"preparing-your-view-controller-before-a-triggering-a-segue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preparing-your-view-controller-before-a-triggering-a-segue"}},[e._v("#")]),e._v(" Preparing your view controller before a triggering a Segue")]),e._v(" "),a("h3",{attrs:{id:"prepareforsegue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prepareforsegue"}},[e._v("#")]),e._v(" "),a("strong",[e._v("PrepareForSegue")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\nfunc prepareForSegue(_ segue:UIStoryboardSegue, sender sender:AnyObject?) \n\n")])])]),a("blockquote"),e._v(" "),a("p",[e._v("Notifies the view controller that a segue is about to be performed")]),e._v(" "),a("h3",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("p",[a("strong",[e._v("segue")]),e._v(": The segue object.")]),e._v(" "),a("p",[a("strong",[e._v("sender")]),e._v(": The object that initialized the segue.")]),e._v(" "),a("h3",{attrs:{id:"example-in-swift"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-in-swift"}},[e._v("#")]),e._v(" Example in Swift")]),e._v(" "),a("p",[e._v('Perform a task if the identifier of the segue is "SomeSpecificIdentifier"')]),e._v(" "),a("div",{staticClass:"language-swift extra-class"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("override")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("func")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("prepareForSegue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("segue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("UIStoryboardSegue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" sender"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("AnyObject")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" segue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("identifier "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"SomeSpecificIdentifier"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//- Do specific task")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n")])])]),a("h2",{attrs:{id:"deciding-if-an-invoked-segue-should-be-performed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deciding-if-an-invoked-segue-should-be-performed"}},[e._v("#")]),e._v(" Deciding if an invoked Segue should be performed.")]),e._v(" "),a("h3",{attrs:{id:"shouldperformseguewithidentifier"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shouldperformseguewithidentifier"}},[e._v("#")]),e._v(" "),a("strong",[e._v("ShouldPerformSegueWithIdentifier")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\nfunc shouldPerformSegueWithIdentifier(_ identifier:String, sender sender:AnyObject?) -> Bool \n\n")])])]),a("blockquote"),e._v(" "),a("p",[e._v("Determines whether the segue with the specified identifier should be performed.")]),e._v(" "),a("h3",{attrs:{id:"parameters-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-2"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("p",[a("strong",[e._v("Identifier")]),e._v(": String that identifies the triggered segue")]),e._v(" "),a("p",[a("strong",[e._v("Sender")]),e._v(": The object that initialized the segue.")]),e._v(" "),a("h3",{attrs:{id:"example-in-swift-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-in-swift-2"}},[e._v("#")]),e._v(" Example in Swift")]),e._v(" "),a("p",[e._v('Only perform segue if the identifier is "SomeSpecificIdentifier"')]),e._v(" "),a("div",{staticClass:"language-swift extra-class"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("override")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("func")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("shouldPerformSegueWithIdentifier")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("identifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" sender"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("AnyObject")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("Bool")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" identifier "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"SomeSpecificIdentifier"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n")])])]),a("h2",{attrs:{id:"trigger-segue-programmatically"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#trigger-segue-programmatically"}},[e._v("#")]),e._v(" Trigger Segue Programmatically")]),e._v(" "),a("h3",{attrs:{id:"performseguewithidentifier"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#performseguewithidentifier"}},[e._v("#")]),e._v(" PerformSegueWithIdentifier:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\nfunc performSegueWithIdentifier(_ identifier:String, sender sender:AnyObject?)\n\n")])])]),a("blockquote"),e._v(" "),a("p",[e._v("Initiates the segue with the specified identifier from the current view controller's storyboard file")]),e._v(" "),a("h3",{attrs:{id:"parameters-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-3"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("p",[a("strong",[e._v("Identifier")]),e._v(": String that identifies the triggered segue")]),e._v(" "),a("p",[a("strong",[e._v("Sender")]),e._v(": The object that will initiate the segue.")]),e._v(" "),a("h3",{attrs:{id:"example-in-swift-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-in-swift-3"}},[e._v("#")]),e._v(" Example in Swift")]),e._v(" "),a("p",[e._v('Performing a segue with identifier "SomeSpecificIdentifier" from a table view row selection:')]),e._v(" "),a("div",{staticClass:"language-swift extra-class"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("func")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("tableView")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("tableView"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("UITableView")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" didSelectRowAtIndexPath indexPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("NSIndexPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("performSegueWithIdentifier")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"SomeSpecificIdentifier"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" sender"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" indexPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);