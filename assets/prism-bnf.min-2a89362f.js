import{g as u}from"./index-27e991c2.js";function p(n,s){for(var t=0;t<s.length;t++){const r=s[t];if(typeof r!="string"&&!Array.isArray(r)){for(const e in r)if(e!=="default"&&!(e in n)){const i=Object.getOwnPropertyDescriptor(r,e);i&&Object.defineProperty(n,e,i.get?i:{enumerable:!0,get:()=>r[e]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var a={},o;function m(){return o||(o=1,Prism.languages.bnf={string:{pattern:/"[^\r\n"]*"|'[^\r\n']*'/},definition:{pattern:/<[^<>\r\n\t]+>(?=\s*::=)/,alias:["rule","keyword"],inside:{punctuation:/^<|>$/}},rule:{pattern:/<[^<>\r\n\t]+>/,inside:{punctuation:/^<|>$/}},operator:/::=|[|()[\]{}*+?]|\.{3}/},Prism.languages.rbnf=Prism.languages.bnf),a}var f=m();const g=u(f),c=p({__proto__:null,default:g},[f]);export{c as p};
