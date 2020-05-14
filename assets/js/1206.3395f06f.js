(window.webpackJsonp=window.webpackJsonp||[]).push([[1206],{1551:function(t,a,s){"use strict";s.r(a);var e=s(19),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"overloaded-literals"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overloaded-literals"}},[t._v("#")]),t._v(" Overloaded Literals")]),t._v(" "),s("h2",{attrs:{id:"strings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#strings"}},[t._v("#")]),t._v(" Strings")]),t._v(" "),s("h3",{attrs:{id:"the-type-of-the-literal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-type-of-the-literal"}},[t._v("#")]),t._v(" The type of the literal")]),t._v(" "),s("p",[t._v("Without any extensions, the type of a string literal – i.e., something between double quotes – is just a string, aka list of characters:")]),t._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Prelude")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("t")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Char")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])])]),s("p",[t._v("However, when the "),s("code",[t._v("OverloadedStrings")]),t._v(" extension is enabled, string literals become polymorphic, similar "),s("a",{attrs:{href:"http://stackoverflow.com/documentation/haskell/369/overloaded-literals/1243/integer-numeral",target:"_blank",rel:"noopener noreferrer"}},[t._v("to number literals"),s("OutboundLink")],1),t._v(":")]),t._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Prelude")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("set")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("XOverloadedStrings")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Prelude")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("t")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Data.String.IsString")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("t")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("t")]),t._v("\n\n")])])]),s("p",[t._v("This allows us to define values of string-like types without the need for any explicit conversions. In essence, the "),s("code",[t._v("OverloadedStrings")]),t._v(" extension just wraps every string literal in the generic "),s("a",{attrs:{href:"http://hackage.haskell.org/package/base-4.9.0.0/docs/Data-String.html#v:fromString",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("fromString")]),s("OutboundLink")],1),t._v(" conversion function, so if the context demands e.g. the more efficient "),s("a",{attrs:{href:"http://hackage.haskell.org/package/text-1.2.2.1/docs/Data-Text.html",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("Text")]),s("OutboundLink")],1),t._v(" instead of "),s("code",[t._v("String")]),t._v(", you don't need to worry about that yourself.")]),t._v(" "),s("h3",{attrs:{id:"using-string-literals"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-string-literals"}},[t._v("#")]),t._v(" Using string literals")]),t._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("{-# LANGUAGE OverloadedStrings #-}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token import_statement"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Data.Text")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("pack")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token import_statement"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Data.ByteString")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ByteString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("pack")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("withString")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("String")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("withString")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello String"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- The following two examples are only allowed with OverloadedStrings")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("withText")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Text")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("withText")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello Text"')]),t._v("      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('-- instead of: withText = Data.Text.pack "Hello Text"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("withBS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ByteString")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("withBS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello ByteString"')]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('-- instead of: withBS = Data.ByteString.pack "Hello ByteString"')]),t._v("\n\n")])])]),s("p",[t._v("Notice how we were able to construct values of "),s("code",[t._v("Text")]),t._v(" and "),s("code",[t._v("ByteString")]),t._v(" in the same way we construct ordinary "),s("code",[t._v("String")]),t._v(" (or "),s("code",[t._v("[Char]")]),t._v(") Values, rather than using each types "),s("code",[t._v("pack")]),t._v(" function to encode the string explicitly.")]),t._v(" "),s("p",[t._v("For more information on the "),s("code",[t._v("OverloadedStrings")]),t._v(" language extension, see "),s("a",{attrs:{href:"http://stackoverflow.com/documentation/haskell/1274/common-language-extensions/4173/overloadedstrings#t=201607221905320667823",target:"_blank",rel:"noopener noreferrer"}},[t._v("the extension documentation"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"floating-numeral"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#floating-numeral"}},[t._v("#")]),t._v(" Floating Numeral")]),t._v(" "),s("h3",{attrs:{id:"the-type-of-the-literal-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-type-of-the-literal-2"}},[t._v("#")]),t._v(" The type of the literal")]),t._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Prelude")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("t")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Fractional")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("a")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"choosing-a-concrete-type-with-annotations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#choosing-a-concrete-type-with-annotations"}},[t._v("#")]),t._v(" Choosing a concrete type with annotations")]),t._v(" "),s("p",[t._v("You can specify the type with a "),s("strong",[t._v("type annotation")]),t._v(". The only requirement is that the type must have a "),s("code",[t._v("Fractional")]),t._v(" instance.")]),t._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Prelude")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Double")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("it")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Double")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Prelude")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Data.Ratio.Ratio")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Int")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("it")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GHC.Real.Ratio")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Int")]),t._v(" \n\n")])])]),s("p",[t._v("if not the compiler will complain")]),t._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Prelude")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Int")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("interactive")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">:")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("No")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instance")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Fractional")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("arising")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("the")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("literal")]),t._v(" `"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v("'\n    "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("In")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("the")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("expression")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Int")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("In")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("an")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("equation")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("for")]),t._v(" `"),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("it")]),t._v("'"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("it")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Int")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"integer-numeral"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#integer-numeral"}},[t._v("#")]),t._v(" Integer Numeral")]),t._v(" "),s("h3",{attrs:{id:"the-type-of-the-literal-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-type-of-the-literal-3"}},[t._v("#")]),t._v(" The type of the literal")]),t._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Prelude")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("t")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Num")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("a")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"choosing-a-concrete-type-with-annotations-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#choosing-a-concrete-type-with-annotations-2"}},[t._v("#")]),t._v(" choosing a concrete type with annotations")]),t._v(" "),s("p",[t._v("You can specify the type as long as the target type is "),s("code",[t._v("Num")]),t._v(" with an "),s("strong",[t._v("annotation")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Prelude")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Int")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("it")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Int")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Prelude")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Double")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("it")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Double")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Prelude")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Word")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("it")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Word")]),t._v("\n\n")])])]),s("p",[t._v("if not the compiler will complain")]),t._v(" "),s("p",[t._v("Prelude> 1 :: String")]),t._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("interactive")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">:")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("No")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instance")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Num")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("arising")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("the")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("literal")]),t._v(" `"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("'\n    "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("In")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("the")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("expression")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("String")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("In")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("an")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("equation")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("for")]),t._v(" `"),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("it")]),t._v("'"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("it")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("String")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"list-literals"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#list-literals"}},[t._v("#")]),t._v(" List Literals")]),t._v(" "),s("p",[t._v("GHC's "),s("a",{attrs:{href:"https://downloads.haskell.org/%7Eghc/latest/docs/html/users_guide/type-class-extensions.html#overloaded-lists",target:"_blank",rel:"noopener noreferrer"}},[t._v("OverloadedLists"),s("OutboundLink")],1),t._v(" extension allows you to construct list-like data structures with the list literal syntax.")]),t._v(" "),s("p",[t._v("This allows you to "),s("a",{attrs:{href:"http://hackage.haskell.org/package/containers/docs/Data-Map-Lazy.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Data.Map"),s("OutboundLink")],1),t._v(" like this:")]),t._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("set")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("XOverloadedLists")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("qualified")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Data.Map")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("M")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("M")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("lookup")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bar"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Just")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n")])])]),s("p",[t._v("Instead of this (note the use of the extra "),s("a",{attrs:{href:"http://hackage.haskell.org/package/containers/docs/Data-Map-Lazy.html#v:fromList",target:"_blank",rel:"noopener noreferrer"}},[t._v("M.fromList"),s("OutboundLink")],1),t._v("):")]),t._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Data.Map")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("M")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("M")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("lookup")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("M.fromList")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bar"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Just")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n")])])]),s("h4",{attrs:{id:"remarks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),s("h3",{attrs:{id:"integer-literals"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#integer-literals"}},[t._v("#")]),t._v(" Integer Literals")]),t._v(" "),s("p",[t._v("is a numeral "),s("strong",[t._v("without")]),t._v(" a decimal point")]),t._v(" "),s("p",[t._v("for example "),s("code",[t._v("0")]),t._v(", "),s("code",[t._v("1")]),t._v(", "),s("code",[t._v("42")]),t._v(", ...")]),t._v(" "),s("p",[t._v("is implicitly applied to "),s("a",{attrs:{href:"https://hackage.haskell.org/package/base-4.8.2.0/docs/Prelude.html#v:fromInteger",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("fromInteger")]),s("OutboundLink")],1),t._v(" which is part of the "),s("a",{attrs:{href:"https://hackage.haskell.org/package/base-4.8.2.0/docs/Prelude.html#t:Num",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("Num")]),t._v(" type class"),s("OutboundLink")],1),t._v(" so it indeed has type "),s("code",[t._v("Num a => a")]),t._v(" - that is it can have any type that is an instance of "),s("code",[t._v("Num")])]),t._v(" "),s("h3",{attrs:{id:"fractional-literals"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fractional-literals"}},[t._v("#")]),t._v(" Fractional Literals")]),t._v(" "),s("p",[t._v("is a numeral "),s("strong",[t._v("with")]),t._v(" a decimal point")]),t._v(" "),s("p",[t._v("for example "),s("code",[t._v("0.0")]),t._v(", "),s("code",[t._v("-0.1111")]),t._v(", ...")]),t._v(" "),s("p",[t._v("is implicitly applied to "),s("a",{attrs:{href:"https://hackage.haskell.org/package/base-4.8.2.0/docs/Prelude.html#v:fromRational",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("fromRational")]),s("OutboundLink")],1),t._v(" which is part of the "),s("a",{attrs:{href:"https://hackage.haskell.org/package/base-4.8.2.0/docs/Prelude.html#t:Fractional",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("Fractional")]),t._v(" type class"),s("OutboundLink")],1),t._v(" so it indeed has type "),s("code",[t._v("a => a")]),t._v(" - that is it can have any type that is an instance of "),s("code",[t._v("Fractional")])]),t._v(" "),s("h3",{attrs:{id:"string-literals"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#string-literals"}},[t._v("#")]),t._v(" String Literals")]),t._v(" "),s("p",[t._v("If you add the language extension "),s("code",[t._v("OverloadedStrings")]),t._v(" to "),s("strong",[t._v("GHC")]),t._v(" you can have the same for "),s("code",[t._v("String")]),t._v("-literals which then are applied to "),s("a",{attrs:{href:"https://hackage.haskell.org/package/base-4.8.2.0/docs/Data-String.html#v:fromString",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("fromString")]),s("OutboundLink")],1),t._v(" from the "),s("a",{attrs:{href:"https://hackage.haskell.org/package/base-4.8.2.0/docs/Data-String.html#v:fromString",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("Data.String.IsString")]),t._v(" type class"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("This is often used to replace "),s("code",[t._v("String")]),t._v(" with "),s("code",[t._v("Text")]),t._v(" or "),s("code",[t._v("ByteString")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"list-literals-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#list-literals-2"}},[t._v("#")]),t._v(" List Literals")]),t._v(" "),s("p",[t._v("Lists can defined with the "),s("code",[t._v("[1, 2, 3]")]),t._v(" literal syntax.  In GHC 7.8 and beyond, this can also be used to define other list-like structures with the "),s("a",{attrs:{href:"https://ghc.haskell.org/trac/ghc/wiki/OverloadedLists",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("OverloadedLists")]),s("OutboundLink")],1),t._v(" extension.")]),t._v(" "),s("p",[t._v("By default, the type of "),s("code",[t._v("[]")]),t._v(" is:")]),t._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("t")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("t")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])])]),s("p",[t._v("With "),s("code",[t._v("OverloadedLists")]),t._v(", this becomes:")]),t._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GHC.Exts.IsList")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("l")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("l")]),t._v("\n\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);