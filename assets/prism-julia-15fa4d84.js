import{g as s}from"./index-195b12f7.js";function p(t,i){for(var n=0;n<i.length;n++){const e=i[n];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const a=Object.getOwnPropertyDescriptor(e,r);a&&Object.defineProperty(t,r,a.get?a:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var o={},l;function c(){return l||(l=1,Prism.languages.julia={comment:{pattern:/(^|[^\\])(?:#=(?:[^#=]|=(?!#)|#(?!=)|#=(?:[^#=]|=(?!#)|#(?!=))*=#)*=#|#.*)/,lookbehind:!0},regex:{pattern:/r"(?:\\.|[^"\\\r\n])*"[imsx]{0,4}/,greedy:!0},string:{pattern:/"""[\s\S]+?"""|(?:\b\w+)?"(?:\\.|[^"\\\r\n])*"|`(?:[^\\`\r\n]|\\.)*`/,greedy:!0},char:{pattern:/(^|[^\w'])'(?:\\[^\r\n][^'\r\n]*|[^\\\r\n])'/,lookbehind:!0,greedy:!0},keyword:/\b(?:abstract|baremodule|begin|bitstype|break|catch|ccall|const|continue|do|else|elseif|end|export|finally|for|function|global|if|immutable|import|importall|in|let|local|macro|module|print|println|quote|return|struct|try|type|typealias|using|while)\b/,boolean:/\b(?:false|true)\b/,number:/(?:\b(?=\d)|\B(?=\.))(?:0[box])?(?:[\da-f]+(?:_[\da-f]+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[efp][+-]?\d+(?:_\d+)*)?j?/i,operator:/&&|\|\||[-+*^%÷⊻&$\\]=?|\/[\/=]?|!=?=?|\|[=>]?|<(?:<=?|[=:|])?|>(?:=|>>?=?)?|==?=?|[~≠≤≥'√∛]/,punctuation:/::?|[{}[\]();,.?]/,constant:/\b(?:(?:Inf|NaN)(?:16|32|64)?|im|pi)\b|[πℯ]/}),o}var u=c();const b=s(u),f=p({__proto__:null,default:b},[u]);export{f as p};
