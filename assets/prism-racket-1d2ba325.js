import{g as c}from"./index-195b12f7.js";function m(t,n){for(var a=0;a<n.length;a++){const e=n[a];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(e,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var i={},o;function u(){return o||(o=1,Prism.languages.racket=Prism.languages.extend("scheme",{"lambda-parameter":{pattern:/([(\[]lambda\s+[(\[])[^()\[\]'\s]+/,lookbehind:!0}}),Prism.languages.insertBefore("racket","string",{lang:{pattern:/^#lang.+/m,greedy:!0,alias:"keyword"}}),Prism.languages.rkt=Prism.languages.racket),i}var g=u();const l=c(g),f=m({__proto__:null,default:l},[g]);export{f as p};
