(window.webpackJsonp=window.webpackJsonp||[]).push([[1764],{2109:function(a,e,n){"use strict";n.r(e);var t=n(19),s=Object(t.a)({},(function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"namespacing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#namespacing"}},[a._v("#")]),a._v(" Namespacing")]),a._v(" "),n("h2",{attrs:{id:"namespace-by-direct-assignment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#namespace-by-direct-assignment"}},[a._v("#")]),a._v(" Namespace by direct assignment")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("\n//Before: antipattern 3 global variables\n    var setActivePage = function () {};\n    var getPage = function() {};\n    var redirectPage = function() {};\n\n//After:  just 1 global variable, no function collision and more meaningful function names\n    var NavigationNs = NavigationNs || {};\n    NavigationNs.active = function() {}\n    NavigationNs.pagination = function() {}\n    NavigationNs.redirection = function() {}\n\n")])])]),n("h2",{attrs:{id:"nested-namespaces"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nested-namespaces"}},[a._v("#")]),a._v(" Nested Namespaces")]),a._v(" "),n("p",[a._v("When multiple modules are involved, avoid proliferating global names by creating a single global namespace. From there, any sub-modules can be added to the global namespace. (Further nesting will slow down performance and add unnecessary complexity.) Longer names can be used if name clashes are an issue:")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("\nvar NavigationNs = NavigationNs || {};\n     NavigationNs.active =  {};\n     NavigationNs.pagination = {};\n     NavigationNs.redirection = {};\n    \n     // The second level start here.\n     Navigational.pagination.jquery = function();\n     Navigational.pagination.angular = function();\n     Navigational.pagination.ember = function();\n\n")])])]),n("h4",{attrs:{id:"remarks"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[a._v("#")]),a._v(" Remarks")]),a._v(" "),n("p",[a._v("In Javascript, there is no notion of namespaces and they are very useful to organizes the code in various languages. For javascript they help reduce the number of globals required by our programs and at the same time also help avoid naming collisions or excessive name prefixing. Instead of polluting the global scope with a lot of functions, objects, and other variables, you can create one (and ideally only one) global object for your application or library.")])])}),[],!1,null,null,null);e.default=s.exports}}]);