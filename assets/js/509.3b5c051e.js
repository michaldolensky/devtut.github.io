(window.webpackJsonp=window.webpackJsonp||[]).push([[509],{854:function(t,e,v){"use strict";v.r(e);var _=v(19),r=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"keyboard-shortcuts"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#keyboard-shortcuts"}},[t._v("#")]),t._v(" Keyboard shortcuts")]),t._v(" "),v("h2",{attrs:{id:"editing-shortcuts"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#editing-shortcuts"}},[t._v("#")]),t._v(" Editing Shortcuts")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Shortcut")]),t._v(" "),v("th",[t._v("Description")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("kbd",[t._v("Ctrl")]),t._v(" + "),v("kbd",[t._v("a")])]),t._v(" "),v("td",[t._v("move to the beginning of the line")])]),t._v(" "),v("tr",[v("td",[v("kbd",[t._v("Ctrl")]),t._v(" + "),v("kbd",[t._v("e")])]),t._v(" "),v("td",[t._v("move to the end of the line")])]),t._v(" "),v("tr",[v("td",[v("kbd",[t._v("Ctrl")]),t._v(" + "),v("kbd",[t._v("k")])]),t._v(" "),v("td",[t._v("Kill the text from the current cursor position to the end of the line.")])]),t._v(" "),v("tr",[v("td",[v("kbd",[t._v("Ctrl")]),t._v(" + "),v("kbd",[t._v("u")])]),t._v(" "),v("td",[t._v("Kill the text from the current cursor position to the beginning of the line")])]),t._v(" "),v("tr",[v("td",[v("kbd",[t._v("Ctrl")]),t._v(" + "),v("kbd",[t._v("w")])]),t._v(" "),v("td",[t._v("Kill the word behind the current cursor position")])]),t._v(" "),v("tr",[v("td",[v("kbd",[t._v("Alt")]),t._v(" + "),v("kbd",[t._v("b")])]),t._v(" "),v("td",[t._v("move backward one word")])]),t._v(" "),v("tr",[v("td",[v("kbd",[t._v("Alt")]),t._v(" + "),v("kbd",[t._v("f")])]),t._v(" "),v("td",[t._v("move forward one word")])]),t._v(" "),v("tr",[v("td",[v("kbd",[t._v("Ctrl")]),t._v(" + "),v("kbd",[t._v("Alt")]),t._v(" + "),v("kbd",[t._v("e")])]),t._v(" "),v("td",[t._v("shell expand line")])]),t._v(" "),v("tr",[v("td",[v("kbd",[t._v("Ctrl")]),t._v(" + "),v("kbd",[t._v("y")])]),t._v(" "),v("td",[t._v("Yank the most recently killed text back into the buffer at the cursor.")])]),t._v(" "),v("tr",[v("td",[v("kbd",[t._v("Alt")]),t._v(" + "),v("kbd",[t._v("y")])]),t._v(" "),v("td",[t._v("Rotate through killed text. You can only do this if the prior command is "),v("kbd",[t._v("Ctrl")]),t._v(" + "),v("kbd",[t._v("y")]),t._v(" or "),v("kbd",[t._v("Alt")]),t._v(" + "),v("kbd",[t._v("y")]),t._v(".")])])])]),t._v(" "),v("p",[t._v("Killing text will delete text, but save it so that the user can reinsert it by yanking. Similar to cut and paste except that the text is placed on a kill ring which allows for storing more than one set of text to be yanked back on to the command line.")]),t._v(" "),v("p",[t._v("You can find out more in the "),v("a",{attrs:{href:"http://www.gnu.org/software/emacs/manual/html_mono/elisp.html#The-Kill-Ring",target:"_blank",rel:"noopener noreferrer"}},[t._v("emacs manual"),v("OutboundLink")],1),t._v(".")]),t._v(" "),v("h2",{attrs:{id:"recall-shortcuts"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#recall-shortcuts"}},[t._v("#")]),t._v(" Recall Shortcuts")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Shortcut")]),t._v(" "),v("th",[t._v("Description")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("kbd",[t._v("Ctrl")]),t._v(" + "),v("kbd",[t._v("r")])]),t._v(" "),v("td",[t._v("search the history backwards")])]),t._v(" "),v("tr",[v("td",[v("kbd",[t._v("Ctrl")]),t._v(" + "),v("kbd",[t._v("p")])]),t._v(" "),v("td",[t._v("previous command in history")])]),t._v(" "),v("tr",[v("td",[v("kbd",[t._v("Ctrl")]),t._v(" + "),v("kbd",[t._v("n")])]),t._v(" "),v("td",[t._v("next command in history")])]),t._v(" "),v("tr",[v("td",[v("kbd",[t._v("Ctrl")]),t._v(" + "),v("kbd",[t._v("g")])]),t._v(" "),v("td",[t._v("quit history searching mode")])]),t._v(" "),v("tr",[v("td",[v("kbd",[t._v("Alt")]),t._v(" + "),v("kbd",[t._v(".")])]),t._v(" "),v("td",[t._v("use the last word of the previous command")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("repeat to get the last word of the previous + 1 command")])]),t._v(" "),v("tr",[v("td",[v("kbd",[t._v("Alt")]),t._v(" + "),v("kbd",[t._v("n")]),t._v(" "),v("kbd",[t._v("Alt")]),t._v(" + "),v("kbd",[t._v(".")])]),t._v(" "),v("td",[t._v("use the nth word of the previous command")])]),t._v(" "),v("tr",[v("td",[v("kbd",[t._v("!!")]),t._v(" + "),v("kbd",[t._v("Return")])]),t._v(" "),v("td",[t._v("execute the last command again (useful when you forgot sudo: "),v("code",[t._v("sudo !!")]),t._v(")")])])])]),t._v(" "),v("h2",{attrs:{id:"job-control"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#job-control"}},[t._v("#")]),t._v(" Job Control")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Shortcut")]),t._v(" "),v("th",[t._v("Description")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("kbd",[t._v("Ctrl")]),t._v(" + "),v("kbd",[t._v("c")])]),t._v(" "),v("td",[t._v("Stop the current job")])]),t._v(" "),v("tr",[v("td",[v("kbd",[t._v("Ctrl")]),t._v(" + "),v("kbd",[t._v("z")])]),t._v(" "),v("td",[t._v("Suspend the current job (send a SIGTSTP signal)")])])])]),t._v(" "),v("h2",{attrs:{id:"macros"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#macros"}},[t._v("#")]),t._v(" Macros")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Shortcut")]),t._v(" "),v("th",[t._v("Description")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("kbd",[t._v("Ctrl")]),t._v(" + "),v("kbd",[t._v("x")]),t._v(", "),v("kbd",[t._v("(")])]),t._v(" "),v("td",[t._v("start recording a macro")])]),t._v(" "),v("tr",[v("td",[v("kbd",[t._v("Ctrl")]),t._v(" + "),v("kbd",[t._v("x")]),t._v(", "),v("kbd",[t._v(")")])]),t._v(" "),v("td",[t._v("stop recording a macro")])]),t._v(" "),v("tr",[v("td",[v("kbd",[t._v("Ctrl")]),t._v(" + "),v("kbd",[t._v("x")]),t._v(", "),v("kbd",[t._v("e")])]),t._v(" "),v("td",[t._v("execute the last recorded macro")])])])]),t._v(" "),v("h2",{attrs:{id:"custome-key-bindings"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#custome-key-bindings"}},[t._v("#")]),t._v(" Custome Key Bindings")]),t._v(" "),v("p",[t._v("With the "),v("code",[t._v("bind")]),t._v(" command it is possible to define custom key bindings.")]),t._v(" "),v("p",[t._v("The next example bind an "),v("kbd",[t._v("Alt")]),t._v(" + "),v("kbd",[t._v("w")]),t._v(" to "),v("code",[t._v(">/dev/null 2>&1")]),t._v(":")]),t._v(" "),v("div",{staticClass:"language-bash extra-class"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("bind")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\""),v("span",{pre:!0,attrs:{class:"token entity",title:"\\e"}},[t._v("\\e")]),t._v("w\"'")]),v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),v("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(" >/dev/null 2>&1"),v("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('"')]),t._v("\n\n")])])]),v("p",[t._v("If you want to execute the line immediately add "),v("code",[t._v("\\C-m")]),t._v(" ("),v("kbd",[t._v("Enter")]),t._v(") to it:")]),t._v(" "),v("div",{staticClass:"language-bash extra-class"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("bind")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\""),v("span",{pre:!0,attrs:{class:"token entity",title:"\\e"}},[t._v("\\e")]),t._v("w\"'")]),v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),v("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(" >/dev/null 2>&1\\C-m"),v("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('"')]),t._v("\n\n")])])]),v("h4",{attrs:{id:"remarks"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),v("p",[v("code",[t._v("bind -P")]),t._v(" show all configured shortcuts.")])])}),[],!1,null,null,null);e.default=r.exports}}]);