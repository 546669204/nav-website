import{g as u}from"./index-2ced4dec.js";function f(r,o){for(var n=0;n<o.length;n++){const e=o[n];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in r)){const a=Object.getOwnPropertyDescriptor(e,t);a&&Object.defineProperty(r,t,a.get?a:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var s={},i;function g(){return i||(i=1,function(r){function o(a,c){r.languages[a]&&r.languages.insertBefore(a,"comment",{"doc-comment":c})}var n=r.languages.markup.tag,e={pattern:/\/\/\/.*/,greedy:!0,alias:"comment",inside:{tag:n}},t={pattern:/'''.*/,greedy:!0,alias:"comment",inside:{tag:n}};o("csharp",e),o("fsharp",e),o("vbnet",t)}(Prism)),s}var m=g();const l=u(m),d=f({__proto__:null,default:l},[m]);export{d as p};
