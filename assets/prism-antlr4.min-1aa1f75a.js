import{g as u}from"./index-fa1c11f5.js";function p(e,i){for(var n=0;n<i.length;n++){const t=i[n];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in e)){const a=Object.getOwnPropertyDescriptor(t,r);a&&Object.defineProperty(e,r,a.get?a:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var s={},o;function c(){return o||(o=1,Prism.languages.antlr4={comment:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,string:{pattern:/'(?:\\.|[^\\'\r\n])*'/,greedy:!0},"character-class":{pattern:/\[(?:\\.|[^\\\]\r\n])*\]/,greedy:!0,alias:"regex",inside:{range:{pattern:/([^[]|(?:^|[^\\])(?:\\\\)*\\\[)-(?!\])/,lookbehind:!0,alias:"punctuation"},escape:/\\(?:u(?:[a-fA-F\d]{4}|\{[a-fA-F\d]+\})|[pP]\{[=\w-]+\}|[^\r\nupP])/,punctuation:/[\[\]]/}},action:{pattern:/\{(?:[^{}]|\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*\}/,greedy:!0,inside:{content:{pattern:/(\{)[\s\S]+(?=\})/,lookbehind:!0},punctuation:/[{}]/}},command:{pattern:/(->\s*(?!\s))(?:\s*(?:,\s*)?\b[a-z]\w*(?:\s*\([^()\r\n]*\))?)+(?=\s*;)/i,lookbehind:!0,inside:{function:/\b\w+(?=\s*(?:[,(]|$))/,punctuation:/[,()]/}},annotation:{pattern:/@\w+(?:::\w+)*/,alias:"keyword"},label:{pattern:/#[ \t]*\w+/,alias:"punctuation"},keyword:/\b(?:catch|channels|finally|fragment|grammar|import|lexer|locals|mode|options|parser|returns|throws|tokens)\b/,definition:[{pattern:/\b[a-z]\w*(?=\s*:)/,alias:["rule","class-name"]},{pattern:/\b[A-Z]\w*(?=\s*:)/,alias:["token","constant"]}],constant:/\b[A-Z][A-Z_]*\b/,operator:/\.\.|->|[|~]|[*+?]\??/,punctuation:/[;:()=]/},Prism.languages.g4=Prism.languages.antlr4),s}var l=c();const m=u(l),d=p({__proto__:null,default:m},[l]);export{d as p};
