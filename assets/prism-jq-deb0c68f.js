import{g as u}from"./index-b88d682c.js";function l(n,o){for(var t=0;t<o.length;t++){const e=o[t];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in n)){const i=Object.getOwnPropertyDescriptor(e,r);i&&Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var a={},s;function c(){return s||(s=1,function(n){var o=/\\\((?:[^()]|\([^()]*\))*\)/.source,t=RegExp(/(^|[^\\])"(?:[^"\r\n\\]|\\[^\r\n(]|__)*"/.source.replace(/__/g,function(){return o})),e={interpolation:{pattern:RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+o),lookbehind:!0,inside:{content:{pattern:/^(\\\()[\s\S]+(?=\)$)/,lookbehind:!0,inside:null},punctuation:/^\\\(|\)$/}}},r=n.languages.jq={comment:/#.*/,property:{pattern:RegExp(t.source+/(?=\s*:(?!:))/.source),lookbehind:!0,greedy:!0,inside:e},string:{pattern:t,lookbehind:!0,greedy:!0,inside:e},function:{pattern:/(\bdef\s+)[a-z_]\w+/i,lookbehind:!0},variable:/\B\$\w+/,"property-literal":{pattern:/\b[a-z_]\w*(?=\s*:(?!:))/i,alias:"property"},keyword:/\b(?:as|break|catch|def|elif|else|end|foreach|if|import|include|label|module|modulemeta|null|reduce|then|try|while)\b/,boolean:/\b(?:false|true)\b/,number:/(?:\b\d+\.|\B\.)?\b\d+(?:[eE][+-]?\d+)?\b/,operator:[{pattern:/\|=?/,alias:"pipe"},/\.\.|[!=<>]?=|\?\/\/|\/\/=?|[-+*/%]=?|[<>?]|\b(?:and|not|or)\b/],"c-style-function":{pattern:/\b[a-z_]\w*(?=\s*\()/i,alias:"function"},punctuation:/::|[()\[\]{},:;]|\.(?=\s*[\[\w$])/,dot:{pattern:/\./,alias:"important"}};e.interpolation.inside.content.inside=r}(Prism)),a}var p=c();const d=u(p),f=l({__proto__:null,default:d},[p]);export{f as p};
