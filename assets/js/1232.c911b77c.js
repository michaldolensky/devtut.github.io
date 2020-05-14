(window.webpackJsonp=window.webpackJsonp||[]).push([[1232],{1579:function(a,t,s){"use strict";s.r(t);var e=s(19),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"type-application"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#type-application"}},[a._v("#")]),a._v(" Type Application")]),a._v(" "),s("p",[s("code",[a._v("TypeApplications")]),a._v(" are an alternative to type "),s("strong",[a._v("annotations")]),a._v(" when the compiler struggles to infer types for a given expression.")]),a._v(" "),s("p",[a._v("This series of examples will explain the purpose of the "),s("code",[a._v("TypeApplications")]),a._v(" extension and how to use it")]),a._v(" "),s("p",[a._v("Don't forget to enable the extension by placing "),s("code",[a._v("{-# LANGUAGE TypeApplications #-}")]),a._v(" at the top of your source file.")]),a._v(" "),s("h2",{attrs:{id:"avoiding-type-annotations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#avoiding-type-annotations"}},[a._v("#")]),a._v(" Avoiding type annotations")]),a._v(" "),s("p",[a._v("We use type annotations to avoid ambiguity. Type applications can be used for the same purpose. For example")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("x")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Num")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("x")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("main")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("IO")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("main")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("print")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("x")]),a._v("\n\n")])])]),s("p",[a._v("This code has an ambiguity error. We know that "),s("code",[a._v("a")]),a._v(" has a "),s("code",[a._v("Num")]),a._v(" instance, and in order to print it we know it needs a "),s("code",[a._v("Show")]),a._v(" instance. This could work if "),s("code",[a._v("a")]),a._v(" was, for example, an "),s("code",[a._v("Int")]),a._v(", so to fix the error we can add a type annotation")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("main")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("print")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("x")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n")])])]),s("p",[a._v("Another solution using type applications would look like this")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("main")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("print")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("@")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("x")]),a._v("\n\n")])])]),s("p",[a._v("To understand what this means we need to look at the type signature of "),s("code",[a._v("print")]),a._v(".")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("print")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Show")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("IO")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n")])])]),s("p",[a._v("The function takes one parameter of type "),s("code",[a._v("a")]),a._v(", but another way to look at it is that it actually takes two parameters. The first one is a "),s("strong",[a._v("type")]),a._v(" parameter, the second one is a value whose type is the first parameter.")]),a._v(" "),s("p",[a._v("The main difference between value parameters and the type parameters is that the latter ones are implicitly provided to functions when we call them. Who provides them? The type inference algorithm! What "),s("code",[a._v("TypeApplications")]),a._v(" let us do is give those type parameters explicitly. This is especially useful when the type inference can't determine the correct type.")]),a._v(" "),s("p",[a._v("So to break down the above example")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("print")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Show")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("IO")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("print")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("@")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("IO")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("print")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("@")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("x")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("IO")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n")])])]),s("h2",{attrs:{id:"type-applications-in-other-languages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#type-applications-in-other-languages"}},[a._v("#")]),a._v(" Type applications in other languages")]),a._v(" "),s("p",[a._v("If you're familiar with languages like Java, C# or C++ and the concept of generics/templates then this comparison might be useful for you.")]),a._v(" "),s("p",[a._v("Say we have a generic function in C#")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("T")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("DoNothing")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("T")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("T")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n")])])]),s("p",[a._v("To call this function with a "),s("code",[a._v("float")]),a._v(" we can do "),s("code",[a._v("DoNothing(5.0f)")]),a._v(" or if we want to be explicit we can say "),s("code",[a._v("DoNothing<float>(5.0f)")]),a._v(". That part inside of the angle brackets is the type application.")]),a._v(" "),s("p",[a._v("In Haskell it's the same, except that the type parameters are not only implicit at call sites but also at definition sites.")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("doNothing")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("doNothing")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("x")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("x")]),a._v("\n\n")])])]),s("p",[a._v("This can also be made explicit using either "),s("code",[a._v("ScopedTypeVariables")]),a._v(", "),s("code",[a._v("Rank2Types")]),a._v(" or "),s("code",[a._v("RankNTypes")]),a._v(" extensions like this.")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("doNothing")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("forall")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("doNothing")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("x")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("x")]),a._v("\n\n")])])]),s("p",[a._v("Then at the call site we can again either write "),s("code",[a._v("doNothing 5.0")]),a._v(" or "),s("code",[a._v("doNothing @Float 5.0")])]),a._v(" "),s("h2",{attrs:{id:"order-of-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#order-of-parameters"}},[a._v("#")]),a._v(" Order of parameters")]),a._v(" "),s("p",[a._v("The problem with type arguments being implicit becomes obvious once we have more than one. Which order do they come in?")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("const")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("b")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v("\n\n")])])]),s("p",[a._v("Does writing "),s("code",[a._v("const @Int")]),a._v(" mean "),s("code",[a._v("a")]),a._v(" is equal to "),s("code",[a._v("Int")]),a._v(", or is it "),s("code",[a._v("b")]),a._v("?\nIn case we explicitly state the type parameters using a "),s("code",[a._v("forall")]),a._v(" like "),s("code",[a._v("const :: forall a b. a -> b -> a")]),a._v(" then the order is as written: "),s("code",[a._v("a")]),a._v(", then "),s("code",[a._v("b")]),a._v(".")]),a._v(" "),s("p",[a._v("If we don't, then the order of variables is from left to right. The first variable to be mentioned is the first type parameter, the second is the second type parameter and so on.")]),a._v(" "),s("p",[a._v("What if we want to specify the second type variable, but not the first? We can use a wildcard for the first variable like this")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("const")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("@")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("_")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("@")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Int")]),a._v("\n\n")])])]),s("p",[a._v("The type of this expression is")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("const")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("@")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("_")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("@")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v("\n\n")])])]),s("h2",{attrs:{id:"interaction-with-ambiguous-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#interaction-with-ambiguous-types"}},[a._v("#")]),a._v(" Interaction with ambiguous types")]),a._v(" "),s("p",[a._v("Say you're introducing a class of types that have a size in bytes.")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("SizeOf")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("where")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("sizeOf")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Int")]),a._v("\n\n")])])]),s("p",[a._v("The problem is that the size should be constant for every value of that type. We don't actually want the "),s("code",[a._v("sizeOf")]),a._v(" function to depend on "),s("code",[a._v("a")]),a._v(", but only on it's type.")]),a._v(" "),s("p",[a._v("Without type applications, the best solution we had was the "),s("code",[a._v("Proxy")]),a._v(" type defined like this")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("data")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Proxy")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Proxy")]),a._v("\n\n")])])]),s("p",[a._v("The purpose of this type is to carry type information, but no value information. Then our class could look like this")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("SizeOf")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("where")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("sizeOf")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Proxy")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Int")]),a._v("\n\n")])])]),s("p",[a._v("Now you might be wondering, why not drop the first argument altogether? The type of our function would then just be "),s("code",[a._v("sizeOf :: Int")]),a._v(" or, to be more precise because it is a method of a class, "),s("code",[a._v("sizeOf :: SizeOf a => Int")]),a._v(" or to be even more explicit "),s("code",[a._v("sizeOf :: forall a. SizeOf a => Int")]),a._v(".")]),a._v(" "),s("p",[a._v("The problem is type inference. If I write "),s("code",[a._v("sizeOf")]),a._v(" somewhere, the inference algorithm only knows that I expect an "),s("code",[a._v("Int")]),a._v(". It has no idea what type I want to substitute for "),s("code",[a._v("a")]),a._v(". Because of this, the definition gets rejected by the compiler "),s("strong",[a._v("unless")]),a._v(" you have the "),s("code",[a._v("{-# LANGUAGE AllowAmbiguousTypes #-}")]),a._v(" extension enabled. In that case the definition compiles,it just can't be used anywhere without an ambiguity error.")]),a._v(" "),s("p",[a._v("Luckily, the introduction of type applications saves the day! Now we can write "),s("code",[a._v("sizeOf @Int")]),a._v(", explicitly saying that "),s("code",[a._v("a")]),a._v(" is "),s("code",[a._v("Int")]),a._v(". Type applications allow us to provide a type parameter, even if it doesn't appear in the "),s("strong",[a._v("actual parameters of the function")]),a._v("!")])])}),[],!1,null,null,null);t.default=n.exports}}]);