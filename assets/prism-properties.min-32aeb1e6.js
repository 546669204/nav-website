import{g as m}from"./index-2ced4dec.js";function u(t,s){for(var i=0;i<s.length;i++){const r=s[i];if(typeof r!="string"&&!Array.isArray(r)){for(const e in r)if(e!=="default"&&!(e in t)){const n=Object.getOwnPropertyDescriptor(r,e);n&&Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:()=>r[e]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var o={},a;function f(){return a||(a=1,Prism.languages.properties={comment:/^[ \t]*[#!].*$/m,value:{pattern:/(^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+(?: *[=:] *(?! )| ))(?:\\(?:\r\n|[\s\S])|[^\\\r\n])+/m,lookbehind:!0,alias:"attr-value"},key:{pattern:/^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+(?= *[=:]| )/m,alias:"attr-name"},punctuation:/[=:]/}),o}var p=f();const l=m(p),g=u({__proto__:null,default:l},[p]);export{g as p};
