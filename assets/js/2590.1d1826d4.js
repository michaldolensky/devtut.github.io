(window.webpackJsonp=window.webpackJsonp||[]).push([[2590],{2936:function(t,r,e){"use strict";e.r(r);var n=e(19),s=Object(n.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"error-handling"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#error-handling"}},[t._v("#")]),t._v(" Error handling")]),t._v(" "),e("h2",{attrs:{id:"error-types"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#error-types"}},[t._v("#")]),t._v(" Error Types")]),t._v(" "),e("p",[t._v("An error is an error, one might wonder how could there be types in it. Well, with powershell the error broadly falls into two criteria,")]),t._v(" "),e("ul",[e("li",[t._v("Terminating error")]),t._v(" "),e("li",[t._v("Non-Terminating error")])]),t._v(" "),e("p",[t._v("As the name says Terminating errors will terminate the execution and a Non-Terminating Errors let the execution continue to next statement.")]),t._v(" "),e("blockquote"),t._v(" "),e("p",[t._v('This is true assuming that **$ErrorActionPreference** value is default\n(Continue). $ErrorActionPreference is a [Prefrence Variable](https://technet.microsoft.com/en-us/library/hh847796.aspx) which\ntells powershell what to do in case of an "Non-Terminating" error.')]),t._v(" "),e("p",[e("strong",[t._v("Terminating error")])]),t._v(" "),e("p",[t._v("A terminating error can be handled with a typical try catch, as below")]),t._v(" "),e("div",{staticClass:"language-powershell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Try")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Host")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Attempting Divide By Zero"')]),t._v("\n    1"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("0\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Catch")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Host")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A Terminating Error: Divide by Zero Caught!"')]),t._v(" \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),e("p",[t._v("The above snippet will execute and the error will be caught thru the catch block.")]),t._v(" "),e("p",[e("strong",[t._v("Non-Terminating Error")])]),t._v(" "),e("p",[t._v("A Non-Terminating error in the other hand will not be caught in the catch block by default. The reason behind that is a Non-Terminating error is not considered a critical error.")]),t._v(" "),e("div",{staticClass:"language-powershell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Try")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Stop-Process")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Id 123456\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Catch")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Host")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Non-Terminating Error: Invalid Process ID"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),e("p",[t._v("If you execute the above the line you wont get the output from catch block as since the error is not considered critical and the execution will simply continue from next command. However, the error will be displayed in the console. To handle a Non-Terminating error, you simple have to change the error preference.")]),t._v(" "),e("div",{staticClass:"language-powershell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Try")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Stop-Process")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Id 123456 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ErrorAction Stop\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Catch")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Non-Terminating Error: Invalid Process ID"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),e("p",[t._v("Now, with the updated Error preference, this error will be considered a Terminating error and will be caught in the catch block.")]),t._v(" "),e("p",[e("strong",[t._v("Invoking Terminating & Non-Terminating Errors:")])]),t._v(" "),e("p",[e("strong",[t._v("Write-Error")]),t._v(" cmdlet simply writes the error to the invoking host program. It doesn't stop the execution.  Where as "),e("strong",[t._v("throw")]),t._v(" will give you a terminating error and stop the execution")]),t._v(" "),e("div",{staticClass:"language-powershell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-host")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Going to try a non terminating Error "')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Error")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Non terminating"')]),t._v(" \n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-host")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Going to try a terminating Error "')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Terminating Error "')]),t._v(" \n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-host")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This Line wont be displayed"')]),t._v(" \n\n")])])])])}),[],!1,null,null,null);r.default=s.exports}}]);