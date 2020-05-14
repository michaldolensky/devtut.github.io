(window.webpackJsonp=window.webpackJsonp||[]).push([[519],{866:function(t,e,a){"use strict";a.r(e);var s=a(19),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"pitfalls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pitfalls"}},[t._v("#")]),t._v(" Pitfalls")]),t._v(" "),a("h2",{attrs:{id:"whitespace-when-assigning-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#whitespace-when-assigning-variables"}},[t._v("#")]),t._v(" Whitespace When Assigning Variables")]),t._v(" "),a("p",[t._v("Whitespace matters when assigning variables.")]),t._v(" "),a("p",[t._v("The first two will result in syntax errors (or worse, executing an incorrect command). The last example will correctly set the variable "),a("code",[t._v("$foo")]),t._v(' to the text "bar".')]),t._v(" "),a("h2",{attrs:{id:"failed-commands-do-not-stop-script-execution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#failed-commands-do-not-stop-script-execution"}},[t._v("#")]),t._v(" Failed commands do not stop script execution")]),t._v(" "),a("p",[t._v("In most scripting languages, if a function call fails, it may throw an exception and stop execution of the program. Bash commands do not have exceptions, but they do have exit codes. A non-zero exit code signals failure, however, a non-zero exit code will not stop execution of the program.")]),t._v(" "),a("p",[t._v("This can lead to dangerous (although admittedly contrived) situations like so:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/bash")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/non/existent/directory\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf *\n\n")])])]),a("p",[t._v("If "),a("code",[t._v("cd")]),t._v("-ing to this directory fails, Bash will ignore the failure and move onto the next command, wiping clean the directory from where you ran the script.")]),t._v(" "),a("p",[t._v("The best way to deal with this problem is to make use of the "),a("a",{attrs:{href:"http://www.gnu.org/software/bash/manual/html_node/The-Set-Builtin.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("set"),a("OutboundLink")],1),t._v(" command:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/bash")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" -e\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/non/existent/directory\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf *\n\n")])])]),a("p",[a("code",[t._v("set -e")]),t._v(" tells Bash to exit the script immediately if any command returns a non-zero status.")]),t._v(" "),a("h2",{attrs:{id:"missing-the-last-line-in-a-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#missing-the-last-line-in-a-file"}},[t._v("#")]),t._v(" Missing The Last Line in a File")]),t._v(" "),a("p",[t._v("The C standard says that files should end with a new line, so if EOF comes at the end of a line, that line may not be missed by some commands. As an example:")]),t._v(" "),a("p",[t._v("To make sure this works correctly for in the above example, add a test so that it will continue the loop if the last line is not empty.")])])}),[],!1,null,null,null);e.default=n.exports}}]);