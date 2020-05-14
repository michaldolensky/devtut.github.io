(window.webpackJsonp=window.webpackJsonp||[]).push([[526],{871:function(e,s,t){"use strict";t.r(s);var a=t(19),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"script-shebang"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#script-shebang"}},[e._v("#")]),e._v(" Script shebang")]),e._v(" "),t("h2",{attrs:{id:"env-shebang"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#env-shebang"}},[e._v("#")]),e._v(" Env shebang")]),e._v(" "),t("p",[e._v("To execute a script file with the "),t("code",[e._v("bash")]),e._v(" executable found in the "),t("code",[e._v("PATH")]),e._v(" environment variable by using the executable "),t("code",[e._v("env")]),e._v(", the "),t("strong",[e._v("first line")]),e._v(" of a script file must indicate the absolute path to the "),t("code",[e._v("env")]),e._v(" executable with the argument "),t("code",[e._v("bash")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[e._v("#!/usr/bin/env bash")]),e._v("\n\n")])])]),t("p",[e._v("The "),t("code",[e._v("env")]),e._v(" path in the shebang is resolved and used only if a script is directly launch like this:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("script.sh\n\n")])])]),t("p",[e._v("The script must have execution permission.")]),e._v(" "),t("p",[e._v("The shebang is ignored when a "),t("code",[e._v("bash")]),e._v(" interpreter is explicitly indicated to execute a script:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("bash")]),e._v(" script.sh\n\n")])])]),t("h2",{attrs:{id:"direct-shebang"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#direct-shebang"}},[e._v("#")]),e._v(" Direct shebang")]),e._v(" "),t("p",[e._v("To execute a script file with the "),t("code",[e._v("bash")]),e._v(" interpreter, the "),t("strong",[e._v("first line")]),e._v(" of a script file must indicate the absolute path to the "),t("code",[e._v("bash")]),e._v(" executable to use:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[e._v("#!/bin/bash")]),e._v("\n\n")])])]),t("p",[e._v("The "),t("code",[e._v("bash")]),e._v(" path in the shebang is resolved and used only if a script is directly launch like this:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("./script.sh\n\n")])])]),t("p",[e._v("The script must have execution permission.")]),e._v(" "),t("p",[e._v("The shebang is ignored when a "),t("code",[e._v("bash")]),e._v(" interpreter is explicitly indicated to execute a script:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("bash")]),e._v(" script.sh\n\n")])])]),t("h2",{attrs:{id:"other-shebangs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#other-shebangs"}},[e._v("#")]),e._v(" Other shebangs")]),e._v(" "),t("p",[e._v("There are two kinds of programs the kernel knows of. A binary program is identified by it's ELF ("),t("strong",[e._v("E")]),e._v("xtenable"),t("strong",[e._v("L")]),e._v("oadable"),t("strong",[e._v("F")]),e._v("ormat) header, which is usually produced by a compiler. The second one are scripts of any kind.")]),e._v(" "),t("p",[e._v("If a file starts in the very first line with the sequence "),t("strong",[e._v("#!")]),e._v(' then the next string has to be a pathname of an interpreter. If the kernel reads this line, it calls the interpreter named by this pathname and gives all of the following words in this line as arguments to the interpreter.\nIf there is no file named "something" or "wrong":')]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[e._v("#!/bin/bash something wrong")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"This line never gets printed"')]),e._v("\n\n")])])]),t("p",[e._v('bash tries to execute its argument "something wrong" which doesn\'t exist.\nThe name of the script file is added too. To see this clearly use an '),t("strong",[e._v("echo")]),e._v(" shebang:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('#"/bin/echo something wrong ')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# and now call this script named "thisscript" like so:')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# thisscript one two")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# the output will be:")]),e._v("\nsomething wrong ./thisscript one two\n\n")])])]),t("p",[e._v("Some programs like "),t("strong",[e._v("awk")]),e._v(" use this technique to run longer scripts residing in a disk file.")]),e._v(" "),t("h4",{attrs:{id:"syntax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),t("li",[e._v("\nUse `/bin/bash` as the bash interpreter:\n#!/bin/bash\n")]),e._v(" "),t("li",[e._v("\nSearch the bash interpreter in the `PATH` environment variable with `env`executable:\n#!/usr/bin/env bash\n")]),e._v(" "),t("h4",{attrs:{id:"remarks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[e._v("#")]),e._v(" Remarks")]),e._v(" "),t("p",[e._v("A common mistake is to try to execute Windows end-line formatted "),t("code",[e._v("\\r\\n")]),e._v(" script files on UNIX/Linux systems, in this case the used script interpreter in the shebang is:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("/bin/bash"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("r\n\n")])])]),t("p",[e._v("And is obliviously not found but can be hard to figure out.")])])}),[],!1,null,null,null);s.default=n.exports}}]);