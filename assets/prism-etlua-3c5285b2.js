import{g as s}from"./index-f29f4019.js";function p(e,t){for(var a=0;a<t.length;a++){const r=t[a];if(typeof r!="string"&&!Array.isArray(r)){for(const n in r)if(n!=="default"&&!(n in e)){const o=Object.getOwnPropertyDescriptor(r,n);o&&Object.defineProperty(e,n,o.get?o:{enumerable:!0,get:()=>r[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var u={},l;function g(){return l||(l=1,function(e){e.languages.etlua={delimiter:{pattern:/^<%[-=]?|-?%>$/,alias:"punctuation"},"language-lua":{pattern:/[\s\S]+/,inside:e.languages.lua}},e.hooks.add("before-tokenize",function(t){var a=/<%[\s\S]+?%>/g;e.languages["markup-templating"].buildPlaceholders(t,"etlua",a)}),e.hooks.add("after-tokenize",function(t){e.languages["markup-templating"].tokenizePlaceholders(t,"etlua")})}(Prism)),u}var i=g();const f=s(i),d=p({__proto__:null,default:f},[i]);export{d as p};
