import{g as u}from"./index-27e991c2.js";function m(r,a){for(var n=0;n<a.length;n++){const e=a[n];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in r)){const i=Object.getOwnPropertyDescriptor(e,t);i&&Object.defineProperty(r,t,i.get?i:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var o={},s;function p(){return s||(s=1,Prism.languages.mel={comment:{pattern:/\/\/.*|\/\*[\s\S]*?\*\//,greedy:!0},code:{pattern:/`(?:\\.|[^\\`])*`/,greedy:!0,alias:"italic",inside:{delimiter:{pattern:/^`|`$/,alias:"punctuation"},statement:{pattern:/[\s\S]+/,inside:null}}},string:{pattern:/"(?:\\.|[^\\"\r\n])*"/,greedy:!0},variable:/\$\w+/,number:/\b0x[\da-fA-F]+\b|\b\d+(?:\.\d*)?|\B\.\d+/,flag:{pattern:/-[^\d\W]\w*/,alias:"operator"},keyword:/\b(?:break|case|continue|default|do|else|float|for|global|if|in|int|matrix|proc|return|string|switch|vector|while)\b/,function:{pattern:/((?:^|[{;])[ \t]*)[a-z_]\w*\b(?!\s*(?:\.(?!\.)|[[{=]))|\b[a-z_]\w*(?=[ \t]*\()/im,lookbehind:!0,greedy:!0},"tensor-punctuation":{pattern:/<<|>>/,alias:"punctuation"},operator:/\+[+=]?|-[-=]?|&&|\|\||[<>]=?|[*\/!=]=?|[%^]/,punctuation:/[.,:;?\[\](){}]/},Prism.languages.mel.code.inside.statement.inside=Prism.languages.mel),o}var l=p();const c=u(l),g=m({__proto__:null,default:c},[l]);export{g as p};
