import{g as u}from"./index-579abb6c.js";function p(n,s){for(var i=0;i<s.length;i++){const e=s[i];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in n)){const t=Object.getOwnPropertyDescriptor(e,r);t&&Object.defineProperty(n,r,t.get?t:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var a={},o;function c(){return o||(o=1,Prism.languages.bison=Prism.languages.extend("c",{}),Prism.languages.insertBefore("bison","comment",{bison:{pattern:/^(?:[^%]|%(?!%))*%%[\s\S]*?%%/,inside:{c:{pattern:/%\{[\s\S]*?%\}|\{(?:\{[^}]*\}|[^{}])*\}/,inside:{delimiter:{pattern:/^%?\{|%?\}$/,alias:"punctuation"},"bison-variable":{pattern:/[$@](?:<[^\s>]+>)?[\w$]+/,alias:"variable",inside:{punctuation:/<|>/}},rest:Prism.languages.c}},comment:Prism.languages.c.comment,string:Prism.languages.c.string,property:/\S+(?=:)/,keyword:/%\w+/,number:{pattern:/(^|[^@])\b(?:0x[\da-f]+|\d+)/i,lookbehind:!0},punctuation:/%[%?]|[|:;\[\]<>]/}}})),a}var m=c();const g=u(m),f=p({__proto__:null,default:g},[m]);export{f as p};
