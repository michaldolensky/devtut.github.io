(window.webpackJsonp=window.webpackJsonp||[]).push([[976],{1323:function(e,t,a){"use strict";a.r(t);var n=a(19),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"the-box-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-box-model"}},[e._v("#")]),e._v(" The Box Model")]),e._v(" "),a("h2",{attrs:{id:"what-is-the-box-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-box-model"}},[e._v("#")]),e._v(" What is the Box Model?")]),e._v(" "),a("h3",{attrs:{id:"the-edges"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-edges"}},[e._v("#")]),e._v(" The Edges")]),e._v(" "),a("p",[e._v("The browser creates a rectangle for each element in the HTML document. The Box Model describes how the padding, border, and margin are added to the content to create this rectangle.")]),e._v(" "),a("img",{attrs:{src:"http://i.stack.imgur.com/HyqPd.png",alt:"CSS Box Model"}}),e._v(" "),a("p",[a("strong",[e._v("Diagram from "),a("a",{attrs:{href:"https://www.w3.org/TR/CSS22/box.html#mpb-examples",target:"_blank",rel:"noopener noreferrer"}},[e._v("CSS2.2 Working Draft"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("The perimeter of each of the four areas is called an "),a("strong",[e._v("edge")]),e._v(". Each edge defines a "),a("strong",[e._v("box.")])]),e._v(" "),a("ul",[a("li",[e._v("The innermost rectangle is the "),a("strong",[e._v("content box")]),e._v(". The width and height of this depends on the element's rendered content (text, images and any child elements it may have).")]),e._v(" "),a("li",[e._v("Next is the "),a("strong",[e._v("padding box")]),e._v(", as defined by the "),a("a",{attrs:{href:"http://stackoverflow.com/documentation/css/1255/padding",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("padding")]),a("OutboundLink")],1),e._v(" property. If there is no "),a("code",[e._v("padding")]),e._v(" width defined, the padding edge is equal to the content edge.")]),e._v(" "),a("li",[e._v("Then we have the "),a("strong",[e._v("border box")]),e._v(", as defined by the "),a("a",{attrs:{href:"http://stackoverflow.com/documentation/css/2160/border",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("border")]),a("OutboundLink")],1),e._v(" property. If there is no "),a("code",[e._v("border")]),e._v(" width defined, the border edge is equal to the padding edge.")]),e._v(" "),a("li",[e._v("The outermost rectangle is the "),a("strong",[e._v("margin box")]),e._v(", as defined by the "),a("a",{attrs:{href:"http://stackoverflow.com/documentation/css/305/margins",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("margin")]),a("OutboundLink")],1),e._v(" property. If there is no "),a("code",[e._v("margin")]),e._v(" width defined, the margin edge is equal to the border edge.")])]),e._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[e._v("div")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 5px solid red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 50px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("padding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("This CSS styles all "),a("code",[e._v("div")]),e._v(" elements to have a top, right, bottom and left border of "),a("code",[e._v("5px")]),e._v(" in width; a top, right, bottom and left margin of "),a("code",[e._v("50px")]),e._v("; and a top, right, bottom, and left padding of "),a("code",[e._v("20px")]),e._v(". Ignoring content, our generated box will look like this:")]),e._v(" "),a("img",{attrs:{src:"http://i.stack.imgur.com/BZAqc.png",alt:"Box Model for Above Example"}}),e._v(" "),a("p",[a("strong",[e._v("Screenshot of Google Chrome's Element Styles panel")])]),e._v(" "),a("ul",[a("li",[e._v("As there is no content, the content region (the blue box in the middle) has no height or width (0px by 0px).")]),e._v(" "),a("li",[e._v("The padding box by default is the same size as the content box, plus the 20px width on all four edges we're defining above with the "),a("code",[e._v("padding")]),e._v(" property (40px by 40px).")]),e._v(" "),a("li",[e._v("The border box is the same size as the padding box, plus the 5px width we're defining above with the "),a("code",[e._v("border")]),e._v(" property (50px by 50px).")]),e._v(" "),a("li",[e._v("Finally the margin box is the same size as the border box, plus the 50px width we're defining above with the "),a("code",[e._v("margin")]),e._v(" property (giving our element a total size of 150px by 150px).")])]),e._v(" "),a("p",[e._v("Now lets give our element a sibling with the same style. The browser looks at the Box Model of both elements to work out where in relation to the previous element's content the new element should be positioned:")]),e._v(" "),a("img",{attrs:{src:"http://i.stack.imgur.com/pRJPk.png",alt:"Two identical elements next to each other"}}),e._v(" "),a("p",[e._v("The content of each of element is separated by a 150px gap, but the two elements' boxes touch each other.")]),e._v(" "),a("p",[e._v("If we then modify our first element to have no right margin, the right margin edge would be in the same position as the right border edge, and our two elements would now look like this:")]),e._v(" "),a("img",{attrs:{src:"http://i.stack.imgur.com/3cIM8.png",alt:"First element no right margin"}}),e._v(" "),a("h2",{attrs:{id:"box-sizing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#box-sizing"}},[e._v("#")]),e._v(" box-sizing")]),e._v(" "),a("p",[e._v("The default box model ("),a("code",[e._v("content-box")]),e._v(") can be counter-intuitive, since the "),a("code",[e._v("width")]),e._v(" / "),a("code",[e._v("height")]),e._v(" for an element will not represent its actual width or height on screen as soon as you start adding "),a("code",[e._v("padding")]),e._v(" and "),a("code",[e._v("border")]),e._v(" styles to the element.")]),e._v(" "),a("p",[e._v("The following example demonstrates this potential issue with "),a("code",[e._v("content-box")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[e._v("textarea")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("padding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 3px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("box-sizing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" content-box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* default value */")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("Since the padding will be added to the width of the textarea, the resulting element is a textarea that is wider than 100%.")]),e._v(" "),a("p",[e._v("Fortunately, CSS allows us to change the box model with the "),a("code",[e._v("box-sizing")]),e._v(" property for an element. There are three different values for the property available:")]),e._v(" "),a("li",[e._v("\n`content-box`: The common box model - width and height only includes the content, not the padding or border\n")]),e._v(" "),a("li",[e._v("\n`padding-box`: Width and height includes the content and the padding, but not the border\n")]),e._v(" "),a("li",[e._v("\n`border-box`: Width and height includes the content, the padding as well as the border\n")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://i.stack.imgur.com/1ZiRc.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i.stack.imgur.com/1ZiRc.png",alt:"enter image description here"}}),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("To solve the "),a("code",[e._v("textarea")]),e._v(" problem above, you could just change the "),a("code",[e._v("box-sizing")]),e._v(" property to "),a("code",[e._v("padding-box")]),e._v(" or "),a("code",[e._v("border-box")]),e._v(". "),a("code",[e._v("border-box")]),e._v(" is most commonly used.")]),e._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[e._v("textarea")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("padding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 3px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("box-sizing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" border-box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("To apply a specific box model to every element on the page, use the following snippet:")]),e._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[e._v("html")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("box-sizing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" border-box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[e._v("*,\n*:before,\n*:after")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("box-sizing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" inherit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("In this coding "),a("code",[e._v("box-sizing:border-box;")]),e._v(" is not directly applied to "),a("code",[e._v("*")]),e._v(", so you can easily overwrite this property on individual elements.")]),e._v(" "),a("h4",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),a("ul",[a("li",[e._v("box-sizing: "),a("strong",[e._v("parameter")]),e._v(";")])]),e._v(" "),a("h4",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Detail")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("content-box")])]),e._v(" "),a("td",[e._v("Width and height of the element only includes content area.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("padding-box")])]),e._v(" "),a("td",[e._v("Width and height of the element includes content and padding.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("border-box")])]),e._v(" "),a("td",[e._v("Width and height of the element includes content, padding and border.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("initial")])]),e._v(" "),a("td",[e._v("Sets the box model to its default state.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("inherit")])]),e._v(" "),a("td",[e._v("Inherits the box model of the parent element.")])])])]),e._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[e._v("#")]),e._v(" Remarks")]),e._v(" "),a("h3",{attrs:{id:"about-padding-box"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#about-padding-box"}},[e._v("#")]),e._v(" About padding-box")]),e._v(" "),a("p",[e._v("This value was only implemented by "),a("strong",[e._v("Firefox")]),e._v(" and thus should not be used. It was removed in Firefox version 50.0.")])])}),[],!1,null,null,null);t.default=s.exports}}]);