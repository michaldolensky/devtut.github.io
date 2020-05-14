(window.webpackJsonp=window.webpackJsonp||[]).push([[3178],{3525:function(t,a,s){"use strict";s.r(a);var e=s(19),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"react-with-rails-using-react-rails-gem"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react-with-rails-using-react-rails-gem"}},[t._v("#")]),t._v(" React with Rails using react-rails gem")]),t._v(" "),s("h2",{attrs:{id:"react-installation-for-rails-using-rails-react-gem"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react-installation-for-rails-using-rails-react-gem"}},[t._v("#")]),t._v(" React installation for Rails using rails_react gem")]),t._v(" "),s("p",[t._v("Add react-rails to your Gemfile:")]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[t._v("gem "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react-rails'")]),t._v("\n\n")])])]),s("p",[t._v("And install:")]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[t._v("bundle install\n\n")])])]),s("p",[t._v("Next, run the installation script:")]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[t._v("rails g react"),s("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":install")]),t._v("\n\n")])])]),s("p",[t._v("This will:")]),t._v(" "),s("p",[t._v("create a components.js manifest file and a app/assets/javascripts/components/ directory, where you will put your components\nplace the following in your application.js:")]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),t._v(" react\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),t._v(" react_ujs\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),t._v(" components\n\n")])])]),s("h2",{attrs:{id:"using-react-rails-within-your-application"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-react-rails-within-your-application"}},[t._v("#")]),t._v(" Using react_rails within your application")]),t._v(" "),s("p",[s("strong",[t._v("React.js builds")])]),t._v(" "),s("p",[t._v("You can pick which React.js build (development, production, with or without add-ons) to serve in each environment by adding a config. Here are the defaults:")]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# config/environments/development.rb")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MyApp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Application")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("configure "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n  config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("react"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("variant "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":development")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# config/environments/production.rb")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MyApp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Application")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("configure "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n  config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("react"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("variant "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":production")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n")])])]),s("p",[t._v("To include add-ons, use this config:")]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MyApp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Application")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("configure "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n  config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("react"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("addons "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# defaults to false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n")])])]),s("p",[t._v("After restarting your Rails server, //= require react will provide the build of React.js which was specified by the configurations.")]),t._v(" "),s("p",[t._v("react-rails offers a few other options for versions & builds of React.js. See VERSIONS.md for more info about using the react-source gem or dropping in your own copies of React.js.")]),t._v(" "),s("p",[t._v("JSX")]),t._v(" "),s("p",[t._v("After installing react-rails, restart your server. Now, .js.jsx files will be transformed in the asset pipeline.")]),t._v(" "),s("p",[t._v("BabelTransformer options")]),t._v(" "),s("p",[t._v("You can use babel's transformers and custom plugins, and pass options to the babel transpiler adding following configurations:")]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("react"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jsx_transform_options "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  blacklist"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'spec.functionName'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'validation.react'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'strict'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# default options")]),t._v("\n  optional"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"transformerName"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pass extra babel options")]),t._v("\n  whitelist"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"useStrict"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# even more options[enter link description here][1]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("Under the hood, react-rails uses "),s("a",{attrs:{href:"https://github.com/babel/ruby-babel-transpiler",target:"_blank",rel:"noopener noreferrer"}},[t._v("ruby-babel-transpiler"),s("OutboundLink")],1),t._v(", for transformation.")]),t._v(" "),s("h2",{attrs:{id:"rendering-mounting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rendering-mounting"}},[t._v("#")]),t._v(" Rendering & mounting")]),t._v(" "),s("p",[s("code",[t._v("react-rails")]),t._v(" includes a view helper "),s("code",[t._v("(react_component)")]),t._v(" and an unobtrusive JavaScript driver (react_ujs) which work together to put React components on the page. You should require the UJS driver in your manifest after react (and after turbolinks if you use Turbolinks).")]),t._v(" "),s("p",[t._v("The view helper puts a div on the page with the requested component class & props. For example:")]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("%= react_component('HelloMessage', name: 'John') %>\n\x3c!-- becomes: --\x3e\n<div data-react-class=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HelloMessage"')]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("react"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{&quot;name&quot;:&quot;John&quot;}"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),s("p",[t._v("On page load, the react_ujs driver will scan the page and mount components using data-react-class and data-react-props.")]),t._v(" "),s("p",[t._v("If Turbolinks is present components are mounted on the page:change event, and unmounted on page:before-unload. Turbolinks >= 2.4.0 is recommended because it exposes better events.")]),t._v(" "),s("p",[t._v("In case of Ajax calls, the UJS mounting can be triggered manually by calling from javascript:")]),t._v(" "),s("p",[t._v("ReactRailsUJS.mountComponents()\nThe view helper's signature is:")]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[t._v("react_component"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("component_class_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" props"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" html_options"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[s("code",[t._v("component_class_name")]),t._v(' is a string which names a globally-accessible    component class. It may have dots (eg, "MyApp.Header.MenuItem").')]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\n  `props` is either an object that responds to `#to_json` or an    already-stringified JSON object (eg, made with Jbuilder, see note    below).\n\n")])])]),s("p",[s("code",[t._v("html_options")]),t._v(" may include:    "),s("code",[t._v("tag:")]),t._v(" to use an element other than a div to embed data-react-class and data-react-props.    "),s("code",[t._v("prerender: true")]),t._v(" to render the component on the server.\n"),s("code",[t._v("**other")]),t._v(" Any other arguments (eg class:, id:) are passed through to content_tag.")])])}),[],!1,null,null,null);a.default=n.exports}}]);