(window.webpackJsonp=window.webpackJsonp||[]).push([[2924],{3269:function(t,a,s){"use strict";s.r(a);var e=s(19),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"performing-a-permutation-test"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#performing-a-permutation-test"}},[t._v("#")]),t._v(" Performing a Permutation Test")]),t._v(" "),s("h2",{attrs:{id:"a-fairly-general-function"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a-fairly-general-function"}},[t._v("#")]),t._v(" A fairly general function")]),t._v(" "),s("p",[t._v("We will use the built in "),s("a",{attrs:{href:"https://stat.ethz.ch/R-manual/R-devel/library/datasets/html/ToothGrowth.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("tooth growth dataset"),s("OutboundLink")],1),t._v(".\nWe are interested in whether there is a statistically significant difference in tooth growth when the guinea pigs are given vitamin C vs orange juice.")]),t._v(" "),s("p",[t._v("Here's the full example:")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("teethVC "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ToothGrowth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ToothGrowth"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("supp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'VC'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nteethOJ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ToothGrowth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ToothGrowth"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("supp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'OJ'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\npermutationTest "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vectorA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vectorB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" testStat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  N "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n  fullSet "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vectorA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vectorB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  lengthA "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vectorA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  lengthB "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vectorB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  trials "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" replicate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("N"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("index "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" sample"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lengthB "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" lengthA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" size "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" lengthA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" replace "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("FALSE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                      testStat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fullSet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fullSet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  trials\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nvec1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("teethVC"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("len"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nvec2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("teethOJ"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("len"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsubtractMeans "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" return "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mean"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" mean"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nresult "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" permutationTest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vec1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vec2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" subtractMeans"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nobservedMeanDifference "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" subtractMeans"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vec1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vec2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nresult "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" observedMeanDifference"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nhist"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nabline"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("observedMeanDifference"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" col "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"blue"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\npValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("mean"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("observedMeanDifference"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\npValue\n\n")])])]),s("p",[t._v("After we read in the CSV, we define the function")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("permutationTest "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vectorA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vectorB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" testStat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  N "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n  fullSet "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vectorA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vectorB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  lengthA "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vectorA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  lengthB "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vectorB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  trials "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" replicate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("N"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("index "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" sample"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lengthB "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" lengthA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" size "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" lengthA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" replace "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("FALSE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                      testStat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fullSet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fullSet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  trials\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("This function takes two vectors, and shuffles their contents together, then performs the function "),s("code",[t._v("testStat")]),t._v(" on the shuffled vectors. The result of "),s("code",[t._v("teststat")]),t._v(" is added to "),s("code",[t._v("trials")]),t._v(", which is the return value.")]),t._v(" "),s("p",[t._v("It does this "),s("code",[t._v("N = 10^5")]),t._v(" times. Note that the value "),s("code",[t._v("N")]),t._v(" could very well have been a parameter to the function.")]),t._v(" "),s("p",[t._v("This leaves us with a new set of data, "),s("code",[t._v("trials")]),t._v(", the set of means that might result if there truly is no relationship between the two variables.")]),t._v(" "),s("p",[t._v("Now to define our test statistic:")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("subtractMeans "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" return "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mean"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" mean"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("Perform the test:")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" permutationTest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vec1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vec2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" subtractMeans"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v("Calculate our actual observed mean difference:")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("observedMeanDifference "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" subtractMeans"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vec1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vec2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v("Let's see what our observation looks like on a histogram of our test statistic.")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("hist"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nabline"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("observedMeanDifference"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" col "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"blue"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[s("a",{attrs:{href:"https://i.stack.imgur.com/o7gFh.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://i.stack.imgur.com/o7gFh.png",alt:"enter image description here"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("It doesn't "),s("strong",[t._v("look")]),t._v(" like our observed result is very likely to occur by random chance...")]),t._v(" "),s("p",[t._v("We want to calculate the p-value, the likeliehood of the original observed result if their is no relationship between the two variables.")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("pValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("mean"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("observedMeanDifference"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v("Let's break that down a bit:")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("observedMeanDifference"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v("Will create a boolean vector, like:")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("FALSE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("TRUE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("FALSE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("FALSE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("TRUE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("FALSE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token ellipsis"}},[t._v("...")]),t._v("\n\n")])])]),s("p",[t._v("With "),s("code",[t._v("TRUE")]),t._v(" every time the value of "),s("code",[t._v("result")]),t._v(" is greater than or equal to the "),s("code",[t._v("observedMean")]),t._v(".")]),t._v(" "),s("p",[t._v("The function "),s("code",[t._v("mean")]),t._v(" will interpret this vector as "),s("code",[t._v("1")]),t._v(" for "),s("code",[t._v("TRUE")]),t._v(" and "),s("code",[t._v("0")]),t._v(" for "),s("code",[t._v("FALSE")]),t._v(", and give us the percentage of "),s("code",[t._v("1")]),t._v("'s in the mix, ie the number of times our shuffled vector mean difference surpassed or equalled what we observed.")]),t._v(" "),s("p",[t._v('Finally, we multiply by 2 because the distribution of our test statistic is highly symmetric, and we really want to know which results are "more extreme" than our observed result.')]),t._v(" "),s("p",[t._v("All that's left is to output the p-value, which turns out to be "),s("code",[t._v("0.06093939")]),t._v(". Interpretation of this value is subjective, but I would say that it looks like Vitamin C promotes tooth growth quite a lot more than Orange Juice does.")])])}),[],!1,null,null,null);a.default=n.exports}}]);