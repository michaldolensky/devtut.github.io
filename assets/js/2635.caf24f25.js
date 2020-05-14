(window.webpackJsonp=window.webpackJsonp||[]).push([[2635],{2981:function(e,t,a){"use strict";a.r(t);var s=a(19),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"using-the-help-system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-help-system"}},[e._v("#")]),e._v(" Using the Help System")]),e._v(" "),a("h2",{attrs:{id:"updating-the-help-system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updating-the-help-system"}},[e._v("#")]),e._v(" Updating the Help System")]),e._v(" "),a("p",[e._v("Beginning with PowerShell 3.0, you can download and update the offline help documentation using a single cmdlet.")]),e._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("Update-Help")]),e._v("\n\n")])])]),a("p",[e._v("To update help on multiple computers (or computers not connected to the internet).")]),e._v(" "),a("p",[e._v("Run the following on a computer with the help files")]),e._v(" "),a("p",[a("code",[e._v("Save-Help -DestinationPath \\\\Server01\\Share\\PSHelp -Credential $Cred")])]),e._v(" "),a("p",[e._v("To run on many computers remotely")]),e._v(" "),a("p",[a("code",[e._v("Invoke-Command -ComputerName (Get-Content Servers.txt) -ScriptBlock {Update-Help -SourcePath \\\\Server01\\Share\\Help -Credential $cred}")])]),e._v(" "),a("h2",{attrs:{id:"using-get-help"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-get-help"}},[e._v("#")]),e._v(" Using Get-Help")]),e._v(" "),a("p",[a("code",[e._v("Get-Help")]),e._v(" can be used to view help in PowerShell. You can search for cmdlets, functions, providers or other topics.")]),e._v(" "),a("p",[e._v("In order to view the help documentation about jobs, use:")]),e._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("Get-Help")]),e._v(" about_Jobs\n\n")])])]),a("p",[e._v("You can search for topics using wildcards. If you want to list available help topics with a title starting with "),a("code",[e._v("about_")]),e._v(", try:")]),e._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("Get-Help")]),e._v(" about_"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("\n\n")])])]),a("p",[e._v("If you wanted help on "),a("code",[e._v("Select-Object")]),e._v(", you would use:")]),e._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("Get-Help")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("Select-Object")]),e._v("\n\n")])])]),a("p",[e._v("You can also use the aliases "),a("code",[e._v("help")]),e._v(" or "),a("code",[e._v("man")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"viewing-online-version-of-a-help-topic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#viewing-online-version-of-a-help-topic"}},[e._v("#")]),e._v(" Viewing online version of a help topic")]),e._v(" "),a("p",[e._v("You can access online help documentation using:")]),e._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("Get-Help")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("Get-Command")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Online\n\n")])])]),a("h2",{attrs:{id:"viewing-examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#viewing-examples"}},[e._v("#")]),e._v(" Viewing Examples")]),e._v(" "),a("p",[e._v("Show usage examples for a specific cmdlet.")]),e._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("Get-Help")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("Get-Command")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Examples\n\n")])])]),a("h2",{attrs:{id:"viewing-the-full-help-page"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#viewing-the-full-help-page"}},[e._v("#")]),e._v(" Viewing the Full Help Page")]),e._v(" "),a("p",[e._v("View the full documentation for the topic.")]),e._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("Get-Help")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("Get-Command")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Full\n\n")])])]),a("h2",{attrs:{id:"viewing-help-for-a-specific-parameter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#viewing-help-for-a-specific-parameter"}},[e._v("#")]),e._v(" Viewing help for a specific parameter")]),e._v(" "),a("p",[e._v("You can view help for a specific parameter using:")]),e._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("Get-Help")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("Get-Content")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Parameter Path\n\n")])])]),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[e._v("#")]),e._v(" Remarks")]),e._v(" "),a("p",[a("code",[e._v("Get-Help")]),e._v(" is a cmdlet for reading help topics in PowerShell.")]),e._v(" "),a("p",[e._v("Read more a "),a("a",{attrs:{href:"https://technet.microsoft.com/en-us/library/hh849696(v=wps.640).aspx",target:"_blank",rel:"noopener noreferrer"}},[e._v("TechNet"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);