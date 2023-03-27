import{g as u}from"./index-27e991c2.js";function m(r,n){for(var a=0;a<n.length;a++){const e=n[a];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in r)){const i=Object.getOwnPropertyDescriptor(e,t);i&&Object.defineProperty(r,t,i.get?i:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var s={},o;function p(){return o||(o=1,Prism.languages.stata={comment:[{pattern:/(^[ \t]*)\*.*/m,lookbehind:!0,greedy:!0},{pattern:/(^|\s)\/\/.*|\/\*[\s\S]*?\*\//,lookbehind:!0,greedy:!0}],"string-literal":{pattern:/"[^"\r\n]*"|[‘`']".*?"[’`']/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^{}]*\}|[‘`']\w[^’`'\r\n]*[’`']/,inside:{punctuation:/^\$\{|\}$/,expression:{pattern:/[\s\S]+/,inside:null}}},string:/[\s\S]+/}},mata:{pattern:/(^[ \t]*mata[ \t]*:)[\s\S]+?(?=^end\b)/m,lookbehind:!0,greedy:!0,alias:"language-mata",inside:Prism.languages.mata},java:{pattern:/(^[ \t]*java[ \t]*:)[\s\S]+?(?=^end\b)/m,lookbehind:!0,greedy:!0,alias:"language-java",inside:Prism.languages.java},python:{pattern:/(^[ \t]*python[ \t]*:)[\s\S]+?(?=^end\b)/m,lookbehind:!0,greedy:!0,alias:"language-python",inside:Prism.languages.python},command:{pattern:/(^[ \t]*(?:\.[ \t]+)?(?:(?:bayes|bootstrap|by|bysort|capture|collect|fmm|fp|frame|jackknife|mfp|mi|nestreg|noisily|permute|quietly|rolling|simulate|statsby|stepwise|svy|version|xi)\b[^:\r\n]*:[ \t]*|(?:capture|noisily|quietly|version)[ \t]+)?)[a-zA-Z]\w*/m,lookbehind:!0,greedy:!0,alias:"keyword"},variable:/\$\w+|[‘`']\w[^’`'\r\n]*[’`']/,keyword:/\b(?:bayes|bootstrap|by|bysort|capture|clear|collect|fmm|fp|frame|if|in|jackknife|mi[ \t]+estimate|mfp|nestreg|noisily|of|permute|quietly|rolling|simulate|sort|statsby|stepwise|svy|varlist|version|xi)\b/,boolean:/\b(?:off|on)\b/,number:/\b\d+(?:\.\d+)?\b|\B\.\d+/,function:/\b[a-z_]\w*(?=\()/i,operator:/\+\+|--|##?|[<>!=~]=?|[+\-*^&|/]/,punctuation:/[(){}[\],:]/},Prism.languages.stata["string-literal"].inside.interpolation.inside.expression.inside=Prism.languages.stata),s}var l=p();const g=u(l),b=m({__proto__:null,default:g},[l]);export{b as p};
