import{g}from"./index-2ced4dec.js";function l(e,r){for(var s=0;s<r.length;s++){const t=r[s];if(typeof t!="string"&&!Array.isArray(t)){for(const n in t)if(n!=="default"&&!(n in e)){const i=Object.getOwnPropertyDescriptor(t,n);i&&Object.defineProperty(e,n,i.get?i:{enumerable:!0,get:()=>t[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var a={},o;function m(){return o||(o=1,function(e){e.languages.ejs={delimiter:{pattern:/^<%[-_=]?|[-_]?%>$/,alias:"punctuation"},comment:/^#[\s\S]*/,"language-javascript":{pattern:/[\s\S]+/,inside:e.languages.javascript}},e.hooks.add("before-tokenize",function(r){e.languages["markup-templating"].buildPlaceholders(r,"ejs",/<%(?!%)[\s\S]+?%>/g)}),e.hooks.add("after-tokenize",function(r){e.languages["markup-templating"].tokenizePlaceholders(r,"ejs")}),e.languages.eta=e.languages.ejs}(Prism)),a}var u=m();const p=g(u),f=l({__proto__:null,default:p},[u]);export{f as p};
