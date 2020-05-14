(window.webpackJsonp=window.webpackJsonp||[]).push([[1537],{1880:function(e,t,a){"use strict";a.r(t);var i=a(19),v=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"collection-factory-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#collection-factory-methods"}},[e._v("#")]),e._v(" Collection Factory Methods")]),e._v(" "),a("p",[e._v("The arrival of Java 9 brings many new features to Java's Collections API, one of which being collection factory methods.  These methods allow for easy initialization of "),a("strong",[e._v("immutable")]),e._v(" collections, whether they be empty or nonempty.")]),e._v(" "),a("p",[e._v("Note that these factory methods are only available for the following interfaces: "),a("code",[e._v("List<E>")]),e._v(", "),a("code",[e._v("Set<E>")]),e._v(", and "),a("code",[e._v("Map<K, V>")])]),e._v(" "),a("h2",{attrs:{id:"list-factory-method-examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-factory-method-examples"}},[e._v("#")]),e._v(" List"),a("E",[e._v(" Factory Method Examples")])],1),e._v(" "),a("li",[e._v("`List"),a("Integer",[e._v(" immutableEmptyList = List.of();`\n"),a("ul",[e._v("\n- Initializes an empty, immutable `List"),a("Integer",[e._v("`.\n"),a("ul",[a("li",[a("p",[e._v("Initializes an immutable "),a("code",[e._v("List<Integer>")]),e._v(" with five initial elements.")])]),e._v(" "),a("li",[a("p",[e._v("Initializes a mutable "),a("code",[e._v("List<Integer>")]),e._v(" from an immutable "),a("code",[e._v("List<Integer>")]),e._v(".")])])]),e._v(" "),a("h2",{attrs:{id:"set-factory-method-examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-factory-method-examples"}},[e._v("#")]),e._v(" Set"),a("E",[e._v(" Factory Method Examples")])],1),e._v(" "),a("li",[e._v("`Set"),a("Integer",[e._v(" immutableEmptySet = Set.of();`\n"),a("ul",[e._v("\n- Initializes an empty, immutable `Set"),a("Integer",[e._v("`.\n"),a("ul",[a("li",[a("p",[e._v("Initializes an immutable "),a("code",[e._v("Set<Integer>")]),e._v(" with five initial elements.")])]),e._v(" "),a("li",[a("p",[e._v("Initializes a mutable "),a("code",[e._v("Set<Integer>")]),e._v(" from an immutable "),a("code",[e._v("Set<Integer>")]),e._v(".")])])]),e._v(" "),a("h2",{attrs:{id:"map-k-v-factory-method-examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#map-k-v-factory-method-examples"}},[e._v("#")]),e._v(" Map<K, V> Factory Method Examples")]),e._v(" "),a("li",[e._v("`Map"),a("Integer",{attrs:{",":"",Integer:""}},[e._v(" immutableEmptyMap = Map.of();`\n"),a("ul",[e._v("\n- Initializes an empty, immutable `Map"),a("Integer",{attrs:{",":"",Integer:""}},[e._v("`.\n"),a("ul",[a("li",[a("p",[e._v("Initializes an immutable "),a("code",[e._v("Map<Integer, Integer>")]),e._v(" with two initial key-value entries.")])]),e._v(" "),a("li",[a("p",[e._v("Initializes an immutable "),a("code",[e._v("Map<Integer, Integer>")]),e._v(" with two initial key-value entries.")])]),e._v(" "),a("li",[a("p",[e._v("Initializes a mutable "),a("code",[e._v("Map<Integer, Integer>")]),e._v(" from an immutable "),a("code",[e._v("Map<Integer, Integer>")]),e._v(".")])])]),e._v(" "),a("h4",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("static <E> List<E> of​()")])]),e._v(" "),a("li",[a("code",[e._v("static <E> List<E> of​(E e1)")])]),e._v(" "),a("li",[a("code",[e._v("static <E> List<E> of​(E e1, E e2)")])]),e._v(" "),a("li",[a("code",[e._v("static <E> List<E> of​(E e1, E e2, ..., E e9, E e10)")])]),e._v(" "),a("li",[a("code",[e._v("static <E> List<E> of​(E... elements)")])]),e._v(" "),a("li",[a("code",[e._v("static <E> Set<E> of​()")])]),e._v(" "),a("li",[a("code",[e._v("static <E> Set<E> of​(E e1)")])]),e._v(" "),a("li",[a("code",[e._v("static <E> Set<E> of​(E e1, E e2)")])]),e._v(" "),a("li",[a("code",[e._v("static <E> Set<E> of​(E e1, E e2, ..., E e9, E e10)")])]),e._v(" "),a("li",[a("code",[e._v("static <E> Set<E> of​(E... elements)")])]),e._v(" "),a("li",[a("code",[e._v("static <K,V> Map<K,V> of()")])]),e._v(" "),a("li",[a("code",[e._v("static <K,V> Map<K,V> of(K k1, V v1)")])]),e._v(" "),a("li",[a("code",[e._v("static <K,V> Map<K,V> of(K k1, V v1, K k2, V v2)")])]),e._v(" "),a("li",[a("code",[e._v("static <K,V> Map<K,V> of(K k1, V v1, K k2, V v2, ..., K k9, V v9, K k10, V v10)")])]),e._v(" "),a("li",[a("code",[e._v("static <K,V> Map<K,V> ofEntries​(Map.Entry<? extends K,? extends V>... entries)")])])]),e._v(" "),a("h4",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Method w/ Parameter")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("List.of(E e)")])]),e._v(" "),a("td",[e._v("A generic type that can be a class or interface.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("Set.of(E e)")])]),e._v(" "),a("td",[e._v("A generic type that can be a class or interface.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("Map.of(K k, V v)")])]),e._v(" "),a("td",[e._v("A key-value pair of generic types that can each be a class or interface.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("Map.of(Map.Entry<? extends K, ? extends V> entry)")])]),e._v(" "),a("td",[e._v("A "),a("code",[e._v("Map.Entry")]),e._v(" instance where its key can be "),a("code",[e._v("K")]),e._v(" or one of its children, and its value can be "),a("code",[e._v("V")]),e._v(" or any of its children.")])])])])])],1)])],1)])],1)])],1)])],1)])],1)])}),[],!1,null,null,null);t.default=v.exports}}]);