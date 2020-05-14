(window.webpackJsonp=window.webpackJsonp||[]).push([[522],{869:function(s,t,a){"use strict";a.r(t);var e=a(19),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"quoting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quoting"}},[s._v("#")]),s._v(" Quoting")]),s._v(" "),a("h2",{attrs:{id:"double-quotes-for-variable-and-command-substitution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#double-quotes-for-variable-and-command-substitution"}},[s._v("#")]),s._v(" Double quotes for variable and command substitution")]),s._v(" "),a("p",[s._v("Variable substitutions should only be used inside double quotes.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("calculation")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2 * 3'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$calculation")]),s._v('"')]),s._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# prints 2 * 3")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$calculation")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# prints 2, the list of files in the current directory, and 3")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$((")]),s._v("$calculation"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("))")])]),s._v('"')]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# prints 6")]),s._v("\n\n")])])]),a("p",[s._v("Outside of double quotes, "),a("code",[s._v("$var")]),s._v(" takes the value of "),a("code",[s._v("var")]),s._v(", splits it into whitespace-delimited parts, and interprets each part as a glob (wildcard) pattern. Unless you want this behavior, always put "),a("code",[s._v("$var")]),s._v(" inside double quotes: "),a("code",[s._v('"$var"')]),s._v(".")]),s._v(" "),a("p",[s._v("The same applies to command substitutions: "),a("code",[s._v('"$(mycommand)"')]),s._v(" is the output of "),a("code",[s._v("mycommand")]),s._v(", "),a("code",[s._v("$(mycommand)")]),s._v(" is the result of split+glob on the output.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$var")]),s._v('"')]),s._v("             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# good")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("mycommand"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# good")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("another")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$var")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# also works, assignment is implicitly double-quoted")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" -D "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("THING")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$var")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# BAD! This is not a bash assignment.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" -D "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("THING")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$var")]),s._v('"')]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# good")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" -D "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"THING='),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$var")]),s._v('"')]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# also good")]),s._v("\n\n")])])]),a("p",[s._v("Command substitutions get their own quoting contexts. Writing arbitrarily nested substitutions is easy because the parser will keep track of nesting depth instead of greedily searching for the first "),a("code",[s._v('"')]),s._v(" character. The StackOverflow syntax highlighter parses this wrong, however. For example:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"formatted text: '),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a + b = %04d"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${c}")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# “formatted text: a + b = 0000”")]),s._v("\n\n")])])]),a("p",[s._v("Variable arguments to a command substitution should be double-quoted inside the expansions as well:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("mycommand "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$arg1")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$arg2")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n\n")])])]),a("h2",{attrs:{id:"difference-between-double-quote-and-single-quote"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#difference-between-double-quote-and-single-quote"}},[s._v("#")]),s._v(" Difference between double quote and single quote")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("Double quote")]),s._v(" "),a("th",[s._v("Single quote")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("Allows variable expansion")]),s._v(" "),a("td",[s._v("Prevents variable expansion")])]),s._v(" "),a("tr",[a("td",[s._v("Allows history expansion if enabled")]),s._v(" "),a("td",[s._v("Prevents history expansion")])]),s._v(" "),a("tr",[a("td",[s._v("Allows command substitution")]),s._v(" "),a("td",[s._v("Prevents command substitution")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("*")]),s._v(" and "),a("code",[s._v("@")]),s._v(" can have special meaning")]),s._v(" "),a("td",[a("code",[s._v("*")]),s._v(" and "),a("code",[s._v("@")]),s._v(" are always literals")])]),s._v(" "),a("tr",[a("td",[s._v("Can contain both single quote or double quote")]),s._v(" "),a("td",[s._v("Single quote is not allowed inside single quote")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("$")]),s._v(", ```bash, "),a("code",[s._v('"')]),s._v(", "),a("code",[s._v("\\")]),s._v(" can be escaped with "),a("code",[s._v("\\")]),s._v(" to prevent their special meaning")]),s._v(" "),a("td",[s._v("All of them are literals")])])])]),s._v(" "),a("p",[a("strong",[s._v("Properties that are common to both:")])]),s._v(" "),a("ul",[a("li",[s._v("Prevents globbing")]),s._v(" "),a("li",[s._v("Prevents word splitting")])]),s._v(" "),a("p",[s._v("Examples:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"!cat"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cat file"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'!cat'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("cat\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("'"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\'"')]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("a")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'var'")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$a")]),s._v("'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$a")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$a")]),s._v('"')]),s._v("\nvar\n\n")])])]),a("h2",{attrs:{id:"newlines-and-control-characters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#newlines-and-control-characters"}},[s._v("#")]),s._v(" Newlines and control characters")]),s._v(" "),a("p",[s._v("A newline can be included in a single-string or double-quoted string. Note that backslash-newline does not result in a newline, the line break is ignored.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("newline1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\n'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("newline2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\n"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("newline3")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("$"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("empty")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Line'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${newline1}")]),s._v('break"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Line'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${newline2}")]),s._v('break"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Line'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${newline3}")]),s._v('break"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"No line break'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${empty}")]),s._v(' here"')]),s._v("\n\n")])])]),a("p",[s._v("Inside dollar-quote strings, backslash-letter or backslash-octal can be used to insert control characters, like in many other programming languages.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Tab: ["),a("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[s._v("\\t")]),s._v("]'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Tab again: ["),a("span",{pre:!0,attrs:{class:"token entity",title:"\\00"}},[s._v("\\00")]),s._v("9]'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Form feed: ["),a("span",{pre:!0,attrs:{class:"token entity",title:"\\f"}},[s._v("\\f")]),s._v("]'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Line"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("break'")]),s._v("\n\n")])])]),a("h2",{attrs:{id:"quoting-literal-text"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quoting-literal-text"}},[s._v("#")]),s._v(" Quoting literal text")]),s._v(" "),a("p",[s._v("All the examples in this paragraph print the line")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v('"#$'),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("?  @"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("^`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("~\n\n")])])]),a("p",[s._v("A backslash quotes the next character, i.e. the next character is interpreted literally. The one exception is a newline: backslash-newline expands to the empty string.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v('"'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("#"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("^"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("~\n\n")])])]),a("p",[s._v("All text between single quotes (forward quotes "),a("code",[s._v("'")]),s._v(", also known as apostrophe) is printed literally. Even backslash stands for itself, and it's impossible to include a single quote; instead, you can stop the literal string, include a literal single quote with a backslash, and start the literal string again. Thus the 4-character sequence "),a("code",[s._v("'\\''")]),s._v(" effectively allow to include a single quote in a literal string.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'!\"#$&'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("'"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'()*;<=>?  @[\\]^`{|}~'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#          ^^^^")]),s._v("\n\n")])])]),a("p",[s._v("Dollar-single-quote starts a string literal "),a("code",[s._v("$'…'")]),s._v(" like many other programming languages, where backslash quotes the next character.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'!\"#$&\\'()*;<=>?  @["),a("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("]^`{|}~'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#           ^^            ^^")]),s._v("\n\n")])])]),a("p",[s._v("Double quotes "),a("code",[s._v('"')]),s._v(" delimit semi-literal strings where only the characters "),a("code",[s._v('"')]),s._v(" "),a("code",[s._v("\\")]),s._v(" "),a("code",[s._v("$")]),s._v(" and ```bash retain their special meaning. These characters need a backslash before them (note that if backslash is followed by some other character, the backslash remains). Double quotes are mostly useful when including a variable or a command substitution.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"!'),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("#\\$&'()*;<=>?  @["),a("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v(']^\\`{|}~"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      ^^                 ^^  ^^")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"!'),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("#\\$&'()*;<=>?  @[\\]^\\`{|}~\"")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      ^^                 ^  ^^      \\[ prints \\[")]),s._v("\n\n")])])]),a("p",[s._v("Interactively, beware that "),a("code",[s._v("!")]),s._v(" triggers history expansion inside double quotes: "),a("code",[s._v('"!oops"')]),s._v(" looks for an older command containing "),a("code",[s._v("oops")]),s._v("; "),a("code",[s._v('"\\!oops"')]),s._v(" doesn't do history expansion but keeps the backslash. This does not happen in scripts.")]),s._v(" "),a("h4",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[s._v("#")]),s._v(" Syntax")]),s._v(" "),a("ul",[a("li",[s._v("\\C (any one character except newline)")]),s._v(" "),a("li",[s._v("'all literal except single quotes'; 'this: ''' is a single quote'")]),s._v(" "),a("li",[s._v("$'only \\ and ' are special; \\n = newline etc.'")]),s._v(" "),a("li",[s._v('"$variable and other text; "\\$` are special"')])])])}),[],!1,null,null,null);t.default=n.exports}}]);