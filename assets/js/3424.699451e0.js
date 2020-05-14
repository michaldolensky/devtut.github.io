(window.webpackJsonp=window.webpackJsonp||[]).push([[3424],{3772:function(e,t,o){"use strict";o.r(t);var i=o(19),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"getting-started-with-vba"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-vba"}},[e._v("#")]),e._v(" Getting started with VBA")]),e._v(" "),o("h2",{attrs:{id:"accessing-the-visual-basic-editor-in-microsoft-office"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#accessing-the-visual-basic-editor-in-microsoft-office"}},[e._v("#")]),e._v(" Accessing the Visual Basic Editor in Microsoft Office")]),e._v(" "),o("p",[e._v("You can open the VB editor in any of the Microsoft Office applications by pressing "),o("kbd",[e._v("Alt")]),e._v("+"),o("kbd",[e._v("F11")]),e._v(' or going to the Developer tab and clicking on the "Visual Basic" button. If you don\'t see the Developer tab in the Ribbon, check if this is enabled.')]),e._v(" "),o("p",[e._v('By default the Developer tab is disabled. To enable the Developer tab go to File -> Options, select Customize Ribbon in the list on the left. In the right "Customize the Ribbon" treeview find the Developer tree item and set the check for the Developer checkbox to checked. Click Ok to close the Options dialog.')]),e._v(" "),o("p",[o("a",{attrs:{href:"http://i.stack.imgur.com/8WoiR.png",target:"_blank",rel:"noopener noreferrer"}},[o("img",{attrs:{src:"http://i.stack.imgur.com/8WoiR.png",alt:"File options menu"}}),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v('The Developer tab is now visible in the Ribbon on which you can click on "Visual Basic" to open the Visual Basic Editor. Alternatively you can click on "View Code" to directly view the code pane of the currently active element, e.g. WorkSheet, Chart, Shape.')]),e._v(" "),o("p",[o("a",{attrs:{href:"http://i.stack.imgur.com/388eU.png",target:"_blank",rel:"noopener noreferrer"}},[o("img",{attrs:{src:"http://i.stack.imgur.com/388eU.png",alt:"Developer Tab"}}),o("OutboundLink")],1)]),e._v(" "),o("p",[o("a",{attrs:{href:"http://i.stack.imgur.com/azT5a.png",target:"_blank",rel:"noopener noreferrer"}},[o("img",{attrs:{src:"http://i.stack.imgur.com/azT5a.png",alt:"VBE"}}),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("You can use VBA to automate almost any action that can be performed interactively (manually) and also provide functionality that is not available in Microsoft Office.\nVBA can create a document, add text to it, format it, edit it, and save it, all without human intervention.")]),e._v(" "),o("h2",{attrs:{id:"first-module-and-hello-world"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#first-module-and-hello-world"}},[e._v("#")]),e._v(" First Module and Hello World")]),e._v(" "),o("p",[e._v("To start coding in the first place, you have to right click your VBA Project in the left list and add a new Module.\nYour first "),o("strong",[e._v("Hello-World")]),e._v(" Code could look like this:")]),e._v(" "),o("div",{staticClass:"language-vb extra-class"},[o("pre",{pre:!0,attrs:{class:"language-vb"}},[o("code",[o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Sub")]),e._v(" HelloWorld"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    MsgBox "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Hello, World!"')]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("End")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Sub")]),e._v("\n\n")])])]),o("p",[e._v("To test it, hit the "),o("strong",[e._v("Play")]),e._v("-Button in your Toolbar or simply hit the "),o("kbd",[e._v("F5")]),e._v(" key.\nCongratulations! You've built your first own VBA Module.")]),e._v(" "),o("h2",{attrs:{id:"debugging"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#debugging"}},[e._v("#")]),e._v(" Debugging")]),e._v(" "),o("p",[e._v("Debugging is a very powerful way to have a closer look and fix incorrectly working (or non working) code.")]),e._v(" "),o("h3",{attrs:{id:"run-code-step-by-step"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#run-code-step-by-step"}},[e._v("#")]),e._v(" Run code step by step")]),e._v(" "),o("p",[e._v("First thing you need to do during debugging is to stop the code at specific locations and\nthen run it line by line to see whether that happens what's expected.")]),e._v(" "),o("ul",[o("li",[e._v("Breakpoint ("),o("kbd",[e._v("F9")]),e._v(", Debug - Toggle breakpoint): You can add a breakpoint to any executed line (e.g. not to declarations), when execution reaches that point it stops, and gives control to user.")]),e._v(" "),o("li",[e._v("You can also add the "),o("code",[e._v("Stop")]),e._v(" keyword to a blank line to have the code stop at that location on runtime. This is useful if, for example, before declaration lines to which you can't add a breakpoint with "),o("kbd",[e._v("F9")])]),e._v(" "),o("li",[e._v("Step into ("),o("kbd",[e._v("F8")]),e._v(", Debug - Step into): executes only one line of code, if that's a call of a user defined sub / function, then that's executed line by line.")]),e._v(" "),o("li",[e._v("Step over ("),o("kbd",[e._v("Shift")]),e._v("+"),o("kbd",[e._v("F8")]),e._v(", Debug - Step over): executes one line of code, doesn't enter user defined subs / functions.")]),e._v(" "),o("li",[e._v("Step out ("),o("kbd",[e._v("Ctrl")]),e._v("+"),o("kbd",[e._v("Shift")]),e._v("+"),o("kbd",[e._v("F8")]),e._v(", Debug - Step out): Exit current sub / function (run code until its end).")]),e._v(" "),o("li",[e._v("Run to cursor ("),o("kbd",[e._v("Ctrl")]),e._v("+"),o("kbd",[e._v("F8")]),e._v(", Debug - Run to cursor): run code until reaching the line with the cursor.")]),e._v(" "),o("li",[e._v("You can use "),o("code",[e._v("Debug.Print")]),e._v(" to print lines to the Immediate Window at runtime. You may also use "),o("code",[e._v("Debug.?")]),e._v(" as a shortcut for "),o("code",[e._v("Debug.Print")])])]),e._v(" "),o("h3",{attrs:{id:"watches-window"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#watches-window"}},[e._v("#")]),e._v(" Watches window")]),e._v(" "),o("p",[e._v("Running code line by line is only the first step, we need to know more details and one tool for that is the watch window (View - Watch window), here you can see values of defined expressions. To add a variable to the watch window, either:")]),e._v(" "),o("ul",[o("li",[e._v('Right-click on it then select "Add watch".')]),e._v(" "),o("li",[e._v('Right-click in watch window, select "Add watch".')]),e._v(" "),o("li",[e._v("Go to Debug - Add watch.")])]),e._v(" "),o("p",[e._v("When you add a new expression you can choose whether you just want to see it's value, or also break code execution when it's true or when its value changes.")]),e._v(" "),o("h3",{attrs:{id:"immediate-window"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#immediate-window"}},[e._v("#")]),e._v(" Immediate Window")]),e._v(" "),o("p",[e._v("The immediate window allows you to execute arbitrary code or print items by preceeding them with either the "),o("code",[e._v("Print")]),e._v(' keyword or a single question mark "'),o("code",[e._v("?")]),e._v('"')]),e._v(" "),o("p",[e._v("Some examples:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("? ActiveSheet.Name")]),e._v(" - returns name of the active sheet")]),e._v(" "),o("li",[o("code",[e._v("Print ActiveSheet.Name")]),e._v(" - returns the name of the active sheet")]),e._v(" "),o("li",[o("code",[e._v("? foo")]),e._v(" - returns the value of "),o("code",[e._v("foo")]),e._v("*")]),e._v(" "),o("li",[o("code",[e._v("x = 10")]),e._v(" sets "),o("code",[e._v("x")]),e._v(" to 10*")])]),e._v(" "),o("p",[o("sup",[e._v("* Getting/Setting values for variables via the Immediate Window can only be done during runtime")])]),e._v(" "),o("h3",{attrs:{id:"debugging-best-practices"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#debugging-best-practices"}},[e._v("#")]),e._v(" Debugging best practices")]),e._v(" "),o("p",[e._v("Whenever your code doesn't work as expected first thing you should do is to read it again carefully, looking for mistakes.")]),e._v(" "),o("p",[e._v("If that doesn't help, then start debugging it; for short procedures it can be efficient to just execute it line by line, for longer ones you probably need to set breakpoints or breaks on watched expressions, the goal here is to find the line not working as expected.")]),e._v(" "),o("p",[e._v("Once you have the line which gives the incorrect result, but the reason is not yet clear, try to simplify expressions, or replace variables with constants, that can help understanding whether variables' value are wrong.")]),e._v(" "),o("p",[e._v("If you still can't solve it, and ask for help:")]),e._v(" "),o("ul",[o("li",[e._v("Include as small part of your code as possible for understanding of your problem")]),e._v(" "),o("li",[e._v("If the problem is not related to the value of variables, then replace them by constants. (so, instead of "),o("code",[e._v("Sheets(a*b*c+d^2).Range(addressOfRange)")]),e._v(" write "),o("code",[e._v('Sheets(4).Range("A2")')]),e._v(")")]),e._v(" "),o("li",[e._v("Describe which line gives the wrong behaviour, and what it is (error, wrong result...)")])]),e._v(" "),o("h4",{attrs:{id:"remarks"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[e._v("#")]),e._v(" Remarks")]),e._v(" "),o("p",[e._v("This section provides an overview of what vba is, and why a developer might want to use it.")]),e._v(" "),o("p",[e._v("It should also mention any large subjects within vba, and link out to the related topics.  Since the Documentation for vba is new, you may need to create initial versions of those related topics.")])])}),[],!1,null,null,null);t.default=a.exports}}]);