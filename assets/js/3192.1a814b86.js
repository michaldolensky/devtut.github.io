(window.webpackJsonp=window.webpackJsonp||[]).push([[3192],{3539:function(a,t,s){"use strict";s.r(t);var e=s(19),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"views"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#views"}},[a._v("#")]),a._v(" Views")]),a._v(" "),s("h2",{attrs:{id:"structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#structure"}},[a._v("#")]),a._v(" Structure")]),a._v(" "),s("p",[a._v("As Rails follows the M"),s("strong",[a._v("V")]),a._v("C pattern "),s("code",[a._v("Views")]),a._v(' are where your "templates" are for your actions.')]),a._v(" "),s("p",[a._v("Let's say you have a controller "),s("code",[a._v("articles_controller.rb")]),a._v(". For this controller you would have a folder in views called "),s("code",[a._v("app/views/articles")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[a._v("app\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v(" controllers\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("   '"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v(" articles_controller"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("rb\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n'"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v(" views\n    '"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v(" articles\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("erb\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" edit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("erb\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" show"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("erb\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("erb\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("   '"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" _partial_view"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("erb\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n    '"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n")])])]),s("p",[a._v("This structure allows you to have a folder for each controller. When calling an action in your controller the appropriate view will be rendered automatically.")]),a._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v(" articles_controller"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("rb\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ArticlesController")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("ActionController")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Base")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("def")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token method-definition"}},[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("show")])]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("end")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("end")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v(" show"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("erb\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("h1"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("My")]),a._v(" show view"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("h1"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n")])])]),s("h2",{attrs:{id:"partials"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#partials"}},[a._v("#")]),a._v(" Partials")]),a._v(" "),s("p",[a._v("Partial templates (partials) are a way of breaking the rendering process into more manageable chunks. Partials allow you to extract pieces of code from your templates to separate files and also reuse them throughout your templates.")]),a._v(" "),s("p",[a._v("To "),s("strong",[a._v("create")]),a._v(" a partial, create a new file that begins with an underscore: "),s("code",[a._v("_form.html.erb")])]),a._v(" "),s("p",[a._v("To "),s("strong",[a._v("render")]),a._v(" a partial as part of a view, use the render method within the view:\n"),s("code",[a._v('<%= render "form" %>')])]),a._v(" "),s("ul",[s("li",[a._v("Note, the underscore is left out when rendering")]),a._v(" "),s("li",[a._v("A partial has to be rendered using its path if located in a different folder")])]),a._v(" "),s("p",[a._v("To "),s("strong",[a._v("pass")]),a._v(" a variable into the partial as a local variable, use this notation:")]),a._v(" "),s("p",[s("code",[a._v("<%= render :partial => 'form', locals: { post: @post } %>")])]),a._v(" "),s("p",[a._v("Partials are also useful when you need to "),s("strong",[a._v("reuse")]),a._v(" exactly the same code ("),s("strong",[a._v("DRY philosophy")]),a._v(").")]),a._v(" "),s("p",[a._v("For example, to reuse "),s("code",[a._v("<head>")]),a._v(" code, create a partial named "),s("code",[a._v("_html_header.html.erb")]),a._v(",  enter your "),s("code",[a._v("<head>")]),a._v(" code to be reused, and render the partial whenever needed by: "),s("code",[a._v("<%= render 'html_header' %>")]),a._v(".")]),a._v(" "),s("h3",{attrs:{id:"object-partials"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object-partials"}},[a._v("#")]),a._v(" Object Partials")]),a._v(" "),s("p",[a._v("Objects that respond to "),s("code",[a._v("to_partial_path")]),a._v(" can also be rendered, as in "),s("code",[a._v("<%= render @post %>")]),a._v(". By default, for ActiveRecord models, this will be something like "),s("code",[a._v("posts/post")]),a._v(", so by actually rendering "),s("code",[a._v("@post")]),a._v(", the file "),s("code",[a._v("views/posts/_post.html.erb")]),a._v(" will be rendered.")]),a._v(" "),s("p",[a._v("A local named "),s("code",[a._v("post")]),a._v(" will be automatically assigned. In the end, "),s("code",[a._v("<%= render @post %>")]),a._v(" is a short hand for "),s("code",[a._v("<%= render 'posts/post', post: @post %>")]),a._v(".")]),a._v(" "),s("p",[a._v("Collections of objects that respond to "),s("code",[a._v("to_partial_path")]),a._v(" can also be provided, such as "),s("code",[a._v("<%= render @posts %>")]),a._v(". Each item will be rendered consecutively.")]),a._v(" "),s("h3",{attrs:{id:"global-partials"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#global-partials"}},[a._v("#")]),a._v(" Global Partials")]),a._v(" "),s("p",[a._v("To create a global partial that can be used anywhere without referencing its exact path, the partial has to be located in the "),s("code",[a._v("views/application")]),a._v(" path. The previous example has been modified below to illustrate this feature.")]),a._v(" "),s("p",[a._v("For example, this is a path to a global partial "),s("code",[a._v("app/views/application/_html_header.html.erb:")])]),a._v(" "),s("p",[a._v("To render this global partial anywhere, use "),s("code",[a._v("<%= render 'html_header' %>")])]),a._v(" "),s("h2",{attrs:{id:"assettaghelper"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#assettaghelper"}},[a._v("#")]),a._v(" AssetTagHelper")]),a._v(" "),s("p",[a._v("To let rails automatically and correctly link assets (css/js/images) in most cases you want to use built in helpers. ("),s("a",{attrs:{href:"http://guides.rubyonrails.org/action_view_overview.html#assettaghelper",target:"_blank",rel:"noopener noreferrer"}},[a._v("Official documentation"),s("OutboundLink")],1),a._v(")")]),a._v(" "),s("h3",{attrs:{id:"image-helpers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#image-helpers"}},[a._v("#")]),a._v(" Image helpers")]),a._v(" "),s("h3",{attrs:{id:"image-path"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#image-path"}},[a._v("#")]),a._v(" "),s("strong",[a._v("image_path")])]),a._v(" "),s("p",[a._v("This returns the path to an image asset in "),s("code",[a._v("app/assets/images")]),a._v(".")]),a._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[a._v("image_path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"edit.png"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# => /assets/edit.png")]),a._v("\n\n")])])]),s("h3",{attrs:{id:"image-url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#image-url"}},[a._v("#")]),a._v(" "),s("strong",[a._v("image_url")])]),a._v(" "),s("p",[a._v("This returns the full URL to an image asset in "),s("code",[a._v("app/assets/images")]),a._v(".")]),a._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[a._v("image_url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"edit.png"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# => http://www.example.com/assets/edit.png")]),a._v("\n\n")])])]),s("h3",{attrs:{id:"image-tag"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#image-tag"}},[a._v("#")]),a._v(" "),s("strong",[a._v("image_tag")])]),a._v(" "),s("p",[a._v("Use this helper if you want to include an "),s("code",[a._v('<img src="" />')]),a._v("-tag with the source set.")]),a._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[a._v("image_tag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"icon.png"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('# => <img src="/assets/icon.png" alt="Icon" />')]),a._v("\n\n")])])]),s("h3",{attrs:{id:"javascript-helpers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript-helpers"}},[a._v("#")]),a._v(" JavaScript helpers")]),a._v(" "),s("h3",{attrs:{id:"javascript-include-tag"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript-include-tag"}},[a._v("#")]),a._v(" "),s("strong",[a._v("javascript_include_tag")])]),a._v(" "),s("p",[a._v("If you want to include a JavaScript-file in your view.")]),a._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[a._v("javascript_include_tag "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"application"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('# => <script src="/assets/application.js"><\/script>')]),a._v("\n\n")])])]),s("h3",{attrs:{id:"javascript-path"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript-path"}},[a._v("#")]),a._v(" "),s("strong",[a._v("javascript_path")])]),a._v(" "),s("p",[a._v("This returns the path of your JavaScript-file.")]),a._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[a._v("javascript_path "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"application"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# => /assets/application.js")]),a._v("\n\n")])])]),s("h3",{attrs:{id:"javascript-url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript-url"}},[a._v("#")]),a._v(" "),s("strong",[a._v("javascript_url")])]),a._v(" "),s("p",[a._v("This returns the full URL of your JavaScript-file.")]),a._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[a._v("javascript_url "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"application"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# => http://www.example.com/assets/application.js")]),a._v("\n\n")])])]),s("h3",{attrs:{id:"stylesheet-helpers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stylesheet-helpers"}},[a._v("#")]),a._v(" Stylesheet helpers")]),a._v(" "),s("h3",{attrs:{id:"stylesheet-link-tag"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stylesheet-link-tag"}},[a._v("#")]),a._v(" "),s("strong",[a._v("stylesheet_link_tag")])]),a._v(" "),s("p",[a._v("If you want to include a CSS-file in your view.")]),a._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[a._v("stylesheet_link_tag "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"application"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('# => <link href="/assets/application.css" media="screen" rel="stylesheet" />')]),a._v("\n\n")])])]),s("h3",{attrs:{id:"stylesheet-path"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stylesheet-path"}},[a._v("#")]),a._v(" "),s("strong",[a._v("stylesheet_path")])]),a._v(" "),s("p",[a._v("This returns the path of you stylesheet asset.")]),a._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[a._v("stylesheet_path "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"application"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# => /assets/application.css")]),a._v("\n\n")])])]),s("h3",{attrs:{id:"stylesheet-url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stylesheet-url"}},[a._v("#")]),a._v(" "),s("strong",[a._v("stylesheet_url")])]),a._v(" "),s("p",[a._v("This returns the full URL of you stylesheet asset.")]),a._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[a._v("stylesheet_url "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"application"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# => http://www.example.com/assets/application.css")]),a._v("\n\n")])])]),s("h3",{attrs:{id:"example-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[a._v("#")]),a._v(" Example usage")]),a._v(" "),s("p",[a._v("When creating a new rails app you will automatically have two of these helpers in "),s("code",[a._v("app/views/layouts/application.html.erb")])]),a._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("%= stylesheet_link_tag    'application', media: 'all', 'data-turbolinks-track': 'reload' %>\n<%=")]),a._v(" javascript_include_tag "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'application'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'data-turbolinks-track'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'reload'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("%")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n")])])]),s("p",[a._v("This outputs:")]),a._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("CSS")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("link rel"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"stylesheet"')]),a._v(" media"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"all"')]),a._v(" href"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/assets/application.self-e19d4b856cacba4f6fb0e5aa82a1ba9aa4ad616f0213a1259650b281d9cf6b20.css?body=1"')]),a._v(" data"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("turbolinks"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("track"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"reload"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("JavaScript")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("script src"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/assets/application.self-619d9bf310b8eb258c67de7af745cafbf2a98f6d4c7bb6db8e1b00aed89eb0b1.js?body=1"')]),a._v(" data"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("turbolinks"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("track"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"reload"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n")])])]),s("h2",{attrs:{id:"replace-html-code-in-views"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#replace-html-code-in-views"}},[a._v("#")]),a._v(" Replace HTML code in Views")]),a._v(" "),s("p",[a._v("If you ever wanted to determine the html content to be printed on a page during run time then, rails has a very good solution for that. It has something called the "),s("strong",[a._v("content_for")]),a._v(" which allows us to pass a block to a rails view. Please check the below example,")]),a._v(" "),s("p",[s("strong",[a._v("Declare content_for")])]),a._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("%")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("yield")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token symbol"}},[a._v(":header")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("%>\n</div>")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("%")]),a._v(" content_for "),s("span",{pre:!0,attrs:{class:"token symbol"}},[a._v(":header")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("do")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("%>\n <ul>")]),a._v("\n   "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("li"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Line")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Item")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("li"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n   "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("li"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Line")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Item")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("li"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("ul"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("%")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("end")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("%")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n")])])]),s("h2",{attrs:{id:"haml-an-alternative-way-to-use-in-your-views"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#haml-an-alternative-way-to-use-in-your-views"}},[a._v("#")]),a._v(" HAML - an alternative way to use in your views")]),a._v(" "),s("p",[a._v("HAML (HTML abstraction markup language) is a beautiful and elegant way to describe and design the HTML of your views. Instead of opening- and closing tags, HAML uses indentation for the structure of your pages. Basically, if something should be placed within another element, you just indent it by using one tab stop. Tabs and white space are important in HAML, so be sure that you always use the same amount of tabs.")]),a._v(" "),s("p",[s("strong",[a._v("Examples:")])]),a._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#myview.html.erb")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("h1"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("%= @the_title %></h1>\n<p>This is my form</p>\n<%=")]),a._v(" render "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"form"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("%")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n")])])]),s("p",[a._v("And in HAML:")]),a._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#myview.html.haml")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("%")]),a._v("h1"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@the_title")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("%")]),a._v("p\n    "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("This")]),a._v(" is my form\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" render "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'form'")]),a._v("\n\n")])])]),s("p",[a._v("You see, the structure of the layout is much clearer than using HTML and ERB.")]),a._v(" "),s("p",[s("strong",[a._v("Installation")])]),a._v(" "),s("p",[a._v("Just install the gem using")]),a._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[a._v("gem install haml\n\n")])])]),s("p",[a._v("and add the gem to the Gemfile")]),a._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[a._v("gem "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"haml"')]),a._v("\n\n")])])]),s("p",[a._v("For using HAML instead of HTML/ERB, just replace the file extensions of your views from "),s("code",[a._v("something.html.erb")]),a._v(" to "),s("code",[a._v("something.html.haml")]),a._v(".")]),a._v(" "),s("p",[s("strong",[a._v("Quick tipps")])]),a._v(" "),s("p",[a._v("Common elements like divs can be written in a short way")]),a._v(" "),s("p",[a._v("HTML")]),a._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("div "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"myclass"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("My")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Text")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n")])])]),s("p",[a._v("HAML")]),a._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("%")]),a._v("div"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("myclass\n\n")])])]),s("p",[a._v("HAML, shorthand")]),a._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("myclass\n\n")])])]),s("p",[s("strong",[a._v("Attributes")])]),a._v(" "),s("p",[a._v("HTML")]),a._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("p "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"myclass"')]),a._v(" id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"myid"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("My")]),a._v(" paragraph"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n")])])]),s("p",[a._v("HAML")]),a._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("%")]),a._v("p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token symbol"}},[a._v(":class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"myclass"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token symbol"}},[a._v(":id")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"myid"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("My")]),a._v(" paragraph\n\n")])])]),s("p",[s("strong",[a._v("Inserting ruby code")])]),a._v(" "),s("p",[a._v("You can insert ruby code with the = and - signs.")]),a._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" link_to "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Home"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" home_path\n\n")])])]),s("p",[a._v("Code starting with "),s("strong",[a._v("=")]),a._v(" will be executed and embedded into the document.")]),a._v(" "),s("p",[a._v("Code starting with "),s("strong",[a._v("-")]),a._v(" will be executed, but not inserted into the document.")]),a._v(" "),s("p",[s("strong",[a._v("Full documentation")])]),a._v(" "),s("p",[a._v("HAML is very easy to start with, but is also very complex, so that I'll recommend "),s("a",{attrs:{href:"http://haml.info/docs/yardoc/file.REFERENCE.html#using_haml",target:"_blank",rel:"noopener noreferrer"}},[a._v("reading the documentation"),s("OutboundLink")],1),a._v(".")])])}),[],!1,null,null,null);t.default=r.exports}}]);