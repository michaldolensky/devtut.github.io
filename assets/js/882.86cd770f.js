(window.webpackJsonp=window.webpackJsonp||[]).push([[882],{1228:function(t,s,e){"use strict";e.r(s);var a=e(19),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"read-understand-stacktraces"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#read-understand-stacktraces"}},[t._v("#")]),t._v(" Read & Understand Stacktraces")]),t._v(" "),e("p",[t._v("A stack trace is a great aid when debugging a program. You will get a stack trace when your program throws an Exception, and sometimes when the program terminates abnormally.")]),t._v(" "),e("h2",{attrs:{id:"stack-trace-for-a-simple-nullreferenceexception-in-windows-forms"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stack-trace-for-a-simple-nullreferenceexception-in-windows-forms"}},[t._v("#")]),t._v(" Stack trace for a simple NullReferenceException in Windows Forms")]),t._v(" "),e("p",[t._v("Let's create a small piece of code that throws an exception:")]),t._v(" "),e("div",{staticClass:"language-cs extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cs"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("button1_Click")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("object")])]),t._v(" sender"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EventArgs")]),t._v(" e"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" msg "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    msg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToCharArray")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),e("p",[t._v("If we execute this, we get the following Exception and stack trace:")]),t._v(" "),e("div",{staticClass:"language-cs extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cs"}},[e("code",[t._v("System"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NullReferenceException"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Object reference not set to an instance of an object."')]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("at")]),t._v(" WindowsFormsApplication1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Form1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("button1_Click")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" sender"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EventArgs")]),t._v(" e"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" F"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\\WindowsFormsApplication1\\WindowsFormsApplication1\\Form1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("line "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("29")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("at")]),t._v(" System"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Windows"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Forms"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Control"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("OnClick")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EventArgs")]),t._v(" e"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("at")]),t._v(" System"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Windows"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Forms"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Button"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("OnClick")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EventArgs")]),t._v(" e"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("at")]),t._v(" System"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Windows"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Forms"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Button"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("OnMouseUp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MouseEventArgs")]),t._v(" mevent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),e("p",[t._v("The stack trace goes on like that, but this part will suffice for our purposes.")]),t._v(" "),e("p",[t._v("At the top of the stack trace we see the line:")]),t._v(" "),e("blockquote"),t._v(" "),e("p",[t._v("at WindowsFormsApplication1.Form1.button1_Click(Object sender, EventArgs e) in F:\\WindowsFormsApplication1\\WindowsFormsApplication1\\Form1.cs:line 29")]),t._v(" "),e("p",[t._v("This is the most important part. It tells us the "),e("strong",[t._v("exact")]),t._v(" line where the Exception occurred: line 29 in Form1.cs ."),e("br"),t._v("\nSo, this is where you begin your search.")]),t._v(" "),e("p",[t._v("The second line is")]),t._v(" "),e("blockquote"),t._v(" "),e("p",[t._v("at System.Windows.Forms.Control.OnClick(EventArgs e)")]),t._v(" "),e("p",[t._v("This is the method that called "),e("code",[t._v("button1_Click")]),t._v(". So now we know that "),e("code",[t._v("button1_Click")]),t._v(", where the error occurred, was called from "),e("code",[t._v("System.Windows.Forms.Control.OnClick")]),t._v(".")]),t._v(" "),e("p",[t._v("We can continue like this; the third line is")]),t._v(" "),e("blockquote"),t._v(" "),e("p",[t._v("at System.Windows.Forms.Button.OnClick(EventArgs e)")]),t._v(" "),e("p",[t._v("This is, in turn, the code that called "),e("code",[t._v("System.windows.Forms.Control.OnClick")]),t._v(".")]),t._v(" "),e("p",[t._v("The stack trace is the list of functions that was called until your code encountered the Exception.\nAnd by following this, you can figure out which execution path your code followed until it ran into trouble!")]),t._v(" "),e("p",[t._v("Note that the stack trace includes calls from the .Net system; you don't normally need to follow all Microsofts "),e("code",[t._v("System.Windows.Forms")]),t._v(" code to find out what went wrong, only the code that belongs to your own application.")]),t._v(" "),e("p",[t._v('So, why is this called a "stack trace"?'),e("br"),t._v('\nBecause, every time a program calls a method, it keeps track of where it was. It has a data structure called the "stack", where it dumps its last location.'),e("br"),t._v("\nIf it is done executing the method, it looks on the stack to see where it was before it called the method - and continues from there.")]),t._v(" "),e("p",[t._v("So the stack lets the computer know where it left off, before calling a new method.")]),t._v(" "),e("p",[t._v("But it also serves as a debugging help. Like a detective tracing the steps that a criminal took when committing their crime, a programmer can use the stack to trace the steps a program took before it crashed.")])])}),[],!1,null,null,null);s.default=n.exports}}]);