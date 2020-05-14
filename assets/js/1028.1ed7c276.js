(window.webpackJsonp=window.webpackJsonp||[]).push([[1028],{1372:function(t,a,e){"use strict";e.r(a);var s=e(19),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"system-runtime-caching-memorycache-objectcache"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#system-runtime-caching-memorycache-objectcache"}},[t._v("#")]),t._v(" System.Runtime.Caching.MemoryCache (ObjectCache)")]),t._v(" "),e("h2",{attrs:{id:"adding-item-to-cache-set"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#adding-item-to-cache-set"}},[t._v("#")]),t._v(" Adding Item to Cache (Set)")]),t._v(" "),e("p",[t._v("Set function inserts a cache entry into the cache by using a CacheItem instance to supply the key and value for the cache entry.")]),t._v(" "),e("p",[t._v("This function Overrides "),e("code",[t._v("ObjectCache.Set(CacheItem, CacheItemPolicy)")])]),t._v(" "),e("div",{staticClass:"language-dotnet extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dotnet"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetToCache")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" key "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Cache_Key"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("value")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Cache_Value"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Get a reference to the default MemoryCache instance.")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" cacheContainer "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" MemoryCache"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Default"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\n    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" policy "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("CacheItemPolicy")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        AbsoluteExpiration "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" DateTimeOffset"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Now"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddMinutes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DEFAULT_CACHE_EXPIRATION_MINUTES"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" itemToCache "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("CacheItem")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Value is of type object.")]),t._v("\n     cacheContainer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Set")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("itemToCache"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" policy"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),e("h2",{attrs:{id:"system-runtime-caching-memorycache-objectcache-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#system-runtime-caching-memorycache-objectcache-2"}},[t._v("#")]),t._v(" System.Runtime.Caching.MemoryCache (ObjectCache)")]),t._v(" "),e("p",[t._v("This function gets existing item form cache, and if the item don't exist in cache, it will fetch item based on the valueFetchFactory function.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\n   public static TValue GetExistingOrAdd<TValue>(string key, double minutesForExpiration, Func<TValue> valueFetchFactory)\n    {            \n        try\n        {\n            //The Lazy class provides Lazy initialization which will evaluate \n            //the valueFetchFactory only if item is not in the cache.\n            var newValue = new Lazy<TValue>(valueFetchFactory);\n\n            //Setup the cache policy if item will be saved back to cache.\n            CacheItemPolicy policy = new CacheItemPolicy()\n            {\n                AbsoluteExpiration = DateTimeOffset.Now.AddMinutes(minutesForExpiration)\n            };\n\n            //returns existing item form cache or add the new value if it does not exist.\n            var cachedItem = _cacheContainer.AddOrGetExisting(key, newValue, policy) as Lazy<TValue>;\n\n            return (cachedItem ?? newValue).Value;\n        }\n        catch (Exception excep)\n        {\n            return default(TValue);\n        }\n    }\n\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);