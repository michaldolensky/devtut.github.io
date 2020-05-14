(window.webpackJsonp=window.webpackJsonp||[]).push([[2641],{2987:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"working-with-xml-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#working-with-xml-files"}},[t._v("#")]),t._v(" Working with XML Files")]),t._v(" "),a("h2",{attrs:{id:"accessing-an-xml-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accessing-an-xml-file"}},[t._v("#")]),t._v(" Accessing an XML File")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("<"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xml "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(">\n<people>\n    <person id="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"101"')]),t._v(">\n        <name>Jon Lajoie<"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("name>\n        <age>22<"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("age>\n    <"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("person>\n    <person id="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"102"')]),t._v(">\n        <name>Lord Gaben<"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("name>\n        <age>65<"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("age>\n    <"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("person>\n    <person id="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"103"')]),t._v(">\n        <name>Gordon Freeman<"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("name>\n        <age>29<"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("age>\n    <"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("person>\n<"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("people>\n\n")])])]),a("p",[a("strong",[a("strong",[t._v("Loading an XML File")])])]),t._v(" "),a("p",[t._v("To load an XML file, you can use any of these:")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# First Method")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$xdoc")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("New-Object")]),t._v(" System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Xml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("XmlDocument\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$file")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Resolve-Path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".\\file.xml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$xdoc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Second Method")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[xml]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$xdoc")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get-Content")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".\\file.xml"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Third Method")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$xdoc")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[xml]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get-Content")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".\\file.xml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[a("strong",[a("strong",[t._v("Accessing XML as Objects")])])]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v(" C:\\> "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$xml")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[xml]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get-Content")]),t._v(" file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v(" C:\\> "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$xml")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v(" C:\\> "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$xml")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("people\n\nperson\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Jon Lajoie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Lord Gaben"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Gordon Freeman"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v(" C:\\> "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$xml")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("people"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("person\n\nid                                      name                                    age\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("                                      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("                                    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\n101                                     Jon Lajoie                              22\n102                                     Lord Gaben                              65\n103                                     Gordon Freeman                          29\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v(" C:\\> "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$xml")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("people"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name\nJon Lajoie\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v(" C:\\> "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$xml")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("people"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age\n65\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v(" C:\\> "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$xml")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("people"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id\n103\n\n")])])]),a("p",[a("strong",[a("strong",[t._v("Accessing XML with XPath")])])]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v(" C:\\> "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$xml")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[xml]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get-Content")]),t._v(" file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v(" C:\\> "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$xml")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v(" C:\\> "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$xml")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SelectNodes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"//people"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nperson\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Jon Lajoie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Lord Gaben"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Gordon Freeman"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v(" C:\\> "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$xml")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SelectNodes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"//people//person"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nid                                      name                                    age\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("                                      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("                                    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\n101                                     Jon Lajoie                              22\n102                                     Lord Gaben                              65\n103                                     Gordon Freeman                          29\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v(" C:\\> "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$xml")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SelectSingleNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"people//person[1]//name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nJon Lajoie\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v(" C:\\> "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$xml")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SelectSingleNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"people//person[2]//age"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n65\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v(" C:\\> "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$xml")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SelectSingleNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"people//person[3]//@id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n103\n\n")])])]),a("p",[a("strong",[a("strong",[t._v("Accessing XML containing namespaces with XPath")])])]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v(" C:\\> "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[xml]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$xml")]),t._v(" = @"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\n<ns:people xmlns:ns="')]),t._v("http:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("schemas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xmlsoap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("soap"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("envelope"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('">\n    <ns:person id="')]),t._v("101"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('">\n        <ns:name>Jon Lajoie</ns:name>\n    </ns:person>\n    <ns:person id="')]),t._v("102"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('">\n        <ns:name>Lord Gaben</ns:name>\n    </ns:person>\n    <ns:person id="')]),t._v("103"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('">\n        <ns:name>Gordon Freeman</ns:name>\n    </ns:person>\n</ns:people>\n"')]),t._v("@\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v(" C:\\> "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ns")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("new-object")]),t._v(" Xml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("XmlNamespaceManager "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$xml")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NameTable\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v(" C:\\> "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ns")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AddNamespace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ns"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$xml")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DocumentElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NamespaceURI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v(" C:\\> "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$xml")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SelectNodes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"//ns:people/ns:person"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ns")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nid                                      name\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("                                      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\n101                                     Jon Lajoie\n102                                     Lord Gaben\n103                                     Gordon Freeman\n\n")])])]),a("h2",{attrs:{id:"creating-an-xml-document-using-xmlwriter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-xml-document-using-xmlwriter"}},[t._v("#")]),t._v(" Creating an XML Document using XmlWriter()")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Set The Formatting")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$xmlsettings")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("New-Object")]),t._v(" System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Xml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("XmlWriterSettings\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$xmlsettings")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Indent = "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("$true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$xmlsettings")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IndentChars = "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"    "')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Set the File Name Create The Document")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$XmlWriter")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[System.XML.XmlWriter]")]),t._v("::Create"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C:\\YourXML.xml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$xmlsettings")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Write the XML Decleration and set the XSL")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$xmlWriter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WriteStartDocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$xmlWriter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WriteProcessingInstruction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xml-stylesheet"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"type='text/xsl' href='style.xsl'\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Start the Root Element")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$xmlWriter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WriteStartElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Root"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  \n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$xmlWriter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WriteStartElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Object"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# <-- Start <Object>")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$xmlWriter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WriteElementString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Property1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Value 1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$xmlWriter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WriteElementString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Property2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Value 2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$xmlWriter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WriteStartElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SubObject"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# <-- Start <SubObject> ")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$xmlWriter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WriteElementString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Property3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Value 3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$xmlWriter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WriteEndElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# <-- End <SubObject>")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$xmlWriter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WriteEndElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# <-- End <Object>")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$xmlWriter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WriteEndElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# <-- End <Root> ")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# End, Finalize and close the XML Document")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$xmlWriter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WriteEndDocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$xmlWriter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Flush"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$xmlWriter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Close"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[a("strong",[t._v("Output XML File")])]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("<?xml version="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0"')]),t._v(" encoding="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"utf-8"')]),t._v("?>\n<?xml"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("stylesheet "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),t._v("="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/xsl'")]),t._v(" href="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'style.xsl'")]),t._v("?>\n<Root>\n    <Object>\n        <Property1>Value 1<"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Property1>\n        <Property2>Value 2<"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Property2>\n        <SubObject>\n            <Property3>Value 3<"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Property3>\n        <"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("SubObject>\n    <"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Object>\n<"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Root>\n\n")])])]),a("h2",{attrs:{id:"adding-snippits-of-xml-to-current-xmldocument"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-snippits-of-xml-to-current-xmldocument"}},[t._v("#")]),t._v(" Adding snippits of XML to current XMLDocument")]),t._v(" "),a("h3",{attrs:{id:"sample-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sample-data"}},[t._v("#")]),t._v(" Sample Data")]),t._v(" "),a("h3",{attrs:{id:"xml-document"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xml-document"}},[t._v("#")]),t._v(" XML Document")]),t._v(" "),a("p",[t._v("First, let's define a sample XML document named \""),a("strong",[t._v("books.xml")]),t._v('" in our current directory:')]),t._v(" "),a("h3",{attrs:{id:"new-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-data"}},[t._v("#")]),t._v(" New Data")]),t._v(" "),a("p",[t._v("What we want to do is add a few new books to this document, let's say "),a("strong",[t._v("Patriot Games")]),t._v(" by Tom Clancy (yes, I'm a fan of Clancy's works ^__^) and a Sci-Fi favourite: "),a("strong",[t._v("The Hitchhiker's Guide to the Galaxy")]),t._v(" by Douglas Adams mainly because Zaphod Beeblebrox is just fun to read.")]),t._v(" "),a("p",[t._v("Somehow we've acquired the data for the new books and saved them as a list of PSCustomObjects:")]),t._v(" "),a("h3",{attrs:{id:"templates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#templates"}},[t._v("#")]),t._v(" Templates")]),t._v(" "),a("p",[t._v("Now we need to define a few skeleton XML structures for our new data to go into.  Basically, you want to create a skeleton/template for each list of data.  In our example, that means we need a template for the book, characters, and publishers.  We can also use this to define a few default values, such as the value for the "),a("code",[t._v("film")]),t._v(" tag.")]),t._v(" "),a("p",[t._v("We're done with set-up.")]),t._v(" "),a("h3",{attrs:{id:"adding-the-new-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-the-new-data"}},[t._v("#")]),t._v(" Adding the new data")]),t._v(" "),a("p",[t._v("Now that we're all set-up with our sample data, let's add the custom objects to the XML Document Object.")]),t._v(" "),a("p",[t._v("We can now write our XML to disk, or screen, or web, or wherever!")]),t._v(" "),a("h3",{attrs:{id:"profit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#profit"}},[t._v("#")]),t._v(" Profit")]),t._v(" "),a("p",[t._v("While this may not be the procedure for everyone I found it to help avoid a whole bunch of "),a("code",[t._v('[void]$xml.SelectSingleNode("/complicated/xpath/goes[here]").AppendChild($xml.CreateElement("newElementName")')]),t._v(" followed by "),a("code",[t._v('$xml.SelectSingleNode("/complicated/xpath/goes/here/newElementName") = $textValue')])]),t._v(" "),a("p",[t._v("I think the method detailed in the example is cleaner and easier to parse for normal humans.")]),t._v(" "),a("h3",{attrs:{id:"improvements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#improvements"}},[t._v("#")]),t._v(" Improvements")]),t._v(" "),a("p",[t._v("It may be possible to change the template to include elements with children instead of breaking out each section as a separate template.  You just have to take care to clone the previous element when you loop through the list.")])])}),[],!1,null,null,null);s.default=e.exports}}]);