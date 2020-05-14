(window.webpackJsonp=window.webpackJsonp||[]).push([[2604],{2950:function(t,e,s){"use strict";s.r(e);var a=s(19),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"operators"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#operators"}},[t._v("#")]),t._v(" Operators")]),t._v(" "),s("p",[t._v("An operator is a character that represents an action. It tells the compiler/interpreter to perform specific mathematical, relational or logical operation and produce final result. PowerShell interprets in a specific way and categorizes accordingly like arithmetic operators perform operations primarily on numbers, but they also affect strings and other data types. Along with the basic operators,PowerShell has a number of operators that save time and coding effort(eg: -like,-match,-replace,etc).")]),t._v(" "),s("h2",{attrs:{id:"comparison-operators"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#comparison-operators"}},[t._v("#")]),t._v(" Comparison Operators")]),t._v(" "),s("p",[t._v("PowerShell comparison operators are comprised of a leading dash ("),s("code",[t._v("-")]),t._v(") followed by a name ("),s("code",[t._v("eq")]),t._v(" for "),s("code",[t._v("equal")]),t._v(", "),s("code",[t._v("gt")]),t._v(" for "),s("code",[t._v("greater than")]),t._v(", etc...).")]),t._v(" "),s("p",[t._v("Names can be preceded by special characters to modify the behavior of the operator:")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("i "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Case-Insensitive Explicit (-ieq)")]),t._v("\nc "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Case-Sensitive Explicit (-ceq)")]),t._v("\n\n")])])]),s("p",[t._v('Case-Insensitive is the default if not specified, ("a" -eq "A") same as ("a" -ieq "A").')]),t._v(" "),s("p",[t._v("Simple comparison operators:")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-eq")]),t._v(" 2    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Equal to (==)")]),t._v("\n2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-ne")]),t._v(" 4    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Not equal to (!=)")]),t._v("\n5 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-gt")]),t._v(" 2    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Greater-than (>)")]),t._v("\n5 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-ge")]),t._v(" 5    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Greater-than or equal to (>=)")]),t._v("\n5 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-lt")]),t._v(" 10   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Less-than (<)")]),t._v("\n5 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-le")]),t._v(" 5    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Less-than or equal to (<=)")]),t._v("\n\n")])])]),s("p",[t._v("String comparison operators:")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyString"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-like")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*String"')]),t._v("            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Match using the wildcard character (*)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyString"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-notlike")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Other*"')]),t._v("          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Does not match using the wildcard character (*)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyString"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-match")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$String")]),t._v('^"')]),t._v("          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Matches a string using regular expressions")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyString"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-notmatch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$Other")]),t._v('^"')]),t._v("        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Does not match a string using regular expressions")]),t._v("\n\n")])])]),s("p",[t._v("Collection comparison operators:")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abc"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"def"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-contains")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"def"')]),t._v("            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Returns true when the value (right) is present")]),t._v("\n                                        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# in the array (left)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abc"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"def"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-notcontains")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123"')]),t._v("         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Returns true when the value (right) is not present")]),t._v("\n                                        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# in the array (left)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"def"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abc"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"def"')]),t._v("                  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Returns true when the value (left) is present")]),t._v("\n                                        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# in the array (right)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-notin")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abc"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"def"')]),t._v("               "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Returns true when the value (left) is not present")]),t._v("\n                                        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# in the array (right)")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"arithmetic-operators"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arithmetic-operators"}},[t._v("#")]),t._v(" Arithmetic Operators")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" 2      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Addition")]),t._v("\n1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 2      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Subtraction")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("1         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Set negative value")]),t._v("\n1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" 2      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Multiplication")]),t._v("\n1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" 2      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Division")]),t._v("\n1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" 2      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Modulus")]),t._v("\n100 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-shl")]),t._v(" 2 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Bitwise Shift-left")]),t._v("\n100 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-shr")]),t._v(" 1 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Bitwise Shift-right")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"assignment-operators"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#assignment-operators"}},[t._v("#")]),t._v(" Assignment Operators")]),t._v(" "),s("p",[t._v("Simple arithmetic:")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$var")]),t._v(" = 1      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Assignment. Sets the value of a variable to the specified value")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" 2     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Addition. Increases the value of a variable by the specified value")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),t._v(" 1     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Subtraction. Decreases the value of a variable by the specified value")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*=")]),t._v(" 2     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Multiplication. Multiplies the value of a variable by the specified value")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/=")]),t._v(" 2     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Division. Divides the value of a variable by the specified value")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%=")]),t._v(" 2     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Modulus. Divides the value of a variable by the specified value and then")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# assigns the remainder (modulus) to the variable")]),t._v("\n\n")])])]),s("p",[t._v("Increment and decrement:")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$var")]),t._v("+"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Increases the value of a variable, assignable property, or array element by 1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$var")]),t._v("-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Decreases the value of a variable, assignable property, or array element by 1")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"redirection-operators"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redirection-operators"}},[t._v("#")]),t._v(" Redirection Operators")]),t._v(" "),s("p",[t._v("Success output stream:")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("cmdlet > file     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Send success output to file, overwriting existing content")]),t._v("\ncmdlet >> file    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Send success output to file, appending to existing content")]),t._v("\ncmdlet 1>&2       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Send success and error output to error stream")]),t._v("\n\n")])])]),s("p",[t._v("Error output stream:")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("cmdlet 2> file    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Send error output to file, overwriting existing content")]),t._v("\ncmdlet 2>> file   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Send error output to file, appending to existing content")]),t._v("\ncmdlet 2>&1       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Send success and error output to success output stream")]),t._v("\n\n")])])]),s("p",[t._v("Warning output stream: (PowerShell 3.0+)")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("cmdlet 3> file    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Send warning output to file, overwriting existing content")]),t._v("\ncmdlet 3>> file   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Send warning output to file, appending to existing content")]),t._v("\ncmdlet 3>&1       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Send success and warning output to success output stream")]),t._v("\n\n")])])]),s("p",[t._v("Verbose output stream: (PowerShell 3.0+)")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("cmdlet 4> file    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Send verbose output to file, overwriting existing content")]),t._v("\ncmdlet 4>> file   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Send verbose output to file, appending to existing content")]),t._v("\ncmdlet 4>&1       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Send success and verbose output to success output stream")]),t._v("\n\n")])])]),s("p",[t._v("Debug output stream: (PowerShell 3.0+)")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("cmdlet 5> file    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Send debug output to file, overwriting existing content")]),t._v("\ncmdlet 5>> file   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Send debug output to file, appending to existing content")]),t._v("\ncmdlet 5>&1       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Send success and debug output to success output stream")]),t._v("\n\n")])])]),s("p",[t._v("Information output stream: (PowerShell 5.0+)")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("cmdlet 6> file    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Send information output to file, overwriting existing content")]),t._v("\ncmdlet 6>> file   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Send information output to file, appending to existing content")]),t._v("\ncmdlet 6>&1       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Send success and information output to success output stream ")]),t._v("\n\n")])])]),s("p",[t._v("All output streams:")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("cmdlet "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("> file    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Send all output streams to file, overwriting existing content")]),t._v("\ncmdlet "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(">> file   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Send all output streams to file, appending to existing content")]),t._v("\ncmdlet "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(">&1       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Send all output streams to success output stream")]),t._v("\n\n")])])]),s("p",[t._v("Differences to the pipe operator ("),s("code",[t._v("|")]),t._v(")")]),t._v(" "),s("p",[t._v("Redirection operators only redirect streams to files or streams to streams. The pipe operator pumps an object down the pipeline to a cmdlet or the output. How the pipeline works differs in general from how redirection works and can be read on "),s("a",{attrs:{href:"http://stackoverflow.com/documentation/powershell/3937/working-with-the-powershell-pipeline#t=201704260811349712597",target:"_blank",rel:"noopener noreferrer"}},[t._v("Working with the PowerShell pipeline"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"mixing-operand-types-the-type-of-the-left-operand-dictates-the-behavior"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mixing-operand-types-the-type-of-the-left-operand-dictates-the-behavior"}},[t._v("#")]),t._v(" Mixing operand types : the type of the left operand dictates the behavior.")]),t._v(" "),s("p",[s("strong",[t._v("For Addition")])]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"4"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" 2         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# Gives "42"')]),t._v("\n4 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),t._v("         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Gives 6")]),t._v("\n1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("3 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# Gives 1,2,3,"Hello"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" 1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("3 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# Gives "Hello1 2 3"')]),t._v("\n\n")])])]),s("p",[s("strong",[t._v("For Multiplication")])]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" 2   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# Gives "33"')]),t._v("\n2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3"')]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Gives 6")]),t._v("\n1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("3 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" 2 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Gives 1,2,3,1,2,3")]),t._v("\n2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" 1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("3 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Gives an error op_Multiply is missing")]),t._v("\n\n")])])]),s("p",[t._v("The impact may have hidden consequences on comparison operators :")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$a")]),t._v(" = "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Read-Host")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Enter a number"')]),t._v("\nEnter a number : 33\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-gt")]),t._v(" 5\nFalse\n\n")])])]),s("h2",{attrs:{id:"logical-operators"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#logical-operators"}},[t._v("#")]),t._v(" Logical Operators")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-and")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Logical and")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-or")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Logical or")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-xor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Logical exclusive or")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-not")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Logical not")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Logical not")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"string-manipulation-operators"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#string-manipulation-operators"}},[t._v("#")]),t._v(" String Manipulation Operators")]),t._v(" "),s("p",[t._v("Replace operator:")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("-replace")]),t._v(" operator replaces a pattern in an input value using a regular expression. This operator uses two arguments (separated by a comma): a regular expression pattern and its replacement value (which is optional and an empty string by default).")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The rain in Seattle"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-replace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rain'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hail'")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Returns: The hail in Seattle")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kenmyer@contoso.com"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-replace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'^[\\w]+@(.+)'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$1'")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Returns: contoso.com")]),t._v("\n\n")])])]),s("p",[t._v("Split and Join operators:")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("-split")]),t._v(" operator splits a string into an array of sub-strings.")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A B C"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("split "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),t._v("      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Returns an array string collection object containing A,B and C.")]),t._v("\n\n")])])]),s("p",[t._v("The "),s("code",[t._v("-join")]),t._v(" operator joins an array of strings into a single string.")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"E"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"F"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"G"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-join")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('":"')]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Returns a single string: E:F:G")]),t._v("\n\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);