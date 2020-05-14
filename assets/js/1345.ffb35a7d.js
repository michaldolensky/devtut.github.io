(window.webpackJsonp=window.webpackJsonp||[]).push([[1345],{1691:function(t,n,e){"use strict";e.r(n);var i=e(19),r=Object(i.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"convert-html-to-nsattributed-string-and-vice-verse"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#convert-html-to-nsattributed-string-and-vice-verse"}},[t._v("#")]),t._v(" Convert HTML to NSAttributed string and vice verse")]),t._v(" "),e("h2",{attrs:{id:"objective-c-code-to-convert-html-string-to-nsattributedstring-and-vice-versa"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#objective-c-code-to-convert-html-string-to-nsattributedstring-and-vice-versa"}},[t._v("#")]),t._v(" Objective C code to convert HTML string to NSAttributedString and Vice Versa")]),t._v(" "),e("p",[e("strong",[t._v("HTML to NSAttributedString conversion Code :-")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('\n//HTML String \n NSString *htmlString=[[NSString alloc]initWithFormat:@"<!DOCTYPE html><html><body><h1>My First Heading</h1><p>My first paragraph.</p></body></html>"];\n//Converting HTML string with UTF-8 encoding to NSAttributedString\n NSAttributedString *attributedString = [[NSAttributedString alloc]\n                                        initWithData: [htmlString dataUsingEncoding:NSUnicodeStringEncoding]\n                                        options: @{ NSDocumentTypeDocumentAttribute: NSHTMLTextDocumentType }\n                                        documentAttributes: nil\n                                        error: nil ];\n\n')])])]),e("p",[e("strong",[t._v("NSAttributedString to HTML Conversion :-")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\n//Dictionary to hold all the attributes of NSAttributed String\n NSDictionary *documentAttributes = @{NSDocumentTypeDocumentAttribute: NSHTMLTextDocumentType};\n //Saving the NSAttributedString with all its attributes as a NSData Entity\n NSData *htmlData = [attributedString dataFromRange:NSMakeRange(0, attributedString.length) documentAttributes:documentAttributes error:NULL];\n //Convert the NSData into HTML String with UTF-8 Encoding\n NSString *htmlString = [[NSString alloc] initWithData:htmlData encoding:NSUTF8StringEncoding];\n\n")])])])])}),[],!1,null,null,null);n.default=r.exports}}]);