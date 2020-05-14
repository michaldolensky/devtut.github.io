(window.webpackJsonp=window.webpackJsonp||[]).push([[3087],{3433:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"keyword-arguments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword-arguments"}},[t._v("#")]),t._v(" Keyword Arguments")]),t._v(" "),a("h2",{attrs:{id:"using-arbitrary-keyword-arguments-with-splat-operator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-arbitrary-keyword-arguments-with-splat-operator"}},[t._v("#")]),t._v(" Using arbitrary keyword arguments with splat operator")]),t._v(" "),a("p",[t._v("You can define a method to accept an arbitrary number of keyword arguments using the "),a("strong",[t._v("double splat")]),t._v(" ("),a("code",[t._v("**")]),t._v(") operator:")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("say")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  puts args\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\nsay foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# {:foo=>"1", :bar=>"2"}')]),t._v("\n\n")])])]),a("p",[t._v("The arguments are captured in a "),a("code",[t._v("Hash")]),t._v(". You can manipulate the "),a("code",[t._v("Hash")]),t._v(", for example to extract the desired arguments.")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("say")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  puts args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":message")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Message not found"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\nsay foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Hello World")]),t._v("\n\nsay foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Message not found")]),t._v("\n\n")])])]),a("p",[t._v("Using a the splat operator with keyword arguments will prevent keyword argument validation, the method will never raise an "),a("code",[t._v("ArgumentError")]),t._v(" in case of unknown keyword.")]),t._v(" "),a("p",[t._v("As for the standard splat operator, you can re-convert a "),a("code",[t._v("Hash")]),t._v(" into keyword arguments for a method:")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("say")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" before"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<p>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" after"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"</p>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  puts "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("#{")]),t._v("before"),a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("#{")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("#{")]),t._v("after"),a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("}")])]),t._v('"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\nargs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" after"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"</p><hr>"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nsay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# <p>Hello World</p><hr>")]),t._v("\n\nargs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nsay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# => ArgumentError: unknown keyword: foo")]),t._v("\n\n")])])]),a("p",[t._v("This is generally used when you need to manipulate incoming arguments, and pass them to an underlying method:")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("inner")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  puts foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bar\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("outer")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("something"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" baz"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  puts something\n  params "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Default foo"')]),t._v("\n  params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Default bar"')]),t._v("\n  inner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\nouter "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello:"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Custom foo"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Hello:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Custom foo")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Default bar")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"using-keyword-arguments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-keyword-arguments"}},[t._v("#")]),t._v(" Using keyword arguments")]),t._v(" "),a("p",[t._v("You define a keyword argument in a method by specifying the name in the method definition:")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("say")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  puts message\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\nsay\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# => "Hello World"')]),t._v("\n\nsay message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Today is Monday"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# => "Today is Monday"')]),t._v("\n\n")])])]),a("p",[t._v("You can define multiple keyword arguments, the definition order is irrelevant:")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("say")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" before"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<p>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" after"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"</p>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  puts "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("#{")]),t._v("before"),a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("#{")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("#{")]),t._v("after"),a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("}")])]),t._v('"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\nsay\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# => "<p>Hello World</p>"')]),t._v("\n\nsay message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Today is Monday"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# => "<p>Today is Monday</p>"')]),t._v("\n\nsay after"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"</p><hr>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Today is Monday"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# => "<p>Today is Monday</p><hr>"')]),t._v("\n\n")])])]),a("p",[t._v("Keyword arguments can be mixed with positional arguments:")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("say")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" before"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<p>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" after"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"</p>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  puts "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("#{")]),t._v("before"),a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("#{")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("#{")]),t._v("after"),a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("}")])]),t._v('"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\nsay "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" before"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<span>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" after"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"</span>"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# => "<span>Hello World</span>"')]),t._v("\n\n")])])]),a("p",[t._v("Mixing keyword argument with positional argument was a very common approach before Ruby 2.1, because it was not possible to define "),a("a",{attrs:{href:"https://stackoverflow.com/documentation/ruby/5253/keyword-arguments/18679/required-keyword-arguments#t=201608060918529843522",target:"_blank",rel:"noopener noreferrer"}},[t._v("required keyword arguments"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("Moreover, in Ruby < 2.0, it was very common to add an "),a("code",[t._v("Hash")]),t._v(" at the end of a method definition to use for optional arguments. The syntax is very similar to keyword arguments, to the point where optional arguments via "),a("code",[t._v("Hash")]),t._v(" are compatible with Ruby 2 keyword arguments.")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("say")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  before "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fetch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":before")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<p>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  after  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fetch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":after")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"</p>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  puts "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("#{")]),t._v("before"),a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("#{")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("#{")]),t._v("after"),a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("}")])]),t._v('"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The method call is syntactically equivalent to the keyword argument one")]),t._v("\nsay "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" before"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<span>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" after"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"</span>"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# => "<span>Hello World</span>"')]),t._v("\n\n")])])]),a("p",[t._v("Note that trying to pass a not-defined keyword argument will result in an error:")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("say")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  puts message\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\nsay foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# => ArgumentError: unknown keyword: foo")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"required-keyword-arguments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#required-keyword-arguments"}},[t._v("#")]),t._v(" Required keyword arguments")]),t._v(" "),a("p",[a("strong",[t._v("Required keyword arguments")]),t._v(" were introduced in Ruby 2.1, as an improvement to keyword arguments.")]),t._v(" "),a("p",[t._v("To define a keyword argument as required, simply declare the argument without a default value.")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("say")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  puts message\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\nsay\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# => ArgumentError: missing keyword: message")]),t._v("\n\nsay message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# => "Hello World"')]),t._v("\n\n")])])]),a("p",[t._v("You can also mix required and non-required keyword arguments:")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("say")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("before"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<p>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" after"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"</p>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  puts "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("#{")]),t._v("before"),a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("#{")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("#{")]),t._v("after"),a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("}")])]),t._v('"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\nsay\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# => ArgumentError: missing keyword: message")]),t._v("\n\nsay message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# => "<p>Hello World</p>"')]),t._v("\n\nsay message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" before"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<span>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" after"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"</span>"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# => "<span>Hello World</span>"')]),t._v("\n\n")])])]),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),a("p",[a("strong",[t._v("Keyword arguments")]),t._v(" were introduced in Ruby 2.0, and improved in Ruby 2.1 with the addition of "),a("strong",[t._v("required")]),t._v(" keyword arguments.")]),t._v(" "),a("p",[t._v("A simple method with a keyword argument looks like the following one:")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("say")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  puts message\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\nsay\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# => "Hello World"')]),t._v("\n\nsay message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Today is Monday"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# => "Today is Monday"')]),t._v("\n\n")])])]),a("p",[t._v("As a reminder, the same method without keyword argument would have been:")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("say")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  puts message\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\nsay\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# => "Hello World"')]),t._v("\n\nsay "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Today is Monday"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# => "Today is Monday"')]),t._v("\n\n")])])]),a("p",[t._v("You can simulate keyword argument in previous Ruby versions using a Hash parameter. This is still a very common practice, especially in libraries that provides compatibility with pre-2.0 Ruby versions:")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("say")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  message "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fetch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":message")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  puts \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\nsay\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# => "Hello World"')]),t._v("\n\nsay message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Today is Monday"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# => "Today is Monday"')]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);