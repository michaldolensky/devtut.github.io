(window.webpackJsonp=window.webpackJsonp||[]).push([[1153],{1499:function(e,t,a){"use strict";a.r(t);var r=a(19),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"subtrees"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subtrees"}},[e._v("#")]),e._v(" Subtrees")]),e._v(" "),a("h2",{attrs:{id:"create-pull-and-backport-subtree"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-pull-and-backport-subtree"}},[e._v("#")]),e._v(" Create, Pull, and Backport Subtree")]),e._v(" "),a("h3",{attrs:{id:"create-subtree"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-subtree"}},[e._v("#")]),e._v(" Create Subtree")]),e._v(" "),a("p",[e._v("Add a new remote called "),a("code",[e._v("plugin")]),e._v(" pointing to the plugin's repository:")]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git remote add plugin https://path.to/remotes/plugin.git\n\n")])])]),a("p",[e._v("Then Create a subtree specifying the new folder prefix "),a("code",[e._v("plugins/demo")]),e._v(". "),a("code",[e._v("plugin")]),e._v(" is the remote name, and "),a("code",[e._v("master")]),e._v(" refers to the master branch on the subtree's repository:")]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git subtree add --prefix=plugins/demo plugin master\n\n")])])]),a("h3",{attrs:{id:"pull-subtree-updates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pull-subtree-updates"}},[e._v("#")]),e._v(" Pull Subtree Updates")]),e._v(" "),a("p",[e._v("Pull normal commits made in plugin:")]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git subtree pull --prefix=plugins/demo plugin master\n\n")])])]),a("h3",{attrs:{id:"backport-subtree-updates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backport-subtree-updates"}},[e._v("#")]),e._v(" Backport Subtree Updates")]),e._v(" "),a("li",[e._v("\nSpecify commits made in superproject to be backported:\n"),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git commit -am "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"new changes to be backported"')]),e._v("\n\n")])])])]),e._v(" "),a("li",[e._v("\nCheckout new branch for merging, set to track subtree repository:\n"),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git checkout -b backport plugin/master\n\n")])])])]),e._v(" "),a("li",[e._v("\nCherry-pick backports:\n"),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git cherry-pick -x --strategy=subtree master\n\n")])])])]),e._v(" "),a("li",[e._v("\nPush changes back to plugin source:\n"),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git push plugin backport:master\n\n")])])])]),e._v(" "),a("h4",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("git subtree add -P <prefix> <commit>")])]),e._v(" "),a("li",[a("code",[e._v("git subtree add -P <prefix> <repository> <ref>")])]),e._v(" "),a("li",[a("code",[e._v("git subtree pull -P <prefix> <repository> <ref>")])]),e._v(" "),a("li",[a("code",[e._v("git subtree push -P <prefix> <repository> <ref>")])]),e._v(" "),a("li",[a("code",[e._v("git subtree merge -P <prefix> <commit>")])]),e._v(" "),a("li",[a("code",[e._v("git subtree split -P <prefix> [OPTIONS] [<commit>]")])])]),e._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[e._v("#")]),e._v(" Remarks")]),e._v(" "),a("p",[e._v("This is an alternative to using a "),a("a",{attrs:{href:"https://git-scm.com/docs/git-submodule",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("submodule")]),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);