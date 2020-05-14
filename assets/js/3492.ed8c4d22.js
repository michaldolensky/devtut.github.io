(window.webpackJsonp=window.webpackJsonp||[]).push([[3492],{3842:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"unit-testing-in-vb-net"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unit-testing-in-vb-net"}},[t._v("#")]),t._v(" Unit Testing in VB.NET")]),t._v(" "),a("h2",{attrs:{id:"unit-testing-for-tax-calculation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unit-testing-for-tax-calculation"}},[t._v("#")]),t._v(" Unit Testing for Tax Calculation")]),t._v(" "),a("p",[t._v("This example is divided into two pillars")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("SalaryCalculation Class")]),t._v(" : Calculating the net salary after tax deduction")]),t._v(" "),a("li",[a("strong",[t._v("SalaryCalculationTests Class")]),t._v(" : For testing the method that calculates the net salary")])]),t._v(" "),a("p",[a("strong",[t._v("Step 1:")]),t._v(" Create Class Library, name it "),a("strong",[t._v("WagesLibrary")]),t._v(" or any appropriate name. Then rename the class to "),a("strong",[t._v("SalaryCalculation")])]),t._v(" "),a("p",[t._v("'''\n''' Class for Salary Calculations\n'''\nPublic Class SalaryCalculation")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\n   ''' <summary>\n    ''' Employee Salary\n    ''' </summary>\n    Public Shared Salary As Double\n\n    ''' <summary>\n    ''' Tax fraction (0-1)\n    ''' </summary>\n    Public Shared Tax As Double\n\n    ''' <summary>\n    ''' Function to calculate Net Salary\n    ''' </summary>\n    ''' <returns></returns>\n    Public Shared Function CalculateNetSalary()\n        Return Salary - Salary * Tax\n    End Function\nEnd Class\n\n")])])]),a("p",[a("strong",[t._v("Step 2")]),t._v(" : Create Unit Test Project. Add reference to the created class library and paste the below code")]),t._v(" "),a("div",{staticClass:"language-vb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Imports")]),t._v(" WagesLibrary "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'Class library you want to test")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("''' <summary>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("''' Test class for testing SalaryCalculation")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("''' </summary>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("TestClass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Class")]),t._v(" SalaryCalculationTests\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("''' <summary>")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("''' Test case for the method CalculateNetSalary")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("''' </summary>")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("TestMethod"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v(" CalculateNetSalaryTest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        SalaryCalculation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Salary "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n        SalaryCalculation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Tax "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),t._v("\n        Assert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AreEqual"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("90.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SalaryCalculation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CalculateNetSalary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Class")]),t._v("\n\n")])])]),a("p",[a("code",[t._v("Assert.Equal")]),t._v(" checks the expected value against the actual calculated value. the value "),a("code",[t._v("0.1")]),t._v(" is used to allow tolerance or variation between "),a("strong",[t._v("expected")]),t._v(" and "),a("strong",[t._v("actual")]),t._v(" result.")]),t._v(" "),a("p",[t._v("Step 3 : Run the test of the method to see result\n"),a("a",{attrs:{href:"http://i.stack.imgur.com/CEHyj.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"http://i.stack.imgur.com/CEHyj.png",alt:"enter image description here"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[a("strong",[t._v("Test result")]),t._v(" "),a("a",{attrs:{href:"http://i.stack.imgur.com/RRbXy.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"http://i.stack.imgur.com/RRbXy.png",alt:"enter image description here"}}),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"testing-employee-class-assigned-and-derived-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#testing-employee-class-assigned-and-derived-properties"}},[t._v("#")]),t._v(" Testing Employee Class assigned and derived Properties")]),t._v(" "),a("p",[t._v("This example has more tests available in unit testing.")]),t._v(" "),a("p",[a("strong",[t._v("Employee.vb")]),t._v(" (Class Library)")]),t._v(" "),a("div",{staticClass:"language-vb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("''' <summary>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("''' Employee Class")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("''' </summary>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Class")]),t._v(" Employee\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("''' <summary>")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("''' First name of employee")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("''' </summary>")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Property")]),t._v(" FirstName "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("''' <summary>")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("''' Last name of employee")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("''' </summary>")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Property")]),t._v(" LastName "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("''' <summary>")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("''' Full name of employee")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("''' </summary>")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ReadOnly")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Property")]),t._v(" FullName "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("''' <summary>")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("''' Employee's age")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("''' </summary>")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Property")]),t._v(" Age "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Byte")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("''' <summary>")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("''' Instantiate new instance of employee")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("''' </summary>")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("''' <param name=\"firstName\">Employee first name</param>")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("''' <param name=\"lastName\">Employee last name</param>")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("New")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("firstName "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lastName "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dateofbirth "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Me")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FirstName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" firstName\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Me")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LastName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" lastName\n        FullName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Me")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FirstName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Me")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LastName\n        Age "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Convert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ToByte"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Now"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Year "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" dateofbirth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Year"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Class")]),t._v("\n\n")])])]),a("p",[a("strong",[t._v("EmployeeTest.vb")]),t._v(" (Test Project)")]),t._v(" "),a("div",{staticClass:"language-vb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Imports")]),t._v(" HumanResources\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("TestClass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Class")]),t._v(" EmployeeTests\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ReadOnly")]),t._v(" _person1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("New")]),t._v(" Employee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Waleed"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"El-Badry"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("New")]),t._v(" DateTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1980")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ReadOnly")]),t._v(" _person2 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("New")]),t._v(" Employee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Waleed"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"El-Badry"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("New")]),t._v(" DateTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1980")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("TestMethod"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v(" TestFirstName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        Assert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AreEqual"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Waleed"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _person1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FirstName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"First Name Mismatch"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("TestMethod"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v(" TestLastName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        Assert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AreNotEqual"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _person1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LastName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"No Last Name Inserted!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("TestMethod"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v(" TestFullName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        Assert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AreEqual"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Waleed El-Badry"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _person1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FullName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Error in concatination of names"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("TestMethod"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v(" TestAge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        Assert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Fail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Age is not even tested !"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'Force test to fail !")]),t._v("\n        Assert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AreEqual"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Convert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ToByte"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("36")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _person1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("TestMethod"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v(" TestObjectReference"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        Assert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AreSame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_person1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FullName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _person2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FullName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Different objects with same data"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Class")]),t._v("\n\n")])])]),a("p",[a("strong",[t._v("Result after running tests")])]),t._v(" "),a("p",[a("a",{attrs:{href:"http://i.stack.imgur.com/hhJ92.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"http://i.stack.imgur.com/hhJ92.png",alt:"enter image description here"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"http://i.stack.imgur.com/oohnv.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"http://i.stack.imgur.com/oohnv.png",alt:"enter image description here"}}),a("OutboundLink")],1)]),t._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),a("p",[t._v("This is the simplest yet descriptive example for the unit testing procedure. Feel free to add more methods to check against different data types.")])])}),[],!1,null,null,null);s.default=n.exports}}]);