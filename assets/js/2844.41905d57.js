(window.webpackJsonp=window.webpackJsonp||[]).push([[2844],{3193:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"working-around-the-global-interpreter-lock-gil"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#working-around-the-global-interpreter-lock-gil"}},[t._v("#")]),t._v(" Working around the Global Interpreter Lock (GIL)")]),t._v(" "),a("h2",{attrs:{id:"multiprocessing-pool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multiprocessing-pool"}},[t._v("#")]),t._v(" Multiprocessing.Pool")]),t._v(" "),a("p",[t._v('The simple answer, when asking how to use threads in Python is: "Don\'t.  Use processes, instead."  The multiprocessing module lets you create processes with similar syntax to creating threads, but I prefer using their convenient Pool object.')]),t._v(" "),a("p",[t._v("Using "),a("a",{attrs:{href:"http://www.dabeaz.com/GIL/gilvis/measure2.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("the code that David Beazley first used to show the dangers of threads against the GIL"),a("OutboundLink")],1),t._v(", we'll rewrite it using "),a("a",{attrs:{href:"https://docs.python.org/3/library/multiprocessing.html#using-a-pool-of-workers",target:"_blank",rel:"noopener noreferrer"}},[t._v("multiprocessing.Pool"),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("h3",{attrs:{id:"david-beazley-s-code-that-showed-gil-threading-problems"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#david-beazley-s-code-that-showed-gil-threading-problems"}},[t._v("#")]),t._v(" David Beazley's code that showed GIL threading problems")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" threading "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Thread\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" time\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("countdown")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\nCOUNT "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000000")]),t._v("\n\nt1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Thread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("countdown"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("COUNT"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nt2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Thread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("countdown"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("COUNT"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nstart "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nt1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("t2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nt1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("t2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nend "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),t._v(" end"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("start\n\n")])])]),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" multiprocessing\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" time\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("countdown")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\nCOUNT "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000000")]),t._v("\n\nstart "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" multiprocessing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Pool "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" pool"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    pool"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("countdown"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("COUNT"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" COUNT"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    pool"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    pool"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nend "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("end"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("Instead of creating threads, this creates new processes.  Since each process is its own interpreter, there are no GIL collisions.  multiprocessing.Pool will open as many processes as there are cores on the machine, though in the example above, it would only need two.  In a real-world scenario, you want to design your list to have at least as much length as there are processors on your machine.  The Pool will run the function you tell it to run with each argument, up to the number of processes it creates.  When the function finishes, any remaining functions in the list will be run on that process.")]),t._v(" "),a("p",[t._v("I've found that, even using the "),a("code",[t._v("with")]),t._v(" statement, if you don't close and join the pool, the processes continue to exist.  To clean up resources, I always close and join my pools.")]),t._v(" "),a("h2",{attrs:{id:"cython-nogil"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cython-nogil"}},[t._v("#")]),t._v(" Cython nogil:")]),t._v(" "),a("p",[t._v("Cython is an alternative python interpreter.  It uses the GIL, but lets you disable it.  See "),a("a",{attrs:{href:"http://docs.cython.org/en/latest/src/userguide/external_C_code.html?highlight=nogil.html#acquiring-and-releasing-the-gil",target:"_blank",rel:"noopener noreferrer"}},[t._v("their documentation"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("As an example, using "),a("a",{attrs:{href:"http://www.dabeaz.com/GIL/gilvis/measure2.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("the code that David Beazley first used to show the dangers of threads against the GIL"),a("OutboundLink")],1),t._v(", we'll rewrite it using nogil:")]),t._v(" "),a("h3",{attrs:{id:"david-beazley-s-code-that-showed-gil-threading-problems-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#david-beazley-s-code-that-showed-gil-threading-problems-2"}},[t._v("#")]),t._v(" David Beazley's code that showed GIL threading problems")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" threading "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Thread\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" time\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("countdown")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\nCOUNT "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000000")]),t._v("\n\nt1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Thread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("countdown"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("COUNT"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nt2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Thread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("countdown"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("COUNT"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nstart "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nt1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("t2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nt1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("t2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nend "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),t._v(" end"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("start\n\n")])])]),a("h3",{attrs:{id:"re-written-using-nogil-only-works-in-cython"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#re-written-using-nogil-only-works-in-cython"}},[t._v("#")]),t._v(" Re-written using nogil (ONLY WORKS IN CYTHON):")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" threading "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Thread\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" time\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("countdown")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\nCOUNT "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000000")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" nogil"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    t1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Thread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("countdown"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("COUNT"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    t2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Thread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("countdown"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("COUNT"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    start "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    t1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("t2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    t1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("t2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \nend "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),t._v(" end"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("start\n\n")])])]),a("p",[t._v("It's that simple, as long as you're using cython.  Note that the documentation says you must make sure not to change any python objects:")]),t._v(" "),a("blockquote"),t._v(" "),a("p",[t._v("Code in the body of the statement must not manipulate Python objects\nin any way, and must not call anything that manipulates Python objects\nwithout first re-acquiring the GIL. Cython currently does not check\nthis.")]),t._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),a("h3",{attrs:{id:"why-is-there-a-gil"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-is-there-a-gil"}},[t._v("#")]),t._v(" Why is there a GIL?")]),t._v(" "),a("p",[t._v("Short version: the GIL ensures that no matter how many processors and threads you have, "),a("em",[t._v("only one thread of a python interpreter will run at one time.")])]),t._v(" "),a("p",[t._v("This has a lot of ease-of-use benefits, but also has a lot of negative benefits as well.")]),t._v(" "),a("p",[t._v("Note that a GIL is not a requirment of the Python language.  Consequently, you can't access the GIL directly from standard python code.  Not all implementations of Python use a GIL.")]),t._v(" "),a("p",[a("strong",[t._v("Interpreters that have a GIL:")]),t._v(" CPython, PyPy, Cython (but you can disable the GIL with "),a("code",[t._v("nogil")]),t._v(")")]),t._v(" "),a("p",[a("strong",[t._v("Interpreters that do not have a GIL:")]),t._v(" Jython, IronPython")]),t._v(" "),a("h3",{attrs:{id:"details-on-how-the-gil-operates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#details-on-how-the-gil-operates"}},[t._v("#")]),t._v(" Details on how the GIL operates:")]),t._v(" "),a("p",[t._v("CPython automatically releases the GIL when a thread performs an I/O operation.  Image processing libraries and numpy number crunching operations release the GIL before doing their processing.\n")]),a("h3",{attrs:{id:"benefits-of-the-gil"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#benefits-of-the-gil"}},[t._v("#")]),t._v(" Benefits of the GIL")]),t._v(" "),a("ul",[a("li",[t._v("Garbage collection - thread-safe reference counts must be modified while the GIL is locked.  "),a("em",[t._v("In CPython, all of garbarge collection is tied to the GIL.")]),t._v("  This is a big one; see the python.org wiki article about the GIL (listed in References, below) for details about what must still be functional if one wanted to remove the GIL.")]),t._v(" "),a("li",[t._v("Ease for programmers dealing with the GIL - locking everything is simplistic, but easy to code to")]),t._v(" "),a("li",[t._v("Eases the import of modules from other languages")])]),t._v(" "),a("h3",{attrs:{id:"consequences-of-the-gil"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consequences-of-the-gil"}},[t._v("#")]),t._v(" Consequences of the GIL")]),t._v(" "),a("p",[a("a",{staticClass:"remarks-subsection-anchor",attrs:{name:"remarks-references:-4"}})]),a("h3",[t._v("References:")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://wiki.python.org/moin/GlobalInterpreterLock",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki.python.org/moin/GlobalInterpreterLock"),a("OutboundLink")],1),t._v(" - quick summary of what it does, fine details on all the benefits")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://programmers.stackexchange.com/questions/186889/why-was-python-written-with-the-gil",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://programmers.stackexchange.com/questions/186889/why-was-python-written-with-the-gil"),a("OutboundLink")],1),t._v(" - clearly written summary")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.dabeaz.com/python/UnderstandingGIL.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.dabeaz.com/python/UnderstandingGIL.pdf"),a("OutboundLink")],1),t._v(" - how the GIL works and why it slows down on multiple cores")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.dabeaz.com/GIL/gilvis/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.dabeaz.com/GIL/gilvis/index.html"),a("OutboundLink")],1),t._v(" - visualization of the data showing how the GIL locks up threads")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://jeffknupp.com/blog/2012/03/31/pythons-hardest-problem/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://jeffknupp.com/blog/2012/03/31/pythons-hardest-problem/"),a("OutboundLink")],1),t._v(" - simple to understand history of the  GIL problem")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://jeffknupp.com/blog/2013/06/30/pythons-hardest-problem-revisited/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://jeffknupp.com/blog/2013/06/30/pythons-hardest-problem-revisited/"),a("OutboundLink")],1),t._v(" - details on ways to work around the GIL's limitations")])])}),[],!1,null,null,null);s.default=e.exports}}]);