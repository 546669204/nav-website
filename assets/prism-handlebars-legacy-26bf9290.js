System.register(["./index-legacy-9ff5b9ae.js"],(function(e,a){"use strict";var t;return{setters:[e=>{t=e.g}],execute:function(){function a(e,a){for(var t=0;t<a.length;t++){const n=a[t];if("string"!=typeof n&&!Array.isArray(n))for(const a in n)if("default"!==a&&!(a in e)){const t=Object.getOwnPropertyDescriptor(n,a);t&&Object.defineProperty(e,a,t.get?t:{enumerable:!0,get:()=>n[a]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var n,r,s={},o=(n||(n=1,(r=Prism).languages.handlebars={comment:/\{\{![\s\S]*?\}\}/,delimiter:{pattern:/^\{\{\{?|\}\}\}?$/,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,boolean:/\b(?:false|true)\b/,block:{pattern:/^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\s\S]+/}},punctuation:/[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/},r.hooks.add("before-tokenize",(function(e){r.languages["markup-templating"].buildPlaceholders(e,"handlebars",/\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g)})),r.hooks.add("after-tokenize",(function(e){r.languages["markup-templating"].tokenizePlaceholders(e,"handlebars")})),r.languages.hbs=r.languages.handlebars,r.languages.mustache=r.languages.handlebars),s);e("p",a({__proto__:null,default:t(o)},[o]))}}}));
