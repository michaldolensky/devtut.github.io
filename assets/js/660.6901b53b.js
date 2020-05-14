(window.webpackJsonp=window.webpackJsonp||[]).push([[660],{1005:function(e,t,s){"use strict";s.r(t);var n=s(19),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"implementation-defined-behavior"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implementation-defined-behavior"}},[e._v("#")]),e._v(" Implementation-defined behavior")]),e._v(" "),s("h2",{attrs:{id:"size-of-integral-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#size-of-integral-types"}},[e._v("#")]),e._v(" Size of integral types")]),e._v(" "),s("p",[e._v("The following types are defined as "),s("strong",[e._v("integral types")]),e._v(":")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("char")])]),e._v(" "),s("li",[e._v("Signed integer types")]),e._v(" "),s("li",[e._v("Unsigned integer types")]),e._v(" "),s("li",[s("code",[e._v("char16_t")]),e._v(" and "),s("code",[e._v("char32_t")])]),e._v(" "),s("li",[s("code",[e._v("bool")])]),e._v(" "),s("li",[s("code",[e._v("wchar_t")])])]),e._v(" "),s("p",[e._v("With the exception of "),s("code",[e._v("sizeof(char)")]),e._v(" / "),s("code",[e._v("sizeof(signed char)")]),e._v(" / "),s("code",[e._v("sizeof(unsigned char)")]),e._v(", which is split between § 3.9.1.1 [basic.fundamental/1] and § 5.3.3.1 [expr.sizeof], and "),s("code",[e._v("sizeof(bool)")]),e._v(", which is entirely implementation-defined and has no minimum size, the minimum size requirements of these types are given in section § 3.9.1 [basic.fundamental] of the standard, and shall be detailed below.")]),e._v(" "),s("h3",{attrs:{id:"size-of-char"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#size-of-char"}},[e._v("#")]),e._v(" Size of "),s("code",[e._v("char")])]),e._v(" "),s("p",[e._v("All versions of the C++ standard specify, in § 5.3.3.1, that "),s("code",[e._v("sizeof")]),e._v(" yields "),s("code",[e._v("1")]),e._v(" for "),s("code",[e._v("unsigned char")]),e._v(", "),s("code",[e._v("signed char")]),e._v(", and "),s("code",[e._v("char")]),e._v(" (it is implementation defined whether the "),s("code",[e._v("char")]),e._v(" type is "),s("code",[e._v("signed")]),e._v(" or "),s("code",[e._v("unsigned")]),e._v(").")]),e._v(" "),s("p",[s("code",[e._v("char")]),e._v(" is large enough to represent 256 different values, to be suitable for storing UTF-8 code units.")]),e._v(" "),s("h3",{attrs:{id:"size-of-signed-and-unsigned-integer-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#size-of-signed-and-unsigned-integer-types"}},[e._v("#")]),e._v(" Size of signed and unsigned integer types")]),e._v(" "),s("p",[e._v("The standard specifies, in § 3.9.1.2, that in the list of "),s("strong",[e._v("standard signed integer types")]),e._v(", consisting of "),s("code",[e._v("signed char")]),e._v(", "),s("code",[e._v("short int")]),e._v(", "),s("code",[e._v("int")]),e._v(", "),s("code",[e._v("long int")]),e._v(", and "),s("code",[e._v("long long int")]),e._v(", each type will provide at least as much storage as those preceding it in the list.  Furthermore, as specified in § 3.9.1.3, each of these types has a corresponding "),s("strong",[e._v("standard unsigned integer type")]),e._v(", "),s("code",[e._v("unsigned char")]),e._v(", "),s("code",[e._v("unsigned short int")]),e._v(", "),s("code",[e._v("unsigned int")]),e._v(", "),s("code",[e._v("unsigned long int")]),e._v(", and "),s("code",[e._v("unsigned long long int")]),e._v(", which has the same size and alignment as its corresponding signed type.  Additionally, as specified in § 3.9.1.1, "),s("code",[e._v("char")]),e._v(" has the same size and alignment requirements as both "),s("code",[e._v("signed char")]),e._v(" and "),s("code",[e._v("unsigned char")]),e._v(".")]),e._v(" "),s("p",[e._v("Prior to C++11, "),s("code",[e._v("long long")]),e._v(" and "),s("code",[e._v("unsigned long long")]),e._v(" were not officially part of the C++ standard.  However, after their introduction to C, in C99, many compilers supported "),s("code",[e._v("long long")]),e._v(" as an "),s("strong",[e._v("extended signed integer type")]),e._v(", and "),s("code",[e._v("unsigned long long")]),e._v(" as an "),s("strong",[e._v("extended unsigned integer type")]),e._v(", with the same rules as the C types.")]),e._v(" "),s("p",[e._v("The standard thus guarantees that:")]),e._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("sizeof")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("char")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("sizeof")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("signed")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("char")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("sizeof")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("unsigned")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("char")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("sizeof")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("short")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("sizeof")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("unsigned")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("short")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("sizeof")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("sizeof")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("unsigned")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("sizeof")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("long")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("sizeof")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("unsigned")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("long")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n")])])]),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("sizeof")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("long")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("long")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("sizeof")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("unsigned")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("long")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("long")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n")])])]),s("p",[e._v("Specific minimum sizes for each type are not given by the standard.  Instead, each type has a minimum range of values it can support, which is, as specified in § 3.9.1.3, inherited from the C standard, in §5.2.4.2.1.  The minimum size of each type can be roughly inferred from this range, by determining the minimum number of bits required; note that for any given platform, any type's actual supported range may be larger than the minimum.  Note that for signed types, ranges correspond to one's complement, not the more commonly used two's complement; this is to allow a wider range of platforms to comply with the standard.")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th"),s("th",{attrs:{align:"left"}},[e._v("Type")]),e._v(" "),s("th",[e._v("Minimum range")]),s("th",{attrs:{align:"right"}},[e._v("Minimum bits required")])])]),e._v(" "),s("tbody",[s("tr",[s("td"),s("td",{attrs:{align:"left"}},[s("code",[e._v("signed char")])]),e._v(" "),s("td",[e._v("-127 to 127 (-(2"),s("sup",[e._v("7")]),e._v(" - 1) to (2"),s("sup",[e._v("7")]),e._v(" - 1))")]),s("td",{attrs:{align:"right"}},[e._v("8")])]),e._v(" "),s("tr",[s("td"),s("td",{attrs:{align:"left"}},[s("code",[e._v("unsigned char")])]),e._v(" "),s("td",[e._v("0 to 255 (0 to 2"),s("sup",[e._v("8")]),e._v(" - 1)")]),s("td",{attrs:{align:"right"}},[e._v("8")])]),e._v(" "),s("tr",[s("td"),s("td",{attrs:{align:"left"}},[s("code",[e._v("signed short")])]),e._v(" "),s("td",[e._v("-32,767 to 32,767 (-(2"),s("sup",[e._v("15")]),e._v(" - 1) to (2"),s("sup",[e._v("15")]),e._v(" - 1))")]),s("td",{attrs:{align:"right"}},[e._v("16")])]),e._v(" "),s("tr",[s("td"),s("td",{attrs:{align:"left"}},[s("code",[e._v("unsigned short")])]),e._v(" "),s("td",[e._v("0 to 65,535 (0 to 2"),s("sup",[e._v("16")]),e._v(" - 1)")]),s("td",{attrs:{align:"right"}},[e._v("16")])]),e._v(" "),s("tr",[s("td"),s("td",{attrs:{align:"left"}},[s("code",[e._v("signed int")])]),e._v(" "),s("td",[e._v("-32,767 to 32,767 (-(2"),s("sup",[e._v("15")]),e._v(" - 1) to (2"),s("sup",[e._v("15")]),e._v(" - 1))")]),s("td",{attrs:{align:"right"}},[e._v("16")])]),e._v(" "),s("tr",[s("td"),s("td",{attrs:{align:"left"}},[s("code",[e._v("unsigned int")])]),e._v(" "),s("td",[e._v("0 to 65,535 (0 to 2"),s("sup",[e._v("16")]),e._v(" - 1)")]),s("td",{attrs:{align:"right"}},[e._v("16")])]),e._v(" "),s("tr",[s("td"),s("td",{attrs:{align:"left"}},[s("code",[e._v("signed long")])]),e._v(" "),s("td",[e._v("-2,147,483,647 to 2,147,483,647 (-(2"),s("sup",[e._v("31")]),e._v(" - 1) to (2"),s("sup",[e._v("31")]),e._v(" - 1))")]),s("td",{attrs:{align:"right"}},[e._v("32")])]),e._v(" "),s("tr",[s("td"),s("td",{attrs:{align:"left"}},[s("code",[e._v("unsigned long")])]),e._v(" "),s("td",[e._v("0 to 4,294,967,295 (0 to 2"),s("sup",[e._v("32")]),e._v(" - 1)")]),s("td",{attrs:{align:"right"}},[e._v("32")])])])]),e._v(" "),s("table",[s("thead",[s("tr",[s("th"),s("th",{attrs:{align:"left"}},[e._v("Type")]),e._v(" "),s("th",[e._v("Minimum range")]),s("th",{attrs:{align:"right"}},[e._v("Minimum bits required")])])]),e._v(" "),s("tbody",[s("tr",[s("td"),s("td",{attrs:{align:"left"}},[s("code",[e._v("signed long long")])]),e._v(" "),s("td",[e._v("-9,223,372,036,854,775,807 to 9,223,372,036,854,775,807 (-(2"),s("sup",[e._v("63")]),e._v(" - 1) to (2"),s("sup",[e._v("63")]),e._v(" - 1))")]),s("td",{attrs:{align:"right"}},[e._v("64")])]),e._v(" "),s("tr",[s("td"),s("td",{attrs:{align:"left"}},[s("code",[e._v("unsigned long long")])]),e._v(" "),s("td",[e._v("0 to 18,446,744,073,709,551,615 (0 to 2"),s("sup",[e._v("64")]),e._v(" - 1)")]),s("td",{attrs:{align:"right"}},[e._v("64")])])])]),e._v(" "),s("p",[e._v("As each type is allowed to be greater than its minimum size requirement, types may differ in size between implementations.  The most notable example of this is with the 64-bit data models LP64 and LLP64, where LLP64 systems (such as 64-bit Windows) have 32-bit "),s("code",[e._v("ints")]),e._v(" and "),s("code",[e._v("long")]),e._v("s, and LP64 systems (such as 64-bit Linux) have 32-bit "),s("code",[e._v("int")]),e._v("s and 64-bit "),s("code",[e._v("long")]),e._v("s.  Due to this, integer types cannot be assumed to have a fixed width across all platforms.")]),e._v(" "),s("p",[e._v("If integer types with fixed width are required, use types from the "),s("a",{attrs:{href:"http://en.cppreference.com/w/cpp/header/cstdint",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("<cstdint>")]),s("OutboundLink")],1),e._v(" header, but note that the standard makes it optional for implementations to support the exact-width types "),s("code",[e._v("int8_t")]),e._v(", "),s("code",[e._v("int16_t")]),e._v(", "),s("code",[e._v("int32_t")]),e._v(", "),s("code",[e._v("int64_t")]),e._v(", "),s("code",[e._v("intptr_t")]),e._v(", "),s("code",[e._v("uint8_t")]),e._v(", "),s("code",[e._v("uint16_t")]),e._v(", "),s("code",[e._v("uint32_t")]),e._v(", "),s("code",[e._v("uint64_t")]),e._v(" and "),s("code",[e._v("uintptr_t")]),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"size-of-char16-t-and-char32-t"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#size-of-char16-t-and-char32-t"}},[e._v("#")]),e._v(" Size of "),s("code",[e._v("char16_t")]),e._v(" and "),s("code",[e._v("char32_t")])]),e._v(" "),s("p",[e._v("The sizes of "),s("code",[e._v("char16_t")]),e._v(" and "),s("code",[e._v("char32_t")]),e._v(" are implementation-defined, as specified in § 5.3.3.1, with the stipulations given in § 3.9.1.5:")]),e._v(" "),s("li",[e._v("\n`char16_t` is large enough to represent any UTF-16 code unit, and has the same size, signedness, and alignment as [`uint_least16_t`](http://en.cppreference.com/w/cpp/header/cstdint); it is thus required to be at least 16 bits in size.\n")]),e._v(" "),s("li",[e._v("\n`char32_t` is large enough to represent any UTF-32 code unit, and has the same size, signedness, and alignment as [`uint_least32_t`](http://en.cppreference.com/w/cpp/header/cstdint); it is thus required to be at least 32 bits in size.\n")]),e._v(" "),s("h3",{attrs:{id:"size-of-bool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#size-of-bool"}},[e._v("#")]),e._v(" Size of "),s("code",[e._v("bool")])]),e._v(" "),s("p",[e._v("The size of "),s("code",[e._v("bool")]),e._v(" is implementation defined, and may or may not be "),s("code",[e._v("1")]),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"size-of-wchar-t"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#size-of-wchar-t"}},[e._v("#")]),e._v(" Size of wchar_t")]),e._v(" "),s("p",[s("code",[e._v("wchar_t")]),e._v(", as specified in § 3.9.1.5, is a distinct type, whose range of values can represent every distinct code unit of the largest extended character set among the supported locales.  It has the same size, signedness, and alignment as one of the other integral types, which is known as its "),s("strong",[e._v("underlying type")]),e._v(".  This type's size is implementation-defined, as specified in § 5.3.3.1, and may be, for example, at least 8, 16, or 32 bits; if a system supports Unicode, for example, "),s("code",[e._v("wchar_t")]),e._v(" is required to be at least 32 bits (an exception to this rule is Windows, where "),s("code",[e._v("wchar_t")]),e._v(" is 16 bits for compatibility purposes).  It is inherited from the C90 standard, ISO 9899:1990 § 4.1.5, with only minor rewording.")]),e._v(" "),s("p",[e._v("Depending on the implementation, the size of "),s("code",[e._v("wchar_t")]),e._v(" is often, but not always, 8, 16, or 32 bits.  The most common examples of these are:")]),e._v(" "),s("ul",[s("li",[e._v("In Unix and Unix-like systems, "),s("code",[e._v("wchar_t")]),e._v(" is 32-bit, and is usually used for UTF-32.")]),e._v(" "),s("li",[e._v("In Windows, "),s("code",[e._v("wchar_t")]),e._v(" is 16-bit, and is used for UTF-16.")]),e._v(" "),s("li",[e._v("On a system which only has 8-bit support, "),s("code",[e._v("wchar_t")]),e._v(" is 8 bit.")])]),e._v(" "),s("p",[e._v("If Unicode support is desired, it is recommended to use "),s("code",[e._v("char")]),e._v(" for UTF-8, "),s("code",[e._v("char16_t")]),e._v(" for UTF-16, or "),s("code",[e._v("char32_t")]),e._v(" for UTF-32, instead of using "),s("code",[e._v("wchar_t")]),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"data-models"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data-models"}},[e._v("#")]),e._v(" Data Models")]),e._v(" "),s("p",[e._v("As mentioned above, the widths of integer types can differ between platforms.  The most common models are as follows, with sizes specified in bits:")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Model")]),e._v(" "),s("th",[s("code",[e._v("int")])]),e._v(" "),s("th",[s("code",[e._v("long")])]),e._v(" "),s("th",[e._v("pointer")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("LP32 (2/4/4)")]),e._v(" "),s("td",[e._v("16")]),e._v(" "),s("td",[e._v("32")]),e._v(" "),s("td",[e._v("32")])]),e._v(" "),s("tr",[s("td",[e._v("ILP32 (4/4/4)")]),e._v(" "),s("td",[e._v("32")]),e._v(" "),s("td",[e._v("32")]),e._v(" "),s("td",[e._v("32")])]),e._v(" "),s("tr",[s("td",[e._v("LLP64 (4/4/8)")]),e._v(" "),s("td",[e._v("32")]),e._v(" "),s("td",[e._v("32")]),e._v(" "),s("td",[e._v("64")])]),e._v(" "),s("tr",[s("td",[e._v("LP64 (4/8/8)")]),e._v(" "),s("td",[e._v("32")]),e._v(" "),s("td",[e._v("64")]),e._v(" "),s("td",[e._v("64")])])])]),e._v(" "),s("p",[e._v("Out of these models:")]),e._v(" "),s("ul",[s("li",[e._v("16-bit Windows used LP32.")]),e._v(" "),s("li",[e._v("32-bit *nix systems (Unix, Linux, Mac OSX, and other Unix-like OSes) and Windows use ILP32.")]),e._v(" "),s("li",[e._v("64-bit Windows uses LLP64.")]),e._v(" "),s("li",[e._v("64-bit *nix systems use LP64.")])]),e._v(" "),s("p",[e._v("Note, however, that these models aren't specifically mentioned in the standard itself.")]),e._v(" "),s("h2",{attrs:{id:"char-might-be-unsigned-or-signed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#char-might-be-unsigned-or-signed"}},[e._v("#")]),e._v(" Char might be unsigned or signed")]),e._v(" "),s("p",[e._v("The standard doesn't specify if "),s("code",[e._v("char")]),e._v(" should be signed or unsigned. Different compilers implement it differently, or might allow to change it using a command line switch.")]),e._v(" "),s("h2",{attrs:{id:"number-of-bits-in-a-byte"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#number-of-bits-in-a-byte"}},[e._v("#")]),e._v(" Number of bits in a byte")]),e._v(" "),s("p",[e._v("In C++, a "),s("strong",[e._v("byte")]),e._v(" is the space occupied by a "),s("code",[e._v("char")]),e._v(" object. The number of bits in a byte is given by "),s("code",[e._v("CHAR_BIT")]),e._v(", which is defined in "),s("code",[e._v("climits")]),e._v(" and required to be at least 8. While most modern systems have 8-bit bytes, and POSIX requires "),s("code",[e._v("CHAR_BIT")]),e._v(" to be exactly 8, there are some systems where "),s("code",[e._v("CHAR_BIT")]),e._v(" is greater than 8 i.e a single byte may be comprised of 8, 16, 32 or 64 bits.")]),e._v(" "),s("h2",{attrs:{id:"numeric-value-of-a-pointer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#numeric-value-of-a-pointer"}},[e._v("#")]),e._v(" Numeric value of a pointer")]),e._v(" "),s("p",[e._v("The result of casting a pointer to an integer using "),s("code",[e._v("reinterpret_cast")]),e._v(' is implementation-defined, but "... is intended to be unsurprising to those who know the addressing structure of the underlying machine."')]),e._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("42")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" p "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("long")]),e._v(" addr "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("reinterpret_cast")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("long")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nstd"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),e._v("cout "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<<")]),e._v(" addr "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<<")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// prints some numeric address,")]),e._v("\n                           "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// probably in the architecture's native address format")]),e._v("\n\n")])])]),s("p",[e._v("Likewise, the pointer obtained by conversion from an integer is also implementation-defined.")]),e._v(" "),s("p",[e._v("The right way to store a pointer as an integer is using the "),s("code",[e._v("uintptr_t")]),e._v(" or "),s("code",[e._v("intptr_t")]),e._v(" types:")]),e._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// `uintptr_t` was not in C++03. It's in C99, in <stdint.h>, as an optional type")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[e._v("#"),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("include")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("<stdint.h>")])]),e._v("\n\nuintptr_t uip"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n")])])]),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// There is an optional `std::uintptr_t` in C++11")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[e._v("#"),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("include")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("<cstdint>")])]),e._v("\n\nstd"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),e._v("uintptr_t uip"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n")])])]),s("p",[e._v("C++11 refers to C99 for the definition "),s("code",[e._v("uintptr_t")]),e._v(" (C99 standard, 6.3.2.3):")]),e._v(" "),s("blockquote"),e._v(" "),s("p",[e._v("an unsigned integer type with the property that any valid pointer to "),s("code",[e._v("void")]),e._v(" can be converted to this type, then converted back to pointer to "),s("code",[e._v("void")]),e._v(", and the result will compare equal to the original pointer.")]),e._v(" "),s("p",[e._v("While, for the majority of modern platforms, you can assume a flat address space and that arithmetic on "),s("code",[e._v("uintptr_t")]),e._v(" is equivalent to arithmetic on "),s("code",[e._v("char *")]),e._v(", it's entirely possible for an implementation to perform any transformation when casting "),s("code",[e._v("void *")]),e._v(" to "),s("code",[e._v("uintptr_t")]),e._v(" as long the transformation can be reversed when casting back from "),s("code",[e._v("uintptr_t")]),e._v(" to "),s("code",[e._v("void *")]),e._v(".")]),e._v(" "),s("p",[s("strong",[e._v("Technicalities")])]),e._v(" "),s("li",[e._v("\nOn XSI-conformant (X/Open System Interfaces) systems, `intptr_t` and `uintptr_t` types are required, otherwise they are **optional**.\n")]),e._v(" "),s("li",[e._v("\nWithin the meaning of the C standard, functions aren't objects; it isn't guaranteed by the C standard that `uintptr_t` can hold a function pointer. Anyway POSIX (2.12.3) conformance requires that:\n"),s("blockquote",[e._v("\nAll function pointer types shall have the same representation as the type pointer to void. Conversion of a function pointer to void * shall not alter the representation. A void * value resulting from such a conversion can be converted back to the original function pointer type, using an explicit cast, without loss of information.\n")])]),e._v(" "),s("li",[e._v("\nC99 §7.18.1:\n"),s("blockquote",[e._v("\nWhen typedef names differing only in the absence or presence of the initial u are defined, they shall denote corresponding signed and unsigned types as described in 6.2.5; an implementation providing one of these corresponding types shall also provide the other.\n")]),e._v("\n`uintptr_t` might make sense if you want to do things to the bits of the pointer that you can't do as sensibly with a signed integer.\n")]),e._v(" "),s("blockquote"),e._v(" "),s("p",[e._v("When typedef names differing only in the absence or presence of the initial u are defined, they shall denote corresponding signed and unsigned types as described in 6.2.5; an implementation providing one of these corresponding types shall also provide the other.")]),e._v(" "),s("h2",{attrs:{id:"ranges-of-numeric-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ranges-of-numeric-types"}},[e._v("#")]),e._v(" Ranges of numeric types")]),e._v(" "),s("p",[e._v("The ranges of the integer types are implementation-defined. The header "),s("code",[e._v("<limits>")]),e._v(" provides the "),s("code",[e._v("std::numeric_limits<T>")]),e._v(" template which provides the minimum and maximum values of all fundamental types. The values satisfy guarantees provided by the C standard through the "),s("code",[e._v("<climits>")]),e._v(" and (>= C++11) "),s("code",[e._v("<cinttypes>")]),e._v(" headers.")]),e._v(" "),s("ul",[s("li",[s("p",[s("code",[e._v("std::numeric_limits<signed char>::min()")]),e._v(" equals "),s("code",[e._v("SCHAR_MIN")]),e._v(", which is less than or equal to -127.")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("std::numeric_limits<signed char>::max()")]),e._v(" equals "),s("code",[e._v("SCHAR_MAX")]),e._v(", which is greater than or equal to 127.")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("std::numeric_limits<unsigned char>::max()")]),e._v(" equals "),s("code",[e._v("UCHAR_MAX")]),e._v(", which is greater than or equal to 255.")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("std::numeric_limits<short>::min()")]),e._v(" equals "),s("code",[e._v("SHRT_MIN")]),e._v(", which is less than or equal to -32767.")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("std::numeric_limits<short>::max()")]),e._v(" equals "),s("code",[e._v("SHRT_MAX")]),e._v(", which is greater than or equal to 32767.")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("std::numeric_limits<unsigned short>::max()")]),e._v(" equals "),s("code",[e._v("USHRT_MAX")]),e._v(", which is greater than or equal to 65535.")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("std::numeric_limits<int>::min()")]),e._v(" equals "),s("code",[e._v("INT_MIN")]),e._v(", which is less than or equal to -32767.")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("std::numeric_limits<int>::max()")]),e._v(" equals "),s("code",[e._v("INT_MAX")]),e._v(", which is greater than or equal to 32767.")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("std::numeric_limits<unsigned int>::max()")]),e._v(" equals "),s("code",[e._v("UINT_MAX")]),e._v(", which is greater than or equal to 65535.")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("std::numeric_limits<long>::min()")]),e._v(" equals "),s("code",[e._v("LONG_MIN")]),e._v(", which is less than or equal to -2147483647.")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("std::numeric_limits<long>::max()")]),e._v(" equals "),s("code",[e._v("LONG_MAX")]),e._v(", which is greater than or equal to 2147483647.")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("std::numeric_limits<unsigned long>::max()")]),e._v(" equals "),s("code",[e._v("ULONG_MAX")]),e._v(", which is greater than or equal to 4294967295.")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("std::numeric_limits<long long>::min()")]),e._v(" equals "),s("code",[e._v("LLONG_MIN")]),e._v(", which is less than or equal to -9223372036854775807.")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("std::numeric_limits<long long>::max()")]),e._v(" equals "),s("code",[e._v("LLONG_MAX")]),e._v(", which is greater than or equal to 9223372036854775807.")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("std::numeric_limits<unsigned long long>::max()")]),e._v(" equals "),s("code",[e._v("ULLONG_MAX")]),e._v(", which is greater than or equal to 18446744073709551615.")])])]),e._v(" "),s("p",[e._v("For floating-point types "),s("code",[e._v("T")]),e._v(", "),s("code",[e._v("max()")]),e._v(" is the maximum finite value while "),s("code",[e._v("min()")]),e._v(" is the minimum positive normalized value. Additional members are provided for floating-point types, which are also implementation-defined but satisfy certain guarantees provided by the C standard through the "),s("code",[e._v("<cfloat>")]),e._v(" header.")]),e._v(" "),s("li",[e._v("The member `digits10` gives the number of decimal digits of precision.\n"),s("ul",[e._v("\n- `std::numeric_limits"),s("float",[e._v("::digits10` equals `FLT_DIG`, which is at least 6.\n- `std::numeric_limits"),s("double",[e._v("::digits10` equals `DBL_DIG`, which is at least 10.\n- `std::numeric_limits"),s("long",{attrs:{double:""}},[e._v("::digits10` equals `LDBL_DIG`, which is at least 10.\n"),s("ul",[s("li",[s("p",[s("code",[e._v("std::numeric_limits<float>::min_exponent10")]),e._v(" equals "),s("code",[e._v("FLT_MIN_10_EXP")]),e._v(", which is at most -37.\n")])]),s("li",[s("code",[e._v("std::numeric_limits<double>::min_exponent10")]),e._v(" equals "),s("code",[e._v("DBL_MIN_10_EXP")]),e._v(", which is at most -37.\n"),s("code",[e._v("std::numeric_limits<long double>::min_exponent10")]),e._v(" equals "),s("code",[e._v("LDBL_MIN_10_EXP")]),e._v(", which is at most -37.")]),s("p")])])],1)],1)],1)]),e._v(" "),s("li",[s("p",[s("code",[e._v("std::numeric_limits<float>::max_exponent10")]),e._v(" equals "),s("code",[e._v("FLT_MIN_10_EXP")]),e._v(", which is at least 37.")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("std::numeric_limits<double>::max_exponent10")]),e._v(" equals "),s("code",[e._v("DBL_MIN_10_EXP")]),e._v(", which is at least 37.")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("std::numeric_limits<long double>::max_exponent10")]),e._v(" equals "),s("code",[e._v("LDBL_MIN_10_EXP")]),e._v(", which is at least 37.")])]),e._v(" "),s("h2",{attrs:{id:"value-representation-of-floating-point-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#value-representation-of-floating-point-types"}},[e._v("#")]),e._v(" Value representation of floating point types")]),e._v(" "),s("p",[e._v("The standard requires that "),s("code",[e._v("long double")]),e._v(" provides at least as much precision as "),s("code",[e._v("double")]),e._v(", which provides at least as much precision as "),s("code",[e._v("float")]),e._v("; and that a "),s("code",[e._v("long double")]),e._v(" can represent any value that a "),s("code",[e._v("double")]),e._v(" can represent, while a "),s("code",[e._v("double")]),e._v(" can represent any value that a "),s("code",[e._v("float")]),e._v(" can represent. The details of the representation are, however, implementation-defined.")]),e._v(" "),s("p",[e._v("For a floating point type "),s("code",[e._v("T")]),e._v(", "),s("code",[e._v("std::numeric_limits<T>::radix")]),e._v(" specifies the radix used by the representation of "),s("code",[e._v("T")]),e._v(".")]),e._v(" "),s("p",[e._v("If "),s("code",[e._v("std::numeric_limits<T>::is_iec559")]),e._v(" is true, then the representation of "),s("code",[e._v("T")]),e._v(" matches one of the formats defined by IEC 559 / IEEE 754.")]),e._v(" "),s("h2",{attrs:{id:"overflow-when-converting-from-integer-to-signed-integer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overflow-when-converting-from-integer-to-signed-integer"}},[e._v("#")]),e._v(" Overflow when converting from integer to signed integer")]),e._v(" "),s("p",[e._v("When either a signed or unsigned integer is converted to a signed integer type, and its value is not representable in the destination type, the value produced is implementation-defined. Example:")]),e._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Suppose that on this implementation, the range of signed char is -128 to +127 and")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// the range of unsigned char is 0 to 255")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("12345")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("signed")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("char")]),e._v(" sc "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// sc has an implementation-defined value")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("unsigned")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("char")]),e._v(" uc "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// uc is initialized to 57 (i.e., 12345 modulo 256)")]),e._v("\n\n")])])]),s("h2",{attrs:{id:"underlying-type-and-hence-size-of-an-enum"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#underlying-type-and-hence-size-of-an-enum"}},[e._v("#")]),e._v(" Underlying type (and hence size) of an enum")]),e._v(" "),s("p",[e._v("If the underlying type is not explicitly specified for an unscoped enumeration type, it is determined in an implementation-defined manner.")]),e._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("enum")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("E")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    RED"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    GREEN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    BLUE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("using")]),e._v(" T "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" std"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),e._v("underlying_type"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("E"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),e._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// implementation-defined")]),e._v("\n\n")])])]),s("p",[e._v("However, the standard does require the underlying type of an enumeration to be no larger than "),s("code",[e._v("int")]),e._v(" unless both "),s("code",[e._v("int")]),e._v(" and "),s("code",[e._v("unsigned int")]),e._v(" are unable to represent all the values of the enumeration. Therefore, in the above code, "),s("code",[e._v("T")]),e._v(" could be "),s("code",[e._v("int")]),e._v(", "),s("code",[e._v("unsigned int")]),e._v(", or "),s("code",[e._v("short")]),e._v(", but not "),s("code",[e._v("long long")]),e._v(", to give a few examples.")]),e._v(" "),s("p",[e._v("Note that an enum has the same size (as returned by "),s("code",[e._v("sizeof")]),e._v(") as its underlying type.")])])}),[],!1,null,null,null);t.default=a.exports}}]);