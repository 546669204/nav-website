import{g}from"./index-fde57fe3.js";function l(e,t){for(var r=0;r<t.length;r++){const a=t[r];if(typeof a!="string"&&!Array.isArray(a)){for(const n in a)if(n!=="default"&&!(n in e)){const s=Object.getOwnPropertyDescriptor(a,n);s&&Object.defineProperty(e,n,s.get?s:{enumerable:!0,get:()=>a[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var o={},i;function p(){return i||(i=1,function(e){e.languages.ejs={delimiter:{pattern:/^<%[-_=]?|[-_]?%>$/,alias:"punctuation"},comment:/^#[\s\S]*/,"language-javascript":{pattern:/[\s\S]+/,inside:e.languages.javascript}},e.hooks.add("before-tokenize",function(t){var r=/<%(?!%)[\s\S]+?%>/g;e.languages["markup-templating"].buildPlaceholders(t,"ejs",r)}),e.hooks.add("after-tokenize",function(t){e.languages["markup-templating"].tokenizePlaceholders(t,"ejs")}),e.languages.eta=e.languages.ejs}(Prism)),o}var u=p();const c=g(u),j=l({__proto__:null,default:c},[u]);export{j as p};
