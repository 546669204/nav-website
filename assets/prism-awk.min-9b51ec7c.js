import{g as m}from"./index-3c48d087.js";function g(t,a){for(var n=0;n<a.length;n++){const e=a[n];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const i=Object.getOwnPropertyDescriptor(e,r);i&&Object.defineProperty(t,r,i.get?i:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var o={},s;function l(){return s||(s=1,Prism.languages.awk={hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},comment:{pattern:/#.*/,greedy:!0},string:{pattern:/(^|[^\\])"(?:[^\\"\r\n]|\\.)*"/,lookbehind:!0,greedy:!0},regex:{pattern:/((?:^|[^\w\s)])\s*)\/(?:[^\/\\\r\n]|\\.)*\//,lookbehind:!0,greedy:!0},variable:/\$\w+/,keyword:/\b(?:BEGIN|BEGINFILE|END|ENDFILE|break|case|continue|default|delete|do|else|exit|for|function|getline|if|in|next|nextfile|printf?|return|switch|while)\b|@(?:include|load)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/\b(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|0x[a-fA-F0-9]+)\b/,operator:/--|\+\+|!?~|>&|>>|<<|(?:\*\*|[<>!=+\-*/%^])=?|&&|\|[|&]|[?:]/,punctuation:/[()[\]{},;]/},Prism.languages.gawk=Prism.languages.awk),o}var u=l();const f=m(u),c=g({__proto__:null,default:f},[u]);export{c as p};
