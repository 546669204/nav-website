import{g as m}from"./index-fa1c11f5.js";function g(r,o){for(var a=0;a<o.length;a++){const e=o[a];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in r)){const n=Object.getOwnPropertyDescriptor(e,t);n&&Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var s={},i;function p(){return i||(i=1,Prism.languages.gettext={comment:[{pattern:/# .*/,greedy:!0,alias:"translator-comment"},{pattern:/#\..*/,greedy:!0,alias:"extracted-comment"},{pattern:/#:.*/,greedy:!0,alias:"reference-comment"},{pattern:/#,.*/,greedy:!0,alias:"flag-comment"},{pattern:/#\|.*/,greedy:!0,alias:"previously-untranslated-comment"},{pattern:/#.*/,greedy:!0}],string:{pattern:/(^|[^\\])"(?:[^"\\]|\\.)*"/,lookbehind:!0,greedy:!0},keyword:/^msg(?:ctxt|id|id_plural|str)\b/m,number:/\b\d+\b/,punctuation:/[\[\]]/},Prism.languages.po=Prism.languages.gettext),s}var u=p();const l=m(u),d=g({__proto__:null,default:l},[u]);export{d as p};
