(window.webpackJsonp=window.webpackJsonp||[]).push([[326],{672:function(a,t,s){"use strict";s.r(t);var n=s(19),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"universal-image-loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#universal-image-loader"}},[a._v("#")]),a._v(" Universal Image Loader")]),a._v(" "),s("h2",{attrs:{id:"basic-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-usage"}},[a._v("#")]),a._v(" Basic usage")]),a._v(" "),s("li",[a._v("\nLoad an image, decode it into a bitmap, and display the bitmap in an `ImageView` (or any other view which implements the `ImageAware` interface):\n"),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ImageLoader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("displayImage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("imageUri"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" imageView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n")])])])]),a._v(" "),s("li",[a._v("\nLoad an image, decode it into a bitmap, and return the bitmap to a callback:\n"),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ImageLoader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("loadImage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("imageUri"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("SimpleImageLoadingListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("onLoadingComplete")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" imageUri"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("View")]),a._v(" view"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Bitmap")]),a._v(" loadedImage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Do whatever you want with the bitmap.")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n")])])])]),a._v(" "),s("li",[a._v("\nLoad an image, decode it into a bitmap and return the bitmap synchronously:\n"),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Bitmap")]),a._v(" bmp "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ImageLoader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("loadImageSync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("imageUri"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n")])])])]),a._v(" "),s("h2",{attrs:{id:"initialize-universal-image-loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#initialize-universal-image-loader"}},[a._v("#")]),a._v(" Initialize Universal Image Loader")]),a._v(" "),s("li",[a._v("\nAdd the following dependency to the **build.gradle** file:\n"),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("compile "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'com.nostra13.universalimageloader:universal-image-loader:1.9.5'")]),a._v("\n\n")])])])]),a._v(" "),s("li",[a._v("\nAdd the following permissions to the **AndroidManifest.xml** file:\n"),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("uses")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("permission android"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"android.permission.INTERNET"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("uses")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("permission android"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"android.permission.WRITE_EXTERNAL_STORAGE"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n")])])])]),a._v(" "),s("li",[a._v("\nInitialize the Universal Image Loader. This must be done before the first usage:\n"),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ImageLoaderConfiguration")]),a._v(" config "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ImageLoaderConfiguration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Builder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// ...")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ImageLoader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n")])])]),s("p",[a._v("The full configuration options can be found "),s("a",{attrs:{href:"https://github.com/nostra13/Android-Universal-Image-Loader/wiki/Configuration",target:"_blank",rel:"noopener noreferrer"}},[a._v("here"),s("OutboundLink")],1),a._v(".\n")])]),s("p"),a._v(" "),s("h4",{attrs:{id:"remarks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[a._v("#")]),a._v(" Remarks")]),a._v(" "),s("p",[a._v("Acceptable URI examples:")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"http://www.example.com/image.png"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// from Web")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"file:///mnt/sdcard/image.png"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// from SD card")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"file:///mnt/sdcard/video.mp4"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// from SD card (video thumbnail)")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"content://media/external/images/media/13"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// from content provider")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"content://media/external/video/media/13"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// from content provider (video thumbnail)")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"assets://image.png"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// from assets")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"drawable://"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("R")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("drawable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("img "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// from drawables (non-9patch images)")]),a._v("\n\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);