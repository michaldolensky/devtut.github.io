(window.webpackJsonp=window.webpackJsonp||[]).push([[2824],{3170:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"the-pass-statement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-pass-statement"}},[t._v("#")]),t._v(" The pass statement")]),t._v(" "),a("h2",{attrs:{id:"ignore-an-exception"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ignore-an-exception"}},[t._v("#")]),t._v(" Ignore an exception")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    metadata "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" metadata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'properties'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" KeyError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"create-a-new-exception-that-can-be-caught"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-new-exception-that-can-be-caught"}},[t._v("#")]),t._v(" Create a new Exception that can be caught")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CompileError")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Exception"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n\n")])])]),a("h4",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("ul",[a("li",[t._v("pass")])]),t._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),a("p",[t._v("Why would you ever want to tell the interpreter to explicitly do nothing?\nPython has the syntactical requirement that code blocks (after "),a("code",[t._v("if")]),t._v(", "),a("code",[t._v("except")]),t._v(", "),a("code",[t._v("def")]),t._v(", "),a("code",[t._v("class")]),t._v(" etc.) cannot be empty.")]),t._v(" "),a("p",[t._v("But sometimes an empty code block is useful in itself. An empty "),a("code",[t._v("class")]),t._v(" block can definine a new, different class, such as exception that can be caught. An empty "),a("code",[t._v("except")]),t._v(" block can be the simplest way to express “ask for forgiveness later” if there was nothing to ask for forgiveness for. If an iterator does all the heavy lifting, an empty "),a("code",[t._v("for")]),t._v(" loop to just run the iterator can be useful.")]),t._v(" "),a("p",[t._v("Therefore, if nothing is supposed to happen in a code block, a "),a("code",[t._v("pass")]),t._v(" is needed for such a block to not produce an "),a("code",[t._v("IndentationError")]),t._v(". Alternatively, any statement (including just a term to be evaluated, like the "),a("code",[t._v("Ellipsis")]),t._v(" literal "),a("code",[t._v("...")]),t._v(" or a string, most often a docstring) can be used, but the "),a("code",[t._v("pass")]),t._v(" makes clear that indeed nothing is supposed to happen, and does not need to be actually evaluated and (at least temporarily) stored in memory. Here is a small annotated collection of the most frequent uses of "),a("code",[t._v("pass")]),t._v(" that crossed my way – together with some comments on good and bad pratice.")]),t._v(" "),a("li",[t._v("\nIgnoring (all or) a certain type of `Exception` (example from `xml`):\n"),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n     self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("version "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Expat %d.%d.%d"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" expat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("version_info\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" AttributeError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# unknown")]),t._v("\n\n")])])]),a("p",[a("strong",[t._v("Note:")]),t._v(" Ignoring all types of raises, as in the following example from "),a("code",[t._v("pandas")]),t._v(", is generally considered bad practice, because it also catches exceptions that should probably be passed on to the caller, e.g. "),a("code",[t._v("KeyboardInterrupt")]),t._v(" or "),a("code",[t._v("SystemExit")]),t._v(" (or even "),a("code",[t._v("HardwareIsOnFireError")]),t._v(" – How do you  know you aren't running on a custom box with specific errors defined, which some calling application would want to know about?).")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n     os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("unlink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filename_larry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n\n")])])]),a("p",[t._v("Instead using at least "),a("code",[t._v("except Error:")]),t._v(" or in this case preferably "),a("code",[t._v("except OSError:")]),t._v(" is considered much better practice. A quick analysis of all python modules I have installed gave me that more than 10% of all "),a("code",[t._v("except ...: pass")]),t._v(" statements catch all exceptions, so it's still a frequent pattern in python programming.\n")])]),t._v(" "),a("li",[t._v("\nDeriving an exception class that does not add new behaviour (e.g. in "),a("code",[t._v("scipy")]),t._v("):"),a("p"),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CompileError")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Exception"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n\n")])])]),a("p",[t._v("Similarly, classes intended as abstract base class often have an explicit empty "),a("code",[t._v("__init__")]),t._v(" or other methods that subclasses are supposed to derive. (e.g. "),a("code",[t._v("pebl")]),t._v(")")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("_BaseSubmittingController")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_BaseController"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("submit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tasks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("retrieve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" deferred_results"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n\n")])])])]),t._v(" "),a("li",[t._v("\nTesting that code runs properly for a few test values, without caring about the results (from `mpmath`):\n"),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" MDNewton"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" verbose"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                          norm"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("lambda")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" norm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n\n")])])])]),t._v(" "),a("li",[t._v("\nIn class or function definitions, often a docstring is already in place as the **obligatory statement** to be executed as the only thing in the block. In such cases, the block may contain `pass` **in addition** to the docstring in order to say “This is indeed intended to do nothing.”, for example in `pebl`:\n"),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ParsingError")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Exception"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n     "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""Error encountered while parsing an ill-formed datafile."""')]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n\n")])])])]),t._v(" "),a("li",[a("p",[t._v("In some cases, `pass` is used as a placeholder to say “This method/class/if-block/... has not been implemented yet, but this will be the place to do it”, although I personally prefer the `Ellipsis` literal `...` (NOTE: python-3 only) in order to strictly differentiate between this and the intentional “no-op” in the previous example.\nFor example, if I write a model in broad strokes, I might write")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("update_agent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("agent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" \n\n")])])]),a("p",[t._v("where others might have")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("update_agent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("agent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n\n")])])]),a("p",[t._v("before")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("time_step")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("agents"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" agent "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" agents"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n         update_agent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("agent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("as a reminder to fill in the "),a("code",[t._v("update_agent")]),t._v(" function at a later point, but run some tests already to see if the rest of the code behaves as intended. (A third option for this case is "),a("code",[t._v("raise NotImplementedError")]),t._v(". This is useful in particular for two cases: Either "),a("strong",[t._v("“This abstract method should be implemented by every subclass, there is no generic way to define it in this base class”")]),t._v(", or "),a("strong",[t._v("“This function, with this name, is not yet implemented in this release, but this is what its signature will look like”")]),t._v(")\n")])]),a("p")])}),[],!1,null,null,null);s.default=n.exports}}]);