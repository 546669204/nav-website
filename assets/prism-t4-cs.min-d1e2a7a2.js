import{g as p}from"./index-3c48d087.js";function u(t,n){for(var s=0;s<n.length;s++){const r=n[s];if(typeof r!="string"&&!Array.isArray(r)){for(const e in r)if(e!=="default"&&!(e in t)){const i=Object.getOwnPropertyDescriptor(r,e);i&&Object.defineProperty(t,e,i.get?i:{enumerable:!0,get:()=>r[e]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var a={},o;function g(){return o||(o=1,Prism.languages.t4=Prism.languages["t4-cs"]=Prism.languages["t4-templating"].createT4("csharp")),a}var m=g();const c=p(m),l=u({__proto__:null,default:c},[m]);export{l as p};
