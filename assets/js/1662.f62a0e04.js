(window.webpackJsonp=window.webpackJsonp||[]).push([[1662],{2007:function(e,a,t){"use strict";t.r(a);var r=t(19),n=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"security-cryptography"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#security-cryptography"}},[e._v("#")]),e._v(" Security & Cryptography")]),e._v(" "),t("p",[e._v("Security practices in Java can be separated into two broad, vaguely defined categories; Java platform security, and secure Java programming.")]),e._v(" "),t("p",[e._v("Java platform security practices deal with managing the security and integrity of the JVM. It includes such topics as managing JCE providers and security policies.")]),e._v(" "),t("p",[e._v("Secure Java programming practices concern the best ways to write secure Java programs. It includes such topics as using random numbers and cryptography, and preventing vulnerabilities.")]),e._v(" "),t("h2",{attrs:{id:"the-jce"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-jce"}},[e._v("#")]),e._v(" The JCE")]),e._v(" "),t("p",[e._v("The Java Cryptography Extension (JCE) is a framework built into the JVM to allow developers to easily and securely use cryptography in their programs. It does this by providing a simple, portable interface to programmers, while using a system of JCE Providers to securely implement the underlying cryptographic operations.")]),e._v(" "),t("h2",{attrs:{id:"keys-and-key-management"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keys-and-key-management"}},[e._v("#")]),e._v(" Keys and Key Management")]),e._v(" "),t("p",[e._v("While the JCE secures cryptographic operations and key generation, it is up to the developer to actually manage their keys. More information needs to be provided here.")]),e._v(" "),t("p",[e._v("One commonly-accepted best practice for handling keys at runtime is to store them only as "),t("code",[e._v("byte")]),e._v(' arrays, and never as strings. This is because Java strings are immutable, and cannot be manually "cleared" or "zeroed out" in memory; while a reference to a string can be removed, the exact string will remain in memory until its segment of memory is garbage-collected and reused. An attacker would have a large window in which they could dump the program\'s memory and easily find the key. Contrarily, '),t("code",[e._v("byte")]),e._v(" arrays are mutable, and can have their contents overwritten in place; it is a good idea to 'zero-out' your keys as soon as you no longer need them.")]),e._v(" "),t("h2",{attrs:{id:"common-java-vulnerabilities"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#common-java-vulnerabilities"}},[e._v("#")]),e._v(" Common Java vulnerabilities")]),e._v(" "),t("p",[e._v("Needs content")]),e._v(" "),t("h2",{attrs:{id:"networking-concerns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#networking-concerns"}},[e._v("#")]),e._v(" Networking Concerns")]),e._v(" "),t("p",[e._v("Needs content")]),e._v(" "),t("h2",{attrs:{id:"randomness-and-you"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#randomness-and-you"}},[e._v("#")]),e._v(" Randomness and You")]),e._v(" "),t("p",[e._v("Needs content")]),e._v(" "),t("p",[e._v("For most applications, the "),t("code",[e._v("java.utils.Random")]),e._v(' class is a perfectly fine source of "random" data. If you need to choose a random element from an array, or generate a random string, or create a temporary "unique" identifier, you should probably use '),t("code",[e._v("Random")]),e._v(".")]),e._v(" "),t("p",[e._v("However, many cryptographic systems rely on randomness for their security, and the randomness provided by "),t("code",[e._v("Random")]),e._v(" simply isn't of high enough quality. For any cryptographic operation that requires a random input, you should use "),t("code",[e._v("SecureRandom")]),e._v(" instead.")]),e._v(" "),t("h2",{attrs:{id:"hashing-and-validation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hashing-and-validation"}},[e._v("#")]),e._v(" Hashing and Validation")]),e._v(" "),t("p",[e._v("More information needed.")]),e._v(" "),t("p",[e._v("A cryptographic hash function is a member of a class of functions with three vital properties; consistency, uniqueness, and irreversibility.")]),e._v(" "),t("p",[t("strong",[e._v("Consistency:")]),e._v(" Given the same data, a hash function will always return the same value. That is, if X = Y, f(x) will always equal f(y) for hash function f.")]),e._v(" "),t("p",[t("strong",[e._v("Uniqueness:")]),e._v(" No two inputs to a hash function will ever result in the same output. That is, if X != Y, f(x) != f(y), for any values of X and Y.")]),e._v(" "),t("p",[t("strong",[e._v("Irreversibility:")]),e._v(' It is impractically difficult, if not impossible, to "reverse" a hash function. That is, given only f(X), there should be no way of finding the original X short of putting every possible value of X through the function f (brute-force). There should be no function f1 such that f1(f(X)) = X.')]),e._v(" "),t("p",[e._v("Many functions lack at least one of these attributes. For example, MD5 and SHA1 are known to have collisions, i.e. two inputs that have the same output, so they lack uniqueness. Some functions that are currently believed to be secure are SHA-256 and SHA-512.")]),e._v(" "),t("h4",{attrs:{id:"remarks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[e._v("#")]),e._v(" Remarks")]),e._v(" "),t("p",[e._v("While examples should be clearly made, some topics that must be covered are:")]),e._v(" "),t("ol",[t("li",[e._v("The JCE provider concept/structure")]),e._v(" "),t("li",[e._v("List item")])])])}),[],!1,null,null,null);a.default=n.exports}}]);