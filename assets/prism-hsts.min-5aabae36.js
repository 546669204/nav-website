import{g as m}from"./index-579abb6c.js";function u(t,n){for(var s=0;s<n.length;s++){const r=n[s];if(typeof r!="string"&&!Array.isArray(r)){for(const e in r)if(e!=="default"&&!(e in t)){const i=Object.getOwnPropertyDescriptor(r,e);i&&Object.defineProperty(t,e,i.get?i:{enumerable:!0,get:()=>r[e]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var o={},a;function c(){return a||(a=1,Prism.languages.hsts={directive:{pattern:/\b(?:includeSubDomains|max-age|preload)(?=[\s;=]|$)/i,alias:"property"},operator:/=/,punctuation:/;/}),o}var p=c();const f=m(p),g=u({__proto__:null,default:f},[p]);export{g as p};
