(window.webpackJsonp=window.webpackJsonp||[]).push([[1431],{1776:function(e,t,o){"use strict";o.r(t);var n=o(19),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"profile-with-instruments"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#profile-with-instruments"}},[e._v("#")]),e._v(" Profile with Instruments")]),e._v(" "),o("p",[e._v("Xcode includes a performance tuning application named Instruments that you can use to profile your application using all sorts of different metrics. They have tools to inspect CPU usage, memory usage, leaks, file/network activity, and energy usage, just to name a few. It’s really easy to start profiling your app from Xcode, but it’s sometimes not as easy to understand what you see when it’s profiling, which deters some developers from being able to use this tool to its fullest potential.")]),e._v(" "),o("h2",{attrs:{id:"time-profiler"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#time-profiler"}},[e._v("#")]),e._v(" Time Profiler")]),e._v(" "),o("p",[e._v("The first instrument you’ll look at is the "),o("code",[e._v("Time Profiler")]),e._v(". At measured intervals, Instruments will halt the execution of the program and take a stack trace on each running thread. Think of it as pressing the pause button in Xcode’s debugger.Here’s a sneak preview of the Time Profiler :-")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://i.stack.imgur.com/zCYwG.png",target:"_blank",rel:"noopener noreferrer"}},[o("img",{attrs:{src:"https://i.stack.imgur.com/zCYwG.png",alt:""}}),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("This screen displays the "),o("code",[e._v("Call Tree")]),e._v(". The "),o("code",[e._v("Call Tree")]),e._v(" shows the amount of time spent executing in various methods within an app. Each row is a different method that the program’s execution path has followed. The time spent in each method can be determined from the number of times the profiler is stopped in each method.\nFor instance, if "),o("strong",[e._v("100")]),e._v(" samples are done at "),o("strong",[e._v("1 millisecond intervals")]),e._v(", and a particular method is found to be at the top of the stack in 10 samples, then you can deduce that approximately "),o("strong",[e._v("10%")]),e._v(" of the total execution time — "),o("strong",[e._v("10 milliseconds")]),e._v(" — was spent in that method. It’s a fairly crude approximation, but it works!")]),e._v(" "),o("p",[e._v("From "),o("code",[e._v("Xcode’s")]),e._v(" menu bar, select "),o("code",[e._v("Product\\Profile")]),e._v(", or "),o("code",[e._v("press ⌘I")]),e._v(". This will build the app and launch Instruments. You will be greeted with a selection window that looks like this:")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://i.stack.imgur.com/5IShT.png",target:"_blank",rel:"noopener noreferrer"}},[o("img",{attrs:{src:"https://i.stack.imgur.com/5IShT.png",alt:""}}),o("OutboundLink")],1),e._v("\nThese are all different templates that come with Instruments.")]),e._v(" "),o("p",[e._v("Select the "),o("code",[e._v("Time Profiler")]),e._v(" instrument and click Choose. This will open up a new Instruments document. Click the red "),o("strong",[e._v("record button")]),e._v(" in the top left to start recording and launch the app. You may be asked for your password to authorize "),o("strong",[e._v("Instruments")]),e._v(" to analyze other processes — fear not, it’s safe to provide here!\nIn the "),o("strong",[e._v("Instruments window")]),e._v(", you can see the time counting up, and a little arrow moving from left to right above the "),o("strong",[e._v("graph")]),e._v(" in the center of the screen. This indicates that the app is running.")]),e._v(" "),o("p",[e._v("Now, start using the app. Search for some images, and drill down into one or more of the search results. You have probably noticed that going into a search result is tediously slow, and scrolling through a list of search results is also incredibly annoying – it’s a terribly clunky app!")]),e._v(" "),o("p",[e._v("Well, you’re in luck, for you’re about to embark on fixing it! However, you’re first going to get a quick run down on what you’re looking at in "),o("strong",[e._v("Instruments")]),e._v(".\nFirst, make sure the view selector on the right hand side of the toolbar has both options selected, like so:")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://i.stack.imgur.com/R8Hkj.png",target:"_blank",rel:"noopener noreferrer"}},[o("img",{attrs:{src:"https://i.stack.imgur.com/R8Hkj.png",alt:""}}),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("That will ensure that all panels are open. Now study the screenshot below and the explanation of each section beneath it:")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://i.stack.imgur.com/j3eDk.png",target:"_blank",rel:"noopener noreferrer"}},[o("img",{attrs:{src:"https://i.stack.imgur.com/j3eDk.png",alt:""}}),o("OutboundLink")],1)]),e._v(" "),o("p",[o("strong",[e._v("1.")]),e._v("   These are the "),o("strong",[e._v("recording controls")]),e._v(". The red ‘record’ button will stop & start the app currently being profiled when it is clicked (it toggles between a record and stop icon). The pause button does exactly what you’d expect and pauses the current execution of the app.")]),e._v(" "),o("p",[o("strong",[e._v("2.")]),e._v(" This is the run timer. The timer counts how long the app being profiled has been running, and how many times it has been run. If you stop and then restart the app using the recording controls, that would start a new run and the display would then show Run 2 of 2.")]),e._v(" "),o("p",[o("strong",[e._v("3.")]),e._v(" This is called a track. In the case of the Time Profiler template you selected, there’s just one instrument so there’s just one track. You’ll learn more about the specifics of the graph shown here later in the tutorial.")]),e._v(" "),o("p",[o("strong",[e._v("4.")]),e._v(" This is the detail panel. It shows the main information about the particular instrument you’re using. In this case, it’s showing the methods which are “hottest” — that is, the ones that have used up the most CPU time.\nIf you click on the bar at the top which says Call Tree (the left hand one) and select Sample List, then you are presented with a different view of the data. This view is showing every single sample. Click on a few samples, and you’ll see the captured stack trace appear in the Extended Detail inspector.")]),e._v(" "),o("p",[o("strong",[e._v("5.")]),e._v(" This is the inspectors panel. There are three inspectors: Record Settings, Display Settings, and Extended Detail. You’ll be learning more about some of these options shortly.")]),e._v(" "),o("blockquote"),e._v(" "),o("p",[e._v("Drilling Deep")]),e._v(" "),o("p",[e._v("Perform an image search, and drill into the results. I personally like searching for “dog”, but choose whatever you wish – you might be one of those cat people!")]),e._v(" "),o("p",[e._v("Now, scroll up and down the list a few times so that you’ve got a good amount of data in the "),o("code",[e._v("Time Profiler")]),e._v(". You should notice the numbers in the middle of the screen changing and the "),o("strong",[e._v("graph")]),e._v(" filling in; this tells you that "),o("strong",[e._v("CPU")]),e._v(" "),o("strong",[e._v("cycles")]),e._v(" are being used.")]),e._v(" "),o("p",[e._v("You really wouldn’t expect any UI to be as clunky as this no "),o("code",[e._v("table view")]),e._v(" is ready to ship until it scrolls like butter! To help pinpoint the problem, you need to set some options.")]),e._v(" "),o("p",[e._v("On the right hand side, select the "),o("strong",[e._v("Display Settings inspector")]),e._v(" "),o("code",[e._v("(or press ⌘+2)")]),e._v(". In the "),o("strong",[e._v("inspector")]),e._v(", under the "),o("code",[e._v("Call Tree")]),e._v(" section, select Separate by "),o("strong",[e._v("Thread")]),e._v(", Invert "),o("code",[e._v("Call Tree")]),e._v(", Hide Missing Symbols and Hide System Libraries. It will look like this:")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://i.stack.imgur.com/nWbRV.png",target:"_blank",rel:"noopener noreferrer"}},[o("img",{attrs:{src:"https://i.stack.imgur.com/nWbRV.png",alt:""}}),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("Here’s what each option is doing to the data displayed in the table to the left:")]),e._v(" "),o("p",[o("strong",[e._v("Separate by Thread:")]),e._v(" Each thread should be considered separately. This enables you to understand which threads are responsible for the greatest amount of "),o("strong",[e._v("CPU")]),e._v(" use.")]),e._v(" "),o("p",[o("strong",[e._v("Invert Call Tree:")]),e._v(" With this option, the "),o("code",[e._v("stack trace")]),e._v(" is considered from top to bottom. This is usually what you want, as you want to see the deepest methods where the "),o("strong",[e._v("CPU")]),e._v(" is spending its time.")]),e._v(" "),o("p",[o("strong",[e._v("Hide Missing Symbols:")]),e._v(" If the "),o("code",[e._v("dSYM")]),e._v(" file cannot be found for your app or a "),o("code",[e._v("system framework")]),e._v(", then instead of seeing method names (symbols) in the table, you’ll just see hex values corresponding to addresses inside the binary. If this option is selected, then only fully resolved symbols are displayed and the unresolved "),o("strong",[e._v("hex")]),e._v(" values are hidden. This helps to declutter the data presented.")]),e._v(" "),o("p",[o("strong",[e._v("Hide System Libraries:")]),e._v(" When this option is selected, only symbols from your own app are displayed. It’s often useful to select this option, since usually you only care about where the "),o("strong",[e._v("CPU")]),e._v(" is spending time in your own code – you can’t do much about how much "),o("strong",[e._v("CPU")]),e._v(" the "),o("code",[e._v("system libraries")]),e._v(" are using!")]),e._v(" "),o("p",[o("strong",[e._v("Flatten Recursion:")]),e._v(" This option treats "),o("strong",[e._v("recursive")]),e._v(" functions (ones which call themselves) as one entry in each "),o("code",[e._v("stack trace")]),e._v(", rather than multiple.")]),e._v(" "),o("p",[o("strong",[e._v("Top Functions:")]),e._v(" Enabling this makes "),o("code",[e._v("Instruments")]),e._v(" consider the total time spent in a function as the sum of the time directly within that function, as well as the time spent in functions called by that function.")]),e._v(" "),o("p",[e._v("So if function A calls B, then A’s time is reported as the time spent in A PLUS the time spent in B. This can be really useful, as it lets you pick the largest time figure each time you descend into the call stack, zeroing in on your most time-consuming methods.")]),e._v(" "),o("p",[e._v("If you’re running an "),o("code",[e._v("Objective-C")]),e._v(" app, there’s also an option of Show "),o("strong",[e._v("Obj-C Only")]),e._v(": If this is selected, then only "),o("code",[e._v("Objective-C")]),e._v(" methods are displayed, rather than any "),o("code",[e._v("C")]),e._v(" or "),o("code",[e._v("C++")]),e._v(" functions. There are none in your program, but if you were looking at an "),o("code",[e._v("OpenGL")]),e._v(" app, it might have some "),o("code",[e._v("C++")]),e._v(", for example.")]),e._v(" "),o("p",[e._v("Although some values may be slightly different, the order of the entries should be similar to the table below once you have enabled the options above:")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://i.stack.imgur.com/EAd9S.png",target:"_blank",rel:"noopener noreferrer"}},[o("img",{attrs:{src:"https://i.stack.imgur.com/EAd9S.png",alt:""}}),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("Well, that certainly doesn’t look too good. The vast majority of time is spent in the method that applies the ‘tonal’ filter to the thumbnail photos. That shouldn’t come as too much of a shock to you, as the table loading and scrolling were the clunkiest parts of the UI, and that’s when the table cells are constantly being updated.")]),e._v(" "),o("p",[e._v("To find out more about what’s going on within that method, double click its row in the table. Doing so will bring up the following view:")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://i.stack.imgur.com/3ag0a.png",target:"_blank",rel:"noopener noreferrer"}},[o("img",{attrs:{src:"https://i.stack.imgur.com/3ag0a.png",alt:""}}),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("Well that’s interesting, isn’t it! "),o("code",[e._v("applyTonalFilter()")]),e._v(" is a method added to "),o("code",[e._v("UIImage")]),e._v(" in an extension, and almost "),o("strong",[e._v("100")]),e._v("% of the time spent in it is spent creating the CGImage output after applying the image filter.")]),e._v(" "),o("p",[e._v("There’s not really much that can be done to speed this up: creating the image is quite an intensive process, and takes as long as it takes. Let’s try stepping back and seeing where "),o("code",[e._v("applyTonalFilter()")]),e._v(" is called from. "),o("strong",[e._v("Click")]),e._v(" "),o("code",[e._v("Call Tree")]),e._v(" in the breadcrumb trail at the top of the code view to get back to the previous screen:")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://i.stack.imgur.com/uwjHz.png",target:"_blank",rel:"noopener noreferrer"}},[o("img",{attrs:{src:"https://i.stack.imgur.com/uwjHz.png",alt:""}}),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("Now click the small arrow to the left of the applyTonalFilter row at the top of the table. This will unfold the Call Tree to show the caller of applyTonalFilter. You may need to unfold the next row too; when profiling Swift, there will sometimes be duplicate rows in the Call Tree, prefixed with @objc. You’re interested in the first row that’s prefixed with your app’s target name (InstrumentsTutorial):")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://i.stack.imgur.com/j8YUW.png",target:"_blank",rel:"noopener noreferrer"}},[o("img",{attrs:{src:"https://i.stack.imgur.com/j8YUW.png",alt:""}}),o("OutboundLink")],1),e._v("\nIn this case, this row refers to the results collection view’s "),o("code",[e._v("cellForItemAtIndexPath")]),e._v(". Double click the row to see the associated code from the project.")]),e._v(" "),o("p",[e._v("Now you can see what the problem is. The method to apply the tonal filter takes a long time to execute, and it’s called directly from cellForItemAtIndexPath, which will block the "),o("code",[e._v("main thread")]),e._v(" (and therefore the entire UI) each time it’s ask for a filtered image.")]),e._v(" "),o("p",[o("strong",[e._v("Allocations")])]),e._v(" "),o("p",[e._v("There are detailed information about all the "),o("strong",[e._v("objects")]),e._v(" that are being created and the memory that backs them; it also shows you "),o("code",[e._v("retain counts")]),e._v(" of each object.\nTo start afresh with a new "),o("code",[e._v("instruments profile")]),e._v(", quit the Instruments app. This time, build and run the app, and open the Debug Navigator in the Navigators area. Then click on "),o("strong",[e._v("Memory")]),e._v(" to display graphs of memory usage in the main window:")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://i.stack.imgur.com/JBV2o.png",target:"_blank",rel:"noopener noreferrer"}},[o("img",{attrs:{src:"https://i.stack.imgur.com/JBV2o.png",alt:""}}),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("These graphs are useful for to get a quick idea about how your app is performing. But you’re going to need a bit more power. Click the "),o("code",[e._v("Profile in Instruments")]),e._v(" button and then Transfer to bring this session into "),o("strong",[e._v("Instruments")]),e._v(". The "),o("strong",[e._v("Allocations instrument")]),e._v(" will start up automatically.")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://i.stack.imgur.com/VnnRK.png",target:"_blank",rel:"noopener noreferrer"}},[o("img",{attrs:{src:"https://i.stack.imgur.com/VnnRK.png",alt:""}}),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("This time you’ll notice two tracks. One is called Allocations, and one is called Leaks. The Allocations track will be discussed in detail later on; the Leaks track is generally more useful in Objective-C, and won’t be covered in this tutorial.\nSo what bug are you going to track down next?\nThere’s something hidden in the project that you probably don’t know is there. You’ve likely heard about memory leaks. But what you may not know is that there are actually two kinds of leaks:")]),e._v(" "),o("p",[o("strong",[e._v("True memory leaks")]),e._v(" are where an object is no longer referenced by anything but still allocated – that means the memory can never be re-used. Even with Swift and "),o("code",[e._v("ARC")]),e._v(" helping manage memory, the most common kind of memory leak is a "),o("code",[e._v("retain cycle or strong reference cycle")]),e._v(". This is when two objects hold strong references to one another, so that each object keeps the other one from being deallocated. This means that their memory is never released!")]),e._v(" "),o("p",[o("strong",[e._v("Unbounded memory growth")]),e._v(" is where memory continues to be allocated and is never given a chance to be "),o("strong",[e._v("deallocated")]),e._v(". If this continues forever, then at some point the "),o("code",[e._v("system’s memory")]),e._v(" will be filled and you’ll have a big memory problem on your hands. In iOS this means that the app will be killed by the system.")]),e._v(" "),o("p",[e._v("With the Allocations "),o("strong",[e._v("instrument")]),e._v(" running on the app, make five different searches in the app but do not drill down into the results yet. Make sure the searches have some results! Now let the app settle a bit by waiting a few seconds.")]),e._v(" "),o("p",[e._v("You should have noticed that the "),o("strong",[e._v("graph")]),e._v(" in the Allocations track has been rising. This is telling you that memory is being allocated. It’s this feature that will guide you to finding "),o("code",[e._v("unbounded memory growth")]),e._v(".")]),e._v(" "),o("p",[e._v("What you’re going to perform is a "),o("code",[e._v("generation analysis")]),e._v(". To do this, press the button called Mark Generation. You’ll find the button at the top of the Display Settings inspector:")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://i.stack.imgur.com/t3m8U.png",target:"_blank",rel:"noopener noreferrer"}},[o("img",{attrs:{src:"https://i.stack.imgur.com/t3m8U.png",alt:""}}),o("OutboundLink")],1)]),e._v(" "),o("p",[o("strong",[e._v("Press it and you will see a red flag appear in the track, like so:")])]),e._v(" "),o("p",[o("a",{attrs:{href:"https://i.stack.imgur.com/9lMEO.png",target:"_blank",rel:"noopener noreferrer"}},[o("img",{attrs:{src:"https://i.stack.imgur.com/9lMEO.png",alt:""}}),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("The purpose of "),o("code",[e._v("generation analysis")]),e._v(" is to perform an action multiple times, and see if memory is growing in an "),o("code",[e._v("unbounded fashion")]),e._v(". "),o("strong",[e._v("Drill")]),e._v(" into a search, wait a few seconds for the images to load, and then go back to the main page. Then mark the generation again. Do this repeatedly for different searches.\nAfter a "),o("strong",[e._v("drilling")]),e._v(" into a few searches, "),o("strong",[e._v("Instruments")]),e._v(" will look like this:")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://i.stack.imgur.com/hn3H0.png",target:"_blank",rel:"noopener noreferrer"}},[o("img",{attrs:{src:"https://i.stack.imgur.com/hn3H0.png",alt:""}}),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("At this point, you should be getting suspicious. Notice how the blue graph is going up with each search that you "),o("strong",[e._v("drill")]),e._v(" into. Well, that certainly isn’t good. But wait, what about "),o("code",[e._v("memory warnings?")]),e._v(" You know about those, right? "),o("code",[e._v("Memory warnings")]),e._v(" are iOS’s way of telling an app that things are getting tight in the memory department, and you need to clear out some memory.")]),e._v(" "),o("p",[e._v("It’s possible that this growth is not just due to your app; it could be something in the depths of "),o("code",[e._v("UIKit")]),e._v(" that’s holding onto memory. Give the system frameworks and your app a chance to clear their "),o("strong",[e._v("memory")]),e._v(" first before pointing a finger at either one.")]),e._v(" "),o("p",[e._v("Simulate a "),o("code",[e._v("memory warning")]),e._v(" by selecting "),o("code",[e._v("Instrument\\Simulate Memory Warning")]),e._v(" in Instruments’ menu bar, or "),o("code",[e._v("Hardware\\Simulate Memory Warning")]),e._v(" from the "),o("code",[e._v("simulator’s")]),e._v(" menu bar. You’ll notice that memory usage dips a little, or perhaps not at all. Certainly not back to where it should be. So there’s still "),o("strong",[e._v("unbounded memory growth")]),e._v(" happening somewhere.")]),e._v(" "),o("p",[e._v("The reason for marking a generation after each iteration of drilling into a search is that you can see what "),o("strong",[e._v("memory")]),e._v(" has been allocated between each generation. Take a look in the detail panel and you’ll see a bunch of generations.")])])}),[],!1,null,null,null);t.default=a.exports}}]);