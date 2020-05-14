(window.webpackJsonp=window.webpackJsonp||[]).push([[1267],{1613:function(t,a,e){"use strict";e.r(a);var s=e(19),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"iframes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#iframes"}},[t._v("#")]),t._v(" IFrames")]),t._v(" "),e("h2",{attrs:{id:"sandboxing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sandboxing"}},[t._v("#")]),t._v(" Sandboxing")]),t._v(" "),e("p",[t._v("The following embeds an untrusted web page with all restrictions enabled")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("iframe")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("sandbox")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://example.com/"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("iframe")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])]),e("p",[t._v("To allow the page to run scripts and submit forms, add "),e("code",[t._v("allow-scripts")]),t._v(" and "),e("code",[t._v("allow-forms")]),t._v(" to the "),e("code",[t._v("sandbox attribute")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("iframe")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("sandbox")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("allow-scripts allow-forms"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://example.com/"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("iframe")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])]),e("p",[t._v("If there is untrusted content (such as user comments) on the same domain as the parent web page, an iframe can be used to disable scripts while still allowing the parent document to interact with it's content using JavaScript.")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("iframe")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("sandbox")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("allow-same-origin allow-top-navigation"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://example.com/untrusted/comments/page2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])]),e("p",[t._v("The parent document can add event listeners and resize the IFrame to fit its contents. This, along with "),e("code",[t._v("allow-top-navigation")]),t._v(", can make the sandboxed iframe appear to be part of parent document.")]),t._v(" "),e("p",[t._v("This sandbox is not a replacement for sanitizing input but can be used as part of a "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Defense_in_depth_%28computing%29",target:"_blank",rel:"noopener noreferrer"}},[t._v("defense in depth"),e("OutboundLink")],1),t._v(" strategy.")]),t._v(" "),e("p",[t._v("Also be aware that this sandbox can be subverted by an attacker convincing a user to visit the iframe's source directly. The "),e("a",{attrs:{href:"https://w3c.github.io/webappsec-csp/#directive-sandbox",target:"_blank",rel:"noopener noreferrer"}},[t._v("Content Security Policy"),e("OutboundLink")],1),t._v(" HTTP header can be used to mitigate this attack.")]),t._v(" "),e("h2",{attrs:{id:"setting-the-frame-size"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setting-the-frame-size"}},[t._v("#")]),t._v(" Setting the Frame Size")]),t._v(" "),e("p",[t._v("The IFrame can be resized using the "),e("code",[t._v("width")]),t._v(" and "),e("code",[t._v("height")]),t._v(" attributes, where the values are represented in pixels (HTML 4.01 allowed percentage values, but HTML 5 only allows values in CSS pixels).")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("iframe")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("base.html"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("width")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("800"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("height")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("600"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("iframe")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])]),e("h2",{attrs:{id:"basics-of-an-inline-frame"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#basics-of-an-inline-frame"}},[t._v("#")]),t._v(" Basics of an Inline Frame")]),t._v(" "),e("p",[t._v('The term "IFrame" means Inline Frame. It can be used to include another page in your page. This will yield a small frame which shows the exact contents of the '),e("code",[t._v("base.html")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("iframe")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("base.html"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("iframe")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])]),e("h2",{attrs:{id:"using-the-srcdoc-attribute"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-the-srcdoc-attribute"}},[t._v("#")]),t._v(' Using the "srcdoc" Attribute')]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("srcdoc")]),t._v(" attribute can be used (instead of the "),e("code",[t._v("src")]),t._v(' attribute) to specify the exact contents of the iframe as a whole HTML document. This will yield an IFrame with the text "IFrames are cool!"')]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("iframe")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("srcdoc")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("<p>IFrames are cool!</p>"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("iframe")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])]),e("p",[t._v("If the "),e("code",[t._v("srcdoc")]),t._v(" attribute isn't supported by the browser, the IFrame will instead fall back to using the "),e("code",[t._v("src")]),t._v(" attribute, but if both the "),e("code",[t._v("src")]),t._v(" and "),e("code",[t._v("srcdoc")]),t._v(" attributes are present and supported by the browser, "),e("code",[t._v("srcdoc")]),t._v(" takes precedence.")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("iframe")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("srcdoc")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("<p>Iframes are cool!</p>"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("base.html"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("iframe")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])]),e("p",[t._v("In the above example, if the browser does not support the "),e("code",[t._v("srcdoc")]),t._v(" attribute, it will instead display the contents of the "),e("code",[t._v("base.html")]),t._v(" page.")]),t._v(" "),e("h2",{attrs:{id:"using-anchors-with-iframes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-anchors-with-iframes"}},[t._v("#")]),t._v(" Using Anchors with IFrames")]),t._v(" "),e("p",[t._v("Normally a change of webpage within an Iframe is initiated from with the Iframe, for example, clicking a link inside the Ifame.  However, it is possible to change an IFrame's content from outside the IFrame. You can use an anchor tag whose "),e("code",[t._v("href")]),t._v(" attribute is set to the desired URL and whose "),e("code",[t._v("target")]),t._v(" attribute is set to the iframe's "),e("code",[t._v("name")]),t._v(" attribute.")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("iframe")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("webpage.html"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("myIframe"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("iframe")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("different_webpage.html"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("target")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("myIframe"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Change the Iframe content to different_webpage.html"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])]),e("h4",{attrs:{id:"parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Attribute")]),t._v(" "),e("th",[t._v("Details")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("name")])]),t._v(" "),e("td",[t._v("Sets the element's name, to be used with an "),e("code",[t._v("a")]),t._v(" tag to change the iframe's "),e("code",[t._v("src")]),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("width")])]),t._v(" "),e("td",[t._v("Sets the element's width in pixels.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("height")])]),t._v(" "),e("td",[t._v("Sets the element's height in pixels.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("src")])]),t._v(" "),e("td",[t._v("Specifies the page that will be displayed in the frame.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("srcdoc")])]),t._v(" "),e("td",[t._v("Specifies the content that will be displayed in the frame, assuming the browser supports it. The content must be valid HTML.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("sandbox")])]),t._v(" "),e("td",[t._v("When set, the contents of the iframe is treated as being from a unique origin and features including scripts, plugins, forms and popups will be disabled. Restrictions can be selectively relaxed by adding a space separated list of values. See the table in Remarks for possible values.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("allowfullscreen")])]),t._v(" "),e("td",[t._v("Whether to allow the iframe’s contents to use "),e("code",[t._v("requestFullscreen()")])])])])]),t._v(" "),e("h4",{attrs:{id:"remarks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),e("p",[t._v("An iframe is used to embed another document in the current HTML document.")]),t._v(" "),e("p",[t._v("You CAN use iframes for displaying:")]),t._v(" "),e("ul",[e("li",[t._v("other HTML pages on the same domain;")]),t._v(" "),e("li",[t._v("other HTML pages on another domain (see below - Same-origin policy);")]),t._v(" "),e("li",[t._v("PDF documents (though IE might have some problems, "),e("a",{attrs:{href:"http://stackoverflow.com/questions/12974115/how-to-open-a-pdf-file-in-an-iframe",target:"_blank",rel:"noopener noreferrer"}},[t._v("This SO question"),e("OutboundLink")],1),t._v(" might help);")])]),t._v(" "),e("p",[t._v("You SHOULD use an iframe as a last resort, as it has problems with bookmarking and navigation, and there are always better options other than an iframe. "),e("a",{attrs:{href:"http://stackoverflow.com/questions/362730/are-iframes-considered-bad-practice",target:"_blank",rel:"noopener noreferrer"}},[t._v("This SO question"),e("OutboundLink")],1),t._v(" should help you understand more about the ups and downs of iframes.")]),t._v(" "),e("h3",{attrs:{id:"same-origin-policy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#same-origin-policy"}},[t._v("#")]),t._v(" Same-origin policy")]),t._v(" "),e("p",[t._v("Some sites cannot be displayed using an iframe, because they enforce a policy called "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Same-origin_policy",target:"_blank",rel:"noopener noreferrer"}},[t._v("Same-origin policy"),e("OutboundLink")],1),t._v(". This means that the site that the iframe lies on must be on the same domain as the one to be displayed.")]),t._v(" "),e("p",[t._v("This policy also applies to manipulating content that lives inside of an iFrame. If the iFrame is accessing content from a different domain, you will not be able to access or manipulate the content inside of an iFrame.")]),t._v(" "),e("p",[e("strong",[t._v("The iframe element on "),e("a",{attrs:{href:"https://www.w3.org/TR/html5/embedded-content-0.html#the-iframe-element",target:"_blank",rel:"noopener noreferrer"}},[t._v("W3C"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"sandbox-attribute"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sandbox-attribute"}},[t._v("#")]),t._v(" "),e("code",[t._v("sandbox")]),t._v(" attribute")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("sandbox")]),t._v(" attribute, when set, adds extra restrictions to the iframe. A space separated list of tokens can be used to relax these restrictions.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Value")]),t._v(" "),e("th",[t._v("Details")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("allow-forms")])]),t._v(" "),e("td",[t._v("Allows forms to be submitted.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("allow-pointer-lock")])]),t._v(" "),e("td",[t._v("Enables the JavaScript pointer API.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("allow-popups")])]),t._v(" "),e("td",[t._v("Popups can be created using "),e("code",[t._v("window.open")]),t._v(" or "),e("code",[t._v('<a target="_blank"')])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("allow-same-origin")])]),t._v(" "),e("td",[t._v("The iframe document uses its real origin instead of being given a unique one. If used with "),e("code",[t._v("allow-scripts")]),t._v(" the iframe document can remove all sandboxing if it's from the same origin as the parent document.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("allow-scripts")])]),t._v(" "),e("td",[t._v("Enables scripts. The iframe document and parent document may be able to communicate with each other using the "),e("code",[t._v("postMessage()")]),t._v(" API.  If used with "),e("code",[t._v("allow-same-origin")]),t._v(" the iframe document can remove all sandboxing if it's from the same origin as the parent document.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("allow-top-navigation")])]),t._v(" "),e("td",[t._v("Allows the iframe's content to change the location of the top level document.")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);