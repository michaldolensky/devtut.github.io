(window.webpackJsonp=window.webpackJsonp||[]).push([[974],{1320:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"structure-and-formatting-of-a-css-rule"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#structure-and-formatting-of-a-css-rule"}},[t._v("#")]),t._v(" Structure and Formatting of a CSS Rule")]),t._v(" "),a("h2",{attrs:{id:"property-lists"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#property-lists"}},[t._v("#")]),t._v(" Property Lists")]),t._v(" "),a("p",[t._v("Some properties can take multiple values, collectively known as a "),a("strong",[t._v("property list")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Two values in this property list */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("span")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-shadow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yellow 0 0 3px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" green 4px 4px 10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Alternate Formatting */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("span")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-shadow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        yellow 0 0 3px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        green 4px 4px 10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"rules-selectors-and-declaration-blocks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rules-selectors-and-declaration-blocks"}},[t._v("#")]),t._v(" Rules, Selectors, and Declaration Blocks")]),t._v(" "),a("p",[t._v("A CSS "),a("strong",[t._v("rule")]),t._v(" consists of a "),a("strong",[t._v("selector")]),t._v(" (e.g. "),a("code",[t._v("h1")]),t._v(") and "),a("strong",[t._v("declaration block")]),t._v(" ("),a("code",[t._v("{}")]),t._v(").")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("h1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"multiple-selectors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multiple-selectors"}},[t._v("#")]),t._v(" Multiple Selectors")]),t._v(" "),a("p",[t._v("When you group CSS selectors, you apply the same styles to several different elements without repeating the styles in your style sheet. Use a comma to separate multiple grouped selectors.")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div, p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" blue "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("So the blue color applies to all "),a("code",[t._v("<div>")]),t._v(" elements and all "),a("code",[t._v("<p>")]),t._v(" elements. Without the comma only "),a("code",[t._v("<p>")]),t._v(" elements that are a child of a "),a("code",[t._v("<div>")]),t._v(" would be red.")]),t._v(" "),a("p",[t._v("This also applies to all types of selectors.")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p, .blue, #first, div span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" blue "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("This rule applies to:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("<p>")])]),t._v(" "),a("li",[t._v("elements of the "),a("code",[t._v("blue")]),t._v(" class")]),t._v(" "),a("li",[t._v("element with the ID "),a("code",[t._v("first")])]),t._v(" "),a("li",[t._v("every "),a("code",[t._v("<span>")]),t._v(" inside of a "),a("code",[t._v("<div>")])])]),t._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),a("p",[t._v("For ease of readability, keep all declarations indented one level from their selector, and the closing curly brace on its own line. Add a single space after selectors and colons, and always place a semicolon after the final declaration.")]),t._v(" "),a("h3",{attrs:{id:"good"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#good"}},[t._v("#")]),t._v(" Good")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" maroon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 16px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"bad"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bad"}},[t._v("#")]),t._v(" Bad")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" maroon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("16px "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"one-liner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#one-liner"}},[t._v("#")]),t._v(" One-Liner")]),t._v(" "),a("p",[t._v("If there are only one or two declarations, you "),a("strong",[t._v("might")]),t._v(" get away with this one. Not recommended for most cases. Always be consistent when possible.")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" maroon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 16px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);