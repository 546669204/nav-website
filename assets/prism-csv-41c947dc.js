import{g as p}from"./index-579abb6c.js";function f(t,n){for(var s=0;s<n.length;s++){const r=n[s];if(typeof r!="string"&&!Array.isArray(r)){for(const e in r)if(e!=="default"&&!(e in t)){const o=Object.getOwnPropertyDescriptor(r,e);o&&Object.defineProperty(t,e,o.get?o:{enumerable:!0,get:()=>r[e]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var i={},a;function c(){return a||(a=1,Prism.languages.csv={value:/[^\r\n,"]+|"(?:[^"]|"")*"(?!")/,punctuation:/,/}),i}var u=c();const m=p(u),g=f({__proto__:null,default:m},[u]);export{g as p};
