import{g as u}from"./index-195b12f7.js";function g(r,i){for(var n=0;n<i.length;n++){const e=i[n];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in r)){const a=Object.getOwnPropertyDescriptor(e,t);a&&Object.defineProperty(r,t,a.get?a:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var o={},s;function p(){return s||(s=1,Prism.languages.gettext={comment:[{pattern:/# .*/,greedy:!0,alias:"translator-comment"},{pattern:/#\..*/,greedy:!0,alias:"extracted-comment"},{pattern:/#:.*/,greedy:!0,alias:"reference-comment"},{pattern:/#,.*/,greedy:!0,alias:"flag-comment"},{pattern:/#\|.*/,greedy:!0,alias:"previously-untranslated-comment"},{pattern:/#.*/,greedy:!0}],string:{pattern:/(^|[^\\])"(?:[^"\\]|\\.)*"/,lookbehind:!0,greedy:!0},keyword:/^msg(?:ctxt|id|id_plural|str)\b/m,number:/\b\d+\b/,punctuation:/[\[\]]/},Prism.languages.po=Prism.languages.gettext),o}var m=p();const l=u(m),d=g({__proto__:null,default:l},[m]);export{d as p};
