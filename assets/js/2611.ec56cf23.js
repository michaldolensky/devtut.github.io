(window.webpackJsonp=window.webpackJsonp||[]).push([[2611],{2958:function(t,a,s){"use strict";s.r(a);var e=s(19),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"powershell-functions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#powershell-functions"}},[t._v("#")]),t._v(" PowerShell Functions")]),t._v(" "),s("p",[t._v("A function is basically a named block of code. When you call the function name, the script block within that function runs. It is a list of PowerShell statements that has a name that you assign. When you run a function, you type the function name.It is a method of saving time when tackling repetitive tasks. PowerShell formats in three parts: the keyword 'Function', followed by a Name, finally, the payload containing the script block, which is enclosed by curly/parenthesis style bracket.")]),t._v(" "),s("h2",{attrs:{id:"basic-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-parameters"}},[t._v("#")]),t._v(" Basic Parameters")]),t._v(" "),s("p",[t._v("A function can be defined with parameters using the param block:")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Greeting "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("param")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[Parameter(Mandatory,Position=0)]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[String]")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[Parameter(Mandatory,Position=1)]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[Int]")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$age")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello '),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$name")]),t._v(", you are "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$age")]),t._v(' years old."')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("Or using the simple function syntax:")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Greeting "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$age")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello '),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$name")]),t._v(", you are "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$age")]),t._v(' years old."')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[s("strong",[t._v("Note:")]),t._v(" Casting parameters is not required in either type of parameter definition.")]),t._v(" "),s("p",[t._v("Simple function syntax (SFS) has very limited capabilities in comparison to the param block."),s("br"),t._v("\nThough you can define parameters to be exposed within the function, you cannot specify "),s("a",{attrs:{href:"https://msdn.microsoft.com/en-us/library/ms714348(v=vs.85).aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("Parameter Attributes"),s("OutboundLink")],1),t._v(", utilize "),s("a",{attrs:{href:"https://msdn.microsoft.com/en-gb/library/ms714432(v=vs.85).aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("Parameter Validation"),s("OutboundLink")],1),t._v(", include "),s("code",[t._v("[CmdletBinding()]")]),t._v(", with SFS (and this is a non-exhaustive list).")]),t._v(" "),s("p",[t._v("Functions can be invoked with ordered or named parameters.")]),t._v(" "),s("p",[t._v("The order of the parameters on the invocation is matched to the order of the declaration in the function header (by default), or can be specified using the "),s("code",[t._v("Position")]),t._v(" Parameter Attribute (as shown in the advanced function example, above).")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$greeting")]),t._v(" = "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Greeting "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Jim"')]),t._v(" 82\n\n")])])]),s("p",[t._v("Alternatively, this function can be invoked with named parameters")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$greeting")]),t._v(" = "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Greeting "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Bob"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("age 82\n\n")])])]),s("h2",{attrs:{id:"advanced-function"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#advanced-function"}},[t._v("#")]),t._v(" Advanced Function")]),t._v(" "),s("p",[t._v("This is a copy of the advanced function snippet from the Powershell ISE.  Basically this is a template for many of the things you can use with advanced functions in Powershell.  Key points to note:")]),t._v(" "),s("ul",[s("li",[t._v("get-help integration - the beginning of the function contains a comment block that is set up to be read by the get-help cmdlet.  The function block may be located at the end, if desired.")]),t._v(" "),s("li",[t._v("cmdletbinding - function will behave like a cmdlet")]),t._v(" "),s("li",[t._v("parameters")]),t._v(" "),s("li",[t._v("parameter sets")])]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("<#\n.Synopsis\n   Short description\n.DESCRIPTION\n   Long description\n.EXAMPLE\n   Example of how to use this cmdlet\n.EXAMPLE\n   Another example of how to use this cmdlet\n.INPUTS\n   Inputs to this cmdlet (if any)\n.OUTPUTS\n   Output from this cmdlet (if any)\n.NOTES\n   General notes\n.COMPONENT\n   The component this cmdlet belongs to\n.ROLE\n   The role this cmdlet belongs to\n.FUNCTIONALITY\n   The functionality that best describes this cmdlet\n#>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" Verb"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Noun\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("CmdletBinding"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DefaultParameterSetName="),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Parameter Set 1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                  SupportsShouldProcess="),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("$true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                  PositionalBinding="),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("$false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                  HelpUri = "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://www.microsoft.com/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                  ConfirmImpact="),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Medium'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[Alias()]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[OutputType([String])]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Param")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Param1 help description")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Parameter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Mandatory="),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("$true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                   ValueFromPipeline="),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("$true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                   ValueFromPipelineByPropertyName="),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("$true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                   ValueFromRemainingArguments="),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("$false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                   Position=0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                   ParameterSetName="),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Parameter Set 1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[ValidateNotNull()]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[ValidateNotNullOrEmpty()]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[ValidateCount(0,5)]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ValidateSet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sun"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"moon"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"earth"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Alias"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" \n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$Param1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Param2 help description")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Parameter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ParameterSetName="),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Parameter Set 1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[AllowNull()]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[AllowEmptyCollection()]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[AllowEmptyString()]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[ValidateScript({$true})]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[ValidateRange(0,5)]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[int]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$Param2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Param3 help description")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Parameter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ParameterSetName="),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Another Parameter Set'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ValidatePattern"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[a-z]*"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[ValidateLength(0,15)]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[String]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$Param3")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Begin")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Process")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$pscmdlet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ShouldProcess"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Target"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Operation"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"mandatory-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mandatory-parameters"}},[t._v("#")]),t._v(" Mandatory Parameters")]),t._v(" "),s("p",[t._v("Parameters to a function can be marked as mandatory")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" Get"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Greeting"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("param")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[Parameter(Mandatory=$true)]")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$name")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World '),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$name")]),t._v('"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("If the function is invoked without a value, the command line will prompt for the value:")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$greeting")]),t._v(" = Get"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Greeting \n\ncmdlet Get"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Greeting at command pipeline position 1\nSupply values "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the following parameters:\nname: \n\n")])])]),s("h2",{attrs:{id:"parameter-validation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameter-validation"}},[t._v("#")]),t._v(" Parameter Validation")]),t._v(" "),s("p",[t._v("There are a variety of ways to validate parameter entry, in PowerShell.")]),t._v(" "),s("p",[t._v("Instead of writing code within functions or scripts to validate parameter values, these ParameterAttributes will throw if invalid values are passed.")]),t._v(" "),s("h3",{attrs:{id:"validateset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#validateset"}},[t._v("#")]),t._v(" ValidateSet")]),t._v(" "),s("p",[t._v("Sometimes we need to restrict the possible values that a parameter can accept. Say we want to allow only red, green and blue for the "),s("code",[t._v("$Color")]),t._v(" parameter in a script or function.")]),t._v(" "),s("p",[t._v("We can use the "),s("code",[t._v("ValidateSet")]),t._v(" parameter attribute to restrict this. It has the additional benefit of allowing tab completion when setting this argument (in some environments).")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("param")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ValidateSet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'red'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'green'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blue'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("IgnoreCase"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[string]")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$Color")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v("You can also specify "),s("code",[t._v("IgnoreCase")]),t._v(" to disable case sensitivity.")]),t._v(" "),s("h3",{attrs:{id:"validaterange"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#validaterange"}},[t._v("#")]),t._v(" ValidateRange")]),t._v(" "),s("p",[t._v("This method of parameter validation takes a min and max Int32 value, and requires the parameter to be within that range.")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("param")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[ValidateRange(0,120)]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[Int]")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$Age")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"validatepattern"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#validatepattern"}},[t._v("#")]),t._v(" ValidatePattern")]),t._v(" "),s("p",[t._v("This method of parameter validation accepts parameters that match the regex pattern specified.")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("param")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ValidatePattern"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\w{4-6}\\d{2}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[string]")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$UserName")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"validatelength"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#validatelength"}},[t._v("#")]),t._v(" ValidateLength")]),t._v(" "),s("p",[t._v("This method of parameter validation tests the length of the passed string.")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("param")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[ValidateLength(0,15)]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[String]")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$PhoneNumber")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"validatecount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#validatecount"}},[t._v("#")]),t._v(" ValidateCount")]),t._v(" "),s("p",[t._v("This method of parameter validation tests the amount of arguments passed in, for example, an array of strings.")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("param")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[ValidateCount(1,5)]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[String[]]")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ComputerName")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"validatescript"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#validatescript"}},[t._v("#")]),t._v(" ValidateScript")]),t._v(" "),s("p",[t._v("Finally, the ValidateScript method is extraordinarily flexible, taking a scriptblock and evaluating it using $_ to represent the passed argument. It then passes the argument if the result is $true (including any output as valid).")]),t._v(" "),s("p",[t._v("This can be used to test that a file exists:")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("param")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[ValidateScript({Test-Path $_})]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[IO.FileInfo]")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$Path")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v("To check that a user exists in AD:")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("param")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[ValidateScript({Get-ADUser $_})]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[String]")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$UserName")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v("And pretty much anything else you can write (as it's not restricted to oneliners):")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("param")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ValidateScript"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$AnHourAgo")]),t._v(" = "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get-Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AddHours"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-lt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$AnHourAgo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AddMinutes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-and")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-gt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$AnHourAgo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AddMinutes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("$true")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"That\'s not within five minutes. Try again."')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[String]")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$TimeAboutAnHourAgo")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"simple-function-with-no-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simple-function-with-no-parameters"}},[t._v("#")]),t._v(" Simple Function with No Parameters")]),t._v(" "),s("p",[t._v("This is an example of a function which returns a string.  In the example, the function is called in a statement assigning a value to a variable.  The value in this case is the return value of the function.")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" Get"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Greeting"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Invoking the function")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$greeting")]),t._v(" = Get"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Greeting\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# demonstrate output")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$greeting")]),t._v("\nGet"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Greeting\n\n")])])]),s("p",[s("code",[t._v("function")]),t._v(" declares the following code to be a function.")]),t._v(" "),s("p",[s("code",[t._v("Get-Greeting")]),t._v(" is the name of the function.  Any time that function needs to be used in the script, the function can be called by means of invoking it by name.")]),t._v(" "),s("p",[s("code",[t._v("{ ... }")]),t._v(" is the script block that is executed by the function.")]),t._v(" "),s("p",[t._v("If the above code is executed in the ISE, the results would be something like:")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("Hello World\nHello World\n\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);