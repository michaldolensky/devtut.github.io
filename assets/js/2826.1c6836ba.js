(window.webpackJsonp=window.webpackJsonp||[]).push([[2826],{3174:function(t,a,s){"use strict";s.r(a);var n=s(19),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"tkinter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tkinter"}},[t._v("#")]),t._v(" tkinter")]),t._v(" "),s("p",[t._v("Released in Tkinter is Python's most popular GUI (Graphical User Interface) library. This topic explains proper usage of this library and its features.")]),t._v(" "),s("h2",{attrs:{id:"geometry-managers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#geometry-managers"}},[t._v("#")]),t._v(" Geometry Managers")]),t._v(" "),s("p",[t._v("Tkinter has three mechanisms for geometry management: "),s("code",[t._v("place")]),t._v(", "),s("code",[t._v("pack")]),t._v(", and "),s("code",[t._v("grid")]),t._v(".")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("place")]),t._v(" manager uses absolute pixel coordinates.")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("pack")]),t._v(" manager places widgets into one of 4 sides. New widgets are placed next to existing widgets.")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("grid")]),t._v(" manager places widgets into a grid similar to a dynamically resizing spreadsheet.")]),t._v(" "),s("h3",{attrs:{id:"place"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#place"}},[t._v("#")]),t._v(" Place")]),t._v(" "),s("p",[t._v("The most common keyword arguments for "),s("code",[t._v("widget.place")]),t._v(" are as follows:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("x")]),t._v(", the absolute x-coordinate of the widget")]),t._v(" "),s("li",[s("code",[t._v("y")]),t._v(", the absolute y-coordinate of the widget")]),t._v(" "),s("li",[s("code",[t._v("height")]),t._v(", the absolute height of the widget")]),t._v(" "),s("li",[s("code",[t._v("width")]),t._v(", the absolute width of the widget")])]),t._v(" "),s("p",[t._v("A code example using "),s("code",[t._v("place")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PlaceExample")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Frame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("master"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        Frame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__init__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("master"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("grid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        top_text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Label"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("master"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is on top at the origin"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#top_text.pack()")]),t._v("\n        top_text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("place"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("width"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        bottom_right_text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Label"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("master"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is at position 200,400"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#top_text.pack()")]),t._v("\n        bottom_right_text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("place"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("width"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Spawn Window")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"__main__"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    root"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Tk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    place_frame"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("PlaceExample"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    place_frame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mainloop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"pack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pack"}},[t._v("#")]),t._v(" Pack")]),t._v(" "),s("p",[s("code",[t._v("widget.pack")]),t._v(" can take the following keyword arguments:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("expand")]),t._v(", whether or not to fill space left by parent")]),t._v(" "),s("li",[s("code",[t._v("fill")]),t._v(", whether to expand to fill all space (NONE (default), X, Y, or BOTH)")]),t._v(" "),s("li",[s("code",[t._v("side")]),t._v(", the side to pack against (TOP (default), BOTTOM, LEFT, or RIGHT)")])]),t._v(" "),s("h3",{attrs:{id:"grid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grid"}},[t._v("#")]),t._v(" Grid")]),t._v(" "),s("p",[t._v("The most commonly used keyword arguments of "),s("code",[t._v("widget.grid")]),t._v(" are as follows:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("row")]),t._v(", the row of the widget (default smallest unoccupied)")]),t._v(" "),s("li",[s("code",[t._v("rowspan")]),t._v(", the number of colums a widget spans (default 1)")]),t._v(" "),s("li",[s("code",[t._v("column")]),t._v(", the column of the widget (default 0)")]),t._v(" "),s("li",[s("code",[t._v("columnspan")]),t._v(", the number of columns a widget spans (default 1)")]),t._v(" "),s("li",[s("code",[t._v("sticky")]),t._v(", where to place widget if the grid cell is larger than it (combination of N,NE,E,SE,S,SW,W,NW)")])]),t._v(" "),s("p",[t._v("The rows and columns are zero indexed. Rows increase going down, and columns increase going right.")]),t._v(" "),s("p",[t._v("A code example using "),s("code",[t._v("grid")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" tkinter "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GridExample")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Frame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("master"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        Frame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__init__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("master"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("grid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        top_text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Label"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This text appears on top left"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        top_text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("grid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Default position 0, 0")]),t._v("\n        bottom_text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Label"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This text appears on bottom left"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        bottom_text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("grid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Default position 1, 0")]),t._v("\n        right_text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Label"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This text appears on the right and spans both rows"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                         wraplength"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Position is 0,1")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Rowspan means actual position is [0-1],1")]),t._v("\n        right_text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("grid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("row"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("column"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("rowspan"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Spawn Window")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"__main__"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    root"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Tk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    grid_frame"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("GridExample"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    grid_frame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mainloop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[s("strong",[t._v("Never mix "),s("code",[t._v("pack")]),t._v(" and "),s("code",[t._v("grid")]),t._v(" within the same frame! Doing so will lead to application deadlock!")])]),t._v(" "),s("h2",{attrs:{id:"a-minimal-tkinter-application"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a-minimal-tkinter-application"}},[t._v("#")]),t._v(" A minimal tkinter Application")]),t._v(" "),s("p",[s("code",[t._v("tkinter")]),t._v(" is a GUI toolkit that provides a wrapper around the Tk/Tcl GUI library and is included with Python. The following code creates a new window using "),s("code",[t._v("tkinter")]),t._v(" and places some text in the window body.")]),t._v(" "),s("blockquote"),t._v(" "),s("p",[t._v("Note: In Python 2, the capitalization may be slightly different, see Remarks section below.")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" tkinter "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" tk\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# GUI window is a subclass of the basic tkinter Frame object")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HelloWorldFrame")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Frame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" master"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Call superclass constructor")]),t._v("\n        tk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Frame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__init__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" master"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Place frame into main window")]),t._v("\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("grid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# Create text box with "Hello World" text')]),t._v("\n        hello "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Label"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World! This label can hold strings!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Place text box into frame")]),t._v("\n        hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("grid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("row"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" column"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Spawn window")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"__main__"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Create main window object")]),t._v("\n    root "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Tk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Set title of window")]),t._v("\n    root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Instantiate HelloWorldFrame object")]),t._v("\n    hello_frame "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" HelloWorldFrame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Start GUI")]),t._v("\n    hello_frame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mainloop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("h4",{attrs:{id:"remarks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),s("p",[t._v("The capitalization of the tkinter module is different between Python 2 and 3. For Python 2 use the following:")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" Tkinter "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Capitalized")]),t._v("\n\n")])])]),s("p",[t._v("For Python 3 use the following:")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" tkinter "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Lowercase")]),t._v("\n\n")])])]),s("p",[t._v("For code that works with both Python 2 and 3, you can either do")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" Tkinter "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" ImportError"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" tkinter "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n\n")])])]),s("p",[t._v("or")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sys "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" version_info\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" version_info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("major "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" Tkinter "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" version_info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("major "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" tkinter "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n\n")])])]),s("blockquote"),t._v(" "),s("p",[t._v("See the "),s("a",{attrs:{href:"https://stackoverflow.com/documentation/tkinter/",target:"_blank",rel:"noopener noreferrer"}},[t._v("tkinter Documentation"),s("OutboundLink")],1),t._v(" for more details")])])}),[],!1,null,null,null);a.default=e.exports}}]);