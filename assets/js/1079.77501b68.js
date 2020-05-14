(window.webpackJsonp=window.webpackJsonp||[]).push([[1079],{1426:function(t,e,s){"use strict";s.r(e);var a=s(19),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"excel-vba-tips-and-tricks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#excel-vba-tips-and-tricks"}},[t._v("#")]),t._v(" Excel VBA Tips and Tricks")]),t._v(" "),s("h2",{attrs:{id:"using-xlveryhidden-sheets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-xlveryhidden-sheets"}},[t._v("#")]),t._v(" Using xlVeryHidden Sheets")]),t._v(" "),s("p",[t._v("Worksheets in excel have three options for the "),s("code",[t._v("Visible")]),t._v(" property. These options are represented by constants in the "),s("code",[t._v("xlSheetVisibility")]),t._v(" enumeration and are as follows:")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("xlVisible")]),t._v(" or "),s("code",[t._v("xlSheetVisible")]),t._v(" value: "),s("code",[t._v("-1")]),t._v(" (the default for new sheets)")]),t._v(" "),s("li",[s("code",[t._v("xlHidden")]),t._v(" or "),s("code",[t._v("xlSheetHidden")]),t._v(" value: "),s("code",[t._v("0")])]),t._v(" "),s("li",[s("code",[t._v("xlVeryHidden")]),t._v(" "),s("code",[t._v("xlSheetVeryHidden")]),t._v(" value: "),s("code",[t._v("2")])])]),t._v(" "),s("p",[t._v('Visible sheets represent the default visibility for sheets.  They are visible in the sheet tab bar and can be freely selected and viewed.  Hidden sheets are hidden from the sheet tab bar and are thus not selectable.  However, hidden sheets can be unhidden from the excel window by right clicking on the sheet tabs and selecting "Unhide"')]),t._v(" "),s("p",[t._v("Very Hidden sheets, on the other hand, are "),s("strong",[t._v("only")]),t._v(" accessible through the Visual Basic Editor.  This makes them an incredibly useful tool for storing data across instances of excel as well as storing data that should be hidden from end users.  The sheets can be accessed by named reference within VBA code, allowing easy use of the stored data.")]),t._v(" "),s("p",[t._v("To manually change a worksheet's .Visible property to xlSheetVeryHidden, open the VBE's Properties window ("),s("kbd",[t._v("F4")]),t._v("), select the worksheet you want to change and use the drop-down in the thirteenth row to make your selection.")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://i.stack.imgur.com/fCX7s.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"http://i.stack.imgur.com/fCX7s.png",alt:"worksheet_properties_window_visible"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("To change a worksheet's .Visible property to xlSheetVeryHidden¹ in code, similarly access the .Visible property and assign a new value.")]),t._v(" "),s("div",{staticClass:"language-vb extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vb"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" Sheet3\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Visible "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" xlSheetVeryHidden\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v("\n\n")])])]),s("p",[t._v("¹ "),s("sub",[t._v("Both "),s("strong",[t._v("xlVeryHidden")]),t._v(" and "),s("strong",[t._v("xlSheetVeryHidden")]),t._v(" return a numerical value of "),s("strong",[t._v("2")]),t._v(" (they are interchangeable).")])]),t._v(" "),s("h2",{attrs:{id:"using-strings-with-delimiters-in-place-of-dynamic-arrays"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-strings-with-delimiters-in-place-of-dynamic-arrays"}},[t._v("#")]),t._v(" Using Strings with Delimiters in Place of Dynamic Arrays")]),t._v(" "),s("p",[t._v("Using Dynamic Arrays in VBA can be quite clunky and time intensive over very large data sets.  When storing simple data types in a dynamic array (Strings, Numbers, Booleans etc.), one can avoid the "),s("code",[t._v("ReDim Preserve")]),t._v(" statements required of dynamic arrays in VBA by using the "),s("code",[t._v("Split()")]),t._v(" function with some clever string procedures.  For example, we will look at a loop that adds a series of values from a range to a string based on some conditions, then uses that string to populate the values of a ListBox.")]),t._v(" "),s("div",{staticClass:"language-vb extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vb"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v(" UserForm_Initialize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" Count "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Long")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" DataString "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Delimiter "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("For")]),t._v(" Count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("To")]),t._v(" ActiveSheet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UsedRows"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Count\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v(" ActiveSheet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Range"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" Count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Your Condition"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Then")]),t._v("\n        RowString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" RowString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" Delimiter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" ActiveSheet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Range"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" Count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Value\n        Delimiter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"><"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'By setting the delimiter here in the loop, you prevent an extra occurance of the delimiter within the string")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Next")]),t._v(" Count\n\nListBox1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("List "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Split"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DataString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Delimiter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v("\n\n")])])]),s("p",[t._v("The "),s("code",[t._v("Delimiter")]),t._v(" string itself can be set to any value, but it is prudent to choose a value which will not naturally occur within the set.  Say, for example, you were processing a column of dates.  In that case, using "),s("code",[t._v(".")]),t._v(", "),s("code",[t._v("-")]),t._v(", or "),s("code",[t._v("/")]),t._v(" would be unwise as delimiters, as the dates could be formatted to use any one of these, generating more data points than you anticipated.")]),t._v(" "),s("p",[s("strong",[t._v("Note:")]),t._v(" There are limitations to using this method (namely the maximum length of strings), so it should be used with caution in cases of very large datasets.  This is not necessarily the fastest or most effective method for creating dynamic arrays in VBA, but it is a viable alternative.")]),t._v(" "),s("h2",{attrs:{id:"worksheet-name-index-or-codename"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#worksheet-name-index-or-codename"}},[t._v("#")]),t._v(" Worksheet .Name, .Index or .CodeName")]),t._v(" "),s("p",[t._v("We know that 'best practise' dictates that a range object should have its parent worksheet explicitly referenced. A worksheet can be referred to by its .Name property, numerical .Index property or its .CodeName property but a user can reorder the worksheet queue by simply dragging a name tab or rename the worksheet with a double-click on the same tab and some typing in an unprotected workbook.")]),t._v(" "),s("p",[t._v("Consider a standard three worksheet. You have renamed the three worksheets Monday, Tuesday and Wednesday in that order and coded VBA sub procedures that reference these. Now consider that one user comes along and decides that Monday belongs at the end of the worksheet queue then another comes along and decides that the worksheet names look better in French. You now have a workbook with a worksheet name tab queue that looks something like the following.")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://i.stack.imgur.com/YRXYF.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"http://i.stack.imgur.com/YRXYF.png",alt:"worksheet_tab_queue"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("If you had used either of the following worksheet reference methods, your code would now be broken.")]),t._v(" "),s("div",{staticClass:"language-vb extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vb"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'reference worksheet by .Name")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" worksheets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Monday"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'operation code here; for example:")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Range"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Cells"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Cells"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Rows"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xlUp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'reference worksheet by ordinal .Index")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" worksheets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'operation code here; for example:")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Range"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Cells"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Cells"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Rows"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xlUp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v("\n\n")])])]),s("p",[t._v("Both the original order and the original worksheet name have been compromised. However, if you had used the worksheet's .CodeName property, your sub procedure would still be operational")]),t._v(" "),s("div",{staticClass:"language-vb extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vb"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" Sheet1\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'operation code here; for example:")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Range"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Cells"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Cells"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Rows"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xlUp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v("\n\n")])])]),s("p",[t._v("The following image shows the VBA Project window ([Ctrl]+R) which lists the worksheets by .CodeName then by .Name (in brackets). The order they are displayed does not change; the ordinal .Index is taken by the order they are displayed in the name tab queue in the worksheet window.")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://i.stack.imgur.com/94gJ6.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"http://i.stack.imgur.com/94gJ6.png",alt:"worksheet_project_window"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("While it is uncommon to rename a .CodeName, it is not impossible. Simply open the VBE's Properties window ([F4]).")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://i.stack.imgur.com/jmror.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"http://i.stack.imgur.com/jmror.png",alt:"worksheet_properties_window"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("The worksheet .CodeName is in the first row. The worksheet's .Name is in the tenth. Both are editable.")]),t._v(" "),s("h2",{attrs:{id:"double-click-event-for-excel-shapes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#double-click-event-for-excel-shapes"}},[t._v("#")]),t._v(" Double Click Event for Excel Shapes")]),t._v(" "),s("p",[t._v('By default, Shapes in Excel do not have a specific way to handle single vs. double clicks, containing only the "OnAction" property to allow you to handle clicks.  However, there may be instances where your code requires you to act differently (or exclusively) on a double click.  The following subroutine can be added into your VBA project and, when set as the '),s("code",[t._v("OnAction")]),t._v(" routine for your shape, allow you to act on double clicks.")]),t._v(" "),s("div",{staticClass:"language-vb extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vb"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Const")]),t._v(" DOUBLECLICK_WAIT "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Double")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.25")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'Modify to adjust click delay")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Public")]),t._v(" LastClickObj "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" LastClickTime "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Date")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v(" ShapeDoubleClick"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v(" LastClickObj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Then")]),t._v("\n        LastClickObj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Application"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Caller\n        LastClickTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CDbl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Timer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Else")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CDbl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Timer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" LastClickTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" DOUBLECLICK_WAIT "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Then")]),t._v("\n            LastClickObj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Application"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Caller\n            LastClickTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CDbl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Timer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Else")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v(" LastClickObj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Application"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Caller "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Then")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'Your desired Double Click code here")]),t._v("\n                LastClickObj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Else")]),t._v("\n                LastClickObj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Application"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Caller\n                LastClickTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CDbl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Timer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v("\n    \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v("\n\n")])])]),s("p",[t._v("This routine will cause the shape to functionally ignore the first click, only running your desired code on the second click within the specified time span.")]),t._v(" "),s("h2",{attrs:{id:"open-file-dialog-multiple-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#open-file-dialog-multiple-files"}},[t._v("#")]),t._v(" Open File Dialog - Multiple Files")]),t._v(" "),s("p",[t._v("This subroutine is a quick example on how to allow a user to select multiple files and then do something with those file paths, such as get the file names and send it to the console via debug.print.")]),t._v(" "),s("div",{staticClass:"language-vb extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vb"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Option")]),t._v(" Explicit\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v(" OpenMultipleFiles"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" fd "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" FileDialog\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" fileChosen "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Integer")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Integer")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" basename "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" fso "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Variant")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Set")]),t._v(" fso "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CreateObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Scripting.FileSystemObject"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Set")]),t._v(" fd "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Application"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FileDialog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msoFileDialogFilePicker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    basename "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fso"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getBaseName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ActiveWorkbook"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    fd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("InitialFileName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ActiveWorkbook"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Path "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("' Set Default Location to the Active Workbook Path")]),t._v("\n    fd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("InitialView "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" msoFileDialogViewList\n    fd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AllowMultiSelect "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n    \n    fileChosen "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Show\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v(" fileChosen "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Then")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'open each of the files chosen")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("For")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("To")]),t._v(" fd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SelectedItems"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Count\n            Debug"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Print "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SelectedItems"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" fileName "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("' do something with the files.")]),t._v("\n            fileName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fso"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getFileName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SelectedItems"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            Debug"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Print "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fileName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Next")]),t._v(" i\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v("\n\n")])])]),s("h4",{attrs:{id:"remarks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),s("p",[t._v('This topic consists of a wide variety of useful tips and tricks discovered by SO users through their experience in coding.  These are often examples of ways to circumvent common frustrations or ways of using Excel in a more "clever" way.')])])}),[],!1,null,null,null);e.default=n.exports}}]);