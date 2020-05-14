(window.webpackJsonp=window.webpackJsonp||[]).push([[2440],{2784:function(t,e,s){"use strict";s.r(e);var a=s(19),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"cookies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookies"}},[t._v("#")]),t._v(" Cookies")]),t._v(" "),s("p",[t._v("An HTTP cookie is a small piece of data sent from a website and stored on the user's computer by the user's web browser while the user is browsing.")]),t._v(" "),s("h2",{attrs:{id:"modifying-a-cookie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modifying-a-cookie"}},[t._v("#")]),t._v(" Modifying a Cookie")]),t._v(" "),s("p",[t._v("The value of a cookie can be modified by resetting the cookie")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setcookie")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"user"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"John"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("86400")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// assuming there is a "user" cookie already')]),t._v("\n\n")])])]),s("blockquote"),t._v(" "),s("p",[t._v("Cookies are part of the HTTP header, so "),s("code",[t._v("setcookie()")]),t._v(" must be called before any output is sent to the browser.")]),t._v(" "),s("blockquote"),t._v(" "),s("p",[t._v("When modifying a cookie make sure the "),s("code",[t._v("path")]),t._v(" and "),s("code",[t._v("domain")]),t._v(" parameters of "),s("code",[t._v("setcookie()")]),t._v(" matches the existing cookie or a new cookie will be created instead.")]),t._v(" "),s("blockquote"),t._v(" "),s("p",[t._v("The value portion of the cookie will automatically be urlencoded when you send the cookie, and when it is received, it is automatically decoded and assigned to a variable by the same name as the cookie name")]),t._v(" "),s("h2",{attrs:{id:"setting-a-cookie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setting-a-cookie"}},[t._v("#")]),t._v(" Setting a Cookie")]),t._v(" "),s("p",[t._v("A cookie is set using the "),s("code",[t._v("setcookie()")]),t._v(" function. Since cookies are part of the HTTP header, you must set any cookies before sending any output to the browser.")]),t._v(" "),s("p",[t._v("Example:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setcookie")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"user"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"Tom"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("86400")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// check syntax for function params")]),t._v("\n\n")])])]),s("p",[t._v("Description:")]),t._v(" "),s("ul",[s("li",[t._v("Creates a cookie with name "),s("code",[t._v("user")])]),t._v(" "),s("li",[t._v("(Optional) Value of the cookie is "),s("code",[t._v("Tom")])]),t._v(" "),s("li",[t._v("(Optional) Cookie will expire in 1 day (86400 seconds)")]),t._v(" "),s("li",[t._v("(Optional) Cookie is available throughout the whole website "),s("code",[t._v("/")])]),t._v(" "),s("li",[t._v("(Optional) Cookie is only sent over HTTPS")]),t._v(" "),s("li",[t._v("(Optional) Cookie is not accessible to scripting languages such as JavaScript")])]),t._v(" "),s("blockquote"),t._v(" "),s("p",[t._v("A created or modified cookie can  only be accessed on subsequent requests (where "),s("code",[t._v("path")]),t._v(" and "),s("code",[t._v("domain")]),t._v(" matches) as the superglobal "),s("code",[t._v("$_COOKIE")]),t._v("is not populated with the new data immediately.")]),t._v(" "),s("h2",{attrs:{id:"checking-if-a-cookie-is-set"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#checking-if-a-cookie-is-set"}},[t._v("#")]),t._v(" Checking if a Cookie is Set")]),t._v(" "),s("p",[t._v("Use the "),s("code",[t._v("isset()")]),t._v(" function upon the superglobal "),s("code",[t._v("$_COOKIE")]),t._v(" variable to check if a cookie is set.")]),t._v(" "),s("p",[t._v("Example:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// PHP <7.0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("isset")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_COOKIE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'user'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true, cookie is set")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'User is '")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_COOKIE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'user'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false, cookie is not set")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'User is not logged in'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// PHP 7.0+")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'User is '")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_COOKIE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'user'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'User is not logged in'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\n")])])]),s("h2",{attrs:{id:"removing-a-cookie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#removing-a-cookie"}},[t._v("#")]),t._v(" Removing a Cookie")]),t._v(" "),s("p",[t._v("To remove a cookie, set the expiry timestamp to a time in the past. This triggers the browser's removal mechanism:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setcookie")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'user'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3600")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("blockquote"),t._v(" "),s("p",[t._v("When deleting a cookie make sure the "),s("code",[t._v("path")]),t._v(" and "),s("code",[t._v("domain")]),t._v(" parameters of "),s("code",[t._v("setcookie()")]),t._v(" matches the cookie you're trying to delete or a new cookie, which expires immediately, will be created.")]),t._v(" "),s("p",[t._v("It is also a good idea to unset the "),s("code",[t._v("$_COOKIE")]),t._v(" value in case the current page uses it:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unset")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_COOKIE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'user'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"retrieving-a-cookie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#retrieving-a-cookie"}},[t._v("#")]),t._v(" Retrieving a Cookie")]),t._v(" "),s("p",[s("strong",[s("strong",[t._v("Retrieve and Output a Cookie Named "),s("code",[t._v("user")])])])]),t._v(" "),s("p",[t._v("The value of a cookie can be retrieved using the global variable "),s("code",[t._v("$_COOKIE")]),t._v(". example if we have a cookie named "),s("code",[t._v("user")]),t._v(" we can retrieve it like this")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_COOKIE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'user'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("h4",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),s("ul",[s("li",[s("code",[t._v('bool setcookie( string $name [, string $value = "" [, int $expire = 0 [, string $path = "" [, string $domain = "" [, bool $secure = false [, bool $httponly = false ]]]]]] )')])])]),t._v(" "),s("h4",{attrs:{id:"parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("parameter")]),t._v(" "),s("th",[t._v("detail")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("name")]),t._v(" "),s("td",[t._v("The name of the cookie. This is also the key you can use to retrieve the value from the "),s("code",[t._v("$_COOKIE")]),t._v(" super global. "),s("strong",[t._v("This is the only required parameter")])])]),t._v(" "),s("tr",[s("td",[t._v("value")]),t._v(" "),s("td",[t._v("The value to store in the cookie. This data is accessible to the browser so don't store anything sensitive here.")])]),t._v(" "),s("tr",[s("td",[t._v("expire")]),t._v(" "),s("td",[t._v("A Unix timestamp representing when the cookie should expire. If set to zero the cookie will expire at the end of the session. If set to a number less than the current Unix timestamp the cookie will expire immediately.")])]),t._v(" "),s("tr",[s("td",[t._v("path")]),t._v(" "),s("td",[t._v("The scope of the cookie. If set to "),s("code",[t._v("/")]),t._v(" the cookie will be available within the entire domain. If set to "),s("code",[t._v("/some-path/")]),t._v(" then the cookie will only be available in that path and descendants of that path. Defaults to the current path of the file that the cookie is being set in.")])]),t._v(" "),s("tr",[s("td",[t._v("domain")]),t._v(" "),s("td",[t._v("The domain or subdomain the cookie is available on. If set to the bare domain "),s("code",[t._v("stackoverflow.com")]),t._v(" then the cookie will be available to that domain and all subdomains. If set to a subdomain "),s("code",[t._v("meta.stackoverflow.com")]),t._v(" then the cookie will be available only on that subdomain, and all sub-subdomains.")])]),t._v(" "),s("tr",[s("td",[t._v("secure")]),t._v(" "),s("td",[t._v("When set to "),s("code",[t._v("TRUE")]),t._v(" the cookie will only be set if a secure HTTPS connection exists between the client and the server.")])]),t._v(" "),s("tr",[s("td",[t._v("httponly")]),t._v(" "),s("td",[t._v("Specifies that the cookie should only be made available through the HTTP/S protocol and should not be available to client side scripting languages like JavaScript. Only available in PHP 5.2 or later.")])])])]),t._v(" "),s("h4",{attrs:{id:"remarks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),s("p",[t._v("It is worth noting that mere invoking "),s("code",[t._v("setcookie")]),t._v(" function doesn't just put given data into "),s("code",[t._v("$_COOKIE")]),t._v(" superglobal array.")]),t._v(" "),s("p",[t._v("For example there is no point in doing:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setcookie")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"user"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"Tom"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("86400")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("var_dump")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("isset")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_COOKIE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'user'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// yields false or the previously set value")]),t._v("\n\n")])])]),s("p",[t._v("The value is not there yet, not until next page load. The function "),s("code",[t._v("setcookie")]),t._v(' just says "'),s("strong",[t._v("with next http connection tell the client (browser) to set this cookie")]),t._v("\". Then when the headers are sent to the browser, they contain this cookie header. The browser then checks if the cookie hasn't expired yet, and if not, then in http request it sends the cookie to the server and that's when PHP receives it and puts the contents into "),s("code",[t._v("$_COOKIE")]),t._v(" array.")])])}),[],!1,null,null,null);e.default=n.exports}}]);