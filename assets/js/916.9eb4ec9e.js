(window.webpackJsonp=window.webpackJsonp||[]).push([[916],{1261:function(t,e,s){"use strict";s.r(e);var a=s(19),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"verbatim-strings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#verbatim-strings"}},[t._v("#")]),t._v(" Verbatim Strings")]),t._v(" "),s("h2",{attrs:{id:"interpolated-verbatim-strings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#interpolated-verbatim-strings"}},[t._v("#")]),t._v(" Interpolated Verbatim Strings")]),t._v(" "),s("p",[t._v("Verbatim strings can be combined with the new "),s("a",{attrs:{href:"http://stackoverflow.com/documentation/c%23/24/c-sharp-6-0-features/49/string-interpolation",target:"_blank",rel:"noopener noreferrer"}},[t._v("String interpolation"),s("OutboundLink")],1),t._v(" features found in C#6.")]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[t._v("Console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('$@"Testing \\n 1 2 ')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token expression language-csharp"}},[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\nNew line"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[s("strong",[t._v("Output:")])]),t._v(" "),s("blockquote"),t._v(" "),s("p",[t._v("Testing \\n 1 2 3"),s("br"),t._v("\nNew line")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://dotnetfiddle.net/cWyQE2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Live Demo on .NET Fiddle"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("As expected from a verbatim string, the backslashes are ignored as escape characters. And as expected from an interpolated string, any expression inside curly braces is evaluated before being inserted into the string at that position.")]),t._v(" "),s("h2",{attrs:{id:"escaping-double-quotes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#escaping-double-quotes"}},[t._v("#")]),t._v(" Escaping Double Quotes")]),t._v(" "),s("p",[t._v("Double Quotes inside verbatim strings can be escaped by using 2 sequential double quotes "),s("code",[t._v('""')]),t._v(" to represent one double quote "),s("code",[t._v('"')]),t._v(" in the resulting string.")]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" str "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"""I don\'t think so,"" he said."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nConsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[s("strong",[t._v("Output:")])]),t._v(" "),s("blockquote"),t._v(" "),s("p",[t._v('"I don\'t think so," he said.')]),t._v(" "),s("p",[s("a",{attrs:{href:"https://dotnetfiddle.net/c4OJoq",target:"_blank",rel:"noopener noreferrer"}},[t._v("Live Demo on .NET Fiddle"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"verbatim-strings-instruct-the-compiler-to-not-use-character-escapes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#verbatim-strings-instruct-the-compiler-to-not-use-character-escapes"}},[t._v("#")]),t._v(" Verbatim strings instruct the compiler to not use character escapes")]),t._v(" "),s("p",[t._v("In a normal string, the backslash character is the escape character, which instructs the compiler to look at the next character(s) to determine the actual character in the string. ("),s("a",{attrs:{href:"http://stackoverflow.com/documentation/c%23/39/string-escape-sequences#t=201607172257361795538&a=syntax",target:"_blank",rel:"noopener noreferrer"}},[t._v("Full list of character escapes"),s("OutboundLink")],1),t._v(")")]),t._v(" "),s("p",[t._v("In verbatim strings, there are no character escapes (except for "),s("code",[t._v('""')]),t._v(" which is turned into a "),s("code",[t._v('"')]),t._v(").\nTo use a verbatim string, just prepend a "),s("code",[t._v("@")]),t._v(" before the starting quotes.")]),t._v(" "),s("p",[t._v("This verbatim string")]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" filename "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"c:\\temp\\newfile.txt"')]),t._v("\n\n")])])]),s("p",[s("strong",[t._v("Output:")])]),t._v(" "),s("blockquote"),t._v(" "),s("p",[t._v("c:\\temp\\newfile.txt")]),t._v(" "),s("p",[t._v("As opposed to using an ordinary (non-verbatim) string:")]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" filename "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"c:\\temp\\newfile.txt"')]),t._v("\n\n")])])]),s("p",[t._v("that will output:")]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    emp\newfile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("txt\n\n")])])]),s("p",[t._v("using character escaping. (The "),s("code",[t._v("\\t")]),t._v(" is replaced with a tab character and the "),s("code",[t._v("\\n")]),t._v(" is replace with a newline.)")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://dotnetfiddle.net/7kslXQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("Live Demo on .NET Fiddle"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"multiline-strings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#multiline-strings"}},[t._v("#")]),t._v(" Multiline Strings")]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" multiLine "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"This is a \n\nmultiline paragraph"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[s("strong",[t._v("Output:")])]),t._v(" "),s("blockquote"),t._v(" "),s("p",[t._v("This is a\nmultiline paragraph")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://dotnetfiddle.net/kfOUcH",target:"_blank",rel:"noopener noreferrer"}},[t._v("Live Demo on .NET Fiddle"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Multi-line strings that contain double-quotes can also be escaped just as they were on a single line, because they are verbatim strings.")]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" multilineWithDoubleQuotes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"I went to a city named\n\n                        ""San Diego""\n\n                      during summer vacation."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[s("a",{attrs:{href:"https://dotnetfiddle.net/0hwJpf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Live Demo on .NET Fiddle"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("strong",[t._v("It should be noted that the spaces/tabulations at the start of lines 2 and 3 here are actually present in the value of the variable; check "),s("a",{attrs:{href:"http://stackoverflow.com/questions/7178136/multiline-formatting-for-verbatim-strings-in-c-sharp-prefix-with",target:"_blank",rel:"noopener noreferrer"}},[t._v("this question"),s("OutboundLink")],1),t._v(" for possible solutions.")])]),t._v(" "),s("h4",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),s("li",[t._v('\n@"verbatim strings are strings whose contents are not escaped, so in this case \\n does not represent the newline character but two individual characters: \\ and n. Verbatim strings are created prefixing the string contents with the @ character"\n')]),t._v(" "),s("li",[t._v('\n@"To escape quotation marks, ""double quotation marks"" are used."\n')]),t._v(" "),s("h4",{attrs:{id:"remarks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),s("p",[t._v("To concatenate string literals, use the @ symbol at the beginning of each string.")]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" combinedString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"\\t means a tab"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@" and \\n means a newline"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);