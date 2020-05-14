(window.webpackJsonp=window.webpackJsonp||[]).push([[2876],{3221:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"date-time-classes-posixct-and-posixlt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#date-time-classes-posixct-and-posixlt"}},[t._v("#")]),t._v(" Date-time classes (POSIXct and POSIXlt)")]),t._v(" "),a("p",[t._v("R includes two date-time classes -- POSIXct and POSIXlt -- see "),a("code",[t._v("?DateTimeClasses")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"formatting-and-printing-date-time-objects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#formatting-and-printing-date-time-objects"}},[t._v("#")]),t._v(" Formatting and printing date-time objects")]),t._v(" "),a("p",[t._v("See "),a("code",[t._v("?strptime")]),t._v(" for details on the format strings here, as well as other formats.")]),t._v(" "),a("h2",{attrs:{id:"date-time-arithmetic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#date-time-arithmetic"}},[t._v("#")]),t._v(" Date-time arithmetic")]),t._v(" "),a("p",[t._v("To add/subtract time, use POSIXct, since it stores times in seconds")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## adding/subtracting times - 60 seconds")]),t._v("\nas.POSIXct"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2016-01-01"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# [1] "2016-01-01 00:01:00 AEDT"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## adding 3 hours, 14 minutes, 15 seconds")]),t._v("\nas.POSIXct"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2016-01-01"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# [1] "2016-01-01 03:14:15 AEDT"')]),t._v("\n\n")])])]),a("p",[t._v("More formally, "),a("code",[t._v("as.difftime")]),t._v(" can be used to specify time periods to add to a date or datetime object. E.g.:")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("as.POSIXct"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2016-01-01"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" \n  as.difftime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  units"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hours"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n  as.difftime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" units"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mins"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n  as.difftime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" units"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"secs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# [1] "2016-01-01 03:14:15 AEDT"')]),t._v("\n\n")])])]),a("p",[t._v("To find the difference between dates/times use "),a("code",[t._v("difftime()")]),t._v(" for differences in seconds, minutes, hours, days or weeks.")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# using POSIXct objects")]),t._v("\ndifftime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  as.POSIXct"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2016-01-01 12:00:00"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  as.POSIXct"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2016-01-01 11:59:59"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  unit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"secs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Time difference of 1 secs")]),t._v("\n\n")])])]),a("p",[t._v("To generate sequences of date-times use "),a("code",[t._v("seq.POSIXt()")]),t._v(" or simply "),a("code",[t._v("seq")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"parsing-strings-into-date-time-objects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parsing-strings-into-date-time-objects"}},[t._v("#")]),t._v(" Parsing strings into date-time objects")]),t._v(" "),a("p",[t._v('The functions for parsing a string into POSIXct and POSIXlt take similar parameters and return a similar-looking result, but there are differences in how that date-time is stored; see "Remarks."')]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("as.POSIXct"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"11:38"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# time string")]),t._v("\n           format "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%H:%M"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("               "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# formatting string")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('## [1] "2016-07-21 11:38:00 CDT"           ')]),t._v("\nstrptime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"11:38"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# identical, but makes a POSIXlt object")]),t._v("\n         format "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%H:%M"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('## [1] "2016-07-21 11:38:00 CDT"')]),t._v("\n\nas.POSIXct"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"11 AM"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                   \n           format "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%I %p"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("        \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('## [1] "2016-07-21 11:00:00 CDT"')]),t._v("\n\n")])])]),a("p",[t._v("Note that date and timezone are imputed.")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("as.POSIXct"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"11:38:22"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# time string without timezone")]),t._v("\n           format "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%H:%M:%S"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   \n           tz "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"America/New_York"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# set time zone")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('## [1] "2016-07-21 11:38:22 EDT"')]),t._v("\n\nas.POSIXct"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2016-07-21 00:00:00"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n           format "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%F %T"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# shortcut tokens for "%Y-%m-%d" and "%H:%M:%S"')]),t._v("\n\n")])])]),a("p",[t._v("See "),a("code",[t._v("?strptime")]),t._v(" for details on the format strings here.")]),t._v(" "),a("h3",{attrs:{id:"notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[t._v("#")]),t._v(" Notes")]),t._v(" "),a("h3",{attrs:{id:"missing-elements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#missing-elements"}},[t._v("#")]),t._v(" Missing elements")]),t._v(" "),a("ul",[a("li",[t._v("If a date element is not supplied, then that from the current date is used.")]),t._v(" "),a("li",[t._v("If a time element is not supplied, then that from midnight is used, i.e. 0s.")]),t._v(" "),a("li",[t._v("If no timezone is supplied in either the string or the "),a("code",[t._v("tz")]),t._v(" parameter, the local timezone is used.")])]),t._v(" "),a("h3",{attrs:{id:"time-zones"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#time-zones"}},[t._v("#")]),t._v(" Time zones")]),t._v(" "),a("li",[t._v("The accepted values of `tz` depend on the location.\n"),a("ul",[t._v('\n- `CST` is given with `"CST6CDT"` or `"America/Chicago"`\n'),a("ul",[a("li",[a("p",[t._v("In R: "),a("code",[t._v("OlsonNames()")])])]),t._v(" "),a("li",[a("p",[t._v("Alternatively, try in R: "),a("code",[t._v('system("cat $R_HOME/share/zoneinfo/zone.tab")')])])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones",target:"_blank",rel:"noopener noreferrer"}},[t._v("List of tz database time zones (Wikipedia)"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"http://www.iana.org/time-zones/repository/releases/tzdata2016e.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[t._v("IANA TZ Data (2016e)"),a("OutboundLink")],1)])])]),t._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),a("h3",{attrs:{id:"pitfalls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pitfalls"}},[t._v("#")]),t._v(" Pitfalls")]),t._v(" "),a("p",[t._v("With POSIXct, midnight will display only the date and time zone, though the full time is still stored.")]),t._v(" "),a("h3",{attrs:{id:"related-topics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#related-topics"}},[t._v("#")]),t._v(" Related topics")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://stackoverflow.com/documentation/r/1157",target:"_blank",rel:"noopener noreferrer"}},[t._v("Date and Time"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"specialized-packages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specialized-packages"}},[t._v("#")]),t._v(" Specialized packages")]),t._v(" "),a("ul",[a("li",[t._v("lubridate")])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);