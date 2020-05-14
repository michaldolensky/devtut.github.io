(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{576:function(t,a,n){"use strict";n.r(a);var e=n(19),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"library-dagger-2-dependency-injection-in-applications"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#library-dagger-2-dependency-injection-in-applications"}},[t._v("#")]),t._v(" Library Dagger 2: Dependency Injection in Applications")]),t._v(" "),n("p",[t._v("Dagger 2, "),n("a",{attrs:{href:"https://github.com/google/dagger",target:"_blank",rel:"noopener noreferrer"}},[t._v("as explained on GitHub"),n("OutboundLink")],1),t._v(", is a compile-time evolution approach to dependency injection. Taking the approach started in Dagger 1.x to its ultimate conclusion, Dagger 2.x eliminates all reflection, and improves code clarity by removing the traditional "),n("code",[t._v("ObjectGraph")]),t._v("/"),n("code",[t._v("Injector")]),t._v(" in favor of user-specified "),n("code",[t._v("@Component")]),t._v(" interfaces.")]),t._v(" "),n("h2",{attrs:{id:"create-module-class-and-singleton-annotation-for-object"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#create-module-class-and-singleton-annotation-for-object"}},[t._v("#")]),t._v(" Create @Module Class and @Singleton annotation for Object")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("javax"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("inject")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" dagger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Module")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" dagger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Provides")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Module")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VehicleModule")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n \n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Provides")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Singleton")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Motor")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("provideMotor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Motor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n \n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Provides")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Singleton")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vehicle")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("provideVehicle")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vehicle")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Motor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),n("p",[t._v("Every provider (or method) must have the "),n("code",[t._v("@Provides")]),t._v(" annotation and the class must have the "),n("code",[t._v("@Module")]),t._v(" annotation. The "),n("code",[t._v("@Singleton")]),t._v(" annotation indicates that there will be only one instance of the object.")]),t._v(" "),n("h2",{attrs:{id:"request-dependencies-in-dependent-objects"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#request-dependencies-in-dependent-objects"}},[t._v("#")]),t._v(" Request Dependencies in Dependent Objects")]),t._v(" "),n("p",[t._v("Now that you have the providers for your different models, you need to request them. Just as "),n("code",[t._v("Vehicle")]),t._v(" needs "),n("code",[t._v("Motor")]),t._v(", you have to add the "),n("code",[t._v("@Inject")]),t._v(" annotation in the "),n("code",[t._v("Vehicle")]),t._v(" constructor as follows:")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Inject")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vehicle")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Motor")]),t._v(" motor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("motor "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" motor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),n("p",[t._v("You can use the "),n("code",[t._v("@Inject")]),t._v(" annotation to request dependencies in the constructor, fields, or methods. In this example, I'm keeping the injection in the constructor.")]),t._v(" "),n("h2",{attrs:{id:"connecting-modules-with-inject"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#connecting-modules-with-inject"}},[t._v("#")]),t._v(" Connecting @Modules with @Inject")]),t._v(" "),n("p",[t._v("The connection between the provider of dependencies, "),n("code",[t._v("@Module")]),t._v(", and the classes requesting them through "),n("code",[t._v("@Inject")]),t._v(" is made using "),n("code",[t._v("@Component")]),t._v(", which is an interface:")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("javax"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("inject")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" dagger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Component")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Singleton")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Component")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("modules "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VehicleModule")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VehicleComponent")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vehicle")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("provideVehicle")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),n("p",[t._v("For the "),n("code",[t._v("@Component")]),t._v(" annotation, you have to specify which modules are going to be used. In this example "),n("code",[t._v("VehicleModule")]),t._v(" is used, which is "),n("a",{attrs:{href:"https://stackoverflow.com/documentation/android/9079/library-dagger-2-as-a-dependenecy-injection-in-application/28195/create-module-class-and-singleton-annotation-for-object#t=201708020811325925762",target:"_blank",rel:"noopener noreferrer"}},[t._v("defined in this example"),n("OutboundLink")],1),t._v(". If you need to use more modules, then just add them using a comma as a separator.")]),t._v(" "),n("h2",{attrs:{id:"using-component-interface-to-obtain-objects"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-component-interface-to-obtain-objects"}},[t._v("#")]),t._v(" Using @Component Interface to Obtain Objects")]),t._v(" "),n("p",[t._v("Now that you have every connection ready, you have to obtain an instance of this interface and invoke its methods to obtain the object you need:")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VehicleComponent")]),t._v(" component "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Dagger_VehicleComponent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("builder")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("vehicleModule")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VehicleModule")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nvehicle "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" component"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("provideVehicle")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Toast")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeText")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("valueOf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vehicle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSpeed")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Toast")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LENGTH_SHORT"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),n("p",[t._v("When you try to create a new object of the interface with the "),n("code",[t._v("@Component")]),t._v(" annotation, you have to do it using the prefix "),n("code",[t._v("Dagger_<NameOfTheComponentInterface>")]),t._v(", in this case "),n("code",[t._v("Dagger_VehicleComponent")]),t._v(", and then use the builder method to call every module within.")]),t._v(" "),n("h4",{attrs:{id:"remarks"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),n("ol",[n("li",[t._v("Library setup in application(for maven, gradle,java projects)")]),t._v(" "),n("li",[t._v("Advantages of Dragger use")]),t._v(" "),n("li",[t._v("Important Links (for Documentation and demos)")]),t._v(" "),n("li",[t._v("How to integrate and use Dragger components")])]),t._v(" "),n("h3",{attrs:{id:"dagger-2-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dagger-2-api"}},[t._v("#")]),t._v(" Dagger 2 API:")]),t._v(" "),n("p",[t._v("Dagger 2 exposes a number of special annotations:")]),t._v(" "),n("p",[n("strong",[t._v("@Module")]),t._v("\nfor the classes whose methods provide dependencies")]),t._v(" "),n("p",[n("strong",[t._v("@Provides")]),t._v("\nfor the methods within @Module classes")]),t._v(" "),n("p",[n("strong",[t._v("@Inject")]),t._v("\nto request a dependency (a constructor, a field, or a method)")]),t._v(" "),n("p",[n("strong",[t._v("@Component")]),t._v(" is a bridge interface between modules and injection")]),t._v(" "),n("h3",{attrs:{id:"important-links"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#important-links"}},[t._v("#")]),t._v(" Important Links:")]),t._v(" "),n("p",[n("strong",[t._v("GitHub:")]),t._v(" "),n("a",{attrs:{href:"https://github.com/google/dagger",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/google/dagger"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("strong",[t._v("UserGuide(Google):")]),t._v(" "),n("a",{attrs:{href:"https://google.github.io/dagger/users-guide.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://google.github.io/dagger/users-guide.html"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("strong",[t._v("Videos:")]),t._v(" "),n("a",{attrs:{href:"https://google.github.io/dagger/resources.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://google.github.io/dagger/resources.html"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("strong",[t._v("Vogella Tutorial:")]),t._v(" "),n("a",{attrs:{href:"http://www.vogella.com/tutorials/Dagger/article.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.vogella.com/tutorials/Dagger/article.html"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("strong",[t._v("Codepath Tutorial:")]),t._v(" "),n("a",{attrs:{href:"https://github.com/codepath/android_guides/wiki/Dependency-Injection-with-Dagger-2",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/codepath/android_guides/wiki/Dependency-Injection-with-Dagger-2"),n("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=s.exports}}]);