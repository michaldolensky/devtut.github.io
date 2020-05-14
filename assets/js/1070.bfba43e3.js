(window.webpackJsonp=window.webpackJsonp||[]).push([[1070],{1417:function(t,a,e){"use strict";e.r(a);var s=e(19),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"charts-and-charting"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#charts-and-charting"}},[t._v("#")]),t._v(" Charts and Charting")]),t._v(" "),e("h2",{attrs:{id:"creating-a-chart-with-ranges-and-a-fixed-name"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-chart-with-ranges-and-a-fixed-name"}},[t._v("#")]),t._v(" Creating a Chart with Ranges and a Fixed Name")]),t._v(" "),e("p",[t._v("Charts can be created by working directly with the "),e("code",[t._v("Series")]),t._v(" object that defines the chart data.  In order to get to the "),e("code",[t._v("Series")]),t._v(" without an exisitng chart, you create a "),e("code",[t._v("ChartObject")]),t._v(" on a given "),e("code",[t._v("Worksheet")]),t._v(" and then get the "),e("code",[t._v("Chart")]),t._v(" object from it.  The upside of working with the "),e("code",[t._v("Series")]),t._v(" object is that you can set the "),e("code",[t._v("Values")]),t._v(" and "),e("code",[t._v("XValues")]),t._v(" by referring to "),e("code",[t._v("Range")]),t._v(" objects.  These data properties will properly define the "),e("code",[t._v("Series")]),t._v(" with references to those ranges.  The downside to this approach is that the same conversion is not handled when setting the "),e("code",[t._v("Name")]),t._v("; it is a fixed value.  It will not adjust with the underlying data in the original "),e("code",[t._v("Range")]),t._v(".  Checking the "),e("code",[t._v("SERIES")]),t._v(" formula and it is obvious that the name is fixed.  This must be handled by creating the "),e("code",[t._v("SERIES")]),t._v(" formula directly.")]),t._v(" "),e("p",[e("strong",[t._v("Code used to create chart")])]),t._v(" "),e("p",[t._v("Note that this code contains extra variable declarations for the "),e("code",[t._v("Chart")]),t._v(" and "),e("code",[t._v("Worksheet")]),t._v(". These can be omitted if they're not used.  They can be useful however if you are modifying the style or any other chart properties.")]),t._v(" "),e("div",{staticClass:"language-vb extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vb"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v(" CreateChartWithRangesAndFixedName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" xData "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" Range\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" yData "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" Range\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" serName "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" Range\n    \n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'set the ranges to get the data and y value label")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Set")]),t._v(" xData "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Range"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"B3:B12"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Set")]),t._v(" yData "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Range"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C3:C12"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Set")]),t._v(" serName "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Range"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C2"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'get reference to ActiveSheet")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" sht "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" Worksheet\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Set")]),t._v(" sht "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ActiveSheet\n    \n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'create a new ChartObject at position (48, 195) with width 400 and height 300")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" chtObj "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" ChartObject\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Set")]),t._v(" chtObj "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sht"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ChartObjects"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Add"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("48")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("195")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'get reference to chart object")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" cht "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" Chart\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Set")]),t._v(" cht "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" chtObj"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Chart\n    \n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'create the new series")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" ser "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" Series\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Set")]),t._v(" ser "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cht"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SeriesCollection"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NewSeries\n    \n    ser"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Values "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" yData\n    ser"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("XValues "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" xData\n    ser"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Name "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" serName\n    \n    ser"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ChartType "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" xlXYScatterLines\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v("\n\n")])])]),e("p",[e("strong",[t._v("Original data/ranges and resulting "),e("code",[t._v("Chart")]),t._v(" after code runs")])]),t._v(" "),e("p",[t._v("Note that the "),e("code",[t._v("SERIES")]),t._v(" formula includes a "),e("code",[t._v('"B"')]),t._v(" for the series name instead of a reference to the "),e("code",[t._v("Range")]),t._v(" that created it.")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://i.stack.imgur.com/w8BQR.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"http://i.stack.imgur.com/w8BQR.png",alt:"data and resulting chart"}}),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"creating-an-empty-chart"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-empty-chart"}},[t._v("#")]),t._v(" Creating an empty Chart")]),t._v(" "),e("p",[t._v("The starting point for the vast majority of charting code is to create an empty "),e("code",[t._v("Chart")]),t._v(".  Note that this "),e("code",[t._v("Chart")]),t._v(" is subject to the default chart template that is active and may not actually be empty (if the template has been modified).")]),t._v(" "),e("p",[t._v("The key to the "),e("code",[t._v("ChartObject")]),t._v(" is determining its location.  The syntax for the call is "),e("code",[t._v("ChartObjects.Add(Left, Top, Width, Height)")]),t._v(".  Once the "),e("code",[t._v("ChartObject")]),t._v(" is created, you can use its "),e("code",[t._v("Chart")]),t._v(" object to actually modify the chart.  The "),e("code",[t._v("ChartObject")]),t._v(" behaves more like a "),e("code",[t._v("Shape")]),t._v(" to position the chart on the sheet.")]),t._v(" "),e("p",[e("strong",[t._v("Code to create an empty chart")])]),t._v(" "),e("div",{staticClass:"language-vb extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vb"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v(" CreateEmptyChart"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'get reference to ActiveSheet")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" sht "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" Worksheet\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Set")]),t._v(" sht "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ActiveSheet\n    \n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'create a new ChartObject at position (0, 0) with width 400 and height 300")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" chtObj "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" ChartObject\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Set")]),t._v(" chtObj "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sht"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ChartObjects"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Add"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'get refernce to chart object")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" cht "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" Chart\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Set")]),t._v(" cht "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" chtObj"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Chart\n    \n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'additional code to modify the empty chart")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'...")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v("\n\n")])])]),e("p",[e("strong",[t._v("Resulting Chart")])]),t._v(" "),e("p",[e("a",{attrs:{href:"http://i.stack.imgur.com/4o2XW.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"http://i.stack.imgur.com/4o2XW.png",alt:"empty chart example"}}),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"create-a-chart-by-modifying-the-series-formula"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-a-chart-by-modifying-the-series-formula"}},[t._v("#")]),t._v(" Create a Chart by Modifying the SERIES formula")]),t._v(" "),e("p",[t._v("For complete control over a new "),e("code",[t._v("Chart")]),t._v(" and "),e("code",[t._v("Series")]),t._v(" object (especially for a dynamic "),e("code",[t._v("Series")]),t._v(" name), you must resort to modifying the "),e("code",[t._v("SERIES")]),t._v(" formula directly.  The process to set up the "),e("code",[t._v("Range")]),t._v(" objects is straightforward and the main hurdle is simply the string building for the "),e("code",[t._v("SERIES")]),t._v(" formula.")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("SERIES")]),t._v(" formula takes the following syntax:")]),t._v(" "),e("div",{staticClass:"language-vb extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vb"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("SERIES"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("XValues"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Values"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Order"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),e("p",[t._v("These contents can be supplied as references or as array values for the data items.  "),e("code",[t._v("Order")]),t._v(" represents the series position within the chart.  Note that the references to the data will not work unless they are fully qualified with the sheet name.  For an example of a working formula, click any existing series and check the formula bar.")]),t._v(" "),e("p",[e("strong",[t._v("Code to create a chart and set up data using the "),e("code",[t._v("SERIES")]),t._v(" formula")])]),t._v(" "),e("p",[t._v("Note that the string building to create the "),e("code",[t._v("SERIES")]),t._v(" formula uses "),e("code",[t._v(".Address(,,,True)")]),t._v(".  This ensures that the "),e("strong",[t._v("external")]),t._v(" Range reference is used so that a fully qualified address with the sheet name is included.  You "),e("strong",[t._v("will get an error if the sheet name is excluded")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language-vb extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vb"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v(" CreateChartUsingSeriesFormula"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" xData "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" Range\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" yData "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" Range\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" serName "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" Range\n    \n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'set the ranges to get the data and y value label")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Set")]),t._v(" xData "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Range"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"B3:B12"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Set")]),t._v(" yData "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Range"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C3:C12"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Set")]),t._v(" serName "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Range"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C2"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'get reference to ActiveSheet")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" sht "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" Worksheet\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Set")]),t._v(" sht "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ActiveSheet\n    \n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'create a new ChartObject at position (48, 195) with width 400 and height 300")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" chtObj "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" ChartObject\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Set")]),t._v(" chtObj "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sht"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ChartObjects"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Add"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("48")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("195")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'get refernce to chart object")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" cht "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" Chart\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Set")]),t._v(" cht "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" chtObj"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Chart\n    \n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'create the new series")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" ser "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" Series\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Set")]),t._v(" ser "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cht"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SeriesCollection"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NewSeries\n    \n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'set the SERIES formula")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'=SERIES(name, xData, yData, plotOrder)")]),t._v("\n    \n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" formulaValue "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v("\n    formulaValue "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"=SERIES("')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("_")]),t._v("\n        serName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('","')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("_")]),t._v("\n        xData"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('","')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("_")]),t._v("\n        yData"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('",1)"')]),t._v("\n    \n    ser"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Formula "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" formulaValue\n    ser"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ChartType "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" xlXYScatterLines\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v("\n\n")])])]),e("p",[e("strong",[t._v("Original data and resulting chart")])]),t._v(" "),e("p",[t._v("Note that for this chart, the series name is properly set with a range to the desired cell.  This means that updates will propagate to the "),e("code",[t._v("Chart")]),t._v(".")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://i.stack.imgur.com/nIJsH.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"http://i.stack.imgur.com/nIJsH.png",alt:"data and chart from SERIES formula"}}),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"arranging-charts-into-a-grid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arranging-charts-into-a-grid"}},[t._v("#")]),t._v(" Arranging Charts into a Grid")]),t._v(" "),e("p",[t._v("A common chore with charts in Excel is standardizing the size and layout of multiple charts on a single sheet.  If done manually, you can hold down "),e("kbd",[t._v("ALT")]),t._v(' while resizing or moving the chart to "stick" to cell boundaries.  This works for a couple charts, but a VBA approach is much simpler.')]),t._v(" "),e("p",[e("strong",[t._v("Code to create a grid")])]),t._v(" "),e("p",[t._v("This code will create a grid of charts starting at a given (Top, Left) position, with a defined number of columns, and a defined common chart size.  The charts will be placed in the order they were created and wrap around the edge to form a new row.")]),t._v(" "),e("div",{staticClass:"language-vb extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vb"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v(" CreateGridOfCharts"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" int_cols "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Integer")]),t._v("\n    int_cols "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n    \n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" cht_width "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Double")]),t._v("\n    cht_width "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("250")]),t._v("\n        \n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" cht_height "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Double")]),t._v("\n    cht_height "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v("\n    \n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" offset_vertical "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Double")]),t._v("\n    offset_vertical "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("195")]),t._v("\n    \n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" offset_horz "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Double")]),t._v("\n    offset_horz "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" sht "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" Worksheet\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Set")]),t._v(" sht "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ActiveSheet\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" count "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Integer")]),t._v("\n    count "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    \n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'iterate through ChartObjects on current sheet")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" cht_obj "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" ChartObject\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("For")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Each")]),t._v(" cht_obj "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("In")]),t._v(" sht"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ChartObjects\n        \n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'use integer division and Mod to get position in grid")]),t._v("\n        cht_obj"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Top "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("\\")]),t._v(" int_cols"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" cht_height "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" offset_vertical\n        cht_obj"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Left "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Mod")]),t._v(" int_cols"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" cht_width "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" offset_horz\n        cht_obj"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Width "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cht_width\n        cht_obj"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Height "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cht_height\n\n        count "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" count "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Next")]),t._v(" cht_obj\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v("\n\n")])])]),e("p",[e("strong",[t._v("Result with several charts")])]),t._v(" "),e("p",[t._v("These pictures show the original random layout of charts and the resulting grid from running the code above.")]),t._v(" "),e("p",[e("strong",[t._v("Before")])]),t._v(" "),e("p",[e("a",{attrs:{href:"http://i.stack.imgur.com/aJeuu.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"http://i.stack.imgur.com/aJeuu.png",alt:"before image of several charts"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[e("strong",[t._v("After")])]),t._v(" "),e("p",[e("a",{attrs:{href:"http://i.stack.imgur.com/naXcW.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"http://i.stack.imgur.com/naXcW.png",alt:"grid of charts"}}),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);