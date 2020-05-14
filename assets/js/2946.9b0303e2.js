(window.webpackJsonp=window.webpackJsonp||[]).push([[2946],{3294:function(t,s,r){"use strict";r.r(s);var a=r(19),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"restful-r-services"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#restful-r-services"}},[t._v("#")]),t._v(" RESTful R Services")]),t._v(" "),r("h2",{attrs:{id:"opencpu-apps"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#opencpu-apps"}},[t._v("#")]),t._v(" opencpu Apps")]),t._v(" "),r("p",[t._v("The official website contain good exemple of apps:\n"),r("a",{attrs:{href:"https://www.opencpu.org/apps.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.opencpu.org/apps.html"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("The following code is used to serve a R session:")]),t._v(" "),r("div",{staticClass:"language-r extra-class"},[r("pre",{pre:!0,attrs:{class:"language-r"}},[r("code",[t._v("library"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("opencpu"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nopencpu"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("start"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("port "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("5936")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),r("p",[t._v("After this code is executed, you can use URLs to access the functions of the R session.\nThe result could be XML, html, JSON or some other defined formats.")]),t._v(" "),r("p",[t._v("For exemple, the previous R session can be accessed by a cURL call:")]),t._v(" "),r("div",{staticClass:"language-r extra-class"},[r("pre",{pre:!0,attrs:{class:"language-r"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#curl uses http post method for -X POST or -d "arg=value"')]),t._v("\ncurl http"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("localhost"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("5936")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ocpu"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("library"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("MASS"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("scripts"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ch01.R "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("X POST\ncurl http"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("localhost"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("5936")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ocpu"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("library"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("stats"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("R"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("rnorm "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("d "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"n=10&mean=5"')]),t._v("\n\n")])])]),r("p",[t._v("The call is asynchronous, meaning that the R session is not blocked while waiting for the call to finish (contrary to shiny).")]),t._v(" "),r("p",[t._v("The call result is kept in a temporary session stored in "),r("code",[t._v("/ocpu/tmp/")])]),t._v(" "),r("p",[t._v("An exemple of how to retrieve the temporary session:")]),t._v(" "),r("div",{staticClass:"language-r extra-class"},[r("pre",{pre:!0,attrs:{class:"language-r"}},[r("code",[t._v("curl https"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("public.opencpu.org"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ocpu"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("library"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("stats"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("R"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("rnorm "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("d n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ocpu"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("tmp"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("x009f9e7630"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("R"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(".val\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ocpu"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("tmp"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("x009f9e7630"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("stdout\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ocpu"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("tmp"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("x009f9e7630"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("source\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ocpu"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("tmp"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("x009f9e7630"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("console\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ocpu"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("tmp"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("x009f9e7630"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("info\n\n")])])]),r("p",[r("code",[t._v("x009f9e7630")]),t._v(" is the name of the session.")]),t._v(" "),r("p",[t._v("Pointing to "),r("code",[t._v("/ocpu/tmp/x009f9e7630/R/.val")]),t._v(" will return the value resulting of "),r("code",[t._v("rnorm(5)")]),t._v(", "),r("code",[t._v("/ocpu/tmp/x009f9e7630/R/console")]),t._v(" will return the content of the console of "),r("code",[t._v("rnorm(5)")]),t._v(", etc..")])])}),[],!1,null,null,null);s.default=e.exports}}]);