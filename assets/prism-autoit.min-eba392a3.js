import{g as l}from"./index-27e991c2.js";function m(r,o){for(var i=0;i<o.length;i++){const t=o[i];if(typeof t!="string"&&!Array.isArray(t)){for(const e in t)if(e!=="default"&&!(e in r)){const n=Object.getOwnPropertyDescriptor(t,e);n&&Object.defineProperty(r,e,n.get?n:{enumerable:!0,get:()=>t[e]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var a={},u;function c(){return u||(u=1,Prism.languages.autoit={comment:[/;.*/,{pattern:/(^[\t ]*)#(?:comments-start|cs)[\s\S]*?^[ \t]*#(?:ce|comments-end)/m,lookbehind:!0}],url:{pattern:/(^[\t ]*#include\s+)(?:<[^\r\n>]+>|"[^\r\n"]+")/m,lookbehind:!0},string:{pattern:/(["'])(?:\1\1|(?!\1)[^\r\n])*\1/,greedy:!0,inside:{variable:/([%$@])\w+\1/}},directive:{pattern:/(^[\t ]*)#[\w-]+/m,lookbehind:!0,alias:"keyword"},function:/\b\w+(?=\()/,variable:/[$@]\w+/,keyword:/\b(?:Case|Const|Continue(?:Case|Loop)|Default|Dim|Do|Else(?:If)?|End(?:Func|If|Select|Switch|With)|Enum|Exit(?:Loop)?|For|Func|Global|If|In|Local|Next|Null|ReDim|Select|Static|Step|Switch|Then|To|Until|Volatile|WEnd|While|With)\b/i,number:/\b(?:0x[\da-f]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/i,boolean:/\b(?:False|True)\b/i,operator:/<[=>]?|[-+*\/=&>]=?|[?^]|\b(?:And|Not|Or)\b/i,punctuation:/[\[\]().,:]/}),a}var s=c();const p=l(s),b=m({__proto__:null,default:p},[s]);export{b as p};
