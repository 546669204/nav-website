import{g as u}from"./index-f29f4019.js";function g(r,n){for(var o=0;o<n.length;o++){const e=n[o];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in r)){const i=Object.getOwnPropertyDescriptor(e,t);i&&Object.defineProperty(r,t,i.get?i:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var a={},m;function l(){return m||(m=1,function(r){function n(i,c){r.languages[i]&&r.languages.insertBefore(i,"comment",{"doc-comment":c})}var o=r.languages.markup.tag,e={pattern:/\/\/\/.*/,greedy:!0,alias:"comment",inside:{tag:o}},t={pattern:/'''.*/,greedy:!0,alias:"comment",inside:{tag:o}};n("csharp",e),n("fsharp",e),n("vbnet",t)}(Prism)),a}var s=l();const p=u(s),d=g({__proto__:null,default:p},[s]);export{d as p};
