import{g as p}from"./index-f29f4019.js";function u(t,s){for(var i=0;i<s.length;i++){const e=s[i];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const n=Object.getOwnPropertyDescriptor(e,r);n&&Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var a={},o;function b(){return o||(o=1,Prism.languages.rip={comment:{pattern:/#.*/,greedy:!0},char:{pattern:/\B`[^\s`'",.:;#\/\\()<>\[\]{}]\b/,greedy:!0},string:{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},regex:{pattern:/(^|[^/])\/(?!\/)(?:\[[^\n\r\]]*\]|\\.|[^/\\\r\n\[])+\/(?=\s*(?:$|[\r\n,.;})]))/,lookbehind:!0,greedy:!0},keyword:/(?:=>|->)|\b(?:case|catch|class|else|exit|finally|if|raise|return|switch|try)\b/,builtin:/@|\bSystem\b/,boolean:/\b(?:false|true)\b/,date:/\b\d{4}-\d{2}-\d{2}\b/,time:/\b\d{2}:\d{2}:\d{2}\b/,datetime:/\b\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\b/,symbol:/:[^\d\s`'",.:;#\/\\()<>\[\]{}][^\s`'",.:;#\/\\()<>\[\]{}]*/,number:/[+-]?\b(?:\d+\.\d+|\d+)\b/,punctuation:/(?:\.{2,3})|[`,.:;=\/\\()<>\[\]{}]/,reference:/[^\d\s`'",.:;#\/\\()<>\[\]{}][^\s`'",.:;#\/\\()<>\[\]{}]*/}),a}var d=b();const m=p(d),f=u({__proto__:null,default:m},[d]);export{f as p};
