import{g as p}from"./index-b88d682c.js";function u(t,o){for(var n=0;n<o.length;n++){const e=o[n];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const a=Object.getOwnPropertyDescriptor(e,r);a&&Object.defineProperty(t,r,a.get?a:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var i={},s;function g(){return s||(s=1,Prism.languages.yang={comment:/\/\*[\s\S]*?\*\/|\/\/.*/,string:{pattern:/"(?:[^\\"]|\\.)*"|'[^']*'/,greedy:!0},keyword:{pattern:/(^|[{};\r\n][ \t]*)[a-z_][\w.-]*/i,lookbehind:!0},namespace:{pattern:/(\s)[a-z_][\w.-]*(?=:)/i,lookbehind:!0},boolean:/\b(?:false|true)\b/,operator:/\+/,punctuation:/[{};:]/}),i}var m=g();const f=p(m),l=u({__proto__:null,default:f},[m]);export{l as p};
