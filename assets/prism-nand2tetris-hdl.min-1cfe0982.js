import{g as m}from"./index-3c48d087.js";function u(t,o){for(var n=0;n<o.length;n++){const r=o[n];if(typeof r!="string"&&!Array.isArray(r)){for(const e in r)if(e!=="default"&&!(e in t)){const i=Object.getOwnPropertyDescriptor(r,e);i&&Object.defineProperty(t,e,i.get?i:{enumerable:!0,get:()=>r[e]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var a={},s;function l(){return s||(s=1,Prism.languages["nand2tetris-hdl"]={comment:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,keyword:/\b(?:BUILTIN|CHIP|CLOCKED|IN|OUT|PARTS)\b/,boolean:/\b(?:false|true)\b/,function:/\b[A-Za-z][A-Za-z0-9]*(?=\()/,number:/\b\d+\b/,operator:/=|\.\./,punctuation:/[{}[\];(),:]/}),a}var d=l();const f=m(d),c=u({__proto__:null,default:f},[d]);export{c as p};
