(window.webpackJsonp=window.webpackJsonp||[]).push([[855],{1203:function(s,t,a){"use strict";a.r(t);var n=a(19),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"microsoft-exchange-webservices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#microsoft-exchange-webservices"}},[s._v("#")]),s._v(" Microsoft.Exchange.WebServices")]),s._v(" "),a("h2",{attrs:{id:"retrieve-specified-user-s-out-of-office-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#retrieve-specified-user-s-out-of-office-settings"}},[s._v("#")]),s._v(" Retrieve Specified User's Out of Office Settings")]),s._v(" "),a("p",[s._v("First let's create an "),a("code",[s._v("ExchangeManager")]),s._v(" object, where the constructor will connect to the services for us. It also has a "),a("code",[s._v("GetOofSettings")]),s._v(" method, which will return the "),a("code",[s._v("OofSettings")]),s._v(" object for the specified email address :")]),s._v(" "),a("div",{staticClass:"language-cs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Web"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Configuration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("Microsoft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Exchange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("WebServices"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("namespace")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("SetOutOfOffice")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExchangeManager")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExchangeService")]),s._v(" Service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ExchangeManager")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" password "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" WebConfigurationManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ConnectionStrings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Password"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ConnectionString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Connect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"exchangeadmin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Connect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")])]),s._v(" username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")])]),s._v(" password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" service "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[s._v("ExchangeService")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ExchangeVersion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Exchange2010_SP2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Credentials "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[s._v("WebCredentials")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("AutodiscoverUrl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"autodiscoveremail@domain.com"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" RedirectionUrlValidationCallback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            \n            Service "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bool")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("RedirectionUrlValidationCallback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")])]),s._v(" redirectionUrl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" redirectionUrl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Equals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://mail.domain.com/autodiscover/autodiscover.xml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("    \n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s._v("OofSettings")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetOofSettings")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")])]),s._v(" email"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" Service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetUserOofSettings")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("email"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("            \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])])]),a("p",[s._v("We can now call this elsewhere like this:")]),s._v(" "),a("div",{staticClass:"language-cs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" em "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[s._v("ExchangeManager")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" oofSettings "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetOofSettings")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"testemail@domain.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),a("h2",{attrs:{id:"update-specific-user-s-out-of-office-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-specific-user-s-out-of-office-settings"}},[s._v("#")]),s._v(" Update Specific User's Out of Office Settings")]),s._v(" "),a("p",[s._v("Using the class below, we can connect to Exchange and then set a specific user's out of office settings with "),a("code",[s._v("UpdateUserOof")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-cs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Web"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Configuration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("Microsoft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Exchange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("WebServices"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExchangeManager")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExchangeService")]),s._v(" Service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ExchangeManager")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" password "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" WebConfigurationManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ConnectionStrings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Password"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ConnectionString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Connect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"exchangeadmin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Connect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")])]),s._v(" username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")])]),s._v(" password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" service "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[s._v("ExchangeService")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ExchangeVersion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Exchange2010_SP2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Credentials "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[s._v("WebCredentials")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("AutodiscoverUrl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"autodiscoveremail@domain.com"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" RedirectionUrlValidationCallback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        \n        Service "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bool")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("RedirectionUrlValidationCallback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")])]),s._v(" redirectionUrl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" redirectionUrl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Equals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://mail.domain.com/autodiscover/autodiscover.xml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// <summary>")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// Updates the given user's Oof settings with the given details")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// </summary>")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("UpdateUserOof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")])]),s._v(" oofstate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DateTime")]),s._v(" starttime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DateTime")]),s._v(" endtime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")])]),s._v(" externalaudience"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")])]),s._v(" internalmsg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")])]),s._v(" externalmsg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")])]),s._v(" emailaddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" newSettings "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[s._v("OofSettings")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            State "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("OofState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("oofstate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            Duration "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[s._v("TimeWindow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("starttime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" endtime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            ExternalAudience "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("OofExternalAudience"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("externalaudience"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            InternalReply "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" internalmsg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            ExternalReply "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" externalmsg\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        Service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("SetUserOofSettings")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("emailaddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" newSettings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("     \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])])]),a("p",[s._v("Update the user settings with the following:")]),s._v(" "),a("div",{staticClass:"language-cs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" oofState "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" startDate "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[s._v("DateTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("08")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2016")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" endDate "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[s._v("DateTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("08")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2016")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" externalAudience "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" internalMessage "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"I am not in the office!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" externalMessage "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"I am not in the office <strong>and neither are you!</strong>"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" theUser "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"theuser@domain.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" em "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[s._v("ExchangeManager")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("UpdateUserOof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("oofstate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" startDate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" endDate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" externalAudience"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" internalMessage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" externalMessage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" theUser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),a("p",[s._v("Note that you can format the messages using standard "),a("code",[s._v("html")]),s._v(" tags.")])])}),[],!1,null,null,null);t.default=e.exports}}]);