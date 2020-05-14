(window.webpackJsonp=window.webpackJsonp||[]).push([[1911],{2257:function(e,t,a){"use strict";a.r(t);var n=a(19),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"debugging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#debugging"}},[e._v("#")]),e._v(" Debugging")]),e._v(" "),a("h2",{attrs:{id:"working-with-breakpoints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#working-with-breakpoints"}},[e._v("#")]),e._v(" Working with Breakpoints")]),e._v(" "),a("h3",{attrs:{id:"definition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#definition"}},[e._v("#")]),e._v(" Definition")]),e._v(" "),a("blockquote"),e._v(" "),a("p",[a("strong",[e._v("In software development, a "),a("strong",[e._v("breakpoint")]),e._v(" is an intentional stopping or pausing place in a program, put in place for debugging purposes.")]),e._v(" "),a("strong",[e._v("More generally, a breakpoint is a means of acquiring knowledge about a program during its execution. During the interruption, the programmer inspects the test environment (general purpose registers, memory, logs, files, etc.) to find out whether the program is functioning as expected. In practice, a breakpoint consists of one or more conditions that determine when a program's execution should be interrupted.")]),e._v("\n-Wikipedia")]),e._v(" "),a("h3",{attrs:{id:"breakpoints-in-matlab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#breakpoints-in-matlab"}},[e._v("#")]),e._v(" Breakpoints in MATLAB")]),e._v(" "),a("h3",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),a("p",[e._v("In MATLAB, when execution pauses at a breakpoint, variables existing in the current workspace (a.k.a. "),a("strong",[e._v("scope")]),e._v(") or any of the calling workspaces, can be inspected (and usually also modified).")]),e._v(" "),a("h3",{attrs:{id:"types-of-breakpoints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#types-of-breakpoints"}},[e._v("#")]),e._v(" Types of Breakpoints")]),e._v(" "),a("p",[e._v("MATLAB allow users to place two types of breakpoints in "),a("code",[e._v(".m")]),e._v(" files:")]),e._v(" "),a("ul",[a("li",[e._v('Standard (or "'),a("strong",[e._v("unrestricted")]),e._v('") breakpoints (shown in red) - pause execution whenever the marked line is reached.')]),e._v(" "),a("li",[e._v('"Conditional" breakpoints (shown in yellow) - pause execution whenever the marked line is reached AND the condition defined in the breakpoint is evaluated as '),a("code",[e._v("true")]),e._v(".")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://i.stack.imgur.com/0ZYRW.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i.stack.imgur.com/0ZYRW.png",alt:"Different breakpoint symbols in the GUI"}}),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"placing-breakpoints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#placing-breakpoints"}},[e._v("#")]),e._v(" Placing Breakpoints")]),e._v(" "),a("p",[e._v("Both types of breakpoints can be created in several ways:")]),e._v(" "),a("li",[e._v("\nUsing the MATLAB Editor GUI, by right clicking the horizontal line next to the line number.\n")]),e._v(" "),a("li",[e._v("\nUsing the `dbstop` command:\n"),a("div",{staticClass:"language-matlab extra-class"},[a("pre",{pre:!0,attrs:{class:"language-matlab"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("% Create an unrestricted breakpoint:")]),e._v("\ndbstop in file at location\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("% Create a conditional breakpoint:")]),e._v("\ndbstop in file at location "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" expression\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("% Examples and special cases: ")]),e._v("\ndbstop in fit at "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("99")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("% Standard unrestricted breakpoint.")]),e._v("\n\ndbstop in fit at "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("99")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" nargin"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("% Standard conditional breakpoint.")]),e._v("\n\ndbstop "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" error "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("% This special type of breakpoint is not limited to a specific file, and")]),e._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v('% will trigger *whenever* an error is encountered in "debuggable" code.')]),e._v("\n\ndbstop in file "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("% This will create an unrestricted breakpoint on the first executable line")]),e._v("\n               "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v('% of "file".')]),e._v("\n\ndbstop "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" naninf "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("% This special breakpoint will trigger whenever a computation result ")]),e._v("\n                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("% contains either a NaN (indicates a division by 0) or an Inf")]),e._v("\n\n")])])])]),e._v(" "),a("li",[e._v("\nUsing keyboard shortcuts: the default key for creating a standard breakpoint on Windows is "),a("kbd",[e._v("F12")]),e._v("; the default key for conditional breakpoints is **unset**.\n")]),e._v(" "),a("h3",{attrs:{id:"disabling-and-re-enabling-breakpoints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disabling-and-re-enabling-breakpoints"}},[e._v("#")]),e._v(" Disabling and Re-enabling Breakpoints")]),e._v(" "),a("p",[e._v("Disable a breakpoint to temporarily ignore it: disabled breakpoints do not pause execution. Disabling a breakpoint can be done in several ways:")]),e._v(" "),a("ul",[a("li",[e._v("Right click on the red/yellow breakpoint circle > Disable Breakpoint.")]),e._v(" "),a("li",[e._v("Left click on a conditional (yellow) breakpoint.")]),e._v(" "),a("li",[e._v("In the Editor tab > Breakpoints > Enable\\Disable.")])]),e._v(" "),a("h3",{attrs:{id:"removing-breakpoints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#removing-breakpoints"}},[e._v("#")]),e._v(" Removing Breakpoints")]),e._v(" "),a("p",[e._v("All breakpoints remain in a file until removed, either manually or automatically. Breakpoints are cleared "),a("strong",[e._v("automatically")]),e._v(" when ending the MATLAB session (i.e. terminating the program). Clearing breakpoints manually is done in one of the following ways:")]),e._v(" "),a("li",[e._v("\nUsing the [`dbclear`](http://www.mathworks.com/help/matlab/ref/dbclear.html) command:\n"),a("div",{staticClass:"language-matlab extra-class"},[a("pre",{pre:!0,attrs:{class:"language-matlab"}},[a("code",[e._v("dbclear all\ndbclear in file   \ndbclear in file at location    \ndbclear "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" condition\n\n")])])])]),e._v(" "),a("li",[e._v("\nLeft clicking a standard breakpoint icon, or a disabled conditional breakpoint icon.\n")]),e._v(" "),a("li",[e._v("\nRight clicking on any breakpoint > Clear Breakpoint.\n")]),e._v(" "),a("li",[e._v("\nIn the Editor tab > Breakpoints > Clear All.\n")]),e._v(" "),a("li",[e._v("\nIn pre-R2015b versions of MATLAB, using the command [`clear`](http://stackoverflow.com/a/27493072/3372061).\n")]),e._v(" "),a("h3",{attrs:{id:"resuming-execution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resuming-execution"}},[e._v("#")]),e._v(" Resuming Execution")]),e._v(" "),a("p",[e._v("When execution is paused at a breakpoint, there are two ways to continue executing the program:")]),e._v(" "),a("li",[e._v("\nExecute the current line and pause  again before the next line.\n"),a("kbd",[e._v("F10")]),a("sup",[e._v("1")]),e._v(' in the Editor, `dbstep` in the Command Window, "Step" in Ribbon > Editor > DEBUG.\n')]),e._v(" "),a("li",[e._v("\nExecute until the next breakpoint (if there are no more breakpoints, the execution proceeds until the end of the program).\n"),a("kbd",[e._v("F12")]),a("sup",[e._v("1")]),e._v(' in the Editor, `dbcont` in the Command Window, "Continue" in Ribbon > Editor > DEBUG.\n')]),e._v(" "),a("p",[a("sup",[e._v("1")]),e._v(" - default on Windows.")]),e._v(" "),a("h2",{attrs:{id:"debugging-java-code-invoked-by-matlab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#debugging-java-code-invoked-by-matlab"}},[e._v("#")]),e._v(" Debugging Java code invoked by MATLAB")]),e._v(" "),a("h3",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("In order to debug Java classes that are called during MATLAB execution, it is necessary to perform two steps:")]),e._v(" "),a("ol",[a("li",[e._v("Run MATLAB in JVM debugging mode.")]),e._v(" "),a("li",[e._v("Attach a Java debugger to the MATLAB process.")])]),e._v(" "),a("p",[e._v("When MATLAB is started in JVM debugging mode, the following message appears in the command window:")]),e._v(" "),a("div",{staticClass:"language-matlab extra-class"},[a("pre",{pre:!0,attrs:{class:"language-matlab"}},[a("code",[e._v("JVM is being started with debugging enabled"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v('\nUse "jdb '),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("connect com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("sun"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("jdi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("SocketAttach"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("port"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4444")]),e._v('" to attach debugger'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("\n\n")])])]),a("h3",{attrs:{id:"matlab-end"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#matlab-end"}},[e._v("#")]),e._v(" MATLAB end")]),e._v(" "),a("h3",{attrs:{id:"windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[e._v("#")]),e._v(" Windows:")]),e._v(" "),a("p",[e._v("Create a shortcut to the MATLAB executable ("),a("code",[e._v("matlab.exe")]),e._v(") and add the "),a("code",[e._v("-jdb")]),e._v(" flag at the end as shown below:")]),e._v(" "),a("p",[a("a",{attrs:{href:"http://i.stack.imgur.com/NAsCZ.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"http://i.stack.imgur.com/NAsCZ.png",alt:"enter image description here"}}),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("When running MATLAB using this shortcut JVM debugging will be enabled.")]),e._v(" "),a("p",[e._v("Alternatively the "),a("code",[e._v("java.opts")]),e._v(' file can be created/updated. This file is stored in "matlab-root\\bin\\arch", where "matlab-root" is the MATLAB installation directoy and "arch" is the architecture (e.g. "win32").')]),e._v(" "),a("p",[e._v("The following should be added in the file:")]),e._v(" "),a("div",{staticClass:"language-matlab extra-class"},[a("pre",{pre:!0,attrs:{class:"language-matlab"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Xdebug\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Xrunjdwp"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("transport"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("dt_socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("address"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1044")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("server"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("suspend"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("n\n\n")])])]),a("h3",{attrs:{id:"debugger-end"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#debugger-end"}},[e._v("#")]),e._v(" Debugger end")]),e._v(" "),a("h3",{attrs:{id:"intellij-idea"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#intellij-idea"}},[e._v("#")]),e._v(" IntelliJ IDEA")]),e._v(" "),a("p",[e._v('Attaching this debugger requires the creation of a "remote debugging" configuration with the port exposed by MATLAB:')]),e._v(" "),a("p",[a("a",{attrs:{href:"http://i.stack.imgur.com/2mnDl.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"http://i.stack.imgur.com/2mnDl.png",alt:"Step 1: Creating a debug configuration"}}),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Then the debugger is started:")]),e._v(" "),a("p",[a("a",{attrs:{href:"http://i.stack.imgur.com/dJIp2.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"http://i.stack.imgur.com/dJIp2.png",alt:"Step 2: Starting the debugger"}}),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("If everything is working as expected, the following message will appear in the console:")]),e._v(" "),a("p",[a("a",{attrs:{href:"http://i.stack.imgur.com/nc9aH.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"http://i.stack.imgur.com/nc9aH.png",alt:"Log output when all is working"}}),a("OutboundLink")],1)]),e._v(" "),a("h4",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),a("ul",[a("li",[e._v("dbstop in file at location if expression")])]),e._v(" "),a("h4",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Details")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("file")]),e._v(" "),a("td",[e._v("Name of "),a("code",[e._v(".m")]),e._v(" file (without extension), e.g. "),a("code",[e._v("fit")]),e._v(". This parameter is "),a("strong",[e._v("(Required)")]),e._v(" unless setting special conditional breakpoint types such as "),a("code",[e._v("dbstop if error")]),e._v(" or "),a("code",[e._v("dbstop if naninf")]),e._v(".")])]),e._v(" "),a("tr",[a("td",[e._v("location")]),e._v(" "),a("td",[e._v("Line number where the breakpoint should be placed. If the specified line does not contain runnable code, the breakpoint will be placed on the first valid line "),a("strong",[e._v("after")]),e._v(" the specified one.")])]),e._v(" "),a("tr",[a("td",[e._v("expression")]),e._v(" "),a("td",[e._v("Any expression or combination thereof that evaluates to a boolean value. Examples: "),a("code",[e._v("ind == 1")]),e._v(", "),a("code",[e._v("nargin < 4 && isdir('Q:\\')")]),e._v(".")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);