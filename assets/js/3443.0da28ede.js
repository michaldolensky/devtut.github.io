(window.webpackJsonp=window.webpackJsonp||[]).push([[3443],{3787:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vba-option-keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vba-option-keyword"}},[t._v("#")]),t._v(" VBA Option Keyword")]),t._v(" "),a("h2",{attrs:{id:"option-explicit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#option-explicit"}},[t._v("#")]),t._v(" Option Explicit")]),t._v(" "),a("p",[t._v("It is deemed best practice to always use "),a("code",[t._v("Option Explicit")]),t._v(" in VBA as it forces the developer to declare all their variables before use. This has other benefits too, such as auto-capitalization for declared variable names and IntelliSense.")]),t._v(" "),a("div",{staticClass:"language-vb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Option")]),t._v(" Explicit\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v(" OptionExplicit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Integer")]),t._v("\n    a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n    b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'// Causes compile error as 'b' is not declared")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v("\n\n")])])]),a("p",[t._v("Setting "),a("strong",[t._v("Require Variable Declaration")]),t._v(" within the VBE's Tools ► Options ► Editor property page will put the "),a("strong",[a("a",{attrs:{href:"https://msdn.microsoft.com/en-us/library/y9341s4f.aspx",rel:"nofollow"}},[t._v("Option\nExplicit")])]),t._v(" statement at the top of each newly created code sheet.")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://i.stack.imgur.com/C29RO.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"http://i.stack.imgur.com/C29RO.png",alt:"require_variable_declaration"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("This will avoid silly coding mistakes like misspellings as well as influencing you to use the correct variable type in the variable declaration. (Some more examples are given at "),a("a",{attrs:{href:"http://stackoverflow.com/documentation/excel-vba/1107/vba-best-practices/3554/always-use-option-explicit#t=201607281607357211291",target:"_blank",rel:"noopener noreferrer"}},[t._v('ALWAYS Use "Option Explicit"'),a("OutboundLink")],1),t._v(".)")]),t._v(" "),a("h2",{attrs:{id:"option-base-0-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#option-base-0-1"}},[t._v("#")]),t._v(" Option Base {0 | 1}")]),t._v(" "),a("p",[a("code",[t._v("Option Base")]),t._v(" is used to declare the default lower bound of "),a("strong",[t._v("array")]),t._v(" elements. It is declared at module level and is valid only for the current module.")]),t._v(" "),a("p",[t._v("By default (and thus if no Option Base is specified), the Base is 0. Which means that the first element of any array declared in the module has an index of 0.")]),t._v(" "),a("p",[t._v("If "),a("code",[t._v("Option Base 1")]),t._v(" is specified, the first array element has the index 1")]),t._v(" "),a("h3",{attrs:{id:"example-in-base-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-in-base-0"}},[t._v("#")]),t._v(" Example in Base 0 :")]),t._v(" "),a("div",{staticClass:"language-vb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Option")]),t._v(" Base "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v(" BaseZero"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" myStrings "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Variant")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("' Create an array out of the Variant, having 3 fruits elements")]),t._v("\n    myStrings "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Apple"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Orange"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Peach"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n    Debug"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Print LBound"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myStrings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\' This Prints "0"')]),t._v("\n    Debug"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Print UBound"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myStrings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\' This print "2", because we have 3 elements beginning at 0 -> 0,1,2')]),t._v("\n            \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("For")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("To")]),t._v(" UBound"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myStrings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n        Debug"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Print myStrings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\' This will print "Apple", then "Orange", then "Peach"')]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Next")]),t._v(" i\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"same-example-with-base-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#same-example-with-base-1"}},[t._v("#")]),t._v(" Same Example with Base 1")]),t._v(" "),a("div",{staticClass:"language-vb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Option")]),t._v(" Base "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v(" BaseOne"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" myStrings "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Variant")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("' Create an array out of the Variant, having 3 fruits elements")]),t._v("\n    myStrings "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Apple"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Orange"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Peach"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n    Debug"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Print LBound"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myStrings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\' This Prints "1"')]),t._v("\n    Debug"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Print UBound"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myStrings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\' This print "3", because we have 3 elements beginning at 1 -> 1,2,3')]),t._v("\n            \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("For")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("To")]),t._v(" UBound"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myStrings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n        Debug"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Print myStrings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\' This triggers an error 9 "Subscript out of range"')]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Next")]),t._v(" i\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v("\n\n")])])]),a("p",[t._v("The second example generated a "),a("a",{attrs:{href:"https://msdn.microsoft.com/en-us/library/aa264519.aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("Subscript out of range (Error 9)"),a("OutboundLink")],1),t._v(" at the first loop stage because an attempt to access the index 0 of the array was made, and this index doesn't exists as the module is declared with "),a("code",[t._v("Base 1")])]),t._v(" "),a("h3",{attrs:{id:"the-correct-code-with-base-1-is"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-correct-code-with-base-1-is"}},[t._v("#")]),t._v(" The correct code with Base 1 is :")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('\n   For i = 1 To UBound(myStrings)\n    \n        Debug.Print myStrings(i) \' This will print "Apple", then "Orange", then "Peach"\n    \n    Next i\n\n')])])]),a("p",[t._v("It should be noted that the "),a("a",{attrs:{href:"https://msdn.microsoft.com/en-us/library/aa263365.aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("Split function"),a("OutboundLink")],1),t._v(" "),a("strong",[t._v("always")]),t._v(" creates an array with a zero-based element index regardless of any "),a("code",[t._v("Option Base")]),t._v(" setting. Examples on how to use the "),a("strong",[t._v("Split")]),t._v(" function can be found "),a("a",{attrs:{href:"http://stackoverflow.com/documentation/vba/3064/arrays/10413/use-of-split-to-create-an-array-from-a-string#t=201608041103181263837",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1)]),t._v(" "),a("blockquote"),t._v(" "),a("dl",[a("dt",[a("sup",[t._v("Split Function")])]),a("dd",[a("sub",[t._v("Returns a zero-based, one-dimensional array containing a specified number of substrings.")])])]),t._v(" "),a("p",[t._v("In Excel, the "),a("code",[t._v("Range.Value")]),t._v(" and "),a("code",[t._v("Range.Formula")]),t._v(" properties for a multi-celled range "),a("strong",[t._v("always")]),t._v(" returns a 1-based 2D Variant array.")]),t._v(" "),a("p",[t._v("Likewise, in ADO, the "),a("code",[t._v("Recordset.GetRows")]),t._v(" method "),a("strong",[t._v("always")]),t._v(" returns a 1-based 2D array.")]),t._v(" "),a("p",[t._v("One recommended 'best practice' is to always use the "),a("a",{attrs:{href:"https://msdn.microsoft.com/en-us/library/t9a7w1ac.aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("LBound"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"https://msdn.microsoft.com/en-us/library/office/gg278658.aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("UBound"),a("OutboundLink")],1),t._v(" functions to determine the extents of an array.")]),t._v(" "),a("div",{staticClass:"language-vb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'for single dimensioned array")]),t._v("\nDebug"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Print LBound"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('":"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" UBound"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Long")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("For")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" LBound"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("To")]),t._v(" UBound"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    Debug"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Print arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Next")]),t._v(" i\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'for two dimensioned array")]),t._v("\nDebug"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Print LBound"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('":"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" UBound"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nDebug"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Print LBound"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('":"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" UBound"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Long")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("For")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" LBound"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("To")]),t._v(" UBound"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("For")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" LBound"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("To")]),t._v(" UBound"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n         Debug"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Print arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Next")]),t._v(" j\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Next")]),t._v(" i\n\n")])])]),a("p",[t._v("The "),a("code",[t._v("Option Base 1")]),t._v(" must be at the top of every code module where an array is created or re-dimensioned if arrays are to be consistently created with an lower boundary of 1.")]),t._v(" "),a("h2",{attrs:{id:"option-compare-binary-text-database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#option-compare-binary-text-database"}},[t._v("#")]),t._v(" Option Compare {Binary | Text | Database}")]),t._v(" "),a("h3",{attrs:{id:"option-compare-binary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#option-compare-binary"}},[t._v("#")]),t._v(" Option Compare Binary")]),t._v(" "),a("p",[t._v("Binary comparison makes all checks for string equality within a module/class case "),a("strong",[t._v("sensitive")]),t._v(". Technically, with this option, string comparisons are performed using sort order of the binary representations of each character.")]),t._v(" "),a("blockquote"),t._v(" "),a("p",[t._v("A < B < E < Z < a < b < e < z")]),t._v(" "),a("p",[t._v("If no Option Compare is specified in a module, Binary is used by default.")]),t._v(" "),a("div",{staticClass:"language-vb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Option")]),t._v(" Compare Binary\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v(" CompareBinary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" foo "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" bar "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'// Case sensitive")]),t._v("\n    foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abc"')]),t._v("\n    bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ABC"')]),t._v("\n    \n    Debug"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Print "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\'// Prints "False"')]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'// Still differentiates accented characters")]),t._v("\n    foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ábc"')]),t._v("\n    bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abc"')]),t._v("\n    \n    Debug"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Print "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\'// Prints "False"')]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\'// "b" (Chr 98) is greater than "a" (Chr 97)')]),t._v("\n    foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),t._v("\n    bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b"')]),t._v("\n    \n    Debug"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Print "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\'// Prints "True"')]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\'// "b" (Chr 98) is NOT greater than "á" (Chr 225)')]),t._v("\n    foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"á"')]),t._v("\n    bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b"')]),t._v("\n    \n    Debug"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Print "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\'// Prints "False"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"option-compare-text"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#option-compare-text"}},[t._v("#")]),t._v(" Option Compare Text")]),t._v(" "),a("p",[t._v("Option Compare Text makes all string comparisons within a module/class use a case "),a("strong",[t._v("insensitive")]),t._v(" comparison.")]),t._v(" "),a("blockquote"),t._v(" "),a("p",[t._v("(A | a) < (B | b) < (Z | z)")]),t._v(" "),a("div",{staticClass:"language-vb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Option")]),t._v(" Compare Text\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v(" CompareText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" foo "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" bar "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'// Case insensitivity")]),t._v("\n    foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abc"')]),t._v("\n    bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ABC"')]),t._v("\n    \n    Debug"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Print "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\'// Prints "True"')]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'// Still differentiates accented characters")]),t._v("\n    foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ábc"')]),t._v("\n    bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abc"')]),t._v("\n    \n    Debug"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Print "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\'// Prints "False"')]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\'// "b" still comes after "a" or "á"')]),t._v("\n    foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"á"')]),t._v("\n    bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b"')]),t._v("\n    \n    Debug"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Print "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\'// Prints "True"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"option-compare-database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#option-compare-database"}},[t._v("#")]),t._v(" Option Compare Database")]),t._v(" "),a("p",[t._v("Option Compare Database is only available within MS Access. It sets the module/class to use the current database settings to determine whether to use Text or Binary mode.")]),t._v(" "),a("p",[a("strong",[t._v("Note: The use of this setting is discouraged unless the module is used for writing custom Access UDFs (User defined functions) that should treat text comparisons in the same manner as SQL queries in that database.")])]),t._v(" "),a("h4",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("ul",[a("li",[t._v("Option optionName [value]")]),t._v(" "),a("li",[t._v("Option Explicit")]),t._v(" "),a("li",[t._v("Option Compare {Text | Binary | Database}")]),t._v(" "),a("li",[t._v("Option Private Module")]),t._v(" "),a("li",[t._v("Option Base {0 | 1}")])]),t._v(" "),a("h4",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Option")]),t._v(" "),a("th",[t._v("Detail")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Explicit")]),t._v(" "),a("td",[a("strong",[t._v("Require variable declaration")]),t._v(" in the module it's specified in (ideally all of them); with this option specified, using an undeclared (/mispelled) variable becomes a compilation error.")])]),t._v(" "),a("tr",[a("td",[t._v("Compare Text")]),t._v(" "),a("td",[t._v('Makes the module\'s string comparisons be case-insensitive, based on system locale, prioritizing alphabetical equivalency (e.g. "a" = "A").')])]),t._v(" "),a("tr",[a("td",[t._v("Compare Binary")]),t._v(" "),a("td",[t._v("Default string comparison mode. Makes the module's string comparisons be case sensitive, comparing strings using the binary representation / numeric value of each character (e.g. ASCII).")])]),t._v(" "),a("tr",[a("td",[t._v("Compare Database")]),t._v(" "),a("td",[t._v("(MS-Access only) Makes the module's string comparisons work the way they would in an SQL statement.")])]),t._v(" "),a("tr",[a("td",[t._v("Private Module")]),t._v(" "),a("td",[t._v("Prevents the module's "),a("code",[t._v("Public")]),t._v(" member from being accessed from outside of the project that the module resides in, effectively hiding procedures from the host application (i.e. not available to use as macros or user-defined functions).")])]),t._v(" "),a("tr",[a("td",[t._v("Option Base 0")]),t._v(" "),a("td",[t._v("Default setting. Sets the implicit array lower bound to "),a("code",[t._v("0")]),t._v(" in a module. When an array is declared without an explicit lower boundary value, "),a("code",[t._v("0")]),t._v(" will be used.")])]),t._v(" "),a("tr",[a("td",[t._v("Option Base 1")]),t._v(" "),a("td",[t._v("Sets the implicit array lower bound to "),a("code",[t._v("1")]),t._v(" in a module. When an array is declared without an explicit lower boundary value, "),a("code",[t._v("1")]),t._v(" will be used.")])])])]),t._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),a("p",[t._v("It is much easier to control the boundaries of arrays by declaring the boundaries explicitly rather than letting the compiler fall back on an "),a("code",[t._v("Option Base {0|1}")]),t._v(" declaration. This can be done like so:")]),t._v(" "),a("div",{staticClass:"language-vb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" myStringsA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("To")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'// This has 6 elements (0 - 5)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" myStringsB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("To")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'// This has 5 elements (1 - 5)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" myStringsC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("To")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'// This has 3 elements (6 - 9)")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);