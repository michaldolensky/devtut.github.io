(window.webpackJsonp=window.webpackJsonp||[]).push([[2577],{2922:function(t,e,a){"use strict";a.r(e);var s=a(19),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"calculated-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#calculated-properties"}},[t._v("#")]),t._v(" Calculated Properties")]),t._v(" "),a("p",[t._v("Calculated Properties in Powershell are custom derived(Calculated) properties. It lets the user to format a certain property in a way he want it to be. The calculation(expression) can be a quite possibly anything.")]),t._v(" "),a("h2",{attrs:{id:"display-file-size-in-kb-calculated-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#display-file-size-in-kb-calculated-properties"}},[t._v("#")]),t._v(" Display file size in KB - Calculated Properties")]),t._v(" "),a("p",[t._v("Let's consider the below snippet,")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get-ChildItem")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Path C:\\MyFolder "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Select-Object")]),t._v(" Name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" CreationTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Length\n\n")])])]),a("p",[t._v("It simply output the folder content with the selected properties. Something like,")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://i.stack.imgur.com/4IJGG.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i.stack.imgur.com/4IJGG.png",alt:"Plain Properties"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("What if I want to display the file size in KB ? This is where calcualted properties comes handy.")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get-ChildItem")]),t._v(" C:\\MyFolder "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Select-Object")]),t._v(" Name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" @"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Name="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Size_In_KB"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("Expression="),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" 1Kb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("Which produces,")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://i.stack.imgur.com/KPeVM.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i.stack.imgur.com/KPeVM.png",alt:"enter image description here"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("Expression")]),t._v(" is what holds the calculation for calculated property. And yes, it can be anything!")])])}),[],!1,null,null,null);e.default=r.exports}}]);