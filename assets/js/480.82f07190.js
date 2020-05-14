(window.webpackJsonp=window.webpackJsonp||[]).push([[480],{827:function(s,t,a){"use strict";a.r(t);var e=a(19),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"cgi-scripts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cgi-scripts"}},[s._v("#")]),s._v(" CGI Scripts")]),s._v(" "),a("h2",{attrs:{id:"request-method-get"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-method-get"}},[s._v("#")]),s._v(" Request Method: GET")]),s._v(" "),a("p",[s._v("It is quite easy to call a CGI-Script via "),a("code",[s._v("GET")]),s._v("."),a("br"),s._v("\nFirst you will need the "),a("code",[s._v("encoded url")]),s._v(" of the script.")]),s._v(" "),a("p",[s._v("Then you add a question mark "),a("code",[s._v("?")]),s._v(" followed by variables.\n")]),a("li",[s._v("Every variable should have two sections seperated by "),a("strong",[s._v("=")]),s._v("."),a("br"),s._v("\nFirst section should be always a unique name for each variable,"),a("br"),s._v("\nwhile the second part has values in it only")]),a("p"),s._v(" "),a("ul",[a("li",[s._v("Variables are seperated by "),a("strong",[s._v("&")])]),s._v(" "),a("li",[s._v("Total length of the string should not rise above "),a("strong",[s._v("255")]),s._v(" characters\n")]),a("li",[s._v("Names and values needs to be html-encoded (replace: "),a("strong",[s._v("</ , / ? : @ & = + $")]),s._v(" )"),a("br"),s._v(" "),a("strong",[s._v("Hint:")]),a("br"),s._v("\nWhen using "),a("strong",[s._v("html-forms")]),s._v(" the request method can be generated by it self."),a("br"),s._v("\nWith "),a("strong",[s._v("Ajax")]),s._v(" you can encode all via "),a("strong",[s._v("encodeURI")]),s._v(" and "),a("strong",[s._v("encodeURIComponent")])]),s._v(" "),a("strong",[s._v("Example:")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("http://www.example.com/cgi-bin/script.sh?var1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Hello%20World"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("var2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("This%20is%20a%20Test."),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n\n")])])]),a("p",[s._v("The server should communicate via "),a("strong",[s._v("Cross-Origin Resource Sharing")]),s._v(" (CORS) only, to make request more secure. In this showcase we use "),a("strong",[s._v("CORS")]),s._v(" to determine the "),a("code",[s._v("Data-Type")]),s._v(" we want to use.")]),s._v(" "),a("p",[s._v("There are many "),a("code",[s._v("Data-Types")]),s._v(" we can choose from, the most common are...")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("text/html")])]),s._v(" "),a("li",[a("strong",[s._v("text/plain")])]),s._v(" "),a("li",[a("strong",[s._v("application/json")]),s._v("\nWhen sending a request, the server will also create many environment variables. For now the most important environment variables are "),a("code",[s._v("$REQUEST_METHOD")]),s._v(" and "),a("code",[s._v("$QUERY_STRING")]),s._v(".")])]),s._v(" "),a("p",[s._v("The "),a("strong",[s._v("Request Method")]),s._v(" has to be "),a("code",[s._v("GET")]),s._v(" nothing else!"),a("br"),s._v("\nThe "),a("strong",[s._v("Query String")]),s._v(" includes all the "),a("code",[s._v("html-endoded data")]),s._v(".")]),s._v(" "),a("p",[a("strong",[s._v("The Script")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# CORS is the way to communicate, so lets response to the server first")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Content-type: text/html"')]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# set the data-type we want to use")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# we dont need more rules, the empty line initiate this.")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# CORS are set in stone and any communication from now on will be like reading a html-document.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Therefor we need to create any stdout in html format!")]),s._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# create html scructure and send it to stdout")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<!DOCTYPE html>"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<html><head>"')]),s._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The content will be created depending on the Request Method ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$REQUEST_METHOD")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"GET"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n   \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Note that the environment variables $REQUEST_METHOD and $QUERY_STRING can be processed by the shell directly. ")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# One must filter the input to avoid cross site scripting.")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Var1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$QUERY_STRING")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/^.*var1=\\([^&]*\\).*$/"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\1"}},[s._v("\\1")]),s._v("/p'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# read value of "var1"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Var1_Dec")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$(")]),s._v("echo "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$Var1")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/+/ /g;s/%\\(..\\)/"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\1"}},[s._v("\\1")]),s._v("/g;'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# html decode")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Var2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$QUERY_STRING")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/^.*var2=\\([^&]*\\).*$/"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\1"}},[s._v("\\1")]),s._v("/p'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Var2_Dec")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$(")]),s._v("echo "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$Var2")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/+/ /g;s/%\\(..\\)/"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\1"}},[s._v("\\1")]),s._v("/g;'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# create content for stdout")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<title>Bash-CGI Example 1</title>"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"</head><body>"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<h1>Bash-CGI Example 1</h1>"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<p>QUERY_STRING: '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${QUERY_STRING}")]),s._v("<br>var1="),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${Var1_Dec}")]),s._v("<br>var2="),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${Var2_Dec}")]),s._v('</p>"')]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# print the values to stdout")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<title>456 Wrong Request Method</title>"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"</head><body>"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<h1>456</h1>"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<p>Requesting data went wrong.<br>The Request method has to be '),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("GET"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(' only!</p>"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<hr>"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SERVER_SIGNATURE")]),s._v('"')]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# an other environment variable")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"</body></html>"')]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# close html")]),s._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n")])])]),a("p",[s._v("The "),a("strong",[s._v("html-document")]),s._v(" will look like this ...")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("html"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("head"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("title"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Bash-CGI Example "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v("<")]),s._v("/title"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/head"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("body"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("h"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v("Bash-CGI Example "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v("<")]),s._v("/h"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("p"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("QUERY_STRING: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("var1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Hello%20World"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("amp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("var2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("This%20is%20a%20Test."),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("amp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("br"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("var1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Hello World"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("br"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("var2"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("This is a Test."),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/p"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("hr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("address"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Apache/2.4.10 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Debian"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Server at example.com Port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v("<")]),s._v("/address"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/body"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/html"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n")])])]),a("p",[s._v("The "),a("strong",[s._v("output")]),s._v(" of the variables will look like this ...")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("var1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Hello%20World"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("var2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("This%20is%20a%20Test."),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\nHello World"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\nThis is a Test.\nApache/2.4.10 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Debian"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Server at example.com Port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n\n")])])]),a("p",[a("strong",[s._v("Negative side effects...")])]),s._v(" "),a("ul",[a("li",[s._v("All the encoding and decoding dont look nice, but is needed")]),s._v(" "),a("li",[s._v("The Request will be public readable and leave a tray behind")]),s._v(" "),a("li",[s._v("The size of a request is limited")]),s._v(" "),a("li",[s._v("Needs protection against Cross-Side-Scripting (XSS)")])]),s._v(" "),a("h2",{attrs:{id:"request-method-post-w-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-method-post-w-json"}},[s._v("#")]),s._v(" Request Method: POST /w JSON")]),s._v(" "),a("p",[s._v("Using Request Method "),a("code",[s._v("POST")]),s._v(" in combination with "),a("code",[s._v("SSL")]),s._v(" makes datatransfer more secure.")]),s._v(" "),a("p",[s._v("In addition...")]),s._v(" "),a("ul",[a("li",[s._v("Most of the encoding and decoding is not needed any more\n")]),a("li",[s._v("The URL will be visible to any one and needs to be url encoded."),a("br"),s._v("\nThe data will be send separately and therefor should be secured via SSL")]),s._v(" "),a("li",[s._v("The size of the data is almost unlitmited")]),s._v(" "),a("li",[s._v("Still needs protection against Cross-Side-Scripting (XSS)")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v("/dev/null    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# We dont want any error messages be printed to stdout")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("trap")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"response_with_html && exit 0"')]),s._v(" ERR    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# response with an html message when an error occurred and close the script")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("response_with_html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("    \n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Content-type: text/html"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<!DOCTYPE html>"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<html><head>"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<title>456</title>"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"</head><body>"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<h1>456</h1>"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<p>Attempt to communicate with the server went wrong.</p>"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<hr>"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SERVER_SIGNATURE")]),s._v('"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"</body></html>"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("response_with_json")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Content-type: application/json"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{'),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("message"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("Hello World!"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v('}"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$REQUEST_METHOD")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"POST"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n   \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The environment variabe $CONTENT_TYPE describes the data-type received")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CONTENT_TYPE")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v("\n    application/json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The environment variabe $CONTENT_LENGTH describes the size of the data")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" -n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CONTENT_LENGTH")]),s._v('"')]),s._v(" QUERY_STRING_POST        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# read datastream ")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The following lines will prevent XSS and check for valide JSON-Data.")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# But these Symbols need to be encoded somehow before sending to this script")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("QUERY_STRING_POST")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$QUERY_STRING_POST")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s/\'//g"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/\\$//g;s/`//g;s/\\*//g;s/"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("//g'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# removes some symbols (like \\ * ` $ '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" to prevent XSS with Bash and SQL.\n        "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("QUERY_STRING_POST")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$QUERY_STRING_POST")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -e :a -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/<[^>]*>//g;/</N;//ba'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# removes most html declarations to prevent XSS within documents")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JSON")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$QUERY_STRING_POST")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" jq "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# json encode - This is a pretty save way to check for valide json code")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    *"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        response_with_html\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("esac")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n    response_with_html\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Some Commands ...")]),s._v("\n\nresponse_with_json\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n")])])]),a("p",[s._v("You will get "),a("code",[s._v('{"message":"Hello World!"}')]),s._v(" as an answer when sending "),a("strong",[s._v("JSON-Data")]),s._v(" via "),a("code",[s._v("POST")]),s._v(" to this Script. Every thing else will receive the html document.")]),s._v(" "),a("p",[s._v("Important is also the varialbe "),a("code",[s._v("$JSON")]),s._v(".\nThis variable is free of XSS, but still could have wrong values in it and needs to be verify first. Please keep that in mind.")]),s._v(" "),a("p",[s._v("This code works similar without JSON."),a("br"),s._v("\nYou could get any data this way."),a("br"),s._v("\nYou just need to change the "),a("code",[s._v("Content-Type")]),s._v(" for your needs.")]),s._v(" "),a("p",[a("strong",[s._v("Example:")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$REQUEST_METHOD")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"POST"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CONTENT_TYPE")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v("\n    application/x-www-form-urlencoded"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" -n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CONTENT_LENGTH")]),s._v('"')]),s._v(" QUERY_STRING_POST\n    text/plain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" -n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CONTENT_LENGTH")]),s._v('"')]),s._v(" QUERY_STRING_POST\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("esac")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n")])])]),a("p",[s._v("Last but not least, dont forget to response to all requests, otherwise third party programms wont know if they succeeded")])])}),[],!1,null,null,null);t.default=n.exports}}]);