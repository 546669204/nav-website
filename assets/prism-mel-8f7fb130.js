import{g as u}from"./index-fde57fe3.js";function p(r,i){for(var a=0;a<i.length;a++){const e=i[a];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in r)){const n=Object.getOwnPropertyDescriptor(e,t);n&&Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var o={},s;function c(){return s||(s=1,Prism.languages.mel={comment:{pattern:/\/\/.*|\/\*[\s\S]*?\*\//,greedy:!0},code:{pattern:/`(?:\\.|[^\\`])*`/,greedy:!0,alias:"italic",inside:{delimiter:{pattern:/^`|`$/,alias:"punctuation"},statement:{pattern:/[\s\S]+/,inside:null}}},string:{pattern:/"(?:\\.|[^\\"\r\n])*"/,greedy:!0},variable:/\$\w+/,number:/\b0x[\da-fA-F]+\b|\b\d+(?:\.\d*)?|\B\.\d+/,flag:{pattern:/-[^\d\W]\w*/,alias:"operator"},keyword:/\b(?:break|case|continue|default|do|else|float|for|global|if|in|int|matrix|proc|return|string|switch|vector|while)\b/,function:{pattern:/((?:^|[{;])[ \t]*)[a-z_]\w*\b(?!\s*(?:\.(?!\.)|[[{=]))|\b[a-z_]\w*(?=[ \t]*\()/im,lookbehind:!0,greedy:!0},"tensor-punctuation":{pattern:/<<|>>/,alias:"punctuation"},operator:/\+[+=]?|-[-=]?|&&|\|\||[<>]=?|[*\/!=]=?|[%^]/,punctuation:/[.,:;?\[\](){}]/},Prism.languages.mel.code.inside.statement.inside=Prism.languages.mel),o}var l=c();const d=u(l),g=p({__proto__:null,default:d},[l]);export{g as p};
