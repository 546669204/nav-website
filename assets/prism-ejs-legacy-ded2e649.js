System.register(["./index-legacy-bb604a6f.js"],(function(e,t){"use strict";var a;return{setters:[e=>{a=e.g}],execute:function(){function t(e,t){for(var a=0;a<t.length;a++){const n=t[a];if("string"!=typeof n&&!Array.isArray(n))for(const t in n)if("default"!==t&&!(t in e)){const a=Object.getOwnPropertyDescriptor(n,t);a&&Object.defineProperty(e,t,a.get?a:{enumerable:!0,get:()=>n[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var n,r,s={},i=(n||(n=1,(r=Prism).languages.ejs={delimiter:{pattern:/^<%[-_=]?|[-_]?%>$/,alias:"punctuation"},comment:/^#[\s\S]*/,"language-javascript":{pattern:/[\s\S]+/,inside:r.languages.javascript}},r.hooks.add("before-tokenize",(function(e){r.languages["markup-templating"].buildPlaceholders(e,"ejs",/<%(?!%)[\s\S]+?%>/g)})),r.hooks.add("after-tokenize",(function(e){r.languages["markup-templating"].tokenizePlaceholders(e,"ejs")})),r.languages.eta=r.languages.ejs),s);e("p",t({__proto__:null,default:a(i)},[i]))}}}));
