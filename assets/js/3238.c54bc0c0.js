(window.webpackJsonp=window.webpackJsonp||[]).push([[3238],{3583:function(t,s,a){"use strict";a.r(s);var r=a(19),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"understanding-the-dispatcher-servlet-xml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#understanding-the-dispatcher-servlet-xml"}},[t._v("#")]),t._v(" Understanding the dispatcher-servlet.xml")]),t._v(" "),a("p",[t._v("In Spring Web MVC, DispatcherServlet class works as the front controller. It is responsible for managing the flow of the spring MVC application.")]),t._v(" "),a("p",[t._v("DispatcherServlet is also like normal servlet need to be configured in web.xml")]),t._v(" "),a("h2",{attrs:{id:"dispatcher-servlet-xml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dispatcher-servlet-xml"}},[t._v("#")]),t._v(" dispatcher-servlet.xml")]),t._v(" "),a("p",[t._v("This is the important configuration file where we need to specify the ViewResolver and View components.")]),t._v(" "),a("p",[t._v("The context:component-scan element defines the base-package where DispatcherServlet will search the controller class.")]),t._v(" "),a("p",[t._v("Here, the InternalResourceViewResolver class is used for the ViewResolver.")]),t._v(" "),a("p",[t._v("The prefix+string returned by controller+suffix page will be invoked for the view component.")]),t._v(" "),a("p",[t._v("This xml file should be located inside the WEB-INF directory.")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("beans xmlns"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://www.springframework.org/schema/beans"')]),t._v("\n    xmlns"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("context"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://www.springframework.org/schema/context"')]),t._v("\n    xmlns"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("xsi"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://www.w3.org/2001/XMLSchema-instance"')]),t._v("\n    xsi"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("schemaLocation"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v('"\nhttp'),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("schema"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("beans\nhttp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("schema"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("beans"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("spring"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("beans"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xsd\nhttp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("schema"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("context\nhttp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("schema"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("context"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("spring"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("context"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v('xsd"'),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n \n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("context"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("component"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("scan base"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.srinu.controller.Employee"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n \n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("bean\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.springframework.web.servlet.view.InternalResourceViewResolver"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("property name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"prefix"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("WEB"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("INF"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("views"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("property"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("property name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"suffix"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jsp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("property"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("bean"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("beans"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"dispatcher-servlet-configuration-in-web-xml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dispatcher-servlet-configuration-in-web-xml"}},[t._v("#")]),t._v(" dispatcher servlet configuration in web.xml")]),t._v(" "),a("p",[t._v("In this XML file, we are specifying the servlet class DispatcherServlet that acts as the front controller in Spring Web MVC. All the incoming request for the HTML file will be forwarded to the DispatcherServlet.")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("xml version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0"')]),t._v(" encoding"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UTF-8"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("web"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("app version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.5"')]),t._v("   \n    xmlns"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://java.sun.com/xml/ns/javaee"')]),t._v("   \n    xmlns"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("xsi"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://www.w3.org/2001/XMLSchema-instance"')]),t._v("   \n    xsi"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("schemaLocation"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v('"http'),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sun"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("xml"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ns"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("javaee   \n    http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sun"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("xml"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ns"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("javaee"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("web"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("app_2_5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v('xsd"'),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("servlet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("servlet"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("spring"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("servlet"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("servlet"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("web"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("servlet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DispatcherServlet")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("servlet"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("load"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("on"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("startup"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("load"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("on"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("startup"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("servlet"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("servlet"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("mapping"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("servlet"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("spring"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("servlet"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("pattern"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("pattern"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("servlet"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("mapping"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("web"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);