System.register(["./index-legacy-095e3488.js"],(function(e,t){"use strict";var r;return{setters:[e=>{r=e.g}],execute:function(){function t(e,t){for(var r=0;r<t.length;r++){const n=t[r];if("string"!=typeof n&&!Array.isArray(n))for(const t in n)if("default"!==t&&!(t in e)){const r=Object.getOwnPropertyDescriptor(n,t);r&&Object.defineProperty(e,t,r.get?r:{enumerable:!0,get:()=>n[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var n,s,o,a,i={},c=(n||(n=1,s=Prism,o=/\b(?:(?:col|row)?vector|matrix|scalar)\b/.source,a=/\bvoid\b|<org>|\b(?:complex|numeric|pointer(?:\s*\([^()]*\))?|real|string|(?:class|struct)\s+\w+|transmorphic)(?:\s*<org>)?/.source.replace(/<org>/g,o),s.languages.mata={comment:{pattern:/\/\/.*|\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\//,greedy:!0},string:{pattern:/"[^"\r\n]*"|[‘`']".*?"[’`']/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|struct)\s+)\w+(?=\s*(?:\{|\bextends\b))/,lookbehind:!0},type:{pattern:RegExp(a),alias:"class-name",inside:{punctuation:/[()]/,keyword:/\b(?:class|function|struct|void)\b/}},keyword:/\b(?:break|class|continue|do|else|end|extends|external|final|for|function|goto|if|pragma|private|protected|public|return|static|struct|unset|unused|version|virtual|while)\b/,constant:/\bNULL\b/,number:{pattern:/(^|[^\w.])(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|\d[a-f0-9]*(?:\.[a-f0-9]+)?x[+-]?\d+)i?(?![\w.])/i,lookbehind:!0},missing:{pattern:/(^|[^\w.])(?:\.[a-z]?)(?![\w.])/,lookbehind:!0,alias:"symbol"},function:/\b[a-z_]\w*(?=\s*\()/i,operator:/\.\.|\+\+|--|&&|\|\||:?(?:[!=<>]=|[+\-*/^<>&|:])|[!?=\\#’`']/,punctuation:/[()[\]{},;.]/}),i);e("p",t({__proto__:null,default:r(c)},[c]))}}}));
