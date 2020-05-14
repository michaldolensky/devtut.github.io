(window.webpackJsonp=window.webpackJsonp||[]).push([[3175],{3520:function(e,t,a){"use strict";a.r(t);var s=a(19),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"rails-generate-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rails-generate-commands"}},[e._v("#")]),e._v(" Rails generate commands")]),e._v(" "),a("p",[e._v("Usage: "),a("code",[e._v("rails generate GENERATOR_NAME [args] [options]")]),e._v(".")]),e._v(" "),a("p",[e._v("Use "),a("code",[e._v("rails generate")]),e._v(" to list available generators. Alias: "),a("code",[e._v("rails g")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"rails-generate-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rails-generate-model"}},[e._v("#")]),e._v(" Rails Generate Model")]),e._v(" "),a("p",[e._v("To generate an "),a("code",[e._v("ActiveRecord")]),e._v(" model that automagically creates the correct db migrations & boilerplate test files for your model, enter this command")]),e._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[e._v("rails generate model "),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("NAME")]),e._v(" column_name"),a("span",{pre:!0,attrs:{class:"token symbol"}},[e._v(":column_type")]),e._v("\n\n")])])]),a("p",[e._v("'NAME' is the name of the model. 'field' is the name of the column in the DB table and 'type' is the column type (e.g. "),a("code",[e._v("name:string")]),e._v(" or "),a("code",[e._v("body:text")]),e._v("). Check the Remarks section for a list of supported column types.")]),e._v(" "),a("p",[e._v("To setup foreign keys, add "),a("code",[e._v("belongs_to:model_name")]),e._v(".")]),e._v(" "),a("p",[e._v("So say you wanted to setup a "),a("code",[e._v("User")]),e._v(" model that has a "),a("code",[e._v("username")]),e._v(", "),a("code",[e._v("email")]),e._v(" and belongs to a "),a("code",[e._v("School")]),e._v(", you would type in the following")]),e._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[e._v("rails generate model "),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("User")]),e._v(" username"),a("span",{pre:!0,attrs:{class:"token symbol"}},[e._v(":string")]),e._v(" email"),a("span",{pre:!0,attrs:{class:"token symbol"}},[e._v(":string")]),e._v(" school"),a("span",{pre:!0,attrs:{class:"token symbol"}},[e._v(":belongs_to")]),e._v("\n\n")])])]),a("p",[a("code",[e._v("rails g")]),e._v(" is shorthand for "),a("code",[e._v("rails generate")]),e._v(". This would produce the same result")]),e._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[e._v("rails g model "),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("User")]),e._v(" username"),a("span",{pre:!0,attrs:{class:"token symbol"}},[e._v(":string")]),e._v(" email"),a("span",{pre:!0,attrs:{class:"token symbol"}},[e._v(":string")]),e._v(" school"),a("span",{pre:!0,attrs:{class:"token symbol"}},[e._v(":belongs_to")]),e._v("\n\n")])])]),a("h2",{attrs:{id:"rails-generate-migration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rails-generate-migration"}},[e._v("#")]),e._v(" Rails Generate Migration")]),e._v(" "),a("p",[e._v("You can generate a rails migration file from the terminal using the following command:")]),e._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[e._v("rails generate migration "),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("NAME")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[e._v(":type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[e._v(":index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[e._v(":type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[e._v(":index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n\n")])])]),a("p",[e._v("For a list of all the options supported by the command, you could run the command without any arguments as in "),a("code",[e._v("rails generate migration")]),e._v(".")]),e._v(" "),a("p",[e._v("For example, if you want to add "),a("code",[e._v("first_name")]),e._v(" and "),a("code",[e._v("last_name")]),e._v(" fields to "),a("code",[e._v("users")]),e._v(" table, you can do:")]),e._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[e._v("rails generate migration "),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("AddNamesToUsers")]),e._v(" last_name"),a("span",{pre:!0,attrs:{class:"token symbol"}},[e._v(":string")]),e._v(" first_name"),a("span",{pre:!0,attrs:{class:"token symbol"}},[e._v(":string")]),e._v("\n\n")])])]),a("p",[e._v("Rails will create the following migration file:")]),e._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("AddNamesToUsers")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("ActiveRecord")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("Migration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("5.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("def")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("change")])]),e._v("\n    add_column "),a("span",{pre:!0,attrs:{class:"token symbol"}},[e._v(":users")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token symbol"}},[e._v(":last_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token symbol"}},[e._v(":string")]),e._v("\n    add_column "),a("span",{pre:!0,attrs:{class:"token symbol"}},[e._v(":users")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token symbol"}},[e._v(":first_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token symbol"}},[e._v(":string")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("end")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("end")]),e._v("\n\n")])])]),a("p",[e._v("Now, apply the pending migrations to the database by running the following in the terminal:")]),e._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[e._v("rake db"),a("span",{pre:!0,attrs:{class:"token symbol"}},[e._v(":migrate")]),e._v("\n\n")])])]),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[e._v("rails db"),a("span",{pre:!0,attrs:{class:"token symbol"}},[e._v(":migrate")]),e._v("\n\n")])])]),a("blockquote"),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" For even less typing, you can replace "),a("code",[e._v("generate")]),e._v(" with "),a("code",[e._v("g")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"rails-generate-scaffold"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rails-generate-scaffold"}},[e._v("#")]),e._v(" Rails Generate Scaffold")]),e._v(" "),a("p",[a("strong",[a("strong",[e._v("DISCLAIMER")])]),e._v(": Scaffolding is not recommended unless it's for very conventional CRUD apps/testing. This may generate a lot of files(views/models/controllers) that are not needed in your web application thus causing headaches(bad 😦).")]),e._v(" "),a("p",[e._v("To generate a fully working scaffold for a new object, including model, controller, views, assets, and tests, use the "),a("code",[e._v("rails g scaffold")]),e._v(" command.")]),e._v(" "),a("p",[e._v("Then you can run "),a("code",[e._v("rake db:migrate")]),e._v(" to set up the database table.")]),e._v(" "),a("p",[e._v("Then you can visit "),a("a",{attrs:{href:"http://localhost:3000/widgets",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:3000/widgets"),a("OutboundLink")],1),e._v(" and you'll see a fully functional CRUD scaffold.")]),e._v(" "),a("h2",{attrs:{id:"rails-generate-controller"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rails-generate-controller"}},[e._v("#")]),e._v(" Rails Generate Controller")]),e._v(" "),a("p",[e._v("we can create a new controller with "),a("code",[e._v("rails g controller")]),e._v(" command.")]),e._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[e._v("$ bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("rails generate controller controller_name\n\n")])])]),a("p",[e._v("The controller generator is expecting parameters in the form of "),a("code",[e._v("generate controller ControllerName action1 action2")]),e._v(".")]),e._v(" "),a("p",[e._v("The following creates a Greetings controller with an action of hello.")]),e._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[e._v("$ bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("rails generate controller "),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("Greetings")]),e._v(" hello\n\n")])])]),a("p",[e._v("You will see the following output")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('\n    create  app/controllers/greetings_controller.rb\n      route  get "greetings/hello"\n     invoke  erb\n     create    app/views/greetings\n     create    app/views/greetings/hello.html.erb\n     invoke  test_unit\n     create    test/controllers/greetings_controller_test.rb\n     invoke  helper\n     create    app/helpers/greetings_helper.rb\n     invoke  assets\n     invoke    coffee\n     create      app/assets/javascripts/greetings.coffee\n     invoke    scss\n     create      app/assets/stylesheets/greetings.scss\n\n')])])]),a("p",[e._v("This generates the following")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("File")]),e._v(" "),a("th",[e._v("Example")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Controller File")]),e._v(" "),a("td",[a("code",[e._v("greetings_controller.rb")])])]),e._v(" "),a("tr",[a("td",[e._v("View File")]),e._v(" "),a("td",[a("code",[e._v("hello.html.erb")])])]),e._v(" "),a("tr",[a("td",[e._v("Functional Test File")]),e._v(" "),a("td",[a("code",[e._v("greetings_controller_test.rb")])])]),e._v(" "),a("tr",[a("td",[e._v("View Helper")]),e._v(" "),a("td",[a("code",[e._v("greetings_helper.rb")])])]),e._v(" "),a("tr",[a("td",[e._v("JavaScript File")]),e._v(" "),a("td",[a("code",[e._v("greetings.coffee")])])])])]),e._v(" "),a("p",[e._v("It will also add routes for each action in "),a("code",[e._v("routes.rb")])]),e._v(" "),a("h4",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Details")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("-h")]),e._v("/"),a("code",[e._v("--help")])]),e._v(" "),a("td",[e._v("Get help on any generator command")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("-p")]),e._v("/"),a("code",[e._v("--pretend")])]),e._v(" "),a("td",[e._v("Pretend Mode: Run generator but will not create or change any files")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("field:type")])]),e._v(" "),a("td",[e._v("'field-name' is the name of the column to be created and 'type' is the data-type of column. The possible values for 'type' in "),a("code",[e._v("field:type")]),e._v(" are given in the Remarks section.")])])])]),e._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[e._v("#")]),e._v(" Remarks")]),e._v(" "),a("p",[e._v("The possible values for 'type' in "),a("code",[e._v("field:type")]),e._v(" are:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Data Type")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v(":string")])]),e._v(" "),a("td",[e._v("For smaller pieces of text (usually has a character limit of 255)")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v(":text")])]),e._v(" "),a("td",[e._v("For longer pieces of text, like a paragraph")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v(":binary")])]),e._v(" "),a("td",[e._v("Storing data including images, audios and videos")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v(":boolean")])]),e._v(" "),a("td",[e._v("Storing true or false values")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v(":date")])]),e._v(" "),a("td",[e._v("Only the date")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v(":time")])]),e._v(" "),a("td",[e._v("Only the time")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v(":datetime")])]),e._v(" "),a("td",[e._v("Date and time")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v(":float")])]),e._v(" "),a("td",[e._v("Storing floats without precision")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v(":decimal")])]),e._v(" "),a("td",[e._v("Storing floats with precision")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v(":integer")])]),e._v(" "),a("td",[e._v("Storing whole numbers")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);