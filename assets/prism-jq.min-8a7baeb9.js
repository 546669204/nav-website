import{g as u}from"./index-61a9391c.js";function l(n,i){for(var r=0;r<i.length;r++){const e=i[r];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in n)){const o=Object.getOwnPropertyDescriptor(e,t);o&&Object.defineProperty(n,t,o.get?o:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var a={},s;function d(){return s||(s=1,function(n){var i="\\\\\\((?:[^()]|\\([^()]*\\))*\\)",r=RegExp(`(^|[^\\\\])"(?:[^"\r
\\\\]|\\\\[^\r
(]|__)*"`.replace(/__/g,function(){return i})),e={interpolation:{pattern:RegExp("((?:^|[^\\\\])(?:\\\\{2})*)"+i),lookbehind:!0,inside:{content:{pattern:/^(\\\()[\s\S]+(?=\)$)/,lookbehind:!0,inside:null},punctuation:/^\\\(|\)$/}}},t=n.languages.jq={comment:/#.*/,property:{pattern:RegExp(r.source+"(?=\\s*:(?!:))"),lookbehind:!0,greedy:!0,inside:e},string:{pattern:r,lookbehind:!0,greedy:!0,inside:e},function:{pattern:/(\bdef\s+)[a-z_]\w+/i,lookbehind:!0},variable:/\B\$\w+/,"property-literal":{pattern:/\b[a-z_]\w*(?=\s*:(?!:))/i,alias:"property"},keyword:/\b(?:as|break|catch|def|elif|else|end|foreach|if|import|include|label|module|modulemeta|null|reduce|then|try|while)\b/,boolean:/\b(?:false|true)\b/,number:/(?:\b\d+\.|\B\.)?\b\d+(?:[eE][+-]?\d+)?\b/,operator:[{pattern:/\|=?/,alias:"pipe"},/\.\.|[!=<>]?=|\?\/\/|\/\/=?|[-+*/%]=?|[<>?]|\b(?:and|not|or)\b/],"c-style-function":{pattern:/\b[a-z_]\w*(?=\s*\()/i,alias:"function"},punctuation:/::|[()\[\]{},:;]|\.(?=\s*[\[\w$])/,dot:{pattern:/\./,alias:"important"}};e.interpolation.inside.content.inside=t}(Prism)),a}var p=d();const c=u(p),f=l({__proto__:null,default:c},[p]);export{f as p};
