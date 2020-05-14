(window.webpackJsonp=window.webpackJsonp||[]).push([[3442],{3789:function(e,t,s){"use strict";s.r(t);var a=s(19),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"user-forms"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#user-forms"}},[e._v("#")]),e._v(" User Forms")]),e._v(" "),s("h2",{attrs:{id:"best-practices"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#best-practices"}},[e._v("#")]),e._v(" Best Practices")]),e._v(" "),s("p",[e._v("A "),s("code",[e._v("UserForm")]),e._v(" is a class module with a designer and a "),s("a",{attrs:{href:"http://stackoverflow.com/documentation/vba/5321/attributes/18932/vb-predeclaredid#t=201608091540388647392",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[e._v("default instance")]),s("OutboundLink")],1),e._v(". The "),s("strong",[e._v("designer")]),e._v(" can be accessed by pressing "),s("kbd",[e._v("Shift")]),e._v("+"),s("kbd",[e._v("F7")]),e._v(" while viewing the "),s("strong",[e._v("code-behind")]),e._v(", and the "),s("strong",[e._v("code-behind")]),e._v(" can be accessed by pressing "),s("kbd",[e._v("F7")]),e._v(" while viewing the "),s("strong",[e._v("designer")]),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"work-with-a-new-instance-every-time"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#work-with-a-new-instance-every-time"}},[e._v("#")]),e._v(" Work with a new instance every time.")]),e._v(" "),s("p",[e._v("Being a "),s("strong",[e._v("class module")]),e._v(", a form is therefore a "),s("strong",[e._v("blueprint")]),e._v(" for an "),s("strong",[e._v("object")]),e._v(". Because a form can hold state and data, it's a better practice to work with a new "),s("strong",[e._v("instance")]),e._v(" of the class, rather than with the default/global one:")]),e._v(" "),s("div",{staticClass:"language-vb extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vb"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("With")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("New")]),e._v(" UserForm1\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Show vbModal\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("If")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Not")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("IsCancelled "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Then")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("'...")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("End")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("If")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("End")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("With")]),e._v("\n\n")])])]),s("p",[e._v("Instead of:")]),e._v(" "),s("div",{staticClass:"language-vb extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vb"}},[s("code",[e._v("UserForm1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Show vbModal\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("If")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Not")]),e._v(" UserForm1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("IsCancelled "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Then")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("'...")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("End")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("If")]),e._v("\n\n")])])]),s("p",[e._v('Working with the default instance can lead to subtle bugs when the form is closed with the red "X" button and/or when '),s("code",[e._v("Unload Me")]),e._v(" is used in the code-behind.")]),e._v(" "),s("h3",{attrs:{id:"implement-the-logic-elsewhere"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implement-the-logic-elsewhere"}},[e._v("#")]),e._v(" Implement the logic elsewhere.")]),e._v(" "),s("p",[e._v("A form should be concerned with nothing but "),s("strong",[e._v("presentation")]),e._v(": a button "),s("code",[e._v("Click")]),e._v(" handler that connects to a database and runs a parameterized query based on user input, is "),s("strong",[e._v("doing too many things")]),e._v(".")]),e._v(" "),s("p",[e._v("Instead, implement the "),s("strong",[e._v("applicative logic")]),e._v(" in the code that's responsible for displaying the form, or even better, in dedicated modules and procedures.")]),e._v(" "),s("p",[e._v("Write the code in such a way that the UserForm is only ever responsible for knowing how to display and collect data: where the data comes from, or what happens with the data afterwards, is none of its concern.")]),e._v(" "),s("h3",{attrs:{id:"caller-shouldn-t-be-bothered-with-controls"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#caller-shouldn-t-be-bothered-with-controls"}},[e._v("#")]),e._v(" Caller shouldn't be bothered with controls.")]),e._v(" "),s("p",[e._v("Make a well-defined "),s("strong",[e._v("model")]),e._v(" for the form to work with, either in its own dedicated class module, or encapsulated within the form's code-behind itself - expose the "),s("strong",[e._v("model")]),e._v(" with "),s("code",[e._v("Property Get")]),e._v(" procedures, and have the client code work with these: this makes the form an "),s("strong",[e._v("abstraction")]),e._v(" over controls and their nitty-gritty details, exposing only the relevant data to the client code.")]),e._v(" "),s("p",[e._v("This means code that looks like this:")]),e._v(" "),s("div",{staticClass:"language-vb extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vb"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("With")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("New")]),e._v(" UserForm1\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Show vbModal\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("If")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Not")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("IsCancelled "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Then")]),e._v("\n        MsgBox "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" vbInformation\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("End")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("If")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("End")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("With")]),e._v("\n\n")])])]),s("p",[e._v("Instead of this:")]),e._v(" "),s("div",{staticClass:"language-vb extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vb"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("With")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("New")]),e._v(" UserForm1\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Show vbModal\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("If")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Not")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("IsCancelled "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Then")]),e._v("\n        MsgBox "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("txtMessage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" vbInformation\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("End")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("If")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("End")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("With")]),e._v("\n\n")])])]),s("h3",{attrs:{id:"handle-the-queryclose-event"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#handle-the-queryclose-event"}},[e._v("#")]),e._v(" Handle the QueryClose event.")]),e._v(" "),s("p",[e._v("Forms typically have a "),s("kbd",[e._v("Close")]),e._v(" button, and prompts/dialogs have "),s("kbd",[e._v("Ok")]),e._v(" and "),s("kbd",[e._v("Cancel")]),e._v(" buttons; the user may close the form using the form's "),s("strong",[e._v("control box")]),e._v(' (the red "X" button), which destroys the form instance by default (another good reason to '),s("strong",[e._v("work with a new instance every time")]),e._v(").")]),e._v(" "),s("div",{staticClass:"language-vb extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vb"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("With")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("New")]),e._v(" UserForm1\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Show vbModal\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("If")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Not")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("IsCancelled "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Then")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("'if QueryClose isn't handled, this can raise a runtime error.")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("'...")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("End")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("With")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("End")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("With")]),e._v("\n\n")])])]),s("p",[e._v("The simplest way to handle the "),s("code",[e._v("QueryClose")]),e._v(" event is to set the "),s("code",[e._v("Cancel")]),e._v(" parameter to "),s("code",[e._v("True")]),e._v(", and then to "),s("strong",[e._v("hide")]),e._v(" the form instead of "),s("strong",[e._v("closing")]),e._v(" it:")]),e._v(" "),s("div",{staticClass:"language-vb extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vb"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Private")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Sub")]),e._v(" UserForm_QueryClose"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("Cancel "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("As")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" CloseMode "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("As")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    Cancel "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("True")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Me")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Hide\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("End")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Sub")]),e._v("\n\n")])])]),s("p",[e._v('That way the "X" button will never destroy the instance, and the caller can safely access all the public members.')]),e._v(" "),s("h3",{attrs:{id:"hide-don-t-close"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hide-don-t-close"}},[e._v("#")]),e._v(" Hide, don't close.")]),e._v(" "),s("p",[e._v("The code that creates an object should be responsible for destroying it: it's not the form's responsibility to unload and terminate itself.")]),e._v(" "),s("p",[e._v("Avoid using "),s("code",[e._v("Unload Me")]),e._v(" in a form's code-behind. Call "),s("code",[e._v("Me.Hide")]),e._v(" instead, so that the calling code can still use the object it created when the form closes.")]),e._v(" "),s("h3",{attrs:{id:"name-things"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#name-things"}},[e._v("#")]),e._v(" Name things.")]),e._v(" "),s("p",[e._v("Use the "),s("strong",[e._v("properties")]),e._v(" toolwindow ("),s("kbd",[e._v("F4")]),e._v(") to carefully name each control on a form. The name of a control is used in the code-behind, so unless you're using a refactoring tool that can handle this, "),s("strong",[e._v("renaming a control will break the code")]),e._v(" - so it's much easier to do things right in the first place, than try to puzzle out exactly which of the 20 textboxes "),s("code",[e._v("TextBox12")]),e._v(" stands for.")]),e._v(" "),s("p",[e._v("Traditionally, UserForm controls are named with Hungarian-style prefixes:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("lblUserName")]),e._v(" for a "),s("code",[e._v("Label")]),e._v(" control that indicates a user name.")]),e._v(" "),s("li",[s("code",[e._v("txtUserName")]),e._v(" for a "),s("code",[e._v("TextBox")]),e._v(" control where the user can enter a user name.")]),e._v(" "),s("li",[s("code",[e._v("cboUserName")]),e._v(" for a "),s("code",[e._v("ComboBox")]),e._v(" control where the user can enter or pick a user name.")]),e._v(" "),s("li",[s("code",[e._v("lstUserName")]),e._v(" for a "),s("code",[e._v("ListBox")]),e._v(" control where the user can pick a user name.")]),e._v(" "),s("li",[s("code",[e._v("btnOk")]),e._v(" or "),s("code",[e._v("cmdOk")]),e._v(" for a "),s("code",[e._v("Button")]),e._v(' control labelled "Ok".')])]),e._v(" "),s("p",[e._v("The problem is that when e.g. the UI gets redesigned and a "),s("code",[e._v("ComboBox")]),e._v(" changes to a "),s("code",[e._v("ListBox")]),e._v(", the name needs to change to reflect the new control type: it's better to name controls for what they represent, rather than after their control type - to "),s("strong",[e._v("decouple")]),e._v(" the code from the UI as much as possible.")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("UserNameLabel")]),e._v(" for a read-only label that indicates a user name.")]),e._v(" "),s("li",[s("code",[e._v("UserNameInput")]),e._v(" for a control where the user can enter or pick a user name.")]),e._v(" "),s("li",[s("code",[e._v("OkButton")]),e._v(' for a command button labelled "Ok".')])]),e._v(" "),s("p",[e._v("Whichever style is chosen, anything is better than leaving all controls their default names. Consistency in naming style is ideal, too.")]),e._v(" "),s("h2",{attrs:{id:"handling-queryclose"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#handling-queryclose"}},[e._v("#")]),e._v(" Handling QueryClose")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("QueryClose")]),e._v(" event is raised whenever a form is about to be closed, whether it's via user action or programmatically. The "),s("code",[e._v("CloseMode")]),e._v(" parameter contains a "),s("code",[e._v("VbQueryClose")]),e._v(" enum value that indicates how the form was closed:")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Constant")]),e._v(" "),s("th",[e._v("Description")]),e._v(" "),s("th",[e._v("Value")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[s("code",[e._v("vbFormControlMenu")])]),e._v(" "),s("td",[e._v("Form is closing in response to user action")]),e._v(" "),s("td",[e._v("0")])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("vbFormCode")])]),e._v(" "),s("td",[e._v("Form is closing in response to an "),s("code",[e._v("Unload")]),e._v(" statement")]),e._v(" "),s("td",[e._v("1")])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("vbAppWindows")])]),e._v(" "),s("td",[e._v("Windows session is ending")]),e._v(" "),s("td",[e._v("2")])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("vbAppTaskManager")])]),e._v(" "),s("td",[e._v("Windows Task Manager is closing the host application")]),e._v(" "),s("td",[e._v("3")])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("vbFormMDIForm")])]),e._v(" "),s("td",[e._v("Not supported in VBA")]),e._v(" "),s("td",[e._v("4")])])])]),e._v(" "),s("p",[e._v("For better readability, it's best to use these constants instead of using their value directly.")]),e._v(" "),s("h3",{attrs:{id:"a-cancellable-userform"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a-cancellable-userform"}},[e._v("#")]),e._v(" A Cancellable UserForm")]),e._v(" "),s("p",[e._v("Given a form with a "),s("kbd",[e._v("Cancel")]),e._v(" button")]),e._v(" "),s("img",{attrs:{src:"http://i.stack.imgur.com/7gR8h.png",alt:"some sample form"}}),e._v(" "),s("p",[e._v("The form's code-behind could look like this:")]),e._v(" "),s("div",{staticClass:"language-vb extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vb"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Option")]),e._v(" Explicit\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Private")]),e._v(" Type TView\n    IsCancelled "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("As")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Boolean")]),e._v("\n    SomeOtherSetting "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("As")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Boolean")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("'other properties skipped for brievety")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("End")]),e._v(" Type\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Private")]),e._v(" this "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("As")]),e._v(" TView\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Public")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Property")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Get")]),e._v(" IsCancelled"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("As")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Boolean")]),e._v("\n    IsCancelled "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" this"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("IsCancelled\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("End")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Property")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Public")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Property")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Get")]),e._v(" SomeOtherSetting"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("As")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Boolean")]),e._v("\n    SomeOtherSetting "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" this"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("SomeOtherSetting\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("End")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Property")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("'...more properties...")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Private")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Sub")]),e._v(" SomeOtherSettingInput_Change"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    this"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("SomeOtherSetting "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CBool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("SomeOtherSettingInput"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("End")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Sub")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Private")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Sub")]),e._v(" OkButton_Click"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Me")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Hide\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("End")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Sub")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Private")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Sub")]),e._v(" CancelButton_Click"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    this"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("IsCancelled "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("True")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Me")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Hide\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("End")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Sub")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Private")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Sub")]),e._v(" UserForm_QueryClose"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("Cancel "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("As")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" CloseMode "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("As")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("If")]),e._v(" CloseMode "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" VbQueryClose"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("vbFormControlMenu "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Then")]),e._v("\n        Cancel "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("True")]),e._v("\n        this"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("IsCancelled "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("True")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Me")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Hide\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("End")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("If")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("End")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Sub")]),e._v("\n\n")])])]),s("p",[e._v("The calling code could then display the form, and know whether it was cancelled:")]),e._v(" "),s("div",{staticClass:"language-vb extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vb"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Public")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Sub")]),e._v(" DoSomething"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("With")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("New")]),e._v(" UserForm1\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Show vbModal\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("If")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("IsCancelled "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Then")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Exit")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Sub")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("If")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("SomeOtherSetting "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Then")]),e._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("'setting is enabled")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Else")]),e._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("'setting is disabled")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("End")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("If")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("End")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("With")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("End")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Sub")]),e._v("\n\n")])])]),s("p",[e._v("The "),s("code",[e._v("IsCancelled")]),e._v(" property returns "),s("code",[e._v("True")]),e._v(" when the "),s("kbd",[e._v("Cancel")]),e._v(" button is clicked, or when the user closes the form using the "),s("strong",[e._v("control box")]),e._v(".")])])}),[],!1,null,null,null);t.default=n.exports}}]);