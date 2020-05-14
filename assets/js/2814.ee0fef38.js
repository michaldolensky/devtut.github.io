(window.webpackJsonp=window.webpackJsonp||[]).push([[2814],{3161:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"subprocess-library"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subprocess-library"}},[t._v("#")]),t._v(" Subprocess Library")]),t._v(" "),a("h2",{attrs:{id:"more-flexibility-with-popen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#more-flexibility-with-popen"}},[t._v("#")]),t._v(" More flexibility with Popen")]),t._v(" "),a("p",[t._v("Using "),a("code",[t._v("subprocess.Popen")]),t._v(" give more fine-grained control over launched processes than "),a("code",[t._v("subprocess.call")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"launching-a-subprocess"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#launching-a-subprocess"}},[t._v("#")]),t._v(" Launching a subprocess")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("process "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" subprocess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Popen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("r'C:\\path\\to\\app.exe'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'arg1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'--flag'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'arg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("The signature for "),a("code",[t._v("Popen")]),t._v(" is very similar to the "),a("code",[t._v("call")]),t._v(" function; however, "),a("code",[t._v("Popen")]),t._v(" will return immediately instead of waiting for the subprocess to complete like "),a("code",[t._v("call")]),t._v(" does.")]),t._v(" "),a("h3",{attrs:{id:"waiting-on-a-subprocess-to-complete"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#waiting-on-a-subprocess-to-complete"}},[t._v("#")]),t._v(" Waiting on a subprocess to complete")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("process "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" subprocess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Popen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("r'C:\\path\\to\\app.exe'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'arg1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'--flag'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'arg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nprocess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wait"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"reading-output-from-a-subprocess"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reading-output-from-a-subprocess"}},[t._v("#")]),t._v(" Reading output from a subprocess")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("process "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" subprocess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Popen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("r'C:\\path\\to\\app.exe'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stdout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("subprocess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PIPE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stderr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("subprocess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PIPE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This will block until process completes")]),t._v("\nstdout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stderr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("communicate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),t._v(" stdout\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),t._v(" stderr\n\n")])])]),a("h3",{attrs:{id:"interactive-access-to-running-subprocesses"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interactive-access-to-running-subprocesses"}},[t._v("#")]),t._v(" Interactive access to running subprocesses")]),t._v(" "),a("p",[t._v("You can read and write on "),a("code",[t._v("stdin")]),t._v(" and "),a("code",[t._v("stdout")]),t._v(" even while the subprocess hasn't completed. This could be useful when automating functionality in another program.")]),t._v(" "),a("h3",{attrs:{id:"writing-to-a-subprocess"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#writing-to-a-subprocess"}},[t._v("#")]),t._v(" Writing to a subprocess")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("process "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" subprocess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Popen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("r'C:\\path\\to\\app.exe'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stdout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" subprocess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PIPE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stdin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" subprocess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PIPE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\nprocess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stdin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'line of input\\n'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Write input")]),t._v("\n\nline  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stdout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Read a line from stdout")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Do logic on line read.")]),t._v("\n\n")])])]),a("p",[t._v("However, if you only need one set of input and output, rather than dynamic interaction,\nyou should use "),a("code",[t._v("communicate()")]),t._v(" rather than directly accessing "),a("code",[t._v("stdin")]),t._v(" and "),a("code",[t._v("stdout")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"reading-a-stream-from-a-subprocess"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reading-a-stream-from-a-subprocess"}},[t._v("#")]),t._v(" Reading a stream from a subprocess")]),t._v(" "),a("p",[t._v("In case you want to see the output of a subprocess line by line, you can use the following snippet:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("process "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" subprocess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Popen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("your_command"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stdout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("subprocess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PIPE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("poll"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    output_line "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stdout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("in the case the subcommand output do not have EOL character, the above snippet does not work. You can then read the output character by character as follows:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("process "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" subprocess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Popen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("your_command"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stdout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("subprocess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PIPE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("poll"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    output_line "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stdout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("The "),a("code",[t._v("1")]),t._v(" specified as argument to the "),a("code",[t._v("read")]),t._v(" method tells read to read 1 character at time. You can specify to read as many characters you want using a different number. Negative number or 0 tells to "),a("code",[t._v("read")]),t._v(" to read as a single string until the EOF is encountered ("),a("a",{attrs:{href:"https://docs.python.org/2/library/io.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("see here"),a("OutboundLink")],1),t._v(").")]),t._v(" "),a("p",[t._v("In both the above snippets, the "),a("code",[t._v("process.poll()")]),t._v(" is "),a("code",[t._v("None")]),t._v(" until the subprocess finishes. This is used to exit the loop once there is no more output to read.")]),t._v(" "),a("p",[t._v("The same procedure could be applied to the "),a("code",[t._v("stderr")]),t._v(" of the subprocess.")]),t._v(" "),a("h2",{attrs:{id:"calling-external-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#calling-external-commands"}},[t._v("#")]),t._v(" Calling External Commands")]),t._v(" "),a("p",[t._v("The simplest use case is using the "),a("code",[t._v("subprocess.call")]),t._v(" function.  It accepts a list as the first argument.  The first item in the list should be the external application you want to call.  The other items in the list are arguments that will be passed to that application.")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("subprocess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("call"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("r'C:\\path\\to\\app.exe'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'arg1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'--flag'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'arg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("For shell commands, set "),a("code",[t._v("shell=True")]),t._v(" and provide the command as a string instead of a list.")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("subprocess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("call"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'echo \"Hello, world\"'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" shell"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("Note that the two command above return only the "),a("code",[t._v("exit status")]),t._v(" of the subprocess. Moreover, pay attention when using "),a("code",[t._v("shell=True")]),t._v(" since it provides security issues (see "),a("a",{attrs:{href:"https://docs.python.org/2/library/subprocess.html#frequently-used-arguments",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(").")]),t._v(" "),a("p",[t._v("If you want to be able to get the standard output of the subprocess, then substitute the "),a("code",[t._v("subprocess.call")]),t._v(" with "),a("code",[t._v("subprocess.check_output")]),t._v(". For more advanced use, refer to "),a("a",{attrs:{href:"http://stackoverflow.com/documentation/python/1393/subprocess-library/5714/more-flexibility-with-popen",target:"_blank",rel:"noopener noreferrer"}},[t._v("this"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"how-to-create-the-command-list-argument"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-create-the-command-list-argument"}},[t._v("#")]),t._v(" How to create the command list argument")]),t._v(" "),a("p",[t._v("The subprocess method that allows running commands needs the command in form of a list (at least using "),a("code",[t._v("shell_mode=True")]),t._v(").")]),t._v(" "),a("p",[t._v("The rules to create the list are not always straightforward to follow, especially with complex commands. Fortunately, there is a very helpful tool that allows doing that: "),a("code",[t._v("shlex")]),t._v(". The easiest way of creating the list to be used as command is the following:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" shlex\ncmd_to_subprocess "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" shlex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("split"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("command_used_in_the_shell"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("A simple example:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" shlex\nshlex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("split"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ls --color -l -t -r'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ls'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'--color'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-l'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-t'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-r'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])])]),a("h4",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("ul",[a("li",[t._v("subprocess.call(args, *, stdin=None, stdout=None, stderr=None, shell=False, timeout=None)")]),t._v(" "),a("li",[t._v("subprocess.Popen(args, bufsize=-1, executable=None, stdin=None, stdout=None, stderr=None, preexec_fn=None, close_fds=True, shell=False, cwd=None, env=None, universal_newlines=False, startupinfo=None, creationflags=0, restore_signals=True, start_new_session=False, pass_fds=())")])]),t._v(" "),a("h4",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),t._v(" "),a("th",[t._v("Details")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("args")])]),t._v(" "),a("td",[t._v("A single executable, or sequence of executable and arguments - "),a("code",[t._v("'ls'")]),t._v(", "),a("code",[t._v("['ls', '-la']")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("shell")])]),t._v(" "),a("td",[t._v("Run under a shell? The default shell to "),a("code",[t._v("/bin/sh")]),t._v(" on POSIX.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("cwd")])]),t._v(" "),a("td",[t._v("Working directory of the child process.")])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);