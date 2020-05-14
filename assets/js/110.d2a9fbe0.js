(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{451:function(t,a,s){"use strict";s.r(a);var e=s(19),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"autosizing-textviews"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#autosizing-textviews"}},[t._v("#")]),t._v(" Autosizing TextViews")]),t._v(" "),s("p",[t._v("A TextView that automatically resizes text to fit perfectly within its bounds.")]),t._v(" "),s("p",[t._v("Android O allows you to instruct a TextView to let the size of the text expand or contract automatically to fill its layout based on the TextView’s characteristics and boundaries.")]),t._v(" "),s("p",[t._v("You can set up the TextView autosizing in either code or XML.")]),t._v(" "),s("p",[t._v("There are two ways to set autosizing TextView: "),s("strong",[t._v("Granularity")]),t._v(" and "),s("strong",[t._v("Preset Sizes")])]),t._v(" "),s("h2",{attrs:{id:"granularity"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#granularity"}},[t._v("#")]),t._v(" Granularity")]),t._v(" "),s("p",[s("strong",[t._v("In Java:")])]),t._v(" "),s("p",[t._v("Call the "),s("a",{attrs:{href:"https://developer.android.com/reference/android/widget/TextView.html#setAutoSizeTextTypeUniformWithConfiguration%28int,%20int,%20int,%20int%29",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("setAutoSizeTextTypeUniformWithConfiguration()")]),s("OutboundLink")],1),t._v(" method:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAutoSizeTextTypeUniformWithConfiguration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" autoSizeMinTextSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" autoSizeMaxTextSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" autoSizeStepGranularity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" unit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[s("strong",[t._v("In XML:")])]),t._v(" "),s("p",[t._v("Use the "),s("code",[t._v("autoSizeMinTextSize")]),t._v(", "),s("code",[t._v("autoSizeMaxTextSize")]),t._v(", and "),s("code",[t._v("autoSizeStepGranularity")]),t._v(" attributes to set the auto-sizing dimensions in the layout XML file:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TextView")]),t._v(" android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("”@"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("autosizing_textview_presetsize” \n        android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_width"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("”wrap_content” \n        android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("”"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("250d")]),t._v("p” \n        android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_marginLeft"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("”"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0d")]),t._v("p” \n        android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_marginTop"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("”"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0d")]),t._v("p” \n        android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("autoSizeMaxTextSize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("”"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("sp” \n        android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("autoSizeMinTextSize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("”"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("sp” \n        android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("autoSizeStepGranularity"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("”"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("sp” \n        android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("autoSizeText"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("”uniform” \n        android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("”"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Hello")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("World")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("” \n        android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("textSize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("”"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("sp” \n        app"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_constraintLeft_toLeftOf"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("”parent” \n        app"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_constraintTop_toTopOf"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("”parent” "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),s("p",[t._v("Check out the "),s("a",{attrs:{href:"https://github.com/1priyank1/AutosizingTextViews-Demo",target:"_blank",rel:"noopener noreferrer"}},[t._v("AutosizingTextViews-Demo"),s("OutboundLink")],1),t._v(" at GitHub for more details.")]),t._v(" "),s("h2",{attrs:{id:"preset-sizes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#preset-sizes"}},[t._v("#")]),t._v(" Preset Sizes")]),t._v(" "),s("p",[s("strong",[t._v("In Java:")])]),t._v(" "),s("p",[t._v("Call the "),s("a",{attrs:{href:"https://developer.android.com/reference/android/widget/TextView.html#setAutoSizeTextTypeUniformWithPresetSizes%28int%5B%5D,%20int%29",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("setAutoSizeTextTypeUniformWithPresetSizes()")]),s("OutboundLink")],1),t._v(" method:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAutoSizeTextTypeUniformWithPresetSizes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" presetSizes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" unit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[s("strong",[t._v("In XML:")])]),t._v(" "),s("p",[t._v("Use the "),s("code",[t._v("autoSizePresetSizes")]),t._v(" attribute in the layout XML file:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TextView")]),t._v(" android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("”@"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("autosizing_textview_presetsize” \n        android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_width"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("”wrap_content” \n        android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("”"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("250d")]),t._v("p” \n        android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_marginLeft"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("”"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0d")]),t._v("p” \n        android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_marginTop"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("”"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0d")]),t._v("p” \n        android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("autoSizeText"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("”uniform” \n        android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("autoSizePresetSizes"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("”"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@array")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("autosize_text_sizes” \n        android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("”"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Hello")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("World")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("” \n        android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("textSize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("”"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("sp” \n        app"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_constraintLeft_toLeftOf"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("”parent” \n        app"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_constraintTop_toTopOf"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("”parent” "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),s("p",[t._v("To access the array as a resource, define the array in the "),s("strong",[t._v("res/values/arrays.xml")]),t._v(" file:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("array name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("”autosize_text_sizes”"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("sp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("sp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("sp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),t._v("sp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("sp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("array"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),s("p",[t._v("Check out the "),s("a",{attrs:{href:"https://github.com/1priyank1/AutosizingTextViews-Demo",target:"_blank",rel:"noopener noreferrer"}},[t._v("AutosizingTextViews-Demo"),s("OutboundLink")],1),t._v(" at GitHub for more details.")])])}),[],!1,null,null,null);a.default=r.exports}}]);