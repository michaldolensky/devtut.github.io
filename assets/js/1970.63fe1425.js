(window.webpackJsonp=window.webpackJsonp||[]).push([[1970],{2315:function(s,a,t){"use strict";t.r(a);var e=t(19),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"advanced-options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#advanced-options"}},[s._v("#")]),s._v(" Advanced options")]),s._v(" "),t("h2",{attrs:{id:"enable-and-show-advanced-options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enable-and-show-advanced-options"}},[s._v("#")]),s._v(" Enable and show advanced options")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Exec")]),s._v(" sp_configure "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'show advanced options'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RECONFIGURE")]),s._v("\nGO\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- Show all configure")]),s._v("\nsp_configure\n\n")])])]),t("h2",{attrs:{id:"enable-backup-compression-default"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enable-backup-compression-default"}},[s._v("#")]),s._v(" Enable backup compression default")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Exec")]),s._v(" sp_configure "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'backup compression default'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nGO  \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RECONFIGURE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),t("h2",{attrs:{id:"enable-cmd-permission"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enable-cmd-permission"}},[s._v("#")]),s._v(" Enable cmd permission")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXEC")]),s._v(" sp_configure "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xp_cmdshell'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nGO\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RECONFIGURE")]),s._v("\n\n")])])]),t("h2",{attrs:{id:"set-default-fill-factor-percent"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-default-fill-factor-percent"}},[s._v("#")]),s._v(" Set default fill factor percent")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("sp_configure "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'fill factor'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \nGO  \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RECONFIGURE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n\n")])])]),t("p",[s._v("The server must be restarted before the change can take effect.")]),s._v(" "),t("h2",{attrs:{id:"set-system-recovery-interval"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-system-recovery-interval"}},[s._v("#")]),s._v(" Set system recovery interval")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USE")]),s._v(" master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \nGO \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- Set recovery every 3 min")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXEC")]),s._v(" sp_configure "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'recovery interval'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RECONFIGURE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" OVERRIDE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n\n")])])]),t("h2",{attrs:{id:"set-max-server-memory-size"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-max-server-memory-size"}},[s._v("#")]),s._v(" Set max server memory size")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USE")]),s._v(" master\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXEC")]),s._v(" sp_configure "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'max server memory (MB)'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RECONFIGURE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" OVERRIDE\n\n")])])]),t("h2",{attrs:{id:"set-number-of-checkpoint-tasks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-number-of-checkpoint-tasks"}},[s._v("#")]),s._v(" Set number of checkpoint tasks")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXEC")]),s._v(" sp_configure "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"number of checkpoint tasks"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);