import{g as p}from"./index-f29f4019.js";function u(r,e){for(var i=0;i<e.length;i++){const t=e[i];if(typeof t!="string"&&!Array.isArray(t)){for(const n in t)if(n!=="default"&&!(n in r)){const a=Object.getOwnPropertyDescriptor(t,n);a&&Object.defineProperty(r,n,a.get?a:{enumerable:!0,get:()=>t[n]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var o={},s;function c(){return s||(s=1,function(r){for(var e=`[^<()"']|\\((?:<expr>)*\\)|<(?!#--)|<#--(?:[^-]|-(?!->))*-->|"(?:[^\\\\"]|\\\\.)*"|'(?:[^\\\\']|\\\\.)*'`,i=0;i<2;i++)e=e.replace(/<expr>/g,function(){return e});e=e.replace(/<expr>/g,"[^\\s\\S]");var t={comment:/<#--[\s\S]*?-->/,string:[{pattern:/\br("|')(?:(?!\1)[^\\]|\\.)*\1/,greedy:!0},{pattern:RegExp(`("|')(?:(?!\\1|\\$\\{)[^\\\\]|\\\\.|\\$\\{(?:(?!\\})(?:<expr>))*\\})*\\1`.replace(/<expr>/g,function(){return e})),greedy:!0,inside:{interpolation:{pattern:RegExp("((?:^|[^\\\\])(?:\\\\\\\\)*)\\$\\{(?:(?!\\})(?:<expr>))*\\}".replace(/<expr>/g,function(){return e})),lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:null}}}}],keyword:/\b(?:as)\b/,boolean:/\b(?:false|true)\b/,"builtin-function":{pattern:/((?:^|[^?])\?\s*)\w+/,lookbehind:!0,alias:"function"},function:/\b\w+(?=\s*\()/,number:/\b\d+(?:\.\d+)?\b/,operator:/\.\.[<*!]?|->|--|\+\+|&&|\|\||\?{1,2}|[-+*/%!=<>]=?|\b(?:gt|gte|lt|lte)\b/,punctuation:/[,;.:()[\]{}]/};t.string[1].inside.interpolation.inside.rest=t,r.languages.ftl={"ftl-comment":{pattern:/^<#--[\s\S]*/,alias:"comment"},"ftl-directive":{pattern:/^<[\s\S]+>$/,inside:{directive:{pattern:/(^<\/?)[#@][a-z]\w*/i,lookbehind:!0,alias:"keyword"},punctuation:/^<\/?|\/?>$/,content:{pattern:/\s*\S[\s\S]*/,alias:"ftl",inside:t}}},"ftl-interpolation":{pattern:/^\$\{[\s\S]*\}$/,inside:{punctuation:/^\$\{|\}$/,content:{pattern:/\s*\S[\s\S]*/,alias:"ftl",inside:t}}}},r.hooks.add("before-tokenize",function(n){var a=RegExp("<#--[^]*?-->|</?[#@][a-zA-Z](?:<expr>)*?>|\\$\\{(?:<expr>)*?\\}".replace(/<expr>/g,function(){return e}),"gi");r.languages["markup-templating"].buildPlaceholders(n,"ftl",a)}),r.hooks.add("after-tokenize",function(n){r.languages["markup-templating"].tokenizePlaceholders(n,"ftl")})}(Prism)),o}var l=c();const f=p(l),g=u({__proto__:null,default:f},[l]);export{g as p};
