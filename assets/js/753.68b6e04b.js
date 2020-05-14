(window.webpackJsonp=window.webpackJsonp||[]).push([[753],{1100:function(t,e,s){"use strict";s.r(e);var a=s(19),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"value-categories"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#value-categories"}},[t._v("#")]),t._v(" Value Categories")]),t._v(" "),s("h2",{attrs:{id:"value-category-meanings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#value-category-meanings"}},[t._v("#")]),t._v(" Value Category Meanings")]),t._v(" "),s("p",[t._v("Expressions in C++ are assigned a particular value category, based on the result of those expressions. Value categories for expressions can affect C++ function overload resolution.")]),t._v(" "),s("p",[t._v("Value categories determines two important-but-separate properties about an expression. One property is whether the expression has identity. An expression has identity if it refers to an object that has a variable name. The variable name may not be involved in the expression, but the object can still have one.")]),t._v(" "),s("p",[t._v("The other property is whether it is legal to implicitly move from the expression's value. Or more specifically, whether the expression, when used as a function parameter, will bind to r-value parameter types or not.")]),t._v(" "),s("p",[t._v("C++ defines 3 value categories which represent the useful combination of these properties: lvalue (expressions with identity but not movable from), xvalue (expressions with identity that are moveable from), and prvalue (expressions without identity that are moveable from). C++ does not have expressions which have no identity and cannot be moved from.")]),t._v(" "),s("p",[t._v("C++ defines two other value categories, each based solely on one of these properties: glvalue (expressions with identity) and rvalue (expressions that can be moved from). These act as useful groupings of the prior categories.")]),t._v(" "),s("p",[t._v("This graph serves as an illustration:")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://i.stack.imgur.com/C09fH.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"http://i.stack.imgur.com/C09fH.png",alt:"Graph of value categories in the C++ language"}}),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"rvalue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rvalue"}},[t._v("#")]),t._v(" rvalue")]),t._v(" "),s("p",[t._v("An rvalue expression is any expression which can be implicitly moved from, regardless of whether it has identity.")]),t._v(" "),s("p",[t._v("More precisely, rvalue expressions may be used as the argument to a function that takes a parameter of type "),s("code",[t._v("T &&")]),t._v(" (where "),s("code",[t._v("T")]),t._v(" is the type of "),s("code",[t._v("expr")]),t._v("). "),s("strong",[t._v("Only")]),t._v(" rvalue expressions may be given as arguments to such function parameters; if a non-rvalue expression is used, then overload resolution will pick any function that does not use an rvalue reference parameter. And if none exist, then you get an error.")]),t._v(" "),s("p",[t._v("The category of rvalue expressions includes all xvalue and prvalue expressions, and only those expressions.")]),t._v(" "),s("p",[t._v("The standard library function "),s("code",[t._v("std::move")]),t._v(" exists to explicitly transform a non-rvalue expression into an rvalue. More specifically, it turns the expression into an xvalue, since even if it was an identity-less prvalue expression before, by passing it as a parameter to "),s("code",[t._v("std::move")]),t._v(", it gains identity (the function's parameter name) and becomes an xvalue.")]),t._v(" "),s("p",[t._v("Consider the following:")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("std"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("string "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"init"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1")]),t._v("\nstd"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("string "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2")]),t._v("\nstd"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("string "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("std"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("move")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//3")]),t._v("\n\nstr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" std"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"new value"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//4 ")]),t._v("\nstd"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("string "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("str_ref "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" std"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("move")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//5")]),t._v("\nstd"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("string "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str_ref"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//6")]),t._v("\n\n")])])]),s("p",[s("code",[t._v("std::string")]),t._v(" has a constructor which takes a single parameter of type "),s("code",[t._v("std::string&&")]),t._v(', commonly called a "move constructor". However, the value category of the expression '),s("code",[t._v("str")]),t._v(" is not an rvalue (specifically it is an lvalue), so it cannot call that constructor overload. Instead, it calls the "),s("code",[t._v("const std::string&")]),t._v(" overload, the copy constructor.")]),t._v(" "),s("p",[t._v("Line 3 changes things. The return value of "),s("code",[t._v("std::move")]),t._v(" is a "),s("code",[t._v("T&&")]),t._v(", where "),s("code",[t._v("T")]),t._v(" is the base type of the parameter passed in. So "),s("code",[t._v("std::move(str)")]),t._v(" returns "),s("code",[t._v("std::string&&")]),t._v(". A function call who's return value is an rvalue reference is an rvalue expression (specifically an xvalue), so it may call the move constructor of "),s("code",[t._v("std::string")]),t._v(". After line 3, "),s("code",[t._v("str")]),t._v(" has been moved from (who's contents are now undefined).")]),t._v(" "),s("p",[t._v("Line 4 passes a temporary to the assignment operator of "),s("code",[t._v("std::string")]),t._v(". This has an overload which takes a "),s("code",[t._v("std::string&&")]),t._v(". The expression "),s("code",[t._v('std::string("new value")')]),t._v(" is an rvalue expression (specifically a prvalue), so it may call that overload. Thus, the temporary is moved into "),s("code",[t._v("str")]),t._v(", replacing the undefined contents with specific contents.")]),t._v(" "),s("p",[t._v("Line 5 creates a named rvalue reference called "),s("code",[t._v("str_ref")]),t._v(" that refers to "),s("code",[t._v("str")]),t._v(". This is where value categories get confusing.")]),t._v(" "),s("p",[t._v("See, while "),s("code",[t._v("str_ref")]),t._v(" is an rvalue reference to "),s("code",[t._v("std::string")]),t._v(", the value category of the expression "),s("code",[t._v("str_ref")]),t._v(" "),s("strong",[t._v("is not an rvalue")]),t._v(". It is an lvalue expression. Yes, really. Because of this, one cannot call the move constructor of "),s("code",[t._v("std::string")]),t._v(" with the expression "),s("code",[t._v("str_ref")]),t._v(". Line 6 therefore "),s("strong",[t._v("copies")]),t._v(" the value of "),s("code",[t._v("str")]),t._v(" into "),s("code",[t._v("test3")]),t._v(".")]),t._v(" "),s("p",[t._v("To move it, we would have to employ "),s("code",[t._v("std::move")]),t._v(" again.")]),t._v(" "),s("h2",{attrs:{id:"xvalue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xvalue"}},[t._v("#")]),t._v(" xvalue")]),t._v(" "),s("p",[t._v('An xvalue (eXpiring value) expression is an expression which has identity and represents an object which can be implicitly moved from. The general idea with xvalue expressions is that the object they represent is going to be destroyed soon (hence the "eXpiring" part), and therefore implicitly moving from them is fine.')]),t._v(" "),s("p",[t._v("Given:")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("X")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extern")]),t._v(" X x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// prvalue: does not have an identity")]),t._v("\nx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// lvalue")]),t._v("\nx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// lvalue")]),t._v("\nstd"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("move")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// xvalue")]),t._v("\nstd"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("forward"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("X"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// lvalue")]),t._v("\nX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// prvalue: does not have an identity")]),t._v("\nX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("              "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// xvalue: does have an identity and denotes resources")]),t._v("\n                     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// that can be reused")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"prvalue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prvalue"}},[t._v("#")]),t._v(" prvalue")]),t._v(" "),s("p",[t._v("A prvalue (pure-rvalue) expression is an expression which lacks identity, whose evaluation is typically used to initialize an object, and which can be implicitly moved from. These include, but are not limited to:")]),t._v(" "),s("ul",[s("li",[t._v("Expressions that represent temporary objects, such as "),s("code",[t._v('std::string("123")')]),t._v(".")]),t._v(" "),s("li",[t._v("A function call expression that does not return a reference")]),t._v(" "),s("li",[t._v("A literal ("),s("strong",[t._v("except")]),t._v(" a string literal - those are lvalues), such has "),s("code",[t._v("1")]),t._v(", "),s("code",[t._v("true")]),t._v(", "),s("code",[t._v("0.5f")]),t._v(", or "),s("code",[t._v("'a'")])]),t._v(" "),s("li",[t._v("A lambda expression")])]),t._v(" "),s("p",[t._v("The built-in addressof operator ("),s("code",[t._v("&")]),t._v(") cannot be applied on these expressions.")]),t._v(" "),s("h2",{attrs:{id:"lvalue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lvalue"}},[t._v("#")]),t._v(" lvalue")]),t._v(" "),s("p",[t._v("An lvalue expression is an expression which has identity, but cannot be implicitly moved from. Among these are expressions that consist of a variable name, function name, expressions that are built-in dereference operator uses and expressions that refer to lvalue references.")]),t._v(" "),s("p",[t._v("The typical lvalue is simply a name, but lvalues can come in other flavors as well:")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("X")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nX x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// x is an lvalue")]),t._v("\nX"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" px "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// px is an lvalue")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("px "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" X"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// *px is also an lvalue, X{} is a prvalue")]),t._v("\n\nX"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo_ptr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// foo_ptr() is a prvalue")]),t._v("\nX"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo_ref")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// foo_ref() is an lvalue")]),t._v("\n\n")])])]),s("p",[t._v("Additionally, while most literals (e.g. "),s("code",[t._v("4")]),t._v(", "),s("code",[t._v("'x'")]),t._v(", etc.) are prvalues, string literals are lvalues.")]),t._v(" "),s("h2",{attrs:{id:"glvalue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#glvalue"}},[t._v("#")]),t._v(" glvalue")]),t._v(" "),s("p",[t._v('A glvalue (a "generalized lvalue") expression is any expression which has identity, regardless of whether it can be moved from or not. This category includes lvalues (expressions that have identity but can\'t be moved from) and xvalues (expressions that have identity, and can be moved from), but excludes prvalues (expressions without identity).')]),t._v(" "),s("p",[t._v("If an expression has a "),s("strong",[t._v("name")]),t._v(", it's a glvalue:")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("X")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nX "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nX x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// has a name, so it's a glvalue")]),t._v("\nstd"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("move")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// has a name (we're moving from \"x\"), so it's a glvalue")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// can be moved from, so it's an xvalue not an lvalue")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// has no name, so is a prvalue, not a glvalue")]),t._v("\nX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// temporary has no name, so is a prvalue, not a glvalue")]),t._v("\nX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// HAS a name, so is a glvalue. can be moved from, so it's an xvalue")]),t._v("\n\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);