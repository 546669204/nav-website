System.register(["./index-legacy-c8676207.js"],(function(e,t){"use strict";var n;return{setters:[e=>{n=e.g}],execute:function(){function t(e,t){for(var n=0;n<t.length;n++){const r=t[n];if("string"!=typeof r&&!Array.isArray(r))for(const t in r)if("default"!==t&&!(t in e)){const n=Object.getOwnPropertyDescriptor(r,t);n&&Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:()=>r[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var r,i={},a=(r||(r=1,function(e){for(var t="[^<()\"']|\\((?:<expr>)*\\)|<(?!#--)|<#--(?:[^-]|-(?!->))*--\x3e|\"(?:[^\\\\\"]|\\\\.)*\"|'(?:[^\\\\']|\\\\.)*'",n=0;n<2;n++)t=t.replace(/<expr>/g,(function(){return t}));t=t.replace(/<expr>/g,"[^\\s\\S]");var r={comment:/<#--[\s\S]*?-->/,string:[{pattern:/\br("|')(?:(?!\1)[^\\]|\\.)*\1/,greedy:!0},{pattern:RegExp("(\"|')(?:(?!\\1|\\$\\{)[^\\\\]|\\\\.|\\$\\{(?:(?!\\})(?:<expr>))*\\})*\\1".replace(/<expr>/g,(function(){return t}))),greedy:!0,inside:{interpolation:{pattern:RegExp("((?:^|[^\\\\])(?:\\\\\\\\)*)\\$\\{(?:(?!\\})(?:<expr>))*\\}".replace(/<expr>/g,(function(){return t}))),lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:null}}}}],keyword:/\b(?:as)\b/,boolean:/\b(?:false|true)\b/,"builtin-function":{pattern:/((?:^|[^?])\?\s*)\w+/,lookbehind:!0,alias:"function"},function:/\b\w+(?=\s*\()/,number:/\b\d+(?:\.\d+)?\b/,operator:/\.\.[<*!]?|->|--|\+\+|&&|\|\||\?{1,2}|[-+*/%!=<>]=?|\b(?:gt|gte|lt|lte)\b/,punctuation:/[,;.:()[\]{}]/};r.string[1].inside.interpolation.inside.rest=r,e.languages.ftl={"ftl-comment":{pattern:/^<#--[\s\S]*/,alias:"comment"},"ftl-directive":{pattern:/^<[\s\S]+>$/,inside:{directive:{pattern:/(^<\/?)[#@][a-z]\w*/i,lookbehind:!0,alias:"keyword"},punctuation:/^<\/?|\/?>$/,content:{pattern:/\s*\S[\s\S]*/,alias:"ftl",inside:r}}},"ftl-interpolation":{pattern:/^\$\{[\s\S]*\}$/,inside:{punctuation:/^\$\{|\}$/,content:{pattern:/\s*\S[\s\S]*/,alias:"ftl",inside:r}}}},e.hooks.add("before-tokenize",(function(n){var r=RegExp("<#--[^]*?--\x3e|</?[#@][a-zA-Z](?:<expr>)*?>|\\$\\{(?:<expr>)*?\\}".replace(/<expr>/g,(function(){return t})),"gi");e.languages["markup-templating"].buildPlaceholders(n,"ftl",r)})),e.hooks.add("after-tokenize",(function(t){e.languages["markup-templating"].tokenizePlaceholders(t,"ftl")}))}(Prism)),i);e("p",t({__proto__:null,default:n(a)},[a]))}}}));
