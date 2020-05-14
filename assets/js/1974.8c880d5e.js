(window.webpackJsonp=window.webpackJsonp||[]).push([[1974],{2319:function(t,a,s){"use strict";s.r(a);var e=s(19),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"backup-and-restore-database"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#backup-and-restore-database"}},[t._v("#")]),t._v(" Backup and Restore Database")]),t._v(" "),s("h2",{attrs:{id:"basic-backup-to-disk-with-no-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-backup-to-disk-with-no-options"}},[t._v("#")]),t._v(" Basic Backup to disk with no options")]),t._v(" "),s("p",[t._v("The following command backs up the "),s("strong",[t._v("'Users'")]),t._v(" database to "),s("strong",[t._v("'D:\\DB_Backup'")]),t._v(" file. Its better to not give an extension.")]),t._v(" "),s("p",[s("code",[t._v("BACKUP DATABASE Users TO DISK = 'D:\\DB_Backup'")])]),t._v(" "),s("h2",{attrs:{id:"basic-restore-from-disk-with-no-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-restore-from-disk-with-no-options"}},[t._v("#")]),t._v(" Basic Restore from disk with no options")]),t._v(" "),s("p",[t._v("The following command restores the "),s("strong",[t._v("'Users'")]),t._v(" database from "),s("strong",[t._v("'D:\\DB_Backup'")]),t._v(" file.")]),t._v(" "),s("p",[s("code",[t._v("RESTORE DATABASE Users FROM DISK = 'D:\\DB_Backup'")])]),t._v(" "),s("h2",{attrs:{id:"restore-database-with-replace"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#restore-database-with-replace"}},[t._v("#")]),t._v(" RESTORE Database with REPLACE")]),t._v(" "),s("p",[t._v("When you try to restore database from another server you might get the following error:")]),t._v(" "),s("blockquote"),t._v(" "),s("p",[t._v("Error 3154: The backup set holds a backup of a database other than the\nexisting database.")]),t._v(" "),s("p",[t._v("In that case you should use WITH REPLACE option to replace database with the database from backup:")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RESTORE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATABASE")]),t._v(" WWIDW\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DISK")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C:\\Backup\\WideWorldImportersDW-Full.bak'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REPLACE")]),t._v("\n\n")])])]),s("p",[t._v("Even in this case you might get the errors saying that files cannot be located on some path:")]),t._v(" "),s("blockquote"),t._v(" "),s("p",[t._v("Msg 3156, Level 16, State 3, Line 1 File 'WWI_Primary' cannot be\nrestored to 'D:\\Data\\WideWorldImportersDW.mdf'. Use WITH MOVE to\nidentify a valid location for the file.")]),t._v(" "),s("p",[t._v("This error happens probably because your files were not placed on the same folder path that exist on new server. In that case you should move individual database files to new location:")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RESTORE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATABASE")]),t._v(" WWIDW\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DISK")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C:\\Backup\\WideWorldImportersDW-Full.bak'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REPLACE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nMOVE "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'WWI_Primary'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C:\\Data\\WideWorldImportersDW.mdf'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nMOVE "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'WWI_UserData'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C:\\Data\\WideWorldImportersDW_UserData.ndf'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nMOVE "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'WWI_Log'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C:\\Data\\WideWorldImportersDW.ldf'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nMOVE "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'WWIDW_InMemory_Data_1'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C:\\Data\\WideWorldImportersDW_InMemory_Data_1'")]),t._v("\n\n")])])]),s("p",[t._v("With this statement you can replace database with all database files moved to new location.")]),t._v(" "),s("h4",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),s("ul",[s("li",[t._v("BACKUP DATABASE "),s("strong",[t._v("database")]),t._v(" TO "),s("strong",[t._v("backup_device [ ,...n ]")]),t._v(" WITH "),s("strong",[t._v("with_options [ ,...o ]")])]),t._v(" "),s("li",[t._v("RESTORE DATABASE "),s("strong",[t._v("database")]),t._v(" FROM "),s("strong",[t._v("backup_device [ ,...n ]")]),t._v(" WITH "),s("strong",[t._v("with_options [ ,...o ]")])])]),t._v(" "),s("h4",{attrs:{id:"parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameter")]),t._v(" "),s("th",[t._v("Details")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("database")])]),t._v(" "),s("td",[t._v("The name of the database to backup or restore")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("backup_device")])]),t._v(" "),s("td",[t._v("The device to backup or restore the database from, Like {DISK or TAPE}. Can be separated by commas ( , )")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("with_options")])]),t._v(" "),s("td",[t._v("Various options which can be used while performing the operation. Like formatting the disk where the backup is to be placed or restoring the database with replace option.")])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);