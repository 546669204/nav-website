import{g as l}from"./index-2ced4dec.js";function u(r,a){for(var n=0;n<a.length;n++){const e=a[n];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in r)){const i=Object.getOwnPropertyDescriptor(e,t);i&&Object.defineProperty(r,t,i.get?i:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var s={},o;function c(){return o||(o=1,Prism.languages.rescript={comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},char:{pattern:/'(?:[^\r\n\\]|\\(?:.|\w+))'/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,greedy:!0},"class-name":/\b[A-Z]\w*|@[a-z.]*|#[A-Za-z]\w*|#\d/,function:{pattern:/[a-zA-Z]\w*(?=\()|(\.)[a-z]\w*/,lookbehind:!0},number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,boolean:/\b(?:false|true)\b/,"attr-value":/[A-Za-z]\w*(?==)/,constant:{pattern:/(\btype\s+)[a-z]\w*/,lookbehind:!0},tag:{pattern:/(<)[a-z]\w*|(?:<\/)[a-z]\w*/,lookbehind:!0,inside:{operator:/<|>|\//}},keyword:/\b(?:and|as|assert|begin|bool|class|constraint|do|done|downto|else|end|exception|external|float|for|fun|function|if|in|include|inherit|initializer|int|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|string|switch|then|to|try|type|when|while|with)\b/,operator:/\.{3}|:[:=]?|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/,punctuation:/[(){}[\],;.]/},Prism.languages.insertBefore("rescript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"tag"},rest:Prism.languages.rescript}},string:/[\s\S]+/}}}),Prism.languages.res=Prism.languages.rescript),s}var p=c();const d=l(p),m=u({__proto__:null,default:d},[p]);export{m as p};
