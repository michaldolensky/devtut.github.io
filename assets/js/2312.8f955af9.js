(window.webpackJsonp=window.webpackJsonp||[]).push([[2312],{2658:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"nsurl-send-a-post-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nsurl-send-a-post-request"}},[t._v("#")]),t._v(" NSUrl send a post request")]),t._v(" "),a("h2",{attrs:{id:"simple-post-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-post-request"}},[t._v("#")]),t._v(" Simple POST request")]),t._v(" "),a("div",{staticClass:"language-objectivec extra-class"},[a("pre",{pre:!0,attrs:{class:"language-objectivec"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create the request.")]),t._v("\nNSMutableURLRequest "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("request "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSMutableURLRequest requestWithURL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSURL URLWithString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("@")]),t._v('"http'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//google.com"]];')]),t._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Specify that it will be a POST request")]),t._v("\nrequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HTTPMethod "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"POST"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This is how we set header fields")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("request setValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"application/xml; charset=utf-8"')]),t._v(" forHTTPHeaderField"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"Content-Type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Convert your data and set your request's HTTPBody property")]),t._v("\nNSString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("stringData "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"some data"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nNSData "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("requestBodyData "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("stringData dataUsingEncoding"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("NSUTF8StringEncoding"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nrequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HTTPBody "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" requestBodyData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create url connection and fire request")]),t._v("\nNSURLConnection "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("conn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSURLConnection alloc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" initWithRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("request delegate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"simple-post-request-with-timeout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-post-request-with-timeout"}},[t._v("#")]),t._v(" Simple Post Request With Timeout")]),t._v(" "),a("div",{staticClass:"language-objectivec extra-class"},[a("pre",{pre:!0,attrs:{class:"language-objectivec"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create the request.")]),t._v("\nNSMutableURLRequest "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("request "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSMutableURLRequest requestWithURL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSURL URLWithString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("@")]),t._v('"http'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//google.com"]];')]),t._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Specify that it will be a POST request")]),t._v("\nrequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HTTPMethod "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"POST"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Setting a timeout ")]),t._v("\nrequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timeoutInterval "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This is how we set header fields")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("request setValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"application/xml; charset=utf-8"')]),t._v(" forHTTPHeaderField"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"Content-Type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Convert your data and set your request's HTTPBody property")]),t._v("\nNSString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("stringData "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"some data"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nNSData "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("requestBodyData "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("stringData dataUsingEncoding"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("NSUTF8StringEncoding"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nrequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HTTPBody "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" requestBodyData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create url connection and fire request")]),t._v("\nNSURLConnection "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("conn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSURLConnection alloc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" initWithRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("request delegate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);