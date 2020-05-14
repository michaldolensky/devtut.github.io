(window.webpackJsonp=window.webpackJsonp||[]).push([[2311],{2657:function(t,a,e){"use strict";e.r(a);var s=e(19),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"nstimer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nstimer"}},[t._v("#")]),t._v(" NSTimer")]),t._v(" "),e("h2",{attrs:{id:"creating-a-timer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-timer"}},[t._v("#")]),t._v(" Creating a Timer")]),t._v(" "),e("p",[t._v("This will create a timer to call the "),e("code",[t._v("doSomething")]),t._v(" method on "),e("code",[t._v("self")]),t._v(" in "),e("code",[t._v("5.0")]),t._v(" seconds.")]),t._v(" "),e("div",{staticClass:"language-objectivec extra-class"},[e("pre",{pre:!0,attrs:{class:"language-objectivec"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSTimer scheduledTimerWithTimeInterval"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.0")]),t._v("\n         target"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),t._v(" \n         selector"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@selector")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doSomething"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n         userInfo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("nil \n         repeats"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("NO"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),e("p",[t._v("Setting the "),e("code",[t._v("repeats")]),t._v(" parameter to "),e("code",[t._v("false/NO")]),t._v(" indicates that we want the timer to fire only once. If we set this to "),e("code",[t._v("true/YES")]),t._v(", it would fire every five seconds until manually invalidated.")]),t._v(" "),e("h2",{attrs:{id:"invalidating-a-timer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#invalidating-a-timer"}},[t._v("#")]),t._v(" Invalidating a timer")]),t._v(" "),e("div",{staticClass:"language-objectivec extra-class"},[e("pre",{pre:!0,attrs:{class:"language-objectivec"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("timer invalidate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ntimer "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nil"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),e("p",[t._v("This will stop the timer from firing. "),e("strong",[t._v("Must be called from the thread the timer was created in,")]),t._v(" see "),e("a",{attrs:{href:"https://developer.apple.com/library/ios/documentation/Cocoa/Reference/Foundation/Classes/NSTimer_Class/#//apple_ref/occ/instm/NSTimer/invalidate",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apple's notes"),e("OutboundLink")],1),t._v(":")]),t._v(" "),e("blockquote"),t._v(" "),e("p",[t._v("You must send this message from the thread on which the timer was installed. If you send this message from another thread, the input source associated with the timer may not be removed from its run loop, which could prevent the thread from exiting properly.")]),t._v(" "),e("p",[t._v("Setting "),e("code",[t._v("nil")]),t._v(" will help you next to check whether it's running or not.")]),t._v(" "),e("div",{staticClass:"language-objectivec extra-class"},[e("pre",{pre:!0,attrs:{class:"language-objectivec"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("timer invalidate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    timer "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nil"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Now set a timer again.")]),t._v("\n\n")])])]),e("h2",{attrs:{id:"manually-firing-a-timer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#manually-firing-a-timer"}},[t._v("#")]),t._v(" Manually firing a timer")]),t._v(" "),e("div",{staticClass:"language-objectivec extra-class"},[e("pre",{pre:!0,attrs:{class:"language-objectivec"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("timer fire"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),e("p",[t._v("Calling the "),e("code",[t._v("fire")]),t._v(" method causes an NSTimer to perform the task it would have usually performed on a schedule.")]),t._v(" "),e("p",[t._v("In a "),e("strong",[t._v("non-repeating timer")]),t._v(", this will automatically invalidate the timer. That is, calling "),e("code",[t._v("fire")]),t._v(" before the time interval is up will result in only one invocation.")]),t._v(" "),e("p",[t._v("In a "),e("strong",[t._v("repeating timer")]),t._v(", this will simply invoke the action without interrupting the usual schedule.")]),t._v(" "),e("h2",{attrs:{id:"storing-information-in-the-timer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#storing-information-in-the-timer"}},[t._v("#")]),t._v(" Storing information in the Timer")]),t._v(" "),e("p",[t._v("When creating a timer, you can set the "),e("code",[t._v("userInfo")]),t._v(" parameter to include information that you want to pass to the function you call with the timer.")]),t._v(" "),e("p",[t._v("By taking a timer as a parameter in said function, you can access the "),e("code",[t._v("userInfo")]),t._v(" property.")]),t._v(" "),e("div",{staticClass:"language-objectivec extra-class"},[e("pre",{pre:!0,attrs:{class:"language-objectivec"}},[e("code",[t._v("NSDictionary "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("dictionary "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("@")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                             "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"Message"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"Hello, world!"')]),t._v("\n                            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//this dictionary contains a message")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSTimer scheduledTimerWithTimeInterval"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.0")]),t._v("\n     target"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),t._v(" \n     selector"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@selector")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doSomething"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n     userInfo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("dictionary\n     repeats"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("NO"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//the timer contains the dictionary and later calls the function")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" doSomething"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSTimer"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("timer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//the function retrieves the message from the timer")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSLog")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%@"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userInfo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Message"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);