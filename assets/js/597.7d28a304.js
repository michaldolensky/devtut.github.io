(window.webpackJsonp=window.webpackJsonp||[]).push([[597],{942:function(t,e,a){"use strict";a.r(e);var s=a(19),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"structure-padding-and-packing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#structure-padding-and-packing"}},[t._v("#")]),t._v(" Structure Padding and Packing")]),t._v(" "),a("p",[t._v("By default, C compilers lay out structures so that each member can be accessed fast, without incurring penalties for 'unaligned access, a problem with RISC machines such as the DEC Alpha, and some ARM CPUs.")]),t._v(" "),a("p",[t._v("Depending on the CPU architecture and the compiler, a structure may occupy more space in memory than the sum of the sizes of its component members. The compiler can add padding between members or at the end of the structure, but not at the beginning.")]),t._v(" "),a("p",[t._v("Packing overrides the default padding.")]),t._v(" "),a("h2",{attrs:{id:"packing-structures"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#packing-structures"}},[t._v("#")]),t._v(" Packing structures")]),t._v(" "),a("p",[t._v("By default structures are padded in C. If you want to avoid this behaviour, you have to explicitly request it. Under GCC it's "),a("code",[t._v("__attribute__((__packed__))")]),t._v(". Consider this example on a 64-bit machine:")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 8 bytes */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 1 byte  */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 8 bytes */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("The structure will be automatically padded to have"),a("code",[t._v("8-byte")]),t._v(" alignment and will look like this:")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 8 bytes */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 1 byte  */")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" pad"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 7 bytes added by compiler */")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 8 bytes */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("So "),a("code",[t._v("sizeof(struct foo)")]),t._v(" will give us "),a("code",[t._v("24")]),t._v(" instead of "),a("code",[t._v("17")]),t._v(".\nThis happened because of a 64 bit compiler read/write from/to Memory in 8 bytes of word in each step and obvious when try to write "),a("code",[t._v("char c;")]),t._v(" a one byte in memory a complete 8 bytes (i.e. word) fetched and consumes only first byte of it and its seven successive of bytes remains empty and not accessible for any read and write operation for structure padding.")]),t._v(" "),a("h3",{attrs:{id:"structure-packing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#structure-packing"}},[t._v("#")]),t._v(" Structure packing")]),t._v(" "),a("p",[t._v("But if you add the attribute "),a("code",[t._v("packed")]),t._v(", the compiler will not add padding:")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("__attribute__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__packed__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 8 bytes */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 1 byte  */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 8 bytes */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("Now "),a("code",[t._v("sizeof(struct foo)")]),t._v(" will return "),a("code",[t._v("17")]),t._v(".")]),t._v(" "),a("p",[t._v("Generally packed structures are used:")]),t._v(" "),a("ul",[a("li",[t._v("To save space.")]),t._v(" "),a("li",[t._v("To format a data structure to transmit over network without depending on each architecture alignment of each node of the network.")])]),t._v(" "),a("p",[t._v("It must be taken in consideration that some processors such as the ARM Cortex-M0 do not allow unaligned memory access; in such cases, structure packing can lead to "),a("strong",[t._v("undefined behaviour")]),t._v(" and can crash the CPU.")]),t._v(" "),a("h2",{attrs:{id:"structure-padding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#structure-padding"}},[t._v("#")]),t._v(" Structure padding")]),t._v(" "),a("p",[t._v("Suppose this "),a("code",[t._v("struct")]),t._v(" is defined and compiled with a 32 bit compiler:")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("test_32")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4 byte")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("short")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2 byte")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4 byte    ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" str_32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("We might expect this "),a("code",[t._v("struct")]),t._v(" to occupy only 10 bytes of memory, but by printing\n"),a("code",[t._v("sizeof(str_32)")]),t._v(" we see it uses 12 bytes.")]),t._v(" "),a("p",[t._v("This happened because the compiler aligns variables for fast access.  A common pattern is that when the base type occupies N bytes (where N is a power of 2 such as 1, 2, 4, 8, 16 — and seldom any bigger), the variable should be aligned on an N-byte boundary (a multiple of N bytes).")]),t._v(" "),a("p",[t._v("For the structure shown with "),a("code",[t._v("sizeof(int) == 4")]),t._v(" and "),a("code",[t._v("sizeof(short) == 2")]),t._v(", a common layout is:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("int a;")]),t._v(" stored at offset 0; size 4.")]),t._v(" "),a("li",[a("code",[t._v("short b;")]),t._v(" stored at offset 4; size 2.")]),t._v(" "),a("li",[t._v("unnamed padding at offset 6; size 2.")]),t._v(" "),a("li",[a("code",[t._v("int c;")]),t._v(" stored at offset 8; size 4.")])]),t._v(" "),a("p",[t._v("Thus "),a("code",[t._v("struct test_32")]),t._v(" occupies 12 bytes of memory.  In this example, there is no trailing padding.")]),t._v(" "),a("p",[t._v("The compiler will ensure that any "),a("code",[t._v("struct test_32")]),t._v(" variables are stored starting on a 4-byte boundary, so that the members within the structure will be properly aligned for fast access.  Memory allocation functions such as "),a("code",[t._v("malloc()")]),t._v(", "),a("code",[t._v("calloc()")]),t._v(" and "),a("code",[t._v("realloc()")]),t._v(" are required to ensure that the pointer returned is sufficiently well aligned for use with any data type, so dynamically allocated structures will be properly aligned too.")]),t._v(" "),a("p",[t._v("You can end up with odd situations such as on a 64-bit Intel x86_64 processor (e.g. Intel Core i7 — a Mac running macOS Sierra or Mac OS X), where when compiling in 32-bit mode, the compilers place "),a("code",[t._v("double")]),t._v(" aligned on a 4-byte boundary; but, on the same hardware, when compiling in 64-bit mode, the compilers place "),a("code",[t._v("double")]),t._v(" aligned on an 8-byte boundary.")]),t._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),a("p",[t._v("Eric Raymond has an article on "),a("a",{attrs:{href:"http://www.catb.org/esr/structure-packing/",target:"_blank",rel:"noopener noreferrer"}},[t._v("The Lost Art of C Structure Packing"),a("OutboundLink")],1),t._v(" which is useful reading.")])])}),[],!1,null,null,null);e.default=n.exports}}]);