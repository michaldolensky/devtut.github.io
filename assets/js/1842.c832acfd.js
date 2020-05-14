(window.webpackJsonp=window.webpackJsonp||[]).push([[1842],{2194:function(e,a,t){"use strict";t.r(a);var s=t(19),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"generics"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#generics"}},[e._v("#")]),e._v(" Generics")]),e._v(" "),t("p",[e._v("A List can hold numbers, words or really anything.\nThat's why we call the List "),t("strong",[e._v("generic")]),e._v(".")]),e._v(" "),t("p",[e._v("Generics are basically used to define which types a class can hold and which type an object currently holds.")]),e._v(" "),t("h2",{attrs:{id:"declaration-site-variance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#declaration-site-variance"}},[e._v("#")]),e._v(" Declaration-site variance")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://kotlinlang.org/docs/reference/generics.html#declaration-site-variance",target:"_blank",rel:"noopener noreferrer"}},[e._v("Declaration-site variance"),t("OutboundLink")],1),e._v(" can be thought of as declaration of use-site variance once and for all the use-sites.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\n class Consumer<in T> { fun consume(t: T) { ... } }\n\n  fun charSequencesConsumer() : Consumer<CharSequence>() = ...\n\n  val stringConsumer : Consumer<String> = charSequenceConsumer() // OK since in-projection\n  val anyConsumer : Consumer<Any> = charSequenceConsumer() // Error, Any cannot be passed\n  \n  val outConsumer : Consumer<out CharSequence> = ... // Error, T is `in`-parameter\n\n")])])]),t("p",[e._v("Widespread examples of declaration-site variance are "),t("code",[e._v("List<out T>")]),e._v(", which is immutable so that "),t("code",[e._v("T")]),e._v(" only appears as the return value type, and "),t("code",[e._v("Comparator<in T>")]),e._v(", which only receives "),t("code",[e._v("T")]),e._v(" as argument.")]),e._v(" "),t("h2",{attrs:{id:"use-site-variance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use-site-variance"}},[e._v("#")]),e._v(" Use-site variance")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://kotlinlang.org/docs/reference/generics.html#use-site-variance-type-projections",target:"_blank",rel:"noopener noreferrer"}},[e._v("Use-site variance"),t("OutboundLink")],1),e._v(" is similar to Java wildcards:")]),e._v(" "),t("p",[e._v("Out-projection:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\n val takeList : MutableList<out SomeType> = ... // Java: List<? extends SomeType>\n\n  val takenValue : SomeType = takeList[0] // OK, since upper bound is SomeType\n\n  takeList.add(takenValue) // Error, lower bound for generic is not specified\n\n")])])]),t("p",[e._v("In-projection:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\n val putList : MutableList<in SomeType> = ... // Java: List<? super SomeType>\n  \n  val valueToPut : SomeType = ...\n  putList.add(valueToPut) // OK, since lower bound is SomeType\n\n  putList[0] // This expression has type Any, since no upper bound is specified\n\n")])])]),t("p",[e._v("Star-projection")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\n val starList : MutableList<*> = ... // Java: List<?>\n\n  starList[0] // This expression has type Any, since no upper bound is specified\n  starList.add(someValue) // Error, lower bound for generic is not specified\n\n")])])]),t("p",[t("strong",[e._v("See also:")])]),e._v(" "),t("li",[e._v("\n[Variant Generics](https://kotlinlang.org/docs/reference/java-to-kotlin-interop.html#variant-generics) interoperability when calling Kotlin from Java.\n")]),e._v(" "),t("h4",{attrs:{id:"syntax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),t("ul",[t("li",[e._v("class "),t("strong",[e._v("ClassName")]),e._v("<"),t("strong",[t("strong",[e._v("TypeName")])]),e._v(">")]),e._v(" "),t("li",[e._v("class "),t("strong",[e._v("ClassName")]),e._v("<*>")]),e._v(" "),t("li",[t("strong",[e._v("ClassName")]),e._v("<in "),t("strong",[t("strong",[e._v("UpperBound")])]),e._v(">")]),e._v(" "),t("li",[t("strong",[e._v("ClassName")]),e._v("<out "),t("strong",[t("strong",[e._v("LowerBound")])]),e._v(">")]),e._v(" "),t("li",[e._v("class "),t("strong",[e._v("Name")]),e._v("<"),t("strong",[t("strong",[e._v("TypeName")])]),e._v(":"),t("strong",[t("strong",[e._v("UpperBound")])]),e._v(">")])]),e._v(" "),t("h4",{attrs:{id:"parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Parameter")]),e._v(" "),t("th",[e._v("Details")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[t("strong",[e._v("TypeName")])]),e._v(" "),t("td",[e._v("Type Name of generic parameter")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("UpperBound")])]),e._v(" "),t("td",[e._v("Covariant Type")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("LowerBound")])]),e._v(" "),t("td",[e._v("Contravariant Type")])]),e._v(" "),t("tr",[t("td",[e._v("ClassName")]),e._v(" "),t("td",[e._v("Name of the class")])])])]),e._v(" "),t("h4",{attrs:{id:"remarks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[e._v("#")]),e._v(" Remarks")]),e._v(" "),t("h3",{attrs:{id:"implied-upper-bound-is-nullable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implied-upper-bound-is-nullable"}},[e._v("#")]),e._v(" Implied Upper Bound is Nullable")]),e._v(" "),t("p",[e._v("In Kotlin Generics, the upper bound of type parameter "),t("code",[e._v("T")]),e._v(" would be "),t("code",[e._v("Any?")]),e._v(".  Therefore for this class:")]),e._v(" "),t("div",{staticClass:"language-kotlin extra-class"},[t("pre",{pre:!0,attrs:{class:"language-kotlin"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" Consumer"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("T"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\n")])])]),t("p",[e._v("The type parameter "),t("code",[e._v("T")]),e._v(" is really "),t("code",[e._v("T: Any?")]),e._v(".  To make a non-nullable upper bound, explicitly specific "),t("code",[e._v("T: Any")]),e._v(".  For example:")]),e._v(" "),t("div",{staticClass:"language-kotlin extra-class"},[t("pre",{pre:!0,attrs:{class:"language-kotlin"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" Consumer"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("T"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" Any"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);