import{g as m}from"./index-fa1c11f5.js";function u(r,n){for(var i=0;i<n.length;i++){const t=n[i];if(typeof t!="string"&&!Array.isArray(t)){for(const e in t)if(e!=="default"&&!(e in r)){const o=Object.getOwnPropertyDescriptor(t,e);o&&Object.defineProperty(r,e,o.get?o:{enumerable:!0,get:()=>t[e]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var a={},s;function f(){return s||(s=1,Prism.languages.editorconfig={comment:/[;#].*/,section:{pattern:/(^[ \t]*)\[.+\]/m,lookbehind:!0,alias:"selector",inside:{regex:/\\\\[\[\]{},!?.*]/,operator:/[!?]|\.\.|\*{1,2}/,punctuation:/[\[\]{},]/}},key:{pattern:/(^[ \t]*)[^\s=]+(?=[ \t]*=)/m,lookbehind:!0,alias:"attr-name"},value:{pattern:/=.*/,alias:"attr-value",inside:{punctuation:/^=/}}}),a}var c=f();const p=m(c),l=u({__proto__:null,default:p},[c]);export{l as p};
