(window.webpackJsonp=window.webpackJsonp||[]).push([[1703],{2048:function(t,a,e){"use strict";e.r(a);var s=e(19),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"async-iterators"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#async-iterators"}},[t._v("#")]),t._v(" Async Iterators")]),t._v(" "),e("p",[t._v("An "),e("code",[t._v("async")]),t._v(" function is one that returns a promise. "),e("code",[t._v("await")]),t._v(" yields to the caller until the promise resolves and then continues with the result.")]),t._v(" "),e("p",[t._v("An iterator allows the collection to be looped through with a "),e("code",[t._v("for-of")]),t._v(" loop.")]),t._v(" "),e("p",[t._v("An async iterator is a collection where each iteration is a promise which can be awaited using a "),e("code",[t._v("for-await-of")]),t._v(" loop.")]),t._v(" "),e("p",[t._v("Async iterators are a "),e("a",{attrs:{href:"https://github.com/tc39/proposal-async-iteration",target:"_blank",rel:"noopener noreferrer"}},[t._v("stage 3 proposal"),e("OutboundLink")],1),t._v(". They are in Chrome Canary 60 with "),e("code",[t._v("--harmony-async-iteration")])]),t._v(" "),e("h2",{attrs:{id:"basics"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#basics"}},[t._v("#")]),t._v(" Basics")]),t._v(" "),e("p",[t._v("A JavaScript "),e("code",[t._v("Iterator")]),t._v(" is an object with a "),e("code",[t._v(".next()")]),t._v(" method, which returns an "),e("code",[t._v("IteratorItem")]),t._v(", which is an object with "),e("code",[t._v("value : <any>")]),t._v(" and "),e("code",[t._v("done : <boolean>")]),t._v(".")]),t._v(" "),e("p",[t._v("A JavaScript "),e("code",[t._v("AsyncIterator")]),t._v(" is an object with a "),e("code",[t._v(".next()")]),t._v(" method, which returns a "),e("code",[t._v("Promise<IteratorItem>")]),t._v(", a "),e("strong",[t._v("promise")]),t._v(" for the next value.")]),t._v(" "),e("p",[t._v("To create an AsyncIterator, we can use the "),e("strong",[t._v("async generator")]),t._v(" syntax:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Returns a promise which resolves after time had passed.\n */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("delay")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("time")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resolve"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" time"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("delayedRange")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("max")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" max"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("delay")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" i"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),e("p",[t._v("The "),e("code",[t._v("delayedRange")]),t._v(" function will take a maximum number, and returns an "),e("code",[t._v("AsyncIterator")]),t._v(", which yields numbers from 0 to that number, in 1 second intervals.")]),t._v(" "),e("p",[t._v("Usage:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" number "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("delayedRange")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("number"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),e("p",[t._v("The "),e("code",[t._v("for await of")]),t._v(" loop is another piece of new syntax, available only inside of async functions, as well as async generators. Inside the loop, the values yielded (which, remember, are Promises) are unwrapped, so the Promise is hidden away. Within the loop, you can deal with the direct values (the yielded numbers), the "),e("code",[t._v("for await of")]),t._v(" loop will wait for the Promises on your behalf.")]),t._v(" "),e("p",[t._v("The above example will wait 1 second, log 0, wait another second, log 1, and so on, until it logs 9. At which point the "),e("code",[t._v("AsyncIterator")]),t._v(" will be "),e("code",[t._v("done")]),t._v(", and the "),e("code",[t._v("for await of")]),t._v(" loop will exit.")]),t._v(" "),e("h4",{attrs:{id:"syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),e("ul",[e("li",[t._v("async function* asyncGenerator() {}")]),t._v(" "),e("li",[t._v("yield await asyncOperationWhichReturnsAPromise();")]),t._v(" "),e("li",[t._v("for await (let result of asyncGenerator()) { /* result is the resolved value from the promise */ }")])]),t._v(" "),e("h4",{attrs:{id:"remarks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),e("p",[t._v("An async iterator is a "),e("strong",[t._v("declarative pull stream")]),t._v(" as opposed to an Observable's declarative "),e("strong",[t._v("push")]),t._v(" stream.")]),t._v(" "),e("h3",{attrs:{id:"useful-links"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#useful-links"}},[t._v("#")]),t._v(" Useful Links")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/tc39/proposal-async-iteration",target:"_blank",rel:"noopener noreferrer"}},[t._v("Async Iteration spec proposal"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://jakearchibald.com/2017/async-iterators-and-generators/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Introduction to their use"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/KeithHenry/event-generator",target:"_blank",rel:"noopener noreferrer"}},[t._v("Event subscription proof of concept"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);