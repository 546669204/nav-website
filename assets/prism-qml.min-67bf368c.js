import{g as u}from"./index-b88d682c.js";function m(r,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const a in n)if(a!=="default"&&!(a in r)){const i=Object.getOwnPropertyDescriptor(n,a);i&&Object.defineProperty(r,a,i.get?i:{enumerable:!0,get:()=>n[a]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var o={},s;function c(){return s||(s=1,function(r){for(var e=`(?:[^\\\\()[\\]{}"'/]|<string>|/(?![*/])|<comment>|\\(<expr>*\\)|\\[<expr>*\\]|\\{<expr>*\\}|\\\\[^])`.replace(/<string>/g,function(){return`"(?:\\\\.|[^\\\\"\r
])*"|'(?:\\\\.|[^\\\\'\r
])*'`}).replace(/<comment>/g,function(){return"//.*(?!.)|/\\*(?:[^*]|\\*(?!/))*\\*/"}),t=0;t<2;t++)e=e.replace(/<expr>/g,function(){return e});e=e.replace(/<expr>/g,"[^\\s\\S]"),r.languages.qml={comment:{pattern:/\/\/.*|\/\*[\s\S]*?\*\//,greedy:!0},"javascript-function":{pattern:RegExp("((?:^|;)[ 	]*)function\\s+(?!\\s)[_$a-zA-Z\\xA0-\\uFFFF](?:(?!\\s)[$\\w\\xA0-\\uFFFF])*\\s*\\(<js>*\\)\\s*\\{<js>*\\}".replace(/<js>/g,function(){return e}),"m"),lookbehind:!0,greedy:!0,alias:"language-javascript",inside:r.languages.javascript},"class-name":{pattern:/((?:^|[:;])[ \t]*)(?!\d)\w+(?=[ \t]*\{|[ \t]+on\b)/m,lookbehind:!0},property:[{pattern:/((?:^|[;{])[ \t]*)(?!\d)\w+(?:\.\w+)*(?=[ \t]*:)/m,lookbehind:!0},{pattern:/((?:^|[;{])[ \t]*)property[ \t]+(?!\d)\w+(?:\.\w+)*[ \t]+(?!\d)\w+(?:\.\w+)*(?=[ \t]*:)/m,lookbehind:!0,inside:{keyword:/^property/,property:/\w+(?:\.\w+)*/}}],"javascript-expression":{pattern:RegExp("(:[ 	]*)(?![\\s;}[])(?:(?!$|[;}])<js>)+".replace(/<js>/g,function(){return e}),"m"),lookbehind:!0,greedy:!0,alias:"language-javascript",inside:r.languages.javascript},string:{pattern:/"(?:\\.|[^\\"\r\n])*"/,greedy:!0},keyword:/\b(?:as|import|on)\b/,punctuation:/[{}[\]:;,]/}}(Prism)),o}var p=c();const l=u(p),d=m({__proto__:null,default:l},[p]);export{d as p};
