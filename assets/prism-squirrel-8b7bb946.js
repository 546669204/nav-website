import{g as l}from"./index-2ced4dec.js";function c(t,a){for(var n=0;n<a.length;n++){const e=a[n];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const i=Object.getOwnPropertyDescriptor(e,r);i&&Object.defineProperty(t,r,i.get?i:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var s={},o;function p(){return o||(o=1,Prism.languages.squirrel=Prism.languages.extend("clike",{comment:[Prism.languages.clike.comment[0],{pattern:/(^|[^\\:])(?:\/\/|#).*/,lookbehind:!0,greedy:!0}],string:{pattern:/(^|[^\\"'@])(?:@"(?:[^"]|"")*"(?!")|"(?:[^\\\r\n"]|\\.)*")/,lookbehind:!0,greedy:!0},"class-name":{pattern:/(\b(?:class|enum|extends|instanceof)\s+)\w+(?:\.\w+)*/,lookbehind:!0,inside:{punctuation:/\./}},keyword:/\b(?:__FILE__|__LINE__|base|break|case|catch|class|clone|const|constructor|continue|default|delete|else|enum|extends|for|foreach|function|if|in|instanceof|local|null|resume|return|static|switch|this|throw|try|typeof|while|yield)\b/,number:/\b(?:0x[0-9a-fA-F]+|\d+(?:\.(?:\d+|[eE][+-]?\d+))?)\b/,operator:/\+\+|--|<=>|<[-<]|>>>?|&&?|\|\|?|[-+*/%!=<>]=?|[~^]|::?/,punctuation:/[(){}\[\],;.]/}),Prism.languages.insertBefore("squirrel","string",{char:{pattern:/(^|[^\\"'])'(?:[^\\']|\\(?:[xuU][0-9a-fA-F]{0,8}|[\s\S]))'/,lookbehind:!0,greedy:!0}}),Prism.languages.insertBefore("squirrel","operator",{"attribute-punctuation":{pattern:/<\/|\/>/,alias:"important"},lambda:{pattern:/@(?=\()/,alias:"operator"}})),s}var u=p();const f=l(u),d=c({__proto__:null,default:f},[u]);export{d as p};
