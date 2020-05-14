(window.webpackJsonp=window.webpackJsonp||[]).push([[3426],{3775:function(t,e,r){"use strict";r.r(e);var i=r(19),a=Object(i.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"macro-security-and-signing-of-vba-projects-modules"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#macro-security-and-signing-of-vba-projects-modules"}},[t._v("#")]),t._v(" Macro security and signing of VBA-projects/-modules")]),t._v(" "),r("h2",{attrs:{id:"create-a-valid-digital-self-signed-certificate-selfcert-exe"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#create-a-valid-digital-self-signed-certificate-selfcert-exe"}},[t._v("#")]),t._v(" Create a valid digital self-signed certificate SELFCERT.EXE")]),t._v(" "),r("p",[t._v("To run macros and maintain the security Office applications provide against malicious code, it is necessary to digitally sign the VBAProject.OTM from the "),r("strong",[t._v("VBA editor > Tools > Digital Signature")]),t._v(".")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://i.stack.imgur.com/FjwVD.png",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://i.stack.imgur.com/FjwVD.png",alt:"enter image description here"}}),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("Office comes with a utility to create a self-signed digital certificate that you can employ on the PC to sign your projects.")]),t._v(" "),r("p",[t._v("This utility "),r("strong",[t._v("SELFCERT.EXE")]),t._v(" is in the Office program folder,")]),t._v(" "),r("p",[t._v("Click on Digital Certificate for VBA Projects to open the certificate "),r("strong",[t._v("wizard")]),t._v(".")]),t._v(" "),r("p",[t._v("In the dialog enter a suitable name for the certificate and click OK.")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://i.stack.imgur.com/tbaZ5.png",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://i.stack.imgur.com/tbaZ5.png",alt:"enter image description here"}}),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("If all goes well you will see a confirmation:")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://i.stack.imgur.com/XVtmg.png",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://i.stack.imgur.com/XVtmg.png",alt:"enter image description here"}}),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("You can now close the "),r("strong",[t._v("SELFCERT")]),t._v(" wizard and turn your attention to the certificate you have created.")]),t._v(" "),r("p",[t._v("If you try to employ the certificate you have just created and you check its properties")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://i.stack.imgur.com/2zTPg.png",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://i.stack.imgur.com/2zTPg.png",alt:"enter image description here"}}),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://i.stack.imgur.com/ZJiw2.png",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://i.stack.imgur.com/ZJiw2.png",alt:"enter image description here"}}),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("You will see that the certificate is not trusted and the reason is indicated in the dialog.")]),t._v(" "),r("p",[t._v("The certificate has been created in the Current User > Personal > Certificates store. It needs to go in Local Computer > Trusted Root Certificate Authorities > Certificates store, so you need to export from the former and import to the latter.")]),t._v(" "),r("p",[t._v("Pressing the Windows "),r("kbd",[r("strong",[t._v("Key+R")])]),t._v(" which will open the 'Run' Window. then Enter 'mmc' in the window as shown below and click 'OK '.")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://i.stack.imgur.com/gIi1B.png",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://i.stack.imgur.com/gIi1B.png",alt:"enter image description here"}}),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("The Microsoft Management Console will open and look like the following.")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://i.stack.imgur.com/WwrQL.png",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://i.stack.imgur.com/WwrQL.png",alt:"enter image description here"}}),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("From the File menu, select Add/Remove Snap-in... Then from the ensuing dialog, double click Certificates and then click OK")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://i.stack.imgur.com/K0dW0.png",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://i.stack.imgur.com/K0dW0.png",alt:"enter image description here"}}),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("Expand the dropdown in the left window for "),r("strong",[t._v("Certificates - Current User")]),t._v("' and select certificates as shown below. The center panel will then show the certificates in that location, which will include the certificate you created earlier:")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://i.stack.imgur.com/xUFK4.png",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://i.stack.imgur.com/xUFK4.png",alt:"enter image description here"}}),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("Right click the certificate and select All Tasks > Export:")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://i.stack.imgur.com/Rp7Rd.png",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://i.stack.imgur.com/Rp7Rd.png",alt:"enter image description here"}}),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("Export Wizard")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://i.stack.imgur.com/VlTfq.png",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://i.stack.imgur.com/VlTfq.png",alt:"enter image description here"}}),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("Click Next")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://i.stack.imgur.com/Fa4jb.png",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://i.stack.imgur.com/Fa4jb.png",alt:"enter image description here"}}),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("the Only one pre-selected option will be available, so click 'Next' again:")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://i.stack.imgur.com/tVRfM.png",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://i.stack.imgur.com/tVRfM.png",alt:"enter image description here"}}),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("The top item will already be pre-selected. Click Next again and choose a name and location to save the exported certificate.")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://i.stack.imgur.com/6xmub.png",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://i.stack.imgur.com/6xmub.png",alt:"enter image description here"}}),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("Click Next again to save the certificate")]),t._v(" "),r("p",[t._v("Once focus is returned to the Management Console.")]),t._v(" "),r("p",[t._v("Expand the "),r("strong",[t._v("Certificates")]),t._v(" menu and from the Trusted Root Certification Authorities menu, select "),r("strong",[t._v("Certificates")]),t._v(".")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://i.stack.imgur.com/ymFx2.png",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://i.stack.imgur.com/ymFx2.png",alt:"enter image description here"}}),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("Right click. Select "),r("strong",[t._v("All Tasks")]),t._v(" and "),r("strong",[t._v("Import")])]),t._v(" "),r("p",[r("a",{attrs:{href:"https://i.stack.imgur.com/vYVwj.png",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://i.stack.imgur.com/vYVwj.png",alt:"enter image description here"}}),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://i.stack.imgur.com/Y5Lp5.png",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://i.stack.imgur.com/Y5Lp5.png",alt:"enter image description here"}}),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("Click next and Save to the "),r("strong",[t._v("Trusted Root Certification Authorities store")]),t._v(":")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://i.stack.imgur.com/o0avf.png",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://i.stack.imgur.com/o0avf.png",alt:"enter image description here"}}),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("Then Next > Finish,  now close the Console.")]),t._v(" "),r("p",[t._v("If you now use the certificate and check its properties, you will see that it is a trusted certificate and you can use it to sign your project:")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://i.stack.imgur.com/DlxuT.png",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://i.stack.imgur.com/DlxuT.png",alt:"enter image description here"}}),r("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=a.exports}}]);