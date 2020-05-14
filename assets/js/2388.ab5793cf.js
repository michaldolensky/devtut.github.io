(window.webpackJsonp=window.webpackJsonp||[]).push([[2388],{2734:function(a,e,t){"use strict";t.r(e);var s=t(19),n=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"install-perl-modules-via-cpan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-perl-modules-via-cpan"}},[a._v("#")]),a._v(" Install Perl modules via CPAN")]),a._v(" "),t("h2",{attrs:{id:"installing-modules-manually"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing-modules-manually"}},[a._v("#")]),a._v(" Installing modules manually")]),a._v(" "),t("p",[a._v("If you don't have permissions to install perl modules, you may still install them manually, indicating a custom path where you've got writing permissions.")]),a._v(" "),t("p",[a._v("Fist, download and unzip module archive:")]),a._v(" "),t("div",{staticClass:"language-perl extra-class"},[t("pre",{pre:!0,attrs:{class:"language-perl"}},[t("code",[a._v("wget module"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(".")]),a._v("tar"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(".")]),a._v("gz\ntar "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("xzf module"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(".")]),a._v("tar"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(".")]),a._v("gz\ncd module\n\n")])])]),t("p",[a._v("Then, if the module distribution contains a "),t("code",[a._v("Makefile.PL")]),a._v(" file, run:")]),a._v(" "),t("div",{staticClass:"language-perl extra-class"},[t("pre",{pre:!0,attrs:{class:"language-perl"}},[t("code",[a._v("perl Makefile"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(".")]),a._v("PL INSTALL_BASE"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("perl\nmake\nmake test\nmake install\n\n")])])]),t("p",[a._v("or if you have "),t("code",[a._v("Build.PL")]),a._v(" file instead of a "),t("code",[a._v("Makefile.PL")]),a._v(":")]),a._v(" "),t("div",{staticClass:"language-perl extra-class"},[t("pre",{pre:!0,attrs:{class:"language-perl"}},[t("code",[a._v("perl Build"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(".")]),a._v("PL "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("install_base "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("perl\nperl Build\nperl Build test\nperl Build install\n\n")])])]),t("p",[a._v("You also have to include the module path in "),t("code",[a._v("PERL5LIB")]),a._v(" environment variable in order to use it in your code:")]),a._v(" "),t("div",{staticClass:"language-perl extra-class"},[t("pre",{pre:!0,attrs:{class:"language-perl"}},[t("code",[a._v("export PERL5LIB"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("perl\n\n")])])]),t("h2",{attrs:{id:"cpanminus-the-lightweight-configuration-free-replacement-for-cpan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cpanminus-the-lightweight-configuration-free-replacement-for-cpan"}},[a._v("#")]),a._v(" cpanminus, the lightweight configuration-free replacement for cpan")]),a._v(" "),t("p",[t("strong",[a._v("Usage")])]),a._v(" "),t("p",[a._v("To install a module (assuming "),t("code",[a._v("cpanm")]),a._v(" is already installed):")]),a._v(" "),t("div",{staticClass:"language-perl extra-class"},[t("pre",{pre:!0,attrs:{class:"language-perl"}},[t("code",[a._v("cpanm Data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("Section\n\n")])])]),t("p",[t("code",[a._v("cpanm")]),a._v(' ("cpanminus") strives to be less verbose than '),t("code",[a._v("cpan")]),a._v(' but still captures all of the installation information in a log file in case it is needed. It also handles many "interactive questions" for you, whereas '),t("code",[a._v("cpan")]),a._v(" doesn't.")]),a._v(" "),t("p",[t("code",[a._v("cpanm")]),a._v(" is also popular for installing dependencies of a project from, e.g., GitHub.  Typical use is to first "),t("code",[a._v("cd")]),a._v(" into the project's root, then run")]),a._v(" "),t("div",{staticClass:"language-perl extra-class"},[t("pre",{pre:!0,attrs:{class:"language-perl"}},[t("code",[a._v("cpanm "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("installdeps "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(".")]),a._v("\n\n")])])]),t("p",[a._v("With "),t("code",[a._v("--installdeps")]),a._v(" it will:")]),a._v(" "),t("li",[a._v("Scan and install **configure_requires** dependencies from either\n"),t("ul",[a._v("\n1. META.json\n1. META.yml (if META.json is missing)\n")])]),a._v("\n1. Build the project (equivalent to `perl Build.PL`), generating MYMETA files\n"),t("li",[a._v("Scan and install **requires** dependencies from either\n"),t("ul",[a._v("\n1. MYMETA.json\n1. MYMETA.yml (if MYMETA.json is missing)\n")])]),a._v(" "),t("ul",[t("li",[a._v("MYMETA.json")]),a._v(" "),t("li",[a._v("MYMETA.yml (if MYMETA.json is missing)")])]),a._v(" "),t("p",[a._v("To specify the file 'some.cpanfile', containing the dependencies, run:")]),a._v(" "),t("div",{staticClass:"language-perl extra-class"},[t("pre",{pre:!0,attrs:{class:"language-perl"}},[t("code",[a._v("cpanm "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("installdeps "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("cpanfile some"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(".")]),a._v("cpanfile "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(".")]),a._v("\n\n")])])]),t("p",[t("strong",[t("code",[a._v("cpanm")]),a._v(" Installation")])]),a._v(" "),t("p",[a._v("There are "),t("a",{attrs:{href:"https://metacpan.org/pod/App::cpanminus#INSTALLATION",target:"_blank",rel:"noopener noreferrer"}},[a._v("several ways to install it"),t("OutboundLink")],1),a._v(". Here's installation via "),t("code",[a._v("cpan")]),a._v(":")]),a._v(" "),t("div",{staticClass:"language-perl extra-class"},[t("pre",{pre:!0,attrs:{class:"language-perl"}},[t("code",[a._v("cpan App"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("cpanminus\n\n")])])]),t("p",[t("strong",[t("code",[a._v("cpanm")]),a._v(" Configuration")])]),a._v(" "),t("p",[a._v("There is "),t("strong",[a._v("no")]),a._v(" config file for "),t("code",[a._v("cpanm")]),a._v(".  Rather, it relies on the following environment variables for its configuration:")]),a._v(" "),t("li",[a._v("`PERL_CPANM_OPT` (General cpanm command line options)\n"),t("ul",[a._v('\n- `export PERL_CPANM_OPT="--prompt"` # in .bashrc, to enable prompting, e.g.\n- `setenv PERL_CPANM_OPT "--prompt"` # in .tcshrc\n'),t("h2",{attrs:{id:"run-perl-cpan-in-your-terminal-mac-and-linux-or-command-prompt-windows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run-perl-cpan-in-your-terminal-mac-and-linux-or-command-prompt-windows"}},[a._v("#")]),a._v(" Run Perl CPAN in your terminal (Mac and Linux) or command prompt (Windows)")]),a._v(" "),t("h3",{attrs:{id:"command-line"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#command-line"}},[a._v("#")]),a._v(" Command line")]),a._v(" "),t("p",[a._v("You can use "),t("code",[a._v("cpan")]),a._v(" to install modules directly from the command line:")]),a._v(" "),t("div",{staticClass:"language-perl extra-class"},[t("pre",{pre:!0,attrs:{class:"language-perl"}},[t("code",[a._v("cpan install DBI\n\n")])])]),t("p",[a._v("This would be followed by possibly many pages of output describing exactly what it is doing to install the module. Depending on the modules being installed, it may pause and ask you questions.")]),a._v(" "),t("h3",{attrs:{id:"interactive-shell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#interactive-shell"}},[a._v("#")]),a._v(" Interactive Shell")]),a._v(" "),t("p",[a._v('You can also enter a "shell" thus:')]),a._v(" "),t("div",{staticClass:"language-perl extra-class"},[t("pre",{pre:!0,attrs:{class:"language-perl"}},[t("code",[a._v("perl "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("MCPAN "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"shell"')]),a._v("\n\n")])])]),t("p",[a._v("It will produce output as below:")]),a._v(" "),t("div",{staticClass:"language-perl extra-class"},[t("pre",{pre:!0,attrs:{class:"language-perl"}},[t("code",[a._v("Terminal does "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("not")]),a._v(" support AddHistory"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(".")]),a._v("\n\ncpan shell "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v(" CPAN exploration "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("and")]),a._v(" modules installation "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token vstring string"}},[a._v("v2.00")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nEnter "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'h'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" help"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(".")]),a._v("\n\ncpan"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n")])])]),t("p",[a._v("Then you can install the modules which you want by the easy command "),t("code",[a._v("install <module>")]),a._v(".")]),a._v(" "),t("p",[a._v("Example: "),t("code",[a._v("cpan[1]>")]),a._v(" "),t("code",[a._v("install DBI")])]),a._v(" "),t("p",[a._v("After installing successfully, type "),t("code",[a._v("exit")]),a._v(" to quit.")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);