(window.webpackJsonp=window.webpackJsonp||[]).push([[3347],{3693:function(t,e,a){"use strict";a.r(e);var s=a(19),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"performance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#performance"}},[t._v("#")]),t._v(" Performance")]),t._v(" "),a("h2",{attrs:{id:"allocation-performance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#allocation-performance"}},[t._v("#")]),t._v(" Allocation Performance")]),t._v(" "),a("p",[t._v("In Swift, memory management is done for you automatically using Automatic Reference Counting. (See "),a("a",{attrs:{href:"http://stackoverflow.com/documentation/swift/745/memory-management",target:"_blank",rel:"noopener noreferrer"}},[t._v("Memory Management"),a("OutboundLink")],1),t._v(") Allocation is the process of reserving a spot in memory for an object, and in Swift understanding the performance of such requires some understanding of the "),a("strong",[t._v("heap")]),t._v(" and the "),a("strong",[t._v("stack")]),t._v(". The heap is a memory location where most objects get placed, and you may think of it as a storage shed. The stack, on the other hand, is a call stack of functions that have led to the current execution. (Hence, a stack trace is a sort of printout of the functions on the call stack.)")]),t._v(" "),a("p",[t._v("Allocating and deallocating from the stack is a very efficient operation, however in comparison heap allocation is costly. When designing for performance, you should keep this in mind.")]),t._v(" "),a("p",[t._v("Classes:")]),t._v(" "),a("div",{staticClass:"language-swift extra-class"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyClass")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" myProperty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("Classes in Swift are reference types and therefore several things happen. First, the actual object will be allocated onto the heap. Then, any references to that object must be added to the stack. This makes classes a more expensive object for allocation.")]),t._v(" "),a("p",[t._v("Structs:")]),t._v(" "),a("div",{staticClass:"language-swift extra-class"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("MyStruct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" myProperty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("Because structs are value types and therefore copied when passed around, they are allocated on the stack. This makes structs more efficient than classes, however, if you do need a notion of identity and/or reference semantics, a struct cannot provide you with those things.")]),t._v(" "),a("h3",{attrs:{id:"warning-about-structs-with-strings-and-properties-that-are-classes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#warning-about-structs-with-strings-and-properties-that-are-classes"}},[t._v("#")]),t._v(" Warning about structs with Strings and properties that are classes")]),t._v(" "),a("p",[t._v("While structs are generally cheeper than  classes, you should be careful about structs with properties that are classes:")]),t._v(" "),a("div",{staticClass:"language-swift extra-class"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("MyStruct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" myProperty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("MyClass")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("Here, due to reference counting and other factors, the performance is now more similar to a class. Further, if more than one property in the struct is a class, the performance impact may be even more negative than if the struct were a class instead.")]),t._v(" "),a("p",[t._v("Also, while Strings are structs, they internally store their characters on the heap, so are more expensive than most structs.")])])}),[],!1,null,null,null);e.default=n.exports}}]);