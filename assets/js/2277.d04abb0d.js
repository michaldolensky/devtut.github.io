(window.webpackJsonp=window.webpackJsonp||[]).push([[2277],{2623:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"classes-and-objects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#classes-and-objects"}},[t._v("#")]),t._v(" Classes  and Objects")]),t._v(" "),a("h2",{attrs:{id:"difference-between-allocation-and-initialization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#difference-between-allocation-and-initialization"}},[t._v("#")]),t._v(" Difference between allocation and initialization")]),t._v(" "),a("p",[t._v("In most object oriented languages, allocating memory for an object and initializing it is an atomic operation:")]),t._v(" "),a("div",{staticClass:"language-objectivec extra-class"},[a("pre",{pre:!0,attrs:{class:"language-objectivec"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Both allocates memory and calls the constructor")]),t._v("\nMyClass object "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MyClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("In Objective-C, these are separate operations. The class methods "),a("code",[t._v("alloc")]),t._v(" (and its historic sibling "),a("code",[t._v("allocWithZone:")]),t._v(") makes the Objective-C runtime reserve the required memory and clears it. Except for a few internal values, all properties and variables are set to 0/"),a("code",[t._v("NO")]),t._v("/"),a("code",[t._v("nil")]),t._v(".")]),t._v(" "),a("p",[t._v('The object then is already "valid" but we always want to call a method to actually set up the object, which we call an '),a("strong",[t._v("initializer")]),t._v(". These serve the same purpose as "),a("strong",[t._v("constructors")]),t._v(" in other languages. By convention, these methods start with "),a("code",[t._v("init")]),t._v(". From a language point of view, they are just normal methods.")]),t._v(" "),a("div",{staticClass:"language-objectivec extra-class"},[a("pre",{pre:!0,attrs:{class:"language-objectivec"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Allocate memory and set all properties and variables to 0/NO/nil.")]),t._v("\nMyClass "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("object "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("MyClass alloc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Initialize the object.")]),t._v("\nobject "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("object init"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Shorthand:")]),t._v("\nobject "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("MyClass alloc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" init"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"creating-classes-with-initialization-values"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-classes-with-initialization-values"}},[t._v("#")]),t._v(" Creating classes with initialization values")]),t._v(" "),a("div",{staticClass:"language-objectivec extra-class"},[a("pre",{pre:!0,attrs:{class:"language-objectivec"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("import")]),t._v(" <Foundation/Foundation.h>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@interface")]),t._v(" Car"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("NSObject "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    NSString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("CarMotorCode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    NSString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("CarChassisCode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("instancetype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("initWithMotorValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" motorCode andChassisValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSInteger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("chassisCode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" startCar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" stopCar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@end")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@implementation")]),t._v(" Car\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("instancetype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("initWithMotorValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" motorCode andChassisValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSInteger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("chassisCode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    CarMotorCode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" motorCode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    CarChassisCode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" chassisCode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" startCar "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" stopCar "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@end")]),t._v("\n\n")])])]),a("p",[t._v("The method "),a("code",[t._v("initWithMotorValue: type andChassisValue: type")]),t._v(" will be used to initialize the Car objects.")]),t._v(" "),a("h2",{attrs:{id:"singleton-class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#singleton-class"}},[t._v("#")]),t._v(" Singleton Class")]),t._v(" "),a("p",[a("strong",[t._v("What is a Singleton Class?")])]),t._v(" "),a("p",[t._v("A singleton class returns the same instance no matter how many times an application requests it. Unlike a regular class, A singleton object provides a global point of access to the resources of its class.")]),t._v(" "),a("p",[a("strong",[t._v("When to Use Singleton Classes?")])]),t._v(" "),a("p",[t._v("Singletons are used in situations where this single point of control is desirable, such as with classes that offer some general service or resource.")]),t._v(" "),a("p",[a("strong",[t._v("How to Create Singleton Classes")])]),t._v(" "),a("p",[t._v("First, create a New file and subclass it from "),a("code",[t._v("NSObject")]),t._v(". Name it anything, we will use "),a("code",[t._v("CommonClass")]),t._v(" here. Xcode will now generate CommonClass.h and CommonClass.m files for you.")]),t._v(" "),a("p",[t._v("In your "),a("code",[t._v("CommonClass.h")]),t._v(" file:")]),t._v(" "),a("div",{staticClass:"language-objectivec extra-class"},[a("pre",{pre:!0,attrs:{class:"language-objectivec"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("import")]),t._v(" <Foundation/Foundation.h>")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@interface")]),t._v(" CommonClass "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" NSObject "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CommonClass "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("sharedObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@property")]),t._v(" NSString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("commonString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@end")]),t._v("\n\n")])])]),a("p",[t._v("In your "),a("code",[t._v("CommonClass.m")]),t._v(" File:")]),t._v(" "),a("div",{staticClass:"language-objectivec extra-class"},[a("pre",{pre:!0,attrs:{class:"language-objectivec"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("import")]),t._v(' "CommonClass.h"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@implementation")]),t._v(" CommonClass\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CommonClass "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("sharedObject "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" CommonClass "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("sharedClass "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nil"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" dispatch_once_t onceToken"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch_once")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("onceToken"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        sharedClass "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),t._v(" alloc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" init"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" sharedClass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("init "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),t._v(" init"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("commonString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"this is string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@end")]),t._v("\n\n")])])]),a("p",[a("strong",[t._v("How to Use Singleton Classes")])]),t._v(" "),a("p",[t._v("The Singleton Class that we created earlier will be accessible from anywhere in the project as long as you have imported "),a("code",[t._v("CommonClass.h")]),t._v(" file in the relevant module. To modify and access the shared data in Singleton Class, you will have to access the shared Object of that class which can be accessed by using "),a("code",[t._v("sharedObject")]),t._v(" method like following:")]),t._v(" "),a("div",{staticClass:"language-objectivec extra-class"},[a("pre",{pre:!0,attrs:{class:"language-objectivec"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("CommonClass sharedObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])])]),a("p",[t._v("To read or modify the elements in Shared Class, do the following:")]),t._v(" "),a("div",{staticClass:"language-objectivec extra-class"},[a("pre",{pre:!0,attrs:{class:"language-objectivec"}},[a("code",[t._v("NSString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("commonString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("CommonClass sharedObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("commonString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Read the string in singleton class")]),t._v("\n\nNSString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("newString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"New String"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("CommonClass sharedObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("commonString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Modified the string in singleton class")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"the-instancetype-return-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-instancetype-return-type"}},[t._v("#")]),t._v(' The "instancetype" return type')]),t._v(" "),a("p",[t._v("Objective-C supports a special type called `instancetype that can only be used as type returned by a method. It evaluates to the class of the receiving object.")]),t._v(" "),a("p",[t._v("Consider the following class hierarchy:")]),t._v(" "),a("div",{staticClass:"language-objectivec extra-class"},[a("pre",{pre:!0,attrs:{class:"language-objectivec"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@interface")]),t._v(" Foo "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" NSObject\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("instancetype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("initWithString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@end")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@interface")]),t._v(" Bar "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Foo\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@end")]),t._v("\n\n\n")])])]),a("p",[t._v("When "),a("code",[t._v('[[Foo alloc] initWithString:@"abc"]')]),t._v(" is called, the compiler can infer that the return type is "),a("code",[t._v("Foo *")]),t._v(". The "),a("code",[t._v("Bar")]),t._v(" class derived from "),a("code",[t._v("Foo")]),t._v(" but did not override the declaration of the initializer. Yet, thanks to "),a("code",[t._v("instancetype")]),t._v(", the compiler can infer that "),a("code",[t._v('[[Bar alloc] initWithString:@"xyz"]')]),t._v(" returns a value of type "),a("code",[t._v("Bar *")]),t._v(".")]),t._v(" "),a("p",[t._v("Consider the return type of "),a("code",[t._v("-[Foo initWithString:]")]),t._v(" being "),a("code",[t._v("Foo *")]),t._v(" instead: if you would call "),a("code",[t._v("[[Bar alloc] initWithString:]")]),t._v(", the compiler would infer that a "),a("code",[t._v("Foo *")]),t._v(" is returned, not a "),a("code",[t._v("Bar *")]),t._v(" as is the intention of the developer. The "),a("code",[t._v("instancetype")]),t._v(" solved this issue.")]),t._v(" "),a("p",[t._v("Before the introduction of "),a("code",[t._v("instancetype")]),t._v(", initializers, static methods like singleton accessors and other methods that want to return an instance of the receiving class needed to return an "),a("code",[t._v("id")]),t._v(". The problem is that "),a("code",[t._v("id")]),t._v(" means "),a("strong",[t._v('"an object of any type"')]),t._v(". The compiler is thus not able to detect that "),a("code",[t._v('NSString *wrong = [[Foo alloc] initWithString:@"abc"];')]),t._v(" is assigning to a variable with an incorrect type.")]),t._v(" "),a("p",[t._v("Due to this issue, "),a("strong",[t._v("initializers should always use "),a("code",[t._v("instancetype")]),t._v(" instead of "),a("code",[t._v("id")])]),t._v(" as the return value.")]),t._v(" "),a("h2",{attrs:{id:"specifying-generics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specifying-generics"}},[t._v("#")]),t._v(" Specifying Generics")]),t._v(" "),a("p",[t._v("You can enhance your own classes with "),a("strong",[t._v("generics")]),t._v(" just like "),a("code",[t._v("NSArray")]),t._v(" or "),a("code",[t._v("NSDictionary")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-objectivec extra-class"},[a("pre",{pre:!0,attrs:{class:"language-objectivec"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@interface")]),t._v(" MyClass"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("__covariant T"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@property")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nonnull"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nonatomic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" strong"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" readonly"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" NSArray"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("T"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" allObjects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" addObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nonnull T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@end")]),t._v("\n\n")])])]),a("h4",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("ul",[a("li",[t._v("Cat *cat = [[Cat alloc] init];     // Create cat object of type Cat")]),t._v(" "),a("li",[t._v("Dog *dog = [[Dog alloc] init];     // Create dog object of type Dog\n")]),a("li",[t._v("NSObject *someObject = [NSObject alloc];\n[someObject init]; // "),a("strong",[t._v("don’t do this")])]),t._v(" "),a("li",[t._v("XYZObject *object = [XYZObject new]; // Use new to create objects if NO arguments are needed for initialization")]),t._v(" "),a("li",[t._v('NSString *someString = @"Hello, World!"; // Creating an NSString with '),a("strong",[t._v("literal syntax")])]),t._v(" "),a("li",[t._v("NSNumber *myFloat = @3.14f; // Another example to create a NSNumber using literal syntax")]),t._v(" "),a("li",[t._v("NSNumber *myInt = @(84 / 2); // Create an object using a boxed expression")])])])}),[],!1,null,null,null);s.default=e.exports}}]);