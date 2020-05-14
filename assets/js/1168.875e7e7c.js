(window.webpackJsonp=window.webpackJsonp||[]).push([[1168],{1514:function(a,e,s){"use strict";s.r(e);var t=s(19),n=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"cabal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cabal"}},[a._v("#")]),a._v(" Cabal")]),a._v(" "),s("h2",{attrs:{id:"working-with-sandboxes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#working-with-sandboxes"}},[a._v("#")]),a._v(" Working with sandboxes")]),a._v(" "),s("p",[a._v("A Haskell project can either use the system wide packages or use a sandbox. A sandbox is an isolated package database and can prevent dependency conflicts, e. g. if multiple Haskell projects use different versions of a package.")]),a._v(" "),s("p",[a._v("To initialize a sandbox for a Haskell package go to its directory and run:")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("cabal")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("sandbox")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("init")]),a._v("\n\n")])])]),s("p",[a._v("Now packages can be installed by simply running "),s("code",[a._v("cabal install")]),a._v(".")]),a._v(" "),s("p",[a._v("Listing packages in a sandbox:")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("cabal")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("sandbox")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("hc")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("pkg")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("list")]),a._v("\n\n")])])]),s("p",[a._v("Deleting a sandbox:")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("cabal")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("sandbox")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("delete")]),a._v("\n\n")])])]),s("p",[a._v("Add local dependency:")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("cabal")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("sandbox")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("add")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("source")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("path")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("to")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("dependency")]),a._v("\n\n")])])]),s("h2",{attrs:{id:"install-packages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-packages"}},[a._v("#")]),a._v(" Install packages")]),a._v(" "),s("p",[a._v("To install a new package, e.g. aeson:")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("cabal")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("aeson")]),a._v("\n\n")])])]),s("h4",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[a._v("#")]),a._v(" Syntax")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("cabal "),s("command",[a._v(" where "),s("command",[a._v(" is one of:\n"),s("li",[s("strong",[a._v("[global]")]),a._v(" "),s("ul",[s("li",[a._v("update\n"),s("ul")])])])])],1)],1)]),a._v(" "),s("li",[s("p",[a._v("Updates list of known packages")])]),a._v(" "),s("li",[s("p",[a._v("Install packages")])]),a._v(" "),s("li",[s("p",[a._v("Help about commands")])]),a._v(" "),s("li",[s("p",[a._v("Display detailed information about a particular package")])]),a._v(" "),s("li",[s("p",[a._v("List packages matching a search string")])]),a._v(" "),s("li",[s("p",[a._v("Downloads packages for later installation")])]),a._v(" "),s("li",[s("p",[a._v("Display and update the user's global cabal configuration")])])]),a._v(" "),s("li",[a._v("get\n"),s("ul",[a._v("\n- Download/Extract a package's source code (repository)\n"),s("ul",[s("li",[s("p",[a._v("Create a new .cabal package file (interactively)")])]),a._v(" "),s("li",[s("p",[a._v("Prepare to build the package")])]),a._v(" "),s("li",[s("p",[a._v("Compile all/specific components")])]),a._v(" "),s("li",[s("p",[a._v("Clean up after a build")])]),a._v(" "),s("li",[s("p",[a._v("Builds and runs an executable")])]),a._v(" "),s("li",[s("p",[a._v("Open an interpreter session for the given component")])]),a._v(" "),s("li",[s("p",[a._v("Run all/specific tests in the test suite")])]),a._v(" "),s("li",[s("p",[a._v("Run all/specific benchmarks")])]),a._v(" "),s("li",[s("p",[a._v("Check the package for common mistakes")])]),a._v(" "),s("li",[s("p",[a._v("Generate a source distribution file (.tar.gz)")])]),a._v(" "),s("li",[s("p",[a._v("Uploads source packages or documentation to Hackage")])]),a._v(" "),s("li",[s("p",[a._v("Upload build reports to a remote server")])]),a._v(" "),s("li",[s("p",[a._v("Freeze dependencies")])]),a._v(" "),s("li",[s("p",[a._v("Generate dependency bounds")])]),a._v(" "),s("li",[s("p",[a._v("Generate Haddock HTML documentation")])]),a._v(" "),s("li",[s("p",[a._v("Generate HsColour colourised code, in HTML format")])]),a._v(" "),s("li",[s("p",[a._v("Copy the files into the install locations")])]),a._v(" "),s("li",[s("p",[a._v("Register this package with the compiler")])])]),a._v(" "),s("li",[a._v("sandbox\n"),s("ul",[s("li",[a._v("Create/modify/delete a sandbox\n"),s("ul",[a._v("\n- cabal sandbox init          [FLAGS]\n- cabal sandbox delete        [FLAGS]\n- cabal sandbox add-source    [FLAGS] PATHS\n- cabal sandbox delete-source [FLAGS] PATHS\n- cabal sandbox list-sources  [FLAGS]\n- cabal sandbox hc-pkg        [FLAGS] [--] COMMAND [--] [ARGS]\n"),s("ul",[s("li",[s("p",[a._v("Give a command access to the sandbox package repository")])]),a._v(" "),s("li",[s("p",[a._v("Open interpreter with access to sandbox packages")])])])])])])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);