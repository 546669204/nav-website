import{g as l}from"./index-2ced4dec.js";function p(e,s){for(var a=0;a<s.length;a++){const r=s[a];if(typeof r!="string"&&!Array.isArray(r)){for(const t in r)if(t!=="default"&&!(t in e)){const n=Object.getOwnPropertyDescriptor(r,t);n&&Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:()=>r[t]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var i={},o;function u(){return o||(o=1,function(e){e.languages.false={comment:{pattern:/\{[^}]*\}/},string:{pattern:/"[^"]*"/,greedy:!0},"character-code":{pattern:/'(?:[^\r]|\r\n?)/,alias:"number"},"assembler-code":{pattern:/\d+`/,alias:"important"},number:/\d+/,operator:/[-!#$%&'*+,./:;=>?@\\^_`|~ßø]/,punctuation:/\[|\]/,variable:/[a-z]/,"non-standard":{pattern:/[()<BDO®]/,alias:"bold"}}}(Prism)),i}var m=u();const c=l(m),d=p({__proto__:null,default:c},[m]);export{d as p};
