System.register(["./index-legacy-c8676207.js"],(function(e,t){"use strict";var n;return{setters:[e=>{n=e.g}],execute:function(){function t(e,t){for(var n=0;n<t.length;n++){const r=t[n];if("string"!=typeof r&&!Array.isArray(r))for(const t in r)if("default"!==t&&!(t in e)){const n=Object.getOwnPropertyDescriptor(r,t);n&&Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:()=>r[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var r,a={},i=(r||(r=1,Prism.languages.rescript={comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},char:{pattern:/'(?:[^\r\n\\]|\\(?:.|\w+))'/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,greedy:!0},"class-name":/\b[A-Z]\w*|@[a-z.]*|#[A-Za-z]\w*|#\d/,function:{pattern:/[a-zA-Z]\w*(?=\()|(\.)[a-z]\w*/,lookbehind:!0},number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,boolean:/\b(?:false|true)\b/,"attr-value":/[A-Za-z]\w*(?==)/,constant:{pattern:/(\btype\s+)[a-z]\w*/,lookbehind:!0},tag:{pattern:/(<)[a-z]\w*|(?:<\/)[a-z]\w*/,lookbehind:!0,inside:{operator:/<|>|\//}},keyword:/\b(?:and|as|assert|begin|bool|class|constraint|do|done|downto|else|end|exception|external|float|for|fun|function|if|in|include|inherit|initializer|int|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|string|switch|then|to|try|type|when|while|with)\b/,operator:/\.{3}|:[:=]?|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/,punctuation:/[(){}[\],;.]/},Prism.languages.insertBefore("rescript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"tag"},rest:Prism.languages.rescript}},string:/[\s\S]+/}}}),Prism.languages.res=Prism.languages.rescript),a);e("p",t({__proto__:null,default:n(i)},[i]))}}}));
