import{g as c}from"./index-b88d682c.js";function u(t,o){for(var i=0;i<o.length;i++){const r=o[i];if(typeof r!="string"&&!Array.isArray(r)){for(const e in r)if(e!=="default"&&!(e in t)){const n=Object.getOwnPropertyDescriptor(r,e);n&&Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:()=>r[e]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var a={},s;function m(){return s||(s=1,Prism.languages["linker-script"]={comment:{pattern:/(^|\s)\/\*[\s\S]*?(?:$|\*\/)/,lookbehind:!0,greedy:!0},identifier:{pattern:/"[^"\r\n]*"/,greedy:!0},"location-counter":{pattern:/\B\.\B/,alias:"important"},section:{pattern:/(^|[^\w*])\.\w+\b/,lookbehind:!0,alias:"keyword"},function:/\b[A-Z][A-Z_]*(?=\s*\()/,number:/\b(?:0[xX][a-fA-F0-9]+|\d+)[KM]?\b/,operator:/>>=?|<<=?|->|\+\+|--|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?/,punctuation:/[(){},;]/},Prism.languages.ld=Prism.languages["linker-script"]),a}var p=m();const l=c(p),g=u({__proto__:null,default:l},[p]);export{g as p};
