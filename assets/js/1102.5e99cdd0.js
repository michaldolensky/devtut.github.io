(window.webpackJsonp=window.webpackJsonp||[]).push([[1102],{1448:function(t,e,s){"use strict";s.r(e);var a=s(19),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"bisecting-finding-faulty-commits"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bisecting-finding-faulty-commits"}},[t._v("#")]),t._v(" Bisecting/Finding faulty commits")]),t._v(" "),s("h2",{attrs:{id:"binary-search-git-bisect"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#binary-search-git-bisect"}},[t._v("#")]),t._v(" Binary search (git bisect)")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://git-scm.com/docs/git-bisect",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("git bisect")]),s("OutboundLink")],1),t._v(" allows you to find which commit introduced a bug using a binary search.")]),t._v(" "),s("p",[t._v("Start by bisecting a session by providing two commit references: a good commit before the bug, and a bad commit after the bug. Generally, the bad commit is "),s("code",[t._v("HEAD")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-git extra-class"},[s("pre",{pre:!0,attrs:{class:"language-git"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# start the git bisect session")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token command"}},[t._v("$ git bisect start")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# give a commit where the bug doesn't exist")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token command"}},[t._v("$ git bisect good 49c747d")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# give a commit where the bug exist")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token command"}},[t._v("$ git bisect bad HEAD")]),t._v("\n\n")])])]),s("p",[s("code",[t._v("git")]),t._v(" starts a binary search: It splits the revision in half and switches the repository to the intermediate revision. Inspect the code to determine if the revision is good or bad:")]),t._v(" "),s("div",{staticClass:"language-git extra-class"},[s("pre",{pre:!0,attrs:{class:"language-git"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# tell git the revision is good,")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# which means it doesn't contain the bug")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token command"}},[t._v("$ git bisect good")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# if the revision contains the bug,")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# then tell git it's bad")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token command"}},[t._v("$ git bisect bad")]),t._v("\n\n")])])]),s("p",[s("code",[t._v("git")]),t._v(" will continue to run the binary search on each remaining subset of bad revisions depending on your instructions. "),s("code",[t._v("git")]),t._v(" will present a single revision that, unless your flags were incorrect, will represent exactly the revision where the bug was introduced.")]),t._v(" "),s("p",[t._v("Afterwards remember to run "),s("code",[t._v("git bisect reset")]),t._v(" to end the bisect session and return to HEAD.")]),t._v(" "),s("div",{staticClass:"language-git extra-class"},[s("pre",{pre:!0,attrs:{class:"language-git"}},[s("code",[s("span",{pre:!0,attrs:{class:"token command"}},[t._v("$ git bisect reset")]),t._v("\n\n")])])]),s("p",[t._v("If you have a script that can check for the bug, you can automate the process with:")]),t._v(" "),s("div",{staticClass:"language-git extra-class"},[s("pre",{pre:!0,attrs:{class:"language-git"}},[s("code",[s("span",{pre:!0,attrs:{class:"token command"}},[t._v("$ git bisect run [script] [arguments]")]),t._v("\n\n")])])]),s("p",[t._v("Where "),s("code",[t._v("[script]")]),t._v(" is the path to your script and "),s("code",[t._v("[arguments]")]),t._v(" is any arguments that should be passed to your script.")]),t._v(" "),s("p",[t._v("Running this command will automatically run through the binary search, executing "),s("code",[t._v("git bisect good")]),t._v(" or "),s("code",[t._v("git bisect bad")]),t._v(" at each step depending on the exit code of your script.  Exiting with 0 indicates "),s("code",[t._v("good")]),t._v(", while exiting with 1-124, 126, or 127 indicates bad.  125 indicates that the script cannot test that revision (which will trigger a "),s("code",[t._v("git bisect skip")]),t._v(").")]),t._v(" "),s("h2",{attrs:{id:"semi-automatically-find-a-faulty-commit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#semi-automatically-find-a-faulty-commit"}},[t._v("#")]),t._v(" Semi-automatically find a faulty commit")]),t._v(" "),s("p",[t._v("Imagine you are on the "),s("code",[t._v("master")]),t._v(" branch and something is not working as expected (a regression was introduced), but you don't know where. All you know is, that is was working in the last release (which was e.g., tagged or you know the commit hash, lets take "),s("code",[t._v("old-rel")]),t._v(" here).")]),t._v(" "),s("p",[t._v("Git has help for you, finding the faulty commit which introduced the regression with a very low number of steps (binary search).")]),t._v(" "),s("p",[t._v("First of all start bisecting:")]),t._v(" "),s("div",{staticClass:"language-git extra-class"},[s("pre",{pre:!0,attrs:{class:"language-git"}},[s("code",[t._v("git bisect start master old-rel\n\n")])])]),s("p",[t._v("This will tell git that "),s("code",[t._v("master")]),t._v(" is a broken revision (or the first broken version) and "),s("code",[t._v("old-rel")]),t._v(" is the last known version.")]),t._v(" "),s("p",[t._v("Git will now check out a detached head in the middle of both commits. Now, you can do your testing. Depending on whether it works or not issue")]),t._v(" "),s("div",{staticClass:"language-git extra-class"},[s("pre",{pre:!0,attrs:{class:"language-git"}},[s("code",[t._v("git bisect good\n\n")])])]),s("p",[t._v("or")]),t._v(" "),s("div",{staticClass:"language-git extra-class"},[s("pre",{pre:!0,attrs:{class:"language-git"}},[s("code",[t._v("git bisect bad\n\n")])])]),s("p",[t._v(". In case this commit cannot be tested, you can easily "),s("code",[t._v("git reset")]),t._v(" and test that one, git willl take care of this.")]),t._v(" "),s("p",[t._v("After a few steps git will output the faulty commit hash.")]),t._v(" "),s("p",[t._v("In order to abort the bisect process just issue")]),t._v(" "),s("div",{staticClass:"language-git extra-class"},[s("pre",{pre:!0,attrs:{class:"language-git"}},[s("code",[t._v("git bisect reset\n\n")])])]),s("p",[t._v("and git will restore the previous state.")]),t._v(" "),s("h4",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),s("li",[t._v("\n`git bisect "),s("subcommand",[s("options",[t._v("`\n")])],1)],1),t._v(" "),s("li",[t._v("\n`git bisect start "),s("bad",[t._v(" ["),s("good",[t._v("...]`\n")])],1)],1),t._v(" "),s("li",[t._v("\n`git bisect reset`\n")]),t._v(" "),s("li",[t._v("\n`git bisect good`\n")]),t._v(" "),s("li",[t._v("\n`git bisect bad`\n")])])}),[],!1,null,null,null);e.default=i.exports}}]);