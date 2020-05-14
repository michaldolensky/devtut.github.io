(window.webpackJsonp=window.webpackJsonp||[]).push([[1147],{1493:function(t,e,a){"use strict";a.r(e);var r=a(19),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"rewriting-history-with-filter-branch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rewriting-history-with-filter-branch"}},[t._v("#")]),t._v(" Rewriting history with filter-branch")]),t._v(" "),a("h2",{attrs:{id:"changing-the-author-of-commits"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changing-the-author-of-commits"}},[t._v("#")]),t._v(" Changing the author of commits")]),t._v(" "),a("p",[t._v("You can use an environment filter to change the author of commits. Just modify and export "),a("code",[t._v("$GIT_AUTHOR_NAME")]),t._v(" in the script to change who authored the commit.")]),t._v(" "),a("p",[t._v("Create a file "),a("code",[t._v("filter.sh")]),t._v(" with contents like so:")]),t._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[t._v("if [ "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$GIT_AUTHOR_NAME"')]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Author to Change From"')]),t._v(" ]\nthen\n    export GIT_AUTHOR_NAME="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Author to Change To"')]),t._v("\n    export GIT_AUTHOR_EMAIL="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email.to.change.to@example.com"')]),t._v("\nfi\n\n")])])]),a("p",[t._v("Then run "),a("code",[t._v("filter-branch")]),t._v(" from the command line:")]),t._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[t._v("chmod +x ./filter.sh\ngit filter-branch --env-filter ./filter.sh\n\n")])])]),a("h2",{attrs:{id:"setting-git-committer-equal-to-commit-author"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-git-committer-equal-to-commit-author"}},[t._v("#")]),t._v(" Setting git committer equal to commit author")]),t._v(" "),a("p",[t._v("This command, given a commit range "),a("code",[t._v("commit1..commit2")]),t._v(", rewrites history so that git commit author becomes also git committer:")]),t._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[t._v('git filter-branch -f --commit-filter \\\n   \'export GIT_COMMITTER_NAME=\\"$GIT_AUTHOR_NAME\\";\n    export GIT_COMMITTER_EMAIL=\\"$GIT_AUTHOR_EMAIL\\";\n    export GIT_COMMITTER_DATE=\\"$GIT_AUTHOR_DATE\\";\n    git commit-tree $@\' \\\n    -- commit1..commit2\n\n')])])])])}),[],!1,null,null,null);e.default=i.exports}}]);