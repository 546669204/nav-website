import{g as c}from"./index-f29f4019.js";function l(o,a){for(var r=0;r<a.length;r++){const t=a[r];if(typeof t!="string"&&!Array.isArray(t)){for(const e in t)if(e!=="default"&&!(e in o)){const n=Object.getOwnPropertyDescriptor(t,e);n&&Object.defineProperty(o,e,n.get?n:{enumerable:!0,get:()=>t[e]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}var i={},p;function f(){return p||(p=1,Prism.languages.roboconf={comment:/#.*/,keyword:{pattern:/(^|\s)(?:(?:external|import)\b|(?:facet|instance of)(?=[ \t]+[\w-]+[ \t]*\{))/,lookbehind:!0},component:{pattern:/[\w-]+(?=[ \t]*\{)/,alias:"variable"},property:/[\w.-]+(?=[ \t]*:)/,value:{pattern:/(=[ \t]*(?![ \t]))[^,;]+/,lookbehind:!0,alias:"attr-value"},optional:{pattern:/\(optional\)/,alias:"builtin"},wildcard:{pattern:/(\.)\*/,lookbehind:!0,alias:"operator"},punctuation:/[{},.;:=]/}),i}var s=f();const u=c(s),m=l({__proto__:null,default:u},[s]);export{m as p};
