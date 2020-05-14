(window.webpackJsonp=window.webpackJsonp||[]).push([[2389],{2736:function(e,t,r){"use strict";r.r(t);var a=r(19),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"installation-of-perl"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#installation-of-perl"}},[e._v("#")]),e._v(" Installation of Perl")]),e._v(" "),r("p",[e._v("I'm going to begin this with the process in Ubuntu, then in OS X and finally in Windows. I haven't tested it on all perl versions, but it should be a similar process.")]),e._v(" "),r("p",[e._v("Use "),r("a",{attrs:{href:"https://perlbrew.pl",target:"_blank",rel:"noopener noreferrer"}},[e._v("Perlbrew"),r("OutboundLink")],1),e._v(" if you like to switch easily beween different versions of Perl.")]),e._v(" "),r("p",[e._v("I want to state that this tutorial is about Perl in it's open-source version. There are other versions like "),r("code",[e._v("activeperl")]),e._v(" which its advantages and disadvantages, that are not part of this tutorial.")]),e._v(" "),r("h2",{attrs:{id:"linux"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[e._v("#")]),e._v(" Linux")]),e._v(" "),r("p",[e._v("There is more than one way to do it:")]),e._v(" "),r("li",[e._v("\nUsing the package manager:\n"),r("div",{staticClass:"language-perl extra-class"},[r("pre",{pre:!0,attrs:{class:"language-perl"}},[r("code",[e._v("sudo apt install perl\n\n")])])])]),e._v(" "),r("li",[e._v("\nInstalling from source:\n"),r("div",{staticClass:"language-perl extra-class"},[r("pre",{pre:!0,attrs:{class:"language-perl"}},[r("code",[e._v("wget http"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("//")]),e._v("www"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),e._v("cpan"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),e._v("org"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("src"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("5.0")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("perl"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("version"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),e._v("tar"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),e._v("gz\ntar "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("xzf perl"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("version"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),e._v("tar"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),e._v("gz\ncd perl"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("version\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("Configure "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("de\nmake\nmake test\nmake install\n\n")])])])]),e._v(" "),r("li",[e._v("\nInstalling in your $home directory (not sudo needed) with [Perlbrew](https://perlbrew.pl):\n"),r("div",{staticClass:"language-perl extra-class"},[r("pre",{pre:!0,attrs:{class:"language-perl"}},[r("code",[e._v("wget "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-O")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" https"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("//")]),e._v("install"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),e._v("perlbrew"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),e._v("pl "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" bash\n\n")])])]),r("p",[e._v("See also "),r("a",{attrs:{href:"http://stackoverflow.com/documentation/perl/9144/perlbrew#t=20170309214354041427",target:"_blank",rel:"noopener noreferrer"}},[e._v("Perlbrew"),r("OutboundLink")],1)])]),r("p"),e._v(" "),r("h2",{attrs:{id:"os-x"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#os-x"}},[e._v("#")]),e._v(" OS X")]),e._v(" "),r("p",[e._v("There are several options:")]),e._v(" "),r("li",[e._v("\n[Perlbrew](https://perlbrew.pl/):\n"),r("div",{staticClass:"language-perl extra-class"},[r("pre",{pre:!0,attrs:{class:"language-perl"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# You need to install Command Line Tools for Xcode  ")]),e._v("\ncurl "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("L https"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("//")]),e._v("install"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),e._v("perlbrew"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),e._v("pl "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" bash\n\n")])])])]),e._v(" "),r("li",[e._v("\n[Perlbrew](https://perlbrew.pl/) with thread support:\n"),r("div",{staticClass:"language-perl extra-class"},[r("pre",{pre:!0,attrs:{class:"language-perl"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# You need to install Command Line Tools for Xcode  ")]),e._v("\ncurl "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("L https"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("//")]),e._v("install"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),e._v("perlbrew"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),e._v("pl "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" bash\n\n")])])]),r("p",[e._v("After the install of perlbrew, if you want to install Perl with thread support, just run:")]),e._v(" "),r("div",{staticClass:"language-perl extra-class"},[r("pre",{pre:!0,attrs:{class:"language-perl"}},[r("code",[e._v("perlbrew install "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("v perl"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),r("span",{pre:!0,attrs:{class:"token vstring string"}},[e._v("5.26.0")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Dusethreads\n\n")])])])]),e._v(" "),r("li",[e._v("\nFrom source:\n"),r("div",{staticClass:"language-perl extra-class"},[r("pre",{pre:!0,attrs:{class:"language-perl"}},[r("code",[e._v("tar "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("xzf perl"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("version"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),e._v("tar"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),e._v("gz\ncd perl"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("version\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("Configure "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("de\nmake\nmake test\nmake install\n\n")])])])]),e._v(" "),r("h2",{attrs:{id:"windows"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[e._v("#")]),e._v(" Windows")]),e._v(" "),r("ul",[r("li",[e._v("As we said before, we go with the open-source version. For Windows you can choose "),r("code",[e._v("strawberry")]),e._v(" or "),r("code",[e._v("DWIM")]),e._v(". Here we cover the "),r("code",[e._v("strawberry")]),e._v(" version, since "),r("code",[e._v("DWIM")]),e._v(" is based on it. The easy way here is installing from the "),r("a",{attrs:{href:"http://strawberryperl.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("official executable"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("p",[e._v("See also "),r("a",{attrs:{href:"https://github.com/dnmfarrell/berrybrew",target:"_blank",rel:"noopener noreferrer"}},[e._v("berrybrew"),r("OutboundLink")],1),e._v(" - the perlbrew for Windows Strawberry Perl")])])}),[],!1,null,null,null);t.default=s.exports}}]);