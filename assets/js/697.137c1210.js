(window.webpackJsonp=window.webpackJsonp||[]).push([[697],{1044:function(e,t,s){"use strict";s.r(t);var n=s(19),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"recursive-mutex"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#recursive-mutex"}},[e._v("#")]),e._v(" Recursive Mutex")]),e._v(" "),s("h2",{attrs:{id:"std-recursive-mutex"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#std-recursive-mutex"}},[e._v("#")]),e._v(" std::recursive_mutex")]),e._v(" "),s("p",[e._v("Recursive mutex allows the same thread to recursively lock a resource - up to an unspecified limit.")]),e._v(" "),s("p",[e._v("There are very few real-word justifications for this. Certain complex implementations might need to call an overloaded copy of a function without releasing the lock.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("\n   std::atomic_int temp{0};\n    std::recursive_mutex _mutex;\n    \n    //launch_deferred launches asynchronous tasks on the same thread id\n\n    auto future1 = std::async(\n                std::launch::deferred,\n                [&]()\n                {\n                    std::cout << std::this_thread::get_id() << std::endl;\n\n                    std::this_thread::sleep_for(std::chrono::seconds(3));\n                    std::unique_lock<std::recursive_mutex> lock( _mutex);\n                    temp=0;\n                    \n                });\n\n    auto future2 = std::async(\n                std::launch::deferred,\n                [&]()\n                {\n                    std::cout << std::this_thread::get_id() << std::endl;\n                    while ( true )\n                    {\n                        std::this_thread::sleep_for(std::chrono::milliseconds(1));\n                        std::unique_lock<std::recursive_mutex> lock( _mutex, std::try_to_lock);\n                        if ( temp < INT_MAX )\n                             temp++;\n\n                        cout << temp << endl;\n                        \n                    }\n                });\n    future1.get();\n    future2.get();\n\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);