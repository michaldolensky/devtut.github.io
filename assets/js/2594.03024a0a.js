(window.webpackJsonp=window.webpackJsonp||[]).push([[2594],{2938:function(a,s,t){"use strict";t.r(s);var e=t(19),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"hashtables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hashtables"}},[a._v("#")]),a._v(" HashTables")]),a._v(" "),t("h2",{attrs:{id:"access-a-hash-table-value-by-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#access-a-hash-table-value-by-key"}},[a._v("#")]),a._v(" Access a hash table value by key.")]),a._v(" "),t("p",[a._v("An example of defining a hash table and accessing a value by the key")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$hashTable")]),a._v(" = @"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    Key1 = "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Value1'")]),a._v("\n    Key2 = "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Value2'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$hashTable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Key1\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#output")]),a._v("\nValue1\n\n")])])]),t("p",[a._v("An example of accessing a key with invalid characters for a property name:")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$hashTable")]),a._v(" = @"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Key 1'")]),a._v(" = "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Value3'")]),a._v("\n    Key2 = "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Value4'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$hashTable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Key 1'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#Output")]),a._v("\nValue3\n\n")])])]),t("h2",{attrs:{id:"creating-a-hash-table"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-hash-table"}},[a._v("#")]),a._v(" Creating a Hash Table")]),a._v(" "),t("p",[a._v("Example of creating an empty HashTable:")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$hashTable")]),a._v(" = @"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n")])])]),t("p",[a._v("Example of creating a HashTable with data:")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$hashTable")]),a._v(" = @"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    Name1 = "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Value'")]),a._v("\n    Name2 = "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Value'")]),a._v("\n    Name3 = "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Value3'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n")])])]),t("h2",{attrs:{id:"add-a-key-value-pair-to-an-existing-hash-table"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-a-key-value-pair-to-an-existing-hash-table"}},[a._v("#")]),a._v(" Add a key value pair to an existing hash table")]),a._v(" "),t("p",[a._v('An example, to add a "Key2" key with a value of "Value2" to the hash table, using the addition operator:')]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$hashTable")]),a._v(" = @"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    Key1 = "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Value1'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$hashTable")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+=")]),a._v(" @"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("Key2 = "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Value2'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$hashTable")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#Output")]),a._v("\n\nName                           Value\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("-"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("                           "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("-"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("\nKey1                           Value1\nKey2                           Value2\n\n")])])]),t("p",[a._v('An example, to add a "Key2" key with a value of "Value2" to the hash table using the Add method:')]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$hashTable")]),a._v(" = @"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    Key1 = "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Value1'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$hashTable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Add"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Key2"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Value2"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$hashTable")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#Output")]),a._v("\n\nName                           Value\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("-"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("                           "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("-"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("\nKey1                           Value1\nKey2                           Value2\n\n")])])]),t("h2",{attrs:{id:"looping-over-a-hash-table"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#looping-over-a-hash-table"}},[a._v("#")]),a._v(" Looping over a hash table")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$hashTable")]),a._v(" = @"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    Key1 = "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Value1'")]),a._v("\n    Key2 = "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Value2'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("foreach")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$key")]),a._v(" in "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$hashTable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Keys"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$value")]),a._v(" = "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$hashTable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$key")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("Write-Output")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$key")]),a._v(" : "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$value")]),a._v('"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#Output")]),a._v("\nKey1 : Value1\nKey2 : Value2\n\n")])])]),t("h2",{attrs:{id:"enumerating-through-keys-and-key-value-pairs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enumerating-through-keys-and-key-value-pairs"}},[a._v("#")]),a._v(" Enumerating through keys and Key-Value Pairs")]),a._v(" "),t("p",[t("strong",[a._v("Enumerating through Keys")])]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("foreach")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$key")]),a._v(" in "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$var1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Keys"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$value")]),a._v(" = "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$var1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# or")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$value")]),a._v(" = "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$var1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$key")]),a._v(" \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n")])])]),t("p",[t("strong",[a._v("Enumerating through Key-Value Pairs")])]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("foreach")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$keyvaluepair")]),a._v(" in "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$var1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("GetEnumerator"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$key1")]),a._v(" = "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$_")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Key1\n    "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$val1")]),a._v(" = "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$_")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Val1\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n")])])]),t("h2",{attrs:{id:"remove-a-key-value-pair-from-an-existing-hash-table"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#remove-a-key-value-pair-from-an-existing-hash-table"}},[a._v("#")]),a._v(" Remove a key value pair from an existing hash table")]),a._v(" "),t("p",[a._v('An example, to remove a "Key2" key with a value of "Value2" from the hash table, using the remove operator:')]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$hashTable")]),a._v(" = @"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    Key1 = "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Value1'")]),a._v("\n    Key2 = "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Value2'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$hashTable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Remove"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Key2"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Value2"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$hashTable")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#Output")]),a._v("\n\nName                           Value\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("-"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("                           "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("-"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("\nKey1                           Value1\n\n")])])]),t("h4",{attrs:{id:"remarks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[a._v("#")]),a._v(" Remarks")]),a._v(" "),t("p",[a._v("An important concept which relies on Hash Tables is "),t("a",{attrs:{href:"http://stackoverflow.com/documentation/powershell/5647/splatting",target:"_blank",rel:"noopener noreferrer"}},[a._v("Splatting"),t("OutboundLink")],1),a._v(".  It is very useful for making a large number of calls with repetitive parameters.")])])}),[],!1,null,null,null);s.default=n.exports}}]);