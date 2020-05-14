(window.webpackJsonp=window.webpackJsonp||[]).push([[1185],{1530:function(a,t,s){"use strict";s.r(t);var e=s(19),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"function-call-syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#function-call-syntax"}},[a._v("#")]),a._v(" Function call syntax")]),a._v(" "),s("p",[a._v("Haskell's function call syntax, explained with comparisons to C-style languages where applicable. This is aimed at people who are coming to Haskell from a background in C-style languages.")]),a._v(" "),s("h2",{attrs:{id:"parentheses-in-a-basic-function-call"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parentheses-in-a-basic-function-call"}},[a._v("#")]),a._v(" Parentheses in a basic function call")]),a._v(" "),s("p",[a._v("For a C-style function call, e.g.")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("plus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("//")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Parentheses")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("surrounding")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("only")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("the")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("arguments")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("comma")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("separated")]),a._v("\n\n")])])]),s("p",[a._v("Then the equivalent Haskell code will be")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("plus")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("-- Parentheses surrounding the function and the arguments, no commas")]),a._v("\n\n")])])]),s("p",[a._v("In Haskell, parentheses are not explicitly required for function application, and are only used to disambiguate expressions, like in mathematics; so in cases where the brackets surround all the text in the expression, the parentheses are actually not needed, and the following is also equivalent:")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("plus")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("b")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("-- no parentheses are needed here!")]),a._v("\n\n")])])]),s("p",[a._v("It is important to remember that while in C-style languages, the function")]),a._v(" "),s("h2",{attrs:{id:"parentheses-in-embedded-function-calls"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parentheses-in-embedded-function-calls"}},[a._v("#")]),a._v(" Parentheses in embedded function calls")]),a._v(" "),s("p",[a._v("In the previous example, we didn't end up needing the parentheses, because they did not affect the meaning of the statement. However, they are often necessary in more complex expression, like the one below."),s("br"),a._v("\nIn C:")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("plus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("take")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("c")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n")])])]),s("p",[a._v("In Haskell this becomes:")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("plus")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("take")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("b")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("c")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("-- or equivalently, omitting the outermost parentheses")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("plus")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("take")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("b")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("c")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n")])])]),s("p",[a._v("Note, that this is not equivalent to:")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("plus")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("take")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("b")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("c")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("-- Not what we want!")]),a._v("\n\n")])])]),s("p",[a._v("One might think that because the compiler knows that "),s("code",[a._v("take")]),a._v(" is a function, it would be able to know that you want to apply it to the arguments "),s("code",[a._v("b")]),a._v(" and "),s("code",[a._v("c")]),a._v(", and pass its result to "),s("code",[a._v("plus")]),a._v("."),s("br"),a._v("\nHowever, in Haskell, functions often take other functions as arguments, and little actual distinction is made between functions and other values; and so the compiler cannot assume your intention simply because "),s("code",[a._v("take")]),a._v(" is a function.")]),a._v(" "),s("p",[a._v("And so, the last example is analogous to the following C function call:")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("plus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("take")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("c")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("//")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Not")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("what")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("we")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("want")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("\n\n")])])]),s("h2",{attrs:{id:"partial-application-part-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#partial-application-part-1"}},[a._v("#")]),a._v(" Partial application - Part 1")]),a._v(" "),s("p",[a._v("In Haskell, functions can be partially applied; we can think of all functions as taking a single argument, and returning a modified function for which that argument is constant. To illustrate this, we can bracket functions as follows:")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("plus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n")])])]),s("p",[a._v("Here, the function "),s("code",[a._v("(plus)")]),a._v(" is applied to "),s("code",[a._v("1")]),a._v(" yielding the function "),s("code",[a._v("((plus) 1)")]),a._v(", which is applied to "),s("code",[a._v("2")]),a._v(", yielding the function "),s("code",[a._v("(((plus) 1) 2)")]),a._v(". Because "),s("code",[a._v("plus 1 2")]),a._v(" is a function which takes no arguments, you can consider it a plain value; however in Haskell, there is little distinction between functions and values.")]),a._v(" "),s("p",[a._v("To go into more detail, the function "),s("code",[a._v("plus")]),a._v(" is a function that adds its arguments."),s("br"),a._v("\nThe function "),s("code",[a._v("plus 1")]),a._v(" is a function that adds "),s("code",[a._v("1")]),a._v(" to its argument."),s("br"),a._v("\nThe function "),s("code",[a._v("plus 1 2")]),a._v(" is a function that adds "),s("code",[a._v("1")]),a._v(" to "),s("code",[a._v("2")]),a._v(", which is always the value "),s("code",[a._v("3")]),a._v(".")]),a._v(" "),s("h2",{attrs:{id:"partial-application-part-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#partial-application-part-2"}},[a._v("#")]),a._v(" Partial application - Part 2")]),a._v(" "),s("p",[a._v("As another example, we have the function "),s("code",[a._v("map")]),a._v(", which takes a function and a list of values, and applies the function to each value of the list:")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("map")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n")])])]),s("p",[a._v("Let's say we want to increment each value in a list. You may decide to define your own function, which adds one to its argument, and "),s("code",[a._v("map")]),a._v(" that function over your list")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("addOne")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("x")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("plus")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("x")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("map")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("addOne")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n")])])]),s("p",[a._v("but if you have another look at "),s("code",[a._v("addOne")]),a._v("'s definition, with parentheses added for emphasis:")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("addOne")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("x")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("plus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("x")]),a._v("\n\n")])])]),s("p",[a._v("The function "),s("code",[a._v("addOne")]),a._v(", when applied to any value "),s("code",[a._v("x")]),a._v(", is the same as the partially applied function "),s("code",[a._v("plus 1")]),a._v(" applied to "),s("code",[a._v("x")]),a._v(". This means the functions "),s("code",[a._v("addOne")]),a._v(" and "),s("code",[a._v("plus 1")]),a._v(" are identical, and we can avoid defining a new function by just replacing "),s("code",[a._v("addOne")]),a._v(" with "),s("code",[a._v("plus 1")]),a._v(", remembering to use parentheses to isolate "),s("code",[a._v("plus 1")]),a._v(" as a subexpression:")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("map")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("plus")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n")])])]),s("h4",{attrs:{id:"remarks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[a._v("#")]),a._v(" Remarks")]),a._v(" "),s("p",[a._v("In general, the rule for converting a C-style function call to Haskell, in any context (assignment, return, or embedded in another call), is to replace the commas in the C-style argument list with whitespace, and move the opening parenthesis from the C-style call to contain the function name and its parameters.")]),a._v(" "),s("p",[a._v("If any expressions are wrapped entirely in parentheses, these (external) pairs of parentheses can be removed for readability, as they do not affect the meaning of the expression."),s("br"),a._v("\nThere are some other circumstances where parentheses can be removed, but this only affects readability and maintainability.")])])}),[],!1,null,null,null);t.default=n.exports}}]);