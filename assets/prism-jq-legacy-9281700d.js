System.register(["./index-legacy-bb604a6f.js"],(function(e,t){"use strict";var n;return{setters:[e=>{n=e.g}],execute:function(){function t(e,t){for(var n=0;n<t.length;n++){const r=t[n];if("string"!=typeof r&&!Array.isArray(r))for(const t in r)if("default"!==t&&!(t in e)){const n=Object.getOwnPropertyDescriptor(r,t);n&&Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:()=>r[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var r,o,i,a,l,s,u={},c=(r||(r=1,o=Prism,i=/\\\((?:[^()]|\([^()]*\))*\)/.source,a=RegExp(/(^|[^\\])"(?:[^"\r\n\\]|\\[^\r\n(]|__)*"/.source.replace(/__/g,(function(){return i}))),l={interpolation:{pattern:RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+i),lookbehind:!0,inside:{content:{pattern:/^(\\\()[\s\S]+(?=\)$)/,lookbehind:!0,inside:null},punctuation:/^\\\(|\)$/}}},s=o.languages.jq={comment:/#.*/,property:{pattern:RegExp(a.source+/(?=\s*:(?!:))/.source),lookbehind:!0,greedy:!0,inside:l},string:{pattern:a,lookbehind:!0,greedy:!0,inside:l},function:{pattern:/(\bdef\s+)[a-z_]\w+/i,lookbehind:!0},variable:/\B\$\w+/,"property-literal":{pattern:/\b[a-z_]\w*(?=\s*:(?!:))/i,alias:"property"},keyword:/\b(?:as|break|catch|def|elif|else|end|foreach|if|import|include|label|module|modulemeta|null|reduce|then|try|while)\b/,boolean:/\b(?:false|true)\b/,number:/(?:\b\d+\.|\B\.)?\b\d+(?:[eE][+-]?\d+)?\b/,operator:[{pattern:/\|=?/,alias:"pipe"},/\.\.|[!=<>]?=|\?\/\/|\/\/=?|[-+*/%]=?|[<>?]|\b(?:and|not|or)\b/],"c-style-function":{pattern:/\b[a-z_]\w*(?=\s*\()/i,alias:"function"},punctuation:/::|[()\[\]{},:;]|\.(?=\s*[\[\w$])/,dot:{pattern:/\./,alias:"important"}},l.interpolation.inside.content.inside=s),u);e("p",t({__proto__:null,default:n(c)},[c]))}}}));
