import{g as d}from"./index-195b12f7.js";function l(o,u){for(var t=0;t<u.length;t++){const e=u[t];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in o)){const n=Object.getOwnPropertyDescriptor(e,r);n&&Object.defineProperty(o,r,n.get?n:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}var a={},s;function p(){return s||(s=1,Prism.languages["go-mod"]=Prism.languages["go-module"]={comment:{pattern:/\/\/.*/,greedy:!0},version:{pattern:/(^|[\s()[\],])v\d+\.\d+\.\d+(?:[+-][-+.\w]*)?(?![^\s()[\],])/,lookbehind:!0,alias:"number"},"go-version":{pattern:/((?:^|\s)go\s+)\d+(?:\.\d+){1,2}/,lookbehind:!0,alias:"number"},keyword:{pattern:/^([ \t]*)(?:exclude|go|module|replace|require|retract)\b/m,lookbehind:!0},operator:/=>/,punctuation:/[()[\],]/}),a}var i=p();const m=d(i),c=l({__proto__:null,default:m},[i]);export{c as p};
