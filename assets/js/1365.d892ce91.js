(window.webpackJsonp=window.webpackJsonp||[]).push([[1365],{1711:function(t,e,a){"use strict";a.r(e);var s=a(19),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"debugging-crashes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#debugging-crashes"}},[t._v("#")]),t._v(" Debugging Crashes")]),t._v(" "),a("h2",{attrs:{id:"debugging-exc-bad-access"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#debugging-exc-bad-access"}},[t._v("#")]),t._v(" Debugging EXC_BAD_ACCESS")]),t._v(" "),a("p",[a("code",[t._v("EXC_BAD_ACCESS")]),t._v(" means the process tried to access memory in an invalid way, like dereferencing a "),a("code",[t._v("NULL")]),t._v(" pointer or writing to read-only memory.  This is the hardest kind of crash to debug, because it usually does not have an error message, and some crashes can be "),a("strong",[t._v("very")]),t._v(" difficult to reproduce and/or occur in code completely unrelated to the problem.  This error is very rare in Swift, but if it occurs, you can often get easier-to-debug crashes by reducing compiler optimizations.")]),t._v(" "),a("p",[t._v("Most "),a("code",[t._v("EXC_BAD_ACCESS")]),t._v(" errors are caused by trying to dereference a "),a("code",[t._v("NULL")]),t._v(" pointer.  If this is the case, the address listed in the red arrow will usually be a hexadecimal number that is lower than a normal memory address, often "),a("code",[t._v("0x0")]),t._v(".  Set breakpoints in the debugger or add occasional "),a("code",[t._v("printf")]),t._v("/"),a("code",[t._v("NSLog")]),t._v(" statements to find out why that pointer is "),a("code",[t._v("NULL")]),t._v(".")]),t._v(" "),a("p",[t._v("An "),a("code",[t._v("EXC_BAD_ACCESS")]),t._v(" that occurs less reliably or makes no sense at all could be the result of a memory management problem.  Common problems that can cause this are:")]),t._v(" "),a("ul",[a("li",[t._v("Using memory that has been deallocated")]),t._v(" "),a("li",[t._v("Trying to write past the end of a C array or other kind of buffer")]),t._v(" "),a("li",[t._v("Using a pointer which has not been initialized")])]),t._v(" "),a("p",[t._v("In the Diagnostics section of the Scheme Editor, Xcode includes a few useful tools to help debug memory problems:")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://i.stack.imgur.com/HWABP.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"http://i.stack.imgur.com/HWABP.png",alt:"enter image description here"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("The Address Sanitizer adds lots of checks that will stop the app whenever memory problems occur and provide a helpful error message detailing exactly what happened.  Zombie Objects detects problems with deallocated Objective-C objects, but you shouldn't get these kinds of problems with Automatic Reference Counting turned on.")]),t._v(" "),a("h2",{attrs:{id:"finding-information-about-a-crash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#finding-information-about-a-crash"}},[t._v("#")]),t._v(" Finding information about a crash")]),t._v(" "),a("p",[t._v("When your app crashes, Xcode will enter the debugger and show you more information about the crash:")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://i.stack.imgur.com/q1VYY.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"http://i.stack.imgur.com/q1VYY.png",alt:"enter image description here"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("The most important parts are:")]),t._v(" "),a("h3",{attrs:{id:"the-red-arrow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-red-arrow"}},[t._v("#")]),t._v(" The red arrow")]),t._v(" "),a("p",[t._v("The red arrow displays which line of code crashed & why it crashed.")]),t._v(" "),a("h3",{attrs:{id:"the-debugger-console"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-debugger-console"}},[t._v("#")]),t._v(" The debugger console")]),t._v(" "),a("p",[t._v("Many crashes log more information to the debugger console.  It should automatically appear when the app crashes, but if it's not there, show the debugger by selecting the "),a("a",{attrs:{href:"http://i.stack.imgur.com/G8ahR.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"http://i.stack.imgur.com/G8ahR.png",alt:"enter image description here"}}),a("OutboundLink")],1),t._v(" button in the top-right corner of Xcode, and show the console by clicking the "),a("a",{attrs:{href:"http://i.stack.imgur.com/mZ51P.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"http://i.stack.imgur.com/mZ51P.png",alt:"enter image description here"}}),a("OutboundLink")],1),t._v(" button in the bottom-right corner of the debugger.")]),t._v(" "),a("h3",{attrs:{id:"the-stack-trace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-stack-trace"}},[t._v("#")]),t._v(" The stack trace")]),t._v(" "),a("p",[t._v("The stack trace lists the functions the program came from before it got to the code that crashed.")]),t._v(" "),a("p",[t._v("Part of the stack trace is displayed in the Debug Navigator on the left of the screen, and the debugger controls allow you to select a stack frame to view in the debugger:")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://i.stack.imgur.com/JaWFw.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"http://i.stack.imgur.com/JaWFw.png",alt:"enter image description here"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("If you enter the "),a("code",[t._v("bt")]),t._v(" command at the "),a("code",[t._v("(lldb)")]),t._v(" prompt in the debugger and press "),a("kbd",[t._v("return")]),t._v(", you will get a textual representation of the stack trace that you can copy and paste:")]),t._v(" "),a("div",{staticClass:"language-swift extra-class"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lldb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" bt\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" thread #"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x3aaec5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x00007fff91055f06")]),t._v(" libsystem_kernel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dylib`__pthread_kill "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" queue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'com.apple.main-thread'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stop reason "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" signal "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SIGABRT")]),t._v("\n    frame #"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x00007fff91055f06")]),t._v(" libsystem_kernel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dylib`__pthread_kill "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n    frame #"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x000000010008142d")]),t._v(" libsystem_pthread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dylib`pthread_kill "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),t._v("\n    frame #"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x00007fff96dc76e7")]),t._v(" libsystem_c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dylib`abort "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("129")]),t._v("\n    frame #"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x00007fff8973bf81")]),t._v(" libc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("abi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dylib`abort_message "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("257")]),t._v("\n    frame #"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x00007fff89761a47")]),t._v(" libc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("abi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dylib`"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("default_terminate_handler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("267")]),t._v("\n    frame #"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x00007fff94f636ae")]),t._v(" libobjc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dylib`"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_objc_terminate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("103")]),t._v("\n    frame #"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x00007fff8975f19e")]),t._v(" libc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("abi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dylib`std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__terminate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("void "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n    frame #"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x00007fff8975ec12")]),t._v(" libc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("abi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dylib`__cxa_throw "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("121")]),t._v("\n    frame #"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x00007fff94f6108c")]),t._v(" libobjc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dylib`objc_exception_throw "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("318")]),t._v("\n    frame #"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x00007fff8d067372")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("CoreFoundation")]),t._v("`"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("__NSPlaceholderArray initWithObjects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("290")]),t._v("\n    frame #"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x00007fff8d0eaa1f")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("CoreFoundation")]),t._v("`"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("NSArray")]),t._v(" arrayWithObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("47")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" frame #"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x0000000100001b54")]),t._v(" test`"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("argc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" argv"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x00007fff5fbff808")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("68")]),t._v(" at main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v("\n    frame #"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x00007fff8bea05ad")]),t._v(" libdyld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dylib`start "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    frame #"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x00007fff8bea05ad")]),t._v(" libdyld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dylib`start "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"debugging-sigabrt-and-exc-bad-instruction-crashes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#debugging-sigabrt-and-exc-bad-instruction-crashes"}},[t._v("#")]),t._v(" Debugging SIGABRT and EXC_BAD_INSTRUCTION crashes")]),t._v(" "),a("p",[t._v("A "),a("code",[t._v("SIGABRT")]),t._v(" or an EXC_BAD_INSTRUCTION usually means the app crashed itself intentionally because some check failed.  These should log a message to the debugger console with more information; check there for more information.")]),t._v(" "),a("p",[t._v("Many "),a("code",[t._v("SIGABRT")]),t._v("s are caused by uncaught Objective-C exceptions.  There are a "),a("strong",[t._v("lot")]),t._v(" of reasons exceptions can be thrown, and they will "),a("strong",[t._v("always")]),t._v(" log a lot of helpful information to the console.")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("NSInvalidArgumentException")]),t._v(", which means the app passed an invalid argument to a method")]),t._v(" "),a("li",[a("code",[t._v("NSRangeException")]),t._v(", which means the app tried to access an out-of-bounds index of an object such as an "),a("code",[t._v("NSArray")]),t._v(" or an "),a("code",[t._v("NSString")])]),t._v(" "),a("li",[a("code",[t._v("NSInternalInconsistencyException")]),t._v(" means an object discovered it was in an unexpected state.")]),t._v(" "),a("li",[a("code",[t._v("NSUnknownKeyException")]),t._v(" usually means you have a bad connection in an XIB.  Try some of the answers to "),a("a",{attrs:{href:"http://stackoverflow.com/questions/3088059/what-does-this-mean-nsunknownkeyexception-reason-this-class-is-not-key-v",target:"_blank",rel:"noopener noreferrer"}},[t._v("this question"),a("OutboundLink")],1),t._v(".")])])])}),[],!1,null,null,null);e.default=n.exports}}]);