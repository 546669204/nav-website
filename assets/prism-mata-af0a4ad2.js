import{g as u}from"./index-195b12f7.js";function p(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const s=Object.getOwnPropertyDescriptor(r,a);s&&Object.defineProperty(e,a,s.get?s:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var o={},i;function l(){return i||(i=1,function(e){var n=/\b(?:(?:col|row)?vector|matrix|scalar)\b/.source,t=/\bvoid\b|<org>|\b(?:complex|numeric|pointer(?:\s*\([^()]*\))?|real|string|(?:class|struct)\s+\w+|transmorphic)(?:\s*<org>)?/.source.replace(/<org>/g,n);e.languages.mata={comment:{pattern:/\/\/.*|\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\//,greedy:!0},string:{pattern:/"[^"\r\n]*"|[‘`']".*?"[’`']/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|struct)\s+)\w+(?=\s*(?:\{|\bextends\b))/,lookbehind:!0},type:{pattern:RegExp(t),alias:"class-name",inside:{punctuation:/[()]/,keyword:/\b(?:class|function|struct|void)\b/}},keyword:/\b(?:break|class|continue|do|else|end|extends|external|final|for|function|goto|if|pragma|private|protected|public|return|static|struct|unset|unused|version|virtual|while)\b/,constant:/\bNULL\b/,number:{pattern:/(^|[^\w.])(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|\d[a-f0-9]*(?:\.[a-f0-9]+)?x[+-]?\d+)i?(?![\w.])/i,lookbehind:!0},missing:{pattern:/(^|[^\w.])(?:\.[a-z]?)(?![\w.])/,lookbehind:!0,alias:"symbol"},function:/\b[a-z_]\w*(?=\s*\()/i,operator:/\.\.|\+\+|--|&&|\|\||:?(?:[!=<>]=|[+\-*/^<>&|:])|[!?=\\#’`']/,punctuation:/[()[\]{},;.]/}}(Prism)),o}var c=l();const d=u(c),m=p({__proto__:null,default:d},[c]);export{m as p};
