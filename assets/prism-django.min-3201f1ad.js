import{g as l}from"./index-579abb6c.js";function d(n,t){for(var o=0;o<t.length;o++){const e=t[o];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in n)){const a=Object.getOwnPropertyDescriptor(e,r);a&&Object.defineProperty(n,r,a.get?a:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var i={},s;function g(){return s||(s=1,function(n){n.languages.django={comment:/^\{#[\s\S]*?#\}$/,tag:{pattern:/(^\{%[+-]?\s*)\w+/,lookbehind:!0,alias:"keyword"},delimiter:{pattern:/^\{[{%][+-]?|[+-]?[}%]\}$/,alias:"punctuation"},string:{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},filter:{pattern:/(\|)\w+/,lookbehind:!0,alias:"function"},test:{pattern:/(\bis\s+(?:not\s+)?)(?!not\b)\w+/,lookbehind:!0,alias:"function"},function:/\b[a-z_]\w+(?=\s*\()/i,keyword:/\b(?:and|as|by|else|for|if|import|in|is|loop|not|or|recursive|with|without)\b/,operator:/[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,number:/\b\d+(?:\.\d+)?\b/,boolean:/[Ff]alse|[Nn]one|[Tt]rue/,variable:/\b\w+\b/,punctuation:/[{}[\](),.:;]/};var t=/\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}|\{#[\s\S]*?#\}/g,o=n.languages["markup-templating"];n.hooks.add("before-tokenize",function(e){o.buildPlaceholders(e,"django",t)}),n.hooks.add("after-tokenize",function(e){o.tokenizePlaceholders(e,"django")}),n.languages.jinja2=n.languages.django,n.hooks.add("before-tokenize",function(e){o.buildPlaceholders(e,"jinja2",t)}),n.hooks.add("after-tokenize",function(e){o.tokenizePlaceholders(e,"jinja2")})}(Prism)),i}var u=g();const f=l(u),p=d({__proto__:null,default:f},[u]);export{p};
