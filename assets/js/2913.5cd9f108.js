(window.webpackJsonp=window.webpackJsonp||[]).push([[2913],{3259:function(t,a,s){"use strict";s.r(a);var n=s(19),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"matrices"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#matrices"}},[t._v("#")]),t._v(" Matrices")]),t._v(" "),s("p",[t._v("Matrices store data")]),t._v(" "),s("h2",{attrs:{id:"creating-matrices"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-matrices"}},[t._v("#")]),t._v(" Creating matrices")]),t._v(" "),s("p",[t._v("Under the hood, a matrix is a special kind of vector with two dimensions. Like a vector, a matrix can only have one data class. You can create matrices using the "),s("code",[t._v("matrix")]),t._v(" function as shown below.")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("matrix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nrow "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ncol "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##      [,1] [,2] [,3]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## [1,]    1    3    5")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## [2,]    2    4    6")]),t._v("\n\n")])])]),s("p",[t._v("As you can see this gives us a matrix of all numbers from 1 to 6 with two rows and three columns. The "),s("code",[t._v("data")]),t._v(" parameter takes a vector of values, "),s("code",[t._v("nrow")]),t._v(" specifies the number of rows in the matrix, and "),s("code",[t._v("ncol")]),t._v(" specifies the number of columns. By convention the matrix is filled by column. The default behavior can be changed with the "),s("code",[t._v("byrow")]),t._v(" parameter as shown below:")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("matrix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nrow "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ncol "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" byrow "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("TRUE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##      [,1] [,2] [,3]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## [1,]    1    2    3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## [2,]    4    5    6")]),t._v("\n\n")])])]),s("p",[t._v("Matrices do not have to be numeric – any vector can be transformed into a matrix. For example:")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("matrix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("TRUE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("TRUE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("TRUE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("FALSE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("FALSE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("FALSE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nrow "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ncol "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##      [,1]  [,2]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## [1,] TRUE FALSE")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## [2,] TRUE FALSE")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## [3,] TRUE FALSE")]),t._v("\nmatrix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"c"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"d"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"e"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"f"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nrow "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ncol "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##      [,1] [,2]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('## [1,] "a"  "d" ')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('## [2,] "b"  "e" ')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('## [3,] "c"  "f"')]),t._v("\n\n")])])]),s("p",[t._v("Like vectors matrices can be stored as variables and then called later. The rows and columns of a matrix can have names. You can look at these using the functions "),s("code",[t._v("rownames")]),t._v(" and "),s("code",[t._v("colnames")]),t._v(". As shown below, the rows and columns don't initially have names, which is denoted by "),s("code",[t._v("NULL")]),t._v(". However, you can assign values to them.")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("mat1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" matrix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nrow "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ncol "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" byrow "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("TRUE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrownames"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mat1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## NULL")]),t._v("\ncolnames"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mat1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## NULL")]),t._v("\nrownames"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mat1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Row 1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Row 2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncolnames"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mat1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Col 1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Col 2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Col 3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmat1\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##       Col 1 Col 2 Col 3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Row 1     1     2     3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Row 2     4     5     6")]),t._v("\n\n")])])]),s("p",[t._v("It is important to note that similarly to vectors, matrices can only have one data type. If you try to specify a matrix with multiple data types the data will be coerced to the higher order data class.")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("class")]),t._v(", "),s("code",[t._v("is")]),t._v(", and "),s("code",[t._v("as")]),t._v(" functions can be used to check and coerce data structures in the same way they were used on the vectors in class 1.")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("class"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mat1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('## [1] "matrix"')]),t._v("\nis.matrix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mat1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## [1] TRUE")]),t._v("\nas.vector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mat1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## [1] 1 4 2 5 3 6")]),t._v("\n\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);