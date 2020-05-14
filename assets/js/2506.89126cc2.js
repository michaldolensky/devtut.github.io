(window.webpackJsonp=window.webpackJsonp||[]).push([[2506],{2853:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"soap-client"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#soap-client"}},[t._v("#")]),t._v(" SOAP Client")]),t._v(" "),a("h2",{attrs:{id:"wsdl-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wsdl-mode"}},[t._v("#")]),t._v(" WSDL Mode")]),t._v(" "),a("p",[t._v("First, create a new "),a("code",[t._v("SoapClient")]),t._v(" object, passing the URL to the WSDL file and optionally, an array of options.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create a new client object using a WSDL URL")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$soap")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SoapClient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'https://example.com/soap.wsdl'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token shell-comment comment"}},[t._v("# This array and its values are optional")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'soap_version'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SOAP_1_2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'compression'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SOAP_COMPRESSION_ACCEPT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SOAP_COMPRESSION_GZIP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'cache_wsdl'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("WSDL_CACHE_BOTH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token shell-comment comment"}},[t._v("# Helps with debugging")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'trace'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("TRUE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'exceptions'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("TRUE")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("Then use the "),a("code",[t._v("$soap")]),t._v(" object to call your SOAP methods.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$result")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$soap")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'b'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'c'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"non-wsdl-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#non-wsdl-mode"}},[t._v("#")]),t._v(" Non-WSDL Mode")]),t._v(" "),a("p",[t._v("This is similar to WSDL mode, except we pass "),a("code",[t._v("NULL")]),t._v(" as the WSDL file and make sure to set the "),a("code",[t._v("location")]),t._v(" and "),a("code",[t._v("uri")]),t._v(" options.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$soap")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SoapClient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'location'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'https://example.com/soap/endpoint'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'uri'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'namespace'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"classmaps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#classmaps"}},[t._v("#")]),t._v(" Classmaps")]),t._v(" "),a("p",[t._v("When creating a SOAP Client in PHP, you can also set a "),a("code",[t._v("classmap")]),t._v(" key in the configuration array. This "),a("code",[t._v("classmap")]),t._v(" defines which types defined in the WSDL should be mapped to actual classes, instead of the default "),a("code",[t._v("StdClass")]),t._v(". The reason you would want to do this is because you can get auto-completion of fields and method calls on these classes, instead of having to guess which fields are set on the regular "),a("code",[t._v("StdClass")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyAddress")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$country")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$city")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$full_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$postal_code")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or zip_code")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$house_number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyBook")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$author")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The classmap also allows us to add useful functions to the objects")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// that are returned from the SOAP operations.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getShortDescription")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(", written by "),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("author")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$soap_client")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SoapClient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$link_to_wsdl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Other parameters")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"classmap"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"Address"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" MyAddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ::class simple returns class as string")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"Book"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" MyBook"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("After configuring the classmap, whenever you perform a certain operation that returns a type "),a("code",[t._v("Address")]),t._v(" or "),a("code",[t._v("Book")]),t._v(", the SoapClient will instantiate that class, fill the fields with the data and return it from the operation call.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Lets assume 'getAddress(1234)' returns an Address by ID in the database")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$address")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$soap_client")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAddress")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1234")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $address is now of type MyAddress due to the classmap")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$address")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("country")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Lets assume the same for 'getBook(1234)'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$book")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$soap_client")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBook")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("124")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// We can not use other functions defined on the MyBook class")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$book")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getShortDescription")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Any type defined in the WSDL that is not defined in the classmap")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// will become a regular StdClass object")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$author")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$soap_client")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAuthor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1234")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// No classmap for Author type, $author is regular StdClass.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// We can still access fields, but no auto-completion and no custom functions")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// to define for the objects.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$author")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"tracing-soap-request-and-response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tracing-soap-request-and-response"}},[t._v("#")]),t._v(" Tracing SOAP request and response")]),t._v(" "),a("p",[t._v("Sometimes we want to look at what is sent and received in the SOAP request. The following methods will return the XML in the request and response:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("SoapClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__getLastRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nSoapClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__getLastRequestHeaders")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nSoapClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__getLastResponse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nSoapClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__getLastResponseHeaders")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("For example, suppose we have an "),a("code",[t._v("ENVIRONMENT")]),t._v(" constant and when this constant's value is set to "),a("code",[t._v("DEVELOPMENT")]),t._v(" we want to echo all information when the call to "),a("code",[t._v("getAddress")]),t._v(" throws an error. One solution could be:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$address")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$soap_client")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAddress")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1234")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SoapFault "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ENVIRONMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'DEVELOPMENT'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("var_dump")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$soap_client")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__getLastRequestHeaders")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$soap_client")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__getLastRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$soap_client")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__getLastResponseHeaders")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$soap_client")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__getLastResponse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h4",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://php.net/manual/en/soapclient.getfunctions.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("__getFunctions()"),a("OutboundLink")],1),t._v(" // Returns array of functions for service (WSDL mode only)")]),t._v(" "),a("li",[a("a",{attrs:{href:"http://php.net/manual/en/soapclient.gettypes.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("__getTypes()"),a("OutboundLink")],1),t._v(" // Returns array of types for service (WSDL mode only)")]),t._v(" "),a("li",[a("a",{attrs:{href:"http://php.net/manual/en/soapclient.getlastrequest.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("__getLastRequest()"),a("OutboundLink")],1),t._v(" // Returns XML from last request (Requires "),a("code",[t._v("trace")]),t._v(" option)")]),t._v(" "),a("li",[a("a",{attrs:{href:"http://php.net/manual/en/soapclient.getlastrequestheaders.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("__getLastRequestHeaders()"),a("OutboundLink")],1),t._v(" // Returns headers from last request (Requires "),a("code",[t._v("trace")]),t._v(" option)")]),t._v(" "),a("li",[a("a",{attrs:{href:"http://php.net/manual/en/soapclient.getlastresponse.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("__getLastResponse()"),a("OutboundLink")],1),t._v(" // Returns XML from last response (Requires "),a("code",[t._v("trace")]),t._v(" option)")]),t._v(" "),a("li",[a("a",{attrs:{href:"http://php.net/manual/en/soapclient.getlastresponseheaders.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("__getLastResponseHeaders()"),a("OutboundLink")],1),t._v(" // Returns headers from last response (Requires "),a("code",[t._v("trace")]),t._v(" option)")])]),t._v(" "),a("h4",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),t._v(" "),a("th",[t._v("Details")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("$wsdl")]),t._v(" "),a("td",[t._v("URI of WSDL or "),a("code",[t._v("NULL")]),t._v(" if using non-WSDL mode")])]),t._v(" "),a("tr",[a("td",[t._v("$options")]),t._v(" "),a("td",[t._v("Array of options for SoapClient.  Non-WSDL mode requires "),a("code",[t._v("location")]),t._v(" and "),a("code",[t._v("uri")]),t._v(" to set, all other options are optional.  See table below for possible values.")])])])]),t._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("SoapClient")]),t._v(" class is equipped with a "),a("code",[t._v("__call")]),t._v(" method.  This is "),a("strong",[t._v("not")]),t._v(" to be called directly.  Instead this allows you to do:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$soap")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestInfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'b'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'c'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("This will call the "),a("code",[t._v("requestInfo")]),t._v(" SOAP method.")]),t._v(" "),a("p",[t._v("Table of possible "),a("code",[t._v("$options")]),t._v(" values ("),a("strong",[t._v("Array of key/value pairs")]),t._v("):")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Option")]),t._v(" "),a("th",[t._v("Details")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("location")]),t._v(" "),a("td",[t._v("URL of SOAP server.  "),a("strong",[t._v("Required")]),t._v(" in non-WSDL mode.  Can be used in WSDL mode to override the URL.")])]),t._v(" "),a("tr",[a("td",[t._v("uri")]),t._v(" "),a("td",[t._v("Target namespace of SOAP service.  "),a("strong",[t._v("Required")]),t._v(" in non-WSDL mode.")])]),t._v(" "),a("tr",[a("td",[t._v("style")]),t._v(" "),a("td",[t._v("Possible values are "),a("code",[t._v("SOAP_RPC")]),t._v(" or "),a("code",[t._v("SOAP_DOCUMENT")]),t._v(".  Only valid in non-WSDL mode.")])]),t._v(" "),a("tr",[a("td",[t._v("use")]),t._v(" "),a("td",[t._v("Possible values are "),a("code",[t._v("SOAP_ENCODED")]),t._v(" or "),a("code",[t._v("SOAP_LITERAL")]),t._v(".  Only valid in non-WSDL mode.")])]),t._v(" "),a("tr",[a("td",[t._v("soap_version")]),t._v(" "),a("td",[t._v("Possible values are "),a("code",[t._v("SOAP_1_1")]),t._v(" ("),a("strong",[t._v("default")]),t._v(") or "),a("code",[t._v("SOAP_1_2")]),t._v(".")])]),t._v(" "),a("tr",[a("td",[t._v("authentication")]),t._v(" "),a("td",[t._v("Enable HTTP authentication.  Possible values are "),a("code",[t._v("SOAP_AUTHENTICATION_BASIC")]),t._v(" ("),a("strong",[t._v("default")]),t._v(") or "),a("code",[t._v("SOAP_AUTHENTICATION_DIGEST")]),t._v(".")])]),t._v(" "),a("tr",[a("td",[t._v("login")]),t._v(" "),a("td",[t._v("Username for HTTP authentication")])]),t._v(" "),a("tr",[a("td",[t._v("password")]),t._v(" "),a("td",[t._v("Password for HTTP authentication")])]),t._v(" "),a("tr",[a("td",[t._v("proxy_host")]),t._v(" "),a("td",[t._v("URL of proxy server")])]),t._v(" "),a("tr",[a("td",[t._v("proxy_port")]),t._v(" "),a("td",[t._v("Proxy server port")])]),t._v(" "),a("tr",[a("td",[t._v("proxy_login")]),t._v(" "),a("td",[t._v("Username for proxy")])]),t._v(" "),a("tr",[a("td",[t._v("proxy_password")]),t._v(" "),a("td",[t._v("Password for proxy")])]),t._v(" "),a("tr",[a("td",[t._v("local_cert")]),t._v(" "),a("td",[t._v("Path to HTTPS client cert (for authentication)")])]),t._v(" "),a("tr",[a("td",[t._v("passphrase")]),t._v(" "),a("td",[t._v("Passphrase for HTTPS client cert")])]),t._v(" "),a("tr",[a("td",[t._v("compression")]),t._v(" "),a("td",[t._v("Compress request / response.  Value is a bitmask of "),a("code",[t._v("SOAP_COMPRESSION_ACCEPT")]),t._v(" with either "),a("code",[t._v("SOAP_COMPRESSION_GZIP")]),t._v(" or "),a("code",[t._v("SOAP_COMPRESSION_DEFLATE")]),t._v(".  For example: "),a("code",[t._v("SOAP_COMPRESSION_ACCEPT \\| SOAP_COMPRESSION_GZIP")]),t._v(".")])]),t._v(" "),a("tr",[a("td",[t._v("encoding")]),t._v(" "),a("td",[t._v("Internal character encoding (TODO: possible values)")])]),t._v(" "),a("tr",[a("td",[t._v("trace")]),t._v(" "),a("td",[a("strong",[t._v("Boolean")]),t._v(", defaults to "),a("code",[t._v("FALSE")]),t._v(". Enables tracing of requests so faults can be backtraced. Enables use of "),a("code",[t._v("__getLastRequest()")]),t._v(", "),a("code",[t._v("__getLastRequestHeaders()")]),t._v(", "),a("code",[t._v("__getLastResponse()")]),t._v(" and "),a("code",[t._v("__getLastResponseHeaders()")]),t._v(".")])]),t._v(" "),a("tr",[a("td",[t._v("classmap")]),t._v(" "),a("td",[t._v("Map WSDL types to PHP classes.  Value should be an array with WSDL types as keys and PHP class names as values.")])]),t._v(" "),a("tr",[a("td",[t._v("exceptions")]),t._v(" "),a("td",[a("strong",[t._v("Boolean")]),t._v(" value.  Should SOAP errors exceptions (of type `SoapFault).")])]),t._v(" "),a("tr",[a("td",[t._v("connection_timeout")]),t._v(" "),a("td",[t._v("Timeout (in seconds) for the connection to the SOAP service.")])]),t._v(" "),a("tr",[a("td",[t._v("typemap")]),t._v(" "),a("td",[t._v("Array of type mappings.  Array should be key/value pairs with the following keys: "),a("code",[t._v("type_name")]),t._v(", "),a("code",[t._v("type_ns")]),t._v(" (namespace URI), "),a("code",[t._v("from_xml")]),t._v(" (callback accepting one string parameter) and "),a("code",[t._v("to_xml")]),t._v(" (callback accepting one object parameter).")])]),t._v(" "),a("tr",[a("td",[t._v("cache_wsdl")]),t._v(" "),a("td",[t._v("How (if at all) should the WSDL file be cached.  Possible values are "),a("code",[t._v("WSDL_CACHE_NONE")]),t._v(", "),a("code",[t._v("WSDL_CACHE_DISK")]),t._v(", "),a("code",[t._v("WSDL_CACHE_MEMORY")]),t._v(" or "),a("code",[t._v("WSDL_CACHE_BOTH")]),t._v(".")])]),t._v(" "),a("tr",[a("td",[t._v("user_agent")]),t._v(" "),a("td",[t._v("String to use in the "),a("code",[t._v("User-Agent")]),t._v(" header.")])]),t._v(" "),a("tr",[a("td",[t._v("stream_context")]),t._v(" "),a("td",[t._v("A resource for a context.")])]),t._v(" "),a("tr",[a("td",[t._v("features")]),t._v(" "),a("td",[t._v("Bitmask of "),a("code",[t._v("SOAP_SINGLE_ELEMENT_ARRAYS")]),t._v(", "),a("code",[t._v("SOAP_USE_XSI_ARRAY_TYPE")]),t._v(", "),a("code",[t._v("SOAP_WAIT_ONE_WAY_CALLS")]),t._v(".")])]),t._v(" "),a("tr",[a("td",[t._v("keep_alive")]),t._v(" "),a("td",[t._v("("),a("strong",[t._v("PHP version >= 5.4 only")]),t._v(") "),a("strong",[t._v("Boolean")]),t._v(" value.  Send either "),a("code",[t._v("Connection: Keep-Alive")]),t._v(" header ("),a("code",[t._v("TRUE")]),t._v(") or "),a("code",[t._v("Connection: Close")]),t._v(" header ("),a("code",[t._v("FALSE")]),t._v(").")])]),t._v(" "),a("tr",[a("td",[t._v("ssl_method")]),t._v(" "),a("td",[t._v("("),a("strong",[t._v("PHP version >= 5.5 only")]),t._v(") Which SSL/TLS version to use.  Possible values are "),a("code",[t._v("SOAP_SSL_METHOD_TLS")]),t._v(", "),a("code",[t._v("SOAP_SSL_METHOD_SSLv2")]),t._v(", "),a("code",[t._v("SOAP_SSL_METHOD_SSLv3")]),t._v(" or "),a("code",[t._v("SOAP_SSL_METHOD_SSLv23")]),t._v(".")])])])]),t._v(" "),a("blockquote"),t._v(" "),a("p",[a("strong",[a("a",{attrs:{href:"http://stackoverflow.com/questions/19228213/php-soapclient-soap-request-with-long-integer",target:"_blank",rel:"noopener noreferrer"}},[t._v("Issue with 32 bit PHP"),a("OutboundLink")],1),t._v(":")]),t._v(" In 32 bit PHP, numeric strings greater than 32 bits which are automatically cast to integer by "),a("code",[t._v("xs:long")]),t._v(" will result in it hitting the 32 bit limit, casting it to "),a("code",[t._v("2147483647")]),t._v(". To work around this, cast the strings to float before passing it in to "),a("code",[t._v("__soapCall()")]),t._v(".")])])}),[],!1,null,null,null);s.default=n.exports}}]);