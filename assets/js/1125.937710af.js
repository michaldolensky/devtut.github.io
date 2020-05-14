(window.webpackJsonp=window.webpackJsonp||[]).push([[1125],{1469:function(e,t,r){"use strict";r.r(t);var a=r(19),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"git-remote"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#git-remote"}},[e._v("#")]),e._v(" Git Remote")]),e._v(" "),r("h2",{attrs:{id:"display-remote-repositories"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#display-remote-repositories"}},[e._v("#")]),e._v(" Display Remote Repositories")]),e._v(" "),r("p",[e._v("To list all configured remote repositories, use "),r("code",[e._v("git remote")]),e._v(".")]),e._v(" "),r("p",[e._v("It shows the short name (aliases) of each remote handle that you have configured.")]),e._v(" "),r("div",{staticClass:"language-git extra-class"},[r("pre",{pre:!0,attrs:{class:"language-git"}},[r("code",[r("span",{pre:!0,attrs:{class:"token command"}},[e._v("$ git remote")]),e._v("\npremium\npremiumPro\norigin\n\n")])])]),r("p",[e._v("To show more detailed information, the "),r("code",[e._v("--verbose")]),e._v(" or "),r("code",[e._v("-v")]),e._v(" flag can be used. The output will include the URL and the type of the remote ("),r("code",[e._v("push")]),e._v(" or "),r("code",[e._v("pull")]),e._v("):")]),e._v(" "),r("div",{staticClass:"language-git extra-class"},[r("pre",{pre:!0,attrs:{class:"language-git"}},[r("code",[r("span",{pre:!0,attrs:{class:"token command"}},[e._v("$ git remote"),r("span",{pre:!0,attrs:{class:"token parameter"}},[e._v(" -v")])]),e._v("\npremiumPro    https://github.com/user/CatClickerPro.git (fetch)\npremiumPro    https://github.com/user/CatClickerPro.git (push)\npremium    https://github.com/user/CatClicker.git (fetch)\npremium    https://github.com/user/CatClicker.git (push)\norigin    https://github.com/ud/starter.git (fetch)\norigin    https://github.com/ud/starter.git (push)\n\n")])])]),r("h2",{attrs:{id:"change-remote-url-of-your-git-repository"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#change-remote-url-of-your-git-repository"}},[e._v("#")]),e._v(" Change remote url of your Git repository")]),e._v(" "),r("p",[e._v("You may want to do this if the remote repository is migrated. The command for changing the remote url is:")]),e._v(" "),r("div",{staticClass:"language-git extra-class"},[r("pre",{pre:!0,attrs:{class:"language-git"}},[r("code",[e._v("git remote set-url\n\n")])])]),r("p",[e._v("It takes 2 arguments: an existing remote name (origin, upstream) and the url.")]),e._v(" "),r("p",[e._v("Check your current remote url:")]),e._v(" "),r("div",{staticClass:"language-git extra-class"},[r("pre",{pre:!0,attrs:{class:"language-git"}},[r("code",[e._v("git remote -v\norigin    https://bitbucket.com/develop/myrepo.git (fetch)\norigin    https://bitbucket.com/develop/myrepo.git (push)\n\n")])])]),r("p",[e._v("Change your remote url:")]),e._v(" "),r("div",{staticClass:"language-git extra-class"},[r("pre",{pre:!0,attrs:{class:"language-git"}},[r("code",[e._v("git remote set-url origin https://localserver/develop/myrepo.git\n\n")])])]),r("p",[e._v("Check again your remote url:")]),e._v(" "),r("div",{staticClass:"language-git extra-class"},[r("pre",{pre:!0,attrs:{class:"language-git"}},[r("code",[e._v("git remote -v\norigin    https://localserver/develop/myrepo.git (fetch)\norigin    https://localserver/develop/myrepo.git (push)\n\n")])])]),r("h2",{attrs:{id:"remove-a-remote-repository"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#remove-a-remote-repository"}},[e._v("#")]),e._v(" Remove a Remote Repository")]),e._v(" "),r("p",[e._v("Remove the remote named "),r("code",[e._v("<name>")]),e._v(". All remote-tracking branches and configuration settings for the remote are removed.")]),e._v(" "),r("p",[e._v("To remove a remote repository "),r("code",[e._v("dev")]),e._v(":")]),e._v(" "),r("div",{staticClass:"language-git extra-class"},[r("pre",{pre:!0,attrs:{class:"language-git"}},[r("code",[e._v("git remote rm dev\n\n")])])]),r("h2",{attrs:{id:"add-a-remote-repository"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#add-a-remote-repository"}},[e._v("#")]),e._v(" Add a Remote Repository")]),e._v(" "),r("p",[e._v("To add a remote, use "),r("code",[e._v("git remote add")]),e._v(" in the root of your local repository.")]),e._v(" "),r("p",[e._v("For adding a remote Git repository "),r("url",[e._v(" as an easy short name "),r("name",[e._v(" use")])],1)],1),e._v(" "),r("div",{staticClass:"language-git extra-class"},[r("pre",{pre:!0,attrs:{class:"language-git"}},[r("code",[e._v("git remote add <name> <url>\n\n")])])]),r("p",[e._v("The command "),r("code",[e._v("git fetch <name>")]),e._v(" can then be used to create and update remote-tracking branches "),r("code",[e._v("<name>/<branch>")]),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"show-more-information-about-remote-repository"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#show-more-information-about-remote-repository"}},[e._v("#")]),e._v(" Show more information about remote repository")]),e._v(" "),r("p",[e._v("You can view more information about a remote repository by "),r("code",[e._v("git remote show <remote repository alias>")])]),e._v(" "),r("div",{staticClass:"language-git extra-class"},[r("pre",{pre:!0,attrs:{class:"language-git"}},[r("code",[e._v("git remote show origin\n\n")])])]),r("p",[e._v("result:")]),e._v(" "),r("div",{staticClass:"language-git extra-class"},[r("pre",{pre:!0,attrs:{class:"language-git"}},[r("code",[e._v("remote origin\nFetch URL:  https://localserver/develop/myrepo.git\nPush  URL:  https://localserver/develop/myrepo.git\nHEAD branch: master\nRemote branches:\n  master      tracked\nLocal branches configured for "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'git pull'")]),e._v(":\n  master      merges with remote master\nLocal refs configured for "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'git push'")]),e._v(":\n  master      pushes to master      (up to date)\n\n")])])]),r("h2",{attrs:{id:"rename-a-remote-repository"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rename-a-remote-repository"}},[e._v("#")]),e._v(" Rename a Remote Repository")]),e._v(" "),r("p",[e._v("Rename the remote named "),r("code",[e._v("<old>")]),e._v(" to "),r("code",[e._v("<new>")]),e._v(". All remote-tracking branches and configuration settings for the remote are updated.")]),e._v(" "),r("p",[e._v("To rename a remote branch name "),r("code",[e._v("dev")]),e._v(" to "),r("code",[e._v("dev1")]),e._v(" :")]),e._v(" "),r("div",{staticClass:"language-git extra-class"},[r("pre",{pre:!0,attrs:{class:"language-git"}},[r("code",[e._v("git remote rename dev dev1\n\n")])])]),r("h4",{attrs:{id:"syntax"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("git remote [-v | --verbose]")])]),e._v(" "),r("li",[r("code",[e._v("git remote add [-t <branch>] [-m <master>] [-f] [--[no-]tags] [--mirror=<fetch|push>]<name> <url>")])]),e._v(" "),r("li",[r("code",[e._v("git remote rename <old> <new>")])]),e._v(" "),r("li",[r("code",[e._v("git remote remove <name>")])]),e._v(" "),r("li",[r("code",[e._v("git remote set-head <name> (-a | --auto | -d | --delete | <branch>)")])]),e._v(" "),r("li",[r("code",[e._v("git remote set-branches [--add] <name> <branch>...")])]),e._v(" "),r("li",[r("code",[e._v("git remote set-url [--push] <name> <newurl> [<oldurl>]")])]),e._v(" "),r("li",[r("code",[e._v("git remote set-url --add [--push] <name> <newurl>")])]),e._v(" "),r("li",[r("code",[e._v("git remote set-url --delete [--push] <name> <url>")])]),e._v(" "),r("li",[r("code",[e._v("git remote [-v | --verbose] show [-n] <name>...")])]),e._v(" "),r("li",[r("code",[e._v("git remote prune [-n | --dry-run] <name>...")])]),e._v(" "),r("li",[r("code",[e._v("git remote [-v | --verbose] update [-p | --prune] [(<group> | <remote>)...]")])]),e._v(" "),r("li",[r("code",[e._v("git remote show <name>")])])]),e._v(" "),r("h4",{attrs:{id:"parameters"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Parameter")]),e._v(" "),r("th",[e._v("Details")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("-v, --verbose")]),e._v(" "),r("td",[e._v("Run verbosely.")])]),e._v(" "),r("tr",[r("td",[e._v("-m "),r("master")],1),e._v(" "),r("td",[e._v("Sets head to remote's "),r("master",[e._v(" branch")])],1)]),e._v(" "),r("tr",[r("td",[e._v("--mirror=fetch")]),e._v(" "),r("td",[e._v("Refs will not be stored in refs/remotes namespace, but instead will be mirrored in the local repo")])]),e._v(" "),r("tr",[r("td",[e._v("--mirror=push")]),e._v(" "),r("td",[r("code",[e._v("git push")]),e._v(" will behave as if --mirror was passed")])]),e._v(" "),r("tr",[r("td",[e._v("--no-tags")]),e._v(" "),r("td",[r("code",[e._v("git fetch <name>")]),e._v(" does not import tags from the remote repo")])]),e._v(" "),r("tr",[r("td",[e._v("-t "),r("branch")],1),e._v(" "),r("td",[e._v("Specifies the remote to track "),r("strong",[e._v("only")]),e._v(" "),r("branch")],1)]),e._v(" "),r("tr",[r("td",[e._v("-f")]),e._v(" "),r("td",[r("code",[e._v("git fetch <name>")]),e._v(" is run immediately after remote is set up")])]),e._v(" "),r("tr",[r("td",[e._v("--tags")]),e._v(" "),r("td",[r("code",[e._v("git fetch <name>")]),e._v(" imports every tag from the remote repo")])]),e._v(" "),r("tr",[r("td",[e._v("-a, --auto")]),e._v(" "),r("td",[e._v("The symbolic-ref's HEAD is set to the same branch as the remote's HEAD")])]),e._v(" "),r("tr",[r("td",[e._v("-d, --delete")]),e._v(" "),r("td",[e._v("All listed refs are deleted from the remote repository")])]),e._v(" "),r("tr",[r("td",[e._v("--add")]),e._v(" "),r("td",[e._v("Adds "),r("name",[e._v(" to list of currently tracked branches (set-branches)")])],1)]),e._v(" "),r("tr",[r("td",[e._v("--add")]),e._v(" "),r("td",[e._v("Instead of changing some URL, new URL is added (set-url)")])]),e._v(" "),r("tr",[r("td",[e._v("--all")]),e._v(" "),r("td",[e._v("Push all branches.")])]),e._v(" "),r("tr",[r("td",[e._v("--delete")]),e._v(" "),r("td",[e._v("All urls matching "),r("url",[e._v(" are deleted. (set-url)")])],1)]),e._v(" "),r("tr",[r("td",[e._v("--push")]),e._v(" "),r("td",[e._v("Push URLS are manipulated instead of fetch URLS")])]),e._v(" "),r("tr",[r("td",[e._v("-n")]),e._v(" "),r("td",[e._v("The remote heads are not queried first with "),r("code",[e._v("git ls-remote <name>")]),e._v(", cached information is used instead")])]),e._v(" "),r("tr",[r("td",[e._v("--dry-run")]),e._v(" "),r("td",[e._v("report what branches will be pruned, but do not actually prune them")])]),e._v(" "),r("tr",[r("td",[e._v("--prune")]),e._v(" "),r("td",[e._v("Remove remote branches that don't have a local counterpart")])])])])])}),[],!1,null,null,null);t.default=o.exports}}]);