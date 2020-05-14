(window.webpackJsonp=window.webpackJsonp||[]).push([[2933],{3279:function(a,e,s){"use strict";s.r(e);var t=s(19),r=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"random-forest-algorithm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#random-forest-algorithm"}},[a._v("#")]),a._v(" Random Forest Algorithm")]),a._v(" "),s("h2",{attrs:{id:"basic-examples-classification-and-regression"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-examples-classification-and-regression"}},[a._v("#")]),a._v(" Basic examples - Classification and Regression")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('\n   ######  Used for both Classification and Regression examples\n    library(randomForest)\n    library(car)            ## For the Soils data\n    data(Soils)\n    \n    ######################################################\n    ##    RF Classification Example\n    set.seed(656)            ## for reproducibility\n    S_RF_Class = randomForest(Gp ~ ., data=Soils[,c(4,6:14)])\n    Gp_RF = predict(S_RF_Class, Soils[,6:14])\n    length(which(Gp_RF != Soils$Gp))            ## No Errors\n\n    ## Naive Bayes for comparison\n    library(e1071)\n    S_NB  = naiveBayes(Soils[,6:14], Soils[,4]) \n    Gp_NB = predict(S_NB, Soils[,6:14], type="class")\n    length(which(Gp_NB != Soils$Gp))            ## 6 Errors\n\n')])])]),s("p",[a._v("This example tested on the training data, but illustrates that RF can make very good models.")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('\n   ######################################################\n    ##    RF Regression Example\n    set.seed(656)            ## for reproducibility\n    S_RF_Reg = randomForest(pH ~ ., data=Soils[,6:14])\n    pH_RF = predict(S_RF_Reg, Soils[,6:14])\n\n    ## Compare Predictions with Actual values for RF and Linear Model\n    S_LM = lm(pH ~ ., data=Soils[,6:14])\n    pH_LM = predict(S_LM, Soils[,6:14])\n    par(mfrow=c(1,2))\n    plot(Soils$pH, pH_RF, pch=20, ylab="Predicted", main="Random Forest")\n    abline(0,1)\n    plot(Soils$pH, pH_LM, pch=20, ylab="Predicted", main="Linear Model")\n    abline(0,1)\n\n')])])]),s("p",[s("a",{attrs:{href:"https://i.stack.imgur.com/ieM8R.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://i.stack.imgur.com/ieM8R.png",alt:"Predicted Values vs Actuals for RF and Linear model"}}),s("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);