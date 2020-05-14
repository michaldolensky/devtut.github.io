(window.webpackJsonp=window.webpackJsonp||[]).push([[933],{1278:function(t,e,a){"use strict";a.r(e);var s=a(19),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"clipping-and-masking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clipping-and-masking"}},[t._v("#")]),t._v(" Clipping and Masking")]),t._v(" "),a("h2",{attrs:{id:"simple-mask-that-fades-an-image-from-solid-to-transparent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-mask-that-fades-an-image-from-solid-to-transparent"}},[t._v("#")]),t._v(" Simple mask that fades an image from solid to transparent")]),t._v(" "),a("h3",{attrs:{id:"css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[t._v("#")]),t._v(" CSS")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("http://lorempixel.com/200/200/nature/1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("mask-image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("linear-gradient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" white"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" transparent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"html"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html"}},[t._v("#")]),t._v(" HTML")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("<div></div>\n\n")])])]),a("p",[t._v("In the above example there is an element with an image as its background. The mask that is applied on the image (using CSS) makes it look as though it is fading out from left to right.")]),t._v(" "),a("p",[t._v("The masking is achieved by using a "),a("code",[t._v("linear-gradient")]),t._v(" that goes from white (on the left) to transparent (on the right) as the mask. As it is an alpha mask, image becomes transparent where the mask is transparent.")]),t._v(" "),a("p",[a("strong",[t._v("Output without the mask:")])]),t._v(" "),a("p",[a("a",{attrs:{href:"http://i.stack.imgur.com/NuDDU.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"http://i.stack.imgur.com/NuDDU.png",alt:"enter image description here"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[a("strong",[t._v("Output with the mask:")])]),t._v(" "),a("p",[a("a",{attrs:{href:"http://i.stack.imgur.com/0IzYy.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"http://i.stack.imgur.com/0IzYy.png",alt:"enter image description here"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[a("strong",[t._v("Note:")]),t._v(" As mentioned in remarks, the above example would work in Chrome, Safari and Opera only when used with the "),a("code",[t._v("-webkit")]),t._v(" prefix. This example (with a "),a("code",[t._v("linear-gradient")]),t._v(" as mask image) is not yet supported in Firefox.")]),t._v(" "),a("h2",{attrs:{id:"clipping-circle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clipping-circle"}},[t._v("#")]),t._v(" Clipping (Circle)")]),t._v(" "),a("h3",{attrs:{id:"css-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-2"}},[t._v("#")]),t._v(" CSS:")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" teal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("clip-path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("circle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("30% at 50% 50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* refer remarks before usage */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"html-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html-2"}},[t._v("#")]),t._v(" HTML")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("<div></div>\n\n")])])]),a("p",[t._v("This example shows how to clip a div to a circle. The element is clipped into a circle whose radius is 30% based on the dimensions of the reference box with its center point at the center of the reference box. Here since no "),a("clip-geometry-box",[t._v(" (in other words, reference box) is provided, the "),a("code",[t._v("border-box")]),t._v(" of the element will be used as the reference box.")])],1),t._v(" "),a("p",[t._v("The circle shape needs to have a radius and a center with "),a("code",[t._v("(x,y)")]),t._v(" coordinates:")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("circle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("radius at x y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[a("a",{attrs:{href:"https://jsfiddle.net/webtiki/qp69n494/",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("View Example")]),a("OutboundLink")],1)]),t._v(" "),a("p",[a("strong",[t._v("Output:")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://jsfiddle.net/webtiki/qp69n494/",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"http://i.stack.imgur.com/Dtgbd.png",alt:"Circle with CSS clip-path"}}),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"clipping-and-masking-overview-and-difference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clipping-and-masking-overview-and-difference"}},[t._v("#")]),t._v(" Clipping and Masking: Overview and Difference")]),t._v(" "),a("p",[t._v("With "),a("strong",[t._v("Clipping")]),t._v(" and "),a("strong",[t._v("Masking")]),t._v(" you can make some specified parts of elements transparent or opaque. Both can be applied to any HTML element.")]),t._v(" "),a("h3",{attrs:{id:"clipping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clipping"}},[t._v("#")]),t._v(" Clipping")]),t._v(" "),a("p",[t._v("Clips are vector paths. Outside of this path the element will be transparent, inside it's opaque. Therefore you can define a "),a("code",[t._v("clip-path")]),t._v(" property on elements. Every graphical element that also exists in SVG you can use here as a function to define the path. Examples are "),a("code",[t._v("circle()")]),t._v(", "),a("code",[t._v("polygon()")]),t._v(" or "),a("code",[t._v("ellipse()")]),t._v(".")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://i.stack.imgur.com/7x1WOm.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"http://i.stack.imgur.com/7x1WOm.png",alt:"path"}}),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("clip-path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("circle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("100px at center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("The element will be only visible inside of this circle, which is positioned at the center of the element and has a radius of 100px.")]),t._v(" "),a("h3",{attrs:{id:"masking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#masking"}},[t._v("#")]),t._v(" Masking")]),t._v(" "),a("p",[t._v("Masks are similar to Clips, but instead of defining a path you define a mask what layers over the element. You can imagine this mask as an image what consist of mainly two colors: black and white.")]),t._v(" "),a("p",[a("strong",[t._v("Luminance Mask")]),t._v(": Black means the region is opaque, and white that it's transparent, but there is also a grey area which is semi-transparent, so you are able to make smooth transitions.")]),t._v(" "),a("p",[a("strong",[t._v("Alpha Mask")]),t._v(": Only on the transparent areas of the mask the element will be opaque.")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://i.stack.imgur.com/WGJAym.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"http://i.stack.imgur.com/WGJAym.png",alt:"luminance mask"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("This image for example can be used as a luminance mask to make for an element a very smooth transition from right to left and from opaque to transparent.")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("mask")]),t._v(" property let you specify the the mask type and an image to be used as layer.")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("mask")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("masks.svg#rectangle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" luminance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("An element called "),a("code",[t._v("rectangle")]),t._v(" defined in "),a("code",[t._v("masks.svg")]),t._v(" will be used as an "),a("strong",[t._v("luminance mask")]),t._v(" on the element.")]),t._v(" "),a("h2",{attrs:{id:"clipping-polygon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clipping-polygon"}},[t._v("#")]),t._v(" Clipping (Polygon)")]),t._v(" "),a("h3",{attrs:{id:"css-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-3"}},[t._v("#")]),t._v(" CSS:")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" teal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("clip-path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("polygon")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 100% 50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* refer remarks before usage */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"html-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html-3"}},[t._v("#")]),t._v(" HTML:")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("<div></div>\n\n")])])]),a("p",[t._v("In the above example, a "),a("strong",[t._v("polygonal")]),t._v(" clipping path is used to clip the square (200 x 200) element into a triangle shape. The output shape is a triangle because the path starts at (that is, first coordinates are at) "),a("code",[t._v("0 0")]),t._v(" - which is the top-left corner of the box, then goes to "),a("code",[t._v("0 100%")]),t._v(" - which is bottom-left corner of the box and then finally to "),a("code",[t._v("100% 50%")]),t._v(" which is nothing but the right-middle point of the box. These paths are self closing (that is, the starting point will be the ending point) and so the final shape is that of a triangle.")]),t._v(" "),a("p",[t._v("This can also be used on an element with an image or a gradient as background.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://jsfiddle.net/eoa4a94k/",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("View Example")]),a("OutboundLink")],1)]),t._v(" "),a("p",[a("strong",[t._v("Output:")])]),t._v(" "),a("p",[a("a",{attrs:{href:"http://i.stack.imgur.com/HMHSC.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"http://i.stack.imgur.com/HMHSC.png",alt:"enter image description here"}}),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"using-masks-to-cut-a-hole-in-the-middle-of-an-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-masks-to-cut-a-hole-in-the-middle-of-an-image"}},[t._v("#")]),t._v(" Using masks to cut a hole in the middle of an image")]),t._v(" "),a("h3",{attrs:{id:"css-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-4"}},[t._v("#")]),t._v(" CSS")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("http://lorempixel.com/200/200/abstract/6"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("mask-image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("radial-gradient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    circle farthest-side at center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    transparent 49%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    white 50%\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* check remarks before using */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"html-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html-4"}},[t._v("#")]),t._v(" HTML")]),t._v(" "),a("p",[t._v("In the above example, a transparent circle is created at the center using "),a("code",[t._v("radial-gradient")]),t._v(" and this is then used as a mask to produce the effect of a circle being cut out from the center of an image.")]),t._v(" "),a("p",[a("strong",[t._v("Image without mask:")])]),t._v(" "),a("p",[a("a",{attrs:{href:"http://i.stack.imgur.com/lsyRy.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"http://i.stack.imgur.com/lsyRy.png",alt:"enter image description here"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[a("strong",[t._v("Image with mask:")])]),t._v(" "),a("p",[a("a",{attrs:{href:"http://i.stack.imgur.com/1DBOI.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"http://i.stack.imgur.com/1DBOI.png",alt:"enter image description here"}}),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"using-masks-to-create-images-with-irregular-shapes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-masks-to-create-images-with-irregular-shapes"}},[t._v("#")]),t._v(" Using masks to create images with irregular shapes")]),t._v(" "),a("h3",{attrs:{id:"css-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-5"}},[t._v("#")]),t._v(" CSS")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* check remarks before usage */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 400px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("http://lorempixel.com/400/200/nature/4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("mask-image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("linear-gradient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to top right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" transparent 49.5%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" white 50.5%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("linear-gradient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to top left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" transparent 49.5%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" white 50.5%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("linear-gradient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("white"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" white"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("mask-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 75% 25%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 25% 25%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 100% 75%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("mask-position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bottom left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bottom right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" top left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("mask-repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" no-repeat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"html-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html-5"}},[t._v("#")]),t._v(" HTML")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("<div></div>\n\n")])])]),a("p",[t._v("In the above example, three "),a("code",[t._v("linear-gradient")]),t._v(" images (which when placed in their appropriate positions would cover 100% x 100% of the container's size) are used as masks to produce a transparent triangular shaped cut at the bottom of the image.")]),t._v(" "),a("p",[a("strong",[t._v("Image without the mask:")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://i.stack.imgur.com/OLcC9.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i.stack.imgur.com/OLcC9.png",alt:"enter image description here"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[a("strong",[t._v("Image with the mask:")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://i.stack.imgur.com/yOsfT.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i.stack.imgur.com/yOsfT.png",alt:"enter image description here"}}),a("OutboundLink")],1)]),t._v(" "),a("h4",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Clipping")])]),t._v(" "),a("li",[t._v("clip-path: "),a("clip-source",[t._v(" | [ "),a("basic-shape",[t._v(" || "),a("clip-geometry-box",[t._v(" ] | none")])],1)],1)],1),t._v(" "),a("li",[a("strong",[t._v("Masking")])]),t._v(" "),a("li",[t._v("mask-image: [ none | "),a("mask-reference",[t._v(" ]#")])],1),t._v(" "),a("li",[t._v("mask-mode: [ "),a("mask-mode",[t._v(" ]#")])],1),t._v(" "),a("li",[t._v("mask-repeat: [ <repeat-style ]#")]),t._v(" "),a("li",[t._v("mask-position: [ "),a("position",[t._v(" ]#")])],1),t._v(" "),a("li",[t._v("mask-clip: [ "),a("geometry-box",[t._v(" | no-clip ]#")])],1),t._v(" "),a("li",[t._v("mask-origin: [ "),a("geometry-box",[t._v(" ]#")])],1),t._v(" "),a("li",[t._v("mask-size: [ "),a("bg-size",[t._v(" ]#")])],1),t._v(" "),a("li",[t._v("mask-composite: [ "),a("compositing-operator",[t._v(" ]#\n"),a("li",[t._v("mask: [ "),a("mask-reference",[a("masking-mode",[t._v("? || "),a("position",[t._v(" [ / "),a("bg-size",[t._v(" ]? ||\n"),a("repeat-style",[t._v(" || "),a("geometry-box",[t._v(" || [ "),a("geometry-box",[t._v(" | no-clip ] || "),a("compositing-operator",[t._v(" ]#")])],1)],1)],1)],1)],1)],1)],1)],1)])],1)]),t._v(" "),a("h4",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),t._v(" "),a("th",[t._v("Details")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("clip-source")]),t._v(" "),a("td",[t._v("A URL which can point to an inline SVG element (or) an SVG element in an external file that contains the clip path's definition.")])]),t._v(" "),a("tr",[a("td",[t._v("basic-shape")]),t._v(" "),a("td",[t._v("Refers to one among "),a("code",[t._v("inset()")]),t._v(", "),a("code",[t._v("circle()")]),t._v(", "),a("code",[t._v("ellipse()")]),t._v(" or "),a("code",[t._v("polygon()")]),t._v(". Using one of these functions the clipping path is defined. These shape functions work exactly the same way as they do in "),a("a",{attrs:{href:"http://stackoverflow.com/documentation/css/2034/shapes-for-floats#t=201607261620533253214",target:"_blank",rel:"noopener noreferrer"}},[t._v("Shapes for Floats"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",[t._v("clip-geometry-box")]),t._v(" "),a("td",[t._v("This can have one among "),a("code",[t._v("content-box")]),t._v(", "),a("code",[t._v("padding-box")]),t._v(", "),a("code",[t._v("border-box")]),t._v(", "),a("code",[t._v("margin-box")]),t._v(", "),a("code",[t._v("fill-box")]),t._v(", "),a("code",[t._v("stroke-box")]),t._v(", "),a("code",[t._v("view-box")]),t._v(" as values. When this is provided without any value for "),a("basic-shape",[t._v(", the edges of the corresponding box is used as the path for clipping. When used with a "),a("basic-shape",[t._v(", this acts as the reference box for the shape.")])],1)],1)]),t._v(" "),a("tr",[a("td",[t._v("mask-reference")]),t._v(" "),a("td",[t._v("This can be "),a("code",[t._v("none")]),t._v(" or an image or a reference URL to a mask image source.")])]),t._v(" "),a("tr",[a("td",[t._v("repeat-style")]),t._v(" "),a("td",[t._v("This specifies how the mask should be repeated or tiled in the X and Y axes. The supported values are "),a("code",[t._v("repeat-x")]),t._v(", "),a("code",[t._v("repeat-y")]),t._v(", "),a("code",[t._v("repeat")]),t._v(", "),a("code",[t._v("space")]),t._v(", "),a("code",[t._v("round")]),t._v(", "),a("code",[t._v("no-repeat")]),t._v(".")])]),t._v(" "),a("tr",[a("td",[t._v("mask-mode")]),t._v(" "),a("td",[t._v("Can be "),a("code",[t._v("alpha")]),t._v(" or "),a("code",[t._v("luminance")]),t._v(" or "),a("code",[t._v("auto")]),t._v(" and indicates whether the mask should be treated as a alpha mask or a luminance mask. If no value is provided and the mask-reference is a direct image then it would be considered as alpha mask (or) if the mask-reference is a URL then it would be considered as luminance mask.")])]),t._v(" "),a("tr",[a("td",[t._v("position")]),t._v(" "),a("td",[t._v("This specifies the position of each mask layer and is similar in behavior to the "),a("code",[t._v("background-position")]),t._v(" property. The value can be provided in 1 value syntax (like "),a("code",[t._v("top")]),t._v(", "),a("code",[t._v("10%")]),t._v(") or in 2 value syntax (like "),a("code",[t._v("top right")]),t._v(", "),a("code",[t._v("50% 50%")]),t._v(").")])]),t._v(" "),a("tr",[a("td",[t._v("geometry-box")]),t._v(" "),a("td",[t._v("This specifies the box to which the mask should be clipped ("),a("strong",[t._v("mask painting area")]),t._v(") or the box which should be used as reference for the mask's origin ("),a("strong",[t._v("mask positioning area")]),t._v(") depending on the property. The list of possible values are "),a("code",[t._v("content-box")]),t._v(", "),a("code",[t._v("padding-box")]),t._v(", "),a("code",[t._v("border-box")]),t._v(", "),a("code",[t._v("margin-box")]),t._v(", "),a("code",[t._v("fill-box")]),t._v(", "),a("code",[t._v("stroke-box")]),t._v(", "),a("code",[t._v("view-box")]),t._v(". Detailed explanation of how each of those values work is available in the "),a("a",{attrs:{href:"https://www.w3.org/TR/css-masking/#the-mask-clip",target:"_blank",rel:"noopener noreferrer"}},[t._v("W3C Spec"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("tr",[a("td",[t._v("bg-size")]),t._v(" "),a("td",[t._v("This represents the size of each mask-image layer and has the same syntax as "),a("code",[t._v("background-size")]),t._v(". The value can be length or percentage or auto or cover or contain. Length, percentage and auto can either be provided as a single value or as one for each axis.")])]),t._v(" "),a("tr",[a("td",[t._v("compositing-operator")]),t._v(" "),a("td",[t._v("This can be any one among "),a("code",[t._v("add")]),t._v(", "),a("code",[t._v("subtract")]),t._v(", "),a("code",[t._v("exclude")]),t._v(", "),a("code",[t._v("multiply")]),t._v(" per layer and defines the type of compositing operation that should be used for this layer with those below it. Detailed explanation about each value is available in the "),a("a",{attrs:{href:"https://www.w3.org/TR/css-masking/#the-mask-composite",target:"_blank",rel:"noopener noreferrer"}},[t._v("W3C Specs"),a("OutboundLink")],1),t._v(".")])])])]),t._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),a("p",[a("strong",[t._v("CSS Clipping and Masking")]),t._v(" are very new concepts and so the browser support for these properties are pretty low.")]),t._v(" "),a("h3",{attrs:{id:"masks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#masks"}},[t._v("#")]),t._v(" Masks:")]),t._v(" "),a("p",[t._v("As at the time of writing (Jul '16), Chrome, Safari and Opera support these properties with the "),a("code",[t._v("-webkit-")]),t._v(" prefix.")]),t._v(" "),a("p",[t._v("Firefox doesn't require prefixes but it supports masks only when used with SVG "),a("code",[t._v("mask")]),t._v(" elements. For inline SVG "),a("code",[t._v("mask")]),t._v(" elements, the syntax is "),a("code",[t._v("mask: url(#msk)")]),t._v(" whereas for using "),a("code",[t._v("mask")]),t._v(" elements in an external SVG file the syntax is "),a("code",[t._v("mask: url('yourfilepath/yourfilename.svg#msk')")]),t._v(". "),a("code",[t._v("#msk")]),t._v(" in both cases refers to the "),a("code",[t._v("id")]),t._v(" of the "),a("code",[t._v("mask")]),t._v(" element that is being referred to. As indicated in "),a("a",{attrs:{href:"http://stackoverflow.com/questions/38650751/css-mask-not-working-on-firefox",target:"_blank",rel:"noopener noreferrer"}},[t._v("this answer"),a("OutboundLink")],1),t._v(", at present Firefox doesn't support any parameter other than "),a("code",[t._v("mask-reference")]),t._v(" in the "),a("code",[t._v("mask")]),t._v(" property.")]),t._v(" "),a("p",[t._v("Internet Explorer (and Edge) does not offer any support for this property as yet.")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("mask-mode")]),t._v(" property is currently not supported by any browser "),a("strong",[t._v("with or without")]),t._v(" prefixes.")]),t._v(" "),a("h3",{attrs:{id:"clip-path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clip-path"}},[t._v("#")]),t._v(" Clip-path:")]),t._v(" "),a("p",[t._v("As at the time writing (Jul '16) Chrome, Safari and Opera supports "),a("code",[t._v("clip-path")]),t._v(" when the path is created using basic shapes (like "),a("code",[t._v("circle")]),t._v(", "),a("code",[t._v("polygon")]),t._v(") or the "),a("code",[t._v("url(#clipper)")]),t._v(" syntax with inline SVG. They don't support clipping based on shapes that are part of external SVG files. Also, they require the "),a("code",[t._v("-webkit")]),t._v(" prefix to be present.")]),t._v(" "),a("p",[t._v("Firefox supports only the "),a("code",[t._v("url()")]),t._v(" syntax for "),a("code",[t._v("clip-path")]),t._v(" whereas Internet Explorer (and Edge) offer no support.")])])}),[],!1,null,null,null);e.default=n.exports}}]);