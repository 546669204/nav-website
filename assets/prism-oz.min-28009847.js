import{g as p}from"./index-2ced4dec.js";function u(t,i){for(var n=0;n<i.length;n++){const e=i[n];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const a=Object.getOwnPropertyDescriptor(e,r);a&&Object.defineProperty(t,r,a.get?a:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var o={},s;function c(){return s||(s=1,Prism.languages.oz={comment:{pattern:/\/\*[\s\S]*?\*\/|%.*/,greedy:!0},string:{pattern:/"(?:[^"\\]|\\[\s\S])*"/,greedy:!0},atom:{pattern:/'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,alias:"builtin"},keyword:/\$|\[\]|\b(?:_|at|attr|case|catch|choice|class|cond|declare|define|dis|else(?:case|if)?|end|export|fail|false|feat|finally|from|fun|functor|if|import|in|local|lock|meth|nil|not|of|or|prepare|proc|prop|raise|require|self|skip|then|thread|true|try|unit)\b/,function:[/\b[a-z][A-Za-z\d]*(?=\()/,{pattern:/(\{)[A-Z][A-Za-z\d]*\b/,lookbehind:!0}],number:/\b(?:0[bx][\da-f]+|\d+(?:\.\d*)?(?:e~?\d+)?)\b|&(?:[^\\]|\\(?:\d{3}|.))/i,variable:/`(?:[^`\\]|\\.)+`/,"attr-name":/\b\w+(?=[ \t]*:(?![:=]))/,operator:/:(?:=|::?)|<[-:=]?|=(?:=|<?:?)|>=?:?|\\=:?|!!?|[|#+\-*\/,~^@]|\b(?:andthen|div|mod|orelse)\b/,punctuation:/[\[\](){}.:;?]/}),o}var f=c();const d=p(f),m=u({__proto__:null,default:d},[f]);export{m as p};
