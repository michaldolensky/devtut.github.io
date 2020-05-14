(window.webpackJsonp=window.webpackJsonp||[]).push([[2950],{3297:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"rprofile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rprofile"}},[t._v("#")]),t._v(" .Rprofile")]),t._v(" "),a("h2",{attrs:{id:"rprofile-the-first-chunk-of-code-executed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rprofile-the-first-chunk-of-code-executed"}},[t._v("#")]),t._v(" .Rprofile - the first chunk of code executed")]),t._v(" "),a("p",[a("code",[t._v(".Rprofile")]),t._v(" is a file containing R code that is executed when you launch R from the directory containing the "),a("code",[t._v(".Rprofile")]),t._v(" file. The similarly named "),a("code",[t._v("Rprofile.site")]),t._v(", located in R's home directory, is executed by default every time you load R from any directory. "),a("code",[t._v("Rprofile.site")]),t._v(" and to a greater extend "),a("code",[t._v(".Rprofile")]),t._v(" can be used to initialize an R session with personal preferences and various utility functions that you have defined.")]),t._v(" "),a("blockquote"),t._v(" "),a("p",[t._v("Important note: if you use RStudio, you can have a separate "),a("code",[t._v(".Rprofile")]),t._v(" in every RStudio project directory.")]),t._v(" "),a("p",[t._v("Here are some examples of code that you might include in an .Rprofile file.")]),t._v(" "),a("h3",{attrs:{id:"setting-your-r-home-directory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-your-r-home-directory"}},[t._v("#")]),t._v(" Setting your R home directory")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# set R_home")]),t._v("\nSys.setenv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("R_USER"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"c:/R_home"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# just an example directory")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# but don't confuse this with the $R_HOME environment variable.")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"setting-page-size-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-page-size-options"}},[t._v("#")]),t._v(" Setting page size options")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("papersize"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a4"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\noptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("editor"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"notepad"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\noptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pager"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"internal"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"set-the-default-help-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-the-default-help-type"}},[t._v("#")]),t._v(" set the default help type")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("help_type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"html"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"set-a-site-library"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-a-site-library"}},[t._v("#")]),t._v(" set a site library")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v(".Library.site "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" file.path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("chartr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\\\"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" R.home"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"site-library"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"set-a-cran-mirror"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-a-cran-mirror"}},[t._v("#")]),t._v(" Set a CRAN mirror")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("local"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" getOption"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"repos"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CRAN"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://my.local.cran"')]),t._v("\n    options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("repos"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"setting-the-location-of-your-library"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-the-location-of-your-library"}},[t._v("#")]),t._v(" Setting the location of your library")]),t._v(" "),a("p",[t._v("This will allow you to not have to install all the packages again with each R version update.")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# library location")]),t._v("\n.libPaths"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"c:/R_home/Rpackages/win"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"custom-shortcuts-or-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-shortcuts-or-functions"}},[t._v("#")]),t._v(" Custom shortcuts or functions")]),t._v(" "),a("p",[t._v("Sometimes it is useful to have a shortcut for a long R expression. A common example of this setting an active binding to access the last top-level expression result without having to type out "),a("code",[t._v(".Last.value")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("makeActiveBinding"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(".Last.value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" .GlobalEnv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("Because .Rprofile is just an R file, it can contain any arbitrary R code.")]),t._v(" "),a("h3",{attrs:{id:"pre-loading-the-most-useful-packages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-loading-the-most-useful-packages"}},[t._v("#")]),t._v(" Pre-loading the most useful packages")]),t._v(" "),a("p",[t._v("This is bad practice and should generally be avoided because it separates package loading code from the scripts where those packages are actually used.")]),t._v(" "),a("h3",{attrs:{id:"see-also"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#see-also"}},[t._v("#")]),t._v(" See Also")]),t._v(" "),a("p",[t._v("See "),a("code",[t._v("help(Startup)")]),t._v(" for all the different startup scripts, and further aspects.  In particular, two system-wide "),a("code",[t._v("Profile")]),t._v(" files can be loaded as well.  The first, "),a("code",[t._v("Rprofile")]),t._v(",  may contain global settings, the other file "),a("code",[t._v("Profile.site")]),t._v(" may contain local choices the system administrator can make for all users.  Both files are found in the "),a("code",[t._v("${RHOME}/etc")]),t._v(" directory of the R installation.  This directory also contains global files "),a("code",[t._v("Renviron")]),t._v(" and "),a("code",[t._v("Renviron.site")]),t._v(" which both can be completemented with a local file "),a("code",[t._v("~/.Renviron")]),t._v(" in the user's home directory.")]),t._v(" "),a("h2",{attrs:{id:"rprofile-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rprofile-example"}},[t._v("#")]),t._v(" .Rprofile example")]),t._v(" "),a("h3",{attrs:{id:"startup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#startup"}},[t._v("#")]),t._v(" Startup")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Load library setwidth on start - to set the width automatically.")]),t._v("\n.First "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  library"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("setwidth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# If 256 color terminal - use library colorout.")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Sys.getenv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TERM"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token percent-operator operator"}},[t._v("%in%")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xterm-256color"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"screen-256color"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    library"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"colorout"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Select default CRAN mirror for package installation.")]),t._v("\noptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("repos"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CRAN"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://cran.gis-lab.info/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Print maximum 1000 elements.")]),t._v("\noptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("max.print"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# No scientific notation.")]),t._v("\noptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scipen"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# No graphics in menus.")]),t._v("\noptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("menu.graphics"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("FALSE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Auto-completion for package names.")]),t._v("\nutils"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("rc.settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ipck"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("TRUE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"custom-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-functions"}},[t._v("#")]),t._v(" Custom Functions")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Invisible environment to mask defined functions")]),t._v("\n.env "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new.env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Quit R without asking to save.")]),t._v("\n.env"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("q "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("save"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"no"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token ellipsis"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  quit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("save"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("save"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token ellipsis"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Attach the environment to enable functions.")]),t._v("\nattach"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(".env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" warn.conflicts"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("FALSE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),a("p",[t._v("There is a nice chapter on the matter in "),a("a",{attrs:{href:"https://bookdown.org/csgillespie/efficientR/set-up.html#r-startup",target:"_blank",rel:"noopener noreferrer"}},[t._v("Efficient R programming"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);