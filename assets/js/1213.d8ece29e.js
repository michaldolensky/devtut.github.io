(window.webpackJsonp=window.webpackJsonp||[]).push([[1213],{1559:function(a,s,t){"use strict";t.r(s);var e=t(19),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"proxies"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#proxies"}},[a._v("#")]),a._v(" Proxies")]),a._v(" "),t("h2",{attrs:{id:"using-proxy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-proxy"}},[a._v("#")]),a._v(" Using Proxy")]),a._v(" "),t("p",[a._v("The "),t("code",[a._v("Proxy :: k -> *")]),a._v(" type, found in "),t("a",{attrs:{href:"https://hackage.haskell.org/package/base-4.9.0.0/docs/Data-Proxy.html",target:"_blank",rel:"noopener noreferrer"}},[t("code",[a._v("Data.Proxy")]),t("OutboundLink")],1),a._v(", is used when you need to give the compiler some type information - eg, to pick a type class instance - which is nonetheless irrelevant at runtime.")]),a._v(" "),t("div",{staticClass:"language-hs extra-class"},[t("pre",{pre:!0,attrs:{class:"language-hs"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("{-# LANGUAGE PolyKinds #-}")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("data")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Proxy")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Proxy")]),a._v("\n\n")])])]),t("p",[a._v("Functions which use a "),t("code",[a._v("Proxy")]),a._v(" typically use "),t("code",[a._v("ScopedTypeVariables")]),a._v(" to pick a type class instance based on the "),t("code",[a._v("a")]),a._v(" type.")]),a._v(" "),t("p",[a._v("For example, the classic example of an ambiguous function,")]),a._v(" "),t("div",{staticClass:"language-hs extra-class"},[t("pre",{pre:!0,attrs:{class:"language-hs"}},[t("code",[t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("showread")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("String")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("String")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("showread")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("show")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(" . ")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("read")]),a._v("\n\n")])])]),t("p",[a._v("which results in a type error because the elaborator doesn't know which instance of "),t("code",[a._v("Show")]),a._v(" or "),t("code",[a._v("Read")]),a._v(" to use, can be resolved using "),t("code",[a._v("Proxy")]),a._v(":")]),a._v(" "),t("div",{staticClass:"language-hs extra-class"},[t("pre",{pre:!0,attrs:{class:"language-hs"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("{-# LANGUAGE ScopedTypeVariables #-}")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token import_statement"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" Data.Proxy")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("showread")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("forall")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Show")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Read")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Proxy")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("String")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("String")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("showread")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("_")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("show")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(" . ")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("read")]),a._v("\n\n")])])]),t("p",[a._v("When calling a function with "),t("code",[a._v("Proxy")]),a._v(", you need to use a type annotation to declare which "),t("code",[a._v("a")]),a._v(" you meant.")]),a._v(" "),t("div",{staticClass:"language-hs extra-class"},[t("pre",{pre:!0,attrs:{class:"language-hs"}},[t("code",[t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("ghci")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("showread")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Proxy")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Proxy")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"3"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"3"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("ghci")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("showread")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Proxy")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Proxy")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Bool")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"'m'\"")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("-- attempt to parse a char literal as a Bool")]),a._v('\n"'),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("***")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Exception")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Prelude")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("read")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("no")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("parse")]),a._v("\n\n")])])]),t("h2",{attrs:{id:"the-polymorphic-proxy-idiom"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-polymorphic-proxy-idiom"}},[a._v("#")]),a._v(' The "polymorphic proxy" idiom')]),a._v(" "),t("p",[a._v("Since "),t("code",[a._v("Proxy")]),a._v(" contains no runtime information, there is never a need to pattern-match on the "),t("code",[a._v("Proxy")]),a._v(" constructor. So a common idiom is to abstract over the "),t("code",[a._v("Proxy")]),a._v(" datatype using a type variable.")]),a._v(" "),t("div",{staticClass:"language-hs extra-class"},[t("pre",{pre:!0,attrs:{class:"language-hs"}},[t("code",[t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("showread")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("forall")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("proxy")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Show")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Read")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("proxy")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("String")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("String")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("showread")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("_")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("show")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(" . ")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("read")]),a._v("\n\n")])])]),t("p",[a._v("Now, if you happen to have an "),t("code",[a._v("f a")]),a._v(" in scope for some "),t("code",[a._v("f")]),a._v(", you don't need to write out "),t("code",[a._v("Proxy :: Proxy a")]),a._v(" when calling "),t("code",[a._v("f")]),a._v(".")]),a._v(" "),t("div",{staticClass:"language-hs extra-class"},[t("pre",{pre:!0,attrs:{class:"language-hs"}},[t("code",[t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("ghci")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("let")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("chars")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"foo"')]),a._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("-- chars :: [Char]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("ghci")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("showread")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("chars")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"'a'\"")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"'a'\"")]),a._v("\n\n")])])]),t("h2",{attrs:{id:"proxy-is-like"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#proxy-is-like"}},[a._v("#")]),a._v(" Proxy is like ()")]),a._v(" "),t("p",[a._v("Since "),t("code",[a._v("Proxy")]),a._v(" contains no runtime information, you can always write a natural transformation "),t("code",[a._v("f a -> Proxy a")]),a._v(" for any "),t("code",[a._v("f")]),a._v(".")]),a._v(" "),t("div",{staticClass:"language-hs extra-class"},[t("pre",{pre:!0,attrs:{class:"language-hs"}},[t("code",[t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("proxy")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("f")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Proxy")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("proxy")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("_")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Proxy")]),a._v("\n\n")])])]),t("p",[a._v("This is just like how any given value can always be erased to "),t("code",[a._v("()")]),a._v(":")]),a._v(" "),t("div",{staticClass:"language-hs extra-class"},[t("pre",{pre:!0,attrs:{class:"language-hs"}},[t("code",[t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("unit")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("unit")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("_")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n")])])]),t("p",[a._v("Technically, "),t("code",[a._v("Proxy")]),a._v(" is the terminal object in the category of functors, just like "),t("code",[a._v("()")]),a._v(" is the terminal object in the category of values.")])])}),[],!1,null,null,null);s.default=r.exports}}]);