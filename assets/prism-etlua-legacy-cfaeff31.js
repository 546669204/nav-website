System.register(["./index-legacy-862727e1.js"],(function(e,t){"use strict";var n;return{setters:[e=>{n=e.g}],execute:function(){function t(e,t){for(var n=0;n<t.length;n++){const a=t[n];if("string"!=typeof a&&!Array.isArray(a))for(const t in a)if("default"!==t&&!(t in e)){const n=Object.getOwnPropertyDescriptor(a,t);n&&Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:()=>a[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var a,r,i={},o=(a||(a=1,(r=Prism).languages.etlua={delimiter:{pattern:/^<%[-=]?|-?%>$/,alias:"punctuation"},"language-lua":{pattern:/[\s\S]+/,inside:r.languages.lua}},r.hooks.add("before-tokenize",(function(e){r.languages["markup-templating"].buildPlaceholders(e,"etlua",/<%[\s\S]+?%>/g)})),r.hooks.add("after-tokenize",(function(e){r.languages["markup-templating"].tokenizePlaceholders(e,"etlua")}))),i);e("p",t({__proto__:null,default:n(o)},[o]))}}}));
